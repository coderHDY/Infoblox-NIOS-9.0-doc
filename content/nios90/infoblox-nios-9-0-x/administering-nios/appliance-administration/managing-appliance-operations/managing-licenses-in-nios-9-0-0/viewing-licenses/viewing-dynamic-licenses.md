---
title: "Viewing Dynamic Licenses"
source: "/space/nios90/1494843883"
pageId: "1494843883"
---
You can install dynamic licenses on the Grid Master for future vNIOS appliance deployments. When you install dynamic licenses, the Grid Master store them in a license pool. You can view these licenses and evaluate license usage for vNIOS virtual appliances.  
For a particular feature, such as DNS or DHCP, Grid Manager displays dynamic licenses in sub pools so you can view the number of permanent licenses, the number of licenses that are expiring on a particular date, and those that are expired. NIOS highlights the licenses that are going to expire soon using a yellow background. Licenses that are approaching expiry are highlighted with a pink background.

> **warning**
>
> **Note**
> 
> The overall license status for a particular feature reflects the most critical status among all licenses in the pool. For example, if there are expired licenses in the pool, the overall status for this license type appears as expired.

To view dynamic licenses in the pool and their usage information:

1. Log in to Grid Manager on the Grid Master.
2. Select the **Infoblox** **Grid** tab -&gt; **Licenses** tab -&gt; **Pool** tab. The appliance displays the following information:
   
   - **Feature**: The feature for which you have obtained the license.
   - **Installed**: The number of licenses that have been installed for the specified feature.
   - **Assigned**: The number of licenses currently allocated to vNIOS virtual appliances.
   - **Available**: The number of licenses that are currently available for the specified feature.
   - **License** **Model**: For vNIOS license only. Indicates the model type of the vNIOS virtual appliance. Note that the vNIOS license you install on the vNIOS appliance must match the appliance model. You can use vNIOS license that has a higher capacity on a vNIOS appliance that has a smaller capacity, but not vice versa. For example, you can install a CP-V1405 license on a CP-V805 or CP-V1405 appliance, but not on a CP-V2205.
   - **Limit** **Context**: Depending on the license type, this field displays the attribute (such as **Model**) that the license controls. This field is blank if the license does not control any attribute type. This field can display one of the following:
     
     - **Leases**: Indicates that this DHCP license supports a specific number of DHCP leases. The number of leases supported is displayed in the **Type** **Details** field.
     - **Model**: Indicates that this vNIOS license supports a specific vNIOS virtual appliance model. The model supported is displayed in the **Type** **Details** field.
   - **Limit** **Value**: Information about the attribute type that the license monitors. This field can display the following information for each attribute:
     
     - **Leases**: The number of DHCP leases that the DHCP license supports.
     - **Model**: The model of the vNIOS virtual appliance, such as IB-V410 or IB-V2215.
   - **Expiration**: The expiration date and time of the license. It displays **Permanent** for permanent licenses and **Expired** for licenses that expired.
3. Click the arrow mark next to the checkbox of a specific feature to view the list of licenses and their respective expiration dates.
