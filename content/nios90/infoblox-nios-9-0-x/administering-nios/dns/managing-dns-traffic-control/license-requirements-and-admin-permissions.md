---
title: "License Requirements and Admin Permissions"
source: "/space/nios90/280271755"
pageId: "280271755"
---
The DNS Traffic Control works as an add-on feature for the DNS service in the NIOS appliance. In order to use it, install the DNS and DNS Traffic Control licenses on the appliance. You can add the DNS Traffic Control license only when you have installed the DNS license. After you add the license, the feature becomes available to you in **Data** **Management**-&gt; **DNS** -&gt; **Traffic** **Control**.  
The DNS Traffic Control feature starts, stops, or restarts with the DNS service. You may need to restart the DNS service after you make configuration changes. When you click **Restart** at the top of the screen, the DNS Traffic Control service takes some time to update the configuration and the status of LBDNs, pools and servers on the appliance. For more information about how to install licenses, see [*Managing Licenses*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-0).

The appliance creates a new role, **DTC** **Admin**, when you install the DNS Traffic Control license. For more information about how to define permissions, see [*About Admin Roles*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-roles).

# License Requirements for DNS Traffic Control

- If you are using HA for DNS, Infoblox best practice recommendation is that you apply the DNS Traffic Control license on both the active and passive nodes of the HA pair. If the DNS Traffic Control license is applied only on the active node but not the passive node, the DNS query that matches with LBDN will elicit a DNS Traffic Control response. However, if the DNS Traffic Control license is applied only on the passive node and not the active node, then the DNS query will not elicit a DNS Traffic Control response. You must pass the DNS query using only the virtual IP address.
- A DNS Traffic Control license is required for the name servers in a load balanced zone. If there is no DNS Traffic Control license, then that server will not take part in DNS Traffic Control.

# Admin Permissions for DNS Traffic Control

- You can update, add, or delete LBDNs if you have read/write permission on **All DTC** **LBDNs**, but you need additional permissions to link them to a zone.
- You must have read/write permission on **All** **DTC** **LBDNs** to modify an LBDN if a configuration change results in a deletion of LBDN records.
- You must have read/write permission on both **All** **DTC** **LBDNs** and **All** **DTC** **LBDN** **Records** to modify LBDN patterns that might result in the creation of new LBDN records.
- Administrators who have access to set up zones have read/write access to their LBDN records. The LBDN records permission is similar to other zone record permissions.
- When you link an LBDN to a zone, you must have both read-only permission on **All** **DTC** **LBDNs** and read/write permission on the LBDN record of the zone.
- You must have read/write permission on **All** **DTC** **LBDNs** to disable an LBDN. This implicitly disables associated LBDN records from the associated zones and does not require an LBDN record permission.
- You must have read/write permission on **All** **Topology** **Databases** to upload a MaxMind GeoIP location database. To modify a rule in the topology ruleset, you must have read/write permission on **All** **DTC** **Topologies.**
- To create and modify DTC pools, you must have read/write permission on **All** **DTC** **Pools**.
- You must have read/write permission on **All** **DTC** **Servers** to create and modify DTC servers.
- You must have read/write permission on **All** **DTC** **Monitors**, **All** **DTC** **Certificates**, and **All** **DTC** **Topologies** to create and modify DTC monitors, certificates and topologies respectively.

For more information about defining global permissions, see [*Defining Global Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions/defining-global-permissions)*.*
