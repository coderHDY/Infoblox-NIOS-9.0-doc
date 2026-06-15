---
title: "Adding NS Records"
source: "/space/nios90/1423081803"
pageId: "1423081803"
---
To add an NS record, perform the following steps:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -> **Record** -> **Add** **NS** **Record**.
2. In the *Add* *NS* *Record* wizard, complete the following fields:
   
   - **Zone**: The displayed zone name can either be the last selected zone or the zone from which you are adding the NS record. If no zone name is displayed or if you want to specify a different zone, click **Select** **Zone**. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box.
   - **DNS View:** Displays the DNS view to which the selected zone belongs.
   - **Hostname Policy:** Displays the host name policy of the selected zone.
   - **Name** **Server:** Enter the host name that you want to configure as the name server for the zone. IDN is not supported in this field. You can use the punycode representation of an IDN in this field.
3. Click Next to enter IP addresses for the name server.
4. In the *Name* *Server* *Addresses* panel, click the Add icon and complete the following fields:
   
   - Address: Enter the IP address of the name server.
   - **Add** **PTR** **Record:** This field displays Yes by default, enabling the automatic generation of a PTR record for the IP address. You can select **No** to disable the generation of the PTR record.
5. Click **Next** to define extensible attributes or save the configuration and click **Restart** if it appears at the top of the screen.
