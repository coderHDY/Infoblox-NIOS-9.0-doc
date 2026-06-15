---
title: "Configurations Requiring Service Restart"
source: "/space/nios90/280789464"
pageId: "280789464"
---
This topic includes a list of objects that require service restart after you make configuration changes to them. For more information about restarting services, see [*Restarting Services*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/restarting-services).

| **Object** | **Service** | **Action** | **Comment** |
| --- | --- | --- | --- |
| Grid Security Properties | DNS | Update |  |
| Member Security Properties | DNS | Update |  |
| Authoritative Zone | DNS | Insert, update, delete | If the "Restart if needed" option is enabled, restart is triggered immediately. |
| DNS Traffic Control Monitor | DNS | Update | All functions |
| Network Container | DHCP | Insert, update, delete |  |
| Shared Network | DHCP | Insert, delete |  |
| Blacklist Rule | DNS | Insert, update, delete |  |
| Bulk Host | DNS | Insert, update, delete |  |
| Convert Lease | DHCP | Convert |  |
| Convert IPv6 Lease | DHCP | Convert |  |
| Grid DHCP Failover Association | DHCP | Insert, update, delete |  |
| DHCP Fingerprint Filter | DHCP | Update |  |
| Grid DHCP MAC Filter | DHCP | Update, delete |  |
| DHCP Range | DHCP | Insert, update, delete |  |
| DNS64 synthesis group | DNS | Update |  |
| NS Group and Authoritative zone | DNS | Changing list of secondaries |  |
| Grid DNS Properties | DNS | Update |  |
| Member DNS Properties | DNS | Update |  |
| RolloverKey | DNS | Rollover |  |
| DNSSEC Sign Zone | DNS | Sign |  |
| Fixed Address | DHCP | Insert, update, delete |  |
| Forward Zone | DNS | Insert, update, delete |  |
| Grid DHCP Properties | DHCP | Update |  |
| Host Name Rewrite Policy | DHCP | Insert, update |  |
| DNS Traffic Control Load Balanced Domain Name | DNS | Insert, update, delete, restore |  |
| DNS Traffic Control Pool | DNS | Update |  |
| DNS Traffic Control Server | DNS | Update |  |
| DNS Traffic Control Topology Rule | DNS | Insert, update, delete |  |
| IPv6 DHCP Range | DHCP | Insert, update, delete |  |
| IPv6 Fixed Address | DHCP | Insert, update, delete |  |
| IPv6 Network | DHCP | Insert, update, delete |  |
| IPv6 Option Space | DHCP | Update |  |
| IPv6 Shared Network | DHCP | Update |  |
| Member DHCP Properties | DHCP | Insert, update |  |
| NAC Filter | DHCP | Update, delete |  |
| Network | DHCP | Insert, update, delete |  |
| Network View | DHCP | Update, delete |  |
| NS Group | DNS | Insert, update, delete |  |
| NXDOMAIN Rule | DNS | Insert, update, delete |  |
| DHCP Range Option Filter | DHCP | Insert, update, delete |  |
| DHCP Option Space | DHCP | Update |  |
| Order DHCP Ranges | DHCP | Changing order of DHCP ranges |  |
| DHCP Relay Agent Filter | DHCP | Update, delete |  |
| Resize Network | DHCP | Resize | Accessible from the **IPAM** tab |
| Response Policy Zone | DNS | Update |  |
| Roaming Host | DHCP | Insert, update, delete |  |
| Ruleset | DNS | Update, delete |  |
| IPv4/IPv6 Shared Network | DHCP | Update |  |
| Split Network | DHCP | Split | Accessible from the **IPAM** tab |
| Join Network | DHCP | Join | Accessible from the **IPAM** tab |
| Stub Zone | DNS | Insert, update, delete |  |
| View | DNS | Insert, update, delete |  |
| Import Topology Database | DNS | Import |  |
| Named ACL | DNS | Update |  |
| Grid Properties | DNS | Update |  |
| Member Properties | DNS | Insert, update, delete |  |
| RADIUS Authentication Service | DHCP | Update |  |
| Grid Reporting Properties | DNS, DHCP | Update |  |
| Reporting Ip Block Group | DNS | Update, delete |  |
| Reporting Member Properties | DNS, DHCP | Update |  |
| Thales Luna HSM Group | DNS | Update |  |
| License | DNS | Delete | Restarts for QRD, RPZ, MSMGMT and REPORTING licenses. |
