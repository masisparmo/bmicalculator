from playwright.sync_api import sync_playwright, expect
import os

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1280, 'height': 800}
        )
        page = context.new_page()

        # Load the file
        cwd = os.getcwd()
        page.goto(f"file://{cwd}/panduan.html")
        print("Page loaded.")

        # Check for Title
        expect(page).to_have_title("Panduan Penggunaan - BMI Calculator PRO")
        print("PASS: Title correct.")

        # Check content presence
        expect(page.locator("h1")).to_contain_text("Panduan Penggunaan")
        expect(page.locator("h2", has_text="Halaman Utama")).to_be_visible()
        expect(page.locator("h2", has_text="Total Kalori")).to_be_visible()
        print("PASS: Main sections present.")

        # Check Navigation Link
        nav = page.locator("nav")
        expect(nav.locator("a", has_text="Beranda")).to_be_visible()
        expect(nav.locator("a", has_text="Pengetahuan")).to_be_visible()
        expect(nav.locator("a", has_text="Total Kalori")).to_be_visible()
        expect(nav.locator("a", has_text="Panduan")).to_be_visible()
        print("PASS: Navigation bar correct.")

        page.screenshot(path="verification/7_panduan_page.png")
        browser.close()

if __name__ == "__main__":
    run_verification()
