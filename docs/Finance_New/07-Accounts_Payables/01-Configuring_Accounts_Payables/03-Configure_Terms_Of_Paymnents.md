# Configure Terms of Payment
---

<div class="customized-intro-container" id="introduction">
    <p>In Dynamics 365 Finance, you can efficiently manage terms of payment and payment days to streamline financial transactions with vendors and customers. Terms of payment specify when invoices should be paid. These terms can be applied to vendors, customers, purchase orders, and sales orders.</p>
</div>
---

#### Example Scenario
---

ABC Ltd uses a standard vendor payment term of Net 30 days. If they receive an invoice dated November 15 with this term, payment would be due by December 15. Late payments may incur interest charges according to agreed terms.

#### Linking Terms to Payment Schedules
---

When terms of payment are linked to a payment schedule, they determine the due date for the first installment. Subsequent payments follow the schedule's rules.

#### Cash on Delivery (COD)
---

Selecting COD with Cash payment requires assigning a main account in the Ledger posting area for cash settlements.

To configure terms of payment, navigate to **Accounts payable > Payment setup > Terms of payment**.

<!-- ![Screenshot of Terms of payment page with Cash selected](terms-of-payment-screenshot.png) -->

### Payment Days
---

Payment days allow you to specify specific days for calculating invoice due dates. Choose weekly or monthly intervals to ensure invoices are due on or before the selected date.

For example, selecting the 17th day of the month means invoices must be settled by that date.

To configure payment days, go to **Accounts payable > Payment setup > Payment days**.

<!-- ![Screenshot of Payment days page with 17th day of the month specified](payment-days-screenshot.png) -->

:::note NB
Ensure your setup aligns with your organization's payment policies to streamline financial operations effectively in Dynamics 365 Finance.
:::

---
