from playwright.sync_api import sync_playwright
import os

def verify_chat_feature():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local HTML file using absolute path
        cwd = os.getcwd()
        page.goto(f"file://{cwd}/pengetahuan.html")

        # 1. Verify "Tanya Ahli" Button Exists
        chat_btn = page.locator("#expertBtn")
        if chat_btn.is_visible():
            print("Chat Button: VISIBLE")
        else:
            print("Chat Button: NOT VISIBLE")
            return

        # 2. Click button to open chat
        chat_btn.click()

        # 3. Verify Chat Window Opens
        chat_window = page.locator("#expertChatWindow")
        # Wait a bit for transition
        page.wait_for_timeout(500)

        if chat_window.is_visible():
            print("Chat Window: OPENED")
            page.screenshot(path="verification/chat_open.png")
            print("Screenshot saved: verification/chat_open.png")
        else:
            print("Chat Window: FAILED TO OPEN")
            return

        # 4. Verify Welcome Message
        welcome_msg = page.locator("[data-i18n='chat_welcome']")
        if welcome_msg.is_visible():
            print("Welcome Message: VISIBLE")
            print(f"Text: {welcome_msg.inner_text()}")
        else:
            print("Welcome Message: NOT FOUND")

        # 5. Check Language Toggle effect on Chat Header
        # Default is ID
        header_name = page.locator("[data-i18n='chat_header_status']")
        print(f"Header (ID): {header_name.inner_text()}")

        # Switch to EN
        lang_btn = page.locator("#langToggle")
        lang_btn.click()

        # Verify text changed
        print(f"Header (EN): {header_name.inner_text()}")
        if "Expert" in header_name.inner_text() or "Sports" in header_name.inner_text():
             print("Language Toggle Check: PASS")
        else:
             print("Language Toggle Check: FAIL")

        browser.close()

if __name__ == "__main__":
    verify_chat_feature()
