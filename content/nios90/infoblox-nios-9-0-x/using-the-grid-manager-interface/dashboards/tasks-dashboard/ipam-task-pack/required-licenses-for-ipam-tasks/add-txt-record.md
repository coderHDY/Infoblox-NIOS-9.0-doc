---
title: "Add TXT Record"
source: "/space/nios90/1346338915"
pageId: "1346338915"
---
A TXT (text record) record contains supplemental information for a host. For example, if you have a sales server that serves only North America, you can create a text record stating this fact. You can create more than one text record for a domain name. You can add a TXT record from the Tasks Dashboard or the **Data** **Management** tab. For more information about TXT records, see [*Managing TXT Records*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-resource-records/managing-resource-records/Managing+Resource+Records#ManagingTXTRecords).

To add TXT records from the Tasks Dashboard:

1. Click **Add** **TXT** **Record** in the IPAM task pack and complete the following in the *Add* *TXT* *Record* wizard:

- **Network View**: This appears only when you have multiple network views. From the drop-down list, select the network view in which you want to create the TXT record.
- **Name**: If Grid Manager displays a zone name, enter the name to define a TXT record for a host or subdomain. If no zone name is displayed or if you want to specify a different zone, click **Select Zone**. When there are multiple zones, Grid Manager displays the *Zone Selector* dialog box. Click a zone name in the dialog box. Then, enter the TXT record name. The appliance prefixes the name you enter to the domain name of the selected zone. For example, if you want to create a TXT record for a web server whose host name is [www2.corpxyz.com](http://www2.corpxyz.com) and you define the TXT record in the [corpxyz.com](http://corpxyz.com) zone, enter **www2** in this field. To define a TXT record for a domain whose name matches the selected zone, leave this field empty. The appliance automatically adds the domain name (the same as the zone name) to the TXT record. For example, if you want to create a TXT record for the [corpxyz.com](http://corpxyz.com) domain and you selected the [corpxyz.com](http://corpxyz.com) zone, leave this field empty.
- DNS View: Displays the DNS view of the selected zone.
- **Shared Record Group**: This field appears only when you are creating a shared record from the **Data Management** tab. Click **Select Shared Record Group**. If you have only one shared record group, the appliance displays the name of the shared record group here. If you have multiple shared record groups, select the shared record group in the *Shared Record Group Selector* dialog box. You can use filters or the **Go to** function to narrow down the list.
- **Text:** Enter the text that you want to associate with the record. It can contain substrings of up to 255 bytes, up to a total of 512 bytes. Additionally, if you enter leading, trailing, or embedded spaces in the text, add quotes around the text to preserve the spaces. For example: " v=spf1 include:corp200.com -all "
- **Comments:** Enter useful information about this record.
- **Disable:** Select the checkbox to disable the record without deleting its configuration. Clear the checkbox to enable the record.

1. Save the configuration, or click **Next** to define extensible attributes. For information, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).

or  
Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, click **Later** and enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).

1. Click **Restart** if it appears at the top of the screen.

> **warning**
>
> ### Note
> 
> In a signed zone, if you add or delete a TXT record that has @in its host name, you must also create or delete the  corresponding NSEC3 record.
