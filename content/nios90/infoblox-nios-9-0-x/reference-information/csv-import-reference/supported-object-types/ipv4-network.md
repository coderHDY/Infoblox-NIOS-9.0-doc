---
title: "IPv4 Network"
source: "/space/nios90/179438566"
pageId: "179438566"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-Network | String | Yes |  |  | Example: Network |
| rir_organization | String | No | Organization Name | rir_organization | Use this only when the network is associated with an RIR organization.   Example: corp100 |
| rir_registration_status | String | No | Registration Status | rir_registration_status | Use this only when this is an RIR network.   Example: Registered |
| address | IP address | Yes | Address | network | Example: 10.0.0.11 |
| netmask | Netmask | Yes | Netmask |  | Example: 255.255.0.0 |
| network_view | String | No | Network View | network_view | If no view is specified, the Default view is used. Example: Default |
| enable_discovery | Boolean | Yes | Enable Discovery | enable_discovery | If this field is set to TRUE, the discovery_member must also be defined. |
| discovery_member | String | Yes | Discovery Member | discovery_member | Required if discovery is enabled for the network. |
| discovery_exclusion_range | IP Prefix | No | Network Editor → Discovery Exclusions | discovery_exclusion_range | List of IP ranges to be excluded from the discovery process. |
| comment | String | No | Comment | comment |  |
| auto_create_reversezone | Boolean | No | Automatically create reverse mapping zone | auto_create_reversezone | Example: TRUE |
| is_authoritative | Boolean | No | Authoritative | authority | Example: FALSE |
| option_logic_filters | List of IPv4 logic filter rules | No | Filter Type/Action |  | Examples:   .com.infoblox.dns.dhcp_mac_filter$mac_filter_name,   .com.infoblox.dns.nac_filter$nac_filter_name,   .com.infoblox.dns.dhcp_option_filters$opt_filter_name |
| boot_file | String | No | Boot File | bootfile | Example: bootfile1 |
| boot_server | String | No | Boot Server | bootserver | Example: abc.corp100.com |
| ddns_domainname | String | No | DDNS Domain Name | ddns_domainname | Example: ddns.corp100.com |
| generate_hostname | Boolean | No | Generate Hostname | generate_hostname | When you set this to **True,** DHCP server will generate a hostname for DNS updates if not sent by client. Example: TRUE |
| always_update_dns | Boolean | No | DNS Zones Associations | ddns_server_always_updates | Example: FALSE |
| update_static_leases | Boolean | No | Fixed Address Updates | ddns_update_fixed_address | Example: FALSE |
| update_dns_on_lease   _renewal | Boolean | No | Update DNS on DHCP Lease Renewal | override_update_dns_on   _lease_renewal | Example: TRUE |
| ddns_ttl | Unsigned integer | No | DDNS Update TTL | ddns_ttl | This is an inherited field. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines).   Example: 1200 |
| enable_option81 | Boolean | No | Option 81 Support | ddns_use_option81 | Example: TRUE |
| deny_bootp | Boolean | No | Deny BOOTP Requests | deny_bootp | Example: FALSE |
| broadcast_address | String | No | Broadcast Address |  |  |
| disabled | Boolean | No | Disabled | disable | Example: FALSE |
| enable_ddns | Boolean | No | Enable DDNS Updates | enable_ddns | Example: FALSE |
| enable_thresholds | Boolean | No | Enable DHCP Thresholds | enable_dhcp_thresholds | When you set this field to TRUE, you must enter values in the range_high_water_mark and range_low_water_mark fields. You cannot leave those fields empty. Otherwise, the appliance generates an error. |
| enable_threshold_email_ warnings | Boolean | No | Enable Email Warnings | enable_email_warnings | When you use the merge function, the appliance preserves the existing value in this field. When you use the overwrite function, you must include a value (TRUE or FALSE). Otherwise, the appliance generates an error.   Example: TRUE |
| enable_threshold_snmp   _warnings | Boolean | No | Enable SNMP Warnings | enable_snmp_warnings | When you use the merge function, the appliance preserves the existing value in this field. When you use the overwrite function, you must include a value (TRUE or FALSE). Otherwise, the appliance generates an error.   Example: TRUE |
| range_high_water_mark | Integer | No | High Water Mark | high_water_mark | When you set enable_thresholds to TRUE, you must enter values in this field and in the range_low_water_mark field. You cannot leave these fields empty. Otherwise, the appliance generates an error.   Example: 80 |
| ignore_client_requested   _ options | Boolean | No | Ignore Optionlist | ignore_dhcp_option_list_request | Example: TRUE |
| range_low_water_mark | Integer | No | Low Water Mark | low_water_mark | When you set enable_thresholds to TRUE, you must enter values in this field and in the range_high_water_mark field. You cannot leave these fields empty. Otherwise, the appliance generates an error.   Example: 10 |
| next_server | String | No | Next Server | nextserver | Example: blue.domain.com |
| lease_time | Unsigned integer | No | Lease Time |  | Example: 1100 |
| enable_pxe_lease_time | Boolean | No | Enable PXE lease time |  | Example: FALSE |
| pxe_lease_time | Unsigned integer | No | PXE Lease Time | pxe_lease_time | Example: 1100 |
| recycle_leases | Boolean | No | Lease Deletion | recycle_leases | This field is set to TRUE by default. Ensure that you use the overwrite option if you want to change the value to FALSE. Merging data from an import preserves the default value. |
| threshold_email_addresses | email address list | No | Email Addresses |  | Example: "'admin1@infoblox.com','admin2@somewhere.com'" |
| dhcp_members | Grid member   list | No | Members | members | Example: "host1.infoblox.com,host2.infoblox.com" |
| routers | IP address list | No | Routers |  | Example: "10.0.0.1,10.0.0.100," |
| domain_name | FQDN | No | Domain Name |  |  |
| domain_name_servers | IP address list | No | DNS Servers |  | Example: "10.2.3.4,11.2.3.4" |
| zone_associations | Zone list | No |  |  | Example: test.com/TRUE |
| VLANs | String | No | Assigned VLAN ID  Assigned VLAN Name |  | VLAN View is a container object which can contain VLAN Range/VLAN objects.  Example: default/1/4094/1 |
| OPTION-1 | String | No | Custom DHCP Options | options | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines).   Example: ‘255.0.0.0’ name implies vendor_class=’DHCP’ (default) |
| OPTION-XXXX-200 | Option information | No | Custom DHCP Options | options | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines).   Example: ’dfdfdfd’ name implies vendor_class=’XXXX’, option code/number 200 |
| EA-Site | String | No | Extensible Attribute Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-XXX | String | No | Extensible Attribute   XXX   value | inheritable | EA-XXX is an example of an inheritable extensible attribute where XXX represents the attribute name. This column displays the value of an inheritable extensible attribute. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EAInherited-XXX | String | No | Inheritance State of   an Extensible   Attribute XXX | inheritable | EAInherited-XXX is an example of an inheritable extensible attribute where XXX represents the attribute name. This column displays the inheritance state of an inheritable extensible attribute. This column is displayed only if the extensible attribute is inheritable. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | String | No | Extensible Attribute User | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| Comment | String | No | Comment | comment |  |
| ADMGRP-JoeSmith | String | No | Permissions Admin Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for networks. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding an IPv4 Network

This example shows how to import network 10.1.0.0/16 in the network view External with auto create reverse zone enabled and a comment.  
`header-network,address*,netmask*,network_view,auto_create_reversezone,comment network,10.1.0.0,255.255.0.0,External,TRUE,This is comment field`

For a network that has discovery enabled:  
`header-network,address*,netmask*,network_view,auto_create_reversezone, enable_discovery,discovery_member`  
` network,10.1.0.0,255.255.0.0,External,TRUE,TRUE,gridmember1.localdomain`

For a network that has discovery enabled and including an IPv4 range that is excluded for discovery:  
`header-network,address*,netmask*,network_view,auto_create_reversezone, enable_discovery,discovery_member,discovery_exclusion_range`  
` network,10.1.0.0,255.255.0.0,External,TRUE,gridmember1.localdomain,10.1.8.0-10.1.8.255 `

> **warning**
>
> **Note**
> 
> You cannot import a network container, but you can add an IPv4 network container through GUI.

Overwriting IPv4 Network Data

This example shows how to overwrite the following data in an existing network: enable the network to be "authoritative" and to add boot files bppt_file_001 and boot server 1.2.3.4.  
header-network,address*,netmask*,is_authoritative,boot_file,boot_server network,100.0.0.0,255.255.255.0,True,boot_file_001,1.2.3.4

## Merging IPv4 Network Data

This example shows how to merge the following data to an existing network: DDNS domain name, enable generate hostname, and disable always update DNS.

`header-network,address*,netmask*,ddns_domainname,generate_hostname,always_update_dns network,100.0.0.0,255.255.255.0,ddns.corp100.com,TRUE,FALSE`

## Adding IPv4 Networks with Zone Associations Enabled

This example shows how to add networks to a member in the default network view with zone association added as the default. The first row adds a network "20.0.1.0/24" that maps to member "ib-10-34-43-2.infoblox.com" in the "default" network view with zone association "dnszone1.com" added as the default zone association. The second row adds a network "20.0.2.0/24" that maps to member "ib-10-34-43-2.infoblox.com" in the "default" network view with zone associations "dnszone1.com" and "dnszone2.com" added, where zone "dnszone2.com" is configured as the default zone association.

`network,address*,netmask*,dhcp_members,network_view,zone_associations`  
` network,20.0.1.0,255.255.255.0,ib-10-34-43-2.infoblox.com,default,dnszone1.com/True/default`  
` network,20.0.2.0,255.255.255.0,ib-10-34-43-2.infoblox.com,default,dnszone1.com/False/default, dnszone2.com/True/default`

## Overwriting IPv4 Network Data with Zone Associations Enabled

This example shows how to overwrite network data with zone association enabled. The first row modifies network "20.0.1.0/24" zone association from "dnszone1.com" to "dnszone2.com". The second row modifies network "20.0.2.0/24" default zone association from "dnszone2.com" to "dnszone1.com".

`header-network,address*,netmask*,dhcp_members,network_view,zone_associations`  
` network,20.0.1.0,255.255.255.0,ib-10-34-43-2.infoblox.com,default,dnszone2.com/True/default`  
` network,20.0.2.0,255.255.255.0,ib-10-34-43-2.infoblox.com,default,dnszone1.com/True/default, dnszone2.com/False/default`
