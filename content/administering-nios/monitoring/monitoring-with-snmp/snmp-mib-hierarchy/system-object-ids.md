---
title: "System Object IDs"
source: "/space/nios90/1430192716"
pageId: "1430192716"
---
Infoblox uses the SNMP system object identifier sysObjectID to identify Infoblox appliances. The following table is a definition of sysObjectID from the SNMPv2 MIB, *Management* *Information* *Base* *(MIB)* *for* *the* *Simple* *Network* *Management* *Protocol* *(SNMP)*:

| OBJECT-TYPE | sysObjectID |
| --- | --- |
| SYNTAX | Object Identifier |
| MAX-ACCESS | read-only |
| STATUS | current |
| DESCRIPTION | "The vendor's authoritative identification of the network management subsystem contained in the entity. This value is allocated within the SMI enterprises subtree (1.3.6.1.4.1) and provides an easy and unambiguous means for determining `what kind of box' is being managed. For example, if vendor `Flintstones,Inc.' was assigned the subtree 1.3.6.1.4.1.424242, it could assign the identifier 1.3.6.1.4.1.424242.1.1 to its `Fred Router'." |



The following table lists the enterprise IDs and their corresponding Infoblox hardware platforms that an SNMP query can return when you request the sysObjectID value. Note that the IDs shown in the table do not include 1.3.6.1.4.1.7779.1. (the infobloxProducts prefix).

*sysObjectID* *for* *Infoblox* *Hardware*

| ID | Description | Definition |
| --- | --- | --- |
| 1000 | ibDefault | Default environments, such as chroot |
| 1002 | ibCisco | Cisco servers |
| 1003 | ibvm | vNIOS appliances on VMware ESX or ESXi servers |
| 1004 | ibvnios | Virtual NIOS |
| 1401 | ib810 | Trinzic 810 appliances |
| 1402 | ib820 | Trinzic 820 appliances |
| 1403 | ib1410 | Trinzic 1410 appliances |
| 1404 | ib1420 | Trinzic 1420 appliances |
| 1405 | ib1400 | Trinzic Reporting 1400 appliances |
| 1406 | ib800 | Trinzic Reporting 800 appliances |
| 1411 | ib2200 | Trinzic Reporting 2200 appliances |
| 1412 | ib2210 | Trinzic 2210 appliances |
| 1413 | ib2220 | Trinzic 2220 appliances |
| 1423 | ib4000 | Infoblox-4000 appliances |
| 1431 | ib100 | Trinzic 100 appliances |
| 1444 | nd4000 | Network Insight 4000 appliances |
| 1501 | ib815 | Trinzic 815 appliances |
| 1502 | ib825 | Trinzic 825 appliances |
| 1503 | ib1415 | Trinzic 1415 appliances |
| 1504 | ib1425 | Trinzic 1425 appliances |
| 1505 | ib1405 | Trinzic 1405 appliances |
| 1506 | ib805 | Trinzic 805 appliances |
| 1507 | pt1405 | Advanced 1405 appliances |
| 1511 | ib2205 | Trinzic 2205 appliances |
| 1512 | ib2215 | Trinzic 2215 appliances |
| 1513 | ib2225 | Trinzic 2225 appliances |
| 1514 | pt2205 | Advanced 2205 appliances |
| 1521 | ib4015 | Trinzic 4015 appliances |
| 1522 | ib4035 | Trinzic 4035 appliances |
| 1523 | ib4005 | Trinzic 4005 appliances |
| 1524 | pt4005 | Advanced 4005 appliances |
| 1525 | ib4025 | Trinzic 4025 appliances |
| 1541 | nd805 | Network Insight 805 appliances |
| 1542 | nd1405 | Network Insight 1405 appliances |
| 1543 | nd2205 | Network Insight 2205 appliances |
| 1544 | nd4005 | Network Insight 4005 appliances |
