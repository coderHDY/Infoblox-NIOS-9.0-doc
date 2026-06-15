---
title: "Response Policy IP Address"
source: "/space/nios90/280268849"
pageId: "280268849"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-ResponsePolicyIPAddress | String | Yes |  |  | Example: ResponsePolicyIPAddress |
| fqdn | FQDN | Yes | Name | name | Example: 10.1.2.3.ABC.NET |
| _new_fqdn | FQDN | No |  |  | Add this field to overwrite the fqdn field when you select the overwrite or merge option. |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. |
| canonical_name | IP address | No | Canonical Name | canonical | Example: 10.1.2.3 |
| parent_zone | FQDN | No |  |  | Example: ABC.NET |
| comment | String | No | Comment | comment |  |
| disabled | Boolean | No | Disable | disable | Example: FALSE |
| ttl | Unsigned integer | No | TTL | ttl | This is an inherited field. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). Example: 7200 |

# Example

This example shows how to create data files for Response Policy IP Address. The example uses comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

`header-ResponsePolicyIPAddress,fqdn*,canonical_name,disabled,parent_zone,view ResponsePolicyIPAddress,10.1.2.3.ABC.NET,10.1.2.3,FALSE,ABC.NET,DEFAULT`
