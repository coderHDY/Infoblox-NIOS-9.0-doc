---
title: "IPv4 Network Container"
source: "/space/nios90/2082799625"
pageId: "2082799625"
---
Use this page to reference the CSV fields and usage guidelines for IPv4 Network Container objects. The table below lists all required and optional fields, examples, and behaviors specific to IPv4 Network Container operations, including how to handle deletions with the remove-subnets column. These definitions apply to all CSV import, update, and delete operations for IPv4 Network Containers.

| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| **Header- NetworkContainer** | **String** | **Yes** |  |  | **Identifies the first row as a header row for network container objects. Example: NetworkContainer** |
| **address** | **IP address** | **Yes ** | **IP Address** | **ipv4addr** | Indicates the IP address of the network container. Example: 192.138.1.1 |
| netmask | Prefix | Yes | Netmask | network | Indicates the subnet mask of a network container in CIDR format. Example: 24 |
| comment | String | No | Comment | comment | Example: This is an IPv4 network container. |
| lease_time | integer | No | Lease Time |  | Example: 1100 |
| routers | IP address list | No | Routers |  | Example: "10.0.0.1,10.0.0.100," |
| domain_name | FQDN | No | Domain Name |  |  |
| domain_name_servers | IP address list | No | DNS Servers |  | Example: "10.2.3.4,11.2.3.4" |
| broadcast_address | IP address | No | Broadcast Address |  | Example: 10.0.0.1 |
| OPTION-1 | String | No | Custom DHCP Options | options | This is an example of a DHCP option. For Options information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines).    Example: '255.0.0.0' name implies vendor_class='DHCP' (default) |
| OPTION-XXXX-200 | Option information | No | Custom DHCP Options | options | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines).[ ](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines) Example: 'dfdfdfd' name implies vendor_class='XXXX', option code/number 200 |
| enable_ddns | Boolean | No | Enable DDNS Updates | enable_ddns | Example: FALSE |
| ddns_domainname | String | No | DDNS Domain Name | ddns_domainname | Example: [ddns.corp100.com](http://ddns.corp100.com) |
| ddns_ttl | Unsigned integer | No | DDNS Update TTL | ddns_ttl | Indicates the DDNS TTL value in seconds.   Example: 1200 |
| ddns_generate_hostname | Boolean | No | Generate Hostname | ddns_generate_hostname | When you set this to **True,** DHCP server will generate a hostname for DNS updates if not sent by client. Example: TRUE |
| update_static_leases | Boolean | No | Update Fixed Address | ddns_update_fixed_address | Example: FALSE |
| enable_option81 | Boolean | No | Option 81 Support | ddns_use_option81 | Example: TRUE |
| update_dns_on_ lease_renewal | Boolean | No | Lease Renewal Update | override_update_dns_on_lease_renewal | Example: TRUE |
| enable_dhcp_thresholds | Boolean | No | Enable DHCP Thresholds | enable_dhcp_thresholds | When you set this field to TRUE, you must enter values in the range_high_water_mark and range_low_water_mark fields. You cannot leave those fields empty. Otherwise, the appliance generates an error. |
| enable_email_warnings | Boolean | No |  | enable_email_warnings | Enable to send DHCP threshold warnings via email. Example: False |
| enable_snmp_warnings | Boolean | No |  |  | Enable to send DHCP threshold warnings via SNMP. Example: False |
| threshold_email_addresses | email address list | No | Email Addresses |  | Example:    "'admin1@infoblox.com','admin2@somewhere.com'" |
| pxe_lease_time | Unsigned integer | No | PXE Lease Time | pxe_lease_time | Example: 1100 |
| deny_bootp | Boolean | No | Deny BOOTP Requests | deny_bootp | Example: FALSE |
| boot_file | String | No | Boot File | bootfile | Example: bootfile1 |
| boot_server | String | No | Boot Server | bootserver | Example: [abc.corp100.com](http://abc.corp100.com) |
| next_server | String | No | Next Server | nextserver | Example: [blue.domain.com](http://blue.domain.com) |
| option_logic_filters | List of IPv4 logic filter rules |  | Filter Type/Action |  | Examples: .com.infoblox.dns.dhcp_mac_filter$mac_filte r_name,.com.infoblox.dns.nac_filter$nac_filter_name,   .com.infoblox.dns.dhcp_option_filters$opt_filter_name |
| lease_scavenge_time | Unsigned integer | No |  |  | Indicates the Grid level **lease_scavenge_time value**. If the value is -1, which means this lease scavenge will is disabled. The minimum value would be 7 * 24 * 60 * 60 ( 7 days). |
| is_authoritative | Boolean | No | Authoritative | authority | Example: FALSE |
| recycle_leases | Boolean | No | Lease Deletion | recycle_leases | This field is set to TRUE by default. Ensure that you use the overwrite option if you want to change the value to FALSE. Merging data from an import preserves the default value. |
| ignore_client_requested_options | Boolean | No | Ignore Optionlist | ignore_dhcp_option_list_request | Example: TRUE |
| network_view | String | No | Network View | network_view | If no network view is specified, the default view is used. Example: Default |
| rir_organization | String | No | Organization Name | rir_organization | Identifies the Regional Internet Registry (RIR) organization object. Use this only when the network is associated with an RIR organization.   Example: corp100 |
| rir_registration_status | String | No | Registration Status | rir_registration_status | Identifies the registration status of Regional Internet Registry (RIR). Use this only for an RIR network. When you enable the **Enable Updates Of RIR Registrations** checkbox at the Grid level and import a CSV file to add either an** IPv4 network container** or an** IPv6 network container** with the **rir_registration_status** set to Registered without values for any other RIR fields, the appliance completes the import operation and adds the IPv4 network container or the IPv6 network container to the Grid. The status of this IPv4 network container or the IPv6 network container is set as **Non-registered** network.    Example: Non-registered |
| last_rir_registration_update_sent | String | No |  |  | Identifies the last registration update timestamp of Regional Internet Registry (RIR). This is a read-only attribute. |
| last_rir_registration_update_status | String | No |  |  | Identifies the last registration update status of Regional Internet Registry (RIR). This is a read-only attribute. |
| enable_discovery | Boolean | Yes | Enable Discovery | network | If this field is set to **True**, the **discovery_member** must also be defined. |
| discovery_member | String | Yes | Discovery Member | network | Indicates the discovery member name. Required if discovery is enabled for the network. |
| discovery_exclusion_range | Prefix | No |  |  | List of IP ranges to be excluded from the discovery process. |
| remove-subnets | Boolean | No |  |  | Specify **False** to keep the subnets or **True** to remove them. The default value is undefined, which is to remove all subnets. Use this only when you want to delete a network container. When you perform CSV export of a network container, the CSV file does not contain the **remove-subnets** column. You must add the **remove-subnets** column to the CSV export file if you want to perform a delete operation. When you delete a network container from the CSV file, you must set **remove-subnets** to **True** to delete both the parent and sub networks. When you set this column value to **False,** the CSV delete operation deletes only the parent network when you delete a network container. |
| EA-Site | String | No | Extensible attribute | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. Example: California. |
| EA-Users | String | No | Extensible attribute | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. Example: John. |
| ADMGRP-XXXX | String | No | Permissions Admin Group/Role | permission | ADMGRP-JimSmith is an example of an admin permission of a specific admin group. Example: RW |
