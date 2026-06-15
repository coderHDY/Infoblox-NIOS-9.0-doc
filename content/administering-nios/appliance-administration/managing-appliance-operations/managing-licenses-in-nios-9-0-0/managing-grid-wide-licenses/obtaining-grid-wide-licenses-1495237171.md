---
title: "Obtaining Grid-wide Licenses"
source: "/space/nios90/1495237171"
pageId: "1495237171"
---
When you purchase licenses for specific features and services, the licenses may be Grid-wide licenses. License information is stored in a license file with the following information for each license: LSN-P (License Serial Number - Proxy), LK-P (License Key Proxy, LSN (License Serial Number) and LK (License Key).

License keys are generated based on the license UID of the Grid Master. You must first obtain the UID of the Grid and then contact Infoblox Technical Support to obtain the Grid-wide licenses.

> **warning**
>
> **Note**
> 
> Ensure that you obtain the license UID of the Grid Master. If you use the license UID of a Grid member or an appliance that has not yet joined the Grid, you might not be able to properly install the Grid-wide license.

The license file (CSV) format for Grid-wide licenses are as follows:  
GRID_WIDE,license_uid,license_type,[expiry_date],license_string

Infoblox stores information related to Grid-wide licenses in a license file. When you install Grid-wide licenses, you must upload the entire license file to the Grid Master, as described in the *Adding Permanent or Subscription Licenses* section.

To obtain Grid-wide licenses:

1. Log in to Grid Manager and obtain the license UID of the Grid Master as follows:
   
   1. From the **Infoblox Grid** tab, select the **Licenses** tab -> **Grid** **Wide** tab, and then click **Export** **All** **Licenses** from the Toolbar.
   2. Save the CSV file.
   3. Open the CSV file. The UID is displayed in the **SIGNATURE** row. Copy this ID. You will need this ID when contacting Infoblox Technical Support.
      
      Note to obtain the UID of the Grid, you can use the `show license_uid` command on the Grid Master. For more information, refer to the *Infoblox* *CLI* *Guide*.
2. Contact Infoblox Technical Support or your Infoblox representatives to obtain the Grid-wide licenses.
