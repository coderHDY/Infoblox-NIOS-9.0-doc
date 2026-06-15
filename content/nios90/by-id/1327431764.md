---
title: "Appliance Roles and Configuration, Communication Types, and Port Usage for Appliances with LAN2 Ports"
source: "/space/nios90/1327431764"
pageId: "1327431764"
---
| **Appliance Role** | **HA **   **Status** | **MGMT Port** | **LAN2 Port** | **Database **   **Synchronization** | **Core Network Services** | **Management Services** | **GUI Access** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| HA Grid Master | Active | Disabled | Enabled | VIP on HA | VIP on HA | LAN1 or LAN2 | VIP on HA |
| HA Grid Master | Passive | Disabled | Enabled | LAN1 | – | LAN1 or LAN2 | – |
| Single Grid Master | – | Disabled | Enabled | LAN1 | LAN1 and/or LAN2 | LAN1 or LAN2 | LAN1 |
| HA Grid Member | Active | Disabled | Enabled | LAN1 | VIP on HA | LAN1 or LAN2 | – |
| HA Grid Member | Passive | Disabled | Enabled | LAN1 | – | LAN1 or LAN2 | – |
| Single Grid Member | – | Disabled | Enabled | LAN1 | LAN1 and/or LAN2 | LAN1 or LAN2 | – |
| Independent HA Pair | Active | Disabled | Enabled | VIP on HA | VIP on HA | LAN1 or LAN2 | VIP on HA |
| Independent HA Pair | Passive | Disabled | Enabled | LAN1 | – | LAN1 or LAN2 | – |
| Single Independent | – | Disabled | Enabled | – | LAN1 and/or LAN2 | LAN1 or LAN2 | LAN1 |
| HA Grid Master | Active | Enabled | Enabled | VIP on HA | VIP on HA | MGMT | MGMT |
| HA Grid Master | Passive | Enabled | Enabled | LAN1 | – | MGMT | – |
| Single Grid Master | – | Enabled | Enabled | LAN1 | LAN1, LAN2    and/or MGMT | MGMT | MGMT |
| HA Grid Member | Active | Enabled | Enabled | LAN1 or MGMT | VIP on HA | MGMT | – |
| HA Grid Member | Passive | Enabled | Enabled | LAN1 or MGMT | – | MGMT | – |
| Single Grid Member | – | Enabled | Enabled | LAN1 or MGMT | LAN1, LAN2    and/or MGMT | MGMT | – |
| Independent HA Pair | Active | Enabled | Enabled | VIP on HA | VIP on HA | MGMT | MGMT |
| Independent HA Pair | Passive | Enabled | Enabled | LAN1 | – | MGMT | – |
| Single Independent | – | Enabled | Enabled | – | LAN1, LAN2    and/or MGMT | MGMT | MGMT |
| Reporting Member | – | Enabled | Enabled | LAN1 or MGMT | LAN1, LAN2,    and/or MGMT | MGMT | MGMT |

To see the service port numbers and the source and destination locations for traffic that can go to and from a NIOS appliance, see the Sources and Destinations for Services table below. This information is particularly useful for firewall administrators so that they can set policies to allow traffic to pass through the firewall as required.

> **warning**
>
> ### Note
> 
> The colors in both tables represent a particular type of traffic and correlate with each other.
