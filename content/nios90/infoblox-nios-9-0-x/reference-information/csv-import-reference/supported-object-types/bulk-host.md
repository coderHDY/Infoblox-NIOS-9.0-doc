---
title: "Bulk Host"
source: "/space/nios90/280759425"
pageId: "280759425"
---
| **Field**** ****Name** | **Data**** ****Type** | **Required**** ****(Yes/N0)** | **Associated**** ****GUI**** ****Field** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-BulkHost | String | Yes |  |  | Identifies the first row as a header row for the bulk host objects. Example: BulkHost |
| parentfqdn | FQDN | Yes | Name | zone | Indicates the FQDN of the zone to which bulk host will be added. |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. Example: Default |
| prefix | String | No | RFC 2317    Prefix | prefix | Prefix is used for reverse-mapping zones only. The characters must be prepended to the host in the bulk host. If you include a prefix in a forward-mapping zone, the appliance ignores the prefix. No error message is generated. |
| _new_prefix | String | No |  |  | Add this field to overwrite the prefix field when you select the **Overwrite** or **Merge** option.Use the hostname of the Grid member in this field. Example: infoblox.localdomain |
| start_address | IP address | Yes | Start | start_addr | Indicates the starting IP address. Example: 10.0.0.11 |
| _new_start_address | IP address | No |  |  | Add this field to overwrite the **start_address** field when you select the **Overwrite** or **Merge** option. Example: 10.0.0.55 |
| end_address | IP address | Yes | End | end_addr | Indicates the last IP address. Example: 10.0.0.22 |
| _new_end_address | IP address | No |  |  | Add this field to overwrite the **end_address** field when you select the **Overwrite** or **Merge** option.    Example: 10.0.0.66 |
| reverse | Boolean | No |  |  | Example: True |
| comment | String | No | Comment | comment | Example: This is a Bulk Host. |
| disabled | Boolean | No | Disable | disable | Enable or disable the bulk host. Example: FALSE |
| ttl | Unsigned integer | No | TTL | ttl | This is an inherited field. Example: 7200 |
| EA-Site | String | No | Extensible attribute | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. Example: California. |
| EA-Users | List | No | Extensible attribute | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. Example: [‘Annie’, ‘John’]. |
| ADMGRP-XXXX | String | No | Permissions Admin Group/Role | permission | ADMGRP-JimSmith is an example of an admin permission of a specific admin group.    Example: RW |

# NXDOMAIN and Blacklist Rulesets

| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-Ruleset | String | Yes |  |  | Example: Ruleset |
| name | String | Yes | Name | name | Example: ruleset1 |
| _new_name | String | No |  |  | Example: ruleset1-new |
| type | String | Yes |  | type | You can use this field for NXDOMAIN rules or blacklist rules. Valid value is NXDOMAIN or BLACKLIST.   Example: NXDOMAIN |
| disabled | Boolean | No | Disable | disabled | Example: FALSE |
| comment | String | No | Comment | comment |  |
| ADMGRP-JoeSmith | String | No | Permissions   Admin   Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for NXDOMAIN and blacklist rulesets. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding an NXDOMAIN Ruleset

This example shows how to import an NXDOMAIN ruleset.

`header-Ruleset,name*,type*,comment,disabled ruleset,NXD,NXDOMAIN,This is an NXDOMAIN ruleset,FALSE`

## Adding a Blacklist Ruleset

This example shows how to import a blacklist ruleset.

`header-Ruleset,name*,type*,disabled,comment ruleset,blacklistrule1,BLACKLIST,FALSE,This is a blackset ruleset`

## Overwriting Blacklist Ruleset Data

This example shows how to overwrite the name of a blacklist ruleset.

`header-Ruleset,name*,_new_name,type* ruleSet,blacklistrule1,blacklistrule2,BLACKLIST`

## Merging NXDOMAIN Ruleset Data

This example shows how to merge an admin permission to a NXDOMAIN ruleset.

`header-Ruleset,name*,type*,ADMGRP-JoeSmith ruleSet,NXD,NXDOMAIN,RW`
