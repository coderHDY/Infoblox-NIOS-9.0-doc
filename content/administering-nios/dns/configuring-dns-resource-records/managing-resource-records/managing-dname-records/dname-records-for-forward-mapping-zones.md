---
title: "DNAME Records for Forward-Mapping Zones"
source: "/space/nios90/1422229830"
pageId: "1422229830"
---
To add a DNAME record to a forward-mapping zone:

- From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -> **Record** -> **Add** **DNAME** **Record**.

In the *Add* *DNAME* *Record* wizard, complete the following fields:



> **warning**
>
> ### Note
> 
> If you specify a subdomain in the Domain Name field when configuring a DNAME record and the subdomain is also a subzone, the DNAME record appears in the list view for the subzone, not in the list view for the parent zone selected in the process of adding the record.



- **ALIAS**: If Grid Manager displays a zone name, enter the name of a subdomain here. If you are adding a DNAME record for the entire zone, leave this field empty. This field is for adding a DNAME record for a subdomain within the selected zone. The displayed zone name can either be the last selected zone or the zone from which you are adding the CNAME record. If no zone name is displayed or if you want to specify a different zone, click **Select** **Zone**. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box. Click a zone name in the dialog box, and then enter the name of a subdomain.
- **Target:** Enter the domain name to which you want to map all the domain names specified in the ALIAS field.
- **Comment:** Enter identifying text for this record, such as a meaningful note or reminder.
- **Disable:** Clear the checkbox to enable the record. Select the checkbox to disable it.
- Save the configuration or click **Next** to define extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
- Click **Restart** if it appears at the top of the screen.
