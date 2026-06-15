---
title: "show hairpin_mode"
source: "/space/nios90/686817290"
pageId: "686817290"
---
The `show hairpin_mode` CLI command allows you to view if the hairpin_mode is enabled or disabled for DNS Cache Acceleration service. For information on how to turn on or off hairpin_mode, see [*set hairpin_mode*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-hairpin-mode).

> **warning**
>
> Note
> 
> - You can execute the `show hairpin_mode` CLI command only if the DNS Cache Acceleration service is enabled in NIOS.
> - During a system reboot, ensure to wait until the DNS Cache Acceleration service returns to running state before executing the `show hairpin_mode` CLI command.

# Syntax

`show hairpin_mode`

This command has no arguments.

# Example

`Infoblox &gt; show hairpin_mode`  
`Hairpin Mode: Enabled`  
`Infoblox &gt;`
