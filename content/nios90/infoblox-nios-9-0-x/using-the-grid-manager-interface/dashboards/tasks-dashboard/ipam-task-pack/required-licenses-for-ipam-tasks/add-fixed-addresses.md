---
title: "Add Fixed Addresses"
source: "/space/nios90/1346011248"
pageId: "1346011248"
---
You can add IPv4 and IPv6 fixed addresses from the Tasks Dashboard or from the **Data** **Management** tab. For more information about fixed addresses, see [*Configuring IPv4 Fixed Addresses*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-fixed-addresses) and [*Configuring IPv6 Fixed Addresses*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-fixed-addresses).

To add fixed addresses from the Tasks Dashboard:

1. Click **Add** **Fixed** **Addresses** in the IPAM task pack and complete the following in the *Add* *Fixed* *Addresses* wizard:
   
   - **Network** **View**: This appears only when you have multiple network views. From the drop-down list, select the network view in which you want to create the fixed address.
   - **Protocol**: Select **IPv4** to add IPv4 addresses and **IPv6** to add IPv6 addresses.
   - **Template**: Click **Select** **Template** to select a fixed address template. When you use a template to create a fixed address, the configuration of the template applies to the new fixed address. You can also click **Clear** to remove the template. For information about templates, see [*Managing DHCP Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates).
   - **Exclude** **from** **Network** **Discovery** and **Immediate** **Discovery**. When creating the new fixed address, you can direct NIOS to immediately discover the device associated with the fixed address, or to exclude it from network discovery. By default, the Add Fixed Addresses task enables immediate discovery.
   - **Addresses**: Do one of the following to add fixed addresses:

Click the Add icon and Grid Manager adds a row to the table. Complete the following to create fixed addresses:

- For IPv4 fixed addresses: Enter the IPv4 address and MAC address. Click the Add icon to add another fixed address.
- For IPv6 fixed addresses: Enter the IPv6 address and DUID. Click the Add icon again to add another fixed address.

or  
Click the Next Available icon to have the appliance search for the next available address. Complete the following:

- **Create** **new** **fixed** **addresses** **under**: Click **Select** to select the network or address range in the *Network/Range* *Selector* dialog box from which you want the appliance to search for the next available IP address for this fixed address.
- **Number** ** of ** **new** ** fixed ** **addresses**: Enter the number of fixed addresses you want to add to the selected network or address range. Note that if there is not enough space in the selected network or address range to create the number of fixed addresses specified here, Grid Manager displays an error message. The maximum number is 20 at a time. Note that when you have existing fixed addresses in the table and you select one, the number you enter here includes the selected fixed address.
- Click **Add** ** Next** to add the fixed addresses. The appliance lists the fixed addresses to the table. Ensure that you enter the MAC address or DUID for each fixed address.
- **Extensible ** **Attributes** table: Click the Add icon to enter extensible attributes. The appliance adds a row to the table each time you click the Add icon. Select the row and the attribute name from the drop-down list, and then enter the value. All inheritance attributes which can be inherited from a parent object will be automatically inherited when you add a fixed address. Inheritable extensible attributes that are required are automatically displayed. Optional extensible attributes that are not inheritable are not automatically displayed. For more information about extensible attributes, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).

1. Save the configuration.

or

Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, click **Later** and enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).

The appliance saves the fixed addresses you just created, and Grid Manager displays them in the Result page. When you click a newly created fixed address on this page, Grid Manager displays the **Data** **Management** -&gt; **IPAM** -&gt; **IP** **Map** or **List** tab from which you can view information about the fixed address.

You can also add and modify other information about the fixed addresses you just created. For more information about modifying fixed address information, see [*Managing IPv4 DHCP Data*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data)[Chapter 27 Managing IPv4 DHCP Data](https://infoblox-docs.atlassian.net/wiki/spaces/NAG8/pages/22252628)and [*Managing IPv6 DHCP Data*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data).
