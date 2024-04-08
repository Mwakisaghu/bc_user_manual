---
sidebar_position: 3
---

# Treasury and Cashier Transactions
---

<div class="customized-intro-container" id="introduction">
    <h2 class="configuring-hr-setups"> Objective : </h2>
    <p>Welcome to the Treasury and Cashier Transactions User Manual for Microsoft Dynamics 365 Business Central. This guide is designed to walk you through various processes involved in managing treasury and cashier transactions efficiently within the system.</p>
</div>

---

In this manual, you will find detailed instructions for performing treasury and cashier transactions using Microsoft Dynamics 365 Business Central. From initiating teller requests to processing end-of-day returns to the treasury, each process is outlined step by step to ensure smooth and efficient financial operations.

---

## Teller Request
---

### Overview

The teller request process involves requesting funds through the Treasury Transaction, which then goes through an approval process.

:::note Prerequisites
---

Before initiating a teller request:
1. The teller must specify the amount to request.

:::


:::info Steps
---

1. **Log into Business Central.**
2. Navigate to **Banking Operations > Cashier and Transactions > Treasury and Cashier Transactions.**
3. Generate a **requisition form/card** and enter request details, including the account to request money from and the specified amount.
4. The treasury reviews the request.
5. If approved, debit the teller account and credit the treasury account.

:::

---

## Return to Treasury
---

### Overview
---

The return to treasury process allows a teller to initiate a request to return funds to the treasury for various reasons, such as policy compliance or end-of-day activities.

:::info Steps
---

1. Log into Business Central.
2. Navigate to Banking Operations > Cashier and Transactions > Treasury and Cashier Transactions.
3. Click on the "+" icon to create a new transaction and enter return details.
4. The cashier reviews the request.
5. If approved, the finance processes funds to the treasury.
---

:::note
---

Click on the Activities tab to manage workflow actions such as sending approval requests or canceling them.

:::

## Issue From Bank
---

### Overview
---

The issue from bank process involves the chief cashier initiating a request to the bank for funds, which could be for various purposes such as disbursement of loans or operational withdrawals.

:::info Steps
---

1. Chief cashier enters request details.
2. Finance reviews and approves the request.
3. If approved, the bank issues the requested amount to the treasury.

:::

---

## Return To Bank
---

### Overview
---

The return to bank process allows the treasury to initiate the return of funds to the bank, triggered by excess funds or loan repayments.

:::info Steps
---

1. Chief cashier enters return details.
2. Approvals are managed through the Activities tab.
3. If approved, finance processes funds to the bank.

:::

---

## InterTeller Transfers
---

### Overview
---

The interteller transfers process allows a teller to request a transfer, specifying the amount and relevant details.


:::note Prerequisites
---

1. Teller must specify the amount to request and the reason.
2. Teller has captured the correct transaction type (InterTeller Transfer).

:::

:::info Steps
---

1. Teller enters the request details.
2. Approvals are managed through the system.
3. If approved, debit Teller 1 till and credit Teller 2 till.

:::

---

## Branch Treasury Transactions
---

### Overview
---

The branch treasury transactions process involves handling financial transactions between different branches of the SACCO.

:::note Prerequisites
---

1. Treasury must specify the amount to request and the reason.
2. Treasury has captured the correct transaction type (Branch Treasury Transactions).

:::

:::info Steps
---

1. Branch 1 treasury enters request details.
2. Approvals are managed through the system.
3. If approved, debit Branch 1 Treasury Account and credit Branch 2 Treasury Account.

:::

## End of Day Return to Treasury
---

### Overview
---

The end-of-day return to treasury process involves reconciling and returning Teller’s End of the day till balance at the close of the business day.

:::note Prerequisites
---

1. Teller must specify the amount to request and the reason.
2. Teller has captured the correct transaction type (End of day return to treasury).

---

#### Steps
---

1. Teller initiates the process of return to the treasury at the end of the day.
2. The treasury receives the till balance from the teller.
3. The treasury’s account is credited with the specified amount.

---

:::

---


This user manual provides detailed instructions and steps for efficiently managing treasury and cashier transactions within the SACCO environment using Microsoft Dynamics 365 Business Central.

---