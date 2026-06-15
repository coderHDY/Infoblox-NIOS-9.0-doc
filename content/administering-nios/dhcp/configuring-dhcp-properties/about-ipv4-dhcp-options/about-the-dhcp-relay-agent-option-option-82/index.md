---
title: "About the DHCP Relay Agent Option (Option 82)"
source: "/space/nios90/1331822666"
pageId: "1331822666"
---
A typical relationship between a DHCP client, relay agent, and the NIOS appliance on a network is as follows:

1. A DHCP client broadcasts a DHCPDISCOVER message on its network segment.
2. A DHCP relay agent on that segment receives the message and forwards it as a unicast message to one or more DHCP servers (such as NIOS appliances).
3. If the NIOS appliance accepts the address request, it responds to the relay agent with a DHCPOFFER message. If the appliance denies the request, it does not send any response in case other DHCP servers that might be involved respond instead.
4. The relay agent forwards the response to the client, usually as a broadcast message.

The situation is different for individual hosts connecting to the Internet through an ISP, usually over a circuit-switched data network.

1. A host connects to its ISP's circuit access concentration point, authenticates itself, and requests an IP address.
2. The circuit access unit relays the address request to a DHCP server, which responds with a DHCPOFFER message.

To avoid broadcasting the DHCPOFFER over the network segment on which the host made the request, the relay agent sends the response directly to the host over the established circuit.

Option 82 assists the agent in forwarding address assignments across the proper circuit. When a relay agent receives a DHCPDISCOVER message, it can add one or two agent IDs in the DHCP option 82 suboption fields to the message.  
The relay agent IDs are:

- **Circuit ID:** This identifies the circuit between the remote host and the relay agent. For example, the identifier can be the ingress interface number of the circuit access unit (perhaps concatenated with the unit ID number and slot number). The circuit ID can also be an ATM virtual circuit ID or cable data virtual circuit ID.
- **Remote ID:** This identifies the remote host. The ID can be the caller ID telephone number for a dial-up connection, a user name for logging in to the ISP, a modem ID, and so on. Because the remote ID is defined on the relay agent, which is presumed to have a trusted relationship with the DHCP server, and not on the untrusted DHCP client, the remote ID is also presumably a trusted identifier.

> **warning**
>
> ### Note
> 
> For information about the relay agent option, refer to *RFC3046,* *DHCP* *Relay* *Agent* *Information* *Option*.

In addition to the relay agent IDs, NIOS also supports the Option 82 Link Selection and Server ID Override sub-options, which allow DHCPv4 to operate in a network architecture where direct communication between the DHCP server and DHCP client is undesirable or infeasible. You can configure these sub-options to direct DHCP traffic to go through the relay agent and have more control over your DHCP communications.

The Link Selection sub-option provides a mechanism to separate the subnet/link in which the DHCP client resides from the GIADDR (Gateway IP address). The GIADDR field in a DHCP message is populated by the relay agent and is typically used to inform the DHCP server about the subnet in which the DHCP client resides and to inform the DHCP server of the IP address to use to communicate with the relay agent. In situations where the GIADDR might not be the appropriate subnet from which IP addresses should be allocated, you can use the Link Selection sub-option to explicitly set the subnet from which IP addresses are allocated to the client.

The Server ID Override sub-option allows the relay agent to tell the DHCP server what IP address, instead of the server's address, must be used in the response. Generally, the response from the server contains the IP address of the DHCP server itself in the Server-ID option. You can use the Server ID Override sub-option to specify a new value for the server ID that is inserted in the reply packet by the DHCP server. Configuring the Server ID Override sub-option allows the relay agent to have the clients send all unicast messages to the relay agent instead of the DHCP server.

> **warning**
>
> ### Note
> 
> If you want the Link Selection and Server ID Override sub-options to be included in the DHCP relayed messages, you must configure them on the DHCP relay agent. You cannot configure them on NIOS. For more information about these sub-options, refer to [https://tools.ietf.org/html/rfc3527](https://tools.ietf.org/html/rfc3527)  and [https://tools.ietf.org/html/rfc5107](https://tools.ietf.org/html/rfc5107) .

On the NIOS appliance, you can do the following with option 82:

- Screen address requests through a relay agent filter you set up using option 82. For more information, see* *[*About Relay Agent Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761466).
- Use the relay agent information (circuit ID or remote ID) as a host identifier when configuring a fixed address, though you cannot do so in a host record. For information about how to configure a circuit ID or remote ID as an identifier, see as described in [*Adding IPv4 Fixed Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095).
- Define how Grid Manager displays the relay agent ID, circuit ID, and remote ID (when applicable) in the detailed lease information panel. For information about how to configure the logging format for option 82, see Defining Logging Format for DHCP Option 82 below.
