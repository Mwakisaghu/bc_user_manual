# Configuring Accounts Payable Charges
---

<div class="customized-intro-container" id="introduction">
    <p>When managing your company's finances, it's important to track additional purchase amounts beyond just the line items. Charges codes help you do this. For example, charges like freight and insurance can be itemized separately on a purchase order. This guide will walk you through configuring accounts payable charges in Dynamics 365 Finance. 🤗 </p>
</div>
---

### Configuring Accounts Payable Charges
---
### Set Up Charge Codes for Accounts Payable
---
To set up charge codes:

1. Go to **Accounts payable > Charges setup > Charges code**.
2. Click **New**.
3. In the **Charges code** field, type a code for the charge.
4. In the **Description** field, type a description of the charge.
5. Optionally, select a sales tax group in the **Item sales tax group** field.
6. Optionally, specify a maximum amount in the **Maximum amount** field.
7. On the **Posting FastTab**, specify how the charge is automatically debited and credited:
   - If you selected **Ledger account** as the debit or credit type, specify a posting type in the **Debit posting** and **Credit posting** fields, and specify the main account in the **Debit account** and **Credit account** fields.
8. Enable the **Compare purchase order and invoice values** option to compare charges on invoices with those on purchase orders.

### Create Charges Groups for Vendors
---
To create vendor charges groups:

1. Go to **Accounts payable > Charges setup > Vendor charges group**.
2. In the **Charges group** field, enter a code for the charges group.
3. In the **Description** field, enter a description of the charges group.
4. Close the page to save your changes.

### Create Item Charges Groups
---
To create item charges groups:

1. Go to **Accounts payable > Charges setup > Item charge groups**.
2. Click **New** to create an item charges group.
3. In the **Charges group** field, enter a code for the group.
4. In the **Description** field, enter a description for the group.
5. Close the page to save your changes.

By following these steps, you can effectively manage and configure accounts payable charges, ensuring accurate tracking and posting of additional purchase amounts in Dynamics 365 Finance.

---
