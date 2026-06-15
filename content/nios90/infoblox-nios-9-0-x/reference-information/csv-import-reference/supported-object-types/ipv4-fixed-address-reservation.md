---
title: "IPv4 Fixed Address/Reservation"
source: "/space/nios90/280268686"
pageId: "280268686"
---
> **warning**
>
> **Note**
> 
> You can use the fixed address header to import reservations. When you import a reservation, you must specify 00:00:00:00:00:00 in the mac_address field.

| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-FixedAddress | String | Yes |  |  | Example: FixedAddress |
| ip_address | IP address | Yes | IP Address | ipv4addrss | Example: 10.0.0.11 |
| ms_Server | IP address | Yes |  |  | Example: 100.102.30.180 |
| _new_ip_address | IP address | No |  |  | Add this field to overwrite the ip_address field when you use the overwrite or merge option. |
| network_view | String | No | Network View | network_view | If no view is specified, the Default view is used. Example: Default |
| name | String | No | Name | name |  |
| always_update_dns | Boolean | No | DNS Zones Associations | always_update_ dns | Example: FALSE |
| option_logic_filters | List of IPv4 logic filter rules | No | Filter Type/Action |  | Examples:   .com.infoblox.dns.dhcp_mac_filter$mac_filter_name,   .com.infoblox.dns.nac_filter$nac_filter_name,   .com.infoblox.dns.dhcp_option_filters$opt_filter_name |
| boot_file | String | No | Boot File | bootfile | Example: bootfile1 |
| boot_server | String | No | Boot Server | bootserver | Example: abc.corp100.com |
| prepared_zero | Boolean | No |  |  | Example: FALSE |
| comment | String | No | Comment | comment |  |
| ddns_domainname | String | No | DDNS Domain Name | ddns_domainname | Example: ddns.corp100.com |
| deny_bootp | Boolean | No | Deny BOOTP Requests | deny_bootp | Example: FALSE |
| broadcast_address | IP address list | No | Broadcast Address |  | Example: 10.0.0.1 |
| routers | IP address list | No | Routers |  | Example:  "10.0.0.1,10.0.0.100," |
| domain_name | FQDN | No | Domain Name |  |  |
| domain_name_ servers | IP address list | No | Name Servers |  | Example: "10.2.3.4,11.2.3.4," |
| dhcp_client_ identifier | String | No | Client Identifier | dhcp_client_ identifier |  |
| disabled | Boolean | No | Disabled | disable | Example: FALSE |
| enable_ddns | Boolean | No | Enable DDNS Updates |  | Example: FALSE |
| ignore_client_ requested_ options | Boolean | No | Ignore Optionlist | ignore_dhcp_ option_list_request | Example: TRUE |
| circuit_id | String | No |  | agent_circuit_id | This field is required when match_option = CIRCUIT_ID.      Example: 11 |
| remote_id | String | No |  | agent_remote_id | This field is required when match_option = REMOTE_ID.      Example: xyz |
| mac_address | MAC address | No      Yes for reservation | MAC Address | mac | This field is required if match_option = MAC_ADDRESS, or if you are importing a reservation. For reservations, you must enter 00:00:00:00:00:00 in this field.      Example: aa:bb:cc:dd:ee:ff |
| match_option | String | No |  | match_client | Data must be in the following format:   ['MAC_ADDRESS','CLIENT_ID','CIRCUIT_ID','REMOTE_ID'] |
| next_server | String | No | Next Server | nextserver | Example: blue.domain.com |
| lease_time | Unsigned integer | No | Lease Time |  | Example: 1100 |
| enable_pxe_lease_ time | Boolean | No | Enable PXE lease time |  | Example: FALSE |
| ddns_hostname | String | No |  | ddns_hostname | Example: host1.test.com |
| pxe_lease_time | Unsigned integer | No | PXE Lease Time | pxe_lease_time | Example: 1100 |
| OPTION-2 | Integer | No | Custom DHCP Options | options | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines).    Example: 50 |
| OPTION-1 | String | No | Custom DHCP Options | options | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines).    Example: ‘255.0.0.0’ name implies vendor_class=’DHCP’ (default) |
| OPTION-XXXX-200 | Option information | No | Custom DHCP Options | options | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines).    Example: ’dfdfdfd’ name implies vendor_class=’XXXX’, option code/number 200 |
| EA-Site | String | No | Extensible Attribute Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-XXX | String | No | Extensible Attribute   XXX   value | inheritable | EA-XXX is an example of an inheritable extensible attribute where XXX represents the attribute name. This column displays the value of an inheritable extensible attribute. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EAInherited-XXX | String | No | Inheritance State of   an Extensible   Attribute XXX | inheritable | EAInherited-XXX is an example of an inheritable extensible attribute where XXX represents the attribute name. This column displays the inheritance state of an inheritable extensible attribute. This column is displayed only if the extensible attribute is inheritable. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | String | No | Extensible Attribute User | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| ADMGRP-JoeSmith | String | No | Permissions Admin Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for IPv4 fixed addresses. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding an IPv4 Fixed Address

This example shows how to import a new IPv4 fixed address.

`header-fixedaddress,ip_address*,network_view,mac_address*,match_option,ms_server, remote_id,EA-Sitefixedaddress,100.0.0.1,Default,aa:aa:aa:aa:aa:aa,Remote_ID,xyz,USA`

To import MS sync data, specify ms_server field in the CSV format.

`header-fixedaddress,ip_address*,ms_Server,EA-Location fixedaddress,100.0.0.1,100.102.30.180,location-1`

## Overwriting IPv4 Fixed Address Data

This example shows how to overwrite the MAC address of an existing IPv4 fixed address from aa:aa:aa:aa:aa:aa to bb:aa:aa:aa:aa:aa.

`header-fixedaddress,ip_address*,mac_address* FixedAddress,100.0.0.1,bb:aa:aa:aa:aa:aa`

This example shows how to overwrite the address of an existing IPv4 fixed address from 100.0.0.1 to 100.0.0.10.

`header-fixedaddress,ip_address*,_new_ip_address,mac_address* FixedAddress,100.0.0.1,100.0.0.10,bb:aa:aa:aa:aa:aa`

## Merging IPv4 Fixed Address Data

This example shows how to merge a new comment to an existing IPv4 fixed address.

`header-fixedaddress,ip_address,mac_address*,comment FixedAddress,100.0.0.10,bb:aa:aa:aa:aa:aa,A new comment here.`

This example shows how to merge new routers addresses and the domain name to an existing IPv4 fixed address.

`header-fixedaddress,ip_address*,mac_address*,routers,domain_name fixedaddress,100.0.0.10,bb:aa:aa:aa:aa:aa,"2.2.2.2,4.4.4.4",ns1.corp100.com`

## Adding an IPv4 Reservation

This example shows how to import a new IPv4 reservation.

`header-fixedaddress,ip_address*,network_view,mac_address*,EA-Site fixedaddress,100.0.0.1,Default,00:00:00:00:00:00,USA`
