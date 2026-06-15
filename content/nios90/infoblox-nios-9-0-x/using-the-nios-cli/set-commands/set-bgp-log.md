---
title: "set bgp log"
source: "/space/nios90/280397867"
pageId: "280397867"
---
The **set** **bgp** **log** command sets the verbosity level of the BGP routing services and writes statistical information to the syslog. The information in syslog can be helpful for diagnostic purposes. When viewing the syslog file, lines with names such as bgp statistics are the BGP statistical information. To view information about the BGP protocol running on the member, see* **[show bgp](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-bgp)*.

# Syntax

`set bgp log {debugging | informational | notifications | warnings | errors | critical | alerts | emergencies }`

| **Argument ** | **Description** |
| --- | --- |
| `debugging` | The verbosity level at which you select to write BGP statistics to syslog. |
| `informational` |
| `notifications` |
| `warnings` |
| `errors` |
| `critical` |
| `alerts` |
| `emergencies` |

# Example

`Infoblox &gt; ``set`` ``bgp`` ``log ``debugging`
