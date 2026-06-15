---
title: "Exporting New CSV Jobs"
source: "/space/nios90/1455325591"
pageId: "1455325591"
---
You can use the *Global* *CSV* *Export* *Wizard* to export multiple objects at once. You can export multiple object data types to a single CSV file through Grid Manager. Objects that have the least or no dependencies on other objects are placed at the top of the list and the most dependent objects are displayed at the bottom of the list. The export command will not re-execute after a Grid Manager HA failover.  
For standalone appliances, the Grid Manager sends a single CSV export request that contains both Grid and member CSV headers to export Grid and member properties. Similarly, Grid Manager combines GridDns and MemberDns headers to export DNS properties and GridDhcp and MemberDhcp headers to export DHCP properties.  
You cannot export the default DNS view if you have not created a custom DNS view. To export the default DNS view, you must either create custom DNS views or use the **CSV** **Global** **Export** option.  
Note that when you use the **Global** **CSV** **Export** option to export either all objects, all DNS objects, or all PTR records, the appliance also exports the PTR system generated records from the auto-created zone "0.0.127.in-addr.arpa". When you use the same file for import operation, the CSV import operation might fail due to the presence of these system generated records. Infoblox recommends that you select the **Skip** **to** **next** **row** **and** **continue** option while performing the CSV import operation. When you select this option, CSV import skips these rows with appropriate error messages and then processes other rows in the CSV file.  
To export DNS and DHCP data:

1. From the **Data Management** tab, click **CSV Job Manager** from the Toolbar.
2. In the *CSV Job Manager* wizard, click **CSV Export**. Click the New CSV Export job icon and specify the following in the *Global CSV Export Wizard*:
   
   - **Separator**: Select a separator from the drop-down list: **Comma**, **Semicolon**, **Space**, and **Tab**.
   - **All Objects**: The checkbox is selected by default. When you select this checkbox, all DHCP, global, and DNS objects are selected by default.
     
     - **All DHCP Objects**: Select this checkbox to select all DHCP objects that are listed. To select specific DHCP objects, clear this checkbox and select respective checkboxes next to the DHCP object names.
     - **Global Objects**: Select this checkbox to select all global objects that are listed. To select specific global objects, clear this checkbox and select respective checkboxes next to the global object names.
     - **All DNS Objects**: Select this checkbox to select all DNS objects that are listed. To select specific DNS objects, clear this checkbox and select respective checkboxes next to the DNS object names.
3. Click **Export Data** to start the export process. In the *Start global CSV Export* dialog box, click **Yes** to confirm or click **No** to cancel the process.
4. Grid Manager displays the CSV export progress and results in the *CSV Global Export progress* dialog box. It displays the following information:
   
   - **Separator**: The separator used in the CSV file.
   - **Approximate number of objects to be exported**: Indicates the approximate number of objects to be exported.
   - **Number of objects exported**: Indicates the total number of objects that are exported.
   - **Current status**: Indicates the current status of the export process.
5. Click **Close** to exit.
