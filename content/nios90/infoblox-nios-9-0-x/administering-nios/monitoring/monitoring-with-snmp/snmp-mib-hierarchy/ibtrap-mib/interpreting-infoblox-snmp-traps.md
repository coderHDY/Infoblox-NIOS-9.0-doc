---
title: "Interpreting Infoblox SNMP Traps"
source: "/space/nios90/1430127497"
pageId: "1430127497"
---
Depending on the SNMP management application your management system uses, the SNMP traps you receive may list the OIDs for all relevant MIB objects from both the ibTrapOneModule and ibNotificationVarBind trees. For OIDs that have string values, the trap lists the text. For OIDs that contain integers, you can use the tables in this section to find out the values. Some SNMP management applications list only the object names and their corresponding values in the SNMP traps. Whether or not your SNMP management application lists OIDs, you can use the tables in this section to find out the corresponding value and definition for each MIB object.

The following is a sample trap a NIOS appliance sends:

`418:Jan 31 18:52:26 (none) snmptrapd[6087]: 2008-01-31 18:52:26 10.35.1.156 [UDP:`

`[10.35.1.156]:32772]: DISMAN-EVENT-MIB::sysUpTimeInstance = Timeticks: (1080)`

`0:00:10.80 SNMPv2-MIB::snmpTrapOID.0 = OID: SNMPv2-SMI::enterprises.7779.3.1.1.1.1.4.0`

`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.1.0 = STRING: "10.35.1.156"`

`SNMPv2-SMI::enterprises.`

`7779.3.1.1.1.2.3.0 = STRING: "ntp_sync" SNMPv2-SMI::enterprises.7779.3.1.1.1.2.9.0 =`

`INTEGER: 15 SNMPv2-SMI::enterprises.7779.3.1.1.1.2.10.0 = INTEGER: 16`

`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.11.0 = STRING: "The NTP service is out of`

`synchronization."`

The sample trap lists the OIDs and their corresponding values that can help you identify the cause of an event or problem. To identify the possible cause and recommended actions for the trap, use the ibTrapDesc tables.

You can interpret the sample trap as follows:

Using the *ibTrapOneModule* table, you find out OID 7779.3.1.1.1.1.4.0 represents an Object State Change trap. This trap includes the following objects: ibNodeName, ibOjectName, ibPreviousState, ibCurrentState, and ibtrapDesc. For each object, the trap displays the OID and its corresponding value. The following is how you can interpret the rest of the trap:

- ibNodeName (OID 7779.3.1.1.1.2.1.0)
  
  - Using the *ibNotificationVarBind (OID 3.1.1.1.2)* table, you find out OID 7779.3.1.1.1.2.1.0 represents the MIB object ibNodeName, which is the IP address of the appliance on which the trap occurred. Therefore, the statement `"7779.3.1.1.1.2.1.0 = STRING: "10.35.1.156" SNMPv2-SMI::enterprises."` tells you the IP address of the appliance on which the trap occurred.
- ibObjectName (OID 7779.3.1.1.1.2.3.0)
  
  - The statement `"7779.3.1.1.1.2.3.0 = STRING: "ntp_sync" SNMPv2-SMI::enterprises."` tells you the MIB object ibOjectName, which is the name of the object for which the trap was generated, has a value of "ntp_sync" that indicates NTP synchronization issues.
- ibPreviousState (OID 7779.3.1.1.1.2.9.0)
  
  - The statement `"7779.3.1.1.1.2.9.0 = INTEGER: 15 SNMPv2-SMI::enterprises.`" tells you the MIB object ibPreviousState, which indicates the previous state of the appliance, has a value of 15. Using the *ibPreviousState and ibCurrentState Values* table, you know that 15 represents "ntp-sync-up", which means the NTP server was up and running.
- ibCurrentState (OID 7779.3.1.1.1.2.10.0)
  
  - The statement `"7779.3.1.1.1.2.10.0 = INTEGER: 16 SNMPv2-SMI::enterprises."` tells you the MIB object ibCurrentState, which indicates the current state of the appliance, has a value of 16. Using the *ibPreviousState and ibCurrentState Values* table, you know that 16 represents "ntp-sync-down", which means the NTP server is now out of sync.
- ibTrapDesc (OID 7779.3.1.1.1.2.11.0)
  
  - The last statement `"7779.3.1.1.1.2.11.0 = STRING: "The NTP service is out of synchronization."` states the description of the trap. Using the *Object State Change Traps* table for ibTrapDesc, you can find out the trap description and recommended actions for this problem.
