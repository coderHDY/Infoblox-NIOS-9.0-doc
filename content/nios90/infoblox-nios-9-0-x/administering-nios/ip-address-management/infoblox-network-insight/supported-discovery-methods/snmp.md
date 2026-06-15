---
title: "SNMP"
source: "/space/nios90/1346273434"
pageId: "1346273434"
---
> **warning**
>
> Note
> 
> Infoblox does not recommend using vendor default SNMP credentials on network devices. Should you need to use vendor defaults for a given device type, you enter those values in the list of SNMP credentials on the Grid Master.

Network Insight supports discovery of devices and networks through SNMPv1/v2c and through SNMPv3 protocols. Discovery acquires information from standard SNMP MIB object IDs (OIDs) to correctly identify and catalogue devices. You enter or import lists of SNMP credentials with which the appliances query devices on the network to perform discovery.

SNMPv1 and SNMPv2c protocols are combined into a set termed **SNMPv1/v2** for discovery. SNMPv1/v2 discovery requires standard read community strings to be stored on the Grid Master.  
Accounts using SNMPv3 use a standard suite of authentication and security protocols. If Network Insight uses SNMPv3 to collect data from devices supporting the protocol, you can define specific user credentials with combinations of authentication and protocol support, and the unique keys for each protocol. Network Insight also supports multiple entries for the same username string, enabling checking of similar SNMPv3 credentials that use different authentication and security protocols.  
Some devices found by discovery may not have known SNMP credentials or credentials that are entered into the sets of SNMP credentials defined for discovery.

> **warning**
>
> Note
> 
> SNMP Credentials from the Grid or from the Member credential list are always tried in the specified order unless a credential is associated with a host, fixed address or reservation being discovered.
