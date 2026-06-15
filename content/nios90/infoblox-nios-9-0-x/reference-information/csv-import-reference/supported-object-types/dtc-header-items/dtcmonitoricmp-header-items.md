---
title: "DtcMonitorIcmp Header Items"
source: "/space/nios90/1456865627"
pageId: "1456865627"
---
| **Name** | **Type** | **Required** | **Example** | **lbap Name** | **Comment** |
| --- | --- | --- | --- | --- | --- |
| Header-DtcMonitorIcmp | String | Yes | DtcMonitorlcmp |  |  |
| name* | String | Yes | lcmp_monitor1 | name |  |
| _new_name | String | No |  | name |  |
| comment | String | No | A DTC ICMP monitor comment | comment |  |
| interval | Unsigned integer | No | 10 | interval |  |
| timeout | Unsigned integer | No | 7 | timeout | Valid values between 1 and 15 |
| retry_up | Unsigned integer | No | 3 | retry_up | Valid values between 1 and 10 |
| retry_down | Unsigned integer | No | 3 | retry_down | Valid values between 1 and 10 |
| EA-Site | String | No | San Jose |  |  |
