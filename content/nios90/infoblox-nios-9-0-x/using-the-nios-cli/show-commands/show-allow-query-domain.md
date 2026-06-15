---
title: "show allow_query_domain"
source: "/space/nios90/280822542"
pageId: "280822542"
---
The `show allow_query_domain` command displays the list of all domain names in the DNS view specified or its default DNS view. For information about adding, updating, or deleting the allow query domain ACLs, see *[set allow_query_domain](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-allow-query-domain)*. To view the list of all DNS views that have the allow query domain ACLs, see *[show allow_query_domain_views](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-allow-query-domain-views)*.

# Syntax

`show allow_query_domain [view-name]`

`show allow_query_domain &lt;view-name&gt; [domain-name]`

| **Arguments** | **Description** |
| --- | --- |
| `view-name` | Displays the named ACLs configured under the view name. |
| `domain-name` | Displays the domains in which the named ACLs are configured. |

# Example

`Infoblox &gt;`` ``show allow_query_domain`  
`DNS View: default`  
`Domain Name : ``foo.com`` `  
`Named ACL : Named_ACL`

`Domain Name : abc.com `  
`Named ACL : Named_ACL2`
