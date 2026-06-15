---
title: "Retrieving Grid Wide Licenses"
source: "/space/nios90/2341830667"
pageId: "2341830667"
---
When you purchase licenses for specific features and services, they may be Grid-wide licenses. License information is stored in a license file containing the following for each license: LSN-P (License Serial Number - Proxy), LK-P (License Key Proxy), LSN (License Serial Number), and LK (License Key).

Grid-wide license keys are generated based on the license UID of the Grid Master. Obtain the Grid UID first, then acquire the Grid-wide licenses.

> **warning**
>
> **Note**
> 
> Ensure that you obtain the license UID of the Grid Master. If you use the license UID of a Grid member or an appliance that has not yet joined the Grid, you might not be able to properly install the Grid-wide license.

The license file (CSV) format for Grid-wide licenses is:  
GRID_WIDE,license_uid,license_type,[expiry_date],license_string

Infoblox stores Grid-wide license information in a license file. To install Grid-wide licenses, upload the entire license file to the Grid Master, as described in the [*Installing Licenses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1446412795) section.

## Retrieving the License UID of a Grid Master

Use one of the following methods to retrieve the license UID of a Grid Master:

- Retrieve the UID from the Grid Manager UI:
  
  1. Sign in to Grid Manager and obtain the license UID of the Grid Master as follows:
  2. From the **Infoblox Grid** tab, select the **Licenses** tab -> **Grid** **Wide** tab, and then click **Export** **All** **Licenses** from the Toolbar.
  3. Save the CSV file.
  4. Open the CSV file. The UID is displayed in the **SIGNATURE** row. Copy this ID. You will need this ID when contacting Infoblox Technical Support.
- Retrieve the UID by using the `show license_uid` command on the Grid Master.  
  Example:  
  `Infoblox > show license_uid`
  
  `The grid-wide license unique ID (same as LPC_UID):        30054xxxx4cd4535xxxxx9c1bf8xxxx8`

## Obtaining the Grid Wide License

Obtain the Grid-wide license in one of the following ways:

- Contact Infoblox Technical Support or your Infoblox representatives to obtain the licenses.
- Create a Grid as a host by associating the license UID of the Grid Master:
  
  1. Sign in to the Infoblox Support portal at [*https://support.infoblox.com*](https://support.infoblox.com/).
  2. Click **My Products**.  
     An overview page that contains a graphical representation of software entitlements (assigned and unassigned), host appliances with and without assigned software, and statuses of existing contracts, is displayed.
  3. *(For partners only) ***End Customer**: If you manage multiple accounts for various customers, select the account for which you want to obtain licenses.
  4. In the Infoblox Support portal > overview page, click **Create VM/Grid and Assign Software**.
  5. In the *Create Virtual Machine* dialog box:
     
     - *(For partners only) ***End Customer**: Select the account for which you want to obtain licenses. **Virtual Host Hardware ID**: Specify the UID of the Grid Master.
     - **VM Model**: Choose the license technology from the drop-down list as **DDI (for NIOS and BloxOne)** or **NetMRI**.
     - **Is Grid Wide?**: Select the checkbox.
  6. Click **Save & Assign Software**.  
     The *Manage Software of Host* &lt;*host name*&gt; page is displayed for the host you created.
  7. In the *Software available to be assigned to Host* section, enter the quantity to be assigned in the **Qty to Assign** field of the applicable license.
  8. Click **Assign Software** to assign the licenses.  
     The assigned license moves to the *Software currently assigned to host* section.
     
     *[image: media]*
     
     
  9. To download the license keys, click the **Download License Keys** button.
