---
title: "TXT Record"
source: "/space/nios90/280402020"
pageId: "280402020"
---
> **warning**
>
> ### Note
> 
> IDN is supported for object type: fqdn. You can use IDN or punycode while importing this object.



| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-TxtRecord | String | Yes |  |  | Example: TxtRecord |
| fqdn | FQDN | Yes | Name | name    zone | This field combines the record name and the zone name to form the FQDN.    Example: t1.corp100.com |
| _new_fqdn | FQDN | No |  |  | Add this field to overwrite the fqdn field when you select the overwrite or merge option. |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. Example: Default |
| text | String | Yes | Text | text | Add the text that you want to associate with the record. For more information, see [*Add TXT Record*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/ipam-task-pack/required-licenses-for-ipam-tasks/add-txt-record). |
| _new_txt | String | No |  |  | Add this field to overwrite the txt field when you select the overwrite or merge option. |
| comment | String | No | Comment | comment |  |
| disabled | Boolean | No | Disable | disable | Example: FALSE |
| ttl | Unsigned integer | No | TTL | ttl | This is an inherited field. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines).   Example: 28800 |
| EA-Site | String | No | Extensible attribute Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)[*.*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines) |
| ADMGRP-JoeSmith | String | No | Permissions    Admin   Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for TXT record data import. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a TXT Record

This example shows how to add a TXT record, bind_txt.corp100.com, with text = this is a TXT record and TTL set to 3600 seconds.  
`header-txtrecord,fqdn*,text,ttl `  
`txtrecord,bind_txt.corp100.com,"this is a TXT record",3600`

## Overwriting TXT Record Data

This example shows how to overwrite the text field of a TXT record.  
`header-txtrecord,fqdn*,text,_new_text`  
`txtrecord,bind_txt.corp100.com,"this is a TXT record","this is a new TXT record"`

## Merging TXT Record Data

This example shows how to add comment = USA and disabled = TRUE to an existing TXT record.

`header-txtrecord,fqdn*,text,comment,disabled`  
`txtrecord,bind_txt.corp100.com,"this is a TXT record",USA,TRUE`
