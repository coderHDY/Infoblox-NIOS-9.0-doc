---
title: "NAPTR Record"
source: "/space/nios90/280759507"
pageId: "280759507"
---
> **warning**
>
> **Note**
> 
> IDN is supported for object types: fqdn and replacement. You can use punycode or IDNs while importing these objects.

| **Field**** ****Name** | **Data**** ****Type ** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-NaptrRecord | String | Yes |  |  | Example: NaptrRecord |
| fqdn | FQDN | Yes | Domain | name | This field combines the domain name and the zone name to form the FQDN. Example: aptr1.corp100.com |
| _new_fqdn | FQDN | No |  |  | Add this field to overwrite the fqdn field when you select the overwrite or merge option. |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. Example: Default |
| order | Unsigned integer | Yes | Order | order | Example: 10 |
| _new_order | Unsigned integer | No |  |  | Add this field to overwrite the order field when you select the overwrite or merge option. |
| preference | Unsigned integer | Yes | Preference | preference | Example: 20 |
| _new_preference | Unsigned integer | No |  |  | Add this field to overwrite the preference field when you select the overwrite or merge option. |
| flags | String | No | Flags | flags | You can leave this field empty.    Example: U |
| _new_flags | String | No |  |  | Add this field to overwrite the flags field when you select the overwrite or merge option. |
| services | String | No | Service | services | You can leave this field empty.    Example: SIP+D2U |
| _new_services | String | No |  |  | Add this field to overwrite the services field when you select the overwrite or merge option. |
| regexp | String | No | REGEX | regexp | You can leave this field empty.    Example: http://([^/:]+)!\1!i |
| _new_regexp | String | No |  |  | Add this field to overwrite the regexp field when you select the overwrite or merge option. |
| replacement | String | Yes | Replacement | replacement | Example: corp100.com |
| _new_replacement | String | No |  |  | Add this field to overwrite the replacement field when you select the overwrite or merge option. |
| comment | String | No | Comment | comment |  |
| disabled | Boolean | No | Disable | disable | Example: FALSE |
| ttl | Unsigned integer | No | TTL | ttl | This is an inherited field. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)[*.*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines) Example: 28800 |
| EA-Site | String | No | Extensible attribute Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | String | No | Extensible attribute Country | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| ADMGRP-JoeSmith | String | No | Permissions   Admin    Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for NPATR records. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a NAPTR Record

This example shows how to add a NAPTR record, bind_naptr.corp100.com, with order = 10, preference = 20, and replacement = corp200.com.  
`header-naptrrecord,fqdn*,order*,preference*,replacement* naptrrecord,bind_naptr.corp100.com,10,20,corp200.com`

## Overwriting NAPTR Record Data

This example shows how to overwrite the FQDN of an existing NAPTR record from bind_naptr.corp100.com to bind_naptr2.corp100.com.  
`header-naptrrecord,fqdn*,_new_fqdn order*,preference*,replacement* naptrrecord,bind_naptr.corp100.com,bind_naptr2.corp100.com,10,20,corp200.com`

This example shows how to override the preference of an existing NAPTR record from 20 to 25 and replacement from corp200.com to corp300.com.  
`header-naptrrecord,fqdn*,order*,preference*,_new_preference,replacement*,_new_replacem ent`  
` naptrrecord,bind_naptr.corp100.com,10 20 25,corp200.com,corp300.com`

## Merging NAPTR Record Data

This example shows how to merge Service = http+E2U and TTL = 3600 seconds to an existing NAPTR record.  
`header-naptrrecord,fqdn*,order*,preference*,replacement*,services,ttl naptrrecord,bind_naptr.corp100.com,10,25,Corp300.com,http+E2U,3600`
