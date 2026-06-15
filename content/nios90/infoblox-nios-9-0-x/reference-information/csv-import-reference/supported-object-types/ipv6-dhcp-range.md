---
title: "IPv6 DHCP Range"
source: "/space/nios90/280401771"
pageId: "280401771"
---
> **warning**
>
> **Note**
> 
> This object is supported in CSV export only.



| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-IPv6DhcpRange | String | Yes |  |  | Example: IPv6DhcpRange |
| address_type | Enumeration | No |  | address_type | Valid values are ADDRESS, PREFIX, and BOTH. If no value is specified, ‘ADDRESS’   (default) is used.   Example: PREFIX |
| parent | String | No | Select Network | network | This field is required when address_type is ‘PREFIX’.   Example: 2000::/16 |
| start_address | IP address | No | Address Start | start_addr | This field is required if address_type is ‘ADDRESS’ or ‘BOTH’.   Example: 2000::1 |
| _new_start_address | IP address | No |  |  | Add this field to overwrite the start_address field when you select the overwrite or merge option. |
| end_address | IP address | No | Address End | end_addr | This field is required if address_type is ‘ADDRESS’ or ‘BOTH’.   Example: 2000::1 |
| _new_end_address | IP address | No |  |  | Add this field to overwrite the end_address field when you select the overwrite or merge option. |
| ipv6_start_prefix | IPv6 address prefix | No | Prefix Delegated Start | ipv6_start_prefix | This field is required if address_type is ‘PREFIX’ or ‘BOTH’.   Example: 2000:1111:: |
| _new_ipv6_start_prefix | IPv6 address prefix | No |  |  | Add this field to overwrite the ipv6_start_address field when you select the overwrite or merge option. |
| ipv6_end_prefix | IPv6 address prefix | No | Prefix Delegated End | ipv6_end_prefix | This field is required if address_type is ‘PREFIX’ or ‘BOTH’.   Example: 2000:1111:: |
| _new_ipv6_end_prefix | IPv6 address prefix | No |  |  | Add this field to overwrite the ipv6_end_address field when you select the overwrite or merge option. |
| ipb6_prefix_bits | Integer | No |  | ipv6_prefix_bits | This field is required if address_type is   ‘PREFIX’ or ‘BOTH’.   Example: 32 |
| network_view | String | No | Network View | network_view | If no view is specified, the Default view is   used. Example: Default |
| name | String | No | Name | name |  |
| comment | String | No | Comment | comment | Example: This is an IPv6 DHCP range. |
| disabled | Boolean | No | Disabled | disable | Example: FALSE |
| member | Grid member | No | Grid Member | member | Example: member.infoblox.com |
| server_association_type | String | No |  | server_association_type | Valid values are MEMBER and NONE. If no value is specified, None (default) is used. |
| exclusion_ranges | IP address range | No | Exclusion Ranges | exclude | This field indicates the start to end address range. You can also include a comment. The valid format is: start address-end address/comment. Example: “2000::1-2000::5/’The range for printers’” |
| recycle_leases | Boolean | No | Lease Deletion | recycle_leases | This field is set to TRUE by default. Ensure that you use the overwrite option if you want to change the value to FALSE. Merging data from an import preserves the default value. |
| EA-Site | String | No | Extensible Attribute Site | extensible attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-XXX | String | No | Extensible   Attribute XXX   value | inheritable | EA-XXX is an example of an inheritable extensible attribute where XXX represents the attribute name. This column displays the value of an inheritable extensible attribute. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EAInherited-XXX | String | No | Inheritance State of an Extensible Attribute XXX | inheritable | EAInherited-XXX is an example of an inheritable extensible attribute where XXX represents the attribute name. This column displays the inheritance state of an inheritable extensible attribute. This column is displayed only if the extensible attribute is inheritable. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | String | No | Extensible Attribute Users | extensible attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| ADMGRP-JoeSmith | String | No | Permissions Admin Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
