---
title: "About DNS"
source: "/space/nios90/280660295"
pageId: "280660295"
---
The TOE provides DNS service. There are two basic methods used to protect DNS communication: TSIG and GSS-TSIG. The TSIG (transaction signature) method signs communications using either HMAC-MD5 or HMAC-SHA25. Both end points must be configured with the key. The GSS-TSIG method (based on the GSS API) uses a Kerberos server to retrieve the key, and is only available in Microsoft environments.  
When you configure the TOE to use TSIG and GSS-TSIG keys, you must select HMAC-SHA256 as the key algorithm. For information about using TSIG keys to ensure security in several DNS operations, see the following:

- To control access to DNS views. For more information, see [*Defining Match Clients Lists*](https://infoblox-docs.atlassian.net/wiki/spaces/NOIS91xDRAFT/pages/1685917933)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dns/dns-views/configuration-example-configuring-a-dns-view/Configuration+Example+Configuring+a+DNS+View#bookmark1695)and [*Configuration Example: Configuring a DNS View*](https://infoblox-docs.atlassian.net/wiki/spaces/NOIS91xDRAFT/pages/1685918192).
- To control to which recursive and non-recursive queriers the TOE is allowed to respond. For more information, see [*Specifying Queries*](https://infoblox-docs.atlassian.net/wiki/spaces/NOIS91xDRAFT/pages/1685916329/Controlling+DNS+Queries#Specifying-Queries) and [*Enabling Recursion*](https://infoblox-docs.atlassian.net/wiki/spaces/nios91x/pages/1935409377).
- To authenticate zone transfer requests and replies. For more information, see [*Configuring Zone Transfers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios91x/pages/1934625216).
- To authenticate and verify dynamic DNS updates from DHCP servers. For more information, see [*Enabling DNS Servers to Accept DDNS Updates*](https://infoblox-docs.atlassian.net/wiki/spaces/NOIS91xDRAFT/pages/1685914053).
- When a secondary DNS server receives DDNS updates, it must forward the updates to the primary server because it cannot update zone data itself. To specify the source of DDNS updates. For more information, see [*Forwarding Updates*](https://infoblox-docs.atlassian.net/wiki/spaces/NOIS91xDRAFT/pages/1685914053/Configuring+DNS+Servers+for+DDNS#Forwarding-Updates).

For information about using GSS-TSIG, see [*About GSS-TSIG*](https://infoblox-docs.atlassian.net/wiki/spaces/NOIS91xDRAFT/pages/1685914183).
