---
title: "Modifying LOM Settings"
source: "/space/nios90/1395851481"
pageId: "1395851481"
---
To modify LOM settings:

1. **Grid:** From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, expand the Toolbar and click** Grid** **Properties** -&gt; **Edit**.  
   **Independent** **appliance**: From the **System** tab, select the **System** **Manager** tab, expand the Toolbar and click **System** **Properties** -&gt; **Edit**.  
   **Member:** From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then click the Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. Modify the following:
   
   - **Enable** **Lights** **Out** **Management:** LOM is disabled by default. Select this checkbox to enable LOM. When you enable or disable this for the Grid, all members inherit the same setting.
   - **Network** **Configuration**: Click the fields in the table to modify the IPv4 address, subnet mask, and gateway address for the IPMI interface. For an HA pair, the appliance displays information only for the nodes that support IPMI. Enter the information for the following fields: **Address**, **Subnet** **Mask**, and **Gateway**. The **Node** and **LAN** **Address** fields are read-only, and you cannot modify them. The LAN address is the IPMI interface address.
   - **User** **Accounts**: Click the Add icon to add new LOM users. You can also select an existing LOM user and click the Edit icon to modify the user settings, as described in  Adding LOM User Accounts above.
3. Save the configuration.
