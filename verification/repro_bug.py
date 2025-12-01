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
        input_field.fill("Test Message")

        send_btn = page.locator("#sendBtn")
        send_btn.click()

        # Check the user message bubble (last .bg-blue-600)
        # We need to wait for it to appear
        user_message_bubble = page.locator("#chatMessages .bg-blue-600").last
        expect(user_message_bubble).to_be_visible()

        content = user_message_bubble.inner_text()
        print(f"Message content found: '{content}'")

        # Assert bug exists (should contain literal ${text})
        if "${text}" in content:
            print("BUG REPRODUCED: Literal '${text}' found in message bubble.")
        else:
            print("BUG NOT REPRODUCED: Literal '${text}' NOT found.")
            # If we expected to reproduce it and didn't, maybe verify what WAS found
            if "Test Message" in content:
                print("It seems to be working correctly already?")
            else:
                print("Unknown state.")

        browser.close()

if __name__ == "__main__":
    run()
