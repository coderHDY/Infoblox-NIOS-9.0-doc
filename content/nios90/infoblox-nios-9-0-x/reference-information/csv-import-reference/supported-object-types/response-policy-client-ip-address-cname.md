---
title: "Response Policy Client IP Address CNAME"
source: "/space/nios90/280268804"
pageId: "280268804"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-ResponsePolicyClientIPAddress | String | Yes |  |  | Example: ResponsePolicyClientIPAddress |
| fqdn | FQDN | Yes | Name | name | Example: 10.1.2.1.ABC.NET |
| _new_fqdn | FQDN | No |  |  | Add this field to overwrite the fqdn field when you select the overwrite or merge option. |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. |
| canonical_name | IP address | No | Canonical Name | canonical | Example: 10.1.2.1 |
| parent_zone | FQDN | No |  |  | Example: ABC.NET |
| comment | String | No | Comment | comment |  |
| disabled | Boolean | No | Disable | disable | Example: FALSE |
| ttl | Unsigned integer | No | TTL | ttl | This is an inherited field. For information, see . Example: 7200 |

# Example

This example shows how to create data files for Response Policy Client IP Address CNAME. The example uses comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

`header-ResponsePolicyClientIPAddressCname,fqdn*,canonical_name,disabled,parent_zone,vi ew`  
`ResponsePolicyClientIPAddressCname,10.1.2.1.ABC.NET,10.1.2.1,FALSE,ABC.NET,DEFAULT`
