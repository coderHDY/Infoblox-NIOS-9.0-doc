---
title: "set cc_mode"
source: "/space/nios90/280659053"
pageId: "280659053"
---
You can use the `set cc_mode` command to set the Common Criteria mode. To enable or disable Common Criteria configuration, connect to the CLI console, and then enter the` set cc_mode` command. When you run this command, it restarts the appliance to go through the boot time self tests. You can use this command only on the Grid Master. The setting is propagated to all Grid members. You must restart the members after the configuration change.

For the exact steps that you must perform to enable the CC mode, see the *Enabling / Disabling the CC Mode and FIPS Mode* topic in the *NIOS FIPS Compliance* documentation.

You can use the `reset all` command to clear the Common Criteria mode. For information about `reset all`, see [*reset all*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/reset-all/reset+all).

> **warning**
>
> **Note**
> 
> Factory reset must be done before using the Common Criteria mode.

# Syntax

`set cc_mode`  
This command has no arguments.

# Examples

`Infoblox &gt; set cc_mode`  
`Enable Common Criteria mode (grid-level)? (y or n): y `  
`New Common Criteria Mode Settings:`  
` Common Criteria mode enabled: Yes `  
`   is this correct? (y or n): y`  
`Please refer to the Guidance Documentation Supplement Appendix of the NIOS Administrator Guide for the requirements to operate a grid in a common criteria compliant manner.`  
`The system will be rebooted to place it into common criteria mode. `  
`                                                         `  
`WARNING: Enabling FIPS/CC mode will clear any existing join token data and disable Cloud connections.`  
`                                                         `  
`Are you sure you want to continue (y or n): y`  
`Integrity private key and certificate were generated successfully.`  
`Sign executable files by sha256sum... done `  
`All cloud based services/connections have been disabled for FIPS/CC mode.`  
`                          `  
`SYSTEM REBOOTING!`
