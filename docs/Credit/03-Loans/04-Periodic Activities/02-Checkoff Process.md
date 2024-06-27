# Checkoff Process
---

:::note Business Central
<div class="container">
    <div class="custom-note">
        <p>The checkoff process involves deducting or contributing funds directly from an individual’s income. In the context of a SACCO, this typically includes loan repayments and other payments. Let’s explore the key components of the checkoff process.🤗</p>
    </div>
</div>
:::
---

### 1. Checkoff Advice Header
---

The Checkoff Advice Header module handles monthly deductions for salaried or employed customers. It advises employers on the deductions to be made from payroll. Here’s how to generate checkoff advice:

- ### Accessing Checkoff Advice Header:
---
- Navigate to the Credit Management Role Center in Microsoft Dynamics Business Central.
- Click on Periodic Activities and select Checkoff Advice from the Checkoff Group.

- ### Generating Advice:
---
- Click New on the action pane.
- Enter the advice number and date.
- Choose the employer code (if per employer) or leave it blank for all employers.
- Specify the advice start and end dates.
- Optionally, set cutoff dates for loans issued and loan interest.
- Click Generate Advice.

- ### Actions on the Page Ribbon:
---
- Generate Advice: Creates the advice.
- Mark as Processed: Marks the advice as processed.
- Checkoff Advice - Loans, Checkoff Advice - Savings, Checkoff Advice - Loans Main: Specific actions related to advice types.
- Effective Variance: Handles any variations.

---
### 2. Checkoff Buffer
---

The Checkoff Buffer assigns the deducted amount from a member’s salary to the appropriate destination accounts within the SACCO. Here’s an example of a Checkoff Buffer:

<!-- ![Sample Checkoff Buffer Image](path_to_your_image) -->

---
### 3. Checkoff Header List
---

To create a new checkoff header:
- Open the Checkoff List page.
- Click New on the page ribbon.
- Fill in the necessary details on the Checkoff Header card page.
- Generate the checkoff lines using the Generate Lines action.
- Send an approval request.
- Post the checkoff by clicking Post on the page ribbon.

---
### 4. View Checkoff Lines
---

Once the checkoff is posted, you can view it on the View Checkoff Lines page list.

---
