---
title: "MAC Filter Address"
source: "/space/nios90/280268621"
pageId: "280268621"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-MacFilterAddress | String | Yes |  |  | Example: MacFilterAddress |
| parent | String | Yes | MAC address filter | filter_name | Example: MAC filter 1 |
| mac_address | MAC address | Yes | MAC address | mac_address | Example: aa:bb:cc:dd:ee:ff |
| _new_mac_address | MAC address | No |  |  | Add this field to overwrite the mac_address field when you select the overwrite or merge option. |
| is_registered_user | Boolean | No | Register as User |  | Example: TRUE |
| registered_user | String | No | Register as User |  | Example: John Doe |
| guest_first_name | String | No | Register as Guest: First Name |  | Example: John |
| guest_middle_name | String | No | Register as Guest: Middle Name |  | Example: Doe |
| guest_last_name | String | No | Register as Guest: Last Name |  | Example: Doe |
| guest_email | Email address | No | Register as Guest: Email Address |  | Example: jdoe@infoblox.com |
| guest_phone | String | No | Register as Guest: Phone Number |  | Example: 408-111-1111 |
| guest_custom_field1 | String | No | Register as Guest: Custom Field 1 |  |  |
| guest_custom_field2 | String | No | Register as Guest: Custom Field 2 |  |  |
| guest_custom_field3 | String | No | Register as Guest: Custom Field 3 |  |  |
| guest_custom_field4 | String | No | Register as Guest: Custom Field 4 |  |  |
| never_expires | Boolean | No | Never Expires |  | Example: FALSE |
| expire_time | Date/Time | No | Expires On |  | Data must be in the following format:  CCYY-MM-DDThh:mm:ss  Example: 2009-02-29T10:30:00  The timestamp must be based on UTC time. |
| comment | String | No | Comment | comment |  |
| EA-Site | String | No | Extensible Attribute   Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | String | No | Extensible Attribute   Users | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| ADMGRP-JoeSmith | String | No | Permissions Admin   Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for DHCP MAC filters. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a DHCP MAC Filter

This example shows how to import MAC filter address, aa:aa:aa:aa:aa:aa, to MacFilter01.

`header-macfilteraddress,parent*,mac_address*,is_registered_user,never_expires,comment macfilteraddress,MacFilter01,aa:aa:aa:aa:aa:aa,FALSE,TRUE,This is a comment.`

## Overwriting DHCP MAC Filter

This example shows how to overwrite a MAC filter address with an expiration time.

`header-macfilteraddress,parent*,mac_address*,never_expires,expire_time macfilteraddress,MacFilter01,aa:aa:aa:aa:aa:aa,FALSE,2010-12-30T10:30:00Z`

## Merging DHCP MAC Filter

This example shows how to merge extensible attributes Site and Users to an existing MAC filter address.

header-macfilteraddress,parent*mac_address*,EA-Site,EA-Users macfilteraddress,MacFilter01,aa:aa:aa:aa:aa:aa,USA,John Smith
