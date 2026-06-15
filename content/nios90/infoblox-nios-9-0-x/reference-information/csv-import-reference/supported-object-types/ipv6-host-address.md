---
title: "IPv6 Host Address"
source: "/space/nios90/280268973"
pageId: "280268973"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-IPv6HostAddress | String | Yes |  |  | Example: IPv6hostaddress |
| view | String | No | DNS View | view | If no view is specified, the Default view is used. Example: Default |
| network_view | String | No | Network View | network_view | If no network view is specified, the Default view is used. Example: Default |
| parent | FQDN | Yes |  |  | Example: h1.corp100.com |
| address_type | Enumeration | No |  | address_type | Valid values are ADDRESS, PREFIX, or BOTH. If no value is specified, 'ADDRESS' (default) is used. Example: PREFIX |
| address | IPv6 address | Yes | IPv6 Address | ipv6addrs | Example: 1001::001 |
| _new_address | IPv6 address | No |  |  | Add this field to overwrite the address field when you select the overwrite or merge option. |
| ipv6_prefix | IPv6 prefix | No |  | ipv6prefix | This field is required if address_type is ‘ADDRESS’ or ‘BOTH’.   Example: 2000:1111:: |
| _new_ipv6_prefix | IPv6 prefix | No |  |  | Add this field to overwrite the ipv6_prefix field   when you select the overwrite or merge   option. |
| ipv6_prefix_bits | Integer | No |  | IPv6_prefix_bits | This field is required if address_type is ‘ADDRESS’ or ‘BOTH’.   Example: 32 |
| configure_for_dhcp | Boolean | No | DHCP checkbox | configure_for_dhcp | Example: TRUE |
| configure_for_dns | Boolean | No | Enable in DNS | configure for dns | This field is used to specify the parent host record. If not value is specified, TRUE is used.   Example: TRUE |
| match_option | String | No |  | match_client | Only ‘DUID’ is allowed. Example: DUID |
| duid | String | No | DUID | duid | Example: 0001 |
| domain_name | FQDN | No | Domain Name |  |  |
| domain_name_servers | IPv6 address list | No | Name Server |  | Example: ‘2000::10,3000::10’ |
| valid_lifetime | Unsigned integer | No | Valid Lifetime | valid_lifetime | Example: 43200 |
| preferred_lifetime | Unsigned integer | No | Preferred Lifetime | preferred_lifetime | Example: 604800 |
| OPTION-7 | Integer | No | Custom DHCP   Options | override_options | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines).   Example: ‘12’ name implies option space = ‘DHCPv6’, option code/number 7 |
| OPTION-XXXX-200 | Option information | No | Custom DHCP   Options | override_options | This is an example of a DHCP option. For information, see .   Example: ’dfdfdfd’ name implies vendor_class=’XXXX’, option code/number 200 |

# Examples

This section contains examples of how to create data files for IPv6 host addresses. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding an IPv6 Host Address

This example shows how to import an IPv6 host address to a host record in the Default DNS view.

header-IPv6hostaddress,parent*,address*,view IPv6hostaddress,h1.corp100.com,1001::001,Default

## Overwriting IPv6 Host Address Data

This example shows how to overwrite an IPv6 host address.

`header-IPv6hostaddress,parent*,address*,_new_address IPv6hostaddress,h1.corp100.com,1001::001,2000::10`

## Merging IPv6 Host Address Data

This example shows how to merge a DUID to an IPv6 host address.

header-IPv6hostaddress,parent*,address*,duid IPv6hostaddress,h1.corp100.com,2000::10,0001
