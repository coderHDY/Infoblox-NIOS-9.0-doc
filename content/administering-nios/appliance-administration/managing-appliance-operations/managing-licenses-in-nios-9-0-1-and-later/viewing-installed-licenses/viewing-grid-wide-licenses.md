---
title: "Viewing Grid Wide Licenses"
source: "/space/nios90/1856143706"
pageId: "1856143706"
---
Grid Manager displays licenses that are configured for the Grid on the **Grid Wide** tab. To view Grid-wide licenses, complete the following steps:

1. Log in to Grid Manager on the Grid Master.
2. Click the **Infoblox** **Grid** tab -> **Licenses** tab -> **Grid** **Wide** tab. The appliance displays the following information:
   
   - **Feature**: The feature for which you have obtained the license.
   - **Validity Type**: The license type according to the validity period. This can be of type **Subscription** or **Temporary**. This field is available from NIOS 9.0.8 onwards. For more information about the supported license types, see [*About License Types*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1446871451).  
     After a fresh installation of NIOS 9.0.8, this column is visible by default. After upgrading to NIOS 9.0.8, the column is hidden by default. To make it visible, select the **Validity Type** checkbox in the *Edit Columns* dialog box.
   - **Limit** **Context**: Depending on the license type, this field displays the attribute (such as **Model**) that the license controls. This field is blank if the license does not control any attribute type. This field can display one of the following:
     
     - **Leases**: Indicates that this DHCP license supports a specific number of DHCP leases. The number of leases supported is displayed in the **Type** **Details** field.
     - **Model**: Indicates that this vNIOS license supports a specific vNIOS virtual appliance model. The model supported is displayed in the **Type** **Details** field.
   - **Limit** **Value**: Information about the attribute type that the license monitors. This field can display the following information for each attribute:
     
     - **Leases**: The number of DHCP leases that the DHCP license supports.
     - **Model**: The model of the vNIOS virtual appliance, such as IB-V906.
   - **Expiration**: The expiration date and time of the license.

You can do the following:

- Delete a Grid-wide license as explained in the *Removing Licenses* section.
- Click the Export icon to export the list of licenses to a .csv file.
- Click the Print icon to print the list of licenses.

To search for specific licenses on the **Member** and **Grid** **Wide** tabs, you can use filters and the **Go** **to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go** **to** field and select the object from the possible matches. You can also create a quick filter to save frequently used filter criteria. For information about Using Quick Filters, see [*Using Quick Filters.*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343161370)
