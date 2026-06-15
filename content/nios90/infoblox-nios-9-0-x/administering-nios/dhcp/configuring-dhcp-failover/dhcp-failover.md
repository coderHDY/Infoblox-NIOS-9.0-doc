---
title: "DHCP Failover"
source: "/space/nios90/280403923"
pageId: "280403923"
---
You can create a failover association between two DHCP servers (a primary server and a secondary) and assign the failover association to serve an IPv4 DHCP range. When you set up a failover association, you greatly reduce DHCP service downtime if one of your DHCP servers is out of service. You can better manage IP address requests by making two servers available for DHCP services. You can also configure one of the servers to assume full DHCP services when you know the other server may go out of service for a period of time.

You can configure two NIOS appliances, or one appliance and one external server, to form a failover association. The pairing of a primary and secondary server is called a peer association. The failover peers establish a TCP connection for their communication. They share a pool of IP addresses that they allocate to hosts on their networks based on load balancing. Load balancing is a technique to split the address allocation workload evenly across the two DHCP servers. You can assign a DHCP failover association to serve DHCP ranges in a network. A DHCP failover association can serve DHCP ranges that belong to one network view only. It cannot serve ranges in different network views.

> **warning**
>
> **Note**
> 
> When you assign a failover association to serve DHCP ranges and networks, NIOS denies dynamic BOOTP clients by default, regardless of whether you select or deselect the **Deny** **BOOTP** **Requests** option from Grid Manager. However, if the DHCP ranges or networks are assigned to a single DHCP server (not a failover association), NIOS does not automatically deny dynamic BOOTP clients. In this case, you must manually select the **Deny** **BOOTP** **Requests** option through Grid Manager to ensure that NIOS denies BOOTP requests to avoid problems such as receiving two IP addresses for the same network device. For information about how to deny BOOTP requests, see *[Configuring IPv4 BOOTP and PXE Properties](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-ipv4-bootp-and-pxe-properties)*.



# Failover Association Operations

When a host broadcasts a DHCPDISCOVER message, it includes its MAC address. Both the primary and secondary peers receive this message. To determine which server should allocate an IP address to the host, they each extract the MAC address from the DHCPDISCOVER message and perform a hash operation. Each server then compares the result of its hash operation with the configured load balancing split. The split is set to 50% by default to ensure an even split between the two servers. When the split is 50%, the primary server allocates the IP address if the hash result is between 1 and 127, and the secondary server allocates the IP address if the hash result is between 128 and 255. As a server allocates an IP address, it updates its peer so their databases remain synchronized.

As shown in the following figure Load Balancing and IP Addresses Allocation, when a host broadcasts a DHCPDISCOVER message, both the primary and secondary servers receive the message. They perform a hash operation on the MAC address in the DHCPDISCOVER message, and the result is 250. Since the load balancing split is 50% and the hash result is 250, the secondary server responds to the host with a DHCPOFFER message. The secondary peer allocates an IP address from its assigned pool of IP addresses. It then sends a lease update message to the primary server so that the primary server knows how the address is assigned and can properly take over if the secondary server fails.   
  
*Load* *Balancing* *and* *IP* *Addresses* *Allocation*

*[drawio]*

# Related topic

[Configuring DHCP Failover](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-failover)
