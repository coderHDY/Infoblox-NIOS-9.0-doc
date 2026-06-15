---
title: "set hairpin_mode"
source: "/space/nios90/686293330"
pageId: "686293330"
---
The `set hairpin_mode` CLI command allows you to enable or disable the hairpin_mode for DNS Cache Acceleration service.

The `set hairpin_mode` CLI is used to replicate the behavior of the IB-4030 on the virtual DNS Cache Acceleration platforms. After setting the`set hairpin_mode` CLI command, cached responses in virtual DNS Cache Acceleration go out from the same interface the query arrived on and non-cached responses sent by BIND goes out of the interface using the routing tables configured in NIOS.

> **warning**
>
> Note
> 
> - You can execute the `set hairpin_mode` CLI command only if the DNS Cache Acceleration service is enabled in NIOS.
> - During a system reboot, ensure to wait until the DNS Cache Acceleration service returns to running state before executing the `set hairpin_mode` CLI command.

# Syntax

`set hairpin_mode &lt;on|off&gt;`

| **Argument** | **Description** |
| --- | --- |
| `on` | Enables the hairpin_mode. |
| `off` | Disables the hairpin_mode. |

# Example

`Infoblox &gt;`  
`Infoblox &gt; set hairpin_mode on`  
`Enabled Hairpin mode.`
