---
title: "DtcCnameRecord Header Items"
source: "/space/nios90/1457095218"
pageId: "1457095218"
---
| **Name** | **Type** | **Required** | **Example** | **lbap Name** | **Comment** |
| --- | --- | --- | --- | --- | --- |
| Header-DtcCnameRecord | String | Yes | DtcCnameRecord |  |  |
| canonical* | String | Yes | dtc.localdomain | canonical_name | Canonical name of the resource |
| _new_canonical | String | No |  | canonical_name |  |
| dtc_server* | DTC server | Yes | server1 | dtc_server | DTC Server the DTC CNAME record is associated with |
| ttl | Unsigned integer | No | 1024 | ttl |  |
| disabled | Boolean | No | false | disabled |  |
| comment | String | No | Sample DTC CNAME record | comment |  |
