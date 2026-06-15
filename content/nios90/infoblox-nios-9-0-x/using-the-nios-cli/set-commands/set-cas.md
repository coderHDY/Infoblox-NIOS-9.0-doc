---
title: "set cas"
source: "/space/nios90/1200160781"
pageId: "1200160781"
---
You can use the `set cas `command to configure the Certificate Authentication Service (CAS) mode for Grid Manager login. This command allows you to enforce or make optional the requirement for a client certificate during Grid Manager login.

## Syntax

`set cas &lt;optional|enforced&gt;`

| Argument | Description |
| --- | --- |
| `optional` | Allows users to access the Grid Manager without requiring a client certificate in their browser. |
| `enforced` | Requires users to provide a valid client certificate in their browser to access the Grid Manager. |

## Examples

`Infoblox &gt; set cas optional`  
`Parameter was not changed, no restart required.`

`Infoblox &gt; set cas enforced`  
`Restart the product in order for changes to take effect.`
