---
title: "Enabling Grid Communications over the MGMT Port for Existing Grid Members"
source: "/space/nios90/1468499444"
pageId: "1468499444"
---
To enable the MGMT port for Grid communications on an existing single or HA Grid member:

1. Log in to the Grid Master with a superuser account.
2. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then click the Edit icon.
   
   Note that you must enable the MGMT port before modifying its port settings. See the Using the MGMT Port page.
3. In the **Network** -&gt; **Basic** tab of the *Grid* *Member* *Properties* editor, add the MGMT port to the Additional Ports and Addresses table as follows:
4. Click the Add icon and select **MGMT** **(IPv4)** to configure an IPv4 address or select **MGMT** **(IPv6)** to configure an IPv6 address for the MGMT port. You can configure both IPv4 address and IPv6 address for the MGMT port.  
   Grid Manager adds a row for the MGMT port. For an HA pair, it adds two rows, one for each node.
5. Enter the following in the row of the MGMT port for a single Grid Master or independent appliance, and in the rows of the two nodes for an HA Grid Master or independent HA pair:
   
   - **Interface**: Displays the name of the interface. You cannot modify this.
   - **Address:** Type the IP address for the MGMT port, which must be in a different subnet from that of the LAN and HA ports.
   - **Subnet** **Mask** **(IPv4)** **or** **Prefix** **Length** **(IPv6):** For IPv4 address, specify an appropriate subnet mask for the number of management systems that you want to access the appliance through the MGMT port. For IPv6 address, specify the prefix length.
   - **Gateway:** Type the default gateway for the MGMT port. If you need to define any static routes for traffic originating from the MGMT port—such as SNMP traps, syslog events, and email notifications—destined for remote subnets beyond the immediate subnet, specify the IP address of this gateway in the route.
   - **Port** **Settings:** Choose the connection speed that you want the port to use. You can also choose the duplex setting. Choose **Full** for concurrent bidirectional data transmission or **Half** for data transmission in one direction at a time. Select **Automatic** to instruct the NIOS appliance to negotiate the optimum port connection type (full or half duplex) and speed with the connecting switch automatically. This is the default setting. You cannot configure port settings for vNIOS appliances.
   - **DSCP** **Value**: Displays the Grid DSCP value. To modify, click **Override** and enter the DSCP value. You can enter a value from 0 to 63. For information about DSCP and Implementing Quality of Service Using DSCP, see [*Configuring Ethernet Ports*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-ethernet-ports).
6. In the **Network** -&gt; **Advanced** tab, select the **Enable** **VPN** **on** **MGMT** **Port** checkbox.
7. In the **Security** tab, do the following:
   
   - **Restrict** **Remote** **Console** **and** **Support** **Access** **to** **MGMT** **Port:** Select this checkbox to restrict SSH (Secure Shell) v2 access to the MGMT port only. This restricts Infoblox Technical Support (root access) and remote console connections—both of which use SSH v2—to just the MGMT port. For an HA pair, you can make an SSH v2 connection to the MGMT port on both the active and passive nodes.  
     Clear the checkbox to allow SSH v2 access to both the MGMT and LAN ports. For an HA pair, you can make an SSH v2 connection to the MGMT and LAN ports on both the active and passive nodes.
8. Save the configuration and click **Restart** if it appears at the top of the screen.  
   The master communicates the new port settings to the member, which immediately begins using them. The member stops using its LAN port for Grid communications and begins using the MGMT port.
9. To confirm that the member still has Grid connectivity, check that the status icons for that member are green on the *Detailed* *Status* and *Grid* panels.
