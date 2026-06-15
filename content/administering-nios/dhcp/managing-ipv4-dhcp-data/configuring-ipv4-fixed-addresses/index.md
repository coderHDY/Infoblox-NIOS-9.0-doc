---
title: "Configuring IPv4 Fixed Addresses"
source: "/space/nios90/280271095"
pageId: "280271095"
---
A fixed address represents a persistent link between an IP address and one of the following:

- MAC address
- Client identifier
- Circuit ID or remote ID in the DHCP relay agent option (option 82)

You can create fixed addresses as described in Adding IPv4 Fixed Addresses below or from the Tasks Dashboard. For information about the Tasks Dashboard, see [*The Tasks Dashboard*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280759015). You can also create a fixed address when you create a host record or when you convert an active, dynamically leased address to a fixed address. For more information, see [*Adding Host Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779) and [*Converting DHCP Leases*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1420198741).  
When you create a fixed address, you must define a host identifier that the DHCP server uses to match the DHCP client. Every time the DHCP client with the matching identifier requests an IP address, the DHCP server assigns it the same address.  
When a DHCP client sends a DHCPDISCOVER, it can include the MAC address or a unique client identifier as option 61 in the DHCP section of the packet. Using a client identifier is especially useful for virtualized server processes that might be moved to different hardware platforms. For information about option 61, refer to *RFC2132,* *DHCP* *Options* *and* *BOOTP* *Vendor* *Extensions*. You can select either the MAC address or client identifier as the host identifier in a fixed address. The DHCP server matches the option 61 value in the client request using either the MAC address or client identifier, depending on your configuration. When a DHCP client renews an IP address using a matching MAC address or client identifier, the DHCP server tracks the allocation of IP addresses and reserves the same IP address for the client.  
When you enter a MAC address, you can use one of the following formats:

- aa:bb:cc:dd:ee:ff — Six groups of two hexadecimal digits separated by colons (:)
- aa-bb-cc-dd-ee-ff — Six groups of two hexadecimal digits separated by hyphens (-)
- aabb.ccdd.eeff — Three groups of four hexadecimal digits separated by periods (.)
- aabbcc-ddeeff — Two groups of six hexadecimal digits separated by a hyphen (-)
- aabbccddeeff — One group of 12 hexadecimal digits without any separator

After you save the entry, the appliance displays the MAC address in the AA:BB:CC:DD:EE:FF format.  
When a DHCP client requests an IP address through a DHCP relay agent, the agent adds either the circuit ID or remote ID or both, to the DHCP relay agent information option (option 82). For information, see [*About the DHCP Relay Agent Option (Option 82)*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1331822666). When you select the DHCP relay agent option (circuit ID or remote ID) as the host identifier in a fixed address, the DHCP server matches the DHCP client request using either the circuit ID or the remote ID, depending on your configuration. When a DHCP client renews an IP address using a matching relay agent ID, the DHCP server tracks the allocation of IP addresses and reserves the same IP address for the client. Note that leases are not renewed at the standard renewal time (T1) when option 82 information is not available as a unicast renewal. Instead, leases are renewed at the rebinding time (T2) when renewals are sent as broadcasts to the relay agents and contain option 82 information. For information about how to configure the lease time, see [*Configuring General IPv4 DHCP Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663815).

In this section:

*[children]*
