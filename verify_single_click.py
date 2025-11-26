from playwright.sync_api import sync_playwright, expect
import os
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 800}) # Wider viewport to ensure PDF button is visible

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

        # Generate Report
        print("Clicking 'Buka Laporan Lengkap' button...")
        page.click('button[onclick="generateReport()"]')

        try:
            page.wait_for_selector('#reportModal:not(.hidden)', timeout=5000)
            print("SUCCESS: Report modal is visible.")
        except Exception as e:
            print(f"FAIL: Report modal did not open. {e}")
            page.screenshot(path="verify_single_click_fail.png")
            browser.close()
            return

        # Listen for the download event
        print("Testing single-click PDF download...")
        try:
            with page.expect_download(timeout=5000) as download_info:
                # Click the download button ONCE
                page.click('#btnPdf')

            download = download_info.value
            print(f"SUCCESS: Download started on first click!")
            print(f"Downloaded file name: {download.suggested_filename}")

        except Exception as e:
            print(f"FAIL: Download did not start on the first click. {e}")
            page.screenshot(path="verify_single_click_fail.png")

        browser.close()

if __name__ == "__main__":
    run()
