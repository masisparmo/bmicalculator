
import re

def clean_text(text):
    # This is the logic I plan to implement in JS
    # In JS: text.replace(/```html/g, '').replace(/```/g, '').trim()
    # Simulating in Python
    text = re.sub(r'```html', '', text)
    text = re.sub(r'```', '', text)
    return text.strip()

# Test case 1: The screenshot scenario
input_1 = """```html
Rencana Menu Makanan Sehat 7 Hari
<ul>
<li>Senin: ...</li>
</ul>
```"""

# Test case 2: Mixed
input_2 = """
Here is the plan:
```html
<b>Bold Text</b>
```
End of plan.
"""

print("--- Test 1 ---")
output_1 = clean_text(input_1)
print(f"Input:\n{input_1}")
print(f"Output:\n{output_1}")

expected_1 = """Rencana Menu Makanan Sehat 7 Hari
<ul>
<li>Senin: ...</li>
</ul>"""

if output_1 == expected_1:
    print("PASS")
else:
    print("FAIL")

print("\n--- Test 2 ---")
output_2 = clean_text(input_2)
print(f"Input:\n{input_2}")
print(f"Output:\n{output_2}")
