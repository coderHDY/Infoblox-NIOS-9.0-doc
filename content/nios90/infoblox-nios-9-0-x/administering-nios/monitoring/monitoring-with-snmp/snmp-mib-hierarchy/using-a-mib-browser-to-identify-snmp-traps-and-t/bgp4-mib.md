---
title: "BGP4 MIB"
source: "/space/nios90/1430160140"
pageId: "1430160140"
---
Infoblox supports BGP4 (Border Gateway Protocol) for DNS anycast addressing. BGP is configured to send SNMP traps to neighboring routers, as defined in *RFC4273DefinitionsofManagedObjectsforBGP-4*. You must enable and configure the SNMP trap receiver on the Grid member for the member to send SNMP traps.  
The BGP protocol service is configured to send SNMP queries about BGP runtime data. The information is returned using the following OIDs and definitions:

| OID | Definition |
| --- | --- |
| 1.3.6.1.2.1.15.900.1.1 | Number of peers |
| 1.3.6.1.2.1.15.900.1.2 | Number of active peers |
| 1.3.6.1.2.1.15.900.1.3 | Number of AS path entries |
| 1.3.6.1.2.1.15.900.1.4 | Number of BGP community entries |
| 1.3.6.1.2.1.15.900.1.5 | Total number of prefixes |

For each configured BGP peer (a, b, c, d), the information is returned using the following OIDs and definitions:

| OID | Definition |
| --- | --- |
| 1.3.6.1.2.1.15.900.1.9.a.b.c.d.1 | IP address: same as a.b.c.d |
| 1.3.6.1.2.1.15.900.1.9.a.b.c.d.2 | State: 0=down, 1=up |
| 1.3.6.1.2.1.15.900.1.9.a.b.c.d.3 | ASN |
| 1.3.6.1.2.1.15.900.1.9.a.b.c.d.4 | Prefixes |
| 1.3.6.1.2.1.15.900.1.9.a.b.c.d.5 | Up/Down time |
