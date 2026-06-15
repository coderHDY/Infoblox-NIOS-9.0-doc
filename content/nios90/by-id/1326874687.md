---
title: "Appliance Roles and Configuration, Communication Types, and Port Usage"
source: "/space/nios90/1326874687"
pageId: "1326874687"
---
The following table displays the type of traffic per port for both Grid and independent deployments.

| **Appliance** **Role** | **HA** **Pair** | **HA** **Status** | **MGMT** **Port** | **Database** **Synchronization** | **Core** **Network** **Services** | **Management** **Services** | **GUI ** **Access** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| HA Grid Master | Yes | Active | Disabled | VIP on HA | VIP on HA | LAN1 | VIP on HA |
| HA Grid Master | Yes | Passive | Disabled | LAN1 | – | LAN1 | – |
| Single Grid Master | No | – | Disabled | LAN1 | LAN1 | LAN1 | LAN1 |
| HA Grid Member | Yes | Active | Disabled | LAN1 | VIP on HA | LAN1 | – |
| HA Grid Member | Yes | Passive | Disabled | LAN1 | – | LAN1 | – |
| Single Grid Member | No | – | Disabled | LAN1 | LAN1 | LAN1 | – |
| Independent HA Pair | Yes | Active | Disabled | VIP on HA | VIP on HA | LAN1 | VIP on HA |
| Independent HA Pair | Yes | Passive | Disabled | LAN1 | – | LAN1 | – |
| Single Independent | No | – | Disabled | – | LAN1 | LAN1 | LAN1 |
| HA Grid Master | Yes | Active | Enabled | VIP on HA | VIP on HA | MGMT | MGMT |
| HA Grid Master | Yes | Passive | Enabled | LAN1 | – | MGMT | – |
| Single Grid Master | No | – | Enabled | LAN1 | LAN1 or MGMT | MGMT | MGMT and LAN1/VIP |
| HA Grid Member | Yes | Active | Enabled | LAN1 or MGMT | VIP on HA | MGMT | – |
| HA Grid Member | Yes | Passive | Enabled | LAN1 or MGMT | – | MGMT | – |
| Single Grid Member | No | – | Enabled | LAN1 or MGMT | LAN1 or MGMT | MGMT | – |
| Independent HA Pair | Yes | Active | Enabled | VIP on HA | VIP on HA | MGMT | MGMT |
| Independent HA Pair | Yes | Passive | Enabled | LAN1 | – | MGMT | – |
| Single Independent | No | – | Enabled | – | LAN1 or MGMT | MGMT | MGMT |
| Reporting Member | No | – | Enabled | LAN1 or MGMT | LAN1 or MGMT | MGMT | MGMT |
