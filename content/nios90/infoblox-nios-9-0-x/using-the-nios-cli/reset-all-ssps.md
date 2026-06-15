---
title: "reset all ssps"
source: "/space/nios90/1580892839"
pageId: "1580892839"
---
The `reset all ssps` command zeroizes all sensitive security parameters such as cryptographic keys, shared secrets, and passwords in an appliance. Running this command on an appliance where NIOS has been upgraded, also deletes the alternate partition created during the upgrade process.

The `reset all ssps` command can be run only from the FIPS mode or CC mode. For information about enabling these modes, see [*set fips_mode*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-fips-mode) and [*set cc_mode*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-cc-mode).

# Syntax

`reset all ssps`  
This command has no arguments.

# Example

`Infoblox &gt; reset all ssps`

`ssps WILL REMOVE ALL SSPS AND WIPE THE ALT PARTITION.`

`WARNING: THIS WILL ERASE ALL DATA AND LOG FILES THAT HAVE`  
`BEEN CREATED ON THIS SYSTEM. `

`ARE YOU SURE YOU WANT TO PROCEED? (y or n): y`  
`RESETTING THE SYSTEM`
