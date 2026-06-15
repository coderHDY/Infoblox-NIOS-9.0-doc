---
title: "IPv6 Shared Network"
source: "/space/nios90/280401793"
pageId: "280401793"
---
> **warning**
>
> **Note**
> 
> This object is supported in CSV export only.

| **Field**** ****Name** | **Data**** ****Type** | **Required**** ****(Yes/No)** | **Associated**** ****GUI**** ****Field** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-IPv6SharedNet   work | String | Yes |  |  | Example: IPv6SharedNetwork |
| name | String | Yes | Name | name | Example: IPv6Shared01 |
| _new_name | String | No |  |  | Add this field to overwrite the name field when you select the overwrite or merge option. |
| networks | List | Yes |  |  | Example: “2000::/64,3000::/64".    Note that you must first create the IPv6 networks 2000::/64 and 3000::/64 before designating them to the shared network. |
| network_view | String | No | Network View | network_view | If no view is specified, the Default view is used. Example: Default |
| comment | String | No | Comment | comment |  |
| disabled | Boolean | No | Disabled | disable | Example: FALSE |
| domain_name | String | No | Domain Name |  | Example: testdomain.com |
| domain_name_servers | IP address list | No | Name Server |  | Example: “2000::10,3000::10” |
| valid_lifetime | Integer | No | Valid Lifetime | valid_lifetime | Example: 43200 |
| Preferred_lifetime | Integer | No | Preferred Lifetime | preferred_lifetime | Example: 604800 |
| enable_ddns | Boolean | No | Enable DDNS Updates | enable_ddns | Example: TRUE |
| always_update_dns | Boolean | No | DNS Zones Associations | ddns_server_always_updates | Example: TRUE |
| ddns_domain_name | String | No | DDNS Domain Name | ddns_domainname | Example: DDNSdomain |
| ddns_ttl | Integer | No | DDNS Update TTL | override_ddns_ttl | This is an inherited field.   Example: 1200 |
| generate_hostname | Boolean | No | Generate Hostname | ddns_generate_hostname | Example: Example: FALSE TRUE |
| update_dns_on_lease_renewal | Boolean | No | Update DNS on DHCP Lease Renewal | override_update_dns_on   _lease_renewal | Example: TRUE |
| OPTION-7 | Integer | No | Custom DHCP Options | override_options | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). Example: ‘12’ name implies option space = ‘DHCPv6’, option code/number 7 |
| OPTION-XXXX-200 | Option information | No | Custom DHCP   Options | override_options | This is an example of a DHCP option. For information, see* *[*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines)*.*   Example: ’dfdfdfd’ name implies vendor_class=’XXXX’, option code/number 200 |
| EA-Site | String | No | Extensible Attribute Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | String | No | Extensible   attribute Users | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| ADMGRP-JoeSmith | String | No | Permissions   Admin   Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
