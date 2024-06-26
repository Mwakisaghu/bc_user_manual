# Set Up Payment Fees
---

<div class="customized-intro-container" id="introduction">
    <p> Payment fees in Dynamics 365 Finance enable you to manage additional charges associated with vendor invoices, such as bank remittance fees or fees for issuing promissory notes. 🤗 </p>
</div>
---

---
### Creating a Payment Fee
---

To create a payment fee, follow these steps:

1. **Navigate** to **Accounts payable > Payment setup > Payment fee**.
   
2. **Create** a new record and specify whether the fee is charged to the Vendor or Ledger in the **Charge** field. If it's charged to the Ledger, select the appropriate **Main account** for ledger posting.

   <!-- ![Screenshot of Payment fee page with the Charge field highlighted](payment-fee-screenshot-1.png) -->

3. Choose a valid **Journal type** where the fee is applicable, typically **Vendor bank remittance**.

---
### Defining Payment Fee Details
---

When setting up a payment fee, consider the following details:

- **Fee Identification**: Define how the fee is identified and related to specific vendors or transactions.
- **Bank Relations**: Specify which banks or financial institutions apply this fee.
- **Fee Generation**: Define rules for when and how the fee is generated.

You can set up multiple fee lines tailored for different banks, payment methods, currencies, and time periods.

---
#### Payment Specifications and Currency
---

Specify the payment specifications in the **Payment specification** field and select the currency in which the fee applies in the **Fee currency** field. Choose whether the fee amount is a percentage or an absolute amount in the **Percentage/Amount** field.

<!-- ![Screenshot of Payment fee setup page with the Percentage/Amount field highlighted](payment-fee-screenshot-2.png) -->

---
### Scenario Example
---

Let's consider ABC Ltd, which uses electronic transfers for vendor invoice payments. After transferring invoice amounts to the bank, they automatically send a remittance advice to each vendor detailing the payment account and amount. To handle bank remittance charges effectively, ABC Ltd decides to set up payment fees in Dynamics 365 Finance.

---
