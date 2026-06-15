---
title: "DtcMonitorSip Header Items"
source: "/space/nios90/1457193294"
pageId: "1457193294"
---
| **Name** | **Type** | **Required** | **Example** | **lbap Name** | **Comment** |
| --- | --- | --- | --- | --- | --- |
| Header-DtcMonitorSip | String | Yes | DtcMonitorSip |  |  |
| name* | String | Yes | sip_monitor1 | name |  |
| _new_name | String | No |  | name |  |
| comment | String | No | A DTC SIP monitor comment | comment |  |
| interval | Unsigned integer | No | 10 | interval |  |
| timeout | Unsigned integer | No | 7 | timeout | Valid values between 1 and 15 |
| port | Unsigned integer | No | 8080 | port | Valid values between 1 and 65535 |
| request | String | No | GET / | request | Maximum of 1024 characters |
| result | String | No | CODE_IS | result | Valid values are 'ANY', 'CODE_IS', and 'CODE_IS_NOT' |
| result_code | Unsigned integer | No | 300 | result_code | Valid values between 0 and 999 |
| transport | String | No | UDP | transport | Valid values are 'TCP', 'UDP', 'SIPS', and 'TLS' |
| client_cert | Client certificate | No | 626596e ... 4362f80c (128 characters) | client_cert | Valid value is a DTC certificate object |
| ciphers | String | No | DHE-RSA-AES256-SHA | ciphers | Valid value is array of ciphers in a string format |
| retry_up | Unsigned integer | No | 3 | retry_up | Valid values between 1 and 10 |
| retry_down | Unsigned integer | No | 3 | retry_down | Valid values between 1 and 10 |
| validate_cert | Boolean | No | false | validate_cert | Default is 'true' |
| EA-Site | String | No | San Jose |  |  |
