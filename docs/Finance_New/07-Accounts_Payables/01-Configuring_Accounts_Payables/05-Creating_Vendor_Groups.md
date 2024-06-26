# Create Vendor Groups
---

<div class="customized-intro-container" id="introduction">
    <p>Vendor groups in Dynamics 365 Finance allow you to categorize vendors based on shared characteristics such as payment terms or sales tax groups. This simplifies vendor management by providing default settings for new vendor entries and facilitates automatic posting to general ledger accounts. 🤗 </p>
</div>
---

### Setting Up Vendor Groups
---

To create vendor groups, follow these steps:

1. **Navigate** to **Accounts payable > Vendors > Vendor groups**.
   
2. **Create** a new vendor group. Ensure each vendor must be assigned to at least one vendor group during creation.

   <!-- ![Screenshot of Vendor groups page](vendor-groups-screenshot.png) -->

3. **Configure** the following for each vendor group:
   - **Ledger Posting**: Specify accounts for vendor debts, arrival accounts, receipt accounts, item consumption accounts, or vendor line discounts.
   - **Sales Budgets**: Record sales budgets specific to each vendor group.
   - **Trade Statistics**: Generate sales statistics such as monthly consumption per vendor group.

### Example Scenario
---

Adventure Works Cycles uses vendor groups to streamline vendor management. They have set up multiple vendor groups for the following purposes:

- **Ledger Posting**: Each vendor group specifies different accounts for transactions like vendor debts and item consumption.
- **Sales Budgets**: Budgeted amounts for purchases are allocated based on vendor group-specific payment terms.
- **Trade Statistics**: Monthly consumption statistics are generated for each vendor group to track purchasing trends.

### General Posting Rules
---

To set up general posting rules for vendor groups:

1. **Navigate** to **Accounts payable > Vendors > Vendor groups**.

2. On the Vendor groups Action Pane, select the **Posting** button.

3. Choose from the following options:
   - **Table**: Post ledger transactions for specific item numbers only.
   - **Group**: Post ledger transactions for all item numbers within a specific item group.
   - **All**: Post ledger transactions for all item numbers in the same account.
   - **Category**: Select a category relation value to post transactions for all item numbers associated with that category.

   <!-- ![Screenshot of Posting options in Vendor groups](vendor-groups-posting-screenshot.png) -->

Ensure your vendor group setup aligns with your organization's accounting practices to streamline vendor transactions and reporting.

---