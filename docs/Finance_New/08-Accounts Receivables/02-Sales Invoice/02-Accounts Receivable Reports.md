# Accounts Receivable Reports
---
:::note Business Central
<div class="container">
    <div class="custom-note">
        <p>Welcome to the Accounts Receivable Reports User Manual! This guide will help you understand and utilize key reports within Business Central to manage your accounts receivable effectively. 🤗</p>
    </div>
</div>
:::
---

### Accessing Receivable Reports
---

To access Receivable Reports in Business Central:
1. Navigate to the Navigation Pane.
2. Go to **Finance Role Center >> Reports**.

Here you will find various reports pertaining to receivables.

---

:::tip Under the report window, you will find the following tabs:

---
### Customer Fast Tab
---

- **No. Field:** Click the lookup arrow to open the customer list window and select the relevant customer details.
- **Customer Posting Group Field:** Select the customer posting group.
- **Currency Filter:** Use this field when dealing with other currencies.
- **Date Field:** Filter the date range.

---
### Option Fast Tab
---

- **Start Date Field:** Enter the beginning date for generating the report.
- **Period Length Field:** Specify the duration length (e.g., 1 month, 3 months, 1 year).
- **Show Amount in LCY:** Mark this field to display amounts in local currency.
:::

---

### Procedure to Generate Receivables Reports
---

1. Navigate to **Financial Management > Receivables > Reports**.
2. In the **Customer Fast Tab**:
    - **No. Field:** Click the lookup arrow and select the customer (Bill to Customer No).
    - **Customer Posting Group Field:** Click the lookup arrow and select the relevant posting group.
    - **Date Field:** Enter the date range (e.g., 15/03/2017..15/05/2017).
3. In the **Option Tab**:
    - **Start Date Field:** Enter the beginning date.
    - **Period Length Field:** Enter the duration length (e.g., 1 month, 3 months, 1 year).
    - **Show Amount in LCY:** Mark this field.
4. Click the **Preview** button to view the report or the **Print** button to print it.

---

## Key Reports in Accounts Receivable
---

- ### Aged Accounts Receivables
---

**Description:** This report provides a detailed breakdown of outstanding amounts with customers, categorized by overdue intervals. It includes both due and not yet due amounts and can be displayed with or without document details. This report is essential for reconciling customer ledgers to the General Ledger (G/L), assuming direct posting to customer posting group receivables accounts is not allowed.

---

- ### Customer Statement
---

**Description:** Generates a customer statement for a specified period. It provides an overview of outstanding amounts and can be used as a payment reminder. The report can show overdue amounts in a separate section and includes an aging band (typically set at 30-day intervals). You can filter the report to show only open entries for the customer by selecting the "Open Items" option in the Statement Style field.

---

- ### Customer - Balance to Date
---

**Description:** Displays open customer ledger entries up to the ending date. Similar to the customer statement but does not indicate if entries are overdue. Note that payments made after the ending date but applied to invoices within the date range will appear in the report.

---

- ### Customer - Trial Balance

**Description:** Shows net changes for customers within the specified date filter, including year-to-date changes for the fiscal year. The report is grouped by customer posting groups and provides a different perspective of the customer ledger compared to the Aged Accounts Receivables report. Ensure accounting periods are set up for accurate fiscal year data.

---

- ### Customer - Detail Trial Balance
---

**Description:** Lists all customer ledger entries within the specified date filter. This report is useful for verifying all entries for a specific customer or conducting internal checks on customer ledgers.

---

- ### Customer - Payment Receipt
---

**Description:** Generates a payment receipt for each customer ledger entry of type Payment. If payments are applied to invoices, the invoices are listed; otherwise, the payment amount is shown as unapplied. This report can be sent to customers who request payment receipt documentation.

---

- ### Customer - Summary Aging

**Description:** A legacy version of an accounts receivable aging report. It is recommended to use the Aged Accounts Receivables report instead.

---

By familiarizing yourself with these reports and procedures, you can better manage your accounts receivable, ensure accurate records, and improve financial oversight in Business Central. For more detailed procedures and additional features, refer to the relevant sections linked throughout this guide.

---
