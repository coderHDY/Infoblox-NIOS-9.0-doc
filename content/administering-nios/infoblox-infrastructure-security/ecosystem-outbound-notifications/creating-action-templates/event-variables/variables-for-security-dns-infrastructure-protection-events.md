---
title: "Variables for Security DNS Infrastructure Protection Events"
source: "/space/nios90/1375569186"
pageId: "1375569186"
---
| **NIOS Field Name** | **Template Variable Name** | **Supported Filter** | **Enriched Data** | **Comment**   |  |
| --- | --- | --- | --- | --- | --- |
| Timestamp | timestamp | timestamp (iso 8601 format) |  |  | Timestamp when event occurs |
| Infoblox Member IP | member_ip | member_ip | equals,   matches range,   matches CIDR |  | Infoblox Member IP (VIP or LAN1) that has this event generated. |
| Infoblox Member Name | member_name | member_name | equals |  | Infoblox Member Name |
| Rule ID | rule_sid | rule_sid | contains,   equals,   begins with,   ends with |  | ATP rule ID. String |
| Rule Name | rule_name | rule_name |  |  | ATP rule name |
| Rule Category | rule_category | rule_category | contains,   equals,   begins with,   ends with |  | Rule category. String |
| Rule Log Severity | rule_severity | rule_severity | equals,   more severe,   less severe |  | Rule log severity (CRITICAL, MAJOR, WARNING, INFORMATIONAL) |
| Rule Action | rule_action | rule_action | equal |  | Rule action (ALERT, DROP, PASS) |
| Source IP | source_ip | source_ip | equals,   matches range,   matches CIDR | Parent Range,   Associated objects: DNS Names and EA   Parent Network,   Parent Network EA,   Discovery | Source IP |
| Source Port | source_port | source_port |  |  | Source port |
| Is NAT Client | is_nat_client | is_nat_client |  |  | Flag indicating if client is 'nated' (True, False) |
| NAT First Port | nat_first_port | nat_first_port |  |  | Port block start |
| NAT Last Port | nat_last_port | nat_last_port |  |  | Port block end |
| Query FQDN | query_fqdn | query_fqdn | contains,   equals,   begins with,   ends with |  | DNS Query FQDN limited by second-level domain name |
| Count of hits | hits_count | hits_count | greater than |  | Count of ADP hits per interval (15 sec) |
| **Enriched from IPv4 Address or IPv6 Address ** | **WAPI: IPv4 Address / IPv6 Address ** |
| Source IP User Name | ip_username | ip.username |  | From IPv4Address and IPv6Address | maybe empty |
| Source IP Associated EA | ip_extattrs | ip.extattrs |  | From IPv4Address and IPv6Address pyabs class | maybe empty, EA need to be stored as "name-value" pair |
| Source IP Associated DNS Names | ip_names | ip.names |  | From IPv4Address or IPv6Address | list of FQDN |
| **Enriched from Discovery data ** | **WAPI: discovery_data struct, inside IPv4 Address / IPv6 Address ** |
| Source IP Attached Device Model | ip_discovered_data_device_model | ip.discovered_data.device_model |  | From Discovery Data |  |
| Source IP Attached Device Name | ip_discovered_data_device_port_name | ip.discovered_data.device_port_name |  | From Discovery Data |  |
| Source IP Attached Device Port | ip_discovered_data_device_port_type | ip.discovered_data.device_port_type |  | From Discovery Data |  |
| Source IP Attached Device Type | ip_discovered_data_device_type | ip.discovered_data.device_type |  | From Discovery Data |  |
| Source IP Attached Device Vendor | ip_discovered_data_device_vendor | ip.discovered_data.device_vendor |  | From Discovery Data |  |
| Source IP Discovered Name | ip_discovered_data_discovered_name | ip.discovered_data.discovered_name |  | From Discovery Data |  |
| Source IP First Discovered | ip_discovered_data_first_discovered | ip.discovered_data.first_discovered (iso 8601 format) |  | From Discovery Data |  |
| Source IP Discovered MAC | ip_discovered_data_mac_address | ip.discovered_data.mac_address |  | From Discovery Data |  |
| Source IP NetBIOS Name | ip_discovered_data_netbios_name | ip.discovered_data.netbios_name |  | From Discovery Data |  |
| Source IP Port Link | ip_discovered_data_port_link_status | ip.discovered_data.port_link_status |  | From Discovery Data |  |
| Source IP Port Speed | ip_discovered_data_port_speed | ip.discovered_data.port_speed |  | From Discovery Data |  |
| Source IP Port Status | ip_discovered_data_port_status | ip.discovered_data.port_status |  | From Discovery Data |  |
| Source IP VLAN Description | ip_discovered_data_port_vlan_description | ip.discovered_data.port_vlan_description |  | From Discovery Data |  |
| Source IP VLAN Name | ip_discovered_data_port_vlan_name | ip.discovered_data.port_vlan_name |  | From Discovery Data |  |
| **Enriched from Parent Range** | **WAPI: range** |
| Source IP Range Start Address | range_start_addr | range.start_addr |  | From Parent Range |  |
| Source IP Range End Address | range_end_addr | range.end_addr |  | From Parent Range |  |
| **Enriched from Parent Network ** | **WAPI: network ** |
| Source IP Network View Name | network_network_view | network.network_view |  | From Parent Network | network view name in string |
| Source IP Network | network_network | network.network |  | From Parent Network | ip_addr/cidr, 1.2.3.4/24 |
| Source IP Network Address | network_ipv4addr | network.ipv4addr |  | From Parent Network | ip_addr |
| Source IP Network Cidr | network_netmask | network.netmask |  | From Parent Network | cidr |
| Source IP Network EA | network_extattrs | network.extattrs |  | From Parent Network EA | EA name can be any utf8 characters. |
| **Enriched from lease data ** | **WAPI: lease ** |
| Source IP Lease Start Time | lease_starts | lease.starts(iso 8601 format) |  | From Lease Data |  |
| Source IP Lease End Time | lease_ends | lease.ends(iso 8601 format) |  | From Lease Data |  |
| Source IP Lease State | lease_binding_state | lease.binding_state |  | From Lease Data | UNKNOWN, ABANDONED, ACTIVE, BACKUP, DECLINED, EXPIRED, FREE, OFFERED, RELEASED, RESET, STATIC |
| Source IP Lease Client Host Name | lease_client_hostname | lease.client_hostname |  | From Lease Data |  |
| Source IP Lease MAC Address | lease_hardware | lease.hardware |  | From Lease Data |  |
| Source IP Lease DUID | lease_ipv6_duid | lease.ipv6_duid |  | From Lease Data |  |
| Source IP Fingerprint | lease_fingerprint | lease.fingerprint |  | From Lease Data |  |
