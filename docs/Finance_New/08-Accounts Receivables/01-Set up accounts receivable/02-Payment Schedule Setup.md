# Payment Schedule Setup in Business Central
---

<div class="customized-intro-container" id="introduction">
    <p>Payment schedules in Business Central allow you to manage customer payments in installments. This setup is shared between Accounts Payable and Accounts Receivable modules and includes configurations for payment days, payment schedules, terms of payment, and cash discounts.</p>
</div>
---

### Using Payment Schedules
---

A payment schedule divides the total amount due into consecutive payments based on defined criteria:

- **Number of Installments:** Specify how many payments will be made.
- **Amount of Each Installment:** Define the amount for each installment.
- **Due Date of Each Installment:** Set the due date for each payment.

### Types of Payment Schedules
---

Payment schedules can be configured in different ways depending on the allocation method selected:

- **Total:** Pays the total outstanding amount on the invoice.
- **Fixed Amount:** Sets a specific amount for each payment.
- **Fixed Quantity:** Divides the total amount into a fixed number of payments.
- **Specified:** Allows defining specific amounts and dates for each payment.

### Setting Up Payment Schedules
---

To configure payment schedules:

1. Navigate to **Accounts receivable > Payment setup > Payment schedules**.
   
2. Select the appropriate allocation method from the Allocation list to enable specific fields on the **General** and **Payment lines** FastTabs.

---
#### If Specified Allocation is Selected:
---

- On the **General** FastTab, choose the payment interval (Days, Months, Years) under **Payment per** to calculate installment due dates.
- Use the **Sales tax allocation** list to distribute sales tax amounts across installments.
- Navigate to the **Payment lines** FastTab to define installment details such as quantity, amount, and percentage.

---
#### If Fixed Amount or Fixed Quantity Allocation is Selected:
---

- On the **General** FastTab, select the payment interval (Days, Months, Years) under **Payment per**.
- Enter the number of units in the **Change** field related to the payment interval.
- For **Fixed Quantity**, specify the number of installments in the **Number of payments** field.
- For **Fixed Amount**, enter the fixed amount in the **Amount in transaction currency** field.
- Use the **Minimum** field to set a minimum installment amount if needed.

---

Configure payment schedules in Business Central to streamline customer payment management and enhance financial operations.

---
