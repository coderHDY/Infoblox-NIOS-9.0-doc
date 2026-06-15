---
title: "set dns_update_forwarding_quota"
source: "/space/nios90/280856732"
pageId: "280856732"
---
The `set dns_update_forwarding_quota` command is used to set the maximum number of DNS forwarding update events that can be queued for a zone.

# Syntax

`set dns_update_forwarding_quota &lt;number of forwarding updates&gt;`

| **Argument** | **Description** |
| --- | --- |
| `number of forwarding updates` | Maximum number of DNS forwarding update events queued for a zone. The number must be between `200` and `2500` (inclusive). The default value is `1024`. |

# Example

`Infoblox &gt; set dns_update_forwarding_quota 1899`

`Member settings for dns_update_forwarding_quota changed. DNS service restart needed for these changes to take effect`
