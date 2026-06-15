---
title: "DHCP Fingerprint Filter"
source: "/space/nios90/280268591"
pageId: "280268591"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-DHCPFingprintFilter | String | Yes |  |  | Example: DHCPFingerprintFilter |
| name | String | Yes | Name | name | Example: HP Printers |
| _new_name | String | No |  |  | Add this field to overwrite the name field when you select the overwrite or merge option. |
| fingerprint | String | Yes | DHCP Fingerprints | fingerprint | An array of DHCP fingerprints |
| _new_fingerprint | String | No |  |  | Add this field to overwrite the fingerprint field when you select the overwrite or merge option. |
| comment | String | No | Comment | comment |  |
| EA-Site | String | No | Extensible Attribute Site | extensible_ attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for DHCP fingerprint filters. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a DHCP Fingerprint Filter

This example shows how to import a DHCP fingerprint filter.

`header-DHCPFingerprintFilter,name*,fingerprint*,comment DHCPFingerprintFilter,WindowsXP1,MSFT5.x,MSFT,Some Windows XP systems`

## Overwriting DHCP Fingerprint Filter Data

This example shows how to overwrite the filter name of an DHCP fingerprint filter.

`header-DHCPFingerprintFilter,name*,_new_name DHCPFingerprintFilter,WindowsXP1,WindowsXP5`

## Merging DHCP Fingerprint Filter Data

This example shows how to merge a comment to an DHCP fingerprint filter.

`header-DHCPFingerprintFilter,name*,comment,EA-Site DHCPFingerprintFilter,WindowsXP1,This is a comment`
