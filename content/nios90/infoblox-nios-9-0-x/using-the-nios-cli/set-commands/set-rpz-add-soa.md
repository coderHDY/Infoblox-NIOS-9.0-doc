---
title: "set rpz_add_soa"
source: "/space/nios90/280790978"
pageId: "280790978"
---
Use the `set rpz_add_soa` `&lt;view&gt;` command to allow a local admin with superuser permission to add an SOA record to an RPZ response at a view level. This command is only available on the Grid Master.

# Syntax

`set rpz_add_soa &lt;view&gt; &lt;yes | no&gt;`

| **Argument** | **Description** |
| --- | --- |
| view | DNS view to which the RPZ zones belong. |
| yes | Adds an SOA record to the RPZ response. |
| no | Does not add an SOA record to the RPZ response. |

# Example

Infoblox&gt; `set rpz_add_soa default yes`  
`View settings for rpz_add_soa have changed. A DNS service restart is needed for the changes to take effect.`
