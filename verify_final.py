from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 414, 'height': 896})

        # Capture console logs
        page.on("console", lambda msg: print(f"Browser Console: {msg.text}"))

        cwd = os.getcwd()
        page.goto(f"file://{cwd}/index.html")

        # Fill form
        page.check('input[value="male"]')
        page.fill('#age', '30')
        page.fill('#weight', '70')
        page.fill('#height', '170')
        page.select_option('#activity', '1.2')

        # Calculate
        page.click('button[onclick="calculateBMI()"]')

        # Verify Tooltip structure in Result Area
        tooltip = page.locator('span:has-text("BMI SCORE") .invisible')
        if tooltip.count() > 0:
             print("PASS: Tooltip element detected.")
        else:
             print("FAIL: Tooltip element missing.")

        # Generate Report
        print("Clicking Generate Report...")
        page.click('button[onclick="generateReport()"]')

        try:
            page.wait_for_selector('#reportModal:not(.hidden)', timeout=5000)
            print("PASS: Report Modal Opened.")
        except:
            print("FAIL: Report Modal did not open. Taking debug screenshot.")
            page.screenshot(path="/home/jules/verification/debug_fail.png")
            browser.close()
            return

        # Check PDF Button
        pdf_btn = page.locator('#btnPdf')
        if pdf_btn.is_visible():
            print("PASS: PDF Button found.")
        else:
            print("FAIL: PDF Button not found.")

        # Check Close Button Icon
        close_btn_svg = page.locator('button[onclick="closeModal()"] svg')
        if close_btn_svg.count() > 0:
             print("PASS: Close Button has SVG icon.")
        else:
             print("FAIL: Close Button missing SVG.")

        page.screenshot(path="/home/jules/verification/verify_final.png")
        browser.close()

if __name__ == "__main__":
    run()
