---
title: "set snmptrap"
source: "/space/nios90/280757065"
pageId: "280757065"
---
The `set`` ``snmptrap` command sends SNMP traps to the trap receiver (SNMP trap server IP address) you specify. You can use the optional `v3` command to generate SNMPv3 traps. For information about SNMP, see *[Monitoring with SNMP](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp)*.

Use the [*show*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-snmp)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-snmp)[*snmp*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-snmp) command to get information about SNMP objects.

> **warning**
>
> **Note**
> 
> Use the `set`` ``snmptrap` command only for test purposes because it uses 0 as the value of the `msgAuthoritativeEngineBoots` and `msgAuthoritativeEngineTime` variables and this may cause the trap receiver to drop traps.

# Syntax

`set snmptrap variable &lt;name of an SNMP variable, in dotted or symbolic format&gt; address &lt;address of the trap receiver&gt; [v3] [snmpuser][all] [ibNodeName &lt;value&gt; ] [ibTrapSeverity &lt;value&gt;] [ibOjectName &lt;value&gt;] [ibProbableCause &lt;value&gt;] [ibSubSystemName &lt;value&gt;]  [ibCurThresholdValue &lt;value&gt;] [ibThresholdHigh &lt;value&gt;] [ibThresholLow &lt;value&gt;] [ibPreviousState &lt;value&gt;] [ibCurrentState &lt;value&gt;] [ibTrapDesc &lt;value&gt;]`



| **Argument** | **Description** |
| --- | --- |
| `&lt;name of an SNMP variable&gt;` | Name or OID (object ID) of the SNMP object. For example, you can enter sysName.0 or .1.3.6.1.4.1.2021.11.53.0. |
| `&lt;address of the trap receiver&gt;` | IPv4 or IPv6 address of the management system that receives SNMP traps. |
| `&lt;snmpuser&gt;` | User name of the SNMPv3 user account. This is optional. If you do not provide a user name, the appliance uses the first SNMPv3 user on the list. |
| `ibNodeName &lt;value&gt;` | IP address of the appliance to which the trap must be sent. |
| `ibTrapSeverity &lt;value&gt; ` | Severity of the trap. For more information, see *[Trap Severity (OID 3.1.1.1.2.2.0)](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/snmp-mib-hierarchy/SNMP+MIB+Hierarchy#Trap Severity (OID 3.1.1.1.2.2.0))*. |
| `ibObjectName &lt;value&gt; ` | Name of the object for which the trap is generated. |
| `ibProbableCause &lt;value&gt;` | Value that provides information about events such as hardware, software for process failures that trigger SNMP traps. |
| `ibSubSystemName &lt;value&gt; ` | Value that provides information about the subsystems that trigger the traps. |
| `ibCurThresholdValue &lt;value&gt; ` | Current value of the threshold counter. |
| `ibThresholdHigh &lt;value&gt; ` | For CPU usage, this is the trigger value of the SNMP trap. For DHCP address usage, this is the value of the high watermark. |
| `ibThresholdLow &lt;value&gt;` | For CPU usage, this is the reset value of the SNMP trap. For DHCP address usage, this is the value for the low watermark. |
| `ibPreviousState &lt;value&gt;` | Previous state of the appliance. |
| `ibCurrentState &lt;value&gt; ` | Current state of the appliance. |
| `ibTrapDesc &lt;value&gt; ` | Description of the trap. |

For more information about the argument descriptions, see *[Types of Traps (OID 3.1.1.1.1)](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/snmp-mib-hierarchy/SNMP+MIB+Hierarchy#Types of Traps (OID 3.1.1.1.1))*.

# Examples

## Sending SNMP Traps to a Specific Trap Receiver

Enter the following on the appliance:

`Infoblox &gt; ``set snmptrap variable sysName.0 address 10.0.0.11`

The appliance sends the following acknowledgement to the trap receiver:

`2011-02-23 23:02:51 10.0.0.11 [UDP: [10.0.0.11]:35597-&gt;[10.0.0.11]]:`  
`DISMAN-EVENT-MIB::sysUpTimeInstance = Timeticks: (42) 0:00:00.42`  
`SNMPv2-MIB::snmpTrapOID.0 = OID: SNMPv2-MIB::sysName.0`  
`2011-02-23 23:02:53 10.0.0.11 [UDP: [10.0.0.11]:52367-&gt;[10.0.0.11]]:`  
`DISMAN-EVENT-MIB::sysUpTimeInstance = Timeticks: (42) 0:00:00.42`  
`SNMPv2-MIB::snmpTrapOID.0 = OID: SNMPv2-MIB::sysName.0`` `

## Sending SNMP Traps Using SNMPv3

Enter the following on the appliance:

`Infoblox &gt; ``set snmptrap variable sysName.0 localhost v3 SNMPv3User1`

The appliance sends the following acknowledgement to the trap receiver:

`2011-02-07 01:08:19 localhost [UDP: [127.0.0.1]:41884-&gt;[127.0.0.1]]:`  
`DISMAN-EVENT-MIB::sysUpTimeInstance = Timeticks: (42) 0:00:00.42`  
`SNMPv2-MIB::snmpTrapOID.0 = OID: DISMAN-EVENT-MIB::sysName.0`

Enter the following on the appliance:

`Infoblox &gt; ``set snmptrap variable sysName.0 localhost v3 SNMPv3User1`

The appliance sends the following to the trap receiver in the event of a process failure:

`SNMPv2-MIB::snmpTrapOID.0 = OID: SNMPv2-SMI::enterprises.7779.3.1.1.1.1.2.0`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.1.0 = STRING: "192.168.1.2"`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.2.0 = INTEGER: 5`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.5.0 = STRING: "named"`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.4.0 = INTEGER: 20`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.11.0 = STRING: "A named daemon monitoring`  
`failure has occurred."`

## Sending SNMP Traps When the Primary Disk is Full

Enter the following on an appliance of type disk:

`Infoblox &gt; set snmptrap variable 1.3.6.1.4.1.7779.3.1.1.1.1.3 address 10.35.5.243 ibNodeName "infoblox.localdomain" ibObjectName Disk ibTrapSeverity 3 ibProbableCause 1001 ibTrapDesc '"Primary drive is full."'`

The appliance sends the following to the trap receiver in the event of the primary disk being full:

`2020-06-30 12:36:25 `[member0.g.infoblox.com](http://member0.g.infoblox.com)` [UDP: [10.35.5.243]:44807-&gt;[10.35.5.243]:162]:`

`DISMAN-EVENT-MIB::sysUpTimeInstance = Timeticks: (10123392) 1 day, 4:07:13.92   SNMPv2-MIB::snmpTrapOID.0 = OID: IB-TRAP-MIB::ibThresholdCrossingEvent  IB-TRAP-MIB::ibNodeName.0 = STRING: "infoblox.localdomain"   IB-TRAP-MIB::ibTrapSeverity.0 = INTEGER: minor(3)       IB-TRAP-MIB::ibObjectName.0 = STRING: Disk  IB-TRAP-MIB::ibCurThresholdValue.0 = INTEGER: 100 IB-TRAP-MIB::ibThresholdHigh.0 = INTEGER: 90    IB-TRAP-MIB::ibThresholdLow.0 = INTEGER: 0      IB-TRAP-MIB::ibTrapDesc.0 = STRING: Primary drive is full.`
