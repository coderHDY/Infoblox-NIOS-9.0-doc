---
title: "ICMP"
source: "/space/nios90/1346142466"
pageId: "1346142466"
---
Discovery uses different variations of Ping traces to perform higher-performance, brute-force device discovery. ICMP is the last resort when devices do not support SNMP management protocols or an SNMP credential is lacking.  
The ICMP Smart Ping Sweep option enables brute-force subnet Ping sweeps on IPv4 networks. Subnet ping sweeps are used as a last resort in the discovery process. A subnet ping sweep is performed if Network Insight is unable to identify any network devices in a given subnet. Subnet ping sweeps are performed no more that once per day, and will end the ping sweep on a given subnet once Network Insight discovers a network device and is able to collect data from it. You can configure the timeout value (**Ping** **Sweep** **Timeout**) and the number of attempts (**Ping** **Sweep** **Attempts**).

> **warning**
>
> Note
> 
> Smart subnet ping sweeps are not performed on subnets larger than /22. Ping sweeps of any kind do not apply on IPv6 networks because of the greater scale of network addresses in the IPv6 realm.

Complete Ping Sweep differs from the Smart Subnet ping sweep in the following ways:

- The discovery ping sweep runs only against the specified range.
- The sweep runs regardless of the range size.
- The sweep runs regardless of the number of discovered devices within the specified range.

Discovery also performs automatic Ping traceroutes when needed for path collection. Path collections run without user intervention or configuration.
