---
title: "DHCP Fingerprint"
source: "/space/nios90/280268663"
pageId: "280268663"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-DHCPFingerprint | String | Yes |  |  | Example: DHCPFingerprint |
| name | String | Yes | Name | name | Example: Samsung Android |
| new_name | String | No |  |  | Add this field to overwrite the name field when you select the overwrite or merge option. |
| type | String | No |  |  | Device type. This can be ‘Standard’ or ‘Custom.’ The default is ‘Custom.’   Example: Custom |
| comment | String | No | Comment | comment |  |
| disable | Boolean | No | Disabled | disable | Example: FALSE |
| vendor_id | String | No | Vendor ID | vendor_id | Example: MSFT 7.x |
| option_sequence | String | No | Option Number Sequence | option_sequence | DHCP options from 1 to 255 separated by commas (without spaces). Also enter the protocol (ipv4 or ipv6) at the end.   Example: "['1,3,6,7,12,15,28,40,41,42,225,226,227,22/ipv4']" |
| device_class | String | No | Device Class | device_class | Device category to which the DHCP fingerprint belongs. This is used for filtering purposes.   Example: Printers |
| protocol | String | Yes | protocol | protocol | Protocol type. This can be IPV4 or IPV6. |
| EA-Site | String | No | Extensible Attribute Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to custom DHCP fingerprints. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for DHCP fingerprints. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a Custom DHCP Fingerprint

This example shows how to import a new custom DHCP fingerprint.

`header-DHCPFingerprint,name*,protocol*,comment,disable,option_sequence`  
`DHCPFingerprint,SpecialPrinter,IPV4,Special printer for`  
`QA,FALSE,"['1,3,6,7,12,15,28,40,41,42,225,226,227,228/ipv4']"`

## Overwriting DHCP Fingerprint Data

This example shows how to overwrite an existing custom DHCP fingerprint.

`header-DHCPFingerprint,name*,new_name,comment DHCPFingerprint,SpecialPrinter,QAPrinter,Changed from Special Printer to QA Printer`

## Merging DHCP Fingerprint Data

This example shows how to merge a new comment to an existing DHCP fingerprint.

`header-DHCPFingerprint,name*,comment DHCPFingerprint,Xbox,Blocked from network`
