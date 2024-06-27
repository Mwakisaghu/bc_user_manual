# Member Closure
---

:::note Business Central
<div class="container">
    <div class="custom-note">
        <p>After a member applies for Membership Withdrawal, the Member Closure Process initiates to close the member's accounts, including both credit and savings.🤗</p>
    </div>
</div>
:::
---

### Membership Closure Card Page
---

The Membership Closure page includes:

---
#### Group Fast Tab
---

- **Fields in the Group Fast Tab:**
  - **No.:** Automatically filled with the Member Closure Number upon record insertion.
  - **Application Date:** Date when the Member closure application was submitted.
  - **Member No.:** Dropdown to select the member number applying for closure.
  - **Staff No.:** Auto-filled upon selecting the member number.
  - **Member Name:** Auto-filled upon selecting the member number.
  - **Closure Type:** Options include Withdrawal Normal, Death, or Partial.
  - **Closure Date:** Date of the closure application.
  - **Department Code:** Global Dimension 1.
  - **Project Code:** Global Dimension 2.
  - **Close Account:** Choose between closing all accounts or specific ones.
  - **Loans Option:** Short term or long term.
  - **Status:** Application status of Membership Closure.
  - **Deposit Refundable:** Auto-filled based on member details.
  - **Entered by:** User ID of the staff processing the closure.
  - **Posted:** Defaults to false for open closures, set to true when posted.
  - **Remarks:** Additional information provided by the member or staff.
  - **Notice Number:** Withdrawal Notice number for the closure application.
  - **Maturity Date:** Maturity date of the notice application.
  - **Benevolent Fund:** Amount of Benevolent fund applicable.
  - **Early Withdrawal:** Indicates if the closure is an Early withdrawal.

<!-- ![Membership Closure Card Page](./screenshots/membership_closure_card.png) -->

---
#### Account Closure Lines
---

These lines are generated upon selecting the Member Number in the Member No. field.

---
### Steps to Effect Membership Closure
---

1. **Send Approval Request**

   - Send the Membership Closure application for approval.

2. **Generate Resignation Slip**

   - Run the 'Resignation Slip' report as required.

3. **Exit the Card Page**

   - Click the arrow at the top left corner to exit the card page.

4. **Navigate to Approved Membership Closure List**

   - Go to the 'Approved Membership Closure' List.

5. **Post Approved Membership Closure**

   - Open the Approved Membership Closure and post it.

---
