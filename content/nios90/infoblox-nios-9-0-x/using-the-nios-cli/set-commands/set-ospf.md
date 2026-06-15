---
title: "set ospf"
source: "/space/nios90/280658871"
pageId: "280658871"
---
The **set** **ospf** command writes statistical information to syslog. This command provides informational data that can be helpful for diagnostic purposes. The statistical information is written (dumped) to syslog. When viewing the syslog file, lines with names such as `ospf statistics` are the OSPF statistical information. Use the *[show ospf](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-ospf)* command to view the OSPF settings.  
Syslog level describes the types of messages that are sent to syslog. You can identify the syslog information by using the `level` option.

# Syntax

set ospf log {*level*}

| **Argument ** | **Description** |
| --- | --- |
| *level* | Writes OSPF statistics to syslog with a specific associated level. The supported log levels are: `debugging, informational, notifications, warnings, errors, critical, alerts,` and `emergencies.` |

# Example

`Infoblox &gt; ``set`` ``ospf`` ``log`` ``alerts`
