---
title: "Features on the Software DNS Cache Acceleration Platforms"
source: "/space/nios90/1468629771"
pageId: "1468629771"
---
The following tables list the features that are either supported or not supported on the Software DNS Cache Acceleration platforms.

Note that the IB-22xx, IB-40xx, IB-41xx platforms support enabling Software DNS Infrastructure Protection and DNS Cache Acceleration simultaneously.

| **Features** | **IB-FLEX** | **IB-2215** | **IB-2225** | **IB-v2215** | **IB-v2225** | **IB-4015** | **IB-4025** | **IB-v4015** | **IB-v4025** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tiered licensing | Licensing is based on the Flex Grid Activation license on the Grid. Note that the queries per second are limited by the number of CPUs for IB-FLEX. | IB-40x5 appliances support four tiers of DNS QPS and the QPS levels are enforced by rate limiting. |
| RPZ | Yes, the maximum cache lifetime for DNS cache acceleration is set to 300 seconds if RPZ zones are configured for the member. | Yes, the maximum cache lifetime for DNS cache acceleration is set to 300 seconds if the RPZ license is installed. |
| Caching (A, AAAA, MX, CNAME, PTR) | Yes | Yes |
| Do not cache (EDNS, TCP, Any, TSIG) | Yes | Yes |
| Caching over additional interfaces (v4, v6) | Yes | Yes |
| Dump Acceleration Cache (CLI, GUI, PAPI) | Yes | Yes |
| Clear Acceleration Cache (CLI, GUI, PAPI) | Yes | Yes |
| Cache pre-fetch and cache refresh | Yes | Yes |
| ACLs (Allow-queries/Responses, Match-Clients/Destination, Blackhole) | Yes | Yes |
| AAAA Filtering (Bypassed but support configuring) | Yes | Yes |
| Fixed RRSET ordering | Yes | Yes |
| DNS64 | Yes | Yes |
| DNS monitoring feature (netmon) | Yes | Yes |
| DNS Query logging (BIND only) | Yes | Yes |
| DNS Views | Yes, it supports up to six DNS views. | Yes, it supports up to six DNS views. |
| Forward/Stub zones | Yes | Yes |
| DNS cache acceleration related restrictions for configuration | Yes, for NIOS version 8.2.0, restrictions are enforced based on whether the DNS cache acceleration feature is enabled or disabled. | No |
| Reporting | Yes, for more information Reports for IB-FLEX, see [*About IB-FLEX*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667152)*.* | Yes |
| VLAN | Yes | Yes |
| DSCP | Yes | Yes |
| Sort list | Yes | Yes |
| Anycast (OSPF and BGP) | Yes | Yes |
| BFD (Bidirectional Forwarding Detection) | Yes | Supported on all appliances |
| HA Support | Yes, only for non-SRIOV. | Yes |
| NIC Bonding | Yes | Yes |
| Multiple-Interfaces on the same subnet | No | No |
| IP Rate-limit and Response logging | No | No |
| EDNS Client Subnet support | No | No |
| NXDomain-redirection | Yes | Ye |
| DNSSEC (Bypassed but support configuring) | Yes | Yes |
| Debug enhancements | Yes | Yes |
| SNMP Support for DCA service-related traps | Yes | Yes |
| SNMP stats support for DNS QPS and CHR | Yes | Yes |
| NX Mitigation | No | No |
| NetFilter (Tracking tables) | No | Not supported on any appliance |
| Traffic-capture (All modes) | Yes, there is partial support. Note that tcpdump captures both queries and responses. | Yes, there is partial support. Note that tcpdump captures both queries and responses. |
| No flush-mode support for DNS cache acceleration cache | Yes | Yes |
| Per-interface UDP DNS cache acceleration response counters | Yes | Yes |
| CLI commands | You can use the commands `set dns-accel` and `show dns-accel` to view and set DNS cache acceleration information. For more information, see [*CLI Commands*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280856042). | You can use the commands `set dns-accel` and `show dns-accel` to view and set DNS cache acceleration information. For more information, see [*CLI Commands*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280856042). |
| DNS Query rewrite (Bypassed but supports configuring) | No | No |
| DNS Infrastructure Protection | Supported on IB-FLEX platforms. |  |
| Subscriber Secure Policy | Yes | Yes |



| **Features** | **IB-FLEX** | **TE-906** | **TE-1506** | **TE-1606** | **TE-2306** | **TE-4106** |
| --- | --- | --- | --- | --- | --- | --- |
| Tiered licensing | Licensing is based on the Flex Grid Activation license on the Grid. Note that the queries per second are limited by the number of CPUs for IB-FLEX. | IB-40x5 appliances support four tiers of DNS QPS and the QPS levels are enforced by rate limiting |  |  |  |  |
| RPZ | Yes, the maximum cache lifetime for DNS cache acceleration is set to 300 seconds if RPZ zones are configured for the member. | Yes, the maximum cache lifetime for DNS cache acceleration is set to 300 seconds if the RPZ license is installed. |  |  |  |  |
| Caching (A, AAAA, MX, CNAME, PTR) | Yes | Yes |  |  |  |  |
| Do not cache (EDNS, TCP, Any, TSIG) | Yes | Yes |  |  |  |  |
| Caching over additional interfaces (v4, v6) | Yes | Yes |  |  |  |  |
| Dump Acceleration Cache (CLI, GUI, PAPI) | Yes | Yes |  |  |  |  |
| Clear Acceleration Cache (CLI, GUI, PAPI) | Yes | Yes |  |  |  |  |
| Cache pre-fetch and cache refresh | Yes | Yes |  |  |  |  |
| ACLs (Allow-queries/Responses, Match-Clients/Destination, Blackhole) | Yes | Yes |  |  |  |  |
| AAAA Filtering (Bypassed but support configuring) | Yes | Yes |  |  |  |  |
| Fixed RRSET ordering | Yes | Yes |  |  |  |  |
| DNS64 | Yes | Yes |  |  |  |  |
| DNS monitoring feature (netmon) | Yes | Yes |  |  |  |  |
| DNS Query logging (BIND only) | Yes | Yes |  |  |  |  |
| DNS Views | Yes, it supports up to six DNS views. | Yes, it supports up to six DNS views. |  |  |  |  |
| Forward/Stub zones | Yes | Yes |  |  |  |  |
| DNS cache acceleration related restrictions for configuration | Yes, for NIOS version 8.2.0, restrictions are enforced based on whether the DNS cache acceleration feature is enabled or disabled. | Yes | Yes | yes | No | No |
| Reporting | Yes, for more information Reports for IB-FLEX, see [*About IB-FLEX*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667152)*.* | No | No | No | Yes | Yes |
| VLAN | Yes | Yes |
| DSCP | Yes | Yes |  |  |  |  |
| Sort list | Yes | Yes |  |  |  |  |
| Anycast (OSPF and BGP) | Yes | Yes |  |  |  |  |
| BFD (Bidirectional Forwarding Detection) | Yes | Supported on all appliances |  |  |  |  |
| HA Support | Yes, only for non-SRIOV. | Yes |  |  |  |  |
| NIC Bonding | Yes | Yes |  |  |  |  |
| Multiple-Interfaces on the same subnet | No | No |  |  |  |  |
| IP Rate-limit and Response logging | No | No |  |  |  |  |
| EDNS Client Subnet support | No | No |  |  |  |  |
| NXDomain-redirection | Yes | Yes |  |  |  |  |
| DNSSEC (Bypassed but support configuring) | Yes | Yes |  |  |  |  |
| Debug enhancements | Yes | Yes |
| SNMP Support for DCA service-related traps | Yes | Yes |
| SNMP stats support for DNS QPS and CHR | Yes | Yes |
| NX Mitigation | No | No |
| NetFilter (Tracking tables) | No | Not supported on any appliance |
| Traffic-capture (All modes) | Yes, there is partial support. Note that tcpdump captures both queries and responses. | Yes, there is partial support. Note that tcpdump captures both queries and responses. |
| No flush-mode support for DNS cache acceleration cache | Yes | Yes |
| Per-interface UDP DNS cache acceleration response counters | Yes | Yes |
| CLI commands | You can use the commands `set dns-accel` and `show dns-accel` to view and set DNS cache acceleration information. For more information, see [*CLI Commands*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280856042). | You can use the commands `set dns-accel` and `show dns-accel` to view and set DNS cache acceleration information. For more information, see [*CLI Commands*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280856042). |
| DNS Query rewrite (Bypassed but supports configuring) | No | No |
| DNS Infrastructure Protection | Supported on IB-FLEX platforms. |  |
| Subscriber Secure Policy | Yes | Yes |

> **warning**
>
> **Note**
> 
> By default, all malformed packets are dropped early when the accelerated DNS Infrastructure Protection service is enabled.
