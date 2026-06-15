---
title: "About Host Records"
source: "/space/nios90/280666779"
pageId: "280666779"
---
Host records provide a unique approach to the management of DNS, DHCP, and IPAM data. By using host records, you can manage multiple DNS records and DHCP and IPAM data collectively, as one object on the appliance.  
When you create a host record, you are specifying the name-to-address and address-to-name mappings for the IP address that you assign to the host. The Infoblox DNS server then uses this data to respond to DNS queries for the host. When the server receives a name-to-address query, it responds with an A record for an IPv4 host or an AAAA record for an IPv6 host that contains the data from the host record. Likewise, when it receives an address-to-name query for the host, the appliance responds with a PTR record that contains data from the host record.

> **warning**
>
> ### Note
> 
> The appliance cannot respond if there is no PTR record and a PTR record is not created if there is no corresponding reverse-mapping zone.

Additionally, if you specify an alias in the host record, the appliance uses this data as a CNAME record to respond to queries with the alias. It maps the alias to the canonical name and sends back a response with the canonical name and IP address of the host. Thus, a single host record is equivalent to creating A, PTR, and CNAME resource records for an IPv4 address and AAAA and PTR records for an IPv6 address. The appliance supports IDNs for a host record. You can specify alias and domain names in the native character set. For information about IDN support, see .  
Hosts also support prefix delegation for IPv6. For example, you can specify an IPv6 prefix in the host record of a router. The router then advertises this prefix on one of its interfaces, so hosts that connect to the interface can generate their IP addresses, using the stateless autoconfiguration mechanism defined in *RFC* *2462,* *IPv6* *Stateless* *Autoconfiguration*.  
In addition, if the Infoblox DHCP server manages the IP address assigned to the host, the server uses it as a fixed address record as well. The DHCP server assigns the IP address to the host when it receives a DHCP request with the matching MAC address or DUID. Its response includes configuration information, and any DHCP options defined for the host or inherited from the network to which the fixed address belongs. You can also assign multiple IPv4 and IPv6 addresses to a host, as described in Assigning Multiple IP Addresses to a Host below.  
You can copy an existing host record and turn it into a new one. When you copy a host record, other than the new host name and IP address, all DHCP and IPAM configuration including the MAC address and extensible attributes apply to the new record. You can also modify information, except for the host name and IP address, of an existing host record. For information about how to copy or modify a host record, see Copying and Modifying Host Records below. Note that you can also modify an IPv4 host record and turn it into a IPv4 reservation. For information, see [*Configuring IPv4 Reservations*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404203).  
You can execute immediate discovery on a host record. This simple setting enables you to determine the precise type of device that is associated with the host, along with its IP addresses, its name and other information.  
You can define extensible attributes for a host record to further describe the device. You can include information such as its location and owner for IP address management purposes. For information about extensible attributes, see [*About Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).  
The below figure illustrates how the appliance uses the host record for both DHCP and DNS.   
  
*Using* *the* *Host* *Record* *for* *DHCP* *and* *DNS*

*[drawio]*

Note that If the zone of the host record is associated with networks, the IP addresses must belong to the associated networks. For example, if the host record is in the [corpxyz.com](http://corpxyz.com) zone, which is associated with 10.1.0.0/16 network, then the IP addresses of the host record must belong to the 10.1.0.0/16 network. For information about associating zones and networks, see [*Associating Networks with Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761881).

*[children]*
