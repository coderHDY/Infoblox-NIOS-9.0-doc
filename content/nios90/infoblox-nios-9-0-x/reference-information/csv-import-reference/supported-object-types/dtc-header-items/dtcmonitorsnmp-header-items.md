---
title: "DtcMonitorSnmp Header Items"
source: "/space/nios90/1456865655"
pageId: "1456865655"
---
| **Name** | **Type** | **Required** | **Example** | **lbap Name** | **Comment** |
| --- | --- | --- | --- | --- | --- |
| Header-DtcMonitorSnmp | String | Yes | DtcMonitorSnmp |  |  |
| name* | String | Yes | snmp_monitor1 | name |  |
| port | Unsigned integer |  | 6030 | port | Valid values between 1 and 65535 |
| _new_name | String | No |  | name |  |
| comment | String | No | A DTC SNMP monitor comment | comment |  |
| interval | Unsigned integer | No | 10 | interval |  |
| timeout | Unsigned integer | No | 7 | timeout | Valid values between 1 and 15 |
| retry_up | Unsigned integer | No | 3 | retry_up | Valid values between 1 and 10 |
| retry_down | Unsigned integer | No | 3 | retry_down | Valid values between 1 and 10 |
| version | String | No | V1 | version | Valid values are 'V1', 'V2C', and 'V3' |
| community | String | No | desired_community | community | SNMP community string for an SNMP authentication |
| oids | List of OIDs for SNMP monitoring | No | .1.3/Comment-1/INTEGER/RANGE/10/1000,.1.2/Comment-2/STRING/EXACT/abc/,... | oids |  |
| user | String | No | user1 | user | SNMPv3 user setting |
| context | String |  | desired_context | context | SNMPv3 context. Maximum of 1023 characters. |
| engine_id | String | No | desired_engine_id | engine_id | SNMPv3 engine identifier. Max of 1023 characters. |
| EA-Site | String | No | San Jose |  |  |
