---
title: "Associating Networks with Zones"
source: "/space/nios90/1462370910"
pageId: "1462370910"
---
You can associate IPv4 and IPv6 networks with DNS zones to limit the zones that admins can use when they create DNS records for IP addresses in the networks. When a network is associated with one or more zones and an admin creates a DNS record for one of its IP addresses, Grid Manager allows the admin to create the DNS record in the associated zones only. For example, if you associate the 10.1.0.0/16 network with the [corpxyz.com](http://corpxyz.com) zone, admins are allowed to create DNS records in the [corpxyz.com](http://corpxyz.com) zone only for IP addresses in the 10.1.0.0/16 network; or if you associate the 2001:db8:1::/48 network with the [corp200.com](http://corp200.com) zone, admins are allowed to create DNS records in the [corp200.com](http://corp200.com) zone only for IP addresses in the 2001:db8:1::/48 network.  
This feature applies to A, AAAA and host records only. It does not apply to records in a shared record group. If you are creating a host record with multiple IP addresses in different networks, the networks must be associated with the zone of the host record.  
If a network is not associated with a zone, admins can create DNS records for its IP addresses only in zones with no network associations as well.  
You can associate a network with any authoritative zone whose primary server is a Grid member or a Microsoft server, or is unassigned. You cannot associate networks with zones that have external primary servers.  
You can associate a network with multiple zones, and associate a zone with more than one network. You can associate IPv4 and IPv6 network containers and networks with zones. When you associate a network container with zones, its networks inherit the zone associations. You can override the zone associations at the network level.  
If you split a network, the resulting subnets inherit the zone associations. If you join networks, the resulting network retains the zone associations of the network that you selected when you performed the join operation. You can override the inherited zone associations of individual networks. Subzones do not inherit the network associations of their parent zones.  
When you import data into a zone that is associated with a list of networks, the imported A, AAAA and host records must have IP addresses in the associated networks. Grid Manager does not allow you to import A, AAAA and host records with IP addresses in unassociated networks.  
When you associate a network with a zone, the DNS records created before the association are not affected. But if you edit an A, AAAA or host record after the association, Grid Manager does not allow you to save the record if its IP address is not in an associated network.  
To associate an IPv4 or IPv6 network with a zone:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* checkbox, and then click the Edit icon.
2. In the *DHCP* *Network* editor, click **Toggle** **Advanced** **Mode** if the editor is in basic mode.
3. When the additional tabs appear, click the **Advanced** subtab of the **General** tab.
4. Click the Add icon and select the zone you want to associate with the network.
   
   - Optionally, select a default zone. When you create or edit an A, AAAA or host record from a network in the **IPAM** tab, Grid Manager automatically selects the default zone that is assigned to the network.
5. Save the configuration or click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)
