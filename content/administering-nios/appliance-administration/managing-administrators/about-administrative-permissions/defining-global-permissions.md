---
title: "Defining Global Permissions"
source: "/space/nios90/1343324540"
pageId: "1343324540"
---
You can define permissions at a global level for an admin group or admin role. To define global permissions:

1. For an admin group: From the **Administration** tab, select the **Administrators** tab -> **Permissions** tab -> *admin_group* in the Groups table, and then click the Add icon -> **Global** **Permissions** from the Create New Permission area or select Add -> **Global** **Permissions** from the Toolbar.   
   or  
   For an admin role: From the **Administration** tab, select the **Administrators** tab -> **Permissions** tab -> *admin_role* in the Roles table, and then click Add icon -> **Global** **Permissions** from the Create New Permission area or select Add -> **Global** **Permissions** from the Toolbar.
2. Grid Manager displays the *Manage* *Global* *Permissions* editor. For an admin group, the appliance displays the selected admin group in the **Group** **Permission** field. For an admin role, the appliance displays the selected admin role in the **Role** **Permission** field. You can also select a different group or role from the drop-down list.
3. Select the resources that you want to configure from the **Permission** **Type** drop-down list. Depending on your selection, Grid Manager displays the corresponding resources for the selected permission type in the table.
4. Select **Read/Write**, **Read-Only**, or **Deny** for the resources you want to configure. By default, the appliance denies access to resources if you do not specifically configure them.
5. Optionally, select additional resources from the **Permission** **Type** drop-down list. Grid Manager appends the new resources to the ones that you have already configured. Define the permissions for the resources you select.
6. Save the configuration and click **Restart** if it appears at the top of the screen.

The below Global Permissions table lists global permissions you can assign to admin groups or admin roles:

*Global* *Permissions*

| **Permissions (Read/Write, Read-Only, or Deny)** |
| --- |
| Administration Permissions | All Certificate Authentication Services | For more information, see [*Administrative Permissions for Certificate Authentication Services and CA Certificates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765822). |
| All CA Certificates |
| Object Change Tracking | For more information, see [*Administrative Permissions for Object Change Tracking*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275126). |
| Cloud Permissions | All Tenants | For more information, see [*Administrative Permissions for Cloud Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408136). |
| Named ACL Permissions | Named ACL | For more information, see [*Administrative Permissions for Named ACLs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668257). |
| DHCP Permissions | Grid DHCP Properties | For more information, see [*Administrative Permissions for Common Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668257). |
|  | All Network Views | For more information, see [*Administrative Permissions for DHCP Resources*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153). |
|  | All IPV4/IPv6 Networks | For more information, see [*Administrative Permissions for IPv4 and IPv6 Networks and Shared Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153). |
|  | All Hosts | For more information, see [*Administrative Permissions for IPAM Resources*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765880)*.* |
|  | All DHCP Fingerprints | For more information, see [*Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280857269). |
|  | All DHCP MAC Filters | For more information , see [*Administrative Permissions for DHCP Resources*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153)*.* |
|  | All IPv4/IPv6 DHCP Fixed Addresses/Reservations | For more information, see [*Administrative Permissions for IPv4 or IPv6 Fixed Addresses and IPv4 Reservations*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153). |
|  | All IPv4/IPv6 Host Addresses | For more information, see [*Administrative Permissions for DHCP Resources*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153). |
|  | All IPv4/IPv6 Ranges | For more information, see [*Administrative Permissions for IPv4 and IPv6 DHCP Ranges*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153). |
|  | All IPv4/IPv6 Shared Networks | For more information, see [*Administrative Permissions for IPv4 and IPv6 Networks and Shared Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153). |
|  | All IPv4/IPv6 DHCP Templates | For more information, see [*Administrative Permissions for IPv4 or IPv6 DHCP Templates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153)[.](http://infoblox-docs.atlassian.net/wiki/spaces/nios86/pages/26774491/Administrative+Permissions+for+DHCP+Resources#AdministrativePermissionsforDHCPResources-bookmark552) |
|  | All Microsoft Superscopes | For more information, see [*Administrative Permissions for IPv4 or IPv6 DHCP Templates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153). |
|  | All Roaming Hosts | For more information, see [*Administrative Permissions for Roaming Hosts*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153). |
|  | DHCP IPv4/IPv6 Lease History | For more information, see [*Administrative Permissions for the IPv4 and IPv6 DHCP Lease Histories*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153). |
| DNS Permissions Grid | DNS Properties | For more information, see [*Administrative Permissions for Common Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408237). |
|  | All DNS Views | For more information, see [*Administrative Permissions for Common Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408237). |
|  | All DNS Zones | For more information, see [*Administrative Permissions for Common Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408237). |
|  | All Hosts | For more information, see [*Administrative Permissions for Hosts*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668320). |
|  | All IPV4/IPV6 Host Addresses | For more information, see [*Administrative Permissions for DNS Resources with Associated IP addresses in Networks and Ranges*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/414711908). |
|  | All Resource Records (A, AAAA, CAA, CNAME, DNAME, NAPTR, MX, PTR, SRV, TXT, TLSA and Bulkhost) | For more information, see [*Administrative Permissions for Common Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408237). |
|  | All Shared Record Groups |   For more information, see [*Administrative Permissions for Common Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408237)[.](http://infoblox-docs.atlassian.net/wiki/spaces/nios86/pages/26774247/Administrative+Permissions+for+DNS+Resources#AdministrativePermissionsforDNSResources-bookmark527) |
|  | All Shared Records (A, AAAA, MX, SRV and TXT) | For more information, see [*Administrative Permissions for Common Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408237). |
|  | All Rulesets (BLACK List Rulesets and NXDOMAIN Rulesets) | For more information, see [*Administrative Permissions for DHCP Resources*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153). |
|  | All DNS64 Synthesis Groups | For more information, see [*Administrative Permissions for DNS64 Synthesis Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765861). |
|  | All Response Policy Zones | For more information, see[ ](http://infoblox-docs.atlassian.net/wiki/spaces/nios86/pages/26774247/Administrative+Permissions+for+DNS+Resources)[*Administrative Permissions for Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765861)[ ](http://infoblox-docs.atlassian.net/wiki/spaces/nios86/pages/26774247/Administrative+Permissions+for+DNS+Resources#AdministrativePermissionsforDNSResources-bookmark519)and [*License Requirements and Admin Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271755). |
|  | All Response Policy Rules | For more information, see[ ](http://infoblox-docs.atlassian.net/wiki/spaces/nios86/pages/26774247/Administrative+Permissions+for+DNS+Resources)[*Administrative Permissions for Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765861)[ ](http://infoblox-docs.atlassian.net/wiki/spaces/nios86/pages/26774247/Administrative+Permissions+for+DNS+Resources#AdministrativePermissionsforDNSResources-bookmark519)and [*License Requirements and Admin Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271755). |
|  | All DTC Objects (LBDN Records, LBDNs, Pools, Servers, Monitors, Certificates, GeoIP and Topologies) | For more information, see[ ](http://infoblox-docs.atlassian.net/wiki/spaces/nios86/pages/26774247/Administrative+Permissions+for+DNS+Resources)[*Administrative Permissions for Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765861)[ ](http://infoblox-docs.atlassian.net/wiki/spaces/nios86/pages/26774247/Administrative+Permissions+for+DNS+Resources#AdministrativePermissionsforDNSResources-bookmark519)and [*License Requirements and Admin Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271755). |
|  | Adding a blank A/AAAA record | For more information, see [*Administrative Permissions for Common Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408237). |
| File Distribution Permissions | Grid File Distribution Permissions |   For more information, see [*Administrative Permissions for File Distribution Services*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668287). |
| Grid Permissions | All Members | For more information, see [*Administrative Permissions for Common Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408237). |
|  | Network Discovery | For more information, see [*Administrative Permissions for Discovery*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406370). |
|  | Schedule Tasks | For more information, see [*Administrative Permissions for Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668320). |
|  | CSV Import | For more information, see [*Administrative Permissions for Named ACLs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668257). |
|  | All Microsoft Servers | For more information, see [*Administrative Permissions for Microsoft Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668320). |
|  | All Dashboard Tasks | For more information, see [*Administrative Permissions for Dashboard Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408190). |
|  | All Kerberos keys | For more information, see [*Configuring GSS-TSIG keys*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405160). |
|  | All Active Directory Domains | For more information, see [*Managing Active Directory Sites*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403295). |
| IPAM Permissions | All Network Views | For more information, see [*Administrative Permissions for Common Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408237). |
|  | All IPv4 Networks | For more information, see [*Administrative Permissions for IPv4 and IPv6 Networks and Shared Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153). |
|  | All IPv6 Networks | For more information, see [*Administrative Permissions for IPv4 and IPv6 Networks and Shared Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153). |
|  | All Hosts | For more information, see [*Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668320)[ ](http://infoblox-docs.atlassian.net/wiki/spaces/nios86/pages/26774474/Administrative+Permission+for+the+Grid)*for* *Hosts*. |
|  | All IPv4 Host Addresses | For more information, see [*Administrative Permissions for DNS Resources with Associated IP addresses in Networks and Ranges*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/414711908). |
|  | All IPv6 Host Addresses | For more information, see [*Administrative Permissions for DNS Resources with Associated IP addresses in Networks and Ranges*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/414711908). |
|  | Port Control | For more information, see [*Administrative Permissions for Discovery*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406370). |
| SAML Permissions | SAML Authentication Services | For more information, see [*Administrative Permissions for SAML*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408104). |
| Super Host Permissions | Super Host Permissions | For more information, see [*About Administrative Permissions for Super Hosts*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280856358)*.* |
| Security Permissions | Grid Security Permissions | For more information, see [*Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280857269). |
| Reporting Permissions | Grid Reporting Permissions | For more information, see [*Administrative Permissions for Common Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408237). |
|  | Reporting Dashboard | For more information, see [*Administrative Permissions for Reporting*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275084). |
|  | Reporting Search | For more information, see [*Administrative Permissions for Reporting*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275084)*.* |
| VLAN Permissions | VLAN views, VLAN ranges, and VLAN objects | For more information, see [*Administrative Permissions for VLAN Management*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408122). |
