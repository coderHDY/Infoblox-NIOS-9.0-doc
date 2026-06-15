---
title: "set ibtrap"
source: "/space/nios90/280757276"
pageId: "280757276"
---
The `set ibtrap` command allows you to specify whether the appliance sends SNMP notifications (traps) and email notifications to the configured trap receivers and email recipients for the specified event category.

# Syntax

`set ibtrap [category] snmp [true|false] email [true|false]`

| **Argument** | **Description** |
| --- | --- |
| category | The event category that triggers the trap and/or email notification. Valid values are: Fan, Disk, Memory, CPU, MGM, HSM, Login, PowerSupply, FTP, TFTP, HTTP, NTP, DNS, DHCP, RootFS, Database, RAID, HA, MSServer, Backup, Clear, SNMP, SSH, SerialConsole, ENAT, Network, Cluster, Controld,OSPF,OSPF6, IFMAP, BGP, CaptivePortal, DuplicateIP, License, System, Syslog, DiscoveryConflict, Reporting, FDUsage, OCSPResponders, DisconnectedGrid, LBDevice, LDAPServers, RIRSWIP |
| snmp   true \| false | Specify `true`** **to send SNMP traps. Otherwise, specify `false.` |
| email   true \| false | Specify `true`** **to send email notifications. Otherwise, specify `false.` |

# Example

`Infoblox &gt; set ibtrap FTP snmp true email true`
