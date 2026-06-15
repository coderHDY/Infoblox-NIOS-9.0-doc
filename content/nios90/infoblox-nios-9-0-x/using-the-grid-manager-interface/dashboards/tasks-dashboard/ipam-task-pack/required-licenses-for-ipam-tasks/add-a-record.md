---
title: "Add A Record"
source: "/space/nios90/1346043980"
pageId: "1346043980"
---
An A (address) record is a DNS resource record that maps a domain name to an IPv4 address. You can add an A record from the Tasks Dashboard or from the **Data** **Management** tab. For more information about managing A records, see [*Managing Resource Records*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-resource-records/managing-resource-records).

To add networks from the Tasks Dashboard:

1. Click **Add** ** A ** **Record** in the IPAM task pack and complete the following in the *Add* * A* * Record* wizard:
2. In the *Add* * A* * Record* wizard, do the following:
   
   - **Name**: If Grid Manager displays a zone name, enter the hostname that you want to map to an IP address. The displayed zone name can either be the last selected zone or the zone from which you are adding the host record. If no zone name is displayed or if you want to specify a different zone, click **Select** ** Zone**. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box. Click a zone name in the dialog box and then enter the hostname. The name you enter is prefixed to the DNS zone name that is displayed, and the complete name becomes the FQDN (fully qualified domain name) of the host. For example, if the zone name displayed is [corpxyz.com](http://corpxyz.com) and you enter admin, then the FQDN becomes [admin.corpxyz.com](http://admin.corpxyz.com). Ensure that the domain name you enter complies with the hostname restriction policy defined for the zone. To create a wildcard A record, enter an asterisk * in this field.
   - **DNS ** **View**: This field displays the DNS view to which the DNS zone belongs.
   - **Shared ** **Record** ** Group**: This field appears only when you are creating a shared record from the **Data ** **Management** tab. Click **Select** ** Shared** ** Record ** **Group**. If you have only one shared record group, the appliance displays the name of the shared record group here. If you have multiple shared record groups, select the shared record group in the *Shared* * Record* * Group* * Selector* dialog box. You can use filters or the **Go ** **to** function to narrow down the list.
   - **Hostname** ** Policy**: Displays the hostname policy of the zone.
   - In the **IP ** **Addresses** section, click the Add icon and do one of the following:
     
     - Select **Add** ** Address** to enter the IPv4 address to which you want the domain name to map.   
       or
     - Select **Next** ** Available** ** IPv4** to retrieve the next available IP address in a network.  
       If the A record is in zone that has associated networks, the *Network* *Selector* dialog box lists the associated networks. If the zone has no network associations, the *Network* *Selector* dialog box lists the available networks. When you select a network, Grid Manager retrieves the next available IP address in that network.
     - **Comment**: Optionally, enter additional information about the A record.
     - **Create** **associated** **PTR** **record:** Select this option to automatically generate a PTR record that maps the specified IP address to the hostname. To create the PTR record, the reverse-mapping zone must be in the database.
     - **Disable**: Select this checkbox to disable the record. Clear the checkbox to enable it.
3. Click **Next** to define extensible attributes. For information, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
4. Save the configuration or click the Schedule icon at the top of the wizard to schedule this task. For information about how to schedule a task, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).
5. Click **Restart** if it appears at the top of the screen.
