---
title: "ibDHCPStatistics"
source: "/space/nios90/1430160345"
pageId: "1430160345"
---
ibDHCPStatistics maintains counters for different types of packets. The counters always start with zero when the DHCP service is restarted. Therefore, the numbers reflect the total number of packets received since the DHCP service was last restarted on the appliance. The ibDHCPStatistics module contains the following objects:

*ibDHCPStatistics *

| Object (Type) | Description |
| --- | --- |
| ibDhcpTotalNoOfDiscovers (Counter) | The number of DHCPDISCOVER messages that the appliance received. Clients broadcast DHCPDISCOVER messages when they need an IP address and network configuration information. |
| ibDhcpTotalNoOfRequests (Counter) | The number of DHCPREQUEST messages that the appliance received. A client sends a DHCPREQUEST message requesting configuration information, after it receives the DHCPOFFER message. |
| ibDhcpTotalNoOfReleases (Counter) | The number of DHCPRELEASE messages that the appliance received from its clients. A client sends a DHCP release when it terminates its lease on an IP address. |
| ibDhcpTotalNoOfOffers (Counter) | The number of DHCPOFFER messages that the appliance has sent to clients. The appliance sends a DHCPOFFER message to a client. It contains an IP address and configuration information. |
| ibDhcpTotalNoOfAcks (Counter) | The number of DHCPACK messages that the appliance sent to clients. It sends a DHCPACK message to a client to confirm that the IP address offered is still available. |
| ibDhcpTotalNoOfNacks (Counter) | The number of DHCPNACK messages that the appliance sent to clients. It sends a DHCPNACK message to withdraw its offer of an IP address. |
| ibDhcpTotalNoOfDeclines (Counter) | The number of DHCPDECLINE messages that the appliance received. A client sends a DHCPDECLINE message if it determines that an offered IP address is already in use. |
| ibDhcpTotalNoOfInforms (Counter) | The number of DHCPINFORM messages that the appliance received. A client sends a DHCPINFORM message when it has an IP address but needs information about the network. |
| ibDhcpTotalNoOfOthers (Counter) | The total number of DHCP messages other than those used in negotiation, such as DHCPFORCERENEW, DHCPKNOWN, and DHCPLEASEQUERY. |
