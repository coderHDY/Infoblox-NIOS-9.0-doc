---
title: "Limitations for Scheduling Full Upgrades"
source: "/space/nios90/380142358"
pageId: "380142358"
---
The following happens if a DHCP failover configuration exists:

- Any Microsoft server configured to manage DHCP and assigned to a Grid member, which has not been upgraded, synchronizes the DHCP configuration without any failover related data.
- You cannot assign a Microsoft server that is assigned to a Grid member, which has not been upgraded, to any Microsoft failover relationship.
- NIOS manages any DHCP scope that is identified to be part of a Microsoft failover relationship but is managed by a Grid member that has not been upgraded, in Read-only mode.
