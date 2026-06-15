---
title: "IPv6 Network Container"
source: "/space/nios90/280401820"
pageId: "280401820"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-IPv6NetworkContainer | String | Yes |  |  | Identifies the first row as a header row for IPv6 network container objects. Example: IPv6NetworkContainer. |
| address | IP Address | Yes | IP Address | ipv6addr | Indicates the IP address of the network container. Example: 2001:: |
| cidr | Prefix | Yes | Netmask |  | Indicates the network container, in CIDR format, to which this network container belongs. Example: 64 |
| network_view | String | No | Network View | network_view | If no network view is specified, the default view is used. Example: Default. |
| comment | String | No | Comment | comment | Example: This is an IPv6 network container. |
| zone_associations | Zone list | No | DNS Zone Associations | zone_associations | Example: test.com/TRUE |
| valid_lifetime | Integer | No | Valid Lifetime | valid_lifetime | Example: 43200 |
| Preferred_lifetime | Integer | No | Preferred Lifetime | preferred_lifetime | Example: 604800 |
| domain_name | String | No | Domain Name |  | Example: testdomain.com |
| domain_name_servers | IP address list | No | DNS Servers |  | Example: ‘2000::10,3000::10’ |
| OPTION-7 | Integer | No | Custom DHCP Options | override_options | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines) on page 9. Example: ‘12’ name implies option space = ‘DHCPv6’, option code/number 7 |
| OPTION-XXXX-200 | Option information | No | Custom DHCP Options | override_options | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines) on page 9. Example: ’dfdfdfd’ name implies vendor_class=’XXXX’, option code/number 200 |
| recycle_leases | Boolean | No | Lease Deletion | recycle_leases | This field is set to TRUE by default. Ensure that you use the overwrite option if you want to change the value to FALSE. Merging data from an import preserves the default value. |
| enable_ddns | Boolean | No | Enable DDNS Updates | enable_ddns | Example: TRUE |
| ddns_domainname | String | No | DDNS Domain Name | ddns_domainname | Example: ddns.corp100.com |
| ddns_ttl | Unsigned integer | No | DDNS Update TTL | ddns_ttl | Indicates the DDNS TTL value in seconds. This is an inherited field.    Example: 1200 |
| generate_hostname | Boolean | No | Generate Hostname | override_ddns_generate   _hostname | Example: TRUE |
| always_update_dns | Boolean | No | FQDN Support | ddns_server_always_updates | Example: TRUE |
| update_dns_on_lease_renewal | Boolean | No | Lease Renewal Update | override_update_dns_on   _lease_renewal | Example: TRUE |
| rir_organization | String | No | Organization Name | rir_organization | Identifies the Regional Internet Registry (RIR) organization object. Use this only when the network is associated with an RIR organization.   Example: corp100 |
| rir_registration_status | String | No | Registration Status | rir_registration_status | Identifies the registration status of Regional Internet Registry (RIR). Use this only for an RIR network. When you enable the **Enable Updates Of RIR Registrations** checkbox at the Grid level and import a CSV file to add either an** IPv4 network container** or an **IPv6 network container** with the **rir_registration_status** set to Registered without values for any other RIR fields, the appliance completes the import operation and adds the IPv4 network container or the IPv6 network container to the Grid. The status of this IPv4 network container or the IPv6 network container is set as **Non-registered** network.    Example: Non-registered |
| last_rir_registration_update_sent | String | No |  |  | Identifies the last registration update timestamp of Regional Internet Registry (RIR). This is a read-only attribute. |
| last_rir_registration_update_status | String | No |  |  | Identifies the last registration update status of Regional Internet Registry (RIR). This is a read-only attribute. |
| enable_discovery | Boolean | Yes | Enable Discovery | network | If this field is set to **True,** the** discovery_member** must also be defined. |
| discovery_member | String | Yes | Discovery Member | network | This field is required if discovery is enabled for the network. |
| discovery_exclusion_range | IP Prefix | No | Network Editor → Discovery Exclusions | Network | List of IP ranges to be excluded from the discovery process. |
| remove_subnets | Boolean | No |  |  | Specify **False** to keep the subnets or **True** to remove them. The default value is undefined, which is to remove all subnets. Use this only when you want to delete a network container. When you perform CSV export of a network container, the CSV file does not contain the **remove-subnets** column. You must add the **remove-subnets** column to the CSV export file if you want to perform a delete operation. When you delete a network container from the CSV file, you must set **remove-subnets** to **True** to delete both the parent and sub networks. When you set this column value to **False,** the CSV delete operation deletes only the parent network when you delete a network container. |
| EA-Site | String | No | Extensible attribute | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. Example: California. |
| EA-Users | String | No | Extensible attribute | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. Example: John. |
| ADMGRP-XXXX | String | No |  | permission | ADMGRP-JimSmith is an example of an admin permission of a specific admin group. Example: RW |
