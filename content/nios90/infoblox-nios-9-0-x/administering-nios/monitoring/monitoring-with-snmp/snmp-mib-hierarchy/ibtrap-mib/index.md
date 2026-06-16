---
title: "ibTrap MIB"
source: "/space/nios90/1430094491"
pageId: "1430094491"
---
NIOS appliances send SNMP traps when events, internal process failures, or critical service failures occur. The ibTrap MIB defines the types of traps that a NIOS appliance sends and the value that each MIB object represents. The Infoblox SNMP traps report objects which the ibTrap MIB defines. The below figure illustrates the ibTrap MIB structure. It provides the OID and textual description for each object.

> **warning**
>
> ### Note
> 
> OIDs shown in the illustrations and tables in this section do not include the prefix .1.3.6.1.4.1.7779.

The ibTrap MIB comprises two trees, ibTrapOneModule and ibNotificationVarBind. The ibTraponeModule tree contains objects for the types of traps that a NIOS appliance sends. The ibNotificationVarBind tree contains objects that the Infoblox SNMP traps report. You cannot send queries for the objects in this MIB module. The objects are used only in the SNMP traps.

*ibTrapOne* *MIB* *Structure*

![ibTrapOne MIB Structure](/assets/1430094491/38ec7cf3-00be-4a58-a66a-a843563ef295.png)
