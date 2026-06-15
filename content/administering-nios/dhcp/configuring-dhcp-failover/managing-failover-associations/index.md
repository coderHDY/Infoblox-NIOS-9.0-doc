---
title: "Managing Failover Associations"
source: "/space/nios90/280663389"
pageId: "280663389"
---
After you establish a failover association, you can monitor its status periodically to ensure that it is functioning properly. You can also delete a failover association when it is not assigned to any DHCP range.  
See the following sections on how to manage failover associations:

*[children]*

Under special circumstances, you can manually adjust the configuration of a failover association. For example, when you know in advance that a peer will be out of service for an extended period of time, you can manually set the functional peer in a PARTNER-DOWN mode. This allows the functional partner to assume all leases and be able to allocate addresses to client requests in full capacity. In addition, when you suspect the databases in a failover association are not synchronized, you can consider doing a force recovery (after you consult with Infoblox Technical Support or your Infoblox representative) so the secondary server can completely rebuild its lease table with updates from the primary server.  
See the following sections on how to set a peer to the partner-down mode and perform a force recovery:

- Setting a Peer in the Partner-Down State
- Performing a Force Recovery
