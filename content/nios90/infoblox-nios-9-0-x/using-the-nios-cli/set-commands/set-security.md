---
title: "set security"
source: "/space/nios90/280822594"
pageId: "280822594"
---
The `set`` ``security` command allows you to specify IP or network addresses that can access the appliance through the GUI. The appliance denies access to addresses that are not specified. Use the *[show security](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-security)* command to view the security settings.

# Syntax

`set security`

This command has no arguments.

# Example

In the following example, security is enabled to restrict access to the NIOS appliance (through the GUI) to the IP address range 10.1.1.1:

`Infoblox &gt; ``set`` ``security`  
` Enable security? (y or n): ``y`  
` Enter access IP range: ``10.1.1.1`  
` Enter access netmask (Default: 255.255.255.0): ``255.255.255.0`  
`      New security settings: `  
`   Security enabled: Yes`  
`      IP range: 10.1.1.1`  
`   Is this correct? (y or n): ``y`  
` Do you wish to enter additional access range? (y or n): ``n`
