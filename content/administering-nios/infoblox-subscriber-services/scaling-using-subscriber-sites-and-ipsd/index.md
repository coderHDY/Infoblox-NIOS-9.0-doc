---
title: "Scaling Using Subscriber Sites and IPSD"
source: "/space/nios90/280660641"
pageId: "280660641"
---
You can create subscriber sites and add a Grid member as a collector member and RPZ members to the site in order to scale the number of subscribers that the system can support. The subscriber collector caches the subscriber data received from the NAS gateways and parental control policies the from Infoblox Harmony product. The RPZ members use the cached subscriber data and the policies to resolve DNS queries. You can add a maximum of five Grid members to the subscriber site. Note that one Grid member can serve only one subscriber site. The subscriber identity information cached in the subscriber cache is replicated between the Grid members in the subscriber site.

You can configure the NAT port as an IPSD (IP Space Discriminator), where the subscribers' first deterministic NAT port is used as IPSD, to distinguish from other subscribers using the same IP address. The NAT algorithms use the port range allocation where the first usable port for the subscriber is provided in a RADIUS accounting AVP. It also supports the first port in the range as a discriminator between subscribers using the same IP address. In a strict NAT configuration, where only the NATed subscribers are allowed, the value of the AVP **Deterministic NAT port** must be a non zero value in the RADIUS accounting message. The ports from 1-1023 (inclusive) are reserved in a deterministic port configuration.

You can manage the subscriber sites as discussed in the following sections:

*[children]*
