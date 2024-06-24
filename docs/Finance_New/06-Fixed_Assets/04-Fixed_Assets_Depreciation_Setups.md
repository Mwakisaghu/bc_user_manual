# Set Up Fixed Asset Depreciation
---

<div class="customized-intro-container" id="introduction">
    <p>Depreciation books allow you to specify different ways to calculate depreciation for different types of fixed assets. Each depreciation book defines individual depreciation terms, which you can assign to one or more fixed assets.</p>
</div>
---

---
### To Create a Depreciation Book
---

1. **Open the Depreciation Books page:**
   - Choose the **Lightbulb** icon to open the Tell Me feature, enter **Depreciation Books**, and select the related link.
   
2. **Create a new depreciation book:**
   - On the Depreciation Books List page, choose the **New** action.
   - On the Depreciation Book Card page, fill in the fields as necessary. Hover over a field to read a short description.

   **Note:** You can record fixed asset transactions on the **Fixed Asset G/L Journal** page or the **Fixed Asset Journal** page. Define which type of journal is used by default on the Integration FastTab by selecting the check box for each fixed asset activity.

   **Important:** Use the **Use Rounding in Periodic Depr.** field to round calculated periodic depreciation amounts to whole numbers. This can help prevent errors when disposing of assets if your company's general ledger setup requires rounding.

---
### To Assign a Depreciation Book to a Fixed Asset
---

1. **Open the Fixed Assets page:**
   - Choose the **Lightbulb** icon, enter **Fixed Assets**, and select the related link.

2. **Select the fixed asset:**
   - Choose the fixed asset you want to set up a depreciation book for.

3. **Assign the depreciation book:**
   - On the Depreciation Book FastTab, fill in the fields as necessary.
   - To assign more than one depreciation book, choose the **Add More Depreciation Books** action or the **Depreciation Books** action to specify one or more fixed asset depreciation books.

   **Note:** When using the manual depreciation method, enter depreciation manually in the fixed asset G/L journal. The Calculate Depreciation function omits assets using the manual method. For assets not subject to depreciation, such as land, use the manual method.

---
### To Assign a Depreciation Book to Multiple Fixed Assets with a Batch Job
---

1. **Open the Fixed Assets page:**
   - Choose the **Lightbulb** icon, enter **Fixed Assets**, and select the related link.

2. **Select the fixed asset:**
   - Choose the fixed asset you want to assign a depreciation book to, and then choose the **Edit** action.

3. **Create fixed asset depreciation books:**
   - On the Depreciation Book Card page, choose the **Create FA Depreciation Books** action.
   - On the Create FA Depreciation Books page, fill in the **Depreciation Book** field.
   - Use the **Copy from FA No.** field to copy depreciation information from an existing fixed asset, or leave it blank to create new depreciation books with empty fields.
   - On the Fixed Asset FastTab, set a filter to select the assets for which you want to create depreciation books.
   - Choose the **OK** button.

---
### To Set Up Depreciation Posting Types
---

1. **Open the Depreciation Books page:**
   - Choose the **Lightbulb** icon, enter **Depreciation Books**, and select the related link.

2. **Select the depreciation book:**
   - Choose the depreciation book you want to set up, and then choose the **FA Posting Type Setup** action.

3. **Configure the posting types:**
   - On the FA Posting Type Setup page, fill in the fields as necessary.

   **Note:** You cannot insert or delete lines on the FA Posting Type Setup page. Modify the existing lines only. Avoid changing the setup for entries that have already been posted, as this will not affect past entries and could make statistics misleading.


---
### To Set Up Default Templates and Batches for Fixed Asset Depreciation
---

1. **Open the Depreciation Books page:**
   - Choose the **Lightbulb** icon, enter **Depreciation Books**, and select the related link.

2. **Define default journals:**
   - Select the depreciation book for which you want to define default journals, and then choose the **FA Journal Setup** action.
   - If needed, choose the **User ID** field to select a specific user from the Users page.
   - In the other fields, select the journal template or journal batch to be used by default.

### Fiscal Year 365 Days Field Depreciation
---

When the Calculate Depreciation batch job calculates depreciations, it normally uses a standardized year of 360 days. Selecting the **Fiscal Year 365 Days** field allows the batch job to use the calendar year of 365 days instead, treating all years, including leap years, as having 365 days. This setting helps align depreciation calculations with calendar years for more accurate financial reporting.

---
