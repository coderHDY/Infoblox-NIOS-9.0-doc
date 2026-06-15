---
title: "Variables for DB Object Change Event - DHCP Host Address IPv6"
source: "/space/nios90/1375143461"
pageId: "1375143461"
---
| **NIOS Field Name** | **Template Variable Name ** | **Supported **   **Filter** | **Enriched Data ** | **Comment** |
| --- | --- | --- | --- | --- |
| Timestamp | timestamp (ISO 8601 format) |  |  | The timestamp when the event occurs. |
| Infoblox Member IP | member_ip |  |  | Infoblox member IP (VIP or LAN1) that has generated the event. |
| Infoblox Member Name | member_name |  |  |  |
| WAPI object reference | _ref |  |  |  |
| Extensible Attributes | extattrs |  |  | Dictionary of extensible attributes from parent host record |
| Network | network | equals, contained in |  | ip_addr/cidr |
| network_view | network_view | contains, equals, begins with, ends with |  | String format |
| MS AD User Data | ms_ad_user_data | contains, equals, begins with, ends with |  |  |
| Host | host | contains, equals, begins with, ends with |  |  |
| IPv6 DUID | duid | contains, equals, begins with, ends with |  |  |
| Address Type | address_type | equals |  | Address, Prefix, or Both |
| IPv6 Address | ipv6addr | equals, matches range, matches CIDR |  |  |
| IPv6 Address Prefix | ipv6prefix | equals, matches range, matches CIDR |  |  |
| IPv6 Address Prefix bits | ipv6prefix_bits | equals |  |  |
| Event Type | event_type | equals | RPZ  LEASE  TUNNEL  NETWORK_IPV4  NETWORK_IPV6  RANGE_IPV4  RANGE_IPV6  FIXED_ADDRESS_IPV4  FIXED_ADDRESS_IPV6  HOST_ADDRESS_IPV4  HOST_ADDRESS_IPV6  SESSION | SESSION is used for the login and logout events for the session management templates. |
