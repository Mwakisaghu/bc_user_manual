# Process Purchase Orders and Purchase Order Invoices
---
<div class="customized-intro-container" id="introduction">
    <p>Managing purchase orders and purchase order invoices is crucial for tracking liabilities and ensuring accurate financial records in Dynamics 365 Finance. This module covers the process of creating purchase orders, handling purchase order invoices, and managing credit memos.</p>
</div>
---

### Purchase Orders
---

Purchase orders are comprehensive documents used to document liabilities before the receipt of goods or services. They include headers and lines with attributes like delivery dates, vendor contacts, and additional charges such as fees, freight, or insurance.

To access and manage purchase orders, go to **Accounts payable > Purchase orders > All purchase orders**.

### Purchase Order Invoices
---

When vendors send invoices for purchase orders in Dynamics 365 Finance, the system matches these invoices against the corresponding purchase orders. This matching process ensures accuracy and consistency in financial transactions.

#### Invoice Matching Processes
---

- **Two-way match:** Compares the purchase order to the invoice when inventory isn't tracked.
- **Three-way match:** Compares the purchase order, product receipt, and invoice.

To view and manage pending and open vendor invoices, navigate to **Accounts payable > Invoices > Pending vendor invoices** and **Open vendor invoices**.


#### Purchase Order Credit Memos
---

If adjustments are needed due to pricing changes or defects in received goods, credit memos can be created against purchase orders. This process involves adding negative lines to adjust the original purchase order.

To create a credit memo, go to the purchase order header or line and select **Purchase > Credit note > Credit note**.

#### Credit Note Parameters
---

You can configure credit notes with options like quantity factor adjustment, price recalculation, and copying charges from the original order.

For automatic or manual settlement of credit notes against invoices, adjust the **Automatic settlement** parameters in the Accounts payable module settings.

---

Efficiently managing purchase orders and invoices ensures accurate financial reporting and vendor relations in Dynamics 365 Finance.

---
