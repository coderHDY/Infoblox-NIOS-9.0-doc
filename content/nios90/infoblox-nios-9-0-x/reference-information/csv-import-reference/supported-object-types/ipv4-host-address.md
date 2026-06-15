---
title: "IPv4 Host Address"
source: "/space/nios90/280401960"
pageId: "280401960"
---
Use this object type to define parameters for each IP address in an IPv4 host record. The appliance updates an existing host address when you use the "add" mode in an import. For information about host records, refer to the *Infoblox* *Administrator* *Guide*.

| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field ** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-HostAddress | String | Yes |  |  | Example: HostAddress |
| parent | FQDN | Yes |  |  | Example: h1.corp100.com |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. Example: Default |
| network_view | String | No | Network View | network_view | If no network view is specified, the Default view is used. Example: Default |
| address | IP address | Yes | IP Address | ipv4addrss | Example: 10.0.0.11 |
| _new_address | IP address | No |  |  | Add this field to overwrite the address field when you select the overwrite or merge option. |
| mac_address | MAC address | No | MAC Address | mac_address | This is required if the IP address is configured for DHCP. Example: aA:Bb:c2:DD:E1:FF |
| configure_for_dhcp | Boolean | No | DHCP checkbox | configure_for_dhcp | Example: TRUE |
| configure_for_dns | integer | No | Enable in DNS | configure for dns | This field is used to specify the parent host record. If not value is specified, TRUE is used.   Example: TRUE |
| deny_bootp | Boolean | No | Deny BOOTP Requests | deny_bootp | Example: FALSE |
| broadcast_address | String | No | Broadcast Address |  |  |
| option_logic_filters | List of IPv4 logic filter rules |  | Filter Type/Action |  | Examples: .com.infoblox.dns.dhcp_mac_filter$mac_filter_name,   .com.infoblox.dns.nac_filter$nac_filter_name,   .com.infoblox.dns.dhcp_option_filters$opt_filter_name |
| boot_file | String | No | Boot File | boot_file |  |
| boot_server | String | No | Boot Server | boot_server |  |
| next_server | String | No | Next Server | next_server |  |
| lease_time | Unsigned integer | No | Lease Time | lease_time |  |
| pxe_lease_time_enabled | Boolean | No | Enable PXE Lease Time |  | Example: TRUE |
| pxe_lease_time | Unsigned integer | No | PXE Lease Time | pxe_lease_time |  |
| domain_name | FQDN | No | Domain Name | domain_name |  |
| domain_name_servers | IP list | No | Name Server |  | Example: [5.6.7.8,1.2.3.4] |
| routers | IP list | No | Router |  | Example: [2.0.0.2,1.2.3.4] |
| match_option | String | No |  | match_client | Data must be in the following format: MAC_ADDRESS/CLIENT_IDENTIFIER/RESERVED |
| ignore_dhcp_param_request_list | Boolean | No | Ignore Optionlist | ignore-dhcp_option_list_request |  |
| OPTION-1 | String | No | Custom DHC   Options |  | This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). Example: '255.0.0.0' implies vendor_class='DHCP' (default) |
| OPTION-XXXX-200 | Option information | No | Custom DHC   Options |  | P options This is an example of a DHCP option. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). Example: 'dfdfdfd' name implies vendor_class='XXXX', optioncode/number 200 |

# Examples

This section contains examples of how to create data files for host addresses. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding an IPv4 Host Address

This example shows how to import the host address 100.0.0.1 in host record h1.corp100.com with a MAC address, enabled DHCP, and a domain name.  
`header-hostaddress,parent*,address*,mac_address,configure_for_dhcp,domain_name hostaddres,h1.corp100.com,100.0.0.1,aa:aa:aa:aa:aa:aa,TRUE,corp200.com`

This example shows how to import the host address 100.0.0.2 in host record h2.corp100.com with a MAC address, and two routers with addresses 1.1.1.1 and 2.2.2.2.  
`header-hostaddress,parent*,address*,mac_address,configure_for_dhcp,routers hostaddress,h2.corp100.com,100.0.0.2,bb:aa:aa:aa:aa:aa,False,1.1.1.1,2.2.2.2`

## Overwriting IPv4 Host Address Data

This example shows how to overwrite the MAC address and domain name of a host address, and to set configure DHCP to TRUE.  
`header-hostaddress,parent*,address*,mac_address,configure_for_dhcp,domain_name hostaddress,h1.corp100.com,100.0.0.1,cc:aa:aa:aa:aa:aa,FALSE,corp300.com`

This example shows how to overwrite the router address of a host address from 1.1.1.1,2.2.2.2 to 1.1.1.1.  
`header-hostaddress,parent*,address*,routers hostaddress,h2.corp100.com,100.0.0.2,1.1.1.1`

## Merging IPv4 Host Address Data

This example shows how to merge the following data of a host address: change a new address from 100.0.0.1 to 100.0.0.10, change bootp to DENY, and add lease time.  
`header-hostaddress,parent*,address*,_new_address,deny_bootp,lease_time hostaddress,h1.corp100.com,100.0.0.1,100.0.10,FALSE,3600`

This example shows how to merge the broadcast address, PXE lease time, and enabled ignore option list to an IPv4 host address.  
`header-hostaddress,parent*,address*,broadcast_address,pxe_lease_time,ignore_dhcp_param`  
` _request_list hostaddress,h2.corp100.com,100.0.0.2,6.6.6.6,1280,TRUE`
