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

        # Set API Key
        page.evaluate("localStorage.setItem('geminiApiKey', 'dummy-key')")

        # Open chat
        btn = page.locator("#expertBtn")
        btn.click()

        # Send a message
        input_field = page.locator("#chatInput")
        input_field.fill("Halo!")

        send_btn = page.locator("#sendBtn")
        send_btn.click()

        # Wait for the message bubble to appear and stabilize
        page.locator("#chatMessages .bg-blue-600").last.wait_for()
        page.wait_for_timeout(500)

        # Take screenshot of the chat area specifically
        chat_area = page.locator("#expertChatWindow")
        chat_area.screenshot(path="verification/chat_fix_verified.png")

        browser.close()

if __name__ == "__main__":
    run()
