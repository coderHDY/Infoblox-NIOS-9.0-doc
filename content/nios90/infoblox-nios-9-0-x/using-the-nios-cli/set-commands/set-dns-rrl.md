---
title: "set dns_rrl"
source: "/space/nios90/280266408"
pageId: "280266408"
---
Use the **set** **dns_rrl** command to configure RRL (Response Rate Limiting) settings for the Grid or members. Changes made using this command are applied immediately to an active DNS resolver, although there could be replication delays for Grid Manager configuration of other members. Use the [*show dns_rrl*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-dns-rrl) to view the current RRL settings.

# Syntax

`set dns_rrl enable`  
`set dns_rrl disable`  
`set dns_rrl [member &lt;hostname&gt; | view &lt;viewname&gt;] [override|inherit]`  
`set dns_rrl [member &lt;hostname&gt; | view &lt;viewname&gt;] [enable|disable]`  
`set dns_rrl [member &lt;hostname&gt; | view &lt;viewname&gt; | grid]`

`[responses_per_second &lt;number&gt;|disable] [window &lt;number&gt;|default]`  
`[slip &lt;number&gt;|default|disable] [logging enable|disable|default]`  
`[log_only true|false|default]`

> **warning**
>
> ### Note
> 
> The set dns_rrl command accepts the member, view, and grid options only on the Grid Manager.





| **Argument** | **Description** |
| --- | --- |
| `enable ` | Enable RRL with previously configured values. |
| `disable ` | Disable RRL |
| `member &lt;hostname&gt; ` | The FQDN of the Grid member. |
| `view &lt;viewname&gt; ` | The name of the DNS view. |
| `override\|inherit ` | For a Grid member, specify whether you want to override the Grid RRL settings or inherit them from the Grid. |
| `responses_per_second &lt;number&gt; ` | The number of DNS responses per second for the RRL. Valid values are from 1 to 1000. Although the BIND default is 0, which means there is no limit or RRL is disabled, you cannot set this to 0 in NIOS. Use the “disable” argument to disable this feature. The default is 100. |
| `window &lt;number&gt;\|default ` | A rolling window of time (in seconds) within which DNS responses are tracked. Valid values are from 1 to 3600 seconds. The default is 15 seconds. |
| `slip &lt;number&gt;\|default\|disable ` | The number of UDP requests that the appliance skips before answering with a truncated response. For example, if you set the slip number to 2, the appliance responds to every other UDP request.   Valid numbers are from 0 to 10. The appliance does not “slip” if the number is set to 0. The default is 2. |
| `logging`   `enable\|disable\|default ` | Enable or disable the logging of RRL events to the “rate-limit” logging category in syslog. This is enabled by default; however, RRL events are logged to the “rate-limit” category only if RRL is enabled. Note that inheritance for logging categories applies; therefore, you must explicitly override Grid logging categories on a member for changes to the member logging setting to take effect. You cannot use the dns_rrl override command to override logging configuration for a member. Changes made to this setting require a service restart. |
| `log_only true\|false\|default ` | Set this to true to test the RRL settings without dropping any requests. Set this to false to enable RRL. The default is false. |

# Examples

## Configure the Grid RRL settings on the Grid Manager

Infoblox &gt; **set** **dns_rrl** **responses_per_second** **100** **log_only** **false** **window** **default** **slip** **2** **logging** **disable**

> **warning**
>
> ### Note
> 
> You can also execute the above command on a Grid member to change the RRL settings for that member.



## Override the Grid RRL settings on a Grid member

`Infoblox &gt; set dns_rrl corp100.com override responses_per_second 300 log_only false window 200 slip 3`

## Inherit the Grid RRL settings on a Grid member

`Infoblox &gt; set dns_rrl corp100.com inherit`
