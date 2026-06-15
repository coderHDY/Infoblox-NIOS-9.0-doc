---
title: "Converting Unmanaged Devices to Managed Devices"
source: "/space/nios90/1432753454"
pageId: "1432753454"
---
*[image: media]*

> **warning**
>
> ### Note
> 
> For convenience, the home **DataManagement–>Devices** page provides a quick filter to list only managed devices. In the Devices page, all devices highlighted in yellow indicate a device that is unmanaged.

Device discovery allows you to define a fully managed state for any discovered routers, switches, firewalls, end hosts, and other network infrastructure devices. The process differs from converting an unmanaged network, because you can bind a discovered device to a fixed address, a PTR Record, a host record or an IPv4 reservation. Doing so offers the following benefits:

- **Host** **Record** – Infoblox hosts are data objects that contain DNS, DHCP, and IPAM data of the assigned addresses. Host objects allow you to assign multiple IPv4 and IPv6 addresses to a host. When you create a host record, you are specifying the name-to-address and address-to-name mappings for the IP address that you assign to the host. The Infoblox DNS server then uses this data to respond to DNS queries for the host. This establishes the identity of any infrastructure device or asset on the network. For more information, see [  ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[*About*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[*Host*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[*Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)
- **A** **Record** – An A (address) record is a DNS resource record that maps a domain name to an IP address. A records essentially tell DNS that a host exists inside a domain, as part of a forward-mapping zone. All traffic to a domain or subdomain is directed to the IP address specified by the A record. The DNS zone must exist in the Grid Manager before attempting to assign A records to devices. For more information about A records, see [  ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[*Managing*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[*A*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[*Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)
- **PTR** **Record** – Maps a device IP address to a host name in a reverse-mapping zone. The zone must already be defined before assigning the new PTR record object. For more information about PTR records, see [  ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[*Managing*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[*PTR*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)[*Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656).
- **Fixed** **Address** – A fixed address represents a persistent link between an IP address and one of the following: MAC address, Client identifier, or Circuit ID/remote ID in the DHCP relay agent option (option 82). Most applications in the current context are for a MAC address. You can configure fixed addresses for network devices, such as routers and printers, that do not frequently move from network to network. By creating fixed addresses for network devices, clients can reliably reach them by their domain names. Some network devices, such as web or FTP servers, can benefit from having fixed addresses for this reason. For more information about these object types, see [  ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095)[*Configuring*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095)[*IPv4*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095)[*Fixed*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095)[*Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095)[  ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095) and [  ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663479)[*Configuring*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663479)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663479)[*IPv6*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663479)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663479)[*Fixed*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663479)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663479)[*Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663479).

Each object type has its own characteristics that you may apply to specific types of discovered devices. For many infrastructure devices such as routers, or Assets such as servers, a fixed address is a likely choice.  
Begin by examining the **Data** **Management** **–>** **Devices** page. The **Managed** column, as shown in in the following figure, can list one of three possible states for all discovered devices:

- Blank value–indicates that the device is not known to IPAM, because insufficient information is available to identify and catalog the device at the present time;
- **No**–Shows that the device in the Devices table is not managed under IPAM or Grid Manager, but enough information is collected and the device can be converted to the Managed state.
- **Yes**–The device in the table is a managed object with an IPAM object type (host, A record, PTR record or fixed address).

An Action icon shown as a gear in each row for the table) provides the quickest access to the **Convert** feature for unmanaged devices, as shown in the following figure. You can also click **Convert** in the Toolbar to select the object type.

*Unmanaged* *Devices* *That* *May* *be* *Converted* *to* *IPAM* *objects*

*[drawio]*

To convert unmanaged devices to managed objects:

1. From the **Data** **Management** tab, select the **Devices** tab.
2. Click the **Next** **Page** and **Last** **Page** icons to locate the device you want to convert.
3. To  convert a single device : Click the Action icon
   
   next to the device you want to convert (this automatically selects it), and then select **Convert** **–>** **To** **Host**, **To** **A** **Record**, **To** **PTR** **Record**, or **To** **Fixed** **Address** from the menu.  
   To convert multiple devices (bulk conversion): Select the checkboxes of the devices you want to convert to the same IPAM object type. From the Toolbar, select **Convert** **->** **To** **Host**, **To** **A** **&** **PTR** **Record**, or **To** **Fixed** **Address** from the menu.
4. For a single device: The respective object editor appears based on the conversion type you have selected. For example, if you select **To** **Host**, the *Host* editor appears. In the editor, define the required **General** settings for the new object. You can also define other settings you need from any of the tabs in the editor. For details about how to configure these settings, refer to the online Help in Grid Manager or see the appropriate sections in this guide.  
   For bulk conversion: The respective bulk conversion wizard (such as the *Convert* *Unmanaged* *IP* *Addresses* *to* *Host* *Record* wizard) appears based on the conversion type you have selected.  
   Note that the Network Insight creates the names of the new managed objects using the Discovered Name (FQDN) for the entities being converted. In the wizard, Grid Manager displays the IP addresses of the selected devices that are eligible for conversion in the **Selected** **IP** **Addresses** table. Entities that are not eligible for conversion will not be converted and will not appear in this table.
   
   Based on the selected conversion type, complete the following to start a bulk conversion:
   
   1. **To** **Host**: You can select **Enable** **in** **DNS** and/or **Enable** **in** **DHCP** so the appliance can serve DNS and/or DHCP for the selected IP addresses in the host record. When you enable DNS, you must select a DNS zone for all entities that do not have an FQDN.
   2. **To** **A** **&** **PTR** **Record**: Network Insight converts the selected entities to A & PTR records simultaneously. You must select a DNS zone for all entities that do not have an FQDN.
   3. **To** **Fixed** **Address**: Network Insight automatically converts all selected IP addresses to fixed addresses in a bulk conversion. As with host record and A/PTR record conversions, entities without a Discovered Name are not eligible for conversions to fixed addresses.
5. In all bulk conversions, you can define extensible attributes for the selected IP addresses. After you configure the necessary settings, you can convert the discovered entities immediately or schedule the conversion by selecting **Later** and entering the date and time.
6. Click **Save** **&** **Close** to make the conversion. You can return to the managed object at any time to make further configuration changes.

In the **Managed** column for all converted entities, Grid Manager displays **Yes** to indicate their managed status. You can now manage these IPAM objects through Grid Manager.
