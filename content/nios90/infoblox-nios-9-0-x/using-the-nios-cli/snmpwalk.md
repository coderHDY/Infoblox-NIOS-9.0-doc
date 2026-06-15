---
title: "snmpwalk"
source: "/space/nios90/280265913"
pageId: "280265913"
---
Obtain a tree of information from a network device, using automatic SNMP GETNEXT commands. In the NIOS administrative shell version of the `snmpwalk` command, you can specify the SNMP version, the community string, and the desired root Object ID (OID).

# Syntax

`snmpwalk &lt;hostname or IP address&gt; &lt;interface&gt; &lt;name of an SNMP OID in dotted or symbolic format&gt;`

# Example

The following example lists a partial output from querying the root Object ID for a Cisco Nexus 5K switch (this technique is also useful for looking up other Object IDs within a particular device):

`Infoblox &gt; snmpwalk 172.22.33.5 LAN1 1.3 `  
`Enter SNMP Version (1, 2c or 3): 2c`  
`Enter SNMP community string: *********`  
` SNMPv2-MIB::sysDescr.0 = STRING: Cisco NX-OS(tm) n5000, Software (n5000-uk9), Version 5.1(3)N2(1b), RELEASE SOFTWARE Copyright (c) 2002-2011 by Cisco Systems, Inc. Device Manager Version 5.2(1), Compiled 8/31/2012 17:00:00`  
` SNMPv2-MIB::sysObjectID.0 = OID: SNMPv2-SMI::enterprises.9.12.3.1.3.798`  
` DISMAN-EVENT-MIB::sysUpTimeInstance = Timeticks: (165293061) 19 days, 3:08:50.61 `  
`SNMPv2-MIB::sysContact.0 = STRING: who@where`  
` SNMPv2-MIB::sysName.0 = STRING: DEVsw03`  
` SNMPv2-MIB::sysLocation.0 = STRING: snmplocation `  
`SNMPv2-MIB::sysServices.0 = INTEGER: 70`  
` SNMPv2-MIB::sysORLastChange.0 = Timeticks: (40) 0:00:00.40 `  
`SNMPv2-MIB::sysORID.1 = OID: SNMPv2-MIB::snmpMIB`  
` SNMPv2-MIB::sysORID.2 = OID: SNMP-VIEW-BASED-ACM-MIB::vacmBasicGroup`  
` SNMPv2-MIB::sysORID.3 = OID: SNMP-FRAMEWORK-MIB::snmpFrameworkMIBCompliance `  
`SNMPv2-MIB::sysORID.4 = OID: SNMP-MPD-MIB::snmpMPDCompliance`  
` SNMPv2-MIB::sysORID.5 = OID: SNMP-USER-BASED-SM-MIB::usmMIBCompliance`  
` SNMPv2-MIB::sysORDescr.1 = STRING: The MIB module for SNMPv2 entities`  
` SNMPv2-MIB::sysORDescr.2 = STRING: View-based Access Control Model for SNMP. `  
`SNMPv2-MIB::sysORDescr.3 = STRING: The SNMP Management Architecture MIB.`  
` ...`
