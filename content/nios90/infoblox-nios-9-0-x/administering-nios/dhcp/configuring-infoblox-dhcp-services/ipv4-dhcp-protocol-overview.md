---
title: "IPv4 DHCP Protocol Overview"
source: "/space/nios90/280404597"
pageId: "280404597"
---
As illustrated in the figure IP Address Allocation Process below, when a DHCP client requests an IP address, it sends a DHCPDISCOVER message to the router, which can act as a relay agent. The router forwards the message to the DHCP server. When the DHCP server receives the DHCPDISCOVER message, it determines the network segment to which the client belongs and assigns an IP address. The DHCP server then sends a DHCPOFFER message that includes the IP address and other network configuration information. When the router receives the DHCPOFFER message, it broadcasts the message to the client that sent the DHCPDISCOVER message.



*[drawio]*
