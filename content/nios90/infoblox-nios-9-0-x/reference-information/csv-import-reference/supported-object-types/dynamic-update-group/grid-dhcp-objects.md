---
title: "Grid DHCP Objects"
source: "/space/nios90/1480720990"
pageId: "1480720990"
---
NIOS does not support add and delete operations.

| **Field** **Name** | **Data** **Type** | **Required** **(Yes/No)** | **Associated** **GUI** **Field** | **Associated** **PAPI** **Method** | **Usage** **and** **Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-GridDhcp | String | Yes |  |  | Identifies the first row as a header row for the Grid DHCP objects. Example: GridDhcp |
| authority | Boolean | No |  |  | When you set this to **True,** DHCP server is authoritative for this domain. Example: False |
| domain_name | String | No |  |  | Indicates the domain name. |
| recycle_leases | Boolean | No | Lease   Deletion | recycle_leases | This field is set to **True** by default. When you set this to **True,** leases in a deleted range are kept until expiration. Ensure that you use the **Overwrite** option if you want to change the value to **False.** Merging data from an import preserves the default value. |
| ignore_dhcp_option_list_request | Boolean | No |  | ignore_dhcp_option_list   _request | When this is set to **True,** it clears the value of option-55. Example: False |
| enable_pxe_lease_time | Boolean | No | Enable PXE lease time |  | If this value is set to True, DHCP server uses different lease time for PXE clients. This field applies to the host address. Example: False |
| pxe_lease_time | Unsigned integer | No | PXE Lease Time | pxe_lease_time | Indicates the lease time for PXE clients in seconds. This field applies to the host address. Example: 43220. |
| bootfile | String | No | Boot File | bootfile | Indicates the boot file name.   Example: bootfile1 |
| bootserver | String | No | Boot Server | bootserver | Indicates the boot server.   Example: [abc.corp100.com](http://abc.corp100.com) |
| nextserver | String | No | Next Server | nextserver | Indicates the next server.   Example: [blue.domain.com](http://blue.domain.com) |
| deny_bootp | Boolean | No | Deny BOOTP Requests | deny_bootp | When this is set to True, it denies BOOTP requests. This field applies to the host address. Example: FALSE |
| enable_ddns | Boolean | No | Enable DDNS Updates | enable_ddns | Enable or disable dynamic updates via DHCP to DNS server(s). Example: FALSE |
| ddns_use_option81 | Boolean | No | Option 81   Support | ddns_use_option81 | Enable or disable option 81 support. Enables **always_update_dns field**.   Example: TRUE |
| ddns_server_always_updates | Boolean | No |  | ddns_server_always_updates | When you set this to True, DHCP server will always update DNS. |
| ddns_generate_hostname | Boolean | No | Generate   Hostname | ddns_generate_hostname | When you set this to True, DHCP server will generate a hostname for DNS updates if not sent by client. Example: TRUE |
| ddns_ttl | Unsigned integer | No | DDNS   Update TTL | ddns_ttl | Indicates the DDNS TTL value in seconds. This is an inherited field. Example: 1200 |
| retry_ddns_updates | Boolean | No |  | retry_ddns_updates | When you set this value to True, DHCP server will retry failed DNS updates. Example:   False |
| ddns_retry_interval | Unsigned integer | No |  | ddns_retry_interval | Indicates the minimum time in minutes between DNS update retries. You must set **ddns_retry_updates** to **True** to modify the **ddns_retry_interval** value in the CSV file. |
| enable_dhcp_thresholds | Boolean | No | Enable DHCP Thresholds | enable_dhcp_thresholds | Enable DHCP thresholds. When you set this field to **True,** you must enter values in the **range_high_water_mark** and** range_low_water_mark** fields. You cannot leave those fields empty. Otherwise, the appliance generates an error. |
| high_water_mark | Unsigned   integer | No | High Water Mark | high_water_mark | Indicates the percentage value for DHCP range usage after which an alarm will be active. When you set **enable_thresholds** to **True,** you must enter values in this field and in the **range_low_water_mark** field. You cannot leave these fields empty. Otherwise, the appliance displays an error message.   Example: 80 |
| high_water_mark_reset | Unsigned   integer | No |  |  | Indicates the percentage value for DHCP range usage after which an alarm will be   reset. Example: 85 |
| low_water_mark | Integer | No | Low Water   Mark | low_water_mark | Indicates the percentage value for DHCP range usage below which an alarm will be active. When you set **enable_thresholds** to **True,** you must enter values in this field and in the **range_high_water_mark** field. You cannot leave these fields empty. Otherwise, the appliance displays an error message.   Example: 10 |
| low_water_mark_reset | Unsigned integer | No |  |  | Indicates the percentage value for DHCP range usage above which an alarm will be reset. Example: 10 |
| enable_email_warnings | Boolean | No |  | enable_email_warnings | Enable to send DHCP threshold warnings via email. Example: False |
| enable_snmp_warnings | Boolean | No |  |  | Enable to send DHCP threshold warnings via SNMP. Example: False |
| email_list | Email address list | No |  |  | List of email addresses. Example:   "'admin1@infoblox.com', 'admin2@somewhere.com'," |
| ipv6_domain_name_servers | IPv6 DNS server list | No |  |  | List of IPv6 domain name servers. Example: “2001::1, 2001::2,...” |
| ping_count | Unsigned integer | No |  | ping_count | Indicates the number of DHCP pings. Example: 1 |
| ping_timeout | Unsigned integer | No |  | ping_timeout | Indicates the timeout (in seconds) for DHCP pings. Example: 1000 |
| capture_hostname | Boolean | No |  |  | When you set this value to **True,** the appliance captures host name and lease time when assigning fixed addresses. |
| enable_leasequery | Boolean | No |  |  | When you set this value to **True,** the appliance allows lease query. Example: False |
| update_dns_on_lease_renewal | Boolean | No | Lease   Renewal   Update | override_update_dns_on   _lease_renewal | Indicates whether the DHCP server updates DNS when a DHCP lease is renewed. Specify True to enable it or False to disable it. |
| ipv6_update_dns_on_lease_renewal | Boolean | No |  |  | Set or retrieve the **ipv6_update_dns_on_lease_renewal** flag. This attribute controls whether the DHCP server updates DNS when an IPv6 DHCP lease is renewed. Specify **True** to enable this feature or **False** to disable it. The default value is **False.** |
| txt_record_handling | String | No |  |  | Specifies how DHCP should treat TXT records while performing DNS update.   Example: ISC |
| lease_scavenge_time | Unsigned   integer | No |  |  | Indicates the Grid level lease_scavenge_time value. If the value is -1, which means this lease scavenge will is disabled. The minimum value would be 7 * 24 * 60 * 60 ( 7 days). |
| failover_port | Unsigned integer | No |  |  | Indicates the failover port number. The default value is 647. The port number must be between 1 and 63999. |
| enable_fingerprint | Boolean | No |  |  | When you set this value to **True,** fingerprint matching for incoming lease requests will be enabled. Example: False |
| ipv6_enable_ddns | Boolean | No |  |  | Set this value to **True** to override the value at the Grid level. Set the parameter to **False** to inherit the settings from the Grid. |
| ipv6_ddns_enable_option_fqdn | Boolean | No |  |  | Indicates whether the FQDN option sent by the client is to be used, or if the server can automatically generate the FQDN. Default value is half of lease time. Example: False |
| ipv6_ddns_server_always_updates | Boolean | No |  |  | Specify True to enable this feature or False to disable it. The default value is False. You must set this to False to update DNS only if requested by the client. |
| ipv6_generate_hostname | Boolean | No |  |  | When you set this value to True, the hostname is generated if it is not sent by the client. Example: False |
| ipv6_ddns_domainname | String | No |  |  | The DDNS domain name in FQDN format. Example: test_domain.com |
| ipv6_ddns_ttl | Unsigned integer | No |  |  | Indicates the member IPv6 DDNS TTL value in seconds. Example: 0 |
| Preferred_lifetime | Integer | No | Preferred Lifetime | preferred_lifetime | Indicates whether the preferred_lifetime value in the DHCP member is used, instead of the Grid default. Example: 6 |
| valid_lifetime | Unsigned integer | No | Valid Lifetime | valid_lifetime | Indicates whether the valid_lifetime value in the Grid Member DHCP is used, instead of the upper-level default.Example: 43200 |
| ipv6_domain_name | String | No |  |  |  |
| ipv6_txt_record_handling | String | No |  |  | Example: ISC |
| ipv6_capture_hostname | Boolean | No |  |  | Example: False |
| ipv6_recycle_leases | Boolean | No |  |  | When you set this to True, the leases are kept in recycle bin until one week after expiration. When you set this to False, the leases are irrecoverably deleted. Example: False |
| ipv6_enable_retry_updates | Boolean | No |  |  | When you set this flag to True, the DHCPv6 server retries failed dynamic DNS updates. The default value is True. Example: False |
| ipv6_retry_updates_interval | Unsigned integer | No |  |  | Set the retry interval when the member DHCPv6 server makes repeated attempts to send DDNS updates to a DNS server. The default retry interval is five minutes. |
| ddns_domainname | String | No | DDNS Domain Name | ddns_domainname | The DDNS domain name in FQDN format. Example: [ddns.corp100.com](http://ddns.corp100.com) |
| lease_per_client_settings | String | No |  |  | Defines how the server will release the client lease. This field is set to **RELEASE_MATCHING_ID** by default. Valid values are ONE_LEASE_PER_CLIENT, RELEASE_MATCHING_ID and NEVER_RELEASE. |
| ignore_client_identifier | Boolean | No |  |  | Indicates if the client identifier will be ignored for a DHCP shared network object. When you set this to **True,** the client identifier will be ignored. Example: False |
| disable_all_nac_filters | Boolean | No |  |  | When you set this value to **True,** NAC filters will be disabled on the Infoblox Grid. Example: False |
| format_log_option_82 | String | No |  |  | Select the logging format to either hexadecimal or a decoded string which is human readable. |
| OPTION-1 | String | No | Custom   DHCP   Options | options | This field applies to the host address. Example: ‘255.0.0.0’ name   implies vendor_class=’DHCP’ (default) |
| OPTION-XXXX-200 | Option   information | No | Custom   DHCP   Options | options | This field applies to the host address. Example: ‘dfdfdfd’ name implies vendor_class=‘XXXX’, optioncode/number 200 |
| v6_leases_scavenging_enabled | Boolean | No | Lease   Scavenging | ipv6_enable_lease_scavenge | When you set this to **True,** the DHCPv6 server deletes free, expired, and released leases. The default value is **False.** Example: True |
| v6_leases_scavenging_grace_period | Unsigned integer | No | Lease   Scavenging | ipv6_lease_scavenge_time | Indicates the period (in seconds) for which free, expired, and released DHCPv6 leases remain in the database before they are automatically deleted. Example: 604800 |
