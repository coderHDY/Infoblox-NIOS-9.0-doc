---
title: "Converting Unmanaged Assets to Managed Status"
source: "/space/nios90/1432719657"
pageId: "1432719657"
---
1. From the **Data** **Management** tab, select the **Devices** tab.
2. Click the **Next** **Page** and **Last** **Page** icons to locate the device through which you want to locate the assets to convert.
3. Click the Name of the device.
4. Click the **Assets** tab for the chosen device. The Assets page lists all network devices that have been detected through connections to the current device. If the device is a switch, you may see a list of end hosts and network servers in the list, along with any other network infrastructure devices that are neighboring the current device.
5. To convert a single asset: Click the Action icon
   
   next to the asset you want to convert (this automatically selects it), and then select **Convert** **–>** **To** **Host**, **To** **A** **Record**, **To** **PTR** **Record**, or **To** **Fixed** **Address** from the menu.  
   To convert multiple assets (bulk conversion): Select the checkboxes of the assets you want to convert. From the Toolbar, select **Convert** **->** **To** **Host**, **To** **A** **&** **PTR** **Record**, or **To** **Fixed** **Address** from the menu.
6. For a single asset: The respective object editor appears based on the conversion type you have selected. For example, if you select **To** **Host**, the *Host* editor appears. In the editor, define the required **General** settings for the new object. You can also define other settings you need from any of the tabs in the editor. For details about how to configure these settings, refer to the online Help in Grid Manager or see the appropriate chapters in this guide.  
   For bulk conversion: The respective bulk conversion wizard (such as the *Convert* *Unmanaged* *IP* *Addresses* *to* *Host* *Record* wizard) appears based on the conversion type you have selected.   
   Note Network Insight creates the names of the new managed objects using the Discovered Name (FQDN) for the entities being converted. In the wizard, Grid Manager displays the IP addresses of the selected devices that are eligible for conversion in the **Selected** **IP** **Addresses** table. Entities that are not eligible for conversion will not be converted and will not appear in this table.
   
   Based on the selected conversion type, complete the following to start a bulk conversion:
   
   1. **To** **Host**: You can select **Enable** **in** **DNS** and/or **Enable** **in** **DHCP** so the appliance can serve DNS and/or DHCP for the selected IP addresses in the host record. When you enable DNS for the record, you must select a DNS zone for all entities that do not have an FQDN.
   2. **To** **A** **&** **PTR** **Record**: Network Insight converts the selected entities to A & PTR records simultaneously. You must select a DNS zone for all entities that do not have an FQDN.
   3. **To** **Fixed** **Address**: Network Insight automatically converts all selected assets to fixed addresses in a bulk conversion. As with host record and A/PTR record conversions, entities without a Discovered Name FQDN are not eligible for conversions to fixed addresses.

In all bulk conversions, you can define extensible attributes for the selected assets. After you have configured the necessary settings, you can convert the discovered entities immediately or schedule the conversion for a later date by selecting **Later** and entering the date and time.

1. Click **Save** **&** **Close** to make the conversion. You can return to the managed object at any time to make further configuration changes.

In the **Managed** column for all converted entities, Grid Manager displays **Yes** to indicate the managed status. The selected assets are associated with the newly converted IPAM objects. You can now manage these IPAM objects through Grid Manager.
