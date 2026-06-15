---
title: "MX Record"
source: "/space/nios90/280759520"
pageId: "280759520"
---
> **warning**
>
> **Note**
> 
> IDN is supported for object types: fqdn and mx. You can use punycode or IDNs while importing these objects.



| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-MxRecord | String | Yes |  |  | Example: MxRecord |
| fqdn | FQDN | Yes | Mail Destination | zone | This field combines the MX record name and the zone name to form the FQDN. Example: MX1.corp100.com |
| _new_fqdn | FQDN | No |  |  | Add this field to overwrite the fqdn field when you select the overwrite or merge option. |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. Example: Default |
| mx | Domain name | Yes | Mail Exchange | exchanger | Example: mailer.foo.com |
| _new_mx | Domain name | No |  |  | Add this field to overwrite the mx field when you select the overwrite or merge option. |
| priority | Unsigned integer | Yes | Preference | pref | Example: 10 |
| _new_priority | Unsigned integer | No |  |  | Add this field to overwrite the priority field when you select the overwrite or merge option. |
| comment | String | No | Comment | comment |  |
| disabled | Boolean | No | Disable | disable | Example: FALSE |
| ttl | Unsigned integer | No | TTL | ttl | This is an inherited field. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). Example: 28800 |
| EA-Site | String | No | Extensible attribute Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)[*.*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines) |
| EA-Users | String | No | Extensible attribute Country | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| ADMGRP-JoeSmith | String | No | Permissions   Admin    Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for MX records. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding an MX Record

This example shows how to add an MX record, bind_mx.corp100.com, with a mail exchanger, exchange.corp100.com and priority = 20.

`header-mxrecord,fqdn*,mx*,priority* mxrecord,bind_mx.corp100.com,exchange.corp100.com,20`

## Overwriting MX Record Data

This example shows how to overwrite an existing MX record with a new fqdn, bind_mx2.corp100.com, and a new mail exchanger, new_exchange.corp100.com.

`header-mxrecord,fqdn*,_new_fqdn,mx*,_new_mx`  
` mxrecord,bind_mx.corp100.com,bind_mx2.corp100.com,exchange.corp100.com,new_exchange.co rp100.com`

## Merging MX Record Data

This example shows how to merge data to the existing MX record, bind_mx2.corp100.com, by adding inherited TTL value and extensible attributes Site = USA.

`header-mxrecord,fqdn*,mx*,priority*,ttl,EA-Site mxrecord,bind_mx2.corp100.com,new_exchange.corp100.com,20,USA`
