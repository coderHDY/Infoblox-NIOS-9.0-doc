---
title: "snmpget"
source: "/space/nios90/280756747"
pageId: "280756747"
---
Fetches the information from a discovered device's SNMP data. You specify the IP address or hostname and the SNMP Object ID (also often referred to as an SNMP variable) or its dotted numeric equivalent as defined in the device MIB.

# Syntax

`snmpget &lt;hostname or IP address&gt; &lt;SNMP OID&gt;`

# Example

The following example uses the `snmpget` command, specifying the IP address of a device discovered by NIOS, along with the standard Object ID `sysName.O` to look up the hostname string for a device. You will need the community string or privacy key to fetch the information.

`Infoblox &gt; ``snmpget`` ``172.22.53.5`` ``sysName.0`  
` Enter SNMP Version (1, 2c or 3): ``2c`  
` Enter SNMP community string: ``*********`  
`Created directory: /var/lib/net-snmp/cert_indexes`  
` Created directory: /var/lib/net-snmp/mib_indexes `  
`SNMPv2-MIB::sysName.0 = STRING: ``DEVsw08`
