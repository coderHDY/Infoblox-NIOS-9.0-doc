---
title: "Member Licenses"
source: "/space/nios90/1857355972"
pageId: "1857355972"
---
To view the information about active licenses that are currently assigned or allocated to NIOS and vNIOS appliances, complete the following steps:

1. Log in to Grid Manager on the Grid Master or System Manager on an independent appliance.
2. Click the **Infoblox** **Grid** or **System** tab -&gt; **Licenses** tab -&gt; **Member** tab. The appliance displays the following information:
   
   - **Type** **of** **License**: The license category. This can be **Static** or **Grid** **Wide**. A static license is a member license obtained for a specific appliance. It is tied to the hardware ID of the appliance and you cannot deallocate it. When installed, Grid-wide licenses are replicated to all members in the Grid. The supported Grid-wide licenses are **Security** **Ecosystem**, **Reporting** **Subscription**, **RPZ,** **Flex** **Grid** **Activation** and **FireEye**.  
     For example, if the license is installed for the DNS service, this column will display **DNS**.
   - **Name**: The FQDN of the appliance.
   - **Validity Type**: The license type according to the validity period. This can be of type **Subscription** or **Temporary**. This field is available from NIOS 9.0.8 onwards. For more information about the supported license types, see [*About License Types*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-1-and-later/about-license-types).  
     After a fresh installation of NIOS 9.0.8, this column is visible by default. After upgrading to NIOS 9.0.8, the column is hidden by default. To make it visible, select the **Validity Type** checkbox in the *Edit Columns* dialog box.
   - **HA**: Indicates weather it is an HA pair.
   - **IPv4** **Address**: The IPv4 address of the appliance, if applicable.
   - **IPv6** **Address**: The IPv6 address of the appliance, if applicable.
   - **Hardware** **ID**: The unique hardware ID of the appliance. The ID is highlighted in red if the license on the appliance is removed.
   - **Serial** **Number**: The serial number of the appliance.
   - **Type** **Context**: Depending on the license type, this field displays the attribute (such as **Model**) that the license controls. This field is blank if the license does not control any attribute type. This field can display one of the following:
     
     - **Leases**: Indicates that this DHCP license supports a specific number of DHCP leases. The number of leases supported is displayed in the **Type** **Details** field.
     - **Model**: Indicates that this vNIOS license supports a specific vNIOS virtual appliance model. The model supported is displayed in the **Type** **Details** field.
   - **Type** **Details**: Information about the attribute type that the license monitors. This field can display the following information for each attribute:
     
     - **Leases**: The number of DHCP leases that the DHCP license supports.
     - **Model**: The model of the NIOS virtual appliance, such as IB-V906.
   - **Expiration**: The expiration date of the license.
   - **Replaced** **Hardware** **ID**: The hardware ID of the appliance whose license was removed.
