---
title: "Permissions for DNS Resources with Associated IP Addresses in Networks and Ranges"
source: "/space/nios90/280401646"
pageId: "280401646"
---
You can further control permissions for DNS resources that have associated IP addresses in a network container, network, or address range. These DNS resources include A records, AAAA records, PTR records, and DNS hosts. Permissions for these resources have been added so you now have more control over who can perform which tasks for these DNS resources without affecting permissions defined for the networks and ranges to which the resources belong. For more information about this feature, refer to the *Infoblox* *Administrator* *Guide*.  
As a superuser, you can now grant permissions to admin groups for more granular access to the following resources:

- IPv4 and IPv6 DHCP fixed addresses and IPv4 reservations in a range
- IPv4 and IPv6 host addresses in a range
- A and AAAA records in a network container, network, or range
- IPv4 and IPv6 PTR records in a network container, network, or range Following are some examples:

# Permissions for Host Address and Fixed Address in a DHCP Network:

`header-network,address*,netmask*,ADMGRP-foogroup network,10.100.0.0,255.255.0.0,"RW,HostAddress/RW,FixedAddress/DENY" `   
` header-IPv6network,address*,cidr*,ADMGRP-foogroup IPv6network,2001::,64,"RW,IPv6FixedAddress/RW,IPv6HostAddress/DENY"`

# Permissions for Host Address and Fixed Address in a DHCP Range:

`header-dhcprange,start_address*,end_address*,ADMGRP-foogroup dhcprange,10.100.20.0,10.100.20.255,"DENY,FixedAddress/RO,HostAddress/RW"`

# Permissions for A and PTR Records in a DHCP Network:

`header-network,address*,netmask*,ADMGRP-foogroup network,30.30.0.0,255.255.0.0,"RW,ARecord/RW,PtrRecord/DENY"`

> **warning**
>
> **Note**
> 
> You cannot import network containers and IPv6 ranges using CSV import.
