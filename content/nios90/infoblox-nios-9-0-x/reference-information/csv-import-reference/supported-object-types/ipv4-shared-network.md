---
title: "IPv4 Shared Network"
source: "/space/nios90/280268713"
pageId: "280268713"
---
| **Field**** ****Name** | **Data**** ****Type** | **Required**** ****(Yes/No)** | **Associated**** ****GUI**** ****Field** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-SharedNetwork | String | Yes |  |  | Example: SharedNetwork |
| name | String | Yes | Name | name | Example: Site Network |
| _new_name | String | No |  |  | Add this field to overwrite the name field when you select the overwrite or merge option. |
| networks | List | Yes |  |  | Example: "10.1.1.0/24,10.1.2.0/24," Note that you must first create the IPv4 networks 10.1.1.0/24 and 10.1.2.0/24 before designating them to the shared network. |
| network_view | String | No | Network View | network_view | If no view is specified, the Default view is used. Example: Default |
| is_authoritative | Boolean | No | Authoritative | authority | Example: FALSE |
| option_logic_filters | List of IPv4 logic filter rules |  | Filter Type/Action |  | Examples:    .com.infoblox.dns.dhcp_mac_filter$mac_fi lter_name,   .com.infoblox.dns.nac_filter$nac_filter_name,   .com.infoblox.dns.dhcp_option_filters$opt_filter_name |
| boot_file | String | No | Boot File | bootfile | Example: bootfile1 |
| boot_server | String | No | Boot Server | bootserver | Example: abc.corp100.com |
| comment | String | No | Comment | comment |  |
| generate_hostname | Boolean | No | Generate Hostname | ddns_generate_hostname | Example: TRUE |
| always_update_dns | Boolean | No | DNS Zones Associations | ddns_server_always_updates | Example: FALSE |
| update_static_leases | Boolean | No | Fixed Address Updates | ddns_update_fixed_address | Example: FALSE |
| update_dns_on_lease_renewal | Boolean | No | Update DNS on DHCP Lease Renewal | override_update_dns_on   _lease_renewal | Example: TRUE |
| ddns_ttl | Integer | No | DDNS Update TTL | ddns_ttl | This is an inherited field. Example: 1200 |
| enable_option81 | Boolean | No | Option 81 Support |  | ddns_use_option Example: TRUE 81 |
| deny_bootp | Boolean | No | Deny BOOTP Requests | deny_bootp | Example: FALSE |
| disabled | Boolean | No | Disable | disable | Example: FALSE |
| enable_ddns | Boolean | No | Enable DDNS Updates | enable_ddns | Example: FALSE |
| ignore_client_requested_options | Boolean | No | Ignore Optionlist | ignore_dhcp_option_list   _request | Example: TRUE |
| next_server | String | No | Next Server | nextserver | Example: blue.domain.com |
| lease_time | Unsigned integer | No | Lease Time |  | Example: 1100 |
| enable_pxe_lease_time | Boolean | No | Enable PXE time | lease | Example: FALSE |
| pxe_lease_time | Unsigned integer | No | PXE Lease Time | pxe_lease_time | Example: 1100 |
| routers | IP address list | No | routers |  | Example: "10.0.0.1,10.0.0.100" |
| domain_name | FQDN | No | Domain Name | domain_name |  |
| domain_name_servers | IP address list | No | Name Server |  | Example: "10.2.3.4,11.2.3.4" |
| OPTION-2 | Integer | No | Custom DHCP Options | options | Example: 50 |
| OPTION-1 | String[ ](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)[ ](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines) | No | Custom DHCP Options | options | This is an example of a DHCP option.  For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)*.*   Example: ‘255.0.0.0’ name implies vendor_class=’DHCP’ (default) |
| OPTION-XXXX-200 | Option information | No | Extensible Attribute Site | options | This is an example of a DHCP option. For information, see* *[*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)*.*   Example: ’dfdfdfd’ name implies vendor_class=’XXXX’, option code/number 200 |
| EA-Site | String | No | Extensible Attribute Users | extensible attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | String | No | Permissions   Admin   Group/Role | extensible attributes | extensible EA-Users is an example of a user defined |
| ADMGRP-JoeSmith | String | No | Permissions   Admin   Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for shared networks. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

# Adding an IPv4 Shared Network

This example shows how to import a new shared Network in the Default DHCP view.

`header-SharedNetwork,name*,networks*,network_view,comment,OPTION-2 SharedNetwork,Sharednetwork01,"10.0.0.0/24,20.0.0.0/24",Default,This is a comment.,128`

# Overwriting IPv4 Shared Network Data

This example shows how to overwrite a shared network with additional networks.

`header-SharedNetwork,name*,networks* SharedNetwork,Sharednetwork01,"10.0.0.0/24,20.0.0.0/24,30.0.0.0/24"`

# Merging IPv4 Shared Network Data

This example shows how to merge the extensible attribute Site and a new admin group DHCP_admins with RW permission to an IPv4 shared network.

`header-SharedNetwork,name*,networks*,EA-Site,ADMGRP-DHCP_admins SharedNetwork,Sharednetwork01,"10.0.0.0/24,20.0.0.0/24",USA,RW`
