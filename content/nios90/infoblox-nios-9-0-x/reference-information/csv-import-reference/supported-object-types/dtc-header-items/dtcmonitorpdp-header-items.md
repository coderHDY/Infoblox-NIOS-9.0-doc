---
title: "DtcMonitorPdp Header Items"
source: "/space/nios90/1457193317"
pageId: "1457193317"
---
| **Name** | **Type** | **Required** | **Example** | **lbap Name** | **Comment** |
| --- | --- | --- | --- | --- | --- |
| Header-DtcMonitorPdp | String | Yes | DtcMonitorPdp |  |  |
| name* | String | Yes | pdp_monitor1 | name |  |
| _new_name | String | No |  | name |  |
| comment | String | No | A DTC PDP monitor comment | comment |  |
| interval | Unsigned integer | No | 10 | interval |  |
| timeout | Unsigned integer | No | 7 | timeout | Valid values between 1 and 15 |
| retry_up | Unsigned integer | No | 5 | retry_up | Valid values between 1 and 10 |
| retry_down | Unsigned integer | No | 5 | retry_down | Valid values between 1 and 10 |
| port | Unsigned integer | No | 6030 | port | Valid values between 1 and 65535 |
| EA-Site | String | No | San Jose |  |  |
