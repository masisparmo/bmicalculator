
from playwright.sync_api import sync_playwright
import os

def verify_pengetahuan_navigation():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Load index.html
        index_path = f"file://{os.getcwd()}/index.html"
        print(f"Navigating to: {index_path}")
        page.goto(index_path)

        # 2. Verify Navigation Bar exists
        nav = page.locator('nav')
        if nav.is_visible():
            print("SUCCESS: Navigation bar is visible on Home.")
        else:
            print("FAILURE: Navigation bar missing on Home.")

        # 3. Click 'Pengetahuan'
        print("Clicking 'Pengetahuan' link...")
        with page.expect_navigation():
            page.click("text=📚 Pengetahuan")

        # 4. Verify URL/Page Content
        title = page.title()
        print(f"New Page Title: {title}")

        # Check for specific content in pengetahuan.html
        if "Ensiklopedia Kesehatan" in page.content():
            print("SUCCESS: Navigated to Pengetahuan page.")
        else:
            print("FAILURE: Did not find expected content on Pengetahuan page.")

        # 5. Check Theme Persistence (Simulated)
        # Since we can't easily check localStorage across file:// navs in some contexts without server,
        # we'll check if the 'dark' class is respected if we toggle it before nav.
        # But file:// navigation might reset localstorage depending on browser profile isolation.
        # Playwright usually shares context in same page instance.

        # Let's try clicking back to Home
        print("Clicking 'Home' link...")
        with page.expect_navigation():
            page.click("text=🏠 Home")

        if "Hitung & Analisa" in page.content():
             print("SUCCESS: Navigated back to Home.")
        else:
             print("FAILURE: Did not return to Home.")

        browser.close()

if __name__ == "__main__":
    verify_pengetahuan_navigation()
