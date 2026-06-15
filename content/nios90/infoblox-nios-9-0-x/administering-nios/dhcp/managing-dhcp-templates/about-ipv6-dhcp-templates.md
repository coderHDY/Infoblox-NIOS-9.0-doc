---
title: "About IPv6 DHCP Templates"
source: "/space/nios90/280404095"
pageId: "280404095"
---
You can use templates to create DHCP IPv6 ranges, fixed addresses, roaming hosts, and networks. You can create the following IPv6 templates:

- A DHCP range template that specifies an offset and the total number of addresses in a range. You can add a DHCP range template to a network template. For more information, see *[About IPv6 Range Templates](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv6-range-templates)*.
- A fixed address template, containing information for creating fixed addresses and roaming hosts. You can add a fixed address template to a network template. For information, see *[About IPv6 Fixed Address Templates](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv6-fixed-address-templates)*.
- A network template, containing basic network properties for creating networks. It is also a container that holds your DHCP range templates and fixed address/reservation templates. When you create a network using a network template, the network inherits the properties of the range and fixed address/reservation templates. You can create a network in any network view using a network template. For information, see *[Adding IPv6 Network Templates](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv6-network-templates)*.

Because you can potentially add DHCP range and fixed address/reservation templates to a network template, create the DHCP range and fixed address/reservation templates before you create a network template.
