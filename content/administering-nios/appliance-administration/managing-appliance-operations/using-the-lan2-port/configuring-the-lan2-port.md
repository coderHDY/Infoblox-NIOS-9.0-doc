---
title: "Configuring the LAN2 Port"
source: "/space/nios90/1481048379"
pageId: "1481048379"
---
Before you enable the LAN2 port to provide DHCP and DNS services, you must specify its IP address and other properties. You can configure both IPv4 and IPv6 addresses for the LAN2 port of an IPv4, IPv6 and dual mode (IPv4 and IPv6) Grid member.  
To configure the LAN2 port:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox, and then click the Edit icon.
2. In the **Network** -> **Basic** tab of the *Grid Member Properties* editor, click the Add icon of the **Additional Ports and Addresses** table and select **LAN2 (IPv4)** or **LAN2 (IPv6)** from the drop-down list. Enter the following:
   
   - **Interface**: Displays the name of the interface. You cannot modify this.
   - **Address:** Type the IP address for the LAN2 port, which must be in a different subnet from that of the LAN1 and HA ports.
   - **Subnet Mask (IPv4) or Prefix Length (IPv6):** Specify an appropriate subnet mask for IPv4 address and prefix length for IPv6 address.
   - **Gateway:** Type the default gateway for the LAN2 port.
   - **VLAN Tag**: Enter the VLAN tag ID if the port is configured for VLANs. You can enter a number from 1 to 4095.For information about VLAN, see [*Configuring Ethernet Ports*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274166)[*.*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274166/Configuring+Ethernet+Ports#AboutVirtualLANs)
   - **Port Settings:** From the drop-down list, choose the connection speed that you want the port to use. You can also choose the duplex setting. Choose **Full** for concurrent bidirectional data transmission or **Half** for data transmission in one direction at a time. Select **Automatic** to instruct the NIOS appliance to negotiate the optimum port connection type (full or half duplex) and speed with the connecting switch automatically. This is the default setting. You cannot configure port settings for vNIOS appliances.
   - **DSCP Value**: Displays the Grid DSCP value. To modify, click Override and then enter the DSCP value. You can enter a value from 0 to 63. For information about DSCP and Implementing Quality of Service Using DSCP, see [*Configuring Ethernet Ports*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274166)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274166/Configuring+Ethernet+Ports#bookmark901)
   - **LAN2 Virtual Router ID (if HA):** If the appliance is in an HA pair, enter a VRID number.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

The *Detailed* *Status* panel displays the status of the LAN2 port. In an HA pair, only the active node displays the LAN2 information.
