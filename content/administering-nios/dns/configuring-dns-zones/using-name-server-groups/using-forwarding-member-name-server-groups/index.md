---
title: "Using Forwarding Member Name Server Groups"
source: "/space/nios90/1340474220"
pageId: "1340474220"
---
A forwarding member NS (Name Server) group is a collection of one or more forwarding name servers. Grouping a set of forwarding name servers together reduces the configuration efforts. When you configure a forwarding zone, you can specify a single forwarding member NS group instead of specifying multiple forwarding name servers individually. After you create a forwarding member NS group, you can assign it to a forward forward-mapping zone and a forward reverse-mapping zone.  
Note the following while adding a forwarding member NS group:

- Only superusers can add, modify, and delete a forwarding member NS group.
- You cannot add a forwarding member NS group if a NS group with the same name already exists and vice versa.
- You cannot delete a forwarding member NS group if it is assigned to a zone.

In this section:

*[children]*
