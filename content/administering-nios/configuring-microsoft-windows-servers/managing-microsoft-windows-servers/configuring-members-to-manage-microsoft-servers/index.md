---
title: "Configuring Members to Manage Microsoft Servers"
source: "/space/nios90/280403395"
pageId: "280403395"
---
You can manage Microsoft DNS and DHCP servers on any Grid member. To avoid performance issues, Infoblox strongly recommends that you do not configure Microsoft DNS and DHCP servers on the Grid Master and Grid Master candidate.  
When an HA pair manages Microsoft servers, the active node handles synchronization. If an HA failover occurs during a synchronization, the failing node immediately aborts the synchronization. The new active node resumes the next synchronization. Changes that occurred on the Grid since the end of the last synchronization are lost.  
For Microsoft DHCP failover, NIOS supports both the hot standby and load balancing in both Read/Write and Read-only modes on DHCP servers running Microsoft Windows 2012 and 2012 R2. For more information about Microsoft DHCP failover, refer to the Microsoft documentation.  
Complete the following tasks to configure a Grid member to manage a Microsoft server:

1. On the Microsoft server, create a user account for the Grid member. For information, see Setting Microsoft Server Credentials below.
2. On the Grid Master, configure the managing member, as described in Configuring a Managing Member below.
