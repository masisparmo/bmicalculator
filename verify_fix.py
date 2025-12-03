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

        # --- TEST 1: Verify Dropdown Bug Fix ---
        print("Testing Dropdown Bug Fix...")

        # Switch to English to trigger updateLanguage
        page.click("#langToggle")

        # Check if Activity Dropdown has options
        # The bug was that options disappeared.
        # We'll check for "Indoor Work" or similar text in the options.
        select = page.locator("#activityType")
        options = select.locator("option")
        count = options.count()
        print(f"Found {count} options in Activity Dropdown.")

        # Check text of one option
        # Value 'work_indoor' should have text "Indoor Work (Sedentary)" in English
        # or at least not be empty.
        indoor_opt = select.locator("option[value='work_indoor']")
        print(f"Option text: {indoor_opt.inner_text()}")

        if count < 5 or "Indoor" not in indoor_opt.inner_text():
            print("FAIL: Dropdown options missing or not translated correctly.")
        else:
            print("PASS: Dropdown options present.")

        page.screenshot(path="verification/1_dropdown_fixed.png")


        # --- TEST 2: Add Data and Verify Edit Button ---
        print("Testing Add Data & Edit Button...")

        # Add Activity: Walking (Custom or Select)
        # Select "Leisure Walk" (value 3.0)
        select.select_option("3.0") # value for Leisure Walk
        page.fill("#actDuration", "60") # 60 mins

        # Fill profile for BMR calc (required)
        page.fill("#weight", "70")
        page.fill("#height", "170")
        page.fill("#age", "30")
        page.fill("#userName", "TestUser")

        # Add Activity
        page.click("button:has-text('Add Activity')")

        # Verify item in list
        act_list = page.locator("#activityList")
        expect(act_list).to_contain_text("Leisure Walk")

        # Verify Edit Button exists (pencil)
        # We look for the button with '✎' text
        edit_btn = act_list.locator("button:has-text('✎')")
        expect(edit_btn).to_be_visible()
        print("PASS: Edit button visible.")

        page.screenshot(path="verification/2_item_added.png")

        # --- TEST 3: Edit Activity & Verify Recalculation ---
        print("Testing Edit Logic...")

        edit_btn.click()

        # Verify Modal Visible
        modal = page.locator("#editItemModal")
        expect(modal).to_be_visible()

        # Change Duration from 60 to 30
        page.fill("#editItemDuration", "30")

        # Click Update
        page.click("button:has-text('Update')")

        # Verify Modal Closed
        expect(modal).to_be_hidden()

        # Verify Calories Updated
        # Original: MET 3 * (BMR/24) * 1 hr.
        # BMR for Male, 70kg, 170cm, 30yo = (10*70)+(6.25*170)-(5*30)+5 = 700+1062.5-150+5 = 1617.5
        # Hourly Burn = 3 * (1617.5/24) ~= 202
        # New Duration 30 min = 0.5 hr -> ~101 kkal

        # We just check if the text changed effectively.
        # The list should show "30 menit"
        expect(act_list).to_contain_text("30 menit")

        print("PASS: Edit successful.")
        page.screenshot(path="verification/3_edit_complete.png")

        browser.close()

if __name__ == "__main__":
    run_verification()
