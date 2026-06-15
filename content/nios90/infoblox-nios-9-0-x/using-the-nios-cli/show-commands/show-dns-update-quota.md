---
title: "show dns_update_quota"
source: "/space/nios90/280856705"
pageId: "280856705"
---
The `show dns_update_quota` command is used to display the maximum number of DNS updates and shows the quota set for DNS updates. For more information about how to set dns update quota, see [*set dns_update_quota*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-dns-update-quota).

# Syntax

`show dns_update_quota` &lt;number of updates&gt;

| **Argument** | **Description** |
| --- | --- |
| Number of updates | Maximum number of DNS updates. The number must be between 200 and 2500 (inclusive). The default value is 1024. |

# Example

Infoblox &gt; `show dns_update_quota`

`dns_update_quota value is 1899`
