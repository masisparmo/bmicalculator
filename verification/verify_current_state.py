from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load local index.html
        page.goto(f"file://{os.getcwd()}/index.html")

        # Target the Left Column container to ensure we capture everything
        # The structure is grid > div (left col)
        left_col = page.locator('.grid.grid-cols-1.md\:grid-cols-2 > div').first

        # Scroll to bottom of left col
        left_col.scroll_into_view_if_needed()

        # Verify Visibility of specific elements
        scanner = page.locator("text=Food Scanner AI")
        burn = page.locator("text=Hitung Kalori Terbakar")

        print(f"Scanner Visible: {scanner.is_visible()}")
        print(f"Burn Visible: {burn.is_visible()}")

        if not burn.is_visible():
             # Try to scroll page to bottom
             page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

        # Screenshot
        page.screenshot(path="verification/current_state.png", full_page=False, clip={
            "x": 0,
            "y": 0,
            "width": 600,
            "height": 1500
        })

        browser.close()

if __name__ == "__main__":
    run()
