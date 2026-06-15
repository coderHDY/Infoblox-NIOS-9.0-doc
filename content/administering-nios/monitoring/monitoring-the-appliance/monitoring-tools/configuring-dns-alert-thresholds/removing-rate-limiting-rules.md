---
title: "Removing Rate Limiting Rules"
source: "/space/nios90/1393557606"
pageId: "1393557606"
---
You can remove the existing rate limiting rules that limit access or block connections from UDP port 53. To remove all the existing rules:

1. Log in to the Infoblox CLI as a superuser account.
2. Enter the following CLI command:
   
   - To remove the rate limiting rule that limits traffic from all sources, enter:  
     `set ip_rate_limit remove source all`  
     or
   - To remove all of the rate limiting rules from all sources, enter:

`set ip_rate_limit remove all`

To remove one of the existing rules for an existing host:

1. Log in to the Infoblox CLI as a superuser account.
2. Enter the following CLI command:

`set ip_rate_limit remove source ip-address[/mask]`
