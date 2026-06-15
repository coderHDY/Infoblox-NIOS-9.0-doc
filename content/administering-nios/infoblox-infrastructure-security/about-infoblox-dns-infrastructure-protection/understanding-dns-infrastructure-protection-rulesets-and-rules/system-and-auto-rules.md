---
title: "System and Auto Rules"
source: "/space/nios90/280668961"
pageId: "280668961"
---
System rules are predefined DNS Infrastructure Protection rules that are built into the Advance Appliances. New system rules are added through rule updates. You can enable an entire category of system rules as well as individual rules. Note that you cannot add or delete system rules, though you can change some parameters. For most system rules, you can modify the **Action** and **Log** **Severity**. For more information, see *[Modifying System and Auto Rules](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668768)*.  
Auto-generated rules are firewall rules that are automatically defined by NIOS for blocking traffic for disabled services and ports. They do not support functionality such as rate limiting. These rules can be grouped into different rule categories and are enabled or disabled by default. You cannot enable or disable auto rules in this release of Infoblox DNS Infrastructure Protection , though you can set log severity and control logging for these rules. Note that auto rules are automatically enabled or disabled and reconfigured based on the current running services and configuration on the appliance.

# System and Auto Rule Categories

The appliance supports the following system and auto rule categories. For detailed descriptions about each system and auto rule, refer to the DNS Infrastructure Protection Rules document available on the Infoblox Support site.

- **BGP**: Contains auto rules that mitigate attacks that target BGP (Border Gateway Protocol) routing parameters, such as invalid attribute lengths or invalid message types.
- **DNS** **Amplification** **and** **Reflection**: Contains system and auto rules that can be used to mitigate the commonly used methods of DDoS attacks. For information about DNS amplification and reflection, see *[DNS Reflection and Amplification Attacks](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668714)*.
- **DNS** **Cache** **Poisoning**: Contains rate limiting rules that assign bandwidth restrictions rules used to mitigate DNS cache poisoning (on UDP and TCP) that is performed by sending a large volume of fake replies to a recursive server, which can result in hundreds or thousands of redirects. For more information about DNS cache poisoning, see *[DNS Cache Poisoning](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668697)*.
- **DNS** **Malware**: Contains rules that protect against DNS malware that posts serious threats to the DNS infrastructure. For information about DNS malware threats, see *[DNS Malware](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275750)*.
- **DNS** **DDoS**: Contains system rules that are used to mitigate DNS DDoS attacks on your Advance Appliance. These rules rate limits clients that trigger following DNS responses: NXDOMAIN, NXRRSET, and SERVFAIL.  
  Note that the response-type rules, in contrast to other rate-limiting or blocking rules, behave differently when blocking the traffic. This is because, the response-type rules are triggered on response packets only, but the triggered rules drop queries that are required to generate responses. Due to the dropping of queries, no new responses are generated, and the rate-limiting rule stops after the timeout period and needs to be triggered again by new responses.
- **DNS** **Message** **Type**: Contains DNS system rules that can be used to filter requests that query specific DNS flags in the DNS message header.
- **DNS** **Protocol** **Anomalies**: Contains auto rules that address general DNS protocol attacks such as invalid DNS queries.
- **DNS** **Tunneling**: Contains auto rules that mitigate against DNS tunneling attacks. For more information, see *[Inside-Out Attacks](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668676)*.
- **Default** **Drop**: Contains system rules that automatically drop IP packets when unusual UDP, TCP, and ICMP traffic is detected.
- **General** **DDoS**: Contains auto rules that address general DDoS (Distributed Denial of Service) attacks such as loopback address spoofing, and UDP or TCP packets that contain the same source and destination addresses.
- **HA** **Support**: Contains auto rules that are used to pass packets that go through the Virtual Router Redundancy Protocol (VRRP) and Internet Group Management Protocol (IGMP) for HA (High Availability) support.
- **ICMP**: Contains auto rules that mitigate ICMP and ICMPv6 ping attacks. ICMP ping size (for IPv4 and IPv6) for these rules is limited to 792 bytes. For information about ICMP, see *[Internet Control Message Protocol (ICMP) Flood](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275714)*.
- **NTP**: Contains auto rules that mitigate attacks that target the NTP (Network Time Protocol). These rules include support for NTP requests and responses, NTP IPv4 and IPv6 ACLs (Access Control Lists), and private mode 7 packets.
- **OSPF**: Contains auto rules that mitigate attacks that target OSPF (Open Shortest Path First) routing parameters, such as invalid attribute lengths or invalid message types.
- **Potential** **DDoS** **Related** **Domains**: Contains system rules the appliance uses to blacklist domains that may have been the targets or subjects in NXDOMAIN or DDoS attacks. These rules block all FQDN lookups on UDP for domains that have been observed to be used as targets in DDoS attacks, and they are enabled by default.
- **Reconnaissance**: Contains auto rules that mitigate network reconnaissance attacks, in which unauthorized remote attackers attempt to access networks by exploiting network standards and communications.
- **Response rule**
- **TCP/UDP** **Floods**: Contains DNS system rules that are used to mitigate DNS TCP and UDP floods. For information about TCP/UDP floods, see *[UDP DNS Flood](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668656)*.
