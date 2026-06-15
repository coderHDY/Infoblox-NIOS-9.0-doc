---
title: "Option Filter"
source: "/space/nios90/280791987"
pageId: "280791987"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-OptionFilter | String | Yes |  |  | Example: OptionFilter |
| name | String | Yes | Name | name | Example: Option Filter 1 |
| _new_name | String | No |  |  | Add this field to overwrite the name field when you select the overwrite or merge option. |
| comment | String | No | Comment | comment |  |
| expression | Option list | No | Match the following rule | expression | To include the option list in the **Matching the following rules** table in Grid Manager, ensure to enclose the expression in brackets.   Example: (option routers="1.1.1.1" AND option host-name="member.com") |
| boot_file | String | No | Boot File | boot_file | Example: bootfile1 |
| boot_server | String | No | Boot Server | boot_server | Example: abc.corp100.com |
| lease_time | Integer | No | Lease Time | lease_time | Example: 7200 |
| pxe_lease_time | Unsigned integer | No | PXE Lease Time | pxe_lease_time | Example: 1100 |
| next_server | String | No | Next Server | next_server | Example: blue.domain.com |
| option_space | String | No | Option Space | option_space | Example: Infoblox_DHCP |
| OPTION-2 | Integer | No | Custom DHCP   Options | option_list | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines).   Example: 50 |
| OPTION-1 | String | No | Custom DHCP Options | options_list | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines).   Example: ‘255.0.0.0’ name implies vendor_class=’DHCP’ (default) |
| OPTION-XXXX-200 | Option information | No | Extensible   Attribute Site | options_list | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines).   Example: ’dfdfdfd’ name implies vendor_class=’XXXX’, option code/number 200 |
| EA-Site | String | No | Extensible Attribute Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | String | No | Extensible Attribute Users | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for option filters. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding an Option Filter

This example shows how to import an option filter with boot file, boot server, and lease time.

`header-OptionFilter,name*,comment,expression,boot_file,boot_server,lease_time `  
`OptionFilter,OptionFilter01,This is a comment.,(option host-name="member.com"),bootfile01,1.2.3.4,12800`

## Overwriting Option Filter Data

This example shows how to overwrite an option filter name and boot file name.

`header-OptionFilter,name*,_new_name,boot_file `  
`OptionFilter,OptionFilter01,OptionFilter02,bootfile02`

## Merging Option Filter Data

This example shows how to merge to an option filter the PXE lease time and next server domain name.

`header-OptionFilter,name*,pxe_lease_time,next_server `  
`OptionFilter,OptionFilter02,12800,next.corp100.com`
