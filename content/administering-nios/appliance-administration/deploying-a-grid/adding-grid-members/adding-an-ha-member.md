---
title: "Adding an HA Member"
source: "/space/nios90/684327111"
pageId: "684327111"
---
The basic steps necessary to add an HA member are as follows:

1. Define the network settings of the HA pair on the Grid Master.
2. Initiate the join Grid operation, during which you specify the VIP or IP address of the Grid Master, the Grid name, and the shared secret on the HA pair. For information, see [*Joining Appliances to the Grid*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129).

In addition, on the Grid Master you can configure the service settings such as DNS zones and records, DHCP networks and address ranges, and so on for a member before or after you join the HA pair to the Grid. The basic steps for adding an HA member are presented below.

> **warning**
>
> **Note**
> 
> The procedure for adding an HA pair to a Grid when it uses the MGMT port of the active node for Grid communications differs slightly from that described below. See [*Grid*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129)[*Communications*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129)

If you are setting up HA with vNIOS instances deployed in AWS, Google Cloud, and Azure cloud, as a prerequisite, you must set up a DNS resolver from the *Grid Properties Editor* for NIOS to resolve the cloud service URL. For more information, see [*Enabling DNS Resolution*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764908).

# Configuring an HA Member on the Grid Master

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -> **Members** tab.
2. Expand the Toolbar and click **Add** -> **Add** **Grid** **Member**.
3. In the *Add* *Grid* *Member* wizard, enter the following and click **Next**:
   
   - **Member** **Type**: Specify the appliance type of the Grid member. If the member is an Infoblox appliance, select **Infoblox**, which is the default. For a vNIOS appliance on VMware, select **Virtual** **NIOS**. For a hybrid HA setup (combination of a physical appliance and a virtual appliance), you can select **Infoblox** or **Virtual** **NIOS**.
   - **Host** **Name:** Type the FQDN (fully qualified domain name) for the HA member. Ensure to use a host name containing characters (A-Z or a-z), numbers (0–9), ".", "-", and "_". Additional special characters cannot be used.
   - **Time** **Zone**: If you want the Grid member to have a different time zone, click **Override** and select a time zone.
   - **Comment**: Type a comment that provides some useful information about the appliance, such as its location.
   - **Master** **Candidate**: select this checkbox to designate this appliance as a Master Candidate. For supported vNIOS appliances, see [*vNIOS Appliances*](https://docs.infoblox.com/space/vniosspec/1334542471/vNIOS+X5+and+X6+Series+Appliance+Specifications).
4. Enter the following information about the member that you are adding to the Grid and click **Next**:
   
   - **Type** **of** **Network** **Connectivity**: Select the type of network connectivity for the HA member from the drop-down list:  
     Note that HA configuration with IPv6 networks is not supported on public cloud platforms.
     
     - **IPv4** **and** **IPv6**: Select this to configure a dual mode HA member.
     - **IPv4**: Select this to configure an IPv4 HA member.
     - **IPv6**: Select this to configure an IPv6 HA member.
   - **High** **Availability** **Pair**: Select this option and complete the following:  
     Note: If you are deploying HA over public cloud platform such as AWS, Azure, or Google Cloud, see the *Configuring an HA Member Deployed on Public Cloud *section for additional steps.
     
     - **Virtual** **Router** **ID**: Enter a unique VRID number—from 1 to 255—for the local subnet.
     - **Send** **HA** **and** **Grid** **Communication** **Over**: This field is displayed only when you are configuring a dual mode HA member. Select either **IPv4** or **IPv6** as the communication protocol for VRRP advertisements and for joining the Grid Master.
       
       Note that Infoblox recommends that you back up the configuration after you convert a Grid to a different mode.  
       Restoring the old backup by performing a forced restore, may prevent the Grid members from rejoining the Grid Master after the restore.
     - **Required** **Ports** **and** **Addresses**: This table lists the network interfaces based on the type of network connectivity. For IPv4 HA member, specify the network information for VIP (IPv4), Node1 HA (IPv4), Node2 HA (IPv4), Node1 LAN1 (IPv4), and Node2 LAN1 (IPv4) interfaces. For IPv6 HA member, specify the network information for VIP (IPv6), Node1 LAN1 (IPv6), and Node2 LAN1 (IPv6) interfaces.  
       For a dual mode HA member, if you select **IPv4** in the **Send** **HA** **and** **Grid** **Communication** **over** field, specify the network information for the following interfaces: VIP (IPv4), Node1 HA (IPv4), Node1 LAN1 (IPv4), Node2 HA (IPv4), Node2 LAN1 (IPv4), VIP (IPv6), Node1 LAN1 (IPv6), and Node2 LAN1 (IPv6) interfaces.  
       For a dual mode HA member, if you select **IPv6** in the **Send** **HA** **and** **Grid** **Communication** **over** field, specify the network information for the following interfaces: VIP (IPv4), Node1 LAN1 (IPv4), Node2 LAN1 (IPv4), VIP (IPv6), Node1 LAN1 (IPv6), and Node2 LAN1 (IPv6) ports.  
       Enter correct information for the following by clicking the field:
       
       - **Interface**: Displays the name of the interface. You cannot modify this.
       - **Address**: Type the IPv4 or IPv6 address depending on the type of interface. An IPv6 address is a 128-bit number in colon hexadecimal notation. It consists of eight 16-bit groups of hexadecimal digits separated by colons (example: 2001:db8:0000:0123:4567:89ab:0000:cdef or 2001:db8::123:4567:89ab:0:cdef).
       - **Subnet** **Mask** **(IPv4)** **or** **Prefix** **Length** **(IPv6)**: Specify an appropriate subnet mask for IPv4 interface or prefix length for IPv6 interface. The prefix length ranges from 2 to 127.
       - **Gateway**: Type the IPv4 or IPv6 address of the default gateway depending on the type of interface. For IPv6 interface, you can also type **Automatic** to enable the appliance to acquire the IPv6 address of the default gateway and the link MTU from router advertisements.
       - **VLAN** **Tag**: For a VLAN, enter the VLAN tag or ID. You can enter a number from 1 to 4094. Ensure that you configure the corresponding switch accordingly.
       - **Port** **Settings**: From the drop-down list, choose the connection speed that you want the port to use. You can also choose the duplex setting. Choose **Full** for concurrent bidirectional data transmission or **Half** for data transmission in one direction at a time. Select **Automatic** to instruct the NIOS appliance to negotiate the optimum port connection type (full or half duplex) and speed with the connecting switch automatically. This is the default setting. You cannot configure port settings for vNIOS appliances.
       - **DSCP** **Value**: Displays the Grid DSCP value, if configured. To modify, click **Override** and enter the DSCP value. You can enter a value from 0 to 63. For information about DSCP, see [*Implementing Quality of Service Using DSCP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274166).  
         Note that when the system operates in HA mode, should the IPv6–addressed VIP value be deleted, the IPv6 address of the HA port will also be deleted.
5. Optionally, define extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)*.*
6. Do one of the following:
   
   - Click **Save & Edit** to add the HA member to the Grid and launch the editor. You can configure additional properties, such as the MTU size, or add the member to a NAT group.
   - Click **Save & New** to add the HA member to the Grid and launch the wizard again to add another member.
   - Click **Save & Close** to add the HA member to the Grid and close the wizard.

The communication protocol for all the services in a dual mode (IPv4 and IPv6) HA member is the same protocol as the one that is used for VRRP advertisements. For example, if you select **IPv4** in the **Send** **HA** **and** **Grid** **Communication** **over** field in step 2 of the *Add* *Grid* *Member* wizard, then IPv4 is set as the communication protocol for all the services. However, you can override the communication protocol for all the services in a dual mode HA member. For information, see [*Changing the Communication Protocol for a Dual Mode Appliance*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129).

## Configuring an HA Member Deployed on Public Cloud

Starting from NIOS 9.0.4, Grid Masters and members deployed on public clouds can be configured with HA. To set up an HA member deployed on AWS, Google Cloud, and Azure public cloud platforms, configure the following additional settings as part of step 4 in the *Configuring an HA Member on the Grid Master* section:

> **warning**
>
> **Note**
> 
> HA configuration with IPv6 networks is not supported on public cloud platforms.

- **Public Cloud**: Select the checkbox If you are deploying the vNIOS instance on a public cloud platform, and then choose the platform from the drop-down list. This option appears after you enable **High** **Availability** **Pair**.
- **Ports** **and** **Addresses**: According to the platform you selected in the **Public Cloud** field,  **Ports and Addresses** table displays an additional field that you must configure for the HA interface of both nodes:
  
  - **Interface ID** for AWS: Specify the network interface ID of the HA interface configured for the corresponding VM instance in the Amazon EC2 console.
  - **Nic Name** for Azure: Specify the name of the HA interface configured for the corresponding VM instance in the Microsoft Azure portal.
  - **Compute Name** for Google Cloud: Specify the compute name configured for the corresponding VM instance in the Google Cloud console.  
    Note that for vNIOS for Google Cloud instances, you must also specify values in the **Subnet Mask** and **Gateway** fields as they are not auto-populated.

For additional steps that must be performed in the cloud platform portal, see the* *[*Infoblox vNIOS installation guide*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances) of the corresponding cloud platform.
