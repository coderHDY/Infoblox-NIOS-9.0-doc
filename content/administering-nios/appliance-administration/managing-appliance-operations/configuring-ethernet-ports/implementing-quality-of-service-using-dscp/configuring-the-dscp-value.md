---
title: "Configuring the DSCP Value"
source: "/space/nios90/1327464518"
pageId: "1327464518"
---
The DSCP value is set to zero (lowest priority) by default. You can change this value for the Grid and override the value at the member level. When you configure the DSCP value at the Grid or member level, all outgoing IP traffic on all interfaces uses the same value. Valid DSCP values are from 0 to 63. You can also set the DSCP value using the Infoblox CLI. For more information, refer to the *Infoblox* *CLI* *Guide*.  
To configure the DSCP value for the Grid:

1. From the **Infoblox Grid** tab ->** Grid** **Manager** tab, click** Grid** **Properties** -> **Edit** from the toolbar.
2. In the **General** -> **Advanced** tab of the *Grid* *Properties* editor, complete the following:
   
   - **DSCP** **Value**: Enter a value from 0 to 63. The default is 0 and it represents the lowest priority.
3. Save the configuration.

To override the DSCP value for a member:

1. From the **Infoblox** **Grid** tab, select the **Grid Manager** tab -> **Members** tab -> *Grid_member* checkbox, and then click the Edit icon.
2. In the **Network** tab -> **Basic** tab of the *Grid* *Member* *Properties* editor, complete the following:

- **DSCP** **Value**: Click **Override**, and then enter a value from 0 to 63. The default is 0 and it represents the lowest priority.

1. Save the configuration.

You can override the Grid and member DSCP value at the interface level. For more information, see the following:

- For the LAN1 port, see [*Modifying Ethernet Port Settings*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1327464555).
- For the LAN2 port, see [*Using the Lan2 Port*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765014).
- For the MGMT port, see [*Using The MGM Port*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129).
