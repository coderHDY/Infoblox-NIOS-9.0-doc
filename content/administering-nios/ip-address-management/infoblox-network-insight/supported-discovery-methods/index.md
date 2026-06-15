---
title: "Supported Discovery Methods"
source: "/space/nios90/280666366"
pageId: "280666366"
---
When you perform a discovery, you can choose any or all of the following discovery methods:

*[children]*

SNMPv1/v2c device polling as described in SNMP below.

SNMPv3 device polling as described in SNMP below.

These methods actively scan predefined networks and probe IP addresses. The appliance listens for responses from the IP addresses as proof of activity. The IP discovery scans through the specified network ranges and probes IP addresses (except for the network, broadcast, and multicast address types) in each network, including the /31 and  
/32 subnets. Note that addresses in the /31 and /32 subnets can be used only as source addresses for point-to-point links and loopbacks. In these cases, no broadcast or network addresses exist in the /31 and /32 subnets, and the appliance can discover source addresses in these subnets.
