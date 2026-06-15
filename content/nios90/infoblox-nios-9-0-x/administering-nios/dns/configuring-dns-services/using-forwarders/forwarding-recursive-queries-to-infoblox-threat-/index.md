---
title: "Forwarding Recursive Queries to Infoblox Threat Defense"
source: "/space/nios90/1468334358"
pageId: "1468334358"
---
To forward recursive queries to Infoblox Threat Defense over an encrypted connection, you must first register each NIOS member in your Grid as a DNS Forwarding Proxy through the Infoblox Portal Configuration. When you register a Grid member, the DNS Forwarding Proxy software is installed on the member. The DNS Forwarding Proxy embeds the client IP addresses in the DNS queries before forwarding them to Infoblox Threat Defense. If another NIOS member has forwarded queries to the NIOS member with DNS forwarding globally, ensure you use the** Copy client IP, MAC addresses, and DNS View name to outgoing recursive queries** on the DNS Forwarding Proxy member to ensure the true client IP is seen by Infoblox Threat Defense and not the IP of the internal NIOS member. The communications are encrypted and client visibility is maintained. Once you set up a DNS Forwarding Proxy on a Grid member, all recursive queries for that member are forwarded to a local DNS Forwarding Proxy by the NIOS DNS service. It also caches responses to speed up DNS resolution for future queries. For more information about configuring DNS Forwarding Proxies, see [*Configuring Hosts*](https://infoblox-docs.atlassian.net/wiki/spaces/BloxOneInfrastructure/pages/119308577).

Make sure that port 443 is open against its respective domain for DNS Forwarding Proxy to work between NIOS and Infoblox Threat Defense.
