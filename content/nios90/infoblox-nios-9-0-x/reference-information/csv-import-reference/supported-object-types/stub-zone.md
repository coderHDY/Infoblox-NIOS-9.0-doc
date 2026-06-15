---
title: "Stub Zone"
source: "/space/nios90/280661763"
pageId: "280661763"
---
| **Field** **Name** | **Data** **Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage** **and** **Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-StubZone | String | Yes |  |  | Identifies the first row as a header row for the stub zones. Example: StubZone |
| fqdn | FQDN | Yes | Name | zone | This field combines the AAAA record name and the zone name to form the FQDN. Example: [aaaa1.corp100.com](http://aaaa1.corp100.com) |
| view | String | No | DNS View | views | If no view is specified, the default view is used. Example: Default |
| zone_format | String | Yes | Type |  | Valid values are **FORWARD**, **IPV4**,and **IPV6**. |
| prefix | String | No | RFC 2317    Prefix | prefix | Prefix is used for reverse-mapping RFC2317 zones only. If you include a prefix in a forward-mapping zone, the appliance ignores the prefix. No error message is generated. |
| disabled | Boolean | No | Disable | disable | Enable or disable the stub zone. Example: FALSE |
| comment | String | No | Comment | comment | Example: This is a stub zone. |
| disable_forwarding | Boolean | No | Do not use forwarders | disable_forwarding | Enable or disable forwarding. Example: False |
| stub_from | Master Nameserver list | Yes |  |  | List of external stub servers. Example: "[nm1.test.com/2.2.2.2,.](http://nm1.test.com/2.2.2.2,.).." |
| stub_members | Member server list | No |  |  | List of stub Grid members. |
| ns_group | String | No |  | ns_group | Stub member name server group name. Example: stub_ns_group1. |
| ns_group_external | String | No |  | external_ns_group | Forward/Stub server name server group name. Example: ext_ns_group1. |
| EA-Site | String | No | Extensible attribute | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. Example: California. |
| EA-Users | List | No | Extensible attribute | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. Example: [‘Annie’, ‘John’]. |
| ADMGRP-XXXX | String | No | Permissions Admin Group/Role | permission | ADMGRP-JimSmith is an example of an admin permission of a specific admin group.    Example: RW |
