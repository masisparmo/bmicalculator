
import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Get absolute path to index.html
        absolute_path = os.path.abspath('index.html')

        await page.goto(f"file://{absolute_path}")

        # Fill the form
        await page.fill('#weight', '95')
        await page.fill('#height', '175')
        await page.fill('#age', '46')
        await page.fill('#waist', '110')
        await page.click('div[data-i18n="val_male"]') # Click the visible label div
        await page.select_option('#activity', '1.55')

        # Click calculate
        await page.click('button[data-i18n="btn_calc"]')
        await page.wait_for_selector('#resultArea:not(.hidden)')

        # Open report
        await page.click('button[onclick="generateReport()"]') # Correct selector

        # Correctly wait for the loading overlay to become hidden
        await page.wait_for_selector('#loadingOverlay', state='hidden', timeout=5000)

        # Ensure the modal is visible
        await page.wait_for_selector('#reportModal:not(.hidden)')

        # Inject styles to make the entire printable area visible for the screenshot
        await page.add_style_tag(content="""
            #reportModal {
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                height: auto !important;
                overflow: visible !important;
            }
        """)

        # Allow a brief moment for the layout to reflow with the new styles
        await page.wait_for_timeout(500)

        # Take screenshot of the printable area
        element = page.locator('#printableArea')
        screenshot_path = 'report_page_break_verify.png'
        await element.screenshot(path=screenshot_path)

        print(f"Screenshot saved to {screenshot_path}")

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
