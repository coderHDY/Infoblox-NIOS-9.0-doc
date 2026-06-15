---
title: "show vdca_type65_support"
source: "/space/nios90/400720668"
pageId: "400720668"
---
The `show vdca_type65_support` CLI command  allows you to view the caching status of DNS type 65 responses cached at virtual DNS Cache Acceleration (vDCA).  For example: If you execute the `show vdca_type65_support` CLI command, the output is displayed as enabled or disabled. For information on how to turn on or off caching of DNS type 65 responses, see [*set vdca_type65_support*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-vdca-type65-support/set+vdca+type65+support)*.*

> **warning**
>
> **Note**
> 
> - You can execute the `show vdca_type65_support` CLI command only if the virtual DNS Cache Acceleration service is enabled in NIOS.
> - The virtual DNS Cache Acceleration caching for DNS type 65 response is enabled by default when the virtual DNS Cache Acceleration service is running.

# Syntax

`show vdca_type65_support`

This command has no arguments.

# Example

`Infoblox &gt; show vdca_type65_support`  
`Type 65 support:         Enabled`

`Infoblox &gt; show vdca_type65_support`  
`Type 65 support:        Disabled`
