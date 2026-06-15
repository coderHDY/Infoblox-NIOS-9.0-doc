---
title: "Variables for RPZ Events"
source: "/space/nios90/1375601819"
pageId: "1375601819"
---
*45.12* *Variables* *for* *RPZ* *Events*

| **NIOS Field Name** | **Template Variable Name** | **Supported  Filter(s)** | **Enriched Data** | **Comment** |
| --- | --- | --- | --- | --- |
| Timestamp | timestamp (ISO 8601 format) |  |  | The timestamp when the event occurred. |
| Infoblox Member IP | member_ip |  |  | Infoblox Member IP (VIP or LAN1) that generated this event. |
| Infoblox Member Name | member_name |  |  |  |
| Action Policy | rpz_policy | equals |  | (PASSTHRU DROP TCP-ONLY NXDOMAIN    NODATA Local-Data CNAME MISS) |
| RPZ Type | rpz_type | equals |  | Possible values: BAD, CLIENT-IP, QNAME, IP, NSDNAME, NSIP |
| Query Name or Query FQDN | query_name | contains, equals, begins with, ends with |  |  |
| Rule Name | rule_name | contains, equals, begins with, ends with |  |  |
| Source IP |   source_ip | equals, matches range, matches CIDR | Parent range, Associated objects' DNS Names and EAs, Parent Network, Parent Network EA, Discovered data |  |
| Source Port | source_port |  |  |  |
| Destination IP | destination_ip |  |  | The name server that responded to the RPZ rule. |
| Query Type | query_type |  |  | DNS query type: A, AAAA, CNAME, DNAME,    TXT, and other. |
| Query View Name | query_view_name |  |  | Query DNS view name. |
| Event Type | event_type | equals | RPZ  LEASE  TUNNEL    NETWORK_IPV4  NETWORK_IPV6  RANGE_IPV4  RANGE_IPV6  FIXED_ADDRESS_IPV4 FIXED_ADDRESS_IPV6 HOST_ADDRESS_IPV4 HOST_ADDRESS_IPV6  SESSION | SESSION is used for the login and logout events for the session management templates. |
| **Enriched from IPv4 or IPv6 Addresses** |
| Source IP User Name | ip.username |  | From IPv4Address and IPv6Address | This field can be empty. |
| Source IP Associated EA | ip.extattrs |  | From IPv4Address and IPv6Address pyabs class | Can be empty, EA needs to be stored as "name-value" pair. |
| Source IP Associated DNS Names | ip.names |  | From IPv4Address or IPv6Address | List of FQDN |
| **Enriched from Discovered Data** |
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
| Source IP Range Start Address | range.start_addr |  | From parent range |  |
| Source IP Range End Address | range.end_addr |  | From parent range |  |
| **Enriched from Parent Network** |
| Source IP Network View Name | network.network_view |  | From parent network | The network view name in string format. |
| Source IP Network | network.network |  | From parent network | ip_addr/cidr  Example: 1.2.3.4/24 |
| Source IP Network  Address | network.ipv4addr |  | From parent network | ip_addr |
| Source IP Network Cidr | network.netmask |  | From parent network | cidr |
| Source IP Network EA | network.extattrs |  | From parent network | EA name can be any UTF8 characters. |
| **Enriched from Lease Data** |
| Source IP Lease Start Time | lease.starts (ISO 8601 format) |  | From lease data |  |
| Source IP Lease End Time | lease.ends (ISO 8601 format) |  | From lease data |  |
| Source IP Lease State | lease.binding_state |  | From lease data | Possible values: UNKNOWN, ABANDONED, ACTIVE, BACKUP, DECLINED, EXPIRED, FREE, OFFERED, RELEASED, RESET, STATIC |
| Source IP Lease Client Host Name | lease.client_hostname |  | From lease data |  |
| Source IP Lease MAC Address | lease.hardware |  | From lease data |  |
| Source IP Lease DUID | lease.ipv6_duid |  | From lease data |  |
| Source IP Fingerprint | lease.fingerprint |  | From lease data |  |
