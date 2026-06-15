---
title: "Configuring DHCP for DDNS"
source: "/space/nios90/280762554"
pageId: "280762554"
---
Before a DHCP server can update DNS, the DHCP server needs to have an FQDN-to-IP address mapping. When a DHCP IPv4 client requests an IP address, it typically includes its host name in option 12 of the DHCPDISCOVER packet, and an IPv6 client includes its hostname in the Request packet. You can configure the NIOS appliance to include a domain name in option 15 of the IPv4 DHCPOFFER packet or in the IPv6 Reply packet. You specify this domain name in the **IPv4 DHCP Options** -> **Basic and IPv6 DHCP Options** -> **Basic** tabs of the *Grid DHCP Properties* editor, *Member DHCP Configuration* editor, and the *Network* editor. For IPv4 clients you can also specify a domain name in the *DHCP Range* and *Fixed Address* editors.

Then, you can enable the DHCP server to send DDNS updates for IPv4 and IPv6 clients, as described in Enabling DDNS for IPv4 and IPv6 DHCP Clients below. After you enable the DHCP server to send DDNS updates, you can do the following:

- Configure the DHCP server to send DDNS updates to DNS servers in the Grid. For information, see Sending Updates to DNS Servers in the Grid below.
- Configure the DHCP server to send DDNS updates to external DNS servers. For information, see [*Configuring DDNS Features*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272318).
- Configure certain DDNS features. For information, see [*Configuring DDNS Features*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272318).
- Enable support for the FQDN option for IPv4 and IPv6 clients, and configure how the DHCP server updates DNS. For information, see [*Enabling FQDN Option Support*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405256/About+the+Client+FQDN+Option#EFQDOS)*.*

> **warning**
>
> ### Note
> 
> Whether you deploy NIOS appliance in a Grid or independently, they send updates to UDP port 53. Grid members do not send updates through a VPN tunnel; however, Grid members do authenticate updates between each other using TSIG (transaction signatures) based on an internal TSIG key.
