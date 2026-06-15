---
title: "Administrative Permissions for Common Tasks"
source: "/space/nios90/280408237"
pageId: "280408237"
---
Permissions  for Common Tasks table lists some of the common tasks admins can perform and their required permissions. [*Permission for Network Discovery*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90draft/pages/73273654/Administrative+Permissions+for+IPAM+Resources#Administrative-Permissions-for-Network-Insight-Tasks) table[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permission-for-the-grid/Administrative+Permission+for+the+Grid#bookmark513)lists tasks related to device discovery, with their required permissions.  
All the permission tables in this chapter use the following definitions:

**RW** = Read/Write permission

**RO** = Read-only permission

*Permissions* *for* *Common* *Tasks*

| **Tasks** | **All** **Grid** **Members** | **Grid** **DNS** **Properties** | **Grid** **DHCP** **Properties** | **Specific** **Grid** **Member(s)** | **Member** **DNS** **Properties** | **Member** **DHCP** **Properties** | **Restart** **Member** **DNS** | **Restart** **Member** **DHCP** | **All** **DNS** **Views** | **All** **DNS** **Zones** | **All** **Shared** **Record** **Groups** | **All** **Resource** **Records** | **All** **Network** **Views** | **All** **Networks** | **Specific** **Network(s)** | **DHCP** **Range(s)** | **Fixed** **Addresses** | **Scheduling** **Task** | **Network** **Discovery** | **Adding** **a** **blank** **A/AAAA** **record** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **For** **Grid** **and** **Members** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Restart services for the entire Grid | **RO** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Configure Grid DNS properties, configure member DNS properties, assign members to DNS objects, and restart DNS service on members |  | **RW** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Configure Grid DHCP properties, configure member DHCP properties, assign members to DHCP objects, and restart DHCP service on members |  |  | **RW** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Configure a Grid member |  |  |  | **RW** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Restart services on a Grid member |  |  |  | **RW** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Configure member DNS properties, assign member to DNS objects, and restart DNS service on member |  |  |  |  | **RW** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Configure member DHCP properties, assign member to DHCP objects, and restart DHCP service on member |  |  |  |  |  | **RW** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Restart member DNS service |  |  |  |  |  |  | **RW** |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Restart member DHCP service |  |  |  |  |  |  |  | **RW** |  |  |  |  |  |  |  |  |  |  |  |  |
| Initiate and control network discovery on all networks |  |  |  |  |  |  |  |  |  |  |  |  |  | **RW** |  |  |  |  | **RW** |  |
| Scheduling tasks for all supported objects |  |  |  |  |  |  |  |  | **RW** |  |  |  | **RW** |  |  |  |  | **RW** |  |  |
| **For** **DNS** **resources** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Create, modify, and delete DNS views |  |  |  |  |  |  |  |  | **RW** |  |  |  |  |  |  |  |  |  |  |  |
| View and search for DNS views |  |  |  |  |  |  |  |  | **RO** |  |  |  |  |  |  |  |  |  |  |  |
| Create, modify, and delete DNS zones with assigned members | **RW** |  |  |  |  |  |  |  |  | **RW** |  |  |  |  |  |  |  |  |  |  |
| View and search for DNS zones with assigned members | **RO** |  |  |  |  |  |  |  |  | **RO** |  |  |  |  |  |  |  |  |  |  |
| Create, modify, and delete all resource records | **RW** |  |  |  |  |  |  |  |  |  |  | **RW** |  |  |  |  |  |  |  |  |
| Create and modify blank A/AAAA records and shared A/AAAA records. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | **RW** |
| View and search for all resource records | **RO** |  |  |  |  |  |  |  |  |  |  | **RO** |  |  |  |  |  |  |  |  |
| Assign member to DNS objects |  |  |  |  |  |  | **RW** |  |  |  |  |  |  |  |  |  |  |  |  |  |
| **For** **DHCP**    **Resources** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Create, modify, and delete network views and their associated DNS views | **RW** |  |  |  |  |  |  |  | **RW** |  |  |  | **RW** |  |  |  |  |  |  |  |
| View network properties and statistics | **RO** |  |  |  |  |  |  |  |  |  |  |  | **RO** |  |  |  |  |  |  |  |
| Create, modify, and delete networks with assigned members |  |  |  | **RW** |  |  |  |  |  |  |  |  |  | **RW** |  |  |  |  |  |  |
| Create, modify, and delete networks without assigned members |  |  |  |  |  |  |  |  |  |  |  |  |  |  | **RW** |  |  |  |  |  |
| Create, modify, and delete DHCP ranges in a specific network with assigned members |  |  |  | **RW** |  |  |  |  |  |  |  |  |  |  | **RW** | **RW** |  |  |  |  |
| Create, modify, and delete fixed addresses in a specific network without assigned members |  |  |  |  |  |  |  |  |  |  |  |  |  |  | **RW** |  | **RW** |  |  |  |
| Assign member to DHCP objects |  |  |  |  |  |  |  | **RW** |  |  |  |  |  |  |  |  |  |  |  |  |
