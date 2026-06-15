---
title: "set admin_group_acl"
source: "/space/nios90/280757423"
pageId: "280757423"
---
Use the set admin_group_acl disable command to disable ACL settings for a specific admin group. You will receive an error message when you try to disable a non-existing admin group.

# Syntax

`set admin_group_acl disable &lt;Admin Group name&gt;`

| **Argument** | ** Description** |
| --- | --- |
| `name` | Disables ACL settings for a specific admin group. |

# Examples

`Infoblox &gt; ``set`` ``admin_group_acl`` ``disable`` ``some`` ``group`  
` ACL setting for 'some group' was disabled.`  
` Infoblox &gt; ``set`` ``admin_group_acl`` ``disable`` ``nonexistinggroup`  
` Invalid name. `
