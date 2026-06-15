---
title: "set interface"
source: "/space/nios90/280790023"
pageId: "280790023"
---
`The ``set interface `command allows you to configure the speed and duplex settings of the network interfaces (MGMT, HA, LAN1, and LAN2) on single independent appliances only. You cannot configure the network interface settings of appliances after they join a Grid or become HA pairs.  
You can use `set interface mgmt` to enable the MGMT port and configure its IP address, netmask, and gateway address. You can configure either IPv4 address, IPv6 address or both for the MGMT interface of the appliance. Once the MGMT port is enabled, you can use the command to configure the speed and duplex settings of the MGMT port. You can also use `set interface mgmt off` to disable the MGMT port.  
Use the *[show interface](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-interface)* command to view the interface settings.

# Syntax

`
    ``set interface [lan1|ha|lan2] speed [auto|10M|100M|1000M] duplex {auto|half|full]`  
`set interface mgmt [speed [auto|10M|100M|1000M] duplex {auto|half|full]]`  
`set interface mgmt off``
  `

| **Argument** | **Description** |
| --- | --- |
| `           ``lan1`   `lan2`   `ha`` ` | Specifies the LAN1 interface.   Specifies the LAN2 interface on the Infoblox-X5 and X6 series appliances.   Specifies the HA interface. |
| `           ``speed`   `auto`   `10M \|100M \| 1000M`` ` | Specifies the speed of the incoming line rate in Mbps, or allows the appliance to automatically match the line speed. |
| `           ``duplex`   `auto`   `half`   `full`` ` | Specifies the duplex speed:  - Automatically adjusts the speed - Sets it at half speed - Set it at full speed |
| `           ``mgmt`` ` | Specifies the management interface. |
| `           ``mgmt off`` ` | Disables the management system interface.   **Note:** If this port is not being used, it should be set to off for security   reasons. |

# Examples

## Enable and configure IPv4 address for the MGMT interface

`
    ``Infoblox &gt; ``
    `` ``set interface mgmt`` `  
` ``
    ``Enable Management port? (y or n): ``
    `` ``y`` `  
` ``
    ``Enter Management IP address: ``
    `` ``10.36.1.157`` `  
` ``
    ``Enter Management netmask [Default: 255.255.255.0]: ``
    `` ``255.255.0.0`` `  
` ``
    ``Enter Management gateway address [Default: 10.36.0.1]:`  
`Configure Management IPv6 network settings? (y or n): n`  
`Restrict Support and remote console access to MGMT port? (y or n): ``
    ``n`  
` ``
  `

`
    ``Management Port Setting:`  
`Management Port Enabled: true`  
`Management IP address: 10.36.1.157`  
`Management netmask: 255.255.0.0``
  `   
`
    ``Management Gateway address: 10.36.0.1`  
`Restrict Support and remote console access to MGMT port:false`  
` ``
  `

`
    ``Is this correct? [ y or n]: ``
    ``y`  
` ``
    ``Are you sure? (y or n): ``
    ``y`  
` ``
  `

`The management port settings have been updated.`

## Enable and configure IPv6 address for the MGMT interface

`
    ``Infoblox &gt; set interface mgmt`  
`Enable Management port? (y or n): y`  
`Enter Management IP address: 2620:010A:6000:2400::6508`  
`Enter Management IPv6 Prefix Length [Default: none]: 64`  
`Enter Management IPv6 gateway address [Default: none]: 2620:010A:6000:2400::0001`  
`Configure Management IPv4 network settings? (y or n): n`  
`Restrict Support and remote console access to MGMT port? (y or n): n`  
` ``
  `

`
    ``Management IPv6 address: 2620:10a:6000:2400::6508/64`  
`Management IPv6 Gateway address: 2620:10a:6000:2400::1`  
`Restrict Support and remote console access to MGMT port: false`  
` ``
  `

`
    ``Is this correct? (y or n): y`  
`Are you sure? (y or n): y`  
` ``
  `

`
    ``The management port settings have been updated``
  `

## Specify the MGMT interface speed after the port is enabled

`
    ``Infoblox &gt; ``
    `` ``set interface mgmt speed 10M duplex full `` `  
` ``
    ``Setting Management interface speed to: 10M and duplex to: full`  
`Is this correct? [ y or n]: ``
    `` ``y`` `  
` ``
    ``The netwrok interface settings have been updated.``
  `

## Specify the LAN interface speed

`
    ``Infoblox &gt; ``
    `` ``set interface lan1 speed 10M duplex full`` `  
` ``
    ``Setting LAN1 interface speed to: 10M and duplex to: full`  
`Is this correct? [ y or n]: ``
    `` ``y`` `  
` ``
    ``The netwrok interface settings have been updated.``
  `

## Specify the HA interface speed

`
    ``Infoblox &gt; ``
    `` ``set interface ha speed 100M duplex half`` `  
` ``
    ``Setting HA interface speed to: 100M and duplex to: half`  
`Is this correct? [ y or n]: ``
    `` ``y`` `  
` ``
    ``The netwrok interface settings have been updated.``
  `

> **warning**
>
> **Note**
> 
> This command is not supported on vNIOS appliances
