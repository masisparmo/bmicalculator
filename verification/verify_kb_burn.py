from playwright.sync_api import sync_playwright
import os

def verify_burn_calculator_knowledge():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local HTML file using absolute path
        cwd = os.getcwd()
        page.goto(f"file://{cwd}/pengetahuan.html")

        # Check if the "Calorie Burn" section exists
        burn_section = page.locator("#burn")
        if burn_section.count() > 0:
            print("Burn section found.")

            # Scroll to the section
            burn_section.scroll_into_view_if_needed()

            # Take a screenshot
            page.screenshot(path="verification/burn_section.png")
            print("Screenshot saved to verification/burn_section.png")

            # Verify specific text
            content = burn_section.inner_text()
            if "Hitung Kalori Terbakar" in content:
                print("Title verification: PASS")
            else:
                print("Title verification: FAIL")

            if "Kalori = MET" in content:
                print("Formula verification: PASS")
            else:
                print("Formula verification: FAIL")
        else:
            print("Burn section NOT found.")

        browser.close()

if __name__ == "__main__":
    verify_burn_calculator_knowledge()
