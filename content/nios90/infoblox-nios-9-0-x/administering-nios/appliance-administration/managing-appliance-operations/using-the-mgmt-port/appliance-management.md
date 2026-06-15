---
title: "Appliance Management"
source: "/space/nios90/1468466665"
pageId: "1468466665"
---
You can restrict administrative access to a NIOS appliance by connecting the MGMT port to a subnet containing only management systems. This approach ensures that only appliances on that subnet can access the Infoblox GUI and receive appliance management communications such as syslog events, SNMP traps, and e-mail notifications from the appliance.  
If you are the only administrator, you can connect your management system directly to the MGMT port. If there are several administrators, you can define a small subnet—such as 10.1.1.0/29, which provides six host IP addresses (10.1.1.1–10.1.1.6) plus the network address 10.1.1.0 and the broadcast address 10.1.1.7—and connect to the NIOS appliance through a dedicated switch (which is not connected to the rest of the network). The figure below shows how an independent appliance separates appliance management traffic from network protocol services. Note that the LAN port is on a different subnet from the MGMT port.

*Appliance* *Management* *from* *One* *or* *More* *Management* *Systems*

*[drawio]*





Similarly, you can restrict management access to a Grid Master to only those appliances connected to the MGMT ports of the active and passive nodes of the Grid Master.  
To enable the MGMT port on an independent appliance or Grid Master for appliance management and then cable the MGMT port directly to your management system or to a network forwarding appliance such as a switch or router:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then click the Edit icon.
2. In the **Network** -&gt; **Basic** tab of the *Grid* *Member* *Properties* editor, add the MGMT port to the Additional Ports and Addresses table as follows:
3. Click the Add icon and select **MGMT** **(IPv4)** to configure an IPv4 address or select **MGMT** **(IPv6)** to configure an IPv6 address for the MGMT port. You can configure both IPv4 and IPv6 addresses for the MGMT port.  
   Grid Manager adds a row for the MGMT port. For an HA pair, it adds two rows, one for each node.
4. Enter the following in the row of the MGMT port for a single Grid Master or independent appliance, and in the rows of the two nodes for an HA Grid Master or independent HA pair:
   
   - **Interface**: Displays the name of the interface. You cannot modify this.
   - **Address:** Type the IP address for the MGMT port, which must be in a different subnet from that of the LAN and HA ports.
   - **Subnet** **Mask** **(IPv4)** **or** **Prefix** **Length** **(IPv6):** For IPv4 address, specify an appropriate subnet mask for the number of management systems that you want to access the appliance through the MGMT port. For IPv6 address, specify the prefix length.
   - **Gateway:** Type the default gateway for the MGMT port. If you need to define any static routes for traffic originating from the MGMT port—such as SNMP traps, syslog events, and email notifications—destined for remote subnets beyond the immediate subnet, specify the IP address of this gateway in the route.
   - **Port** **Settings:** Choose the connection speed that you want the port to use. You can also choose the duplex setting. Choose **Full** for concurrent bidirectional data transmission or **Half** for data transmission in one direction at a time. Select **Automatic** to instruct the NIOS appliance to negotiate the optimum port connection type (full or half duplex) and speed with the connecting switch automatically. This is the default setting. You cannot configure port settings for vNIOS appliances.
   - **DSCP** **Value**: Displays the Grid DSCP value. To modify, click Override and then enter the DSCP value. You can enter a value from 0 to 63. For information about DSCP and Implementing Quality of Service Using DSCP, see [*Configuring Ethernet Ports*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-ethernet-ports).
5. In the **Network** -&gt; **Advanced** tab, make sure that the **Enable** **VPN** **on** **MGMT** **Port** checkbox is not selected.
6. Save the configuration and click **Restart** if it appears at the top of the screen.
7. Log out of Grid Manager.
8. Cable the MGMT port to your management system or to a switch or router to which your management system can also connect.
9. If your management system is in a subnet from which it cannot reach the MGMT port, move it to a subnet from which it can.  
   The Infoblox Grid Manager GUI is now accessible through the MGMT port on the NIOS appliance from your management system.
10. Open an Internet browser window and enter the IP address of the MGMT port as follows: *https://&lt;IP* *address* *of* *MGMT* *port&gt;*.
11. Log in to Grid Manager.
12. Check the *Detailed* *Status* panel of the Grid member to make sure the status icons are green.
