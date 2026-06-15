---
title: "IPv6 Network"
source: "/space/nios90/179438505"
pageId: "179438505"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-IPv6Network | String | Yes |  |  | Example: IPv6Network |
| rir_organization | String | No | Organization Name | rir_organization | Use this only when the network is associated with an RIR organization.   Example: corp100 |
| rir_registration_status | String | No | Registration Status | rir_registration_status | Use this only when this is an RIR network.   Example: Registered |
| address | IPv6 address | Yes | Address | ipv6addrs | Example: 2001:: |
| cidr | Prefix | Yes | Netmask |  | Example: 32 |
| network_view | String | No | Network View | network_view | If no view is specified, the Default view is used. Example: Default |
| enable_discovery | Boolean | Yes | Enable Discovery | enable_discovery | If this field is set to TRUE, the discovery_member must also be defined. |
| discovery_member | String | Yes | Discovery Member | discovery_member | Required if discovery is enabled for the network. |
| discovery_exclusion_range | IP Prefix | No | Network Editor → Discovery Exclusions | discovery_exclusion_range | List of IP ranges to be excluded from the discovery process. |
| disabled | Boolean | No | Disabled | disable | Example: TRUE |
| auto_create_reversezone | Boolean | No | Automatically create reverse mapping zone | auto_create_reversezone | Example: TRUE |
| zone_associations | Zone list | No | DNS Zone Associations | zone_associations | Example: test.com/TRUE |
| dhcp_members | Grid member list | No | Members | members | Example: “host1.infoblox.com, host2.infoblox.com |
| domain_name | String | No | Domain Name |  | Example: testdomain.com |
| domain_name_servers | IP address list | No | DNS Servers |  | Example: ‘2000::10,3000::10’ |
| valid_lifetime | Integer | No | Valid Lifetime | valid_lifetime | Example: 43200 |
| Preferred_lifetime | Integer | No | Preferred   Lifetime | preferred_lifetime | Example: 604800 |
| recycle_leases | Boolean | No |  | recycle_leases | Example: FALSE |
| enable_ddns | Boolean | No | Enable DDNS   Updates | enable_ddns | Example: TRUE |
| always_update_dns | Boolean | No | FQDN Support | ddns_server_always_updates | Example: TRUE |
| ddns_domain_name | String | No | DDNS Domain   Name | ddns_domainname | Example: ddnsdomain.com |
| ddns_ttl | Unsigned integer | No | DDNS Update   TTL | ddns_ttl | Example: 3600 |
| generate_hostname | Boolean | No | Generate   Hostname | override_ddns_generate_hostname | Example: TRUE |
| update_dns_on_lease_renewal | Boolean | No | Lease Renewal Update | override_update_dns_on_lease_renewal | Example: TRUE |
| VLANs   | String | No | Assigned VLAN ID  Assigned VLAN Name |  | VLAN View is a container object which can contain VLAN Range/VLAN objects.  Example: default/1/4094/1 |
| OPTION-7 | Integer | No | Custom DHCP Options | override_options | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines).on page 9.   Example: ‘12’ name implies option space = ‘DHCPv6’, option code/number 7 |
| OPTION-XXXX-200 | Option information | No | Custom DHCP Options | options | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines).   Example: ’dfdfdfd’ name implies vendor_class=’XXXX’, option code/number 200 |
| EA-Site | String | No | Extensible Attribute Site | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-XXX | String | No | Extensible Attribute   XXX   value | inheritable | EA-XXX is an example of an inheritable extensible attribute where XXX represents the attribute name. This column displays the value of an inheritable extensible attribute. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EAInherited-XXX | String | No | Inheritance State of   an Extensible   Attribute XXX | inheritable | EAInherited-XXX is an example of an inheritable extensible attribute where XXX represents the attribute name. This column displays the inheritance state of an inheritable extensible attribute. This column is displayed only if the extensible attribute is inheritable. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | String | No | Extensible Attribute Users | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| Comment | String | No | Comment | comment |  |
| ADMGRP-JoeSmith | String | No | Permissions Admin Group/Role | permission | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for IPv6 networks. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding an IPv6 Network

This example shows how to import an IPv6 network 3333::/64 in the Default DHCP view.

`header-IPv6network,address*,cidr*,network_view,comment,auto_create_reversezone IPv6network,2001:db8:6000:5000::,64,Default,This is a comment,TRUE`

For a network that has discovery enabled:

`header-IPv6network,address*,cidr*,network_view,auto_create_reversezone,enable_discover y,discovery_member`  
` IPv6network,2001:db8:6000:5000::,64,Default,TRUE,TRUE,gridmember1.localdomain`

For a network that has discovery enabled and including an IPv6 range that is excluded for discovery:

`header-network,address*,netmask*,network_view,auto_create_reversezone, discovery_enabled,discovery_member,discovery_exclusion_range`  
` IPv6network,2001:db8:6000:5000::,64,Default,TRUE,TRUE,gridmember1.localdomain, 2001:db8:6000:5000::1-2001:db8:6000:5000::128`

> **warning**
>
> **Note**
> 
> You cannot import a network container, but you can add an IPv6 network container through GUI.

## Overwriting IPv6 Network Data

This example shows how to overwrite the following data of an IPv6 network: address and cidr.

`header-IPv6network,address*,_new_address,cidr*,_new_cidr IPv6network,3333::,2222::,64,32`

## Merging IPv6 Network Data

This example shows how to merge the extensible attribute State and admin group USA_admins to an IPv6 network.

`header-IPv6network.address*,cidr*,EA-State,ADMGRP-USA_admins IPv6network,3333::,64,CA,RW`
