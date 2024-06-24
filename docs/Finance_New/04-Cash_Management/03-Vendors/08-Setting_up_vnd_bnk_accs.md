# Setting Up Vendor Bank Accounts
---

<div class="customized-intro-container" id="introduction">
    <p>In Business Central, vendors can have one or multiple bank accounts. Setting up a vendor bank account allows you to process payments efficiently through the export of bank feeds and files. This guide will walk you through the steps to create and configure vendor bank accounts.</p>
</div>

---

### Creating a Vendor Bank Account
---

To create a vendor bank account, you must first select the vendor for whom you want to create the account. Note that it is not possible to access the list of vendor bank accounts directly through the search function.

### Steps to Create a Vendor Bank Account
---

To create a vendor bank account for vendor 10000, follow these steps:

1. **Search for Vendors**
    - Select the **Search for Page** icon in the top-right corner.
    - Enter **Vendors** and select the related link.

2. **Open Vendor Bank Accounts**
    - Select vendor **10000**.
    - Select **Related**, then **Vendor**, and finally **Bank Accounts**.

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

When you change the IBAN number on a vendor bank account card, Business Central allows you to track payments to the old IBAN number. Credit transfer register entries store the recipient IBAN and bank account number specified on the vendor bank account card when the entries are created.

<!-- ![Credit Transfer Reg. Entries window](url-to-screenshot-of-credit-transfer-reg-entries) -->

### Setting Up the Preferred Vendor Bank Account
---

When entering a vendor in a payment journal, the preferred bank account for that vendor is suggested on the payment journal line. Here's how to set up the preferred bank account for a vendor.

### Steps to Set Up Preferred Bank Account
---

1. **Search for Vendors**
    - Select the **Search for Page** icon in the top-right corner.
    - Enter **Vendors** and select the related link.

2. **Open Vendor Card**
    - Open the vendor card and expand the **Payments FastTab**.

3. **Select Preferred Bank Account**
    - In the **Preferred Bank Account Code** field, select a bank account. This will be the default bank account used on payment journal lines for export to a payment bank file.
<!-- 
![Preferred Vendor Bank Account setup in Business Central](url-to-screenshot-of-preferred-vendor-bank-account-setup) -->

---

By following this guide, you should now be able to create and configure vendor bank accounts in Business Central. Setting up these accounts correctly is crucial for efficient financial operations, such as processing payments and electronic transactions. If you have any questions or need further assistance, feel free to reach out to the support team.

---