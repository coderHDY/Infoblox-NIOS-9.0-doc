---
title: "set pc_domain delete"
source: "/space/nios90/280920786"
pageId: "280920786"
---
You can use the `set pc_domain delete` command to delete all category override for the specified domain. For information about the add category override command, see *[set pc_domain add](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-pc-domain-add)*.

# Syntax

`set pc_domain delete &lt;domain&gt;`

| **Argument** | **Description** |
| --- | --- |
| `domain` | The name of the domain for which the category override will delete. |

# Example

`Infoblox &gt;`` ``set pc_domain delete `` ``bbc.com`

`Successfully deleted category override for "bbc.com".`
