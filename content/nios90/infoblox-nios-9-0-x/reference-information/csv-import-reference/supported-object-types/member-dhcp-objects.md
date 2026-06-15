---
title: "Member DHCP Objects"
source: "/space/nios90/280401877"
pageId: "280401877"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-MemberDhcp | String | Yes |  |  | Identifies the first row as a header row for the member DHCP objects. Example: MemberDhcp |
| broadcast_address | IP address | No | Broadcast Address |  | This field applies to the host address. Example: 10.1.0. |
| domain_name_servers | IP address list | No | Name server |  | List of domain name servers. Example: "10.2.3.4,11.2.3.4," |
| ignore_client_requested_options | Boolean | No |  |  | Clears the value of option-55 when you set the value to True. Example: True |
| pxe_lease_time | Unsigned integer | No | PXE Lease Time | pxe_lease_time | Indicates the lease time for PXE clients in seconds. This field applies to the host address. Example: 43220. |
| lease_time | Unsigned integer | No | Lease Time | lease_time | Indicates the** lease_time** attribute of a DHCP NAC filter object. This field applies to the host address. |
| domain_name | FQDN | No | Domain Name | domain_name | Indicates the domain name. This field applies to the host address. |
| routers | IP address list | No | Router |  | Indicates the router IP addresses. This field applies to the host address.   Example: “2.0.0.2,1.2.3.4” |
| option_logic_filters | List of IPv4 logic filter rules |  | Filter Type/Action |  | Examples:   .com.infoblox.dns.dhcp_mac_filter$mac_filter_name, .com.infoblox.dns.nac_filter$nac_filter_name, .com.infoblox.dns.dhcp_option_filters$opt_filter_name |
| enable_pxe_lease_time | Boolean | No | Enable PXE Lease Time |  | If this value is set to **True,** DHCP server uses different lease time for PXE clients. This field applies to the host address. Example: False |
| deny_bootp | Boolean | No | Deny BOOTP Requests | deny_bootp | When this is set to **True,** it denies BOOTP requests. This field applies to the host address. Example: FALSE |
| bootfile | String | No | Boot File | bootfile | Indicates the boot file name. Example: bootfile1 |
| bootserver | String | No | Boot Server | bootserver | Indicates the boot server. Example: abc.corp100.com |
| nextserver | String | No | Next Server | nextserver | Indicates the next server. Example: blue.domain.com |
| enable_thresholds | Boolean | No | Enable DHCP Thresholds | enable_dhcp_thresholds | Enable DHCP thresholds.    When you set this field to **True,** you must enter values in the **range_high_water_mark** and **range_low_water_mark** fields. You cannot leave these fields empty. Otherwise, the appliance displays an error message. |
| range_high_water_mark | Unsigned integer | No | High Water   Mark | high_water_mark | Indicates the percentage value for DHCP range usage after which an alarm will be active. When you set **enable_thresholds** to **True,** you must enter values in this field and in the **range_low_water_mark** field. You cannot leave these fields empty. Otherwise, the appliance displays an error message.   Example: 80 |
| range_high_water_mark_reset | Unsigned integer | No |  |  | Indicates the percentage value for DHCP range usage after which an alarm will be reset. Example: 85 |
| range_low_water_mark | Integer | No | Low Water   Mark | low_water_mark | Indicates the percentage value for DHCP range usage below which an alarm will be active. When you set **enable_thresholds** to **True,** you must enter values in this field and in the **range_high_water_mark** field. You cannot leave these fields empty. Otherwise, the appliance displays an error message.   Example: 10 |
| range_low_water_mark_reset | Unsigned integer | No |  |  | Indicates the percentage value for DHCP range usage above which an alarm will be reset. Example: 10 |
| enable_threshold_email_warnings | Boolean | No | Enable Email   Warnings | enable_email_ warnings | When you use **Merge,** the appliance preserves the existing value in this field. When you use **Overwrite,** you must include a value, either **True** or **False.** Otherwise, the appliance displays an error message. Example: **True** |
| enable_threshold_snmp_warnings | Boolean | No | Enable SNMP   Warnings | enable_snmp_warnings | Send DHCP threshold warnings via SNMP. When you use **Merge,** the appliance preserves the existing value in this field. When you use **Overwrite,** you must include a value, either **True** or **False.** Otherwise, the appliance displays an error message.   Example: TRUE |
| threshold_email_addresses | Email address list | No | Email   Addresses | email_list | List of email addresses.   Example: "'admin1@infoblox.com',   'admin2@somewhere.com'" |
| enable_ddns | Boolean | No | Enable DDNS Updates | enable_ddns | Enable or disable dynamic updates via DHCP to DNS server(s). Example: FALSE |
| enable_option81 | Boolean | No | Option 81   Support | ddns_use_option81 | Enable or disable option 81 support. Enables **always_update_dns field**. Example: TRUE |
| always_update_dns | Boolean | No | FQDN Support | ddns_server_always_ updates | Updates DNS when the value is **True.** Example: TRUE |
| generate_hostname | Boolean | No | Generate   Hostname | override_ddns_generate_ hostname | Generates host name only if not sent by client when the value is **True.** Does not generate host name when the value is **False.** |
| update_static_leases | Boolean | No | Fixed Address   Updates | ddns_update_ fixed_address | When the value is set to **True,** **DHCP** server will update DNS for client with static IP address. |
| ddns_ttl | Unsigned integer | No | DDNS Update   TTL | ddns_ttl | Indicates the DDNS TTL value in seconds. This is an inherited field. Example: 1200 |
| update_dns_on_lease_renewal | Boolean | No | Lease Renewal Update | override_update_dns_on_lease_renewal | Indicates whether the DHCP server updates DNS when a DHCP lease is renewed. Specify **True** to enable it or **False** to disable it. |
| preferred_lifetime | Unsigned integer | No | Preferred   Lifetime | preferred_lifetime | Indicates whether the **preferred_lifetime** value in the DHCP member is used, instead of the Grid default.Example: 604800 |
| valid_lifetime | Unsigned   integer | No | Valid Lifetime | valid_lifetime | Indicates whether the **valid_lifetime** value in the Grid Member DHCP is used, instead of the upper-level default. Example: 43200 |
| name | Grid   Member | Yes |  |  | The name of the Grid member. Example:   member.infoblox.com |
| is_authoritative | Boolean | No | Authoritative | authority | Set this value to **True** to perform override operation.   Example: FALSE |
| recycle_leases | Boolean | No | Lease Deletion | recycle_leases | This field is set to **True** by default. When you set this to **True,** leases in a deleted range are kept until expiration. Ensure that you use the **Overwrite** option if you want to change the value to **False.** Merging data from an import preserves the default value. |
| ping_count | Unsigned   integer | No |  | ping_count | Indicates the number of DHCP pings. Example: 1 |
| ping_timeout | Unsigned   integer | No |  | ping_timeout | Indicates the timeout (in seconds) for DHCP pings.   Example: 1000 |
| enable_leasequery | Boolean | No |  |  | When you set this value to **True,** the appliance allows lease query. Example: False |
| retry_ddns_updates | Boolean | No |  | retry_ddns_updates | When you set this value to **True,** DHCP server will retry failed DNS updates. Example: False |
| ddns_retry_interval | Unsigned   integer | No |  | ddns_retry_interval | Indicates the minimum time in minutes between DNS update retries. You must set **ddns_retry_updates** to **True** to modify the **ddns_retry_interval** value in the CSV file. |
| lease_scavenge_time | Unsigned   integer | No |  |  | Indicates the Grid level **lease_scavenge_time** value. If the value is -1, which means this lease scavenge will is disabled. The minimum value would be 7 * 24 * 60 * 60 ( 7 days). |
| enable_fingerprint | Boolean | No |  |  | When you set this value to **True,** fingerprint matching for incoming lease requests will be enabled. Example: False. |
| ipv6_enable_ddns | Boolean | No |  |  | Set this value to **True** to override the value at the Grid level. Set the parameter to **False** to inherit the settings from the Grid. Example: False |
| ipv6_ddns_enable_option_fqdn | Boolean | No |  |  | Indicates whether the FQDN option sent by the client is to be used, or if the server can automatically generate the FQDN. Default value is half of lease time. Example: False |
| ipv6_generate_hostname | Boolean | No |  |  | When you set this value to **True,** the hostname is generated if it is not sent by the client. Example: False |
| ipv6_ddns_domainname | String | No |  |  | The DDNS domain name in FQDN format. Example: test_domain.com |
| ipv6_ddns_ttl | Unsigned integer | No |  |  | Indicates the member IPv6 DDNS TTL value in seconds. Example: 0 |
| ipv6_domain_name_servers | IPv6 DNS server list | No |  |  | List of IPv6 domain name servers. Example: “2001::1, 2001::2,...” |
| ipv6_domain_name | String | No |  |  | To override the upper-level setting for** ipv6_domain_name**, you must set the value to **True.** Set the parameter to **False** to inherit the upper-level setting for ipv6_domain_name. |
| ipv6_recycle_leases | Boolean | No |  |  | When you set this to **True,** the leases are kept in recycle bin until one week after expiration. When you set this to **False,** the leases are irrecoverably deleted.    Example: False |
| ipv6_server_duid | String | No |  |  | DUID (DHCPv6 unique identifier) of the Grid member in string format. |
| ipv6_enable_retry_updates | Boolean | No |  |  | When you set this flag to **True,** the DHCPv6 server retries failed dynamic DNS updates. The default value is **True.**    Example: False |
| ipv6_retry_updates_interval | Unsigned integer | No |  |  | Set the retry interval when the member DHCPv6 server makes repeated attempts to send DDNS updates to a DNS server. The default retry interval is five minutes. |
| ipv6_update_dns_on_lease_ renewal | Boolean | No |  |  | Set or retrieve the **ipv6_update_dns_on_lease_renewal** flag. This attribute controls whether the DHCP server updates DNS when an IPv6 DHCP lease is renewed. Specify **True** to enable this feature or **False** to disable it. The default value is **False.** |
| ddns_domainname | String | No |  |  | The DDNS domain name in FQDN format. Example: test_domain.com |
| lease_per_client_settings | String | No |  |  | Defines how the server will release the client lease. This field is set to **RELEASE_MATCHING_ID** by default. Valid values are ONE_LEASE_PER_CLIENT, RELEASE_MATCHING_ID and NEVER_RELEASE. |
| ignore_client_identifier | Boolean | No |  |  | Indicates if the client identifier will be ignored for a DHCP shared network object. When you set this to **True,** the client identifier will be ignored.   Example: False |
| OPTION-1 | String | No | Custom DHCP Options | options | This field applies to the host address.Example: ‘255.0.0.0’ name implies vendor_class=‘DHCP’ (default) |
| OPTION-XXXX-200 | Option information | No | Custom DHCP Options | options | This field applies to the host address.Example: ‘dfdfdfd’ name implies vendor_class=‘XXXX’, optioncode/number 200 |
| ADMGRP-XXXX | String | No | Permissions   Admin   Group/Role | permission | ADMGRP-JimSmith is an example of an admin permission of a specific admin group. Example: RW |
| v6_leases_scavenging_enabled | Boolean | No | Lease   Scavenging | ipv6_enable_lease_scavenge | When you set this to **True,** the DHCPv6 server deletes free, expired, and released leases. The default value is **False.**    **Example:** True |
| v6_leases_scavenging_grace_period | Unsigned Integer | No | Lease   Scavenging | ipv6_lease_scavenge_time | Indicates the period (in seconds) for which free, expired, and released DHCPv6 leases remain in the database before they are automatically deleted. Example: 604800 |

e
