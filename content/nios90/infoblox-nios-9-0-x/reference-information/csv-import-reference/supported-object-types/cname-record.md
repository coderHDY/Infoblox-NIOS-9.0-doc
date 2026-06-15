---
title: "CNAME Record"
source: "/space/nios90/280269091"
pageId: "280269091"
---
> **warning**
>
> **Note**
> 
> IDN is supported for object types: fqdn and canonical_name. You can use punycode or IDNs while importing these objects.

| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-CnameRecord | String | Yes |  |  | Example: CnameRecord |
| fqdn | FQDN | Yes | Alias | zone | This field combines the CNAME record name and the zone name to form the FQDN. Example: c1.corp100.com |
| _new_fqdn | FQDN | No |  |  | Add this field to overwrite the fqdn field when you select the overwrite or merge option. |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. Example: Default |
| canonical_name | Domain name | Yes | Canonical Name | canonical | Example: www.corp100.com |
| comment | String | No | Comment | comment |  |
| disabled | Boolean | No | Disable | disabled | Example: FALSE |
| ttl | Unsigned integer | No | TTL | ttl | This is an inherited field. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). Example: 28800 |
| EA-Site | String | No | Extensible attribute Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| ADMGRP-JoeSmith | String | No | Permissions   Admin    Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for CNAME records. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a CNAME Record

This example shows how to add a CNAME record, bind_cname.corp100.com, to the Default DNS view.  
`header-cnamerecord,fqdn*,canonical_name*,view cnamerecord,bind_cname.corp100.com,somewhere.corp100.com,default`

## Overwriting CNAME Record Data

This example shows how to override a canonical name from somewhere.corp100.com to somewhere2.corp100.com.  
`header-cnamerecord,fqdn*,canonical_name* cnamerecord,bind_cname.corp100.com,somewhere2.corp100.com`

## Merging CNAME Record Data

This example shows how to merge the following data: admin group DNS_Admins with RW permission and extensible attribute Site = New York.  
`header-cnamerecord,fqdn*,ADMGRPDNS_Admins,EA-Site cnamerecord,bind_cname.corp100.com,RW,New York`

# DNAME Record

> **warning**
>
> **Note**
> 
> IDN is supported for object types: fqdn and target. You can use punycode or IDNs while importing these objects.



| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-DnameRecord | String | Yes |  |  | Example: DnameRecord |
| fqdn | FQDN | Yes | Alias | zone | This field combines the DNAME record name and the zone name to form the FQDN. Example: d1.corp100.com |
| _new_fqdn | FQDN | No |  |  | Add this field to overwrite the fqdn field when you select the overwrite or merge option. |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. Example: Default |
| target | Domain name | Yes | Target | target | Example: d1.foo.com |
| comment | String | No | Comment | comment |  |
| disabled | Boolean | No | Disable | disabled | Example: FALSE |
| ttl | Unsigned integer | No | TTL | ttl | This is an inherited field. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). Example: 28800 |
| EA-Site | String | No | Extensible attribute Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)[*.*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines) |
| ADMGRP-JoeSmith | String | No | Permissions   Admin   Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for DNAME records. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a DNAME Record

This example shows how to add a DNAME record, bind_dname.corp100.com, with target = bind_dname.corp200.com, extensible attribute Site = HQ, and disabled = TRUE.  
`header-dnamerecord,fqdn*,target*,disabled,EA-Site dnamerecord,bind_dname.corp100.com,bind_dname.corp200.com,TRUE,HQ`

## Overwriting DNAME Record Data

This example shows how to enable the existing DNAME record, bind_dname.corp100.com, and add admin group DNS_Admins with RO permission.  
`header-dnamerecord,fqdn*,target*,disabled,ADMGRPDNS_Admins dnamerecord,bind_dname.corp100.com,bind_dname.corp200.com,FALSE,RO`

## Merging DNAME Record Data

This example shows how to add a comment to the existing DNAME record, bind_dname.corp100.com, and change the TTL to 3860.  
`header-dnamerecord,fqdn,target*,comment,ttl dnamerecord,bind_dname.corp100.com,bind_dname.corp200.com,Add by DNS admin,3860`
