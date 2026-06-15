---
title: "Network Views"
source: "/space/nios90/1348534399"
pageId: "1348534399"
---
Consider the authority delegation guidelines mentioned in the table below when you create, modify, or delete a network view. See [*Sample Cloud API Requests*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667760/About+Cloud+API+Requests#Sample-Cloud-API-Requests) for a sample cloud API request.  
For information about how to create network views from the Grid Master, see [*Adding Network Views*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404336/Configuring+Network+Views#Adding-Network-Views).

*Authority* *Delegation* *for* *Network* *Views*

| **Cloud API Requests** | **Standard API and WAPI Requests** | ** Comments** |
| --- | --- | --- |
| - You can delegate authority for a network view to only one Cloud Platform Appliance. - When you create a new network view, authority is automatically delegated to the Cloud Platform Appliance that processes the request. - To balance network views among multiple Cloud Platform Appliances in the Grid, ensure that you configure your cloud adapter accordingly. - If you want to share a network view among different Cloud Platform members, you must manually provision it and its child objects and delegate them to the respective Cloud Platform members. | - You can delete a network view from the Grid Master only if it has not been delegated to any Cloud Platform Appliance. - When you create a network view on the Grid Master, it is shared among all Grid members in the Grid. - You can delegate a network view from the Grid Master to a Cloud Platform Appliance only if the child objects within the network view are delegated to the same Cloud Platform Appliance. - When you reclaim authority for a network view, any DNS zones in the network view remain assigned to their name servers, including the Cloud Platform Appliance that has lost authority over the network view. In other words, the DNS zone remains under the authority of that Cloud Platform Appliance. | - When you create a network view through a cloud API request, you must include the following extensible attributes in the cloud API request: Tenant ID, Cloud API Owned, and CMP Type. |
