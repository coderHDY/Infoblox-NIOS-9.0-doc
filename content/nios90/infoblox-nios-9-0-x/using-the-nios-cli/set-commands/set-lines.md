---
title: "set lines"
source: "/space/nios90/280855627"
pageId: "280855627"
---
The `set`` ``lines` command specifies the number of lines that the appliance displays when you execute a `show` command during a session. The default is 20 lines. You can also configure permanent page settings or enter zero (0) to set paging off.

# Syntax

`set lines [num | permanent]`

| **Argument** | **Description** |
| --- | --- |
| `num`` ` | The number of lines the appliance displays when you execute a `show `command. |
| `permanent`` ` | Configures permanent page settings. |

# Examples

## Set the number of lines displayed on each page to 4:

`Infoblox &gt; ``set lines 4`  
`Number of scroll lines set to 4.`  
`Infoblox &gt; ``show log`  
`May 31 13:30:05 (none) syslog-ng[892]: syslog-ng version 1.6.11 starting`  
`May 31 13:30:05 (none) kernel: Linux version 2.6.17.4 (root@build-aslan) (gcc version`  
`3.2.1) #1 SMP Fri May 18 19:44:21 EDT 2013`  
`May 31 13:30:05 (none) kernel: BIOS-provided physical RAM map:`  
`May 31 13:30:05 (none) kernel: BIOS-e820: 0000000000000000 - 000000000009f800 (usable)`

`Enter &lt;return&gt; for next page or q&lt;return&gt; to go back to command line.`` `

## Turn paging off for this session:

`Infoblox &gt; ``set`` ``lines`` ``0`  
` Number of scroll lines set to 0.`

## Set a permanent line number:

`Infoblox &gt; ``set`` ``lines`` ``permanent`` ``24`  
` Number of scroll lines set to 24.`
