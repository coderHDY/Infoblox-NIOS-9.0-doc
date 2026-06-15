---
title: "NAC Integration"
source: "/space/nios90/280403516"
pageId: "280403516"
---
You can configure member DHCP servers to send authentication requests to RADIUS servers and to allocate addresses based on the authentication results. This allows you to place DHCP clients into separate network segments.  
You can divide your network into different segments by configuring address ranges and applying NAC filters to them. NAC filters use authentication results from RADIUS servers as matching criteria for granting or denying address requests.  
When a DHCP client requests a lease, the member DHCP server can query a remote backend RADIUS server such as the Sophos NAC Advanced server to determine if the DHCP client is authorized to access the network. A Sophos NAC Advanced server is an access-control and compliance server that supports the RADIUS protocol.  
The RADIUS server then checks its database and provides the compliance state and user class, if configured, of the DHCP client. The member DHCP server matches the response with the configured NAC filters, and grants a lease to the appropriate network segment.

The following figure presents an example illustrating the authentication process and how a member DHCP server matches the response with NAC filters to determine whether to grant or deny a lease. In the example, there are two DHCP ranges configured, each with a NAC filter that specifies RADIUS compliance state of DHCP clients allowed in each range.

*[drawio]*

The following steps relate to the above figure.

1. A DHCP client sends a DHCPDISCOVER, DHCPREQUEST, or DHCPINFORM to the Infoblox DHCP server.
2. The DHCP server sends the RADIUS server a RADIUS Access-Request packet that includes RADIUS VSAs (Vendor Specific Attributes) with the MAC address and DHCP transaction ID of the DHCP client.
3. When the RADIUS server receives the Access-Request packet, it does the following:
   
   1. It looks up the MAC address in its database to retrieve the associated compliance state and user class.
   2. The RADIUS server sends back a RADIUS Access-Accept packet that includes RADIUS VSAs with the compliance status and user class.
4. The DHCP server receives the Access-Accept packet and tries to match the response with a NAC filter.
5. The DHCP server matches the response with the NAC filter for compliant DHCP clients and sends the DHCP client a DHCPOFFER that contains an IP address from the corresponding DHCP range. The server also provides the configuration and options associated with that range.
