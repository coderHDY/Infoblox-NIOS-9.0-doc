---
title: "Sending Updates to DNS Servers"
source: "/space/nios90/1480917071"
pageId: "1480917071"
---
The DHCP server can send DDNS updates to DNS servers in the same Grid and to external DNS servers. When you enable the appliance to send updates to Grid members, you must specify the DNS view to be updated. If a network view has multiple DNS views, you can select only one DNS view for DDNS updates. For information about DNS views, see [*About DNS Views*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763374).  
When you enable DDNS updates for a Grid, member, shared network, network, address range, DHCP template, fixed address, or roaming host, the DHCP server sends updates to authoritative zones using the domain name (as DHCP option 15) you define in the DHCP properties. You can also define forward-mapping zones that receive DDNS updates for DHCP clients that use option 81 to define the domain name. For information, see [*About the Client FQDN Option*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405256). To allow DDNS updates for clients using option 81, you must first enable the support for option 81. For information, see [*Configuring DDNS Features*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272318).   
    
For DNS zones that have multiple primary servers, you can define a primary name server to be used as the default primary server when performing DDNS updates from the appliance. Note that you cannot configure an external primary as the default primary. For more information, see Defining the Default Primary for DDNS Updates to Zones with Multiple Primaries below.
