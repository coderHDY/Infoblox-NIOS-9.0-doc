---
title: "AAAA Record"
source: "/space/nios90/280759552"
pageId: "280759552"
---
> **warning**
>
> **Note**
> 
> IDN is supported for object type: `fqdn.` You can use IDN or punycode while importing this object.

| **Field**** ****Name** | **Data**** ****Type ** | **Required (Yes/No)** | **Associated**** ****GUI f****ield** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-AaaaRecord | String | Yes |  |  | Example: AaaaRecord |
| fqdn | FQDN | Yes | Name | zone | This field combines the AAAA record name and the zone name to form the  FQDN. Example: aaaa1.corp100.com |
| _new_fqdn | FQDN | No |  |  | Add this field to overwrite the fqdn field when you select the overwrite or merge option. |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. Example: Default |
| address | IPv6 address | Yes | IP Address | ipv6addrss | Example: 100::10 |
| _new_address | IPv6 address | No |  |  | Add this field to overwrite the address field when you select the overwrite or merge option. |
| comment | String | No | Comment | comment |  |
| disabled | Boolean | No | Disable | disabled | Example: FALSE |
| ttl | Unsigned  integer | No | TTL | ttl | This is an inherited field. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). Example: 7200 |
| EA-Site | String | No | Extensible attribute Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | List | No | Extensible attribute Users | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)*.* |
| ADMGRP-JoeSmith | String | No | Permissions    Admin   Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for AAAA records. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding an AAAA Record

This example shows how to add an AAAA record, bind_aaaa.corp100.com, with a comment = add by superuser, and TTL = 3600.

`header-aaaarecord,address*,fqdn*,comment,ttl aaaarecord,1234:1234::1,bind_aaaa.corp100.co,add by superuser,3600`

## Overwriting AAAA Record Data

This example shows how to modify an existing AAAA record from address 1234:1234::1 to 1234:1234::2, and TTL from 3600 to 3800.

`header-aaaarecord,address*,_new_address,fqdn*,ttl aaaarecord,1234:1234::1,1234:1234:2,bind_aaaa.corp100.com,3800`

## Merging AAAA Record Data

This example shows how to disable an existing AAAA record.

`header-aaaarecord,address*,fqdn*,disabled aaaarecord,1234:1234::2,bind_aaaa.corp100.com,TRUE`
