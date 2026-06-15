---
title: "ibDHCPv6Statistics"
source: "/space/nios90/1430160439"
pageId: "1430160439"
---
ibDHCPv6Statistics maintains counters for different types of packets. The counters always start with zero when the DHCP service is restarted. Therefore, the numbers reflect the total number of packets received since the DHCP service was last restarted on the appliance. The ibDHCPv6Statistics module contains the following objects:

*ibDHCPv6Statistics*

| Object (Type) | Description |
| --- | --- |
| ibDhcpv6TotalNoOfSolicits (Counter) | The number of Solicit messages that the Grid member received, including Solicit messages embedded in Relay-Forward messages. A DHCP client sends a Solicit message to locate DHCP servers. |
| ibDhcpv6TotalNoOfRequests (Counter) | The number of Request messages that the Grid member received. A DHCP client sends a Request message to request one or more IP addresses and configuration parameters from a DHCP server. |
| ibDhcpv6TotalNoOfReleases (Counter) | The number of Release messages that the Grid member received. A DHCP client sends a Release message when it terminates its lease and releases its IP address. |
| ibDhcpv6TotalNoOfAdvertises (Counter) | The number of Advertise messages that the Grid member sent. When a DHCP server receives a Solicit message, it can respond with an Advertise message to indicate that the server is available for DHCP service. |
| ibDhcpv6TotalNoOfReplies (Counter) | The number of Reply messages that the Grid member sent. A DHCP server sends a Reply message that includes IP addresses and configuration parameters when it responds to Solicit, Request, Renew or Rebind message. It sends a Reply message with configuration parameters only when it responds to an Information-Request message. |
| ibDhcpv6TotalNoOfRenews (Counter) | The number of Renew messages that the Grid member received. A DHCP client sends a Renew message to a DHCP server to extend the lifetimes on the leases granted by the DHCP server and to update other properties. |
| ibDhcpv6TotalNoOfRebinds (Counter) | The number of Rebind messages that the Grid member received. A DHCP client sends a Rebind message to extend the lifetime of its lease and to update configuration parameters. |
| ibDhcpv6TotalNoOfDeclines (Counter) | The number of Decline messages that the Grid member received. A DHCP client sends a Decline message to a DHCP server when it discovers that the IP address offered by a DHCP server is already in use. |
| ibDhcpv6TotalNoOfInformationRequests (Counter) | The number of Information-Request messages that the Grid member received. A client sends an Information-Request message to retrieve configuration parameters, such as the IP addresses of DNS servers inthe network. |
| ibDhcpv6TotalNoOfOthers (Counter) | The total number of DHCP messages other than those used in negotiation. |
