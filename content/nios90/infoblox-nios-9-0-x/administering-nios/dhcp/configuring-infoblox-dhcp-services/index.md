---
title: "Configuring Infoblox DHCP Services"
source: "/space/nios90/280401287"
pageId: "280401287"
---
DHCP (Dynamic Host Configuration Protocol) is a network application protocol that automates the assignment of IP addresses and network parameters to DHCP-configured network devices (DHCP clients). When a DHCP client connects to a network, it sends a request to obtain an IP address and configuration information from the DHCP server. The DHCP server manages a pool of IP addresses and configuration information such as default gateway, domain name, and DNS server. Depending on the configuration, the DHCP server either assigns or denies an IP address to a client request. It also sends network configuration parameters to the client.  
You can configure a NIOS appliance to provide DHCP service for IPv4 and IPv6. The Infoblox DHCP server complies with a number of DHCP and DHCPv6 RFCs (see Appendix A Product Compliance). Limited-access admin groups can access certain DHCP resources only if their administrative permissions are defined. For information on setting permissions for admin groups, see *[Managing Administrators](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators)**.*

This section provides an overview of the Infoblox DHCP services for IPv4 and IPv6. It contains the following topics:

*[children]*
