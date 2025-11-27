
from playwright.sync_api import sync_playwright
import os

def verify_pengetahuan_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load index.html
        index_path = f"file://{os.getcwd()}/index.html"
        print(f"Navigating to: {index_path}")
        page.goto(index_path)

        # Verify index has nav link
        page.wait_for_selector("text=Pengetahuan", state="visible")

        # Click link
        with page.expect_navigation():
            page.click("text=Pengetahuan")

        # Verify new page content
        page.wait_for_selector("h3", timeout=5000)
        content = page.content()

        if "Ensiklopedia Kesehatan" in content and "Mifflin-St Jeor" in content:
            print("SUCCESS: Knowledge base page loaded with correct content.")
        else:
            print("FAILURE: Content missing in Pengetahuan page.")

        # Take screenshot
        page.screenshot(path="verification/pengetahuan_page.png")

        browser.close()

if __name__ == "__main__":
    verify_pengetahuan_page()
