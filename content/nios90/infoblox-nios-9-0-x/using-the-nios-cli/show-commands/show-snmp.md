---
title: "show snmp"
source: "/space/nios90/280887788"
pageId: "280887788"
---
The `show`` ``snmp` command shows information about the SNMP object that you specify. You can enter the SNMP object name or OID. This command is similar to the SNMP "get" operation. You can use the optional **v3** command to get the information using SNMPv3. For information about SNMP, see *[Monitoring with SNMP](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp)* in the *Infoblox* *NIOS* *Administrator* *Guide*.  
 Use the [*set*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-snmptrap)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-snmptrap)[*snmptrap*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-snmptrap) command to send SNMP traps to management systems you specify.

# Syntax

`show snmp variable {``name`` ``of`` ``an`` ``SNMP`` ``variable,`` ``in`` ``dotted`` ``or`` ``symbolic`` ``format``} v3 {``snmpuser``}`

| **Argument** | **Description** |
| --- | --- |
| `name`` of ``an`` SNMP variable` | The name or OID (object ID) of the SNMP object you want to retrieve. For example, you can enter sysName.0 or .1.3.6.1.4.1.2021.11.53.0. |
| `snmpuser` | The user name of the SNMPv3 user account. This is optional. If you do not provide a user name, the appliance uses the first SNMPv3 user on the list. |

# Examples

## Displaying the host name

`Infoblox &gt; ``show`` ``snmp`` ``variable`` ``sysName.0`  
` SNMPv2-MIB::sysName.0 = STRING: ib-10-34-61-253.infoblox.com`

## Displaying the CPU temperature

`Infoblox &gt; ``show`` ``snmp`` ``variable`` ``.1.3.6.1.4.1.7779.3.1.1.2.1.1.0`  
` IB-PLATFORMONE-MIB::ibCPUTemperature.0 = STRING: +40.75 C `

## Displaying the host name using SNMPv3

`Infoblox &gt; ``show`` ``snmp`` ``variable`` ``sysName.0`` ``v3`` ``SNMPv3User1`  
` SNMPv2-MIB::sysName.0 = STRING: ib-10-34-10.42.infoblox.com`
