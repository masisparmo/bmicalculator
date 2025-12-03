from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Verify index.html
        current_dir = os.getcwd()
        file_path = f"file://{current_dir}/index.html"
        page.goto(file_path)

        # Check for favicon link
        favicon = page.locator('link[rel="icon"]')
        count = favicon.count()
        print(f"Favicon count on index.html: {count}")
        if count > 0:
            href = favicon.get_attribute("href")
            print(f"Favicon href: {href}")
            if href == "favicon-32x32.png":
                print("SUCCESS: Favicon found in index.html")
            else:
                print("FAILURE: Favicon href incorrect")
        else:
            print("FAILURE: No favicon link found in index.html")

        # Verify totalkalori.html
        file_path = f"file://{current_dir}/totalkalori.html"
        page.goto(file_path)
        favicon = page.locator('link[rel="icon"]')
        if favicon.count() > 0:
             print("SUCCESS: Favicon found in totalkalori.html")
        else:
             print("FAILURE: Favicon missing in totalkalori.html")

        # Verify pengetahuan.html
        file_path = f"file://{current_dir}/pengetahuan.html"
        page.goto(file_path)
        favicon = page.locator('link[rel="icon"]')
        if favicon.count() > 0:
             print("SUCCESS: Favicon found in pengetahuan.html")
        else:
             print("FAILURE: Favicon missing in pengetahuan.html")

        browser.close()

if __name__ == "__main__":
    run()
