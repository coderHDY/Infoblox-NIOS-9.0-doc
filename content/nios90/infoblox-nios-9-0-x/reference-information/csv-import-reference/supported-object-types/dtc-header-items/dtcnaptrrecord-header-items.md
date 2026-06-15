---
title: "DtcNaptrRecord Header Items"
source: "/space/nios90/1456865713"
pageId: "1456865713"
---
| **Name** | **Type** | **Required** | **Example** | **lbap Name** | **Comment** |
| --- | --- | --- | --- | --- | --- |
| Header-DtcNaptrRecord | String | Yes | DtcNaptrRecord |  |  |
| dtc_server* | DTC server | Yes | server1 | dtc_server | DTC server the DTC NAPTR record is associated with |
| order* | Unsigned integer | Yes | 100 | order |  |
| _new_order | Unsigned integer | No |  | order |  |
| preference* | Unsigned integer | Yes | 10 | preference |  |
| _new_preference | Unsigned integer | No |  | preference |  |
| replacement* | String | Yes | [domain2.com](http://domain2.com) | replacement | The desired replacement value in a Fully-Qualified Domain Name (FQDN) format. |
| _new_replacement | String | No |  | replacement |  |
| flags* | String | No | U | flags | Empty value is allowed. Supported values for the flags field are 'U', 'S', 'P', and 'A'. |
| _new_flags | String | No |  | flags |  |
| services* | String | No | SIP+D2U | services | Empty value is allowed |
| _new_services | String | No |  | services |  |
| regexp* | String | No | ![http://my](http://my)[.](.*)!1!i | regexp | Empty value is allowed |
| _new_regexp | String | No |  | services |  |
| ttl | Unsigned integer | No | 28800 | ttl |  |
| disabled | Boolean | No | false | disabled |  |
| comment | String | No | Sample DTC NAPTR record | comment |  |
