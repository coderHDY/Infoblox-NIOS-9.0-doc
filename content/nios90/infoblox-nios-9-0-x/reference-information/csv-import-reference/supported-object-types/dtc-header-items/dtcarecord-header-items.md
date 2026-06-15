---
title: "DtcARecord Header Items"
source: "/space/nios90/1457193370"
pageId: "1457193370"
---
| **Name** | **Type** | **Required** | **Example** | **lbap Name** | **Comment** |
| --- | --- | --- | --- | --- | --- |
| Header-DtcARecord | String | Yes | DtcARecord |  |  |
| ipv4addr* | IPv4 address | Yes | 10.0.0.1 | address |  |
| _new_ipv4addr | IPv4 address | No |  | address |  |
| dtc_server* | DTC server | Yes | server1 | lbdns_server | DTC server the DTC A record is associated with |
| ttl | Unsigned integer | No | 1024 | ttl |  |
| disabled | Boolean | No | false | disabled |  |
| comment | String | No | Sample DTC A record | comment |  |
