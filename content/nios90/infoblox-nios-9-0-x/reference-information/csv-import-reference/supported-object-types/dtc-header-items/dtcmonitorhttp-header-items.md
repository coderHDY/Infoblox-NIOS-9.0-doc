---
title: "DtcMonitorHttp Header Items"
source: "/space/nios90/1457095169"
pageId: "1457095169"
---
| **Name** | **Type** | **Required** | **Example** | **lbap Name** | **Comment** |
| --- | --- | --- | --- | --- | --- |
| Header-DtcMonitorHttp | String | Yes | DtcMonitorHttp |  |  |
| name* | String | Yes | http_monitor1 | name |  |
| _new_name | String | No |  | name |  |
| comment | String | No | A DTC HTTP monitor comment | comment |  |
| interval | Unsigned integer | No | 10 | interval |  |
| timeout | Unsigned integer | No | 7 | timeout | Valid values between 1 and 15 |
| port | Unsigned integer | No | 8080 | port | Valid values between 1 and 65535 |
| request | String | No | GET / | request | Maximum of 1024 characters |
| content_check | String | No | EXTRACT | content_check | Valid values are 'NONE'(default), 'MATCH', and 'EXTRACT'. If 'MATCH', then 'content_check_op' and 'content_check_regex' params are required; if 'EXTRACT' then ‘content_check_op’,’content_extract_type’, ‘content_extract_value’, and ’content_check_regex’ values are required. |
| content_check_input | String | No | BODY | content_check_input | Valid values are 'HEADERS', 'ALL'(default) and 'BODY' |
| content_check_regex | String | No | SQL Error | content_check_regex |  |
| content_check_op | String | No | EQ | content_check_op | Valid values are 'EQ' and 'NEQ' for 'MATCH' content check, and 'EQ', 'NEQ', 'LEQ', and 'GEQ' for 'EXTRACT' content check type |
| content_extract_group | Unsigned integer | No | 3 | content_extract_group | Valid values between 0 and 8. The default is 0. |
| content_extract_type | String | No | INTEGER | content_extract_type | Valid values are 'INTEGER' and 'STRING'. The default is 'STRING'. |
| content_extract_value | String | No | 1 | content_extract_value | A desired extraction value in string format |
| result | String | No | CODE_IS | result | Valid values are 'ANY', 'CODE_IS', and 'CODE_IS_NOT' |
| result_code | Unsigned integer | No | 300 | result_code | Valid values between 0 and 999 |
| secure | Boolean | No | true | secure | Default is 'false' |
| client_cert | Client certificate | No | 626596e ... 4362f80c (128 characters) | client_cert | Valid value is a DTC certificate object. |
| ciphers | String | No | DHE-RSA-AES256-SHA | ciphers | Valid value is array of ciphers in a string format |
| retry_up | Unsigned integer | No | 3 | retry_up | Valid values between 1 and 10 |
| retry_down | Unsigned integer | No | 3 | retry_down | Valid values between 1 and 10 |
| validate_cert | Boolean | No | false | validate_cert | Default is 'true' |
| enable_sni | Boolean | No | true | enable_sni | Default is 'false' |
| EA-Site | String | No | San Jose |  |  |
