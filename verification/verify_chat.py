import os
from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        # Get absolute path to totalkalori.html
        cwd = os.getcwd()
        file_path = f"file://{cwd}/totalkalori.html"

        print(f"Navigating to {file_path}")
        page.goto(file_path)

        # 1. Verify Button is present
        btn = page.locator("#expertBtn")
        expect(btn).to_be_visible()
        print("Expert Button is visible")

        # 2. Click Button to open chat
        btn.click()

        # 3. Verify Chat Window opens
        chat_window = page.locator("#expertChatWindow")
        expect(chat_window).to_be_visible()
        print("Chat Window is visible")

        # 4. Check if error message is shown (since no API Key initially)
        error_msg = page.locator("#chatApiError")
        expect(error_msg).to_be_visible()
        print("Error message for missing API key is visible")

        # Take screenshot 1: Open with Error
        page.screenshot(path="verification/chat_open_error.png")

        # 5. Close Chat
        btn.click()
        expect(chat_window).not_to_be_visible()
        print("Chat Window closed")

        # 6. Set API Key and Re-open
        page.evaluate("localStorage.setItem('geminiApiKey', 'dummy-key')")
        btn.click()
        expect(chat_window).to_be_visible()
        expect(error_msg).not_to_be_visible()
        print("Chat Window open without error")

        # Take screenshot 2: Open Ready
        page.screenshot(path="verification/chat_open_ready.png")

        browser.close()

if __name__ == "__main__":
    run()
