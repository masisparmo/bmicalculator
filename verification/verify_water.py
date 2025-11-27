
from playwright.sync_api import sync_playwright
import os

def verify_water_calculator():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local HTML file using absolute path
        file_path = f"file://{os.getcwd()}/index.html"
        print(f"Navigating to: {file_path}")
        page.goto(file_path)

        # Wait for the page to load
        page.wait_for_selector('h1', state='visible')

        print("Filling Form...")
        # Scenario 1: Young (25) -> Factor 35. Weight 70. Sport 0.
        # Expected: 70 * 35 = 2450 ml. ~9.8 glasses.
        page.fill('#age', '25')
        page.fill('#weight', '70')
        page.fill('#height', '170')

        # New Input check
        page.fill('#dailyExercise', '0')

        page.click("text=Hitung & Analisa")

        print("Waiting for Water Result...")
        try:
            # Check if water metric container exists and is visible
            # We added id="waterMetric" but innerHTML is injected.
            # The card has text "Kebutuhan Air Minum"
            page.wait_for_selector('text=Kebutuhan Air Minum', state='visible', timeout=5000)
            print("Water Result Visible.")

            # Verify Value
            content = page.locator('#waterMetric').text_content()
            print(f"Content: {content}")

            if "2450 ml" in content:
                print("SUCCESS: 2450 ml found correctly (Young Age Baseline).")
            else:
                print("FAILURE: 2450 ml NOT found.")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/water_fail.png")
            browser.close()
            return

        # Scenario 2: Old (>50) -> Factor 30. Weight 70. Sport 60 mins.
        # Expected: 70 * 30 = 2100.
        # Sport: (60 / 30) * 350 = 2 * 350 = 700.
        # Total: 2800 ml.

        print("Testing Scenario 2 (Old + Sport)...")
        page.fill('#age', '60')
        page.fill('#dailyExercise', '60') # 60 mins
        page.click("text=Hitung & Analisa")

        # Wait a bit for DOM update
        page.wait_for_timeout(500)

        content = page.locator('#waterMetric').text_content()
        print(f"Content 2: {content}")

        if "2800 ml" in content:
             print("SUCCESS: 2800 ml found correctly (Old + Sport).")
        else:
             print(f"FAILURE: 2800 ml NOT found. Found: {content}")

        page.screenshot(path="verification/water_calculator_verified.png")
        browser.close()

if __name__ == "__main__":
    verify_water_calculator()
