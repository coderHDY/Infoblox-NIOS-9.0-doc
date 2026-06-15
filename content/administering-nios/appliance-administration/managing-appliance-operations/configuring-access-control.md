---
title: "Configuring Access Control"
source: "/space/nios90/280667677"
pageId: "280667677"
---
To effectively manage your core network services, you can grant legitimate hosts access to specific tasks and operations using an access control list (ACL) or anonymous access control entries (ACEs). Depending on your admin permissions, you can configure a named ACL, and then apply it to multiple operations, such as file distribution and DNS zone transfers. For information about admin permissions, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).

When you define a named ACL, you add access control types such as IPv4 and IPv6 addresses, IPv4 and IPv6 networks, nested named ACLs, and TSIG key based ACEs to a list, and then grant each entry in the list the Allow or Deny permission. For information about named ACLs and how to configure them, see [*Defining Named ACLs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667593). Note that each operation supports specific access control types. You cannot apply a named ACL to an operation that does not support the access control types contained in the named ACL. For more information about which NIOS operations support access control and which access control types each operation supports, see [*Operations that Support Access Control*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407358).

When you add or modify a named ACL, or when you import named ACLs and ACEs to an existing named ACL through CSV import, the appliance does not automatically validate the ACEs in the list. For more information about how to import named ACLs and ACEs, see [https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280397062](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280397062) . To avoid conflicts and unexpected results, you must perform validations for all named ACLs before you use them for access control. When the appliance detects a conflict or an optimized issue about a specific ACE during the validation process, it displays detailed information in a CSV file. For more information about ACL validation, see [*Validating Named ACLs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274318).

# Guidelines for IPv4/IPv6 Prefix Lengths During ACL Configuration

Ensure that you follow these guidelines pertaining to IPv4 or IPv6 prefix lengths when configuring ACLs:

- Infoblox recommends that you do not enter invalid prefix lengths (for IPv6 and IPv4 networks) for any of the ACLs that are used by the DNS service. Otherwise, the DNS service fails to start.
- Upgrade from 8.6.x to 9.0.x fails if you add invalid networks for any of the ACLs.
