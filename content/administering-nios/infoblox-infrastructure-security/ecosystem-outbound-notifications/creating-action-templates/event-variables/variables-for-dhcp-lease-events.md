---
title: "Variables for DHCP Lease Events"
source: "/space/nios90/1375143322"
pageId: "1375143322"
---
When searching for DHCP lease events with associated discovered data, both the "address" and "hardware" or "duid" must match the discovered data. If there is no hardware or DUID, the lease event cannot be associated with any discovered data.  
For leases, same IP addresses may be used by multiple systems, so the IP address must match the MAC address or DUID to ensure that the discovered data has the most likely correct value.

*Variables* *for* *DHCP* *Lease* *Events*

| **NIOS Field Name** | **Template Variable Name ** | **Supported  **   **Filter** | **Enriched Data** | **Comment** |
| --- | --- | --- | --- | --- |
| Timestamp | timestamp (ISO 8601 format) |  |  | The timestamp when the event occurs. |
| Infoblox Member IP | member_ip |  | . | Infoblox member IP (VIP or LAN1) that has generated the event |
| Infoblox Member Name | member_name |  |  |  |
| Lease Binding State | binding_state | equals |  | This can be either UNKNOWN, ABANDONED, ACTIVE, BACKUP, DECLINED, EXPIRED, FREE, OFFERED, RELEASED, RESET, or STATIC. |
| Lease IP address | address | equals, matches range, matches CIDR | Parent Network EA, Parent Range, DNS Names and EA of associated objects | Some information from parent network is already in the DHCP lease data. |
| Lease Protocol | protocol |  |  | Possible values are IPv4 or IPv6. |
| Lease Start Time | starts |  |  |  |
| Lease End Time | ends |  |  |  |
| Client MAC address | hardware |  |  |  |
| Client IPv6 DUID | ipv6_duid |  |  |  |
| Client Host Name | client_hostname |  |  |  |
| Fingerprint |  | contains, equals, begins with, ends with |  |  |
| Lease Network View Name | network_view | contains, equals, begins with, ends with |  |  |
| Lease Network | network |  |  | ip_addr/cidr  Example: 1.2.3.4/24 |
| Lease Network Address |   network_ipaddr |  |  | ip_addr |
| Lease Network CIDR | network_netmask |  |  | CIDR |
| Lease IP Range Start Address | range_start_addr |  |  |  |
| Lease IP Range  End Address | range_end_addr |  |  |  |
| Event Type | event_type | equals | RPZ  LEASE  TUNNEL  NETWORK_IPV4  NETWORK_IPV6  RANGE_IPV4  RANGE_IPV6  FIXED_ADDRESS_IPV4  FIXED_ADDRESS_IPV6  HOST_ADDRESS_IPV4  HOST_ADDRESS_IPV6  SESSION | SESSION is used for the login and logout events for the session management templates. |
| **Enriched from Network EA** |
| Lease Network EA | network.extattrs |  | From parent network EA | EA name can be any UTF-8 characters. |
| **Enriched from IPv4 Address and IPv6 Address** |
| Lease IP Username | ip.username |  | From IPv4 Address and IPv6 Address |  |
| Lease IP Associated EA | p.extattrs |  | From IPv4 Address and IPv6 Address pyabs class | EA must be stored as “&lt;EA name&gt;-&lt;EA value&gt;” pair. |
| Lease IP Associated DNS Names | ip.names |  | From IPv4 Address and IPv6 Address | List of FQDN |
| **Enriched from Discovery Data** |
| Lease IP Attached Device Model | ip.discovered_data.device_model |  | From discovered data |  |
| Lease IP Attached Device Name | ip.discovered_data.device_port_name |  | From discovered data |  |
| Lease IP Attached Device Port | ip.discovered_data.device_port_type |  | From discovered data |  |
| Lease IP Attached Device Type | ip.discovered_data.device_type |  | From discovered data |  |
| Lease IP Attached Device Vendor | ip.discovered_data.device_vendor |  | From discovered data |  |
| Lease IP Discovered Name | ip.discovered_data.discovered_name |  | From discovered data |  |
| Lease IP First Discovered | ip.discovered_data.first_discovered (ISO 8601 format) |  | From discovered data |  |
| Lease IP Discovered MAC | ip.discovered_data.mac_address |  | From discovered data |  |
| Lease IP NetBIOS Name | ip.discovered_data.netbios_name |  | From discovered data |  |
| Lease IP Port Link | ip.discovered_data.port_link_status |  | From discovered data |  |
| Lease IP Port Speed | ip.discovered_data.port_speed |  | From discovered data |  |
| Lease IP Port Status | ip.discovered_data.port_status |  | From discovered data |  |
| Lease IP VLAN Description | ip.discovered_data.port_vlan_description |  | From discovered data |  |
| Lease IP VLAN Name | ip.discovered_data.port_vlan_name |  | From discovered data |  |
