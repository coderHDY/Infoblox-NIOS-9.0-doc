---
title: "set fips_mode"
source: "/space/nios90/154707482"
pageId: "154707482"
---
You can use the `set fips_mode` command to enable the FIPS mode. When the command is run, it restarts the appliance to go through the boot time self tests.

- In a Grid, you can set the FIPS mode only on the Grid Master. The setting is propagated to all Grid members during the joining process. After the configuration is changed, the members will be restarted.
- You can set the FIPS mode on standalone systems.
- In an HA setup, you can set the FIPS mode only on the standalone Grid Master, and then configure it as a node in the HA pair. Perform the same step for the second node of the HA pair. You cannot change the FIPS mode setting on the HA Grid Master or the HA member.

For the exact steps that you must perform to enable the FIPS mode, see the *Enabling / Disabling the CC Mode and FIPS Mode* topic in the *NIOS FIPS Compliance* documentation.

To clear the FIPS mode, you can use the `reset all` command. For more information, see [*reset all*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/reset-all/reset+all).

> **warning**
>
> **Note**
> 
> You must perform a factory reset to reset the appliance to its original factory settings before using the FIPS mode.

# Syntax

`set fips_mode`  
This command has no arguments.

# Examples

`Infoblox &gt; set fips_mode`  
`Enable FIPS mode? (y or n): y`  
`New FIPS Mode Settings: `  
`  FIPS mode enabled: Yes `  
`    is this correct? (y or n): y`  
`Please refer to the Guidance Documentation Supplement Appendix of the NIOS Administrator Guide for the requirements to operate a grid in a FIPS compliant manner.`  
`The system will be rebooted to place it into FIPS mode. `  
`                                                         `  
`WARNING: Enabling FIPS/CC mode will clear any existing join token data and disable Cloud connections.`  
`                                                         `  
`Are you sure you want to continue (y or n): y`  
`Integrity private key and certificate were generated successfully.`  
`Sign executable files by sha256sum... done `  
`All cloud based services/connections have been disabled for FIPS/CC mode.`  
 `                         `  
`SYSTEM REBOOTING!`
