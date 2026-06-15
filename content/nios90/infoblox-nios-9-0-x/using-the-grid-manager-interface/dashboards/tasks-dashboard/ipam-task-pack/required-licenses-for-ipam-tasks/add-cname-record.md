---
title: "Add CNAME Record"
source: "/space/nios90/1346338877"
pageId: "1346338877"
---
A CNAME record maps an alias to a canonical name. You can use CNAME records in both IPv4 forward- and IPv4 reverse-mapping zones to serve two different purposes. (At this time, you cannot use CNAME records with IPv6 reverse-mapping zones.) For more information about CNAME records, see* *[*Managing CNAME Records*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-resource-records/managing-resource-records).

To add a CNAME record from the Tasks Dashboard:

1. Click **Add** **CNAME** **Record** in the IPAM task pack and complete the following in the *Add* *CNAME* *Record* wizard:

- **Network** **View**: This appears only when you have multiple network views. From the drop-down list, select the network view in which you want to create the CNAME record.
- **Alias**: Click **Select** **Zone** to select a DNS zone from the *Zone* *Selector* dialog box. If you have only one zone, Grid Manager displays the zone name here when you click **Select** **Zone**. Enter the alias for the canonical name. For an IPv4 reverse-mapping zone, enter the host portion of an IP address. For example, if the full IP address is 10.1.1.1 in a network with a 25-bit netmask, enter 1. (The 10.1.1.0/25 network contains host addresses from 10.1.1.1 to 10.1.1.126. The network address is 10.1.1.0, and the broadcast address is 10.1.1.127.)
- ** DNS View**: Displays the DNS view of the selected zone.
- **Shared Record Group**: This field appears only when you are creating a shared record from the **Data** **Management** tab. Click **Select** **Shared** **Record** **Group**. If you have only one shared record group, the appliance displays the name of the shared record group here. If you have multiple shared record groups, select the shared record group in the *Shared* *Record* *Group* *Selector* dialog box. You can use filters or the **Go** **to** function to narrow down the list.
- **Canonical** **Name:** This field displays the domain name of either the current zone or the last selected zone. To add a CNAME record to a forward-mapping zone, enter the complete canonical (or official) name of the host. To add a CNAME record to a reverse-mapping zone, enter *host_ip_addr.prefix.network* **.in-addr.arpa** (host IP address + 2317 prefix + network IP address + in-addr.arpa). For example, enter 1.0.25.1.1.10.in-addr.arpa. This IP address must match the address defined in the PTR record in the delegated child zone.
- **Comments:** Enter useful information about this record.
- **Disable:** Select the checkbox to disable the record without deleting its configuration. Clear the checkbox to enable the record.

1. Save the configuration, or click **Next** to define extensible attributes. For information about extensible attributes, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).

or

1. Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, click **Later** and enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).

Click **Restart** if it appears at the top of the screen.
