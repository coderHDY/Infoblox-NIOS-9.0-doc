---
title: "DtcLbdn Header Items"
source: "/space/nios90/1457095087"
pageId: "1457095087"
---
| **Name** | **Type** | **Required** | **Example** | **lbap Name** | **Comment** |
| --- | --- | --- | --- | --- | --- |
| Header-DtcLbdn | String | Yes | DtcLbdn |  |  |
| name* | String | Yes | load_bal |  |  |
| _new_name | String | No |  | name |  |
| lb_method* | String | Yes | GLOBAL_AVAILABILITY | lb_method | Valid values are 'GLOBAL_AVAILABILITY', 'RATIO', 'ROUND_ROBIN', 'TOPOLOGY' and 'SOURCE_IP_HASH' |
| patterns | List of strings | No | .domain.com, .test.com' | patterns | Valid value is an array of FQDN patterns in string format |
| disabled | Boolean | No | false | disabled |  |
| comment | String | No | A DTC LBDN comment | comment |  |
| persistence | Unsigned integer | No | 5 | persistence | Zero specifies no caching |
| topology | String | No | topology-1 | topology |  |
| ttl | Unsigned integer | No | 10 | ttl |  |
| pools | LBDN linked list of pools | No | pool/ratio eg: "pool1/1,pool2/10... | pools |  |
| auth_zones | LBDN linked list of auth zones | No | Must be in the zone_name/view_name format. For example:  [authzone1.com/view1](http://authzone1.com/view1), [authzone2.com/view2](http://authzone2.com/view2)... | auth_zones | List of DTC LBDN linked authoritative zones |
| types | String | No | NAPTR | types | Valid values are 'A', 'AAA', 'NAPTR', 'CNAME' |
| priority | Unsigned integer | No | 3 | priority | Valid values between 1 and 3. The default is 3. |
| EA-Site | String | No | San Jose |  |  |
