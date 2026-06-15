---
title: "Synchronizing DHCP Failover Relationships"
source: "/space/nios90/280270476"
pageId: "280270476"
---
The synchronization of DHCP data with Microsoft DHCP servers running Microsoft Windows version 2012 or later includes the synchronization of DHCP failover relationships and the associated scopes. Note that this feature does not have any impact on the synchronized data with Microsoft servers running a Windows version earlier than 2012.  
When you change the synchronization mode of a Microsoft server, it affects the way a failover relationship is synchronized and replicated, but you cannot change these settings directly. When a failover relationship synchronization mode changes from read-only to read/write, NIOS copies the DHCP configuration within the relationship between both partners, using the primary Microsoft server as the reference. When a failover relationship synchronization mode changes from read/write to read-only, NIOS does not change the DHCP configuration within the relationship on each Microsoft server.

# About Microsoft DHCP Failover Relationships

A failover relationship represents the relationship between two Microsoft DHCP servers, where each of them is called a partner. A failover relationship that has at least one Grid member as a partner is called a NIOS failover relationship and if it has at least one Microsoft server as a partner, it is defined as a Microsoft failover relationship. A failover relationship can be configured with two Microsoft servers, a Microsoft server and an external server, two Grid members, a Grid member and an external server.  
When you synchronize a failover relationship from a Microsoft server, the NIOS appliance copies the changes originating from the Microsoft server to the failover relationship of the partner, only if the two Microsoft servers match. Two failover relationships match if they have the same name, and if the address of the partner defined in one Microsoft server matches with the address of the other, and vice versa. Also, you must configure Microsoft servers to manage DHCP and enable synchronization on both the Microsoft servers.  
The changes that originate from the Microsoft server are applied to the failover relationship on NIOS, and vice versa. The changes are effective on the partner server from its next scheduled synchronization.  
The failover relationship synchronization mode for Microsoft is read/write if both partners are each Microsoft servers that are enabled for DHCP synchronization. For all other cases, the failover relationship synchronization is read only.  
When NIOS fails to match a failover relationship, the partner of that relationship is considered to be unknown or external. In the case of multiple servers, you must define the Microsoft server on the appliance using the same IP and/or FQDN.  
Infoblox recommends that you do the following for Microsoft servers in a failover relationship:

- The synchronization interval of two Microsoft servers in a failover relationship must be identical and small.
- Use the same managing member for Microsoft servers in a failover relationship.
- After a Microsoft server fails, you must turn off NIOS synchronization during restore to avoid transferring the old configuration to its partners.
- The primary and secondary Microsoft servers that you select in a failover relationship must be in the same network view. Note the following if the servers are on different network views:
  
  - You cannot modify or delete failover associations.
  - You cannot add, modify, or delete scopes that are associated with the failover association.
  - The appliance does not display the FQDN, but displays the IP address and status as 'unknown' for the secondary Microsoft server.
  - The appliance may not display the scopes that are assigned to the failover association.
  - The appliance does not allow you to perform any action on the objects in a failover association, as the objects will be in read-only mode.

# Admin Permissions for Managing Microsoft DHCP Failover Relationship

To create, modify or delete a Microsoft failover relationship in NIOS, you must have the same permissions on both the Microsoft servers that are assigned to the failover relationship.  
You can update the property of a failover relationship only if it has read/write permissions. You cannot update the properties of the Microsoft server or partner directly. You must first delete the relationship, create a new relationship and assign the DHCP scope to the new relationship. NIOS applies the changes to both Microsoft servers defined in the failover relationship during its next synchronization schedule, only if they are in read/write mode during that time. You can delete a Microsoft failover relationship only if it is not associated with a DHCP range.

# Microsoft Failover Relationships for DHCP Ranges

When you create or update a DHCP range on NIOS, administrators can assign or remove a DHCP range from a Microsoft failover relationship only if the failover relationship has two read/write Microsoft servers. Note that when you reassign a DHCP range that is assigned to a Microsoft failover relationship, NIOS removes the DHCP range from the failover relationship during the next synchronization of the respective server.   
When you remove a DHCP range from a read/write Microsoft failover relationship, NIOS deletes a copy of the DHCP range from both the Microsoft servers defined in the failover relationship. When a DHCP range is associated with a Microsoft failover relationship, any change made to one copy of the range is automatically saved to the other copy.

# Admin Permissions for Managing Failover Relationships for DHCP Ranges

You must have read/write permissions on the DHCP range and on each Microsoft server to assign or remove a DHCP range from a Microsoft failover relationship.  
Note that the changes performed on a DHCP range, which is assigned to a read/write Microsoft failover relationship, are applied to both copies of the range and synchronized with each Microsoft server during each of their next scheduled synchronization.  
You can delete a DHCP range that is assigned to a Microsoft failover relationship only if the failover relationship has two read/write Microsoft servers. When you delete a DHCP range that is assigned to a Microsoft failover relationship in read/write mode, NIOS deletes them on both Microsoft servers that is defined in the relationship during the next respective scheduled synchronization.

## Limitations of Microsoft DHCP Failover Relationship on NIOS

Note the following limitations of Microsoft DHCP failover relationship on NIOS:

1. You cannot synchronize failover scope statistics on a Microsoft DHCP failover relationship.
2. The appliance does not support on demand replication for a Microsoft DHCP failover relationship.
3. You cannot set the functional peer in the PARTNER-DOWN state for a Microsoft DHCP failover on NIOS. For information about setting a peer in the partner-down state, see [*Managing Failover Associations*](https://infoblox-docs.atlassian.net/wiki/spaces/NOIS91xDRAFT/pages/1686821422).
4. The appliance does not support time synchronization of both partners and time synchronization monitoring. Infoblox recommends that the administrators of the Microsoft servers running the DHCP server must ensure that the time synchronization is appropriate.
5. You can only add up to 31 DHCP failovers to a Microsoft server in a failover relationship.
