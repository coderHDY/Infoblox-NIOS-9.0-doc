---
title: "IPv6 Fixed Address"
source: "/space/nios90/280661367"
pageId: "280661367"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-IPv6FixedAdd   ress | String | Yes |  |  | Example: IPv6FixedAddress |
| address_type | Enumeration | No |  | address_type | Valid values are ADDRESS, PREFIX, and BOTH. If no value is specified, ‘ADDRESS’   (default) is used.   Example: PREFIX |
| parent | String | Yes* | Select Network | network | This field is required when address_type is ‘PREFIX’.   Example: 2000::/16 |
| ip_address | IP address | Yes* | Address | ipv6addrss | This field is required if address_type is ‘ADDRESS’ or ‘BOTH’.   Example: 2000::5 |
| _new_ip_address | IP address | No |  |  | Add this field to overwrite the ip_address field when you select the overwrite or merge option. |
| ipv6_prefix | IPv6 address prefix | Yes* | Prefix Delegated | ipv6prefix | This field is required if address_type is ‘PREFIX’ or ‘BOTH’.   Example: 2000:1111:: |
| _new_ipv6_prefix | IPv6 address prefix | No |  |  | Add this field to overwrite the ipv6_prefix field when you select the overwrite or merge option. |
| ipv6_prefix_bits | Integer | No |  | ipv6_prefix_bits | This field is required if address_type is   ‘PREFIX’ or ‘BOTH’.   Example: 32 |
| network_view | String | No | Network View | network_view | If no view is specified, the Default view is   used. Example: Default |
| name | String | No | Name | name | Example: IPv6FixedAddr |
| comment | String | No | Comment | comment |  |
| disabled | Boolean | No | Disabled | disable | Example: FALSE |
| match_option | String | No |  | match_client | Either ‘DUID’ or 'MAC Address' is allowed.   Example: DUID |
| duid | String | Yes | DUID | duid | Example: 0001 |
| mac_address | String | No | MAC Address | mac_address | Example: 00:00:5E:00:53:00 |
| domain_name | FQDN | No | Domain Name |  | Example: ns1.corp100.com |
| domain_name_servers | IPv6 address list | No | Name Servers |  | Example: 2000::10,3000::10 |
| valid_lifetime | Unsigned integer | No | Valid Lifetime | valid_lifename | Example: 43200 |
| preferred_lifetime | Unsigned integer | No | Preferred Lifename | preferred_lifetime | Example: 604800 |
| OPTION-7 | Integer | No | Custom DHCP Options | override_options | This is an example of a DHCP option. For information, see *[Data Specific Guidelines](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)**.*   Example: ‘12’ name implies option space = ‘DHCPv6’, option code/number 7 |
| OPTION-XXXX-200 | Option information | No | Custom DHCP Options | override_options | This is an example of a DHCP option. For information, see *[Data Specific Guidelines](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)**.*   Example: ’dfdfdfd’ name implies vendor_class=’XXXX’, option code/number 200 |
| EA-Site | String | No | Extensible Attribute Site | extensible attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see *[Data Specific Guidelines](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)**.* |
| EA-XXX | String | No | Extensible   Attribute XXX   value | inheritable | EA-XXX is an example of an inheritable extensible attribute where XXX represents the attribute name. This column displays the value of an inheritable extensible attribute. For information about data format and examples, see *[Data Specific Guidelines](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)**.* |
| EAInherited-XXX | String | No | Inheritance State of an Extensible Attribute XXX | inheritable | EAInherited-XXX is an example of an inheritable extensible attribute where XXX represents the attribute name. This column displays the inheritance state of an inheritable extensible attribute. This column is displayed only if the extensible attribute is inheritable. For information about data format and examples, see *[Data Specific Guidelines](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)**.* |
| EA-Users | String | No | Extensible Attribute Users | extensible attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see *[Data Specific Guidelines](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)**.* |
| ADMGRP-JoeSmith | String | No | Permissions Admin Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see *[Data Specific Guidelines](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)**.* |

> **warning**
>
> **Note**
> 
> * Required in some cases, see detailed field description.

Examples

This section contains examples of how to create data files for IPv6 fixed addresses. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding an IPv6 Fixed Address

This example shows how to import a new IPv6 fixed address.

`header-IPv6FixedAddress,address_type,ip_address,network_view,match_option,EA-Site IPv6FixedAddress,ADDRESS,2000::5,default,DUID,USA`

## Overwriting IPv6 Fixed Address Data

This example shows how to overwrite an existing IPv6 fixed address from 2000::5 to 2000::1.

`header-IPv6FixedAddress,address_type,ip_address,_new_ip_address IPv6FixedAddress,ADDRESS,2000::5,2000::1`

## Merging IPv6 Fixed Address Data

This example shows how to merge a new comment to an existing IPv6 fixed address.

`header-IPv6FixedAddress,ip_address,comment IPv6FixedAddress,2000::1,A new comment.`

This example shows how to merge a new domain name to an existing IPv6 fixed address.

`header-IPv6FixedAddress,ip_address,domain_name IPv6FixedAddress,2000::1,ns1.corp100.com`
