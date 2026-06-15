---
title: "set docker_bridge"
source: "/space/nios90/280822738"
pageId: "280822738"
---
The `set docker_bridge` command resets the IP address of the current Docker bridge to the IP address that you specify. You can view the IP address of the current Docker bridge by running the *[show docker_bridge](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-docker-bridge)* command.

# Syntax

`set docker_bridge`

This command has no arguments.

# Example

`Infoblox &gt; ``set docker_bridge`  
`Enter Bridge Gateway/CIDR: 172.17.0.1/16`  
`New Docker Bridge settings:`  
`Bridge Gateway/CIDR:   ``172.17.0.1/16`  
`Current Docker Bridge settings:`  
`Bridge Gateway/CIDR:   ``172.16.0.1/16`  
`WARNING: This operation will restart the system to reset the current docker bridge settings.`  
`Do you want to proceed? (y or n):y`  
`Docker bridge settings have been updated.`  
`System will be restarted.`

> **warning**
>
> **Note**
> 
> - The warning message to restart the system is displayed only if the **Enable Recursive Queries Forwarding to BloxOne Threat Defense Cloud** checkbox is selected.
> - Infoblox recommends that you run the `set docker_bridge` command only on non-routable IP addresses.
> - Infoblox does not recommend that you run the `set docker_bridge` command on a passive HA node
