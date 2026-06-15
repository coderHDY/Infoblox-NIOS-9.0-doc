---
title: "Designating the New Primary on the Secondary Name Server (at the ISP Site)"
source: "/space/nios90/1432819168"
pageId: "1432819168"
---
In this example, the external secondary name server is maintained by an ISP, so you must contact your ISP administrator to change the IP address of the primary (or *master*) name server. (If you have administrative access to the secondary name server, you can make this change yourself.)

Because a firewall performing NAT exists between the secondary and primary name servers, specify the NAT address 1.1.1.2 for the primary name server instead of 10.1.5.2.
