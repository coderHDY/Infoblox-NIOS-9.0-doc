---
title: "ibMemberNodeServiceStatusTable"
source: "/space/nios90/1430094716"
pageId: "1430094716"
---
As shown in the below figure, ibMemberNodeServiceStatusTable (object ID 3.1.1.2.1.10) has one subtree, ibMemberNodeServiceStatusEntry, which contains the following objects:

- ibMemberNodeServiceName (String) reports the names of the system and hardware services.
- ibMemberNodeServiceStatus (Integer) reports the status of the services.
- ibMemberNodeServiceDesc (String) describes the details of the status.

ibMemberNodeServiceStatusTable displays the current status of the system and hardware services on the appliance that you query. For example, when you query an independent appliance, this table shows the information about the independent appliance. When you query the VIP of an HA pair, this table shows the information about the active node. For the active node of the HA pair, you can also query ibMemberPassiveNodeStatusTable to get the status of the passive node.

> **warning**
>
> ### Note
> 
> For an independent appliance and the passive node of an HA pair, no information is returned when you query ibMemberPassiveNodeServiceStatusTable.



*ibMemberNodeServiceStatusTable* *Objects*
