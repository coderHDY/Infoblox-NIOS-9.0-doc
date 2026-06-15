---
title: "Configuring the IPMI Network Interface"
source: "/space/nios90/1395851452"
pageId: "1395851452"
---
You must configure the IPMI network interface before you can access the appliance remotely. To configure the IPMI network interface:

1. **Independent** **appliance**: From the **System** tab, select the **System** **Manager** tab, expand the Toolbar and click **System** **Properties** -> **Edit**.  
   **Member:** From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox, and then click the Edit icon.
2. In the **LOM** tab, complete the following in the Network Configuration table:
   
   - **Address**: Enter the IPMI interface address here.
   - **Subnet** **Mask**: Enter the subnet mask for the IPMI interface.
   - **Gateway**: Enter the gateway address for the IPMI interface.
3. Save the configuration.
