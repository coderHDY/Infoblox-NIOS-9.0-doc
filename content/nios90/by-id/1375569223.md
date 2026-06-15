---
title: "Variables for DB Object Change Event - DHCP Range IPv4"
source: "/space/nios90/1375569223"
pageId: "1375569223"
---
| **NIOS Field Name** | **Template Variable Name ** | **Supported  **   **Filter** | **Enriched Data** | **Comment** |
| --- | --- | --- | --- | --- |
| Timestamp | timestamp (ISO 8601 format) |  |  | When the event occurs |
| Infoblox Member IP | member_ip |  |  | Infoblox Member IP (VIP or LAN1) that has generated the event. |
| Infoblox Member Name | member_name |  |  |  |
| WAPI object reference | _ref |  |  |  |
| Comment | comment |  |  |  |
| Disable | disable | equals |  | Boolean |
| Extensible Attributes | extattrs |  |  | Dictionary of extensible attributes |
| Network | network | equals, contained in |  | ip_addr/cidr |
| network_view | network_view | contains, equals, begins with, ends with |  | String |
| Member | member |  |  |  |
| Boot File | bootfile |  |  |  |
| Start Address | start_addr |  |  |  |
| End Address | end_addr |  |  |  |
| MAC Filter Rules | mac_filter_rules |  |  |  |
| MS AD User Data | ms_ad_user_data |  |  |  |
| Next Server | nextserver |  |  |  |
| Server Association Type | server_association_type | contains, equals, begins with, ends with |  |  |
| Event Type | event_type | equals | RPZ  LEASE  TUNNEL  NETWORK_IPV4  NETWORK_IPV6  RANGE_IPV4  RANGE_IPV6  FIXED_ADDRESS_IPV4  FIXED_ADDRESS_IPV6  HOST_ADDRESS_IPV4  HOST_ADDRESS_IPV6  SESSION | SESSION is used for the login and logout events for the session management templates. |
