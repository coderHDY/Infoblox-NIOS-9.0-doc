---
title: "IP Address Allocation"
source: "/space/nios90/280403836"
pageId: "280403836"
---
When a DHCP client requests an IP address, the NIOS appliance draws an address from an address range associated with the network segment for that client. Because you define that range, you can thereby control the IP address (within the defined range) and the associated TCP/IP settings that the client receives.

In the following figure Requesting Addresses – DHCPDISCOVER Messages, three hosts — each in a different subnet — request an IP address. Each one broadcasts a DHCPDISCOVER message, which includes its MAC address. When the router, which also functions as a DHCP relay agent, receives the message, it adds the IP address of the interface on which the message arrives and forwards the message to the DHCP server — or servers — previously configured on the router. When the NIOS appliance receives the message, it uses the ingress interface IP address of the router to determine the network segment to which the host belongs and associates the MAC address of the requesting host with an IP address from an address range for that network.   
  
*Requesting* *Addresses* *–* *DHCPDISCOVER* *Messages*

*[drawio]*

The NIOS appliance replies to DHCPREQUEST messages by sending DHCPOFFER messages through the relay agent to the requesting hosts, as shown in the following figure Requesting Addresses – DHCPOFFER Messages*.** *  
  
*Requesting* *Addresses* *–* *DHCPOFFER* *Messages*

*[drawio]*

The addressing scheme depicted in the figures Requesting Addresses – DHCPDISCOVER Messages and Requesting Addresses – DHCPOFFER Messages above, is fairly simple: each network has a single address range. Consequently, address assignments are fairly straightforward. However, if you have multiple address ranges in the same network and you want to assign addresses from specific address ranges to specific hosts, you must screen the address assignments through the use of filters.

> **warning**
>
> **Note**
> 
> After the DHCP server runs for a while, it assigns leases based on when it last used addresses, and not just on their positions in the range.

*Multiple* *Address* *Ranges* *without* *Filters*

*[drawio]*
