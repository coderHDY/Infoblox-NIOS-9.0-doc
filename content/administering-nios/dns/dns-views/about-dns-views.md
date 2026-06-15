---
title: "About DNS Views"
source: "/space/nios90/280763374"
pageId: "280763374"
---
DNS views enable the NIOS appliance to serve different versions of DNS data based on the host accessing it.

DNS views provide the ability to serve one version of DNS data to one set of clients and another version to another set of clients. With DNS views, the NIOS appliance can provide a different answer to the same DNS query, depending on the source of the query.

In the below figure, the appliance has two views: an Internal and an External DNS view. When the appliance receives queries from DNS clients, it responds with data from either the Internal or External DNS view, depending on the source IP address. When the appliance receives a query from Client A and determines that it can resolve the query from data in the Internal view, the appliance responds with the IP address of the site in the Internal view. When the appliance receives a query from Client B and determines that it can resolve the query from data in the External view, it responds with the IP address in the External view.

*Internal and External Views*

*[drawio]*

You can configure both forward and reverse mapping zones in DNS views and provide DNS services, such as name resolution, zone transfers and dynamic DNS updates. For information about these services, see [*Configuring DNS Services*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280857474).

You can provide multiple views of a given zone with a different set of records in each DNS view. In the below figure, both views contain the corpxyz.com zone and the sales.corpxyz.com zone. The finance.corpxyz.com zone is only in the internal DNS view, and only internal users are allowed to access records in that zone. Resource records can also exist in multiple zones. In the example, the A records for serv1.sales.corpxyz.com and serv2.sales.corpxyz.com are in the sales.corpxyz.com zones in both views.

*Zone Data in Each DNSView*

| **Internal DNS View**    MX | **corpxyz.com**    rmail.corpxyz.com | A | **sales.corpxyz.com**    serv1.sales.corpxyz.com | A | **finance.corpxyz.com**    server.finance.corpxyz.com |
| --- | --- | --- | --- | --- | --- |
| NS | dnsoneA.corpxyz.com | A | serv2.sales.corpxyz.com | A | printer.finance.corpxyz.com |
| A | host1.corpxyz.com | A | serv3.sales.corpxyz.com | A | fin1.finance.corpxyz.com |
| A | host2.corpxyz.com | A A A | printer.sales.corpxyz.com host1.sales.corpxyz.com host2.sales.corpxyz.com | A | fin2.finance.corpxyz.com |
| **External** **DNS** **View** | **corpxyz.com** |  | **sales.corpxyz.com** |  |  |
| MX A A | email.corpxyz.com web1.corpxyz.com web2.corpxyz.com | A A A A | web3.sales.corpxyz.com ftp.sales.corpxyz.com serv1.sales.corpxyz.com serv2.sales.corpxyz.com |  |  |

You can control which clients access a DNS view through the use of a match list specifying IP addresses and/or TSIG (transaction signature) keys. When the NIOS appliance receives a request from a client, it tries to match the source IP address and/or TSIG key with its match list when determining which DNS view, if any, the client can access. After the appliance determines that a client can access a DNS view, it checks the zone level settings to determine if it can provide the service that the client is requesting. For information on TSIG keys or defining zone transfer settings, see [*Enabling Zone Transfers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405834). For more information on match lists, see[* *](https://infoblox-docs.atlassian.net/wiki/spaces/nios90draft/pages/73282458)[*Defining Match Clients Lists*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90draft/pages/73282458). For information on defining query settings, refer to [*Controlling DNS Queries*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405942).

The figure Query Resolution below illustrates how the NIOS appliance resolves a query for a domain name in a zone of a DNS view. In the example, the internal DNS view is listed before the external DNS view. Therefore, when the appliance receives a query, it checks the match list of the internal DNS view first. If it does not find the source address in the match list of the internal DNS view, it checks the match list of the external DNS view. The match list of the external DNS view allows all IP addresses. Next, the NIOS appliance checks the zone level settings to determine if it is allowed to resolve queries from the client for domain names in that zone. After the appliance determines it is allowed to respond to queries from this client, it resolves the query and sends back the response to the client.

*Query* *Resolution*

*[drawio]*

When you create more than one DNS view, as shown in the figure Query Resolution above, the order of the views is important. View order determines the order in which the NIOS appliance checks the match lists. In the figure Query Resolution, the internal DNS view is listed before the external DNS view. If the views were reversed, no hosts would receive DNS replies from the internal DNS view because the match list of the external DNS view allows replies to clients with any IP address.

In a Grid, each Grid member can host its own set of views. A Grid member can serve as the primary or secondary server for multiple views of a particular zone. For information about specifying primary and secondary servers, see [*Assigning Zone Authority to Name Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599).

# About DNS Views and Network Views

The NIOS appliance provides one default DNS view, which is always associated with the default network view. You can create additional network and DNS views. A network view is a single routing domain with its own networks. For information about network views, see [*Managing IPv4 DHCP Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267800).  
The default DNS view initially allows all IP addresses access, and has the same recursion setting as the Grid. You can change these properties and rename the default DNS view, but you cannot delete it. When you upgrade or migrate from a name server, or an earlier version of software that does not support DNS views, the appliance places all the zones defined in the older release in the default DNS view. You can then create additional views and organize the zones in each view.

When you create a network view, the appliance automatically creates a corresponding DNS view with "default." prepended to the name of the network view. You can rename the system-defined DNS view and configure its properties. If the appliance contains only one network view, all DNS views are associated with that network view. If there are 20 or less network views configured, the appliance displays the network views in the drop-down list on the left of the top navigation bar of the **Data** **Management** tab of Grid Manager. The appliance displays the *Network* *View* *Selector* dialog box if there are more than 20 network views configured. You can adjust the page size of the selector by choosing the number of network views to be displayed on each page from the **Page** **Size** drop-down list. If the number of network views exceeds the selected number, the selector displays the data on multiple pages. If you have a large number of network views, select a larger page size so you can quickly locate a network view without excessive paging through the list. The default page size is 10.

A DNS view can be in one network view only, but a network view can have multiple DNS views. If you enable dynamic DNS updates, you must specify which DNS view receives the updates. In a network view, only one DNS view can receive the dynamic DNS updates. For information, see [*Sending DDNS Updates to a DNS Serve*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272218)[r](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272218).
