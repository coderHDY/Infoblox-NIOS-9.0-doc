---
title: "IPv6 DHCP Protocol Overview"
source: "/space/nios90/280663905"
pageId: "280663905"
---
You can configure NIOS appliances to support DHCP for IPv6 (DHCPv6), the protocol for providing DHCP services for IPv6 networks. The DHCPv6 client-server model is similar to that of IPv4. DHCP clients and servers use a reserved, link-scoped multicast address to exchange DHCP messages. When a DHCP client needs to send messages to a DHCP server that is not attached to the same link, a DHCP relay agent can be used to relay messages between the client and server. Each IPv6 DHCP server and client has a unique DHCP unique identifier (DUID). DHCP servers use DUIDs to identify clients when providing configuration parameters, and clients use DUIDs to identify the source of the DHCP messages from servers.

As illustrated in the figure Client DHCPv6 Configuration Workflow below, a DHCP client that needs an IPv6 address sends a Solicit message to the well-known multicast address. DHCPv6 servers then send Advertise messages to the client to indicate that they are available. The client sends a Request message to a specific DHCPv6 server to request IP addresses and configuration parameters. The DHCPv6 server responds with a Reply message that contains the IP addresses and configuration parameters. You can view statistics about the IPv6 messages on the Dashboard.

*Client* *DHCPv6* *Configuration* *Workflow*

*[drawio]*

Infoblox DHCP servers also supports stateless configuration in which a DHCP client does not need IP addresses, but needs configuration information only. The DHCP client sends an Information-Request packet to obtain configuration information, and the server sends a Reply message with the requested information. For more information, refer to *RFC* *2462,* *IPv6* *Stateless* *Address* *Autoconfiguration*.

If the DHCPv6 server is expected to receive SOLICIT messages through multicast, and if the MLD firewall is active after a NIOS upgrade, it should be disabled. By default, the MLD firewall is enabled in NIOS. To disable it, enter Maintenance Mode and run the following command:

`set mld_firewall off`

Disabling the MLD firewall allows the system to respond to MLD queries and receive multicast traffic as expected. However, most of the time, the relay agent will be configured to forward DHCPv6 packets using the unicast method, in which case no changes to the MLD firewall setting are required.

For more information, refer to the Knowledge Base Article [*Problems with the IPv6 connectivity between HA pairs*](https://support.infoblox.com/s/article/Problems-with-the-IPv6-connectivity-between-HA-pairs).

# IPv6 Address Structure

An IPv6 address consists of the following:

- Global Routing Prefix — Global routing prefix is a (typically hierarchically-structured) value assigned to a site. For example, an ISP can delegate a prefix to your site, which you can then divide into subnets.
- Subnet ID — Subnet ID is an identifier of a link within the site.
- Interface ID — Interface Identifier. This portion of the address identifies the interface on the subnet. This is equivalent to the host identifier for IPv4 addresses.

*IPv6* *Address* *Structure*

*[drawio]*

When you enter an IPv6 address in Grid Manager, you can use double colons to compress a contiguous sequence of zeros. You can also omit any leading zeros in a four-hexadecimal group. For example, the complete IPv6 address 2006:0000:0000:0123:4567:89ab:0000:cdef can be shortened to 2006::123:4567:89ab:0:cdef. Note that if there are multiple noncontiguous groups of zeros, the double colon can only be used for one group to avoid ambiguity. The NIOS appliance displays an IPv6 address in its shortened form, regardless of its form when it was entered.
