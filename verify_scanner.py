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
        page.goto(f"file://{cwd}/totalkalori.html")
        print("Page loaded.")

        # Set Food Mode to Scanner
        page.click("#tabScan")
        expect(page.locator("#foodScanForm")).to_be_visible()
        print("PASS: Switch to AI Scanner Tab.")

        # Simulate upload (mocking or actual if possible, but here we just check UI presence)
        # We can't really test the API call success without a real key,
        # but we can verify the UI didn't break.
        expect(page.locator("#scanCamera")).to_be_hidden() # it's hidden input
        expect(page.locator("button:has-text('Ambil Foto')")).to_be_visible()

        print("PASS: UI Elements present.")

        page.screenshot(path="verification/5_scanner_ui.png")
        browser.close()

if __name__ == "__main__":
    run_verification()
