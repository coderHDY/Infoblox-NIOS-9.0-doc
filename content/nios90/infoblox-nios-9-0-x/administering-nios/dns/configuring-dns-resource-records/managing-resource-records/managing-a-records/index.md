---
title: "Managing A Records"
source: "/space/nios90/1422721060"
pageId: "1422721060"
---
An A (address) record is a DNS resource record that maps a domain name to an IPv4 address. To define a specific name-to-address mapping, you can add an A record to a previously defined authoritative forward-mapping zone. If the zone is associated with one or more networks, the IP address must belong to one of the associated networks. For example, if the A record is in the [corpxyz.com](http://corpxyz.com) zone, which is associated with 10.1.0.0/16 network, then the IP addresses of the A record must belong to the 10.1.0.0/16 network. For information about associating zones and networks, see [*Associating Networks with Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-ipv4-and-ipv6-common-properties).

The appliance also supports wildcard A records. For example, you can use a wildcard A record in the [corpxyz.com](http://corpxyz.com) domain to map queries for names such as [www1.corpxyz.com](http://www1.corpxyz.com), [ftp.corpxyz.com](http://ftp.corpxyz.com), [main.corpxyz.com](http://main.corpxyz.com), and so on to the IP address of a public-facing web server. Note that wildcard names only apply when the domain name being queried does not match any resource record.

NIOS allows superusers to add A records with a blank name. Limited-access users must have read/write permission to **Adding a blank A/AAAA record** to add A records with a blank name. You can assign global permission for specific admin groups and roles to allow limited-access users to add blank A records. For more information, see [*Administrative Permissions for Adding Blank A or AAAA Records*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-dns-resources).

> **warning**
>
> ### Note
> 
> If an A record with the domain name in its native characters is added to the Infoblox Grid through DDNS updates, the **Name** field displays the record name in UTF-8 encoded format. For example, an A record with the domain name 工作站 .test.com added through DDNS updates displays \229\183\165\228\189\156\231\171\153.test.com in the **Name** field.
