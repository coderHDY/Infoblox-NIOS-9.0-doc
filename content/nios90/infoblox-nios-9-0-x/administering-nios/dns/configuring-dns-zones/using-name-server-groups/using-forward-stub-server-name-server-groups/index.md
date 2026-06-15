---
title: "Using Forward/Stub Server Name Server Groups"
source: "/space/nios90/1340474275"
pageId: "1340474275"
---
A forward/stub server NS (Name Server) group is a collection of one or more external name servers. Grouping a set of external name servers together to a forward/stub server NS group reduces the configuration efforts. You can assign a single forward/stub server NS group as default forwarders for a forward zone or as primary servers for a stub zone instead of specifying multiple name servers individually.  
Note the following while adding a forward/stub server NS group:

- Only super-users can add, modify, and delete a forward/stub server NS group.
- You cannot add a forward/stub server NS group if a NS group with the same name already exists and vice versa.
- You cannot delete a forward/stub server NS group if it is assigned to a zone.

In this section:

*[children]*
