---
title: "IPv4 DHCP Range"
source: "/space/nios90/280759200"
pageId: "280759200"
---
| **Field**** ****Name** | **Data**** ****Type** | **Required (Yes/No)** | **Associated **   **GUI Field** | **Associated PAPI Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-DhcpRange | String | Yes |  |  | Example: DhcpRange |
| start_address | IP address | Yes | Start |  | start_addr Example: 10.0.0.11 |
| _new_start_address | IP address | No |  |  | Add this field to overwrite the start_address field when you select the overwrite or merge option. Example: 10.0.0.55 |
| end_address | IP address | Yes | End | end_addr | Example: 10.0.0.22 |
| _new_end_address | IP address | No |  |  | Add this field to overwrite the end_address field when you select the overwrite or merge option. Example: 10.0.0.66 |
| network_view | String | No | Network View | network_view | If no view is specified, the Default view is used. Example: Default |
| name | String | No | Name | name |  |
| comment | String | No | Comment | comment |  |
| is_authoritative | Boolean | No | Authoritative | authority | Example: FALSE |
| boot_file | String | No | Boot File | bootfile | Example: bootfile1 |
| boot_server | String | No | Boot Server | bootserver | Example: abc.corp100.com |
| ddns_domainname | String | No | DDNS Domain  Name | ddns_domainname | Example: ddns.corp100.com |
| generate_hostname | Boolean | No | Generate Hostname | ddns_generate_hostname | Example: TRUE |
| deny_all_clients | Boolean | No |  | deny_all_clients | Example: FALSE |
| deny_bootp | Boolean | No | Deny BOOTP Requests | deny_bootp | Example: FALSE |
| disabled | Boolean | No | Disabled | disable | Example: FALSE |
| domain_name_servers | IP address list | No | Name Servers |  | Example: "10.2.3.4,11.2.3.4," |
| enable_ddns | Boolean | No | Enable DDNS Updates | enable_ddns | Example: FALSE |
| enable_thresholds | Boolean | No | Enable DHCP Thresholds | enable_dhcp_thresholds | When you set this field to TRUE, you must enter values in the range_high_water_mark and range_low_water_mark fields. You cannot leave those fields empty. Otherwise, the appliance generates an error. |
| enable_threshold_ email_ warnings | Boolean | No | Enable Email Warnings | enable_email_warnings | When you use the merge function, the appliance preserves the existing value in this field. When you use the overwrite function, you must include a value (TRUE or FALSE). Otherwise, the appliance generates an error.    Example: TRUE |
| enable_threshold_ snmp_ warnings | Boolean | No | Enable SNMP Warnings | enable_snmp_ warnings | When you use the merge function, the appliance preserves the existing value in this field. When you use the overwrite function, you must include a value (TRUE or FALSE). Otherwise, the appliance generates an error.    Example: TRUE |
| threshold_email_ addresses | email address list | No | Email Addresses |  | Example: "'admin1@infoblox.com','admin2@somew here.com'" |
| range_high_water_ mark | Integer | No | High Water Mark | high_water_mark | When you set enable_thresholds to TRUE, you must enter values in this field and in the range_low_water_mark field. You cannot leave these fields empty.    Otherwise, the appliance generates an error. Example: 80 |
| ignore_client_requested_options | Boolean | No | Ignore Optionlist | ignore_dhcp_option   _list_request | Example: TRUE |
| range_low_water_mark | Integer | No | Low Water Mark | low_water_mark | When you set enable_thresholds to TRUE, you must enter values in this field and in the range_high_water_mark field. You cannot leave these fields empty.    Otherwise, the appliance generates an error. Example: 10 |
|  |  |  |  |  |  |
| next_server | String | No | Next Server | nextserver | Example: blue.domain.com |
| lease_time | Unsigned integer | No | Lease Time |  | Example: 1100 |
| enable_pxe_lease_ time | Boolean | No | Enable PXE lease time |  | Example: FALSE |
| pxe_lease_time | Unsigned integer | No | PXE Lease Time | pxe_lease_time | Example: 1100 |
| unknown_clients_ option | String | No | Unknown Clients drop-down | unknown_client_ option | Example: Allow |
| known_clients_option | String | No | Known Clients drop-down | known_clients_ option | Example: Deny |
| recycle_leases | Boolean | No | Lease Deletion | recycle_leases | This field is set to TRUE by default. Ensure that you use the overwrite option if you want to change the value to FALSE. Merging data from an import preserves the default value. |
| update_dns_on_ lease_renewal | Boolean | No | Update DNS on DHCP Lease Renewal | override_update_ dns_on_lease_ renewal | Example: TRUE |
| always_update_dns | Boolean | No | DNS Zones Associations | always_update_ dns | Example: FALSE |
| exclusion_ranges | IP address range | No | Exclusion Ranges | exclude | This field indicates the start to end address range. You can also include a comment. The valid format is start address-end address/comment. Example: “10.1.0.200-10.1.0.254/’The range for printers’,10.2.3.3-10.2.3.30/” |
| member | Grid member | No | Served by Grid Member | member | Example: member.infoblox.com |
| server_association_ type | Sting | No |  |  | Valid values are MEMBER, NONE, and   FAILOVER |
| failover_association | Sting | No | Served by   Failover   Association | failover_assoc |  |
| broadcast_address | IP address | No | Broadcast Address |  | Example: 10.0.0.1 |
| routers | IP address list | No | Routers |  | Example: "10.0.0.1,10.0.0.100," |
| domain_name | FQDN | No | Domain Name | domain_name |  |
| option_logic_filters | List of IPv4 logic filter rules |  | Filter Type/Action |  | Examples:   com.infoblox.dns.dhcp_mac_filter$mac_filter_name,   .com.infoblox.dns.nac_filter$nac_filter_name,   .com.infoblox.dns.dhcp_option_filters$opt_filter_name |
| OPTION-2 | Integer | No | Custom DHCP Options | options | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). Example: 50 |
| OPTION-1 | String | No | Custom DHCP Options | options | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). Example: '255.0.0.0' name implies vendor_class='DHCP' (default) |
| OPTION-XXXX-200 | Option information | No | Custom DHCP Options | options | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). Example: 'dfdfdfd' name implies vendor_class='XXXX', option code/number 200 |
| EA-Site | String | No | Extensible Attribute Site | extensible attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-XXX | String | No | Extensible Attribute XXX value | inheritable | EA-XXX is an example of an inheritable extensible attribute where XXX represents the attribute name. This column displays the value of an inheritable extensible attribute. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EAInherited-XXX | String | No | Inheritance State of an Extensible Attribute XXX | inheritable | EAInherited-XXX is an example of an inheritable extensible attribute where XXX represents the attribute name. This column displays the inheritance state of an inheritable extensible attribute. This column is displayed only if the extensible attribute is inheritable. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | String | No | Extensible Attribute Users | extensible attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| ADMGRP-JoeSmith | String | No | Permissions Admin   Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for DHCP ranges. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a DHCP Range

This example shows how to import a new DHCP range, Range01, with starting IP of 100.0.0.1 and ending IP 100.0.0.254. The range is assigned to a member, master.corp100.com.

`header-DhcpRange,start_address*,end_address*,name,comment,member DhcpRange,100.0.0.1,100.0.0.254,Range01,This is a comment.,master.corp100.com`

## Overwriting DHCP Range Data

This example shows how to overwrite the starting address and the name of an existing DHCP range.

header-DhcpRange,start_address*,_new_start_address,end_address*,name DhcpRange,100.0.0.100,100.0.0.150,100.0.0.254,Range02

## Merging DHCP Range Data

This example shows how to merge an exclusion range 100.0.0.100 to 100.0.0.110 to an existing DHCP range, and to replace a member assignment with a failover association, Failover01.

`header-DhcpRange,start_address*,end_address*,exclusion_ranges,failover_association DhcpRange,100.0.0.100,100.0.0.254,100.0.0.100-100.0.0.110,Fileaover01`
