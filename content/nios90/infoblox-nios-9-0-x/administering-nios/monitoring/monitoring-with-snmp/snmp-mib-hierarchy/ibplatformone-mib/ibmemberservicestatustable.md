---
title: "ibMemberServiceStatusTable"
source: "/space/nios90/1430160289"
pageId: "1430160289"
---
As shown in the figure[ ](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/snmp-mib-hierarchy/SNMP+MIB+Hierarchy#bookmark2929)below, ibMemberServiceStatusTable (object ID 3.1.1.2.1.2.9) has one subtree, ibMemberServiceStatusEntry, which contains the following objects:

- ibServiceName (String) reports the names of the Infoblox services.
- ibServiceStatus (Integer) reports the status of the Infoblox services.
- ibServiceDesc (String) describes the details of the status.

ibMemberServiceStatusTable displays the current status of the Infoblox services on the appliance that you query. For an HA pair, this table displays the service status of the active node. If the appliance you query is the passive node of an HA pair, this table reflects the service status of the passive node, which can be "inactive" or "unknown."  
You can also query ibMemberNodeServiceStatusTable and ibMemberPassiveNodeServiceStatusTable that display system and hardware status on the queried appliance.



*ibMemberServiceStatusTable* *Objects*

![ibMemberServiceStatusTable Objects](/assets/1430160289/ee3df62a-30b1-44d6-b090-ebcd6361f3e9.png)
