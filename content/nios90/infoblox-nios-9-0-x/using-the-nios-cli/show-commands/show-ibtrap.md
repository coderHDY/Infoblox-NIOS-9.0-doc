---
title: "show ibtrap"
source: "/space/nios90/280822425"
pageId: "280822425"
---
The `show ibtrap` command displays whether SNMP traps and email notifications are enabled for the specified event category.

# Syntax

`show ibtrap [category]`

| **Argument** | **Description** |
| --- | --- |
| `category ` | Valid values are:   `Fan, Disk, Memory, CPU, MGM, HSM, Login, PowerSupply, FTP, TFTP, HTTP, NTP, DNS, DHCP, RootFS, Database,R AID, HA, MSServer, Backup, Clear, SNMP, SSH, SerialConsole, ENAT, Network, Cluster, Controld, OSPF, IFMAP, BGP, CaptivePortal, DuplicateIP, License, System, Syslog, DiscoveryConflict, ReportingVolume, DisconnectedGrid` |

# Example

`Infoblox &gt; show ibtrap Fan`  
` Trap Category: Fan snmp: true`  
` email: false`
