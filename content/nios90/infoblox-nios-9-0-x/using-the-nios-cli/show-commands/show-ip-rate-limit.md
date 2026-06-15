---
title: "show ip_rate_limit"
source: "/space/nios90/280855333"
pageId: "280855333"
---
The `show`` ``ip_rate_limit`` `command displays the current rate limiting rules. You configure rate limiting rules to limit access or block connections from external sources. The rules take effect immediately when you enable rate limiting. For information on rate limiting and on how to configure rate limiting rules, see [*set*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-ip-rate-limit)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-ip-rate-limit)[*ip_rate_limit*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-ip-rate-limit).

# Syntax

`show ip_rate_limit`

This command has no arguments.

# Example

## Viewing the current rate limiting rules

`IP rate limiting is enabled.`  
` Source            Limit               Burst`  
` ============================================ `  
`10.10.1.1        0 packets/minute     0 packets`  
`10.10.1.2        5 packets/minute     5 packets`  
`10.10.2.1/24     5 packets/minute     10 packets`  
`all              5000 packets/minute  5000 packets`
