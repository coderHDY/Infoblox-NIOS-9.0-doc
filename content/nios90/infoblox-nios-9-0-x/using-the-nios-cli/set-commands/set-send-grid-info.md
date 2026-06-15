---
title: "set send_grid_info"
source: "/space/nios90/1583874131"
pageId: "1583874131"
---
The `set send_grid_info` CLI command is used to enable or disable the transmission of Grid-related information like NIOS version and Serial number to Infoblox. By default, this setting is enabled. When enabled, the system sends NIOS version and Serial number information to the Infoblox cloud service portal under the following occurrences:

- On product restart
- After upgrade
- Every 30 days

> **warning**
>
> **Note**:
> 
> This feature is exclusively accessible to superusers, can only be activated via CLI, and is executable only on the Grid Master.

# Syntax

`set send_grid_info &lt;enable | disable&gt;`

# Example

`Infoblox &gt; set send_grid_info enable`

Grid level information sharing with Infoblox : enabled.

`Infoblox &gt; set send_grid_info disable`

Grid level information sharing with Infoblox : disabled.
