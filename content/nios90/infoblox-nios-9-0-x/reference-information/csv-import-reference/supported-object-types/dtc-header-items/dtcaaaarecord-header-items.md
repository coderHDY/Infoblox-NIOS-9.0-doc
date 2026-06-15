---
title: "DtcAaaaRecord Header Items"
source: "/space/nios90/1456865687"
pageId: "1456865687"
---
| **Name** | **Type** | **Required** | **Example** | **lbap Name** | **Comment** |
| --- | --- | --- | --- | --- | --- |
| Header-DtcAaaaRecord | String | Yes | DtcAaaaRecord |  |  |
| ipv6addr* | IPv6 address | Yes | 2001:db8::1 | address |  |
| _new_ipv6addr | IPv6 address | No |  | address |  |
| dtc_server | DTC server | Yes | server1 | dtc_server | DTC Server the DTC AAAA record is associated with |
| ttl | Unsigned integer | No | 1024 | ttl |  |
| disabled | Boolean | No | false | disabled |  |
| comment | String | No | Sample DTC AAAA record | comment |  |
