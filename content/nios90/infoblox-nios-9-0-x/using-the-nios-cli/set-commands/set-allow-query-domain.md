---
title: "set allow_query_domain"
source: "/space/nios90/280790235"
pageId: "280790235"
---
You can use the `set allow_query_domain` command to add, update, or delete an allow query domain ACL for the domain of a DNS view. The allow query domain is an ACL that allows or denies the client's request for query access to a domain. To view the list of all domains that have allow query domain ACLs, see *[show allow_query_domain](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-allow-query-domain)*. To view the list of DNS views that have allow query domain ACLs, see *[show allow_query_domain_views](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-allow-query-domain-views)*.

Note

You can set the allow query domain named ACL for the domain of a DNS view on the Grid Manager, and all the Grid members will inherit the setting. However, make sure that you do not set the allow query domain named ACL on parental control domain.

# Limitations

- The allow query domain ACL is a named ACL and the `set allow_query_domain` CLI accepts a single named ACL per domain.
- The allow query domain ACL supports BIND. It does not support Unbound and DNS Cache Acceleration. Hence, DNS Cache Acceleration caching is bypassed for domains that are listed in the allow query domain ACL.

# Syntax

`set allow_query_domain add [view-name] &lt;domain-name&gt; &lt;named-acl&gt;`

`set allow_query_domain update [view-name] &lt;domain-name&gt; &lt;named-acl&gt;`

`set allow_query_domain delete &lt;view-name&gt; [domain-name]`

| **Argument** | **Description** |
| --- | --- |
| `add` | Adds an ACL for allow query domain for the domain of a DNS view. |
| `update` | Updates an ACL for allow query domain for the domain of a DNS view. |
| `delete` | Deletes an ACL from allow query domain for the domain of a DNS view. To delete an ACL from the allow query domain, provide the view name of the domain. |
| `view-name` | View in which ACL is configured. |
| `domain-name` | Domain to which the ACL is applied. |
| `named-acl` | The named ACL defined. |

# Examples

**To add an ACL, complete the following:**

`Infoblox &gt;`` ``set allow_query_domain add default ``foo.com`` Named_ACL`

`Adding ACL 'Named_ACL' for domain '``foo.com``' under view 'default' `  
`Added successfully.`

`A DNS service restart is required in order for the configured ACLs to take effect`

**To update an ACL, complete the following:**

Infoblox &gt;`set allow_query_domain update default ``foo.com`` Named_ACL2`

`Updating ACL 'Named_ACL2' for domain '``foo.com``' under view 'default'`  
`Updated successfully.`

`A DNS service restart is required in order for the configured ACLs to take effect`

**To delete an ACL, complete the following:**

`Infoblox &gt;``set allow_query_domain delete default ``foo.com`

`Deleting ACL of domain '``foo.com``' from view 'default'`  
`Deleted successfully.`

`A DNS service restart is required in order for the configured ACLs to take effect`
