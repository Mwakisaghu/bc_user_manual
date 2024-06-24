# Set Up General Fixed Assets Information
---

<div class="customized-intro-container" id="introduction">
    <p>Before effectively managing fixed assets (FA) in Business Central, it is essential to configure general settings that govern how fixed asset transactions are recorded and classified. This guide outlines the steps to set up default G/L accounts, allocation keys, journal templates, and asset classifications to streamline your asset management processes.</p>
</div>
---

## Required Setup Tasks
---

To begin managing fixed assets, follow these essential setup tasks:

---
### Define General Behavior for Fixed Assets Functionality
---

1. Navigate to the **Fixed Assets Setup** page:
   - Click on the **Search for Page** icon in the top-right corner.
   - Enter **Fixed Assets Setup** and select the related link.

2. Fill in the necessary fields on the Fixed Assets Setup page:
   - Hover over each field for a brief description to guide your entries.


---
### Set Up Fixed Asset Posting Groups
---

1. Define posting groups to categorize fixed assets for accounting purposes:
   - Click on the **Search for Page** icon.
   - Enter **FA Posting Groups** and select the related link.

2. Create a new posting group:
   - Choose the **New** action to open the FA Posting Group Card page.
   - Enter the required details in the fields provided.

   **Note:** Ensure that balancing accounts for different fixed asset postings are automatically inserted. Configure this by selecting the appropriate general ledger account in the **Appreciation Bal. Account** field on the **Balancing Account** FastTab.

---
### Set Up Fixed Asset Journal Templates
---

A template is a predefined layout for a journal. The template contains information about trace codes, reports, and number series.

Business Central automatically creates a fixed asset journal template the first time that you open the Fixed Asset Journal page, but you can set up other journal templates.

1. Navigate to the **FA Journal Templates** page:
   - Click on the **Search for Page** icon.
   - Enter **FA Journal Templates** and select the related link.

2. Fill in the necessary fields to create or modify journal templates.

---
### Define Fixed Asset Class and Subclass Codes
---

In fixed assets, you can define a classification hierarchy that can be used to group assets. The hierarchy has two levels: classes and subclasses.

---
#### Fixed Asset Class Codes
---

Fixed asset classes are the top-level entries in the classification hierarchy in which you group assets. For example, use classes to divide assets into tangible or intangible assets. You must create at least one fixed asset class in your setup.

1. Navigate to the **FA Classes** page:
   - Click on the **Search for Page** icon.
   - Enter **FA Classes** and select the related link.

2. Enter codes and names for the fixed asset classes that you want to create.

---
#### Fixed Asset Subclass Codes
---

Fixed asset subclasses are the second level entries in the classification hierarchy in which you group assets. Each subclass points to a top-level class. Use fixed asset subclass codes to group fixed assets in more specific categories, such as buildings, vehicles, furniture, or machinery. You must create at least one fixed asset subclass in your setup.

1. Navigate to the **FA Subclasses** page:
   - Click on the **Search for Page** icon.
   - Enter **FA Subclasses** and select the related link.

2. Enter codes and names for the fixed asset subclasses that you want to create.

---
