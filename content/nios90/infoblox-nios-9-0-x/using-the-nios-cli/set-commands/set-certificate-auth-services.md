---
title: "set certificate_auth_services"
source: "/space/nios90/280397840"
pageId: "280397840"
---
Use the` set certificate_auth_services disable name` command to disable a specific certificate authentication service. You will receive an error message when you try to disable a non-existing certificate authentication service.

# Syntax

`set certificate_auth_services disable name`

| **Argument ** | **Description** |
| --- | --- |
| name | Disables specified certificate authentication service. |

# Examples

`Infoblox &gt; ``set`` ``certificate_auth_services`` ``disable`` ``name`  
` Certificate authentication for 'name' was disabled. `  
`Infoblox &gt; ``set`` ``certificate_auth_services`` ``disable`` ``DoD`` ``CaC`  
` Certificate Authentication Service for 'DoD CaC' was disabled. `  
`Infoblox`` ``&gt;`` ``set`` ``certificate_auth_services`` ``disable`` ``Some`` ``Name`  
` Invalid Name.`
