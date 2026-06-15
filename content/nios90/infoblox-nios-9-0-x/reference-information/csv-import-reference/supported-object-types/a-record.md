---
title: "A Record"
source: "/space/nios90/280269130"
pageId: "280269130"
---
> **warning**
>
> **Note**
> 
> IDN is supported for object type: fqdn. You can use IDN or punycode while importing this object.

| **Field**** ****Name** | **Data**** ****Type ** | **Required**** ****(Yes/No)** | **Associated**** ****GUI **** ****Field** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-ARecord | String | Yes |  |  | Example: ARecord |
| fqdn | FQDN | Yes | Name | name | This field combines the A record name and the zone name to form the FQDN.   Example: a1.corp100.com |
| _new_fqdn | FQDN | No |  |  | Add this field to overwrite the fqdn field when you select the overwrite or merge option. |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. |
| address | IP address | Yes | IP Address | ipv4addrss | Example: 192.138.1.1 |
| _new_address | IP address | No |  |  | Add this field to overwrite the address field when you select the overwrite or merge option. |
| comment | String | No | Comment | comment |  |
| disabled | Boolean | No | Disable | disable | Example: FALSE |
| ttl | Unsigned integer | No | TTL | ttl | This is an inherited field. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). Example: 7200 |
| EA-Site | String | No | Extensible attribute Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | List | No | Extensible attribute Users | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| ADMGRP-JoeSmith | String | No | Permissions    Admin   Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for A records. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding an A Record

This example shows how to add an A record, bind_a.corp100.com, with the extensible attribute Site = Infoblox, and the permission, DNS_Admins = RO.

`header-arecord,address*,fqdn*,ADMGRP-DNS_Admins,EA-Site `

`arecord,100.0.0.1,bind_a.corp100.com,RO,Infoblox`

## Overwriting A Record Data

This example shows how to modify the permission of the admin group DNS_Admins from RO to DENY in an existing A record, bind_a.corp100.com.

`header-arecord,address*,fqdn*,ADMGRP-DNS_Admins `

`arecord,100.0.0.1,bind_a.corp100.com,DENY`

## Merging DNS Zone Data

This example shows how to merge the TTL value = 1280 to an existing A record, bind_a.corp100.com.

`header-arecord,address*,fqdn*,ttl `

`arecord,100.0.0.1,bind_a.corp100.com,1280`
