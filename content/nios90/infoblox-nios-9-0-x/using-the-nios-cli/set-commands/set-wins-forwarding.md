---
title: "set wins_forwarding"
source: "/space/nios90/280266243"
pageId: "280266243"
---
Use the `set wins_fowarding` command to configure the appliance to forward WINS packets to Microsoft DNS and DHCP servers. You can enable or disable this feature for the entire Grid or override Grid-level settings for specific Grid members. To configure Grid level setting, you must execute this command on the Grid Master.  
 To view information about the current packet forwarding configuration, see [*show*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-wins-forwarding)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-wins-forwarding)[*wins_forwarding*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-wins-forwarding).

# Syntax

`set wins_forwarding grid|member`

| **Argument ** | **Description** |
| --- | --- |
| `grid` | Configures all members in the Grid to enable or disable the forwarding of WINS packets to Microsoft DNS and DHCP servers. Grid-level setting can be set only on the Grid Master. |
| `member ` | Overrides the Grid settings to enable or disable packet forwarding for a specific Grid member. |

# Examples

## Enable packet forwarding for the Grid

`Infoblox &gt; ``set`` ``wins_forwarding`` ``grid`  
` This command will change default settings for WINS packets forwarding (will affect members inheriting grid settings). Continue? (y or n): y`  
` Enable WINS packets forwarding? (y or n): y Enter default WINS server IP: 1.0.0.123 Select output interface from the list:`

*[legacy-content]*

`WINS packets forwarding is enabled. WINS packets will be forwarded to "1.0.0.123".`

## Override Grid-level packet forwarding configuration for a specific Grid member

`Infoblox &gt; ``set`` ``wins_forwarding`` ``member`  
` WINS forwarding on grid level is enabled. WINS server IP is 1.0.0.123. Override grid level settings? (y or n): y`  
` `

`Enable WINS packets forwarding on this member? (y or n): y Enter WINS server IP: 1.0.0.321`  
` Select output interface from the list:`

1. `MGMT`
2. `LAN`
3. `LAN2`
4. `VIP`

`WINS packets forwarding is enabled. WINS packets will be forwarded to "1.0.0.321".`

## Disable packet forwarding for the Grid

`Infoblox &gt; ``set`` ``wins_forwarding`` ``grid`  
` This command will change default settings for WINS packets forwarding (will affect members inheriting grid settings). Continue? (y or n): y`  
` `

`Enable WINS packets forwarding? (y or n): n `  
` `

`WINS packets forwarding was disabled on grid level.`

## Overriding Grid-level configuration and disable packet forwarding for a specific Grid member

`Infoblox &gt; ``set`` ``wins_forwarding`` ``member`  
` WINS forwarding on grid level is enabled. WINS server IP is 1.0.0.123. `  
` `

`Override grid level settings? (y or n): y`  
` Enable WINS packets forwarding on this member? (y or n): n `  
`WINS packets forwarding is disabled for this member.`

*[__confluenceADFMigrationUnsupportedContentInternalExtension__]*
