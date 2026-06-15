---
title: "Feature-Based Configuration Requirements"
source: "/space/nios90/1432787362"
pageId: "1432787362"
---
The table in this topic provides guidance on selecting an appropriate IB-FLEX flavor based on the features planned for deployment. Use this information to deploy your IB-FLEX appliances with adequate CPU and memory to support the feature performance and scalability.

For a mapping of small IB-FLEX, medium IB-FLEX, medium large IB-FLEX, and large IB-FLEX configurations, use the legend below:

- **Small IB-FLEX**: 10 vCPUs, 32 GB memory
- **Medium IB-FLEX**: 16 vCPUs and 64 GB Memory
- **Medium Large IB-FLEX**: 16 vCPUs and 96 GB memory
- **Large IB-FLEX**: 24 vCPUs and 128 GB memory

*IB-FLEX Configuration Based on Features*

| **Feature** | **Minimum Requirement** | **Database Object Count** | **Grid Master and Grid Master Candidate Capable** |
| --- | --- | --- | --- |
| Virtual DNS Cache Acceleration (vDCA) + Reporting | Small IB-FLEX | 100,000 | No |
| DNS Infrastructure Protection + Reporting | Small IB-FLEX | 110,000 | No |
| DNS Cache Acceleration, DNS Infrastructure Protection, TCP DNS, DNSTAP, Authoritative DNS, Threat Insight, RPZ, DNS over TLS (DoT),  DNS over HTTPS (DoH), and Reporting | Medium IB-FLEX | 300,000 | No |
| DNS Cache Acceleration, DNS Infrastructure Protection, Threat Insight, RPZ, TCP DNS, Reporting, and Subscriber services | Medium IB-FLEX | 300,000 | No |
| DNS Cache Acceleration, DNS Infrastructure Protection, Threat Insight, RPZ, TCP DNS, DNS over TLS (DoT),  DNS over HTTPS (DoH), Authoritative DNS, DNSTAP, Reporting, and Subscriber services | Medium large IB-FLEX | 300,000 | No |
| DNS Cache Acceleration, DNS Infrastructure Protection, Threat Insight, RPZ, TCP DNS, Authoritative DNS, Reporting, and Subscriber services with 5 million subscribers only deployment | Medium large IB-FLEX | 300,000 | No |
| DNS Cache Acceleration, DNS Infrastructure Protection, Threat Insight, RPZ, TCP DNS, DNS over TLS (DoT),  DNS over HTTPS (DoH), DNSTAP, Authoritative DNS, Reporting, and Subscriber services (with allow blocklists) | Large IB-FLEX | 600,000 | No |
| IB-FLEX as Grid Master or Grid Master Candidate | Medium IB-FLEX | 8,800,000 | Yes |
| Medium large IB-FLEX | 8,800,000 |
| Large IB-FLEX | 24,000,000 |

> **warning**
>
> **Note**
> 
> - Medium, medium large, and large IB-FLEX configurations are capable of serving as Grid Master and Grid Master Candidate but without the DNS Cache Acceleration (DCA) and DNS Infrastructure Protection services.
> - The object count is limited by the DCA feature.
