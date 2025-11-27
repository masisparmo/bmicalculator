from playwright.sync_api import sync_playwright
import os

def verify_chat_on_index():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load index.html
        cwd = os.getcwd()
        page.goto(f"file://{cwd}/index.html")

        # 1. Verify "Tanya Ahli" Button Exists on Index
        chat_btn = page.locator("#expertBtn")
        if chat_btn.is_visible():
            print("Index Chat Button: VISIBLE")
        else:
            print("Index Chat Button: NOT VISIBLE")
            return

        # 2. Verify it doesn't overlap with existing floating actions (Print/PDF)
        # Check visually via screenshot
        page.screenshot(path="verification/index_chat_layout.png")
        print("Screenshot saved: verification/index_chat_layout.png")

        # 3. Click button to open chat
        chat_btn.click()

        # 4. Verify Chat Window Opens
        chat_window = page.locator("#expertChatWindow")
        page.wait_for_timeout(500)

        if chat_window.is_visible():
            print("Index Chat Window: OPENED")
            page.screenshot(path="verification/index_chat_open.png")
        else:
            print("Index Chat Window: FAILED TO OPEN")
            return

        # 5. Check translations
        header_name = page.locator("[data-i18n='chat_header_status']")
        print(f"Header (ID): {header_name.inner_text()}")

        lang_btn = page.locator("#langToggle")
        lang_btn.click()

        print(f"Header (EN): {header_name.inner_text()}")

        browser.close()

if __name__ == "__main__":
    verify_chat_on_index()
