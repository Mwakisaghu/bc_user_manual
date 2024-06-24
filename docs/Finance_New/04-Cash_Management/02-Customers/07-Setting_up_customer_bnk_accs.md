# Setting Up Customer Bank Accounts
---

<div class="customized-intro-container" id="introduction">
    <p>In Business Central, customers can have one or multiple bank accounts. Setting up a customer bank account is particularly useful for tasks such as refunding credit memos. This guide will walk you through the steps to create and configure customer bank accounts.</p>
</div>
---

### Creating a Customer Bank Account
---

To create a customer bank account, you must first select the customer for whom you want to create the bank account. Note that it is not possible to access the list of customer bank accounts through the search function directly.

### Steps to Create a Customer Bank Account
---

To create a customer bank account for customer 10000, follow these steps:

1. **Search for Customers**
    - Select the **Search for Page** icon in the top-right corner.
    - Enter **Customers** and select the related link.

2. **Open Customer Bank Accounts**
    - Select customer **10000**.
    - Select **Related**, then **Customer**, and finally **Bank Accounts**.

3. **Create New Bank Account**
    - Select **New**.
    - Fill in the **Code** and **Name** fields with the bank's code and name.
    - On the **General FastTab**, enter the bank account’s address details.
    - In the **Currency Code** field, enter the bank account’s currency. Leave it blank if the account uses your local currency.
    - Enter the **Bank Code**, **Bank Branch No.**, **Bank Account No.**, and **Transit No.** fields with the respective details.

4. **Communication FastTab**
    - Enter the communication details, such as the email and home page.

5. **Transfer FastTab**
    - Expand the **Transfer FastTab**.
    - Enter the **SWIFT Code** and **IBAN**.
    - In the **Bank Clearing Standard** field, select the format standard for bank transfers.
    - Enter the **Bank Clearing Code** as required.
    - Select the **Use for Electronic Payments** field if this account will be used for electronic payments.

<!-- ![Customer Bank Account setup in Business Central](url-to-screenshot-of-customer-bank-account-setup) -->

### Setting Up the Preferred Customer Bank Account
---

When you enter a customer in a payment journal, the preferred bank account for that customer is suggested on the payment journal line. Here's how to set up the preferred bank account for a customer.

### Steps to Set Up Preferred Bank Account
---

1. **Search for Customers**
    - Select the **Search for Page** icon in the top-right corner.
    - Enter **Customers** and select the related link.

2. **Open Customer Card**
    - Open the customer card and expand the **Payments FastTab**.

3. **Select Preferred Bank Account**
    - In the **Preferred Bank Account Code** field, select a bank account. This will be the default bank account used on payment journal lines for export to a payment bank file.
<!-- 
![Preferred Customer Bank Account setup in Business Central](url-to-screenshot-of-preferred-customer-bank-account-setup) -->

By following this guide, you should now be able to create and configure customer bank accounts in Business Central. Setting up these accounts correctly is crucial for efficient financial operations, such as processing refunds and electronic payments. If you have any questions or need further assistance, feel free to reach out to the support team.

---
