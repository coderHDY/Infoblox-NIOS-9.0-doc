---
title: "show capacity"
source: "/space/nios90/280920624"
pageId: "280920624"
---
The `show`` ``capacity` command displays database capacity limits for your NIOS appliance. This allows you to see the object counts and types on a member. This command is useful to see the amount of data is assigned to a member and how that relates to the member's specified capacity.

# Syntax

`show capacity`

This command has no arguments.

# Example

`Infoblox &gt; ``show`` ``capacity`  
`Hardware Type = IB-4106`  
`Database Capacity = 10000000 "objects"`  
`Objects Present = 7207 (0 percent used)`  
`    Count Area         Type`  
`      515 TP           threat_rule`  
`      296 TP           threat_rule_config`  
`      809 TP           threat_rule_param_def`  
`      783 TP           threat_rule_param_value`  
`      469 dhcp         dhcp_fingerprint`  
`     2448 dhcp         dhcp_option_fingerprint`  
`      116 dhcp         option_definition`  
`      255 grid         ib_trap_settings`` `
