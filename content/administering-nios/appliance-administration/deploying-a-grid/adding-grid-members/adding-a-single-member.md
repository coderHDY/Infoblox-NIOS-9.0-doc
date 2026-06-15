---
title: "Adding a Single Member"
source: "/space/nios90/684752977"
pageId: "684752977"
---
The basic steps necessary to add a single member are as follows:

1. Define the network settings of the LAN1 port of the single appliance on the Grid Master.
2. Initiate the join Grid operation during which you specify the VIP or IP address of the Grid Master, the Grid name, and the shared secret on the single appliance. For information, see [*Joining Appliances to the Grid*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129).

On the Grid Master, you can configure any service settings such as DNS zones and records, DHCP networks and address ranges, and other services for a member before or after you join the appliance to the Grid. The basic steps for adding a single member are presented in the following section.  
For information on how to configure a vNIOS appliance as a Grid member, refer to the *Quick* *Start* *Guide* *for* *Installing* *vNIOS* *Software* *on* *VMware* *Platforms*.

## Configuring a Single Member on the Grid Master

> **warning**
>
> **Note**
> 
> If you are converting a high availability (HA) member to a standalone member, ensure that the **Member Type** of the active node is set according to the appliance type:
> 
> - **Virtual NIOS** if the active node is a virtual appliance.
> - **Infoblox** if the active node is a physical appliance.

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab.
2. Expand the Toolbar and click **Add** -> **Add** **Grid** **Member**.
3. In the *Add* *Grid* *Member* wizard, enter the following and click **Next**:
   
   - **Member** **Type**: Specify the appliance type of the Grid member. If the member is an Infoblox appliance, select **Infoblox**, which is the default. For a vNIOS appliance, select **Virtual** **NIOS** for vNIOS virtual appliances, including cloud virtual appliances.
   - **Host** **Name**: Type the FQDN (fully qualified domain name) of the appliance that you are adding to the Grid. Ensure to use a host name containing characters (A-Z or a-z), numbers (0–9), ".", "-", and "_". Additional special characters cannot be used.
   - **Time** **Zone**: If the Grid member is in a different time zone from the Grid, click **Override** and select a time zone.
   - **Comment**: Type a comment that provides some useful information about the appliance, such as its location.
   - **Master Candidate**: Select this option to designate this appliance as a Master Candidate. For supported vNIOS appliances, see [*vNIOS Appliances*](https://docs.infoblox.com/space/vniosspec/1334542471/vNIOS+X5+and+X6+Series+Appliance+Specifications).
4. Enter the following information about the member that you are adding to the Grid and click **Next**:

- **Type of Network Connectivity**: Select the type of network connectivity for the Grid member from the drop-down list:
  
  - **IPv4 and IPv6**: Select this to configure a dual mode Grid member.
  - **IPv4**: Select this to configure an IPv4 Grid member.
  - **IPv6**: Select this to configure an IPv6 Grid member.
  
  Note that Infoblox recommends that you back up the configuration after you convert a Grid to a different mode.  
  Restoring the old backup by performing a forced restore, may prevent the Grid members from rejoining the Grid Master after the restore.
- **Standalone** **Member**: Select this option.
- **Required** **Ports** **and Addresses**: This table lists the network interfaces based on the type of network connectivity of the Grid member. For IPv4 Grid member, specify the network information for LAN1 (IPv4) port and for IPv6 Grid member, specify the network information for LAN1 (IPv6) port. For a dual mode Grid member, specify the network information for both LAN1 (IPv4), and LAN1 (IPv6).

Enter correct information for the following by clicking the field:

- **Interface**: Displays the name of the interface. You cannot modify this.
- **Address**: Type the IPv4 or IPv6 address depending on the type of interface. An IPv6 address is a 128-bit number in colon hexadecimal notation. It consists of eight 16-bit groups of hexadecimal digits separated by colons (example: 2001:db8:0000:0123:4567:89ab:0000:cdef or 2001:db8::123:4567:89ab:0:cdef).
- **Subnet Mask (IPv4) or Prefix Length (IPv6)**: Specify an appropriate subnet mask for IPv4 address or prefix length for IPv6 address. The prefix length ranges from 2 to 127.
- **Gateway:** Type the IPv4 or IPv6 address of the default gateway depending on the type of interface. For IPv6 interface, you can also type **Automatic** to enable the appliance to acquire the IPv6 address of the default gateway and the link MTU from router advertisements.
- **VLAN Tag**: For a VLAN, enter the VLAN tag or ID. You can enter a number from 1 to 4094. Ensure that you configure the corresponding switch accordingly.
- **Port Settings**: From the drop-down list, choose the connection speed that you want the port to use. You can also choose the duplex setting. Choose **Full** for concurrent bidirectional data transmission or **Half** for data transmission in one direction at a time. Select **Automatic** to instruct the NIOS appliance to negotiate the optimum port connection type (full or half duplex) and speed with the connecting switch automatically. This is the default setting. You cannot configure port settings for vNIOS appliances.
- **DSCP Value**: Displays the Grid DSCP value, if configured. To modify, click Override and enter the DSCP value. You can enter a value from 0 to 63. For information about DSCP, see [*Configuring Ethernet Ports*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274166).

1. In the Port Reservation page, do the following:

Begin by checking the Reserve Port checkbox. Note that reserving a switch port does not guarantee its availability once the device must connect. The port is automatically assigned for connectivity to the LAN1 port on the appliance.

Optionally, you can skip connecting port configuration by clicking Next. Click the **Clear** button to remove the selected device from the configuration.

- Click the Select Device button to choose the device for which the port reservation will be associated. You should know the identity of the device to which the Infoblox appliance will connect before taking this step. For Grid member connectivity, the chosen device should be either a switch or a switch-router.
- After choosing the device, choose the Interface with which the reservation will be bound. The drop-down list shows only interfaces that are most recently found to be available by Grid Manager during the last Discovery cycle. This list will not include any ports that are Administratively Up and Operationally Up or that are otherwise already assigned to other networks or Objects.
- The Wizard page also shows a list of any VLANs that are currently configured in the chosen device (**The following VLANs are configured**). This Wizard page does not allow the definition of new VLANs for port configuration–only the assignment of an existing VLAN in the device to your new port reservation. (Recall that you may specify the **VLAN Tag** across which Grid member traffic will travel, when you specified the Grid member information in Step 2 of the Wizard.)
- Check the Configure Port checkbox to define specific Port Control settings for the port reservation.
- Choose the Data VLAN and/or the Voice VLAN settings you may need for the port assignment. Depending on the selected device, the **Voice VLAN** field may or may not appear.
- Set the Admin Status to Up if you need to activate the port after assignment in the current task.
  
  - All Port Control operations require CLI credentials to be entered into Grid Manager. Because some IPAM and DHCP Objects will use Port Control features as part of object creation, CLI credentials are automatically leveraged as part of discovery. Ensure you have the correct sets of CLI credentials for devices in your network.
- Enter a Description for the port assignment. Infoblox recommends doing so to help other technicians to recognize the port assignment event.
- When finished, click Next to continue in the wizard.

1. Optionally, define extensible attributes. For information, see [*About Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).

1. The final step for adding a Grid member is to define when the associated Port Configuration task executes. You may execute it immediately or schedule it for another time and date.

- To create the new port configuration immediately, select Now. The port control task is automatically synchronized to take place at the same time as the activation of the new Grid member.
- You can choose to have Grid Manager execute the port control task at a later time. To do so, select Later. Choose a Selected time by entering or selecting a Start Date (click the calendar icon to choose a calendar date) and a Start Time, and choose a Time Zone.

1. Choose one of the following from the

**Save &...** drop-down button menu:

- Click **Save & Close** to add the single member to the Grid and close the wizard (this is the default).
- Click **Save & Edit** to add the single member to the Grid and launch the editor. You can configure additional properties, such as the MTU size, or add the member to a NAT group.
- Click **Save & New** to add the single member to the Grid and launch the wizard again to add another member.

The communication protocol for all the services in a dual mode (IPv4 and IPv6) Grid member is set to IPv4, by default. You can change the default communication protocol for all the services. For information, see [*Changing the Communication Protocol for a Dual Mode Appliance*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129).
