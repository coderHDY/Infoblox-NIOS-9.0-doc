---
title: "Variables for Analytics DNS Tunneling Events"
source: "/space/nios90/1375143361"
pageId: "1375143361"
---
| **NIOS Field Name** | **Template Variable Name** | **Supported Filter** | **Enriched Data** | **Comment** |
| --- | --- | --- | --- | --- |
| Timestamp | timestamp (ISO 8601 format) |  |  | When the event occurs |
| Infoblox Member IP | member_ip |  |  | Infoblox member IP (VIP or LAN1) that has generated the event. |
| Infoblox Member Name | member_name |  |  |  |
| Source IP | source_ip | equals, matches range, matches CIDR | Parent Network, Parent Network EA, Discovery |  |
| Domain Name | domain_name |  |  | Domain name that was determined as DNS tunneling domain. |
| RPZ Rule Policy | rpz_policy |  |  | RPZ rule policy that was created. |
| Event Type | event_type | equals | RPZ  LEASE  TUNNEL  NETWORK_IPV4  NETWORK_IPV6  RANGE_IPV4  RANGE_IPV6  FIXED_ADDRESS_IPV4  FIXED_ADDRESS_IPV6  HOST_ADDRESS_IPV4  HOST_ADDRESS_IPV6  SESSION | SESSION is used for the login and logout events for the session management templates. |
| Comment | comment |  |  | Comment generated from the event by the Analytics system. |
| **Enriched** **from** **IPv4** **Address** **or** **IPv6** **Address** |
| Source IP Username | ip.username |  | From IPv4 Address and IPv6 Address |  |
| Source IP Associated EA | ip.extattrs |  | From IPv4 Address and IPv6 Address pyabs class | EA must be stored as “&lt;EA name&gt;-&lt;EA value&gt;” pair. |
| Source IP Associated DNS Names | ip.names |  | From IPv4 Address and IPv6 Address | List of FQDN. |
| **Enriched** **from** **Discovery** **Data** |
| Source IP Attached Device Model | ip.discovered_data.device_model |  | From discovered data |  |
| Source IP Attached Device Name | ip.discovered_data.device_port_name |  | From discovered data |  |
| Source IP Attached Device Port | ip.discovered_data.device_port_type |  | From discovered data |  |
| Source IP Attached Device Type | ip.discovered_data.device_type |  | From discovered data |  |
| Source IP Attached Device Vendor | ip.discovered_data.device_vendor |  | From discovered data |  |
| Source IP Discovered Name | ip.discovered_data.discovered_name |  | From discovered data |  |
| Source IP First Discovered | ip.discovered_data.first_discovered (ISO  8601 format) |  | From discovered data |  |
| Source IP Discovered MAC | ip.discovered_data.mac_address |  | From discovered data |  |
| Source IP NetBIOS Name | ip.discovered_data.netbios_name |  | From discovered data |  |
| Source IP Port Link | ip.discovered_data.port_link_status |  | From discovered data |  |
| Source IP Port Speed | ip.discovered_data.port_speed |  | From discovered data |  |
| Source IP Port Status | ip.discovered_data.port_status |  | From discovered data |  |
| Source IP VLAN Description | ip.discovered_data.port_vlan_description |  | From discovered data |  |
| Source IP VLAN Name | ip.discovered_data.port_vlan_name |  | From discovered data |  |
| **Enriched from Parent Range** |
| Source IP Range Start Address | range.start_addr |  | From Parent Range |  |
| Source IP Range End Address | range.end_addr |  | From Parent Range |  |
| **Enriched from Parent Network** |
| Source IP Network View Name | network.network_view |  | From Parent Network | Network view name in string format. |
| Source IP Network | network.network |  | From Parent Network | ip_addr/cidr  Example: 1.2.3.4/24 |
| Source IP Network Address | network.ipv4addr |  | From Parent Network | ip_addr |
| Source IP Network Cidr | network.netmask |  | From Parent Network | CIDR |
| Source IP Network EA | network.extattrs |  | From Parent Network EA | EA name can be any UTF-8 characters. |
| **Enriched from Lease Data** |
| Source IP Lease Start Time | lease.starts (ISO 8601 format) |  | From Lease Data |  |
| Source IP Lease End Time | lease.ends (ISO 8601 format) |  | From Lease Data |  |
| Source IP Lease State | lease.binding_state |  | From Lease Data |  |
| Source IP Lease Client Host Name | lease.client_hostname |  | From Lease Data |  |
| Source IP Lease MAC Address | lease.hardware |  | From Lease Data |  |
| Source IP Lease DUID | lease.ipv6_duid |  | From Lease Data |  |
| Source IP Fingerprint | lease.fingerprint |  | From Lease Data |  |
