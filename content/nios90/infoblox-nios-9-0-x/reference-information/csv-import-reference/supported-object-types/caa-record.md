---
title: "CAA Record"
source: "/space/nios90/280759461"
pageId: "280759461"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-CAARecord | String | Yes |  |  | Identifies the first row as a header row for the CAA record objects. Example: CAARecord. |
| flag | Int | Yes |  |  | Indicates critical or default CAA record.Example: 0 |
| type | String | Yes |  |  | Specifies the type of CAA record. Example: issue |
| CA | String | No |  |  | Indicates the name of the certificate authority. Example: certissues.example.com. |
| ca_details | String | No |  |  | Specifies additional details about the CA requests. Example: policy=ev |
| comment | String | No | Comment | comment |  |
| ttl | Boolean | No | TTL | ttl | This is an inherited field. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). Example: 28800 |
| fqdn | String | Yes | FQDN | name zone | This field combines the service name and the zone name to form the FQDN. Example: _http._tcp.corp100.com |
| _new_fqdn | String | No |  | zone | Add this field to overwrite the fqdn field when you select the overwrite or merge option. |
| disabled | Boolean | No | Disable | disable | Example: FALSE |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. Example: Default |
| creator | String | No |  | creator | Example: STATIC |

# Examples

This section contains examples of how to create data files for CAA records. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab. You can add new rows, update existing CAA resource record values or delete an existing CAA resource record.

## Adding a CAA Record

This example shows how to add a new CAA record.

`header-caarecord,ca_value*,_new_ca,ca_flag*,ca_tag*,fqdn*,_new_fqdn,ca_details,_new_ca_details,comment,creator,disabled,name,ttl,view`  
`caarecord,abc.com,0,default,issue,xyz.com,0,caa record,new caa record,caa record information,static,false,0,3600,default`

## Overwriting CAA Record Data

This example shows how to overwrite the following data of a CAA record. Consider an example where `ca_tag*` is `issue` as in the following example:

`header-caarecord,ca_value*,_new_ca,ca_flag*,ca_tag*,fqdn*,_new_fqdn,ca_details,_new_ca_details,comment,creator,disabled,name,ttl,view`  
`caarecord,abc.com,0,default,issue,xyz.com,0,caa record,new caa record,caa record information,static,false,0,3600,default`

Note that` ``ca_tag*` is changed from `issue` to `issuewild`:

`header-caarecord,ca_value*,_new_ca,ca_flag*,ca_tag*,fqdn*,_new_fqdn,ca_details,_new_ca_details,comment,creator,disabled,name,ttl,view`  
`caarecord,abc.com,0,default,issuewild,xyz.com,0,caa record,new caa record,caa record information,static,false,0,3600,default`
