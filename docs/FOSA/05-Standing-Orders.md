---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Standing Orders
---

<div class="customized-intro-container" id="introduction">
    <p>Welcome to the Standing Order (STO) feature guide. With STO, you can easily set up recurring payment instructions for transferring funds between accounts, either internally (Internal STO) or to external entities (External STO). Let me walk you through how to make the most of this 
    module.</p>
</div>

---

### Accessing Standing Order
---
:::note To get started with Standing Order:
---

- First, log in to **Business Central.**
- Then, head over to **Banking Operations** from the navigation bar.
- From there, simply choose **Standing Order** in the dropdown menu, where you'll find options for **Standing Order List** and **Standing Order Register List**.

:::

### Setting Up Standing Order
---

### External Standing Order
---

Setting up an External Standing Order involves transferring funds from your account to a third-party entity outside our SACCO.

:::tip Configuration:
---
- Don't forget to configure STO charges associated with external standing orders.
:::

#### Here's how you can do it:
---

- Start by selecting your account and specifying the amount you want to transfer.
- Make sure your account can be debited and has enough balance.
- Next, pick the GL Holding account for the transaction.
- Check if the destination account can receive the funds.
- Then, we'll debit your account and credit the GL Holding account.
- Fill in the Standing Order lines to specify the destination account.
- Once you're all set, submit the Standing Order for approval.
- Once approved, your standing order will kick off automatically.

### Internal Standing Order
---

If you need to transfer funds within, you'll set up an Internal Standing Order.

#### Here's how it works:
---

- Select your account and specify the amount to transfer.
- Choose the destination account within the SACCO.
- We'll debit your account and credit the destination account.
- Fill in the Standing Order lines to specify the destination account.
- Submit the Standing Order for approval.
- Once approved, your standing order will start running right away.

### Additional Functionality
---

:::tip
---
- You have the power to manually stop a standing order if necessary.
- Need to make a partial deduction on standing orders? No problem, you can do that.
- Our system automatically detects funds in your FOSA account for partial deduction in internal STOs.
- We keep an eye out for the next 5 days. If sniffing fails, we'll force charges of 400 shillings.
- Want to specify an end date or target amount? You're in control.
- We prioritize standing orders based on the STO charge buffer.
:::

---

:::note Conclusion
---

And that's it! This User Manual has covered everything you need to know about setting up and managing Standing Orders within the system. If you have any questions or need further assistance, feel free to reach out to our system administrator.

---

