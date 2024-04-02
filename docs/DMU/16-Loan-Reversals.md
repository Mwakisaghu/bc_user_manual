---
sidebar_position: 7
---

import TransparentDiv from '../../components/HomepageFeatures/TransparentDiv.js';

# Loan Reversal Guide
---

<div class="customized-intro-container" id="introduction">
    <p>
The reversal of attached loans is a crucial process in debt management, allowing for the correction of loan attachments and refunds. This process ensures proper handling of loan reversals and associated transactions.
    </p>
</div>

---

## Accessing Loan Reversal
---

:::info Navigate
**Login to Business Central:** Use your credentials to log in to your Business Central account.

**Navigate to Debt Management Unit:** Once logged in, go to the **Loan Activity** section.
   - If dealing with new recoveries, select **New System Recoveries**; if old recoveries, choose **Old System Recoveries**.
   - From the list of options, select **Loan Reversal**.

:::

## Raising Reversal Cases
---
- Users navigate to the Reversals section to initiate a new reversal case.

:::info Navigate
Navigate to the Reversals section.
Choose **New** to raise a new reversal case.[Input the necessary details to raise a new case.]
:::

## Displaying Loan Reversal Details
---

- After raising a reversal case, users can view detailed information related to the reversal.
- This includes essential details such as loan numbers, guarantor information, and various amounts associated with the reversal.

The system shows comprehensive details for loan reversals, including:
- Loan number
- Guarantor member number and name
- Attached loan amount
- Amount to be refunded
- Reapportioned amounts
- Shares to be reversed
- Total loan to defaulter

## Automated Reversal of Attached Deposits
---

The system automates the reversal of attached deposits to their original position before attachment.
Ensure adherence to the double-entry rule with a specific justification for reversal.

<TransparentDiv>
- Once a reversal case is initiated, the system automatically reverses any attached deposits to their original positions.
- Adherence to the double-entry rule ensures accuracy and compliance with accounting standards
</TransparentDiv>


## Automatic Reversal with Maker Checker Control
---

Automated reversal of attached loans with maker checker control is supported.
Both principal and interest are reversed separately from guarantors to the defaulter’s loan account.
Automatic refunds to guarantors are facilitated with maker checker control.1

### Logic Flow:
- Upon initiating a reversal, the system automatically processes the reversal of attached loans.
- Maker checker control ensures proper validation and authorization of the reversal process.
- Automatic refunds to guarantors are processed seamlessly within the system.

## Automatic Crediting of Repaid Funds
---

Funds repaid by the guarantor are automatically credited to the guarantor’s FOSA/DEPOSITS account and debited from the guarantor's loan.

### Logic Flow:
- Upon repayment by the guarantor, the system automatically credits the funds to the appropriate account and debits the corresponding loan amount.

## Reduction of Defaulter’s Loan Balance

Funds repaid by the defaulter through reapportionment result in a reduction of the defaulter’s loan balance.

### Logic Flow:
- Reapportioned funds from the defaulter lead to a reduction in the outstanding loan balance.

## Automated Loan Balance Adjustment

The total loan balance (interest and principal) is automatically debited to the defaulter's account and credited to the guarantor's account, leaving a nil balance.

### Logic Flow:
- The system automatically adjusts the loan balance, ensuring proper allocation of interest and principal amounts between the defaulter and the guarantor.

## Manual Reversal and Refund

Manual reversal and refund of attached accounts are allowed.
All reversal transactions are automated to post in the relevant journals.

### Logic Flow:
- In cases where manual intervention is necessary, users can initiate manual reversal and refund processes.
- All manual transactions are seamlessly integrated into the system's journaling process for accurate record-keeping.

## Approval Workflow for Refund Process

The system facilitates an approval workflow for the refund process.
Refund requests are sent from the assistant debt management office to the senior debt management office for approval.
Approved processes are returned to the ADMO for posting, while rejected transactions are closed.
Deferred requests are returned to the ADMO for amendment.

### Logic Flow:
- Refund requests follow a predefined approval workflow, ensuring proper authorization and oversight.
- Approved requests are forwarded for posting, while rejected or deferred requests undergo necessary revisions.

## Transaction Logging

Every transaction is logged with a transaction user and unique transaction code specific to the debt management unit.

### Logic Flow:
- Detailed transaction logs provide a comprehensive audit trail, facilitating transparency and accountability in the reversal process.

## Automated Notification via SMS

Members receive automated notifications upon reversal and refund through SMS.
SMS templates can be edited by the HOD to fit future needs.

### Logic Flow:
- Automated notifications keep members informed about the status of their reversals and refunds, enhancing communication and transparency.

## Conclusion

The reversal of attached loans is a comprehensive process that ensures accuracy and efficiency in debt management operations. By leveraging the functionalities provided by the system, users can effectively manage loan reversals, refunds, and associated transactions, ensuring compliance with regulatory requirements and organizational policies.
