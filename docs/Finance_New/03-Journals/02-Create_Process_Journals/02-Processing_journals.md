# Processing Journal Entries
---

### Journal Check
---

To maintain data accuracy and identify potential errors in your journal entries, Business Central offers the Journal Check feature:

- On the **General Journal Batch** page, enabling the **Background Error Check** field automatically displays the **Journal Check FactBox** on the journal page.

- The **Journal Check FactBox** highlights issues within the current line and the entire batch, such as empty amount fields or out-of-balance journal lines.

[ScreenShot]

- For detailed information on identified issues, you can select the **Issue Total** tile to open the **Error Messages** page.

[ScreenShot]

- To streamline the process, you can filter and focus on lines with issues by selecting **Page** and then **Show Lines with Issues**.

[ScreenShot]

---

### Preview Posting
---

Before finalizing journal entries, it's beneficial to preview the posting to understand their impact and reduce errors:

- In the **General Ledger Setup** page, you can specify the posting preview type as either **Standard** or **Extended**.

[ScreenShot]

- Standard provides an overview of entries grouped by type, while Extended displays details for G/L entries and VAT/tax entries.

- To run the Preview Posting report from the general journal, select **Post/Print** and then **Preview Posting**.

[ScreenShot]

- By enabling the hierarchical view, you can organize G/L entries and VAT entries for a clearer preview.

---

### Renumber Document Numbers
---

Maintaining the sequential order of document numbers is crucial for avoiding posting errors:

- In journals based on the general journal, the Document No. field is editable, allowing you to specify different document numbers for journal lines.

- Use the Renumber Document Numbers function to ensure sequential order before posting, especially if the journal batch has a number series.

- This function considers related applications, updating relevant fields such as Applies-to ID and Applies-to Doc. No. on affected ledger entries.

---

### Posting a General Journal
---

Once journal entries are ready, you can proceed with posting to update your financial records:

- Ensure the Total Balance field at the bottom of the General Journal page is zero and that journal lines are balanced by date.

- If the Force Doc. Balance field is selected in the controlling general journal template, ensure journal lines also balance by document number and type.

- To post the general journal, select **Post/Print** and then **Post** from the action menu.

- You can also post several general journal batches simultaneously by accessing the **General Journal Batches** page and selecting **Process** > **Post**.

---

By following these steps, you can effectively manage your journal entries in Business Central and maintain the accuracy and integrity of your financial records.

---
