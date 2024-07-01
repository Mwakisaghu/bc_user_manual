---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cashier Management

![Cashier Management.png](..%2F..%2Fstatic%2Fimg%2FCashier%20Management.png)

---

<div class="customized-intro-container" id="introduction">
    <h2 class="configuring-hr-setups"> Objective : </h2>
    <p>Welcome to the Cashier Management User Guide for Microsoft Dynamics 365 Business Central. This guide is your roadmap for efficiently navigating various cashier transactions within Business Central. From deposits to withdrawals and fund transfers, we'll walk you through each step with detailed instructions and prerequisites.</p>
</div>

---

## Cash Deposit

![cash Deposit.png](..%2F..%2Fstatic%2Fimg%2Fcash%20Deposit.png)

---

### Overview

This journey begins with depositing cash into member accounts through a Cashier Transaction.

:::tip Prerequisites
Before we begin, ensure the following:
- Member provides the amount and the saving account to be deposited.
:::

:::info To navigate to cashier management section, follow these steps:
---

- Start by accessing the navigation bar.
- From there, select **Cashier and Treasury Transactions.**
- Next, choose **Cashiers** from the dropdown menu.
- Now, click on **Cashier Transactions.**

:::

---


**Follow these steps to complete the deposit process:**

Begin the process by selecting the account and entering the deposit amount.
Verify if the selected account can receive the deposit.
If the account is eligible, credit the member's account and debit the cashier till accordingly.
Finally, generate a deposit slip to finalize the transaction.

**Upon successful completion of the transaction:**

> - The member's account will be credited with the deposited amount, while the cashier account will be debited.
- Print out the deposit slip containing essential details such as Account number, Member number, Member name, and Deposit amount.

---

## Cash Withdrawal

![cash Withdrawal.png](..%2F..%2Fstatic%2Fimg%2Fcash%20Withdrawal.png)

---

### Overview

Next, we proceed with withdrawing cash from member accounts through a Cashier Transaction.

:::tip Prerequisites
Before proceeding, ensure the following:
- Member specifies the amount and the saving account to be withdrawn.
- Cashier must have enough float.
:::

To access **Cash Withdrawal**, follow these steps:

- Start by accessing the navigation bar.
- From there, select **Cashier and Treasury Transactions.**
- Next, choose **Cashiers** from the dropdown menu.


**Follow these steps to complete the withdrawal process:**

- Begin the process by verifying withdrawal/signing mandates. 
- Then, select the account and enter the withdrawal amount.
- Verify if the selected account is eligible for withdrawal and if the account balance is sufficient.
- If the account meets the criteria, debit the member's account and credit the cashier till accordingly.
- Finally, generate a cheque and a withdrawal slip to finalize the transaction.

**Upon successful completion of the transaction:**

> - The member's account will be debited with the withdrawn amount, while the cashier account will be credited.
- Print out the withdrawal slip for record-keeping purposes.

---

## Credit Receipt

![credit receipt.png](..%2F..%2Fstatic%2Fimg%2Fcredit%20receipt.png)

---

### Overview

This journey involves allocating various amounts to various member accounts through a Cashier Transaction.

:::tip Prerequisites
Before proceeding, ensure the following:
- Member provides the amount and the saving accounts to be deposited.
- Cashier has captured the correct transaction type (Credit Receipt) and saving accounts.
:::

#### Steps:

1. Select the accounts and enter the deposit amount for each.
   - Check if the accounts can receive the deposit.
2. Credit member accounts and debit the cashier till to complete the journey.
3. Generate a deposit slip.
---

## Banker’s Cheque
---

### Overview

In this journey, users request a banker’s cheque through a Cashier Transaction.

:::tip Prerequisites
Before proceeding, ensure the following:
- Member provides the amount to withdraw.
- Cashier’s Till must have float.
:::

#### Steps:

1. Verify withdrawal/signing mandates.
2. Select the account and withdrawal amount.
   - Check if the account balance is enough.
3. Debit the member's account, credit the cashier till.
4. Generate a cheque and a withdrawal slip to complete the journey.

---

## Credit Cheque (Cheque Deposit)

![cheque deposit.png](..%2F..%2Fstatic%2Fimg%2Fcheque%20deposit.png)

---

### Overview

The final journey involves depositing money into member accounts using a Cheque through a Cashier Transaction.

:::tip Prerequisites
Before proceeding, ensure the following:
- Member provides the amount and the accounts to be deposited.
- Cashier has captured the correct transaction type (Credit Cheque) and the accounts.
:::

#### Steps:

1. Select the account and enter the deposit amount.
   - Check if the account can receive the deposit.
2. Credit members account, debit the cashier till to complete the journey.
3. Generate a deposit slip.

---

By following the steps outlined in this journey,you can effectively perform cashier transactions, supporting the financial operations of your organisation.

---
