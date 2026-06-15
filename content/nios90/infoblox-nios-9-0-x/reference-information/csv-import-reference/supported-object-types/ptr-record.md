---
title: "PTR Record"
source: "/space/nios90/280269045"
pageId: "280269045"
---
> **warning**
>
> **Note**
> 
> IDN is supported for object type: fqdn and dname. You can use punycode or IDNs while importing these objects.



| **Field**** ****Name** | **Data**** ****Type** | **Required (Yes/No)** | **Associated**** ****GUI**** ****Field** | **Associated PAPI Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-PtrRecord | String | Yes |  |  | Example: PtrRecord |
| fqdn | FQDN | No | Name | name   zone | This field is required if you do not use the address field. Either the IP address or FQDN is required. Example: 10.0.0.10.in.addr.arpa |
| _new_fqdn | Reverse FQDN | No |  |  | Add this field to overwrite the fqdn field when you use the overwrite or merge option. |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. Example: Default |
| address | IP address | No | IP Address | ipv4addrss   ipv6addrss | This field is required if you do not use the fqdn field. Either the IP address or FQDN is required. Example: 10.0.0.11   If the PTR record belongs to a forward-mapping zone, this field is empty. |
| _new_address | IP address | No |  |  | Add this field to overwrite the address field when you use the overwrite or merge option. |
| dname | FQDN | Yes | Domain Name | ptrdname | Example: ss.dd.ff |
| _new_dname | FQDN | No |  |  | Add this field to overwrite the dname field when you select the overwrite or merge option. |
| comment | String | No |  | Comment comment |  |
| disabled | Boolean | No | Disable | disable | Example: FALSE |
| ttl | Unsigned integer | No | TTL | ttl | This is an inherited field. Example: 28800 |
| EA-Site | String | No | Extensible attribute Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| ADMGRP-JoeSmith | String | No | Permissions    Admin   Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for PTR records. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a PTR Record

This example shows how to add a PTR record.

`header-ptrrecord,dname*,fqdn ptrrecord,ptr.corp100.com,1.0.0.100.in-addr.arpa`

## Overwriting PTR Record Data

This example shows how to overwrite an existing PTR record with a new FQDN, 2.0.0.100.in-addr.arpa.

`header-ptrrecord,dname*,fqdn ptrrecord,ptr.corp100.com,2.0.0.100.in-addr.arpa`

This example shows how to overwrite an existing PTR record with a new IP address, 100.0.0.3.

`header-ptrrecord,dname*,address ptrrecord,ptr.corp100.com,100.0.0.3`

## Merging PTR Record Data

This example shows how to change the DNAME of a PTR record from ptr.corp100.com to ptr2.corp100.com, and to add comment = East Asia.

`header-ptrrecord,dname*,_new_dname,comment ptrrecord,ptr.corp100.com,ptr2.corp100.com,East Asia`
