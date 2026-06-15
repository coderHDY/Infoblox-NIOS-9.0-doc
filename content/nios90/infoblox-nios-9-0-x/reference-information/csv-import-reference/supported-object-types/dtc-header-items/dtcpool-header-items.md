---
title: "DtcPool Header Items"
source: "/space/nios90/1457095122"
pageId: "1457095122"
---
| **Name** | **Type** | **Required** | **Example** | **lbap Name** | **Comment** |
| --- | --- | --- | --- | --- | --- |
| Header-DtcPool | String | Yes | DtcPool |  |  |
| name* | String | Yes | pool1 | name |  |
| _new_name | String | No |  | name |  |
| lb_preferred_method | String | No | RATIO | lb_preferred_method | Valid values are 'ALL_AVAILABLE', 'DYNAMIC_RATIO', 'GLOBAL_AVAILABILITY', 'RATIO', 'ROUND_ROBIN',  'TOPOLOGY', and 'SOURCE_IP_HASH' |
| disabled | Boolean | No | false | disabled |  |
| comment | String | No | A DTC pool comment | comment |  |
| lb_preferred_topology | Topology rules for preferred 'TOPOLOGY' load balancing method | No | custom-2 | preferred_topology |  |
| lb_alternate_method | String | No | RATIO | alternate_method | Alternate load balancing method. Valid values are 'ALL_AVAILABLE', 'DYNAMIC_RATIO', 'NONE', 'GLOBAL_AVAILABILITY', 'RATIO', 'ROUND_ROBIN', 'TOPOLOGY' , and 'SOURCE_IP_HASH'. |
| lb_alternate_topology | Topology rules for alternate 'TOPOLOGY' load balancing method | No | custom-3 | alternate_topology |  |
| availability | String | No | any | availability | DTC pool resources availability status. Valid values are 'ALL', 'ANY', and 'QUORUM'. |
| quorum | Unsigned integer | No | 20 | quorum | The number of monitors that must report the resource as 'up' for 'QUORUM' availability mode to be available. |
| ttl | Unsigned integer | No | 10 | ttl |  |
| servers | List of DTC servers | No | server/ratio  For example: dtc-server1/1,dtc-server2/10... | servers |  |
| monitors | List of health monitors | No | Monitor name/Monitor type  For example: ICMP-1/icmp,HTTP-1/http,... | monitors | List of names and monitor types of DTC pool monitors |
| dynamic_ratio_preferred | Preferred dynamic ratio load balancing settings | No | method/monitor/monitor_metric/monitor_weighing/   invert_monitor_metric    For example: MONITOR/snmp/.1.3/RATIO/false | dynamic_ratio_preferred | When preferred_method="DYNAMIC_RATIO" |
| dynamic_ratio_alternate | Alternate dynamic ratio load balancing settings | No | method/monitor/monitor_metric/monitor_weighing/   invert_monitor_metric  For example: MONITOR/snmp/.1.3/PRIORITY/false | dynamic_ratio_alternate | When preferred_method="TOPOLOGY" and alternate_method="DYNAMIC_RATIO" |
| EA-Site | String | No | San Jose |  |  |
