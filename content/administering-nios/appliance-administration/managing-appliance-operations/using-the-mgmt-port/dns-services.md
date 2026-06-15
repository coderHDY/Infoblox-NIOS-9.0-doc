---
title: "DNS Services"
source: "/space/nios90/1468499408"
pageId: "1468499408"
---
You can configure a single independent appliance or single Grid member to provide DNS services through the MGMT port in addition to the LAN port. For example, the appliance can provide DNS services through the MGMT port for internal clients on a private network, and DNS services through the LAN port for external clients on a public network.  
While providing DNS services on the MGMT port, you can still use that port simultaneously for appliance management. The figure below shows a management system communicating with a single independent appliance through its MGMT port while the appliance also provides DNS services on that port to a private network. Additionally, the appliance provides DNS services to an external network through its LAN port.

*DNS* *Services* *on* *the* *LAN* *and* *MGMT* *Ports,* *and* *appliance* *Management* *on* *the* *MGMT* *Port*

*[drawio]*





Like a single independent appliance, a single Grid member can also support concurrent DNS traffic on its MGMT and LAN ports. However, because you manage all Grid members through the Grid Master, a Grid member only uses an enabled MGMT port to send SNMP traps, syslog events, and email notifications, and to receive SSH connections.  
In addition, the active node of an HA pair can provide DNS services through its MGMT port. To use this feature, you must enable DNS services on the MGMT ports of both nodes in the HA pair and specify the MGMT port IP addresses of both nodes on the DNS client as well, in case there is a failover and the passive node becomes active. Note that only the active node can respond to queries that it receives. If a DNS client sends a query to the MGMT port of the node that happens to be the passive node, the query can eventually time out and fail.  
To enable DNS services on the MGMT port of an appliance:

1. From the** Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox, and then click the Edit icon.  
   **Note**:  
   You must enable the MGMT port before modifying its port settings.  
   You must mandatorily configure the LAN interface before joining the HA nodes to the Grid. If you join the nodes with VLAN tagging already enabled on HA, the new nodes must join with VLAN tagging only. If you join the nodes using the MGMT interface, you must enable VLAN tagging for the new nodes.
2. In the **Network** -> **Basic** tab of the *Grid* *Member* *Properties* editor, add the MGMT port to the Additional Ports and Addresses table as follows:
3. Click the Add icon and select **MGMT** **(IPv4)** to configure an IPv4 address or select **MGMT** **(IPv6)** to configure an IPv6 address for the MGMT port. You can configure both IPv4 and IPv6 address for the MGMT port.  
   Grid Manager adds a row for the MGMT port. For an HA pair, it adds two rows, one for each node.
4. Enter the following in the row of the MGMT port for a single Grid Master or independent appliance, and in the rows of the two nodes for an HA Grid Master or independent HA pair:
   
   - **Interface**: Displays the name of the interface. You cannot modify this.
   - **Address:** Type the IP address for the MGMT port, which must be in a different subnet from that of the LAN and HA ports.
   - **Subnet** ** Mask** ** (IPv4) ** **or ** **Prefix ** **Length ** **(IPv6):** For IPv4 address, specify an appropriate subnet mask for the number of management systems that you want to access the appliance through the MGMT port. For IPv6 address, specify the prefix length.
   - **Gateway:** Type the default gateway for the MGMT port. If you need to define any static routes for traffic originating from the MGMT port—such as SNMP traps, syslog events, and email notifications—destined for remote subnets beyond the immediate subnet, specify the IP address of this gateway in the route.
   - **Port** ** Settings:** Choose the connection speed that you want the port to use. You can also choose the duplex setting. Choose **Full** for concurrent bidirectional data transmission or **Half** for data transmission in one direction at a time. Select **Automatic** to instruct the NIOS appliance to negotiate the optimum port connection type (full or half duplex) and speed with the connecting switch automatically. This is the default setting. You cannot configure port settings for vNIOS appliances.
   - **DSCP** ** Value**: Displays the Grid DSCP value. To modify, click **Override** and enter the DSCP value. You can enter a value from 0 to 63. For information about DSCP and Implementing Quality of Service Using DSCP, see [*Configuring Ethernet Ports*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274166).
5. Click **Save** **&** **Close** to save your settings for the MGMT port.
6. From the **Data** **Management** tab, select the **DNS** tab -> -> **Members** tab -> *Grid_member* checkbox, and then click the Edit icon.
7. In the **General** -> **Basic** tab of the *Member* *DNS* *Properties* editor, do the following:
   
   - If you are running DNS service for IPv4, select the IPv4 checkbox for **MGMT** under **DNS** **Interfaces**.
   - If you are running DNS service for IPv6, select the IPv6 checkbox for **MGMT** under **DNS** **Interfaces**.
8. In the **General** -> **Advanced** tab, select one of the following from the **Send** **queries** **from** and the **Send** **notify** **messages** **and** **zone** **transfer** **requests** **from** drop-down lists:
   
   - **VIP**: The appliance uses the IP address of the HA port as the source for queries, notifies, and zone transfer requests.
   - **MGMT**: The appliance uses the IP address of the MGMT port as the source for queries, notifies, and zone transfer requests.
   - **LAN2:** The appliance uses the IP address of the LAN2 port as the source for queries, notifies, and zone transfer requests.
   - **Any**: The appliance chooses which port to use as the source for queries, notifies, and zone transfer requests.  
     The **Send** **queries** **from** drop-down list also includes loopback IP addresses that you configured. You can select a loopback address as the source for queries.
9. Save the configuration and click **Restart** if it appears at the top of the screen.

To see that the appliance now also serves DNS on the MGMT port:

1. From the **Data** **Management** tab, select the **DNS** tab -> -> **Members** tab -> *Grid_member* checkbox.
2. Expand the Toolbar and click **View** -> **View** **DNS** **Configuration**.
3. Check that the IP address of the MGMT port appears in the address match list in the listen-on substatement.
