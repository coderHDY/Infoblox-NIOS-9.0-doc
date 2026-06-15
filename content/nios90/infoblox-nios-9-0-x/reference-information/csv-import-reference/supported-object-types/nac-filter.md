---
title: "NAC Filter"
source: "/space/nios90/280401715"
pageId: "280401715"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-NACFilter | String | Yes |  |  | Example: NACFilter |
| name | String | Yes | Name | name | Example: NAC Filter |
| _new_name | String | No |  |  | Add this field to overwrite the name field when you select the overwrite or merge option. |
| comment | String | No | Comment | comment |  |
| expression | Option list | No | Match the following rule | expression | To include the option list in the **Matching the following rules** table in Grid Manager, you must enclose the expression in brackets.   Example: (Sophos.ComplianceState="Compliant" AND RADIUS.ServerError="TRUE") |
| EA-Site | String | No | Extensible Attribute Site | extensible_ attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | String | No | Extensible Attribute Users | extensible_ attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for NAC filters. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a NAC Filter

This example shows how to import a new NAC filter.

`header-NacFilter,name*,comment,expression,EA-Site NacFilter,nacfilter01,This is a comment.,option ServerError="true",USA`

## Overwriting NAC Filter Data

This example shows how to overwrite the name and comment of an existing NAC filter.

`header-NacFilter,name*,_new_name,comment NacFilter,nacfilter01,nacfilter02,This is a new comment.`

## Merging NAC Filter Data

This example shows how to merge the extensible attribute Users to an existing NAC filter.

`header-NacFilter,name*,EA-Users NacFilter,nacfilter02,John Smith`
