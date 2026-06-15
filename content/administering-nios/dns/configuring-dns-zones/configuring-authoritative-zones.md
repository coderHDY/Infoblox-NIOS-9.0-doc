---
title: "Configuring Authoritative Zones"
source: "/space/nios90/280763330"
pageId: "280763330"
---
An authoritative zone is a zone for which the local (primary or secondary) server references its own data when responding to queries. The local server is authoritative for the data in this zone and responds to queries for this data without referencing another server.  
There are two types of authoritative zones:

- Forward-mapping – An authoritative forward-mapping zone is an area of domain name space for which one or more name servers have the responsibility to respond authoritatively to name-to-address queries.
- Reverse-mapping – A reverse-mapping zone is an area of network space for which one or more name servers have the responsibility to respond to address-to-name queries.

You can configure and manage authoritative forward-mapping and IPv4 and IPv6 reverse-mapping zones on an Infoblox appliance. In a Grid, an authoritative forward-mapping zone is an area of domain name space for which one or more Grid members have the responsibility to respond authoritatively to name-to-address queries. The Grid members can function as primary or secondary servers for the zone.  
You can add arpa as the top-level forward-mapping zone and manage its resource records. You can also add in-addr.arpa (for ipv4 addresses) and ip6.arpa (for ipv6 addresses) as the top-level reverse-mapping zones.  
You can create these top-level reverse-mapping zones under an arpa or a root parent forward-mapping zone or without a parent zone. If you want arpa, in-addr.arpa, and ip6.arpa zones on the appliance, you must manually create them. These zones are not auto-created.  
Sample IPv4 reverse-mapping zone hierarchy:  
`. (root zone) > arpa > in-addr.arpa > 10.in-addr.arpa`  
Sample IPv6 reverse-mapping zone hierarchy:  
`. (root zone) > arpa > ip6.arpa > a.ip6.arpa`  
Following are the tasks to configure an authoritative zone:

1. Create the zone. The following sections explain how to create authoritative forward-mapping zones, reverse-mapping zones, subzones, and a custom root zone:
   
   - [*Creating an Authoritative Forward-Mapping Zone*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405638)
   - [*Creating an Authoritative Reverse-Mapping Zone*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272705)
   - [*Creating a Root Zone*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405638)
2. Assign an Infoblox appliance as the primary or secondary server of the zone. For information, see [*Assigning*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[*Zone*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[*Authority*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[*to*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[*Name*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[*Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599).
3. Import resource records or add resource records manually. The following provides information about resource records:
   
   - [*Managing Resource Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656)
   - [*Importing Zone Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665197)
4. Configure additional parameters. For information, see [*Configuring Authoritative Zone Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665332)*.*
5. Optionally, associate the zone with one or more networks. This is useful when you want to restrict the A, AAAA and host records to IP addresses from specific networks. For information, see [*Associating Networks with Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761881).
