---
title: "set perl_mod_access"
source: "/space/nios90/1458700398"
pageId: "1458700398"
---
The `set perl_mod_access` CLI command enables or disables access to the Perl modules (api/dist) in NIOS. This command allows you to enable or disable the downloading of Perl modules in NIOS and supported only on the active Grid Master. Note that access to the Perl modules is disabled by default.

# Syntax

`set perl_mod_access [ enable | disable ] `

| **Argument** | **Description** |
| --- | --- |
| `enable` | Enables the access to the Perl modules in NIOS. |
| `disable` | Disables the access to the Perl modules in NIOS. |

# Example

`Infoblox &gt; set perl_mod_access enable`

`The UI needs to be restarted in order to reflect these changes.`  
`Restart UI now, this will log out all UI users? (y or n):y`

`Are you sure you want to do this? (y or n): y`  
`UI restarted.`
