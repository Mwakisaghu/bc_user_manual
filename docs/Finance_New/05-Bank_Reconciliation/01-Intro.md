# Reconciliation Process in Business Central
---

:::note Business Central
<div class="container">
    <div class="custom-note">
        <p>To reconcile bank accounts in Business Central with statements received from your bank, you must utilize the Bank Account Reconciliation page. This process allows you to compare open bank account ledger entries with transactions listed in bank statements, ensuring accuracy in financial records. 🤗</p>
    </div>
</div>
:::

---

### Reconciliation Process
---
### Understanding the Reconciliation Process
---

When running a reconciliation batch, Business Central generates reconciliation lines for each open bank account ledger entry. Matching these lines with bank statement transactions within the selected date range enables you to proceed with posting the reconciliation. Common discrepancies include:

- Transactions in Business Central not on the bank statement.
- Transactions on the bank statement not in Business Central.
- Matching transactions recorded differently between Business Central and the bank statement.

Addressing these differences is essential before finalizing the reconciliation.

---
### Manual Reconciliation
---

To manually reconcile bank accounts with bank statements, follow these steps:

1. **Access Bank Account Reconciliations**
    - Select the **Search for Page** icon in the top-right corner.
    - Enter **Bank Account Reconciliations** and select the related link.

2. **Create a New Reconciliation**
    - Select the **New** action.
    - Choose the bank account to reconcile and select **OK**.

3. **Fill in Required Fields on the General FastTab**
    - **Bank Account No.:** Bank account number for reconciliation.
    - **Statement No.:** Bank statement number.
    - **Statement Date:** Date of the bank statement.
    - **Balance Last Statement:** Ending balance from the last reconciled bank statement.
    - **Statement Ending Balance:** Ending balance from the current bank statement.

4. **Suggest Lines**
    - Select **Process** > **Suggest Lines** from the action menu.
    - Specify the period by entering the starting and ending dates to suggest all bank statement lines.

    <!-- ![Bank Account Reconciliation page](url-to-screenshot) -->

5. **Review Bank Statement Lines**
    - The **Bank Statement Lines** FastTab displays suggested lines automatically matched with open bank account ledger entries.

---
### Removing Transactions Not on the Bank Statement
---

To remove transactions recorded in Business Central but not on the bank statement:

1. Select **Show more options** > **Select More** on the **Bank Statement Lines** FastTab.
2. Choose entries to remove, then select **Show more options** > **Delete Line**.

This action removes application on the **Bank Account Ledger Entries** FastTab; non-reconciled entries will appear in the next reconciliation.

---
### Adding and Posting Bank Transactions
---

To add and post bank transactions not recorded in Business Central:

1. **Add Transactions Manually**
    - Insert a new line on the **Bank Statement Lines** FastTab.
    - Enter the **Transaction Date**.
    - Set **Type** to **Bank Account Ledger Entry**.
    - Enter a description and the **Statement Amount**.

2. **Transfer to General Journal**
    - Select **Process** > **Transfer to General Journal**.
    - Choose a general journal template and batch, then select **OK**.

    <!-- ![Trans. Bank Rec. to Gen. Jnl. popup page](url-to-screenshot) -->

    - This creates a general journal line for the statement amount; select an account type and number. The balancing account type is **Bank Account** with the reconciled bank account number.

---
### Handling Incorrect Transaction Amounts
---

If a bank statement shows an incorrect transaction amount:

1. **Identify and Mark the Incorrect Transaction**
    - Select the incorrect line on the **Bank Statement Lines** FastTab.
    - Choose **Difference** from the **Type** drop-down list.
    - Confirm deletion of the application with **Yes**.

2. **Adjust the Reconciliation**
    - If the **Total Difference** equals the sum of all **Difference** lines, post the reconciliation.
    - If not, correct the imbalance by adjusting the statement amount or adding a line for the difference.

To add a line for the difference:

1. **Create a New Line**
    - Insert a new line on the **Bank Statement Lines** FastTab.
    - Enter the **Transaction Date**.
    - Choose **Difference** from the **Type** drop-down list.
    - Enter a description and the **Statement Amount**.

These adjustments ensure accurate G/L bank account balances in Business Central.

---
