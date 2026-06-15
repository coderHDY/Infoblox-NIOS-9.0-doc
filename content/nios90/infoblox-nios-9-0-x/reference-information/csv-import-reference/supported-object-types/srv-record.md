---
title: "SRV Record"
source: "/space/nios90/280401997"
pageId: "280401997"
---
> **warning**
>
> **Note**
> 
> IDN is supported for object types: fqdn and target. You can use punycode or IDNs while importing these objects.

| **Field**** ****Name** | **Data**** ****Type ** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-SrvRecord | String | Yes |  |  | Example: SrvRecord |
| fqdn | FQDN | Yes | Service | name | This field combines the service name and the zone zone name to form the FQDN. Example: *[_http._tcp.corp100.com](#)* |
| _new_fqdn | FQDN | No |  |  | Add this field to overwrite the fqdn field when you select the overwrite or merge option. |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. Example: Default priority |
| priority | Unsigned integer | Yes | Priority | priority | Example: 10 |
| _new_priority | Unsigned integer | No |  |  | Add this field to overwrite the priority field when you select the overwrite or merge option. |
| weight | Unsigned integer | Yes | Weight | weight | Example: 20 |
| _new_weight | Unsigned integer | No |  |  | Add this field to overwrite the weight field when you select the overwrite or merge option. |
| port | Unsigned integer | Yes | Port | port | Example: 80 |
| _new_port | Unsigned integer | No |  |  | Add this field to overwrite the port field when you select the overwrite or merge option. |
| target | Domain name | Yes | Target | target | Example: foo.test.com |
| _new_target | Domain name | No |  |  | Add this field to overwrite the target field when you select the overwrite or merge option. |
| comment | String | No | Comment | comment |  |
| disabled | Boolean | No | Disable |  | disable Example: FALSE |
| ttl | Unsigned integer | No | TTL | ttl | This is an inherited field. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). Example: 28800 |
| EA-Site | String | No | Extensible attribute Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| ADMGRP-JoeSmith | String | No | Permissions   Admin   Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for SRV records. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a SRV Record

This example shows how to add a new SRV record.  
`header-srvrecord,fqdn*,port*,priority*,target*,weight* srvrecord,bind_srv.corp100.com,80,10,srv.corp100.com,20`

## Overwriting SRV Record Data

This example shows how to overwrite the following data of a SRV record: port from 80 to 88 and priority from 10 to 20.  
`header-srvrecord,fqdn*,port*,_new_port,priority*,_new_priority,target*,weight* srvrecord,bind_srv.corp100.com,80,88,10,20,srv.corp100.com,20`

This example shows how to overwrite the following data of a SRV record: target from srv.corp100.com to srv2corp100.com and weight from 20 to 30.  
`header-srvrecord,fqdn*,port*,priority*,target*,_new_target,weight*,_new_weight srvrecord,bind_srv.corp100.com,88,20,srv.corp100.com,sv2.corp100.com,20,30`

## Merging SRV Record Data

This example shows how to merge the following data to a SRV record: comment = USA and disabled = TRUE.  
`header-srvrecord,fqdn*,port*,priority*,target*,weight*,comment,disabled srvrecord,bind_srv.corp100.com,80,10,srv.corp100.com,20,USA,TRUE`
