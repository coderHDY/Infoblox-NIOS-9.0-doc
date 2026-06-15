---
title: "Enabling Recursion on External DNS Servers"
source: "/space/nios90/1343293903"
pageId: "1343293903"
---
Since the HA pair forwards outbound queries to the two external DNS servers [ns1.corpxyz.com](http://ns1.corpxyz.com) (10.1.5.2) and [ns2.corpxyz.com](http://ns2.corpxyz.com) (2.2.2.2) for resolution, you must enable recursion on those servers. When a DNS server employs recursion, it queries other DNS servers for a domain name until it either receives the requested data or an error that the requested data cannot be found. It then reports the result back to the server that queried—in this case, the internal DNS server [ns3.corpxyz.com](http://ns3.corpxyz.com) (10.1.4.10), which in turn reports back to the DNS client.

For more information, see:

*[children]*
