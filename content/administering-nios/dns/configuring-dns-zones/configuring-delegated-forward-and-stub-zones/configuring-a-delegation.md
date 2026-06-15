---
title: "Configuring a Delegation"
source: "/space/nios90/1432781524"
pageId: "1432781524"
---
Instead of a local name server, remote name servers (which the local server knows) maintain delegated zone data. When the local name server receives a query for a delegated zone, it either responds with the NS record for the delegated zone server (if recursion is disabled on the local server) or it queries the delegated zone server on behalf of the resolver (if recursion is enabled).

For example, there is a remote office with its own name servers, and you want it to manage its own local data. On the name server at the main corporate office, define the remote office zone as delegated, and then specify the remote office name servers as authorities for the zone.

You can delegate a zone to one or more remote name servers, which are typically the authoritative primary and secondary servers for the zone. If recursion is enabled on the local name server, it queries multiple delegated name servers based on their round-trip times. You can also add arpa as a top-level forward-mapping zone and delegate its subzones.

You can also configure TTL settings of auto-generated NS records and glue A and AAAA records for delegated zones in forward-mapping, IPv4 reverse-mapping, and IPv6 reverse-mapping zones. For information, see [*Specifying Time To Live Settings*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/281215163)*.*

The delegation must exist within an authoritative zone with a Grid primary server.
