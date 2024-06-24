# Setting Up Payment Registration in Business Central
---

<div class="customized-intro-container" id="introduction">
    <p>The Payment Registration window in Business Central is designed to streamline the process of balancing internal accounts by using actual cash figures to ensure efficient collection of customer payments. This tool allows you to quickly verify and post individual or lump payments, process discounted payments, and locate specific unpaid documents for which payment is made.</p>
</div>
---

Before you start processing customer payments, you need to select a balancing account in the Payment Registration Setup page. If you frequently post to the same balancing account, you can set it as the default to save time every time you open the Payment Registration window.

### Setting Up Payment Registration
---

Follow these steps to set up payment registration:

1. **Access Payment Registration Setup**
    - Select the **Search for Page** icon in the top-right corner.
    - Enter **Payment Registration Setup** and select the related link.
    - Alternatively, in the **Payment Registration** window, select the **Setup** action.

2. **Configure Journal Details**
    - In the **Journal Template Name** and **Journal Batch Name** fields, enter the name of the journal template and journal batch that the Payment Registration window is based on.

3. **Specify Balancing Account**
    - In the **Balancing Account Type** field, specify if the balancing entries should be posted to a bank account or a G/L account. This field is defaulted by the selected journal batch, but you can select another option if needed.
    - In the **Balancing Account** field, select the bank account or G/L account that will be used as the balancing account for payments.

4. **Set Default Account**
    - Use the **Use this Account as Default** field to specify if the account in the **Bal. Account No.** field is to be used for all payments. This is helpful if you use more than one account when registering payments.

5. **Auto-Fill Date and Amount Received**
    - The **Automatically Fill Date Received** field specifies if the **Date Received** and **Amount Received** fields are automatically filled when you select the **Payment Made** option.

<!-- ![Payment Registration Setup page](url-to-screenshot-of-payment-registration-setup) -->

---
