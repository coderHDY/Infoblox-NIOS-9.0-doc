---
title: "Viewing Rate Limiting Rules"
source: "/space/nios90/1393852464"
pageId: "1393852464"
---
You can view the existing rate limiting rules that limit access or block connections from UDP port 53. To view rate limiting rules:

1. Log in to the Infoblox CLI as a superuser account.
2. Enter the following CLI command:

`show ip_rate_limit`

The appliance displays the rules, as shown in the following example:

`IP rate limiting is enabled.`

`Source           Limit            Burst`  
` ============================================ `

`10.10.1.1    0 packets/minute    0 packets`

`10.10.1.2    5 packets/minute    5 packets`

`10.10.2.1/24 5 packets/minute    10 packets`

`all          5000packets/minute  5000 packets`

- Note: Copy audit to syslog feature should not alter. But increases the syslog file size.
