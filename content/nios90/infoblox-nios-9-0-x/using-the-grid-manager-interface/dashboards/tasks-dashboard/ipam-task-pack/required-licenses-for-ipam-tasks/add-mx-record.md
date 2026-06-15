---
title: "Add MX Record"
source: "/space/nios90/1346109540"
pageId: "1346109540"
---
An MX (mail exchanger) record maps a domain name to a mail exchanger. A mail exchanger is a server that either delivers or forwards mail. You can specify one or more mail exchangers for a zone, as well as the preference for using each mail exchanger. A standard MX record applies to a particular domain or subdomain. You can add an MX record from the Tasks Dashboard or the **Data** **Management** tab. For more information about MX records, see* *[*Managing MX Records*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-resource-records/managing-resource-records/Managing+Resource+Records#ManagingMXRecords).

To add MX records from the Tasks Dashboard:

1. Click **Add MX Record** in the IPAM task pack and complete the following in the *Add TXT Record* wizard:

- **Network** **View**: This appears only when you have multiple network views. From the drop-down list, select the network view in which you want to create the MX record.
- **Mail Destination:** If Grid Manager displays a zone name, enter the mail destination here. If no zone name is displayed or if you want to specify a different zone, click **Select Zone**. When there are multiple zones, Grid Manager displays the *ZoneSelector* dialog box. Click a zone name in the dialog box, and then enter the mail destination. If you want to define an MX record for a domain whose name matches the zone you selected, leave this field blank. Grid Manager automatically adds the domain name (the same as the zone name) to the MX record. For example, if you want to create an MX record for a mail exchanger serving the [corpxyz.com](http://corpxyz.com) domain and you selected the [corpxyz.com](http://corpxyz.com) zone, and leave this field empty. If you want to define an MX record for a subdomain, enter the subdomain name. The appliance prefixes the name you enter to the domain name of the selected zone. For example, if you want to create an MX record for a mail exchanger serving [site1.corpxyz.com](http://site1.corpxyz.com)—a subdomain of [corpxyz.com](http://corpxyz.com)—and you define the MX record in the [corpxyz.com](http://corpxyz.com) zone, enter site1 in this field.If you want to define an MX record for a domain and all its subdomains, enter an asterisk ( * ) to create a wildcard MX record.
- **DNS View:** Displays the DNS view of the selected zone.
- **Shared Record Group**: This field appears only when you are creating a shared record from the **Data Management** tab. Click **Select Shared Record Group**. If you have only one shared record group, the appliance displays the name of the shared record group here. If you have multiple shared record groups, select the shared record group in the *Shared Record Group Selector* dialog box. You can use filters or the **Goto** function to narrow down the list.
- Host Name Policy: Displays the hostname policy of the selected zone. Ensure that the hostname you enter complies with the hostname restriction policy defined for the zone.
- **Mail Exchanger:** Enter the fully qualified domain name of the mail exchanger. You can even enter a dot character in this field (.). When you enter a dot, it mean that the domain is a parked domain and will not receive or send email.
- **Preference:** Select an integer from 10 to 100, or enter a value from 0 to 65535. The preference determines the order in which a client attempts to contact the target mail exchanger with 0 being the highest preference.
- **Comment:** Enter useful information about this record.
- **Disable:** Select the checkbox to disable the record without deleting its configuration. Clear the checkbox to enable the record.

1. Save the configuration, or click **Next** to define extensible attributes. For information, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).

or  
Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, click **Later** and enter a date, time, and time zone. For information about scheduling tasks, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).

1. Click **Restart** if it appears at the top of the screen.
