---
title: "Enabling Recursive Resolution Using EDNS Client Subnet (ECS) Option"
source: "/space/nios90/1420231490"
pageId: "1420231490"
---
The EDNS Client Subnet (ECS) option is a DNS extension you use to optimize recursive resolution for query sources that are not topologically close to the recursive resolvers. When you enable ECS for recursive resolution, the appliance includes subnet information of the host that originates a DNS query. Thus, your recursive resolver can perform geotargeting by passing the subnet information to authoritative servers so that the response will be more optimized for the end clients. For example, when you enable ECS and/or ECS forwarding on your recursive resolver, CDNs (Content Delivery Networks) can deliver content faster and more efficiently to the end user by providing information about the end user's subnet to the authoritative DNS server operated by the CDNs.

You can enable the NIOS appliance to handle recursive queries using ECS option and enable ECS forwarding support at the Grid level. You can then add whitelisted zone names that are subject to ECS recursion and specify the source prefix length for IPv4 and IPv6 addresses. Make sure you enter only apex zones. Example: foo.com, corpxyz.com, etc. The whitelisted zone name indicates the zone to which ECS tagged queries must be sent.

Note the following while adding whitelisted zone names:

- ECS options are sent only when the name being queried and the apex of the zone being queried both match ECS zones. For example, if the zone "foo.com " contains a subdomain "foo.com", then you must configure "foo.com" as an ECS zone and not "foo.com". The latter configuration might result in no ECS queries being sent, because the apex zone, "foo.com  " does not match with "foo.com ".
- Queries for subdomains of the specified zone name, with prefix lengths greater than the specified prefix length is not applicable for the subdomains of the specified zone name. For example, if you specify "foo.com " with IPv4 prefix length 20, then IPv4 queries with prefix length greater than 20 are not applicable for the subdomains of "foo.com ".
- You can exclude certain subdomains by adding a leading exclamation mark (!) to the subdomain name. Example: ! foo.example.org, ! foo.com  , etc.
