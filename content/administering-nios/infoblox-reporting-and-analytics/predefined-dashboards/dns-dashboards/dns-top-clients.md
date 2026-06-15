---
title: "DNS Top Clients"
source: "/space/nios90/1473773575"
pageId: "1473773575"
---
The *DNS* *Top* *Clients* *dashboard* lists clients that have the most DNS queries. The dashboard shows horizontal bar charts that list clients that have the most total counts of DNS requests and their percentages over a given time frame. The default dashboard displays the top 10 clients within the last 24 hours. Note that the DNS Top Client report is not NAT client aware and therefore this dashboard does not show information for NAT'ed clients.  
To generate data for DNS Response Latency Trend dashboard, the Grid member enabled for DNS service queries itself for PTR record 1.0.0.127.in-addr.arpa every minute. NIOS will not exclude such DNS queries and displays default client 127.0.0.1 in the DNS Top Clients report.
