# Configure the Payment Schedule
---
<div class="customized-intro-container" id="introduction">
    <p>In Dynamics 365 Finance, you can use payment schedules to manage invoice payments in installments. This feature helps in breaking down large payments into smaller, manageable amounts over a specified period.</p>
</div>

### Setting Up a Payment Schedule
---

To set up a payment schedule, you'll need to define a few key elements:

- **Number of Installments**: Decide how many payments will be made.
- **Amount of Each Installment**: Determine the amount for each payment.
- **Due Date of Each Installment**: Specify when each payment is due.

### Understanding Allocation Methods
---

Payment schedules offer several allocation methods to suit your needs:

- **Total**: Pays off the entire invoice amount over the scheduled payments.
- **Fixed Amount**: Sets a consistent payment amount for each scheduled date.
- **Fixed Quantity**: Divides the total invoice amount into a fixed number of payments.
- **Specified**: Allows you to set specific amounts and dates for each payment on the Payment lines FastTab.

Depending on your choice, different fields will be active on the General and Payment lines FastTabs. For example, selecting "Total" activates relevant fields on the General FastTab.

### Step-by-Step Setup
---

1. **Navigate to Accounts Payable > Payment setup > Payment schedules** in Dynamics 365 Finance.
   
   <!-- ![Screenshot of Payment schedules page](payment-schedules-screenshot.png) -->

2. **Configuring Specified Allocation**:
   - On the **General FastTab**, choose the payment frequency interval (Days, Months, or Years).
   - Use the **Sales tax allocation list** to distribute sales tax across payment installments.
   - Switch to the **Payment lines FastTab** to specify details like number of payments and amount distribution.
   - Enter the time interval for each installment in the **Quantity** field.
   - Specify the installment amount in the **Amount in transaction currency** field, choosing between percentage or absolute amount based on the **Percentage/Amount** list.

3. **Setting up Fixed Amount or Fixed Quantity**:
   - On the **General FastTab**, select the interval (Days, Months, or Years) for payment frequency.
   - Enter the number of units between payment dates in the **Change** field.
   - For **Fixed quantity**, specify the exact number of installments in the **Number of payments** field.
   - For **Fixed amount**, enter the fixed payment amount in the **Amount in transaction currency** field.
   - Define a minimum installment amount in the **Minimum** field if needed, which overrides calculated amounts.

---
