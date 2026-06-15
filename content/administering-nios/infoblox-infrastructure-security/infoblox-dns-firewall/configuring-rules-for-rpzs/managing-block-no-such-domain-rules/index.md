---
title: "Managing Block (No Such Domain) Rules"
source: "/space/nios90/1321174666"
pageId: "1321174666"
---
You can define rules to block certain domain names, IP addresses or networks, or client IP addresses or networks. When you choose this option to block a domain name, the query name is matched with the RPZ rule. If the query name matches the RPZ rule, the DNS client receives a DNS response that indicates the domain does not exist.  
When you block an IP address or network using this option, the A and AAAA records are matched with the RPZ rule. If the records match an RPZ rule, the DNS client receives a DNS response that indicates the domain does not exist.  
When you choose this option to block a specific client IP address or network, the IP address or network of a client querying the DNS server is matched with the RPZ rule. If the IP address or the network of the client matches the RPZ rule, the DNS client receives a DNS response that indicates the domain does not exist.

*[children]*
