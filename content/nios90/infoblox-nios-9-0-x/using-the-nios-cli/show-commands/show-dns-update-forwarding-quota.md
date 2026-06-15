---
title: "show dns_update_forwarding_quota"
source: "/space/nios90/280267226"
pageId: "280267226"
---
The `show dns_update_forwarding_quota` command is used to display the maximum number of DNS update events that can be forwarded. For more information about how to set dns update forwarding quota, see [*set dns_update_forwarding_quota*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-dns-update-forwarding-quota).

# Syntax

`show dns_update_forwarding_quota `&lt;number of forwarding updates&gt;

| **Argument** | **Description** |
| --- | --- |
| Number of forwarding updates | Maximum number of DNS updates that can be forwarded. The number must be between 200 and 2500 (inclusive). The default value is 1024. |

# Example

Infoblox &gt; `show dns_update_forwarding_quota`

`dns_update_forwarding_quota value is 1989`
