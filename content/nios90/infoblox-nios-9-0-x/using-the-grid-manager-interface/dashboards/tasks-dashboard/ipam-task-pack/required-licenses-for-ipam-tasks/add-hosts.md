---
title: "Add Hosts"
source: "/space/nios90/1346207769"
pageId: "1346207769"
---
Host records provide a unique approach to the management of DNS, DHCP, and IPAM data. By using host records, you can manage multiple DNS records and DHCP and IPAM data collectively, as one object on the appliance. You can add IPv4 and IPv6 addresses to host records from the Tasks Dashboard or the **Data** **Management** tab. Note that when you add a host record from the Tasks Dashboard, they are configured only for DNS. For more information about Infoblox host records, see [*About Host Records*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/about-host-records).

To add host records from the Tasks Dashboard:

1. Click **Add** **Hosts** in the IPAM Task Pack and complete the following in the *Add* *Hosts* wizard:
   
   - **Network** **View**: This appears only when you have multiple network views. From the drop-down list, select the network view in which you want to create the host record.
   - **Zone** **Name**: Click **Select** to select a DNS zone from the *Zone* *Selector* dialog box.
   - **Exclude** **from** **Network** **Discovery** and **Immediate** **Discovery**. When creating the new Host record, you can direct NIOS to immediately discover the host, or to exclude it from network discovery. By default, the Add Hosts task enables immediate discovery.
   - **DNS** **View**: Displays the DNS view of the selected zone.
   - **Hosts**: Do one of the following to add a host record:

Click the Add icon and the appliance adds a row to the table. Complete the following in the table to add a new host record:

- **Name**: Enter the name of the host record.
- **Zone**: Displays the DNS zone you select in **Zone** **Name**. When you enter a different zone here, the appliance displays an error message.
- **Address**: Enter the IP address you want to associate with this host record.

or

Click the Next Available icon to have the appliance search for the next available IP address for the host record. For information about the next available IP address, see [*Configuring the Next Available Network or IP Address*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-the-next-available-network-or-ip-add). Complete the following in the Next Available IP section:

- **Create** **new** **host** **addresses** **under**: Click **Select** to select the network or address range in the *Network/Range* *Selector* dialog box from which you want the appliance to search for the next available IP address for this host record.
- **Number** **of** **new** **host** **addresses**: Enter the number of host addresses. Note that if there is not enough space in the selected network or address range to create the number of host addresses specified here, Grid Manager displays an error message. The maximum number is 20 at a time. Note that when you have existing host addresses in the table and you select one, the number you enter here includes the selected host address.
- Click **Add** ** Next** to add the IP addresses to their corresponding hosts. Grid Manager lists the host addresses in the table. Ensure that you enter a name for each host record.
- **Extensible** **Attributes**
  
  - **Apply** **to** **all** **above** **hosts**: Select this to associate extensible attributes with all hosts that you have defined. This is selected by default. You can define and associate multiple extensible attributes with multiple hosts at once.
  - **Apply** **to** **selected** **host**: Select this to associate extensible attributes with the selected host only. Note that when you select this option for another host in the list, the **Extensible** **Attributes** **table** is refreshed for you to associate a different set of extensible attributes with the selected host.
  - **Extensible** **Attributes** **table:** Click the Add icon to enter extensible attributes. The appliance adds a row to the table each time you click the Add icon. Select the row and the attribute name from the drop-down list, and then enter the value. All inheritance attributes which can be inherited from a parent object will be automatically inherited when you add a host. Inheritable extensible attributes that are required are automatically displayed. Optional extensible attributes that are not inheritable are not automatically displayed. For more information about extensible attributes, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).

1. Save the configuration. or

Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, click **Later** and enter a date, time, and time zone. For information about how to schedule a task, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).

The appliance saves the host records you just created, and Grid Manager displays them in the Result page. When you click a newly created host on this page, Grid Manager displays the **Data** **Management** -&gt; **DNS** -&gt; **Zones** tab from which you can view information about the host record.

You can also add and modify other information about the host records. For information about modifying host information, see [*About Host Records*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/about-host-records).
