# Product Factory Setup
---
<div class="customized-intro-container" id="introduction">
    <p>Welcome to the Product Factory Setup guide! This section will help you configure the various credit products available in your system. These products include loans and savings products. Follow the steps below to access and configure the Product Factory Setup page.</p>
</div>
---
### Accessing Product Factory Setup
---

To access the ‘Product Factory Setup’ page:
1. **Search** for "Product Factory Setup" in Microsoft Dynamics Business Central.
2. Alternatively, navigate to **Credit Management** > **Setup** > **Product Factory Setup**.

---
### Types of Products
---

On the Product Factory page, you can set up two main types of products:
- **Loans**
- **Savings Products**

---
### Product Factory Page Ribbon
---

The Product Factory page ribbon consists of actions where additional information relevant to savings and loan products can be set up. These include:

---
### Related Product
---

- Select products that share features and affect eligibility for other products.
- Click **New** and select the related product.

### Loans to Bridge
---

- Maintain products that can be offset by the selected product in cases of loan top-up or bridging.
- Click **New** and select the product to bridge.

---
### Product Charges
---

- Define charges applicable to loan products during processing.
- Click **New** and select the charge code.
- If based on a flat amount, enter the charge amount, or select **Use Percentage** and enter the percentage.
- Select the charge type (e.g., General, External Loan, Top-Up).
- Specify the basis for percentage application (net amount or approved amount).
- Select the account to which the charged amount will be posted.
- Enter the minimum and maximum chargeable amounts.
- Input additional charges if reapplying for a loan within the minimum re-application period.
- Select whether to prorate appraisal fee or insurance.

---
### Product Application Document
---

- Displays required documents before a request can be approved.
- Set up at the Product Factory level and defaults on the application.

---
## General Fast Tab Configuration
---

### Key Fields to Configure
---

- **Product ID**: A unique identifier for each product. No two products can have the same Product ID.
- **Product Description**: A brief description of the product (e.g., Normal Loan, Share Deposits).
- **Product Class Type**: Distinguishes whether the product is a loan or a savings product.
- **Min. Customer Age**: Minimum age requirement for the product, formatted in terms of months (M), days (D), weeks (W), or years (Y).
- **Max. Customer Age**: Maximum age limit for the product, also formatted in terms of months (M), days (D), weeks (W), or years (Y).
- **Interest Rate (Min.)**: The minimum interest rate applicable.
- **Interest Rate (Max.)**: The maximum interest rate applicable.
- **Dormancy Period**: The period after which an account is considered dormant, formatted in months (M), days (D), weeks (W), or years (Y).
- **Account No. Prefix/Suffix**: Defines the format for account numbers, with prefixes or suffixes to distinguish different product types.
- **Statement Charge**: Charge applied when an account statement is printed.
- **Closure Fee**: Charge applied when an account is closed.
- **Status**: Indicates whether the product is active, open, or blocked.
- **Recovery Priority**: Determines the order in which products are settled during automated processes.
- **Search Code**: Used to map to external entities for easy data interpretation.

---
### Finance Tab Configuration
---

### Key Fields to Configure
---

- **Currency**: Select the currency for the product. If using the default currency, leave this field blank.
- **Product Posting Group**: Categorizes the product for reporting purposes.
- **Loan Account [G/L]**: Links to the general ledger loan accounts.
- **Loan Interest Account [G/L]**: Links to the general ledger interest income account.
- **Loan Interest Receivable Account [G/L]**: Links to the general ledger interest receivable account.
- **Suspended Interest [G/L]**: Links to the general ledger for posting suspended interest.
- **Loan Appraisal Income Account**: Account for loan appraisal income.

---
### Loan Products Configuration
---

### Key Fields to Configure
---

- **Maximum Guarantors**: Specifies the maximum number of guarantors required.
- **Minimum Guarantors**: Specifies the minimum number of guarantors required.
- **Minimum Guarantors on Max. Amt**: Number of guarantors required for amounts over a specified limit.
- **Max Amount on Guarantors**: Maximum amount requiring minimum guarantors.
- **Interest Calculation Method**: Method used for calculating interest (e.g., Amortized, Reducing Balance, Straight-line).
- **Min Re-Application Period**: Minimum period before reapplying for the product.
- **Minimum Loan Amount**: Minimum loan amount applicable.
- **Preferential Default Installments**: Default installments for preferential customers.
- **Repay Mode**: Default mode of repayment (e.g., Check-off, Dividend, Salary).
- **Does Not Require Batching**: Indicates if the loan can be disbursed without batching.
- **Net Salary Multiplier**: Determines the percentage of net salary available for loan servicing.
- **Grace Period (Interest/Principal)**: Grace period for interest or principal repayments, formatted in months (M), days (D), weeks (W), or years (Y).
- **Installment Repayment Interval**: Interval between repayments (e.g., monthly, quarterly).
- **Compute Interest Due on Posting**: Specifies how interest is computed upon posting.
- **Fixed Term Loan**: Indicates if the loan must be repaid over a fixed number of installments.
- **Ordinary Deposits Multiplier**: Multiplier for ordinary customer deposits.
- **Preferential Deposit Multiplier**: Multiplier for preferential customer deposits.
- **Repayment Frequency**: Frequency of repayments (e.g., Monthly, Yearly).
- **Loan Span**: Specifies whether the loan is short-term or long-term.
- **Nature of Loan Type**: Indicates if the loan is normal or for defaulters.
- **Type of Discounting**: Applicable for discounting products (e.g., Loan discounting, Invoice discounting).
- **Discounting %**: Discounting percentage for the net amount.
- **Computation %**: Percentage of business retained income used for loan servicing.
- **No. of Months for Appraisal Savings**: Number of months for analyzing statements for appraisal.
- **No. of Salary Times**: Number of times salary is expected to be processed for salary-based loans.
- **Salary Period**: Duration in months for salary-based loan scrutiny.
- **Maximum Deposit Contribution**: Maximum amount for contractual share contributions.
- **Minimum Deposit Contribution %**: Percentage of approved loan amount for contractual shares.
- **Minimum Deposit Balance**: Minimum deposit balance required before product access.
- **Source of Funds**: Specifies if the source is internal or external.
- **Source of Funds No.**: Institution account number offering the product.
- **Minimum Deposit Contribution**: Minimum contribution required for the product.
- **View Online**: Indicates if the product is accessible online.
- **Allow Multiple Running Loans**: Indicates if multiple loans of the same product are allowed.
- **Requires Salary Processing**: Indicates if salary processing is required before product access.
- **Mobile Loan**: Indicates if the product is accessible through mobile platforms.

---
### Savings Products Configuration
---

### Key Fields to Configure
---

- **Loan Disbursement Account**: Indicates if the account can be used for loan disbursements.
- **Product Category**: Categorizes savings products (e.g., Registration fees, Junior savings).
- **Auto Open Account**: Automatically opens accounts for new customers.
- **Allow Multiple Accounts**: Indicates if multiple accounts of the same product are allowed.
- **Minimum Contribution**: Minimum savings contribution required.
- **Minimum Balance**: Minimum account balance that must be maintained.
- **Notice Interval**: Specifies the notice period for withdrawals.
- **Maximum No. of Withdrawals**: Maximum number of withdrawals allowed.
- **Earns Interest**: Indicates if the account earns interest.
- **Interest Calculation Minimum Balance**: Minimum balance required to earn interest.
- **Interest Expense Account**: Links to the general ledger interest expense account.
- **Interest Payable Account**: Links to the general ledger interest payable account.
- **Dividend Calculation Method**: Method used for calculating dividends.
- **Withholding Tax Account**: Links to the general ledger withholding tax account.
- **Withholding Tax**: Percentage of withholding tax applicable on earned interest.
- **Allow Overdraft**: Indicates if the account can access overdrafts.
- **Credit Limit (Overdraft)**: Maximum overdraft amount allowed.
- **Automatic Overdraft**: Allows overdrawing the account without restrictions.
- **Overdraft Interest %**: Interest rate for overdraft amounts.
- **Overdraft Interest Account**: Links to the general ledger overdraft interest account.
- **Allow Multiple Overdrafts**: Indicates if multiple overdrafts are allowed.
- **Savings Duration**: Minimum savings duration required.
- **Savings Withdrawal Penalty**: Penalty applied for withdrawals before maturity.
- **Savings Account Penalty**: Links to the general ledger for savings withdrawal penalty.
