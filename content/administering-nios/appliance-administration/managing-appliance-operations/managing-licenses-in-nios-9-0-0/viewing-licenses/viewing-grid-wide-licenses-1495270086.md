---
title: "Viewing Grid-wide Licenses"
source: "/space/nios90/1495270086"
pageId: "1495270086"
---
Grid Manager displays the licenses that are configured for the respective Grid. To view Grid-wide licenses:

1. Log in to Grid Manager on the Grid Master.
2. Select the **Infoblox** **Grid** tab -> **Licenses** tab -> **Grid** **Wide** tab. The appliance displays the following information:
   
   - **Feature**: The feature for which you have obtained the license.
   - **Limit** **Context**: Depending on the license type, this field displays the attribute (such as **Model**) that the license controls. This field is blank if the license does not control any attribute type. This field can display one of the following:
     
     - **Leases**: Indicates that this DHCP license supports a specific number of DHCP leases. The number of leases supported is displayed in the **Type** **Details** field.
     - **Model**: Indicates that this vNIOS license supports a specific vNIOS virtual appliance model. The model supported is displayed in the **Type** **Details** field.
   - **Limit** **Value**: Information about the attribute type that the license monitors. This field can display the following information for each attribute:
     
     - **Leases**: The number of DHCP leases that the DHCP license supports.
     - **Model**: The model of the vNIOS virtual appliance, such as IB-V1410 or IB-V2215.
   - **Expiration**: The expiration date and time of the license. It displays **Permanent** for permanent licenses.

You can do the following:

- Delete a Grid-wide license as explained in the *Removing Licenses* section.
- Click the Export icon to export the list of licenses to a .csv file.
- Click the Print icon to print the list of licenses.

To search for specific licenses on the **Member**, **Pool** and **Grid** **Wide** tabs, you can use filters and the **Go** **to** function (the **Go** **to** function is not supported in the Pool tab) to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go** **to** field and select the object from the possible matches. You can also create a quick filter to save frequently used filter criteria. For information about Using Quick Filters, see [*Using Quick Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588).
