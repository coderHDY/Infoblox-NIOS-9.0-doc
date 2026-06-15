---
title: "Managing Dynamic Licenses"
source: "/space/nios90/1495400942"
pageId: "1495400942"
---
Dynamic licenses are multiple licenses that you obtain for NIOS appliances, both physical and virtual. You can install dynamic licenses in advance for different services and features and deploy them on demand, based on your business needs. The appliance stores these licenses in their respective license pools and allocates them when you deploy vNIOS virtual appliances. When you remove a vNIOS appliance from your Grid, the applicable licenses are automatically released back to the license pool. The appliance adjusts the total number of licenses accordingly. You can use dynamic licenses to automatically pre-provision and deploy vNIOS appliances. For more information about this feature, see [*Joining Pre-Provisioned Members to a Grid*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407076).

For a dynamic license, you can either upload the license file to the appliance or copy the information and paste it in the **Paste License(s)** field on the **Infoblox Grid** tab -> **Licenses** tab -> **Pool** tab in Grid Manager. You must copy the entire string and save it to the text field. When you restore or perform a factory reset operation, you will lose the existing dynamic licenses.

License pools for a particular license type are an aggregate of the subpools that contain the respective license type. Subpools are either perpetual or non-perpetual with different expiration dates. NIOS displays non-perpetual and perpetual subpools with different expiration dates within the same pool.  
Dynamic licenses can be allocated from a pool based on the aggregate install count. You can allocate licenses from a pool as long as the allocated count of perpetual and non-perpetual licenses does not exceed the count of perpetual and active non-perpetual licenses that are installed.

> **warning**
>
> **Note**
> 
> You must install both the Grid and vNIOS licenses on a vNIOS appliance for it to join the Grid. You can add other licenses such as DNS, DHCP, or Cloud Platform depending on how you deploy your vNIOS virtual appliances.
