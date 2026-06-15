---
title: "Modifying Ethernet Port Settings"
source: "/space/nios90/1327464555"
pageId: "1327464555"
---
By default, the NIOS appliance automatically negotiates the optimal connection speed and transmission type (full or half duplex) on the physical links between the 10/100Base-T and 10/100/1000Base-T ports on the NIOS appliance and the Ethernet ports on a connecting switch. It is usually unnecessary to change the default auto-negotiation setting; however, you can manually configure connection settings for a port if necessary.

Occasionally, for example, even though both the NIOS appliance and the connecting switch support 1000-Mbps (megabits per second) full-duplex connections, they might fail to auto-negotiate that speed and type, and instead connect at lower speeds of either 100 or 10 Mbps using potentially mismatched full- and half-duplex transmissions. If this occurs, first determine if there is a firmware upgrade available for the switch. If so, apply the firmware upgrade and test the connection. If that does not resolve the issue, manually set the ports on the NIOS appliance and on the switch to make 1000-Mbps full-duplex connections.

To change Ethernet port settings:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox, and then click the Edit icon.  
   **Note:** You must enable the MGMT port before modifying its port settings. See [*Using the MGMT Port*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129).
2. In the **Network** tab of the *Grid* *Member* *Properties* editor, the Required Ports and Addresses table lists the network settings that were configured. This table lists the network settings of LAN1(IPv4) interface for an IPv4 member and LAN1(IPv6) interface for an IPv6 member. For a dual mode Grid member, this table lists the settings for both LAN1(IPv4) and LAN1(IPv6) interfaces. Complete the following to modify port settings:
   
   - **Interface**: Displays the name of the interface. You cannot modify this.
   - **Address:** Click the field and modify the IP address for the LAN1 port, which must be in a different subnet from that of the LAN2 and HA ports.
   - **Subnet** **Mask** **(IPv4)** **or** **Prefix** **Length** **(IPv6):** For IPv4 address, click the field and specify an appropriate subnet mask and for IPv6 address, specify the prefix length.
   - **Gateway:** Click the field and modify the default gateway for the LAN1 port.
   - **VLAN** **Tag**: Click the field and enter the VLAN tag ID if the port is configured for VLANs. You can enter a number from 1 to 4095.
   - **Port** **Settings:** From the drop-down list, choose the connection speed that you want the port to use. You can also choose the duplex setting. Choose **Full** for concurrent bidirectional data transmission or **Half** for data transmission in one direction at a time. Select **Automatic** to instruct the NIOS appliance to negotiate the optimum port connection type (full or half duplex) and speed with the connecting switch automatically. This is the default setting. You cannot configure port settings for vNIOS appliances.
   - **DSCP** **Value**: Displays the Grid DSCP value. To modify, click **Override** and enter the DSCP value. You can enter a value from 0 to 63.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

> **custom**
>
> - The port settings on the connecting switch must be identical to those you set on the NIOS appliance.
> - Link setting not supported and modifying the link setting is ineffective when virtual DNS Cache Acceleration (vDCA) or DNS Infrastructure Protection is enabled. You may notice that the product restarts after modifying these settings.
