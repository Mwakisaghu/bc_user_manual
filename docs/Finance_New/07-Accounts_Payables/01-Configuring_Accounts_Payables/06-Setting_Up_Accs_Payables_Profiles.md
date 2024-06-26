# Setting Up Accounts Payable Posting Profiles
---
<div class="customized-intro-container" id="introduction">
    <p>Posting profiles are an essential feature in the Finance module, used to manage how transactions are posted for vendors in Accounts Payable. This guide will help you set up and understand the use of Accounts Payable posting profiles effectively. 🤗 </p>
</div>
---

### What Are Posting Profiles?
---
In Accounts Payable, posting profiles define the summary accounts for vendors. These summary accounts are temporary accounts where all invoices are posted until the vendor is paid. You can assign posting profiles to:

- A single vendor
- Groups of vendors
- All vendors

### How It Works
---
When you post a vendor transaction, the system searches for the appropriate ledger accounts in the following order:

1. **Specific Vendor:** If a posting profile line exists for the vendor, this line is used.
2. **Vendor Group:** If no specific line exists for the vendor, the line specified for the vendor group is used.
3. **All Vendors:** If neither of the above lines exist, the posting profile line for all vendors is used.

### Setting Up Vendor Posting Profiles
---
To set up vendor posting profiles, follow these steps:

1. Navigate to **Accounts payable > Setup > Vendor posting profiles**.
2. On the **Vendor posting profiles** page, you can create multiple profiles. If all vendor transactions are processed together, you only need one posting profile for all vendors.

<!-- ![Screenshot of the Vendor posting profiles page](screenshot) -->

### Using Invoice Registers and Approval Journals
---
If you use an invoice register and invoice approval journal:

- All vendor invoices are recorded as arrived but not yet approved.
- They are posted in the **Arrivals** account and the **Arrivals offset** account.
- Once approved, the debt is transferred to the **Vendor summary account**.

If you do not use an invoice register and approval journal:

- All vendor invoices are directly updated in the **Vendor summary account**.

### Setting a Default Posting Profile
---
After creating your posting profiles, set a default profile by following these steps:

1. Go to **Accounts payable > Setup > Accounts payable parameters**.
2. Select the **Ledger and sales tax** tab.
3. Choose a value for **Posting profile**.

---
