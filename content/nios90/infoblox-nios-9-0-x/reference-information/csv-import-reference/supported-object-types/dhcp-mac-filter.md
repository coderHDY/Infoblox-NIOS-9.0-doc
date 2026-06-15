---
title: "DHCP MAC Filter"
source: "/space/nios90/280268644"
pageId: "280268644"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-DhcpMacFilter | String | Yes |  |  | Example: DhcpMacFilter |
| name | String | Yes | Name | name | Example: MAC filter 1 |
| _new_name | String | No |  |  | Add this field to overwrite the name field when you select the overwrite or merge option. |
| never_expires | Boolean | No | Never Expires |  | Example: TRUE |
| expiration_interval | Integer | No | Automatically expires in | default_mac_address_expiration | Example: 3624 |
| enforce_expiration_time | Boolean | No | Enforce Expiration Times | enforce_expiration_times | Example: FALSE |
| comment | String | No | Comment | comment |  |
| EA-Site | String | No | Extensible Attribute   Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | String | No | Extensible Attribute   Users | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)*.* |
| ADMGRP-JoeSmith | String | No | Permissions Admin   Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for DHCP MAC filters. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a DHCP MAC Filter

This example shows how to import a DHCP MAC filter.

`header-dhcpmacfilter,name*,never_expires,expiration_interval,enforce_expiration_time,c omment`  
` dhcpmacfilter,MacFilter01,FALSE,3600,TRUE,This is a comment.`

## Overwriting DHCP MAC Filter Data

This example shows how to overwrite the MAC filter name from MacFilter01 to MacFilter02.

`header-dhcpmacfilter,name*,_new_name dhcpmacfilter,MacFilter01,MacFilter02`

## Merging DHCP MAC Filter Data

This example shows how to merge extensible attributes Site and Users, as well as admin group DHCP_admins with a RO permission.

`header-dhcpmacfilter,name*,EA-Site,EA-Users,ADMGRPDHCP_admins dhcpmacfilter,MacFilter02,USA,John Smith,RO`
