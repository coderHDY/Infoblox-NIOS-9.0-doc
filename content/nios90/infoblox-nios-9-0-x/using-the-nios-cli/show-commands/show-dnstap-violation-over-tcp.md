---
title: "show dnstap_violation_over_tcp"
source: "/space/nios90/1581252796"
pageId: "1581252796"
---
The `show dnstap_violation_over_tcp` command displays whether the logging of violations over TCP for parental control and response policy zones for subscribers through dnstap is enabled or not. For more information, see [*set dnstap_violation_over_tcp*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-dnstap-violation-over-tcp).

> **warning**
>
> **Note**
> 
> You cannot enable DNSTAP violation over TCP and DNSTAP violation over TLS at the same time either at the Grid level or at the member level.

# Syntax

`show dnstap_violation_over_tcp`

This command has no arguments.

# Example

`Infoblox &gt; show dnstap_violation_over_tcp`  
`DNSTAP violation over TCP is ON`

`Infoblox &gt; show dnstap_violation_over_tcp`  
`DNSTAP violation over TCP is OFF`
