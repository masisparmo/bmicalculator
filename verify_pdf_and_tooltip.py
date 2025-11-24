from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 414, 'height': 896})

        cwd = os.getcwd()
        page.goto(f"file://{cwd}/index.html")

        # Fill form to get to report
        page.check('input[value="male"]')
        page.fill('#age', '30')
        page.fill('#weight', '70')
        page.fill('#height', '170')
        page.select_option('#activity', '1.2')

        # Calculate
        page.click('button[onclick="calculateBMI()"]')

        # Screenshot Result Area showing Tooltips
        # Hover over BMI Score label to trigger tooltip
        # Note: Playwright hover works on elements.
        # "BMI SCORE" label is generated in calculateBMI -> resultValue.innerHTML

        # Wait for result area
        page.wait_for_selector('#resultArea:not(.hidden)')

        # Hover on "BMI SCORE" (using text locator)
        bmi_label = page.locator('span:has-text("BMI SCORE")')
        bmi_label.hover()

        # Take screenshot of Result Area with Tooltip
        page.locator('#resultArea').screenshot(path="/home/jules/verification/verify_tooltip.png")

        # Verify PDF Button exists in Report
        page.click('button[onclick="generateReport()"]')
        page.wait_for_selector('#reportModal:not(.hidden)')

        pdf_btn = page.locator('#btnPdf')
        if pdf_btn.is_visible():
            print("PASS: PDF Button found.")
        else:
            print("FAIL: PDF Button not found.")

        page.screenshot(path="/home/jules/verification/verify_pdf_btn.png")

        browser.close()

if __name__ == "__main__":
    run()
