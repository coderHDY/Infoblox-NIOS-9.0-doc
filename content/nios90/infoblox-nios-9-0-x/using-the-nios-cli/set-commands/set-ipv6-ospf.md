---
title: "set ipv6_ospf"
source: "/space/nios90/280822708"
pageId: "280822708"
---
The` ``set`` ``ipv6_ospf`` `command writes statistical information to syslog. This command provides informational data that can be helpful for diagnostic purposes. Setting the log level for OSPFv3 is the only configuration that can be done for the routing protocol in the NIOS CLI. The statistical information is written (dumped) to syslog. When viewing the syslog file, lines with names such as `ipv6_ospf statistics` are the OSPF statistical information. Use the *[show ipv6_ospf](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-ipv6-ospf)* command to view the OSPF settings.  
Syslog level describes the types of messages that are sent to syslog. You can identify the syslog information by using the `level` option.

# Syntax

`set ipv6_ospf log {``level``}`

| **Argument ** | **Description** |
| --- | --- |
| `level`` ` | Writes OSPF statistics to syslog with a specific associated level. The sup- ported log levels are: `debugging, informational, notifications, warnings, errors, critical, alerts,` and `emergencies.` |

# Example

`Infoblox &gt; ``set`` ``ipv6_ospf`` ``log`` ``alerts`
