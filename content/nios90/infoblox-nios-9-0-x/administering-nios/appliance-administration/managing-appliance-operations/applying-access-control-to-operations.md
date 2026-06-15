---
title: "Applying Access Control to Operations"
source: "/space/nios90/280667621"
pageId: "280667621"
---
When you apply access control to NIOS operations, you can use anonymous ACEs or a named ACL. You cannot combine ACEs and named ACLs for access control. Depending on the access control types each operation supports, you may or may not be able to apply a named ACL to a specific operation. For information about which access control types each operation supports in *Operations* *that* *Support* *Access* *Control *table, see [*Operations that Support Access Control*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/operations-that-support-access-control).

> **warning**
>
> ### Note
> 
> If you disable access control or select **None** or **Any** for an operation, the appliance removes the previously applied named ACL or the configured anonymous ACEs. To avoid losing your ACE configuration, Infoblox recommends that you convert the ACEs to a named ACL.

For information about how to apply access control to each supported operation, see the following:

- DNS zone transfers, as described in [*Enabling Zone Transfers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/enabling-zone-transfers).
- DNS queries, as described in [*Controlling DNS Queries*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/controlling-dns-queries)*.*
- Recursive queries, as described in [*Enabling Recursive Queries*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/enabling-recursive-queries)*.*
- Dynamic DNS updates, as described in [*Configuring DNS Servers for DDNS*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/configuring-dns-servers-for-ddns)*.*
- AAAA filtering, as described in [*Controlling AAAA Records for IPv4 Clients*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/controlling-aaaa-records-for-ipv4-clients)*.*
- Blackhole list, as described in [*Configuring a DNS Blackhole List*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-a-dns-blackhole-list)*.*
- Match clients list for DNS views, as described in [*Defining Match Clients Lists*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/dns-views/configuring-dns-views)*.*
- Match destinations for DNS views, as described in [*Defining a Match Destinations List*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/dns-views/configuring-dns-views)*.*
- DNS64 clients, DNS64 mapped IPv4 addresses, and DNS64 excluded IPv6 addresses, as described in [*Setting DNS64 Group Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/about-dns64/about-synthesis-groups/setting-dns64-group-properties)*.*
- File distribution services, as described in [*Configuring Access Control for File Distribution*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/file-distribution-services/managing-file-distribution-services/configuring-access-control-for-file-distribution)*.*
- Grid Manager and API access, as described in [*Configuring Security Features*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-security-operations/Managing+Security+Operations#Configuring-Security-Features)*.*
- NTP access control, as described in* *[*Defining NTP Access Control*](/nios90/by-id/1449590908)*.*
- Syslog proxy access, as described in [*Configuring Syslog for Grid Members*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/using-a-syslog-server/configuring-syslog-for-grid-members)*.*
