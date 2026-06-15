---
title: "Infoblox Reporting and Analytics"
source: "/space/nios90/280659447"
pageId: "280659447"
---
This section describes the Infoblox Reporting and Analytics solution and its features. It explains how to navigate through the user interface, view predefined dashboards, create personal reports and searches. It also provides best practices for customizing searches and setting permissions, and describes the reporting clustering feature and how to configure a reporting cluster.

It contains the following sections:

*[children]*

The Infoblox Reporting and Analytics solution automates the collection, analysis, and presentation of core network service data that assists you in planning and mitigating network outage risks so you can manage your networks more efficiently. It provides predefined dashboards and reports that capture useful information about the activities and performance of core network services. It also provides an enhanced reporting interface so you can create custom dashboards, reports, and alerts.

> **warning**
>
> **Note**
> 
> For Reporting and Analytics to function properly, ensure that you **DO NOT** create a SHA-256 4096 SSL key for the HTTPS certificate in your Grid because Java does not support SHA-256 with a 4096 key size.

Through reporting clustering, you can combine and configure multiple reporting members in a cluster. These reporting members work together to provide greater performance with higher data throughput and indexing capacity. The cluster also efficiently scales storage and indexing capacity. Reporting data is replicated among these reporting appliances to ensure continuous service even if one of the servers fails. You can configure more reporting appliances in multiple locations (sites) so that reporting data and service can be recovered from catastrophic disasters. Thus, the reporting clustering solution increases scale, offers higher reporting performance and greatly improves the reliability of the Reporting and Analytics solution. For information about this feature, see [*About*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758629)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758629)[*Reporting*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758629)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758629)[*Clustering*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758629).

When you set up a reporting appliance with valid licenses in the Grid, the reporting server acts as an indexer that collects data from Grid members while the members are forwarders that transmit information to the reporting server. The reporting server indexes all raw data and transforms it into searchable events. Depending on your needs, you can enable certain Grid members as forwarders and disable others so the reporting server receives only the information you need from specific members. The following figure depicts the high-level configuration of the NIOS Reporting and Analytics solution:   
*Infoblox* *Reporting* *and* *Analytics* *Overview*

*[drawio]*

The Infoblox reporting solution supports both IPv4 and IPv6 networks and you can configure a reporting member in IPv4, IPv6, or in dual mode (IPv4 and IPv6) network environment. An IPv4 reporting member uses IPv4 as the communication protocol, so you can add an IPv4 reporting member to an IPv4 or dual mode Grid. An IPv6 reporting member uses IPv6 as the Grid communication protocol, so you can add an IPv6 reporting member to an IPv6 or dual mode Grid. But a dual mode reporting member can use either IPv4 or IPv6 as the communication protocol, so you can add a dual mode reporting member to an IPv4, IPv6, or a dual mode Grid. For more information about how to set up the communication protocol, see [*Changing*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[*the*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[*Communication*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[*Protocol*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[*for*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[*a*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[*Dual*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[*Mode*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637)[*Appliance*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129/Adding+Grid+Members#bookmark637).

# Related topic

*[Guidelines for Upgrading the Reporting and Analytics Solution](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/378732849)*
