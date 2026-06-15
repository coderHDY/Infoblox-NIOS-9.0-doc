---
title: "Viewing Member Licenses"
source: "/space/nios90/1495204371"
pageId: "1495204371"
---
To view the information about active licenses, including static and dynamic licenses that are currently assigned or allocated to NIOS and vNIOS appliances:

1. Log in to Grid Manager on the Grid Master or System Manager on an independent appliance.
2. Select the **Infoblox** **Grid** or **System** tab -&gt; **Licenses** tab -&gt; **Member** tab. The appliance displays the following information:
   
   - **Type** **of** **License**: The license category. This can be **Static**, **Dynamic,** or **Grid** **Wide**. Static licenses are individual licenses you obtain and are currently assigned to specific appliances. These licenses are tied to specific hardware IDs and you cannot deallocate them. Dynamic licenses are pooled licenses that support the Elastic Scaling feature, which enables central tracking, granting, and management of NIOS feature licenses for vNIOS entities in the Grid. You can manually allocate and deallocate dynamic licenses. When installed, Grid-wide licenses are replicated to all members in the Grid. The currently supported Grid-wide licenses are **Security** **Ecosystem**, **Reporting** **Subscription**, **RPZ,** **Flex** **Grid** **Activation** and **FireEye**.
   - **HA**: Indicates whether the appliance is an HA pair.
   - **Feature**: Indicates the features for which the license was installed. For example, if the license was installed for DNS service, this shows **DNS**.
   - **Name**: The FQDN of the appliance.
   - **IPv4** **Address**: The IPv4 address of the appliance, if applicable.
   - **IPv6** **Address**: The IPv6 address of the appliance, if applicable.
   - **Hardware** **ID**: The unique hardware ID of the appliance. The ID is highlighted in red if the license on the appliance was removed.
   - **Serial** **Number**: The serial number of the appliance.
   - **Type** **Context**: Depending on the license type, this field displays the attribute (such as **Model**) that the license controls. This field is blank if the license does not control any attribute type. This field can display one of the following:
     
     - **Leases**: Indicates that this DHCP license supports a specific number of DHCP leases. The number of leases supported is displayed in the **Type** **Details** field.
     - **Model**: Indicates that this vNIOS license supports a specific vNIOS virtual appliance model. The model supported is displayed in the **Type** **Details** field.
   - **Type** **Details**: Information about the attribute type that the license monitors. This field can display the following information for each attribute:
     
     - **Leases**: The number of DHCP leases that the DHCP license supports.
     - **Model**: The model of the NIOS virtual appliance, such as IB-V1410 or IB-V2215.
   - **Expiration**: The expiration date of the license.
   - **Replaced** **Hardware** **ID**: The hardware ID of the appliance whose license was removed.
