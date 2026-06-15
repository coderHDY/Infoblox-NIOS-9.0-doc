---
title: "Managing AAAA Records"
source: "/space/nios90/1422688307"
pageId: "1422688307"
---
An AAAA (quad A address) record maps a domain name to an IPv6 address. To define a specific name-to-address mapping, add an AAAA record to a previously defined authoritative forward-mapping zone. If the zone is associated with one or more networks, the IP address must belong to one of the associated networks. For example, if the AAAA record is in the [corpxyz.com](http://corpxyz.com) zone, which is associated with the 1111:0001/32 network, then the IP addresses of the A record must belong to that network. For information about associating zones and networks, see [*Associating Networks with Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-ipv4-and-ipv6-common-properties).

> **warning**
>
> ### Note
> 
> If an AAAA record with the domain name in its native characters is added to the Infoblox Grid through DDNS updates, the **Name** field displays the record name in UTF-8 encoded format. For example, an AAAA record with the domain name 工作站 .[test.com](http://test.com) added through DDNS updates displays  
> \229\183\165\228\189\156\231\171\[153.test.com](http://153.test.com) in the **Name** field.

NIOS allows superusers to add AAAA records with a blank name. Limited-access users must have read/write permission to **Adding** **a** **blank** **A/AAAA** **record** to add AAAA records with a blank name. You can assign global permission for specific admin groups and roles to allow limited-access users to add blank AAAA records. For more information, see [*Administrative Permissions for Adding Blank A or AAAA Records*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-dns-resources).
