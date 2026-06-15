---
title: "set dns_update_quota"
source: "/space/nios90/280660242"
pageId: "280660242"
---
The `set dns_update_quota` command is used to set the maximum number of DNS updates that can be queued for a zone.

# Syntax

`set dns_update_quota &lt;number of updates&gt;`

| **Argument** | **Description** |
| --- | --- |
| `number of updates` | Maximum number of DNS update events queued for a zone. The number must be between `200` and `2500` (inclusive). The default value is `1024`. |

# Example

`Infoblox &gt; set dns_update_quota 1899`

`Member settings for dns_update_quota changed. DNS service restart needed for these changes to take effect.`
