---
title: "Exporting Data to Files"
source: "/space/nios90/1455358242"
pageId: "1455358242"
---
You can export existing data to a CSV file. The appliance marks all required fields with an asterisk :yellow_star: in the exported file. It also adds a _new_XXXX field to each required field so you can use this field to update data. You cannot stop an export once you start it.

To export all data to a CSV file:

1. From Grid Manager, navigate to the panel that contains the data you want to export. For example, if you want to export data for all DNS zones, select the **Data Management** tab -&gt; **DNS** tab -&gt; **Zones** tab.
2. In the panel, select **Export data in Infoblox CSV Import format** from the **Export** drop-down menu.
3. In the *Export* dialog box, complete the following:
   
   1. **Separator**: Select the separator used in the data file. The default is Comma.
   2. Click **Export**.

The appliance exports all the fields of the records that are displayed in this panel based on your filter criteria. You can either open the data file or save it to your computer. The appliance uses a default file name depending on the panel from which you perform the export. For example, when you export the data from the **IPAM** tab, the default file name is *Allnetworks.csv*. When you export data from the **DNS** tab, the default file name is *Allzones.csv*. The file contains a header row that includes all the fields of the corresponding record type. You can update this data file, and then  
re-import the data into the database.  
You can also export the displayed fields in a panel.
