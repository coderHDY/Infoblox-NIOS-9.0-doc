---
title: "Forward-Mapping Zone"
source: "/space/nios90/280269191"
pageId: "280269191"
---
| **Field** **Name** | **Data** **Type ** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage** **and** **Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-ForwardZone | String | Yes |  |  | Identifies the first row as a header row for the forward zones. Example: ForwardZone |
| fqdn | FQDN | Yes | Name | zone | This field combines the AAAA record name and the zone name to form the FQDN. Example: aaaa1.corp100.com |
| view | String | No | DNS View | views | If no view is specified, the default view is used. Example: Default |
| zone_format | String | Yes | Type |  | Valid values are **FORWARD**, **IPV4**,and **IPV6**. |
| prefix | String | No | RFC 2317 Prefix | prefix | Prefix is used for reverse-mapping RFC2317 zones only. If you include a prefix in a forward-mapping zone, the appliance ignores the prefix. No error message is generated. |
| disabled | Boolean | No | Disable | disable | Enable or disable the forward zone. Example: FALSE |
| comment | String | No | Comment | comment | Example: This is a Forward zone. |
| forward_to | Zone forwarder list | Yes | Default Zone Forwarders |  | List of forwarders for a Forward type zone. Example: [fwd1.test.com/1.1.1.1/,.](http://fwd1.test.com/1.1.1.1/,.).. |
| forwarding_servers | Forwarding members list | No | Members |  | List of forwarding servers. Example: "infoblox.localdomain,..." |
| forwarders_only | Boolean | No | Use Forwarders Only |  | Enable use of forwarders only. Example: False |
| ns_group | String | No |  | ns_group | Forwarding member name server group name. Example: fwd_ns_group1. |
| ns_group_external | String | No |  | external_ns_group | Forward/Stub server name server group name. Example: ext_ns_group1. |
| EA-Site | String | No | Extensible attribute | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. Example: California. |
| EA-Users | List | No | Extensible attribute | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. Example: [‘Annie’,   ‘John’]. |
| ADMGRP-XXXX | String | No | Permissions   Admin   Group/Role | permission | ADMGRP-JimSmith is an example of an admin permission of a specific admin group. Example: RW |
| disable_ns_generation | Boolean | No | Disable auto-generation of NS records in parent authoritative zone |  | Determines whether auto-generation of NS records in the parent zone is disabled or not. When this is set to False, the auto-generation is enabled. |
