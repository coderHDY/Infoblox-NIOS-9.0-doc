---
title: "Host Record"
source: "/space/nios90/241729580"
pageId: "241729580"
---
If only one IPv4 address is specified in the host record, you can add DHCP options to the host address.

> **warning**
>
> **Note**
> 
> IDN is supported for object types: fqdn and aliases. You can use punycode or IDNs while importing these objects.



| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines Method** |
| --- | --- | --- | --- | --- | --- |
| Header-HostRecord | String | Yes |  |  | Example: HostRecord |
| fqdn | FQDN | Yes | Name | name    zone | This field combines the host record name and the zone name to form the FQDN. Example: h2.corp100.com |
| _new_fqdn | FQDN | No |  |  | Add this field to overwrite the fqdn field when you select the overwrite or merge option. |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. Example: Default |
| network_view | String | No | Network View |  | If no network view is specified, the Default view is used. Example: Default |
| addresses | IP address or IP address list | No | IP Addresses | ipv4addrs | You must specify a value in this field or in the ipv6_addresses field. Example: '1.2.3.4' or  "1.2.3.4, 5.6.7.8". If there are multiple addresses in the host record, use HostAddress to specify the parameters for each address. For information, see [*IPv4 Host Address*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/supported-object-types/ipv4-host-address) and [*IPv6 Host Address*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/supported-object-types/ipv6-host-address). |
| ipv6_addresses | IP address or IP address list | No | IP Addresses | ipv6addrs | You must specify a value in this field or in the addresses field. If there are multiple addresses in the host record, use HostAddress to specify the parameters for each address. For information, see [*IPv4 Host Address*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/supported-object-types/ipv4-host-address) and [*IPv6 Host Address*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/supported-object-types/ipv6-host-address). |
| aliases | Alias list | No | Aliases | aliases | Example: www.infoblox.com |
| configure_for_dns | Boolean | No | Enable in DNS | configure_for_dns | Example: TRUE |
| _new_configure_for_dns | Boolean | No | Enable in DNS | configure_for_dns | Add this field to overwrite the configure_for_dns field when you select the overwrite or merge option. |
| comment | String | No | Comment | comment |  |
| disabled | Boolean | No | Disable | disabled | Example: FALSE |
| ttl | Unsigned integer | No | TTL | ttl | This is an inherited field. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). Example: 28800 |
| mac_address | MAC address | No | MAC Address | mac_address | This field applies to the host address. This is required if the IP address is configured for DHCP. Example: aA:Bb:c2:DD:E1:FF |
| ddns_protected | Boolean | No | Protected | ddns_protected | If the record is marked as protected, DDNS updates are  restricted to only the record. This applies to both static and dynamic records. |
| configure_for_dhcp | Boolean | No | DHCP checkbox | configure_for_dhcp | This field applies to the host address.  Example: TRUE |
| deny_bootp | Boolean | No | Deny BOOTP Requests | deny_bootp | This field applies to the host address. Example: FALSE |
| broadcast_address | String | No | Broadcast Address |  | This field applies to the host address. |
| boot_file | String | No | Boot File | boot_file | This field applies to the host address. |
| boot_server | String | No | Boot Server | boot_server | This field applies to the host address. |
| next_server | String | No | Next Server | next_server | This field applies to the host address. |
| lease_time | Unsigned integer | No | Lease Time | lease_time | This field applies to the host address. |
| pxe_lease_time_enabled | Boolean | No | Enable PXE Lease Time |  | This field applies to the host address. |
| pxe_lease_time | Unsigned integer | No | PXE Lease Time | pxe_lease_time | This field applies to the host address. |
| domain_name | FQDN | No | Domain Name | domain_name | This field applies to the host address. |
| domain_name_servers | IP list | No | Name Server |  | This field applies to the host address. Example: "5.6.7.8,1.2.3.4" |
| routers | IP list | No | Router |  | This field applies to the host address. Example: "2.0.0.2,1.2.3.4" |
| match_option | String | No |  | match_client | This field applies to the host address. Data must be in the following format: MAC_ADDRESS/RESERVED |
| ignore_dhcp_param_request_list | Boolean | No | Ignore   Optionalist | ignore-dhcp_option_list_ request | This field applies to the host address. |
| OPTION-1 | String | No | Custom DHCP    Options | options | This field applies to the host address. Example: '255.0.0.0' name implies vendor_class='DHCP' (default) |
| OPTION-XXXX-200 | Option Information | No | Custom DHCP   Options | options | This field applies to the host address. Example: 'dfdfdfd' name implies vendor_class='XXXX', optioncode/number 200 |
| EA-Site | String | No | Extensible attribute   Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| ADMGRP-JoeSmith | String | No | Permissions   Admin   Group/Role | Permissions   Admin   Group/Role | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for host records. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a Host Record

This example shows how to add a new host record, host1, in zone corp100.com and DNS view Initial.

`header-hostrecord,addresses,configure_for_dns*,fqdn*,view hostrecord,100.0.0.101,TRUE,host1.corp100.com,Inital`

This example shows how to add a new host record, host2, in zone corp100.com with aliases = www.corp100.com, comment = USA, and TTL = 3600 seconds.

`header-hostrecord,addresses,configure_for_dns*,fqdn*,aliases,comment,ttl hostrecord,100.0.0.102,TRUE,host2.corp100.com,www.corp100.com,USA,3600`

## Overwriting Host Record Data

This example shows how to overwrite the FQDN of an existing host record from host1.corp100.com to new_host1.corp100.com, and to change the TTL to 128 seconds.

`header-hostrecord,addresses,configure_for_dns*,fqdn*,_new_fqdn,ttl hostrecord,100.0.0.101,TRUE,host1.corp100.com,new_host1.corp100.com,1280`

This example shows how to overwrite the aliases of a host record from www.corp100.com to www.corp200.com and comment from USA to Japan.

`header-hostrecord,addresses*,configure_for_dns*,fqdn*,aliases,comment hostrecord,100.0.0.102,TRUE,host2.corp100.com,www.corp200.com,Japan`

Note that overwriting the host record data is not supported for non-DNS hosts.

## Merging Host Record Data

This example shows how to disable an existing host record.

`header-hostrecord,configure_for_dns*,addresses*,fqdn*,disabled hostrecord,100.0.0.101,TRUE,new_host1.corp100.com,TRUE`

This example shows how to add additional aliases to a host record.

`header-hostrecord,configure_for_dns*,addresses*,fqdn*,aliases hostrecord,100.0.0.102,TRUE,host2.corp100.com,"www.corp200.com,http.corp200.com"`
