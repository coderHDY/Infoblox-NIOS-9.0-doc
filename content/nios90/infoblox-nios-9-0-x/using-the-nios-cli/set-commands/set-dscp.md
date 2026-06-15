---
title: "set dscp"
source: "/space/nios90/280790074"
pageId: "280790074"
---
Use the `set`` ``dscp` command to configure the DSCP value, which determines the PHBs (per-hope behaviors) on DiffServ compliant nodes and enables priorities of services to be assigned to network traffic. When you set the DSCP value, the appliance implements QoS (quality of service) rules based on your configuration so you can effectively classify and manage your critical network traffic. Note that on an appliance, all outgoing IP traffic on all interfaces uses the same DSCP value. You can configure this value for the Grid. You can also override the Grid setting for individual members.  
DSCP is supported on both IPv4 and IPv6 transports.

# Syntax

`set dscp grid [``value``]`  
`set dscp member [``value``]`  
`set dscp member inherit`

| **Argument** | **Description** |
| --- | --- |
| `value` | The DSCP value. You can enter a value from 0 to 63. The default is 0 and it represents the lowest priority. |



# Example

## Set the Grid DSCP value

`Infoblox &gt; ``set`` ``dscp`` ``grid`` ``32`

## Override the Grid DSCP value for a specific member

`Infoblox &gt; ``set`` ``dscp`` ``member`` ``20`

## Inherit the Grid DSCP value

`Infoblox &gt; ``set`` ``dscp`` ``member`` ``inherit`
