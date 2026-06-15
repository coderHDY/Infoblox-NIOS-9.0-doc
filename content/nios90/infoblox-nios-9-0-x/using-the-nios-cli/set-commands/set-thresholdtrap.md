---
title: "set thresholdtrap"
source: "/space/nios90/280888018"
pageId: "280888018"
---
Use the `set thresholdtrap` command to customize the trigger and reset threshold values of SNMP traps for event types such as CPU usage and database Write activity.

- CPU Usage:  
  When you use this command to change the trigger and reset values, you enable the trap and the appliance sends and resets traps based on the configured values. When CPU usage of an appliance exceeds the trigger threshold for 15 seconds, the appliance sends a "CPU usage above threshold value" trap. After the appliance sends the "CPU usage above threshold value" trap, it sends a "CPU usage OK" trap when the CPU usage dips below the reset threshold.  
  Use the [*show*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-thresholdtrap)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-thresholdtrap)[*thresholdtrap*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-thresholdtrap) command to view the current settings of the CPU usage trap. Note that the CPU usage trap is disabled by default, and the trigger value is set at 100 and reset value at 0. For information about Infoblox SNMP traps, see [*Monitoring with SNMP*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance).
- DB Write Usage  
  The appliance sends and resets traps based on the configured threshold values. When the database write activity exceeds the threshold, the appliance starts to monitor the database write activity. If the DB write usage is observed to exceed the threshold five consecutive times at an interval of one minute each, the appliance sends a “Database write activity is over the threshold value” trap. When the database write activity falls below the threshold value set for reset, the appliance sends a “Database write activity is OK” trap.  
  Use the [*show*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-thresholdtrap)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-thresholdtrap)[*thresholdtrap*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-thresholdtrap) command to view the current settings of the DBWrite activity trap. By default, and the trigger value is set at `95` and reset value at `85`. For information about Infoblox SNMP traps, see [*Monitoring with SNMP*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance).

> **warning**
>
> **Note**
> 
> See the `type` parameter description in the table below for the list of event types where the `set thresholdtrap` command can be used to set trigger settings.

# Syntax

`set thresholdtrap {type} trigger {value} reset {value}`

| `Argument ` | **Description** |
| --- | --- |
| `type` | The type of threshold trap.   Valid values are: `NetworkCapacity`, `DBObjects`, `Disk`, `Memory`, `Rootfs`, `Tmpfs`, `CpuUsage`, `DBWrites`, `Reporting`, `ReportingVolume`, `FDUsage`, `SwapUsage`, `ExtStorage`, `TcpUdpFloodAlertRate`, `TcpUdpFloodDropRate`, `IPAMUtilization`, `RecursiveClients`, `RPZHitRate`, `ThreatProtectionTotalTraffic`, `ThreatProtectionDroppedTraffic`, `FastpathDroppedTraffic`, `Fastpathmbuffdepletion`  - Enter `CpuUsage` to set the trigger and reset values for CPU usage. - Enter `DBWrites` to set the trigger and reset values for the DB write activity. |
| `value (for trigger)` | The trigger value of the SNMP trap.  - When the CPU usage exceeds this value, the appliance sends a "CPU usage above threshold value" trap. - When the database wirite usage exceeds the trigger threshold for five consecutive times recorded at an interval of one minute each, the appliances sends the “Database write activity is over the threshold value“ trap. |
| `value (for reset) ` | The reset value of the SNMP trap.  - When CPU usage dips below this value, the appliance sends a "CPU usage OK" trap. - When database write usage falls below this value, the appliance sends a “Database write activity is OK.” trap.  Note: Ensure that the reset value is smaller than the trigger value. |

# Examples

## Setting the Trigger and Reset Values for the CpuUsage Trap

`Infoblox &gt; set thresholdtrap CpuUsage trigger 80 reset 71`  
`Infoblox &gt;`

When CPU usage exceeds 80% of capacity for 15 seconds, the appliance sends the “CPU usage above threshold value” trap. The appliance sends the “CPU usage OK” trap when CPU usage falls below the reset value of 71.  
Following is a sample SNMP output of this example:

`2011-09-30 04:32:20 ib-10-35-107-9.infoblox.com [UDP: [10.35.107.9]:44183-&gt;[10.35.107.9]]:`  
`DISMAN-EVENT-MIB::sysUpTimeInstance = Timeticks: (50991) 0:08:29.91`  
`SNMPv2-MIB::snmpTrapOID.0 = OID: SNMPv2-SMI::enterprises.7779.3.1.1.1.1.3.0`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.1.0 = STRING: "10.35.107.9"`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.3.0 = STRING: "cpu_usage"`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.6.0 = INTEGER: 100`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.7.0 = INTEGER: 80`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.8.0 = INTEGER: 71`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.11.0 = STRING: "CPU usage above threshold value."`  
`2011-09-30 04:33:12 ib-10-35-107-9.infoblox.com [UDP: [10.35.107.9]:44183-&gt;[10.35.107.9]]:`  
`DISMAN-EVENT-MIB::sysUpTimeInstance = Timeticks: (56202) 0:09:22.02`  
`SNMPv2-MIB::snmpTrapOID.0 = OID: SNMPv2-SMI::enterprises.7779.3.1.1.1.1.3.0`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.1.0 = STRING: "10.35.107.9"`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.3.0 = STRING: "cpu_usage"`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.6.0 = INTEGER: 5 `  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.7.0 = INTEGER: 80`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.8.0 = INTEGER: 71`  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.11.0 = STRING: "CPU usage OK."`

## Setting the Trigger and Reset Values for the DBWrites Trap

`Infoblox &gt; set thresholdtrap DBWrites trigger 56 reset 40`

When the DB Write usage exceeds the threshold value:

`2025-09-17 22:09:30 10.197.82.1 [UDP: [10.197.82.1]:51239-&gt;[10.120.22.187]]:
DISMAN-EVENT-MIB::sysUpTimeInstance = Timeticks: (5851283) 16:15:12.83  `  
`SNMPv2-MIB::snmpTrapOID.0 = OID: SNMPv2-SMI::enterprises.7779.3.1.1.1.1.3       `  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.1.0 = STRING: "10.197.82.1"      `  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.2.0 = INTEGER: 3      `  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.3.0 = STRING: "db_usage" `  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.6.0 = INTEGER: 12        `  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.7.0 = INTEGER: 5 `  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.8.0 = INTEGER: 3      `  
`SNMPv2-SMI::enterprises.7779.3.1.1.1.2.11.0 = STRING: "Database write activity is over the threshold value."`
