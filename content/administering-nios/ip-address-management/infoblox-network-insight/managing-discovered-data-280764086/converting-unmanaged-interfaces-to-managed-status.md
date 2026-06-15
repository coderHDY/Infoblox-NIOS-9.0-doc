---
title: "Converting Unmanaged Interfaces to Managed Status"
source: "/space/nios90/1432818350"
pageId: "1432818350"
---
*[image: media]*

> **warning**
>
> ### Note
> 
> For convenience, a device Interfaces panel provides a quick filter to list only managed interfaces for the device. When a device is converted to managed status, interfaces in the device may remain in unmanaged state. If the interface has an IP address that is recognized under IPAM, it may be converted to managed state.

Interfaces that appear in the Interfaces table for a device may be converted to managed status, under specific circumstances. If an interface is bound to an IP address that is present in an IPAM network (for example, a leaf network inside a network container under IPAM), that interface can be converted to managed status.  
For any device, any interface with a hotlink to IPAM may be converted. Examples are shown in the following figure.

*Device* *Interfaces* *Available* *for* *Conversion*

*[drawio]*

In the figure above, two interfaces provide a link to their respective IPAM interface pages, and show an **IPAM** **Type** of **Unmanaged**. These ports may be converted to IPAM objects and managed under Grid Manager.

1. From the **Data** **Management** tab, select the **Devices** tab.
2. Click the **Next** **Page** and **Last** **Page** icons to locate the device through which you want to locate the interfaces to convert.
3. Click the **Name** link of the device.
4. Click the **Interfaces** tab for the chosen device. This tab lists all ports discovered on the device.
5. To convert a single interface: Click the Action icon
   
   next to the interface you want to convert (this automatically selects it), and then select **Convert** **–>** **To ** **Host**, **To ** **A ** **Record**, **To ** **PTR ** **Record**, or **To ** **Fixed ** **Address** from the menu.  
   To convert multiple interfaces (bulk conversion): Select the checkboxes of the interfaces you want to convert. From the Toolbar, select **Convert** **->** **To ** **Host**, **To ** **A** **& ** **PTR ** **Record**, or **To ** **Fixed ** **Address** from the menu.
6. For a single interface: The respective object editor appears based on the conversion type you have selected. For example, if you select **To ** **Host**, the *Host* editor appears. In the editor, define the required **General** settings for the new object. You can also define other settings you need from any of the tabs in the editor. For details about how to configure these settings, refer to the online Help in Grid Manager or see the appropriate chapters in this guide.  
   For bulk conversion: The respective bulk conversion wizard (such as the *Convert * *Unmanaged * *IP * *Addresses * *to * *Host * *Record* wizard) appears based on the conversion type you have selected.  
   Note that the Network Insight creates the names of the new managed objects using the Discovered Name (FQDN) for the entities being converted. In the wizard, Grid Manager displays the IP addresses of the selected devices that are eligible for conversion in the **Selected ** **IP ** **Addresses** table. Entities that are not eligible for conversion will not be converted and will not appear in this table.
   
   Based on the selected conversion type, complete the following to start a bulk conversion:
   
   1. **To** **Host**: You can select **Enable** **in** **DNS** and/or **Enable** **in** **DHCP** so the appliance can serve DNS and/or DHCP for the selected IP addresses in the host record. When you enable DNS for the record, you must select a DNS zone for all entities that do not have an FQDN.
   2. **To** **A** **&** **PTR** **Record**: Network Insight converts the selected entities to A & PTR records simultaneously. You must select a DNS zone for all entities that do not have an FQDN.
   3. **To** **Fixed** **Address**: Network Insight automatically converts all selected IP addresses to fixed addresses in a bulk conversion. As with host record and A/PTR record conversions, entities without a Discovered Name FQDN are not eligible for conversions to fixed addresses.
7. In all bulk conversions, you can define extensible attributes for the selected IP addresses. After you have configured the necessary settings, you can convert the discovered entities immediately or schedule the conversion by selecting **Later** and entering the date and time.

1. Click **Save** **&** **Close** to make the conversion. The interface is associated with the new IPAM object.

In the **IPAM** **Type** column for all converted entities, Grid Manager displays **Managed** to indicate their managed status. You can now manage these IPAM objects through Grid Manager.
