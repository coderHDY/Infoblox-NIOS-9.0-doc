---
title: "Assigning Multiple IP Addresses to a Host"
source: "/space/nios90/1346013837"
pageId: "1346013837"
---
You can assign multiple IPv4 and IPv6 addresses to a host depending on the function of the device. For example, you can create a host record for a router that supports three network interfaces in two different networks, and assign IP addresses to each interface, as illustrated in the figure *Assigning Multiple IP Addresses to one Host Record* below. When the DNS server responds to DNS queries for the host, it includes an A or AAAA record for each IP address.  
In addition, if the IP addresses belong to different networks, they can have different DHCP configurations and options. As shown in the figure Assigning Multiple IP Addresses to one Host Record below, the configuration information and DHCP options of the interface with the IPv6 address 2001:db8:1::2 may be different from the other two interfaces, 10.31.209.5 and 10.31.209.7, because it is in a different network.

Note that only the first IP address that you assign to a host record can be assigned with or without a MAC address. For each additional IP address that you assign, you must specify a MAC address even if the DHCP option is not enabled.

*Assigning* *Multiple* *IP* *Addresses* *to* *one* *Host* *Record*

*[drawio]*
