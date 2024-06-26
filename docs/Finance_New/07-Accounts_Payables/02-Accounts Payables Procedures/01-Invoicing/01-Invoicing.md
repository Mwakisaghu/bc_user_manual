# Understanding Invoice Types in Accounts Payable
---
:::note Business Central
<div class="container">
    <div class="custom-note">
        <p>Dynamics 365 Finance provides extensive functionality for setting up various vendor payment options within the Accounts Payable and Accounts Receivable modules: Payment schedules, Payment days, Terms of payment, Cash discounts, Methods of payment and Payment fees🤗</p>
    </div>
</div>
:::
---

### Types of Invoices in Dynamics 365 Finance
---

1. **Invoice Register and Approval**
2. **Invoice Journal**
3. **Vendor Invoices**

Let's take a closer look at each type.

### Invoice Register
---

The Invoice Register journal is used to pre-register invoices when they arrive at the company and then transfer them to an invoice pool for approval. Here’s how it works:

1. **Register Invoice Information:**
   - **Vendor Account:** Identify the vendor.
   - **Invoice Number:** Assign a unique identifier.
   - **Amount:** Enter the invoice amount.
   - **Approver:** Specify the person who will approve the invoice.

2. **Validate and Post Journal:**
   - The same employee who registers the invoice validates and posts the journal to the accounts specified in the posting profile.
   - Typically, these are pending accounts where the amounts await manual approval and reclassification by the specified approver.

3. **Security:**
   - For security reasons, only one user at a time can enter lines in a journal.

4. **Posting the Journal:**
   - After entering all the invoice journal lines, click the **Post** button to post the invoice journal.
   - Navigate to **Accounts payable > Invoices > Invoice register** to access the Invoice Register page.

   <!-- ![Invoice Register Page](#) -->

5. **Posting Options:**
   - **Post and Transfer:** Post lines without errors and transfer lines with errors to a new journal.
   - **Post:** Post the selected lines. If any error exists, no lines are posted, and an error message is displayed.

6. **Transfer to Invoice Pool:**
   - When posting the journal lines, they are transferred to an invoice pool. From there, they can be transferred to an invoice approval journal.

---
### Invoice Journal
---

The Invoice Journal is used to register and approve invoices in a single step. This is typically used when the approval process is straightforward, and the same person can register and approve the invoice.

---
### Vendor Invoices
---

Vendor Invoices are used to register invoices directly from vendors. This type allows for detailed tracking and management of each invoice, making it suitable for larger companies with complex approval processes.

---
