---
title: "VLAN Tagging"
source: "/space/nios90/1326940208"
pageId: "1326940208"
---
When your VLANs span across multiple networks, VLAN tagging is required. This enables the NIOS appliance to connect to different networks using the same port. VLAN tagging involves adding a VLAN tag or ID to the header of an IP packet so the appliance can identify the VLAN to which the packet belongs. In addition, switches use the VLAN tag to determine the port to which it should send a broadcast packet. The appliance uses the IEEE 802.1Q networking standard to support VLANs and VLAN tagging. On the appliance, you can configure VLANs as tagged networks by adding VLAN tags to them. You can create up to 10 IPv4 and IPv6 addresses per interface and configure a VLAN ID from one to 4094. You can also configure an address, gateway, and a netmask for VLAN. Any IPv4 or IPv6 address with a VLAN ID is considered as a tagged network. For HA pairs, the appliance supports only one VLAN interface for VRRP over an IPv4 or IPv6. It supports one untagged IPv4 and IPv6 address for each interface and considers this as the primary IP address for the network. For an HA pair, if you have multiple VLANs assigned to a VIP interface, then a network failure in any one of the VLAN interface does not trigger a failover of the active member.

Untagged networks are those without VLAN tags assigned to them. When you set up a VLAN as either a tagged or untagged network, ensure that you properly configure the corresponding switch for the VLAN to function properly.

> **warning**
>
> ### Note
> 
> A tagged VLAN interface receives only those packets that belongs to the tagged network, but an untagged VLAN interface receives all the packets belonging to the tagged and untagged networks of the interface.

VLANs and VLAN tagging are supported on both IPv4 and IPv6 transports on both physical and virtual Infoblox appliances. VLANs and VLAN tagging are not supported on Infoblox appliances deployed in public cloud and are not supported on Infoblox reporting appliances. Binding non-Discovery services on the VLAN interfaces of the Network Insight appliances is not supported. The following appliances require NIOS 9.0.4 or higher to support VLAN tagging: TE-815, TE-825, TE-926, ND-805 and ND-906.



Currently, only the DNS service can listen on specific VLAN interfaces. The DHCP service listens only on the primary VLAN interface (tagged or untagged). You can also specify VLANs as the source port for sending DNS queries and notify messages. For information about how to configure these, see [* Specifying Port Settings for DNS*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/specifying-port-settings-for-dns).

Additional VLAN support is available exclusively for discovery on the following Network Insight appliances: ND-906, ND-1606, ND-2306, ND-4106, ND-1405, ND-2205, ND-4005, ND-V1405, and ND-V2205. Binding other services on the VLAN interfaces of the Network Insight appliances is not supported.

> **warning**
>
> ### Note
> 
> When you join an appliance that supports VLANs to a Grid that does not support VLANs or revert the appliance to a NIOS version that does not support VLANs, the appliance will become unreachable after joining the Grid or being reverted. You must remove VLAN tagging from the corresponding switch in order to reach the downgraded appliance.

Consider the following guidelines when tagging VLANs on the LAN1 and LAN2 ports:

- You can assign VLAN addresses to an interface and add VLAN tags to them. However, you must designate one of the tagged VLANs as a primary address.
- If the primary IPv4 address is tagged with a VLAN ID, all other addresses on the same interface must be tagged with a VLAN ID as well.
- You can use the same VLAN ID to tag only one IPv4 and one IPv6 address on the same interface. You cannot use the same VLAN ID to tag multiple IPv4 and IPv6 addresses on the same interface.
- You can assign one untagged IPv4 and one untagged IPv6 address to the same interface. These addresses are designated as the primary address for the interface.
- For IPv6, you must have a primary IPv6 address (either tagged or untagged) before you can add other tagged IPv6 addresses on the same interface.
- If you have multiple VLANs assigned to the LAN1 interface and the primary VLAN is untagged, DHCP listens on all VLAN interfaces and thus DHCP lease requests will succeed for the additional VLANs assigned to the LAN1 interface, but the request will actually be handled by the primary untagged VLAN interface.
- You can set up the system to define only tagged networks:
  
  - When the VLAN tag is not set, the appliance considers the network as an untagged network.
  - You can specify a single untagged IPv4 and IPv6 network per interface.
  - The primary network can be tagged or untagged, but you must tag the additional VLANs.
- VMware ESXi does not support tagged and untagged subnets on the same interface simultaneously. As a result, VMware vSwitch cannot perform tag translation on a tagged VLAN ID if there is another untagged VLAN on the same interface.
