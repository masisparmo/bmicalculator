
from playwright.sync_api import sync_playwright
import os

def verify_burn_calculator():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Listen for console logs
        page.on("console", lambda msg: print(f"PAGE LOG: {msg.text}"))
        page.on("pageerror", lambda err: print(f"PAGE ERROR: {err}"))

        # Listen for alerts
        page.on("dialog", lambda dialog: print(f"PAGE ALERT: {dialog.message}") or dialog.accept())

        # Load the local HTML file using absolute path
        file_path = f"file://{os.getcwd()}/index.html"
        print(f"Navigating to: {file_path}")
        page.goto(file_path)

        # Wait for the page to load
        page.wait_for_selector('h1', state='visible')

        print("Filling BMI form...")
        # Fill in BMI data first (required for BMR)
        page.fill('#weight', '70')
        page.fill('#height', '170')
        page.fill('#age', '25')
        page.click("text=Hitung & Analisa")

        print("Waiting for BMI result...")
        try:
            page.wait_for_selector('#resultArea', state='visible', timeout=5000)
            print("BMI Result Area Visible.")
        except Exception as e:
            print(f"Error waiting for resultArea: {e}")

        # Now use the Burn Calculator
        print("Setting up Burn Calculator...")
        page.select_option('#sportType', '7.0')
        page.fill('#burnDuration', '30')

        print("Executing calculateBurn() directly...")
        page.evaluate("calculateBurn()")

        print("Waiting for Burn Result...")
        try:
            page.wait_for_selector('#burnResult', state='visible', timeout=5000)
            print("Burn Result Visible.")
        except Exception as e:
             # Capture screenshot if it fails
            page.screenshot(path="verification/burn_fail_debug.png")
            print(f"Error waiting for burnResult: {e}")
            browser.close()
            return

        # Take screenshot of the burn result area
        element = page.locator('#burnResult')
        element.screenshot(path="verification/burn_result_with_unit.png")

        # Verify text content
        content = element.text_content()
        print(f"Content found: {content}")

        if "kkal" in content:
            print("SUCCESS: 'kkal' unit found in result.")
        else:
            print("FAILURE: 'kkal' unit NOT found.")

        browser.close()

if __name__ == "__main__":
    verify_burn_calculator()
