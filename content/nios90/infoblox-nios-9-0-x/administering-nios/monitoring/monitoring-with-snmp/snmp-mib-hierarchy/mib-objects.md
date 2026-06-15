---
title: "MIB Objects"
source: "/space/nios90/1430127182"
pageId: "1430127182"
---
The Infoblox MIB objects were implemented according to the guidelines in RFCs 1155 and 2578. They specify two types of macros for defining MIB objects: OBJECT-TYPE and NOTIFICATION-TYPE. These macros contain clauses that describe the characteristics of an object, such as its syntax and its status. OBJECT-TYPE macros describe MIB objects, and NOTIFICATION-TYPE macros describe objects used in SNMP traps.  
Each object in the ibPlatformOne, ibDNSone, and ibDHCPOne MIBs contains the following clauses from the OBJECT-TYPE macro:

OBJECT-TYPE: Provides the administratively-assigned name of the object.

- SYNTAX: Identifies the data structure of the object, such as integers, counters, and octet strings.
- MAX-ACCESS: Identifies the type of access that a management station has to the object. All Infoblox MIB objects provide read-only access.
- STATUS: Identifies the status of the object. Values are current, obsolete, and deprecated.
- DESCRIPTION: Provides a textual description of the object.
- INDEX or AUGMENTS: An object that represents a conceptual row must have either an INDEX or AUGMENTS clause that defines a key for selecting a row in a table.
- OID: The dotted decimal object identifier that defines the location of the object in the universal MIB tree.

The ibTrap MIB defines the SNMP traps that a NIOS appliance can send. Each object in the ibTrap MIB contains the following clauses from the NOTIFICATION-TYPE macro:

NOTIFICATION-TYPE: Provides the administratively-assigned name of the object.

- OBJECTS: Provides an ordered list of MIB objects that are in the trap.
- STATUS: Identifies the status of the object. Values are current, obsolete, and deprecated.
- DESCRIPTION: Provides the notification information.
