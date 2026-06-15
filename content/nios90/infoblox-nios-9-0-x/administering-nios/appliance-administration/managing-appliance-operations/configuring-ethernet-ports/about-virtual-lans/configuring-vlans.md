---
title: "Configuring VLANs"
source: "/space/nios90/1327071294"
pageId: "1327071294"
---
When you first set up a NIOS appliance, you can assign VLANs through the Grid Setup Wizard. After the initial setup, you can assign VLANs to the LAN1 or LAN2 ports in the Required Ports and Addresses table, as described in  Modifying Ethernet Port Settings.  
On a Grid member, you can assign up to 10 VLANS for each protocol (IPv4 or IPv6) on the LAN1 and LAN2 ports. You can assign up to 10 IPv4 VLAN addresses and 10 IPv6 VLAN addresses for each interface. You can configure only IPv4 VLAN addresses for an IPv4 Grid member and only IPv6 VLAN addresses for an IPv6 Grid member, but for a dual mode Grid member you can configure both IPv4 and IPv6 VLAN addresses.  
To assign additional VLANs to the LAN1 or LAN2 port, complete the following:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then click the Edit icon.
2. Select the **Network** -&gt; **Basic** tab in the *Grid* *Member* *Properties* editor.
3. In the **Additional** **Ports** **and** **Addresses** table, click the Add icon and select either **MGMT** **(IPv4),** **MGMT** **(IPv6),** **LAN2** **(IPv4)**, **LAN2** **(IPv6)**, **Additional** **Address** **(loopback)** **(IPv4),** **Additional** **Address** **(loopback)** **(IPv6),** **LAN1** **(VLAN)(IPv4),** **LAN1** **(VLAN)(IPv6),** **LAN2** **(VLAN)(IPv4)** or **LAN2** **(VLAN)(IPv6)** from the drop-down list. You can add up to 10 IPv4 and 10 IPv6 VLANs for each interface.
   
   - For vNIOS appliances, some of the options in the drop-down list may vary depending on your vNIOS configuration. For example, if you are using a single network interface instance of vNIOS for Google Cloud, you will see choices specific to the LAN1 interface and Additional Address only. For more information, see the vNIOS documentation specific to your product at [*Appliances*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances).
   - Note that you can configure only IPv4 VLAN addresses for an IPv4 Grid member and only IPv6 VLAN addresses for an IPv6 Grid member, but for a dual mode Grid member you can configure both IPv4 and IPv6 VLAN addresses.
   - **MGMT** **(IPv4)**: Select this to configure IPv4 address for MGMT port.
   - **MGMT** **(IPv6)**: Select this to configure IPv6 address for MGMT port.
   - **LAN2** **(IPv4)**: Select this to configure IPv4 address for the LAN2 port for DHCP or DNS. This is not applicable to Trinzic 100 appliance.
   - **LAN2** **(IPv6)**: Select this to configure IPv6 address for the LAN2 port for DHCP or DNS. This is not applicable to Trinzic 100 appliance.
   - **Additional** **Address** **(loopback)** **(IPv4):** Select this to add a non-anycast IPv4 address to the loopback interface. Note that you can configure this for IPv4 and dual mode Grid member.
   - **Additional** **Address** **(loopback)** **(IPv6)**: Select this to add a non-anycast IPv6 address to the loopback interface. Note that you can configure this for IPv6 and dual mode Grid member.
   - **LAN1** **(VLAN)** **(IPv4)**: Select this to add a VLAN to the LAN1 interface. You can add up to 10 IPv4 VLAN addresses. You can configure this for IPv4 and dual mode Grid member. VLAN tagging is not supported in public cloud.
   - **LAN1** **(VLAN)** **(IPv6)**: Select this to add a VLAN to the LAN1 interface. You can add up to 10 IPv4 and 10 IPv6 VLAN addresses. You can configure this for IPv6 and dual mode Grid member. VLAN tagging is not supported in public cloud.
   - **LAN2** **(VLAN)** **(IPv4)**: Select this to add a VLAN to the LAN2 interface. You can add up to 10 IPv4 VLAN addresses. You can configure this for IPv4 and dual mode Grid member. VLAN tagging is not supported in public cloud.
   - **LAN2** **(VLAN)** **(IPv6):** Select this to add a VLAN to the LAN2 interface. You can add up to 10 IPv6 VLAN addresses. You can configure this for IPv6 and dual mode Grid member. VLAN tagging is not supported in public cloud.
4. Enter the following:
   
   - **Interface**: Displays the name of the VLAN interface. This can be **LAN1** **(VLAN)(IPv4)**, **LAN1** **(VLAN)(IPv6),** **LAN2** **(VLAN)(IPv4),** or **LAN2** **(VLAN)(IPv6)** depending on your selection. You cannot modify this.
   - **Address:** Type the IP address for the VLAN port.
   - **Subnet** **Mask** **(IPv4)** **or** **Prefix** **Length** **(IPv6):** For IPv4 address, specify an appropriate subnet mask and for IPv6 address, specify the prefix length. The prefix length ranges from 2 to 127, with common-sense values ranging from /48 to /127 due to the larger number of bits in the IPv6 address.
   - **Gateway:** Type the IPv4 or IPv6 default gateway address for the VLAN port depending on the type of interface. For IPv6 interface, you can also type **Automatic** to enable the appliance to acquire the IPv6 address of the default gateway and the link MTU from router advertisements.   
     You can now define a link-local address as the default IPv6 gateway and isolate the LAN segment so the local router can provide global addressing and access to the network and Internet. This is supported for both LAN1 and LAN2 interfaces as well as LAN1 and LAN2 in the failover mode.
   - **VLAN** **Tag**: Enter the VLAN tag or ID. You can enter a number from 1 to 4094. Ensure that you configure the corresponding switch accordingly.
   - **Port** **Settings:** For IPv4 only. From the drop-down list, choose the connection speed that you want the port to use. You can also choose the duplex setting. Choose **Full** for concurrent bidirectional data transmission or **Half** for data transmission in one direction at a time. Select **Automatic** to instruct the NIOS appliance to negotiate the optimum port connection type (full or half duplex) and speed with the connecting switch automatically. This is the default setting. You cannot configure port settings for vNIOS appliances.
   - **DSCP** **Value**: Displays the Grid DSCP value, if configured. To modify, click **Override** and enter the DSCP value. You can enter a value from 0 to 63.
5. Save the configuration and click **Restart** if it appears at the top of the screen.
