---
title: "Deleting and Restoring a DHCP Range/Scope"
source: "/space/nios90/1467056365"
pageId: "1467056365"
---
When you delete a DHCP range, Grid Manager moves it and its exclusion range and fixed addresses to the Recycle Bin, and permanently deletes its leases. At the next synchronization, the member deletes the scope, its exclusion range and reservations from the Microsoft server. If you restore a DHCP range on Grid Manager, then the Grid member adds its corresponding scope, exclusion range and reservations to the Microsoft server at the next synchronization. For information about deleting DHCP ranges, see [*Deleting IPv4 Address Ranges*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663590). For information about restoring data, see [*Using the Recycle Bin*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588).  
If you delete a scope that is part of a split-scope, Grid Manager automatically removes the split-scope flag from the remaining scope.
