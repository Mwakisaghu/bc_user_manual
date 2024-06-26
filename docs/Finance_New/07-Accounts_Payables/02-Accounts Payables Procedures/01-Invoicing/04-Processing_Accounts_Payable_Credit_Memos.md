# Processing Accounts Payable Credit Memos
---
<div class="customized-intro-container" id="introduction">
    <p>Accounts payable credit memos are essential for adjusting invoices due to price changes, defects in received goods, or other discrepancies. This unit guides you through the process of creating and processing accounts payable credit memos in Dynamics 365 Finance.</p>
</div>
---

### Creating Accounts Payable Credit Memos
---

To create an accounts payable credit memo, you can use the Vendor invoice journal in Dynamics 365 Finance. Follow these steps:

1. Navigate to **Accounts payable > Invoices > Invoice journal**.
2. Select a journal name and optionally change the description.
3. Open the journal lines and enter the following required fields:

   - **Vendor:** The vendor account to debit.
   - **Invoice:** Reference to the original invoice, typically with a prefix or suffix indicating a credit memo.
   - **Debit:** Enter the amount of the credit memo.
   - **Offset Account Type:** Default is Ledger; specify the account to credit.

   <!-- ![Vendor Invoice Journal](#) -->

4. Optional fields you can specify include:
   - **Invoice Date:** Date of the credit memo (differs from the transaction date in the ledger).
   - **Description:** Reason for the credit.
   - **Reason Code and Reason Comment:** Predefined codes and comments for analysis.
   - **Sales Tax:** Enter tax settings if applicable.
   - **1099:** Enter 1099 settings if applicable.

   <!-- ![Vendor Invoice Page](#) -->

5. Ensure all information is accurately entered, noting that the fields mirror those of the original invoice but with the amount in the debit column instead of credit.

6. Validate and post the journal to complete the credit memo process.

:::note Note

- **Separate Journal:** While not mandatory, using a distinct journal name for credit memos is recommended for clarity in financial records.
- **Approval Processes:** Depending on your organization's policies, credit memo approval processes may vary from standard invoice approvals.
:::

---

Effectively managing accounts payable credit memos ensures accurate financial adjustments and maintains vendor relations in Dynamics 365 Finance.

---
