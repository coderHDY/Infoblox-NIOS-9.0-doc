---
title: "set gmc_promotion"
source: "/space/nios90/317424916"
pageId: "317424916"
---
Use the `set gmc_promotion disable` command to disable the **Activate GMC Group Promotion Schedule **option. Note that, this command can be executed on Grid Master and Grid Master Candidate.  
Use the `set gmc_promotion forced_end` command while Grid Master Candidate promotion is in progress, to unset the master promotion status. Note that, this command can be executed only on master Node.

# Syntax

`set gmc_promotion &lt;disable`&gt;&lt;`forced_end`&gt;

| **Argument** | **Description** |
| --- | --- |
| `disable` | Disables the **Activate GMC Group Promotion Schedule **option. |
| `forced_end` | Resets the Grid Master Candidate promotion flag to reconfigure Grid Master Candidate group promotion. |

# Examples

## Disabling the Grid Master Candidate group promotion

```
Infoblox > set gmc_promotion disable
Feature is disabled.
```

## Resetting the flag to reconfigure Grid Master Candidate group promotion

```
Infoblox > set gmc_promotion forced_end
This command will not end GMC promotions but just resetting the flag for end-users to reconfigure GMC-promotion again.
This command can be executed only on Master node.
```
