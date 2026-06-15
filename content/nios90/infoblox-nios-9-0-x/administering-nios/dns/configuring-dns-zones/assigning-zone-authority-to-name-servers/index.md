---
title: "Assigning Zone Authority to Name Servers"
source: "/space/nios90/280272599"
pageId: "280272599"
---
Forward-mapping zones answer name-to-address queries, and reverse-mapping zones answer address-to-name queries. When you create an authoritative forward-mapping zone or reverse-mapping zone, you assign zone authority to a name server and define it as the primary server for the zone. A primary server is designated as the primary source for the zone and maintains a master copy of the zone data.  
In a traditional DNS configuration, zone updates are performed based on a model that consists of a single primary server and one or multiple secondary servers, which receive read-only zone updates from the primary through database replications or zone transfers. Since the primary server contains editable zone data and is designated as the primary source for the zone, it can become a single point of failure when it becomes unavailable. To avoid a single point of failure for zone transfers, you can configure multiple primary servers for an authoritative zone.  
When you define multiple primary servers for a zone, each primary has a copy of the zone's authoritative data that can be updated independently. When you modify zone data, the appliance replicates updated data among all primary servers. When there are conflicts between zone updates, the appliance generally selects the latest updates based on the timestamps the updates were made by the clients to the primary servers. Therefore, accurate time synchronization among all servers in the DNS configuration is very important. For more information about other best practices for configuring multiple primaries for an authoritative zone, see  Best Practices for Defining Multiple Primaries for Authoritative Zones below.  
You can also create one or more secondary name servers for a zone. A secondary server for a zone receives read-only zone data from the primary server. If a zone is part of an internal DNS structure for a private network, the inclusion of a secondary DNS server is optional, though highly recommended. If a zone is part of an external DNS structure for a public network such as the Internet, then a secondary server in a different subnet from the primary server is required. This requirement provides an additional safeguard against localized network failures causing both primary and secondary name servers for a zone to become inaccessible.

> **warning**
>
> ### Note
> 
> You can enter, modify, and remove zone data on the primary servers, which can then send new and modified data in a read-only format to the secondary servers. Both primary and secondary name servers are authoritative for the zone data they serve. The distinction between them is how they get their zone data.

In Grid Manager, you can specify the primary and secondary servers for a zone or you can specify a name server group. A name server group is a collection of one or more primary servers and one or more secondary servers. For information on name server groups, see [*Using Name Server Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/using-name-server-groups).
