---
title: "show rpz_add_soa"
source: "/space/nios90/154710649"
pageId: "154710649"
---
Use the `show rpz_add_soa &lt;view&gt;` to display the RPZ add SOA settings for the view. This command is only available on the Grid Master. For more information about changing the setting, run the [*set rpz_add_soa*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-rpz-add-soa) command.

# Syntax

`show rpz_add_soa &lt;view&gt; `

| **Argument** | **Description** |
| --- | --- |
| view | DNS view to which the RPZ zones belong. |

# Example

Infoblox&gt; `show rpz_add_soa default`

`rpz_add_soa value is yes`
