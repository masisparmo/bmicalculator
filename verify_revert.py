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

        # Verify Model (Indirectly)
        # We can't really verify the model version without intercepting the network request.
        # But we can verify the code has 'gemini-2.5-flash' in it via file read.

        with open(f"{cwd}/totalkalori.html", "r") as f:
            content = f.read()
            if "gemini-2.5-flash" in content:
                 print("PASS: Source code uses gemini-2.5-flash.")
            else:
                 print("FAIL: Source code does not use gemini-2.5-flash.")

            if "text.match(/\{[\s\S]*\}/)" in content:
                 print("PASS: Regex parsing logic present.")
            else:
                 print("FAIL: Regex parsing logic missing.")

        page.screenshot(path="verification/6_scanner_source_check.png")
        browser.close()

if __name__ == "__main__":
    run_verification()
