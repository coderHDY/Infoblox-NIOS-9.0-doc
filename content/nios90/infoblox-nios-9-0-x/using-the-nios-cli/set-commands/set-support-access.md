---
title: "set support_access"
source: "/space/nios90/280789838"
pageId: "280789838"
---
The `set`` ``support_access` command enables and disables support access. This feature is disabled (off) by default. Enabling this feature allows Infoblox Support (Tier 3 access) to perform root level diagnostics on an appliance that is in severe distress. A special key is required to access the appliance at root level, and only Infoblox Support (Tier 3) can generate this key.

---

**Note:** Once the problem has been resolved, Infoblox recommends that you turn off this port. Any open port that is not in use can become a security risk.

---

# Syntax

`set support_access`

This command has no arguments.

# Example

`Infoblox &gt; ``set`` ``support_access`  
` Enable support access (Grid level)? (y or n): ``y`  
`    New support access settings: `  
`    Support access enabled: Yes `  
`    Is this correct? (y or n): ``y`
