---
title: "Enabling and Disabling Rate Limiting from External Sources"
source: "/space/nios90/1393557642"
pageId: "1393557642"
---
You can mitigate cache poisoning on your DNS server by limiting the traffic or blocking connections from UDP port 53. To enable rate limiting from sources:

1. Log in to the Infoblox CLI as a superuser account.
2. Enter the following CLI command:

`set ip_rate_limit on`

The appliance displays the following:

`Enabling rate limiting will discard packets and may degrade performance. `

`Are you sure? (y or n):`  
When you enable rate limiting, the appliance discards packets based on the configured rate limiting rules.  
This might affect the DNS performance when the appliance discards valid DNS responses.

1. Enter **y** to enable rate limiting.

When you enable rate limiting, the appliance applies the rate limiting rules that you configured. You might want to configure the rate limiting rules before enabling rate limiting. For information on how to configure rate limiting rules, see Configuring Rate Limiting Rules below.  
You can also disable rate limiting by entering the following command:

`set ip_rate_limit off`

When you disable rate limiting, the appliance stops applying the rate limiting rules.
