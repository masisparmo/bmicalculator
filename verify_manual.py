from playwright.sync_api import sync_playwright, expect
import os

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1280, 'height': 800}
        )
        page = context.new_page()

        # Load the file
        cwd = os.getcwd()
        page.goto(f"file://{cwd}/totalkalori.html")
        print("Page loaded.")

        # Add profile for BMR
        page.fill("#weight", "70")
        page.fill("#height", "170")
        page.fill("#age", "30")
        page.fill("#userName", "TestUser")

        # Add Activity
        page.click("#langToggle") # Switch to EN for consistency
        select = page.locator("#activityType")
        select.select_option("3.0") # Leisure Walk
        page.fill("#actDuration", "60")
        page.click("button:has-text('Add Activity')")

        act_list = page.locator("#activityList")
        edit_btn = act_list.locator("button:has-text('✎')")
        edit_btn.click()

        # Verify Calories is editable
        cal_input = page.locator("#editItemCal")
        is_editable = cal_input.is_editable()
        print(f"Calorie Input Editable: {is_editable}")

        if not is_editable:
            print("FAIL: Calorie input is read-only.")
        else:
            print("PASS: Calorie input is editable.")

        # Test Manual Overwrite
        page.fill("#editItemCal", "500") # Manually set to 500
        page.click("button:has-text('Update')")

        # Check list for 500
        expect(act_list).to_contain_text("500 kkal")
        print("PASS: Manual override persisted.")

        page.screenshot(path="verification/4_manual_edit.png")
        browser.close()

if __name__ == "__main__":
    run_verification()
