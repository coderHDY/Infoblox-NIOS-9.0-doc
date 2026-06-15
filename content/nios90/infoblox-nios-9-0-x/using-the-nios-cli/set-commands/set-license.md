---
title: "set license"
source: "/space/nios90/280790001"
pageId: "280790001"
---
The `set`` ``license` command installs a license upon entering a valid license string. You must send an email request to Infoblox to receive a unique license string for your NIOS appliance. Copy the string directly from the email, and then use CTRL + V to insert it after the CLI command prompt. Use the *[show license](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-license)* command to view the license settings. This command is used to install both static (per member) and Grid-wide licenses.

> **warning**
>
> **Note**
> 
> You can install a temporary 60-day license that allows your system to be fully functional while waiting to receive your permanent license. For more information, see *[set temp_license](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-temp-license)*.

# Syntax

`set license`

This command has no arguments.

# Example

`Infoblox &gt; ``set`` ``license`  
` Enter license string: ``EQAAAAKS4n90WFGNUSirwvyUT9/z`  
` Install license? (y or n): ``y`  
` Infoblox &gt; ``set`` ``license`  
` Enter license string: ``HQAAALsakOzDKirMdaUsG2Yfk/j0BkhoFjhVfEtu36dJ`  
` Install license? (y or n): y `

`License (grid-wide) is installed.`  
` `

`The UI needs to be restarted in order to reflect this license change. `

`Restart UI now, this will log out all UI users? (y or n):y`
