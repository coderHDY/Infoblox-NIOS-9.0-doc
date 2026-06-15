---
title: "Member DNS Objects"
source: "/space/nios90/280269250"
pageId: "280269250"
---
NIOS does not support add and delete operations.

> **warning**
>
> ### Note
> 
> When you export member DNS properties, the CSV file might include the "unbound_logging_level" field with "OPERATIONS" as the value. Although this field is only applicable to the IB-4030-10GE appliance and might not apply to your Grid members, you can still perform CSV import using the CSV export file that contains this field without any issues.



| **Field** **Name** | **Data** **Type Required Associated**    **(Yes/No) GUI** **Field** | **Required (Yes/No)** | **Associated GUI Field** | **Associated** **PAPI Method ** | ** Usage and Guidelines ** |
| --- | --- | --- | --- | --- | --- |
| Header-MemberDns | String | Yes |  |  | Identifies the first row as a header row for the member DNS objects.   Example: MemberDns |
| parent | FQDN | Yes |  |  | Indicates the parent object.   Example: member1.infoblox.com |
| dns_over_mgmt | Boolean | No |  |  | Enable or disable DNS services on the MGMT port.    Example: False |
| dns_over_lan2 | Boolean | No |  |  | Enable or disable DNS services on the LAN2 port.    Example: False |
| minimal_response | Boolean | No |  |  | Enable or disable minimal response of the DNS server.   Example: False |
| forwarders_only | Boolean | No | Use Forwarders Only |  | Enable use of forwarders only.    Example: False |
| allow_forwarder | IP address list | No |  |  | Indicates the list of forwarders. |
| member_view_nats | integer | No |  |  | Indicates the list of views with NAT address used for creating glue records for the view.    Example: dns_view1/INTERFACE/10.10.10. |
| enable_notify_source_port | integer | No |  |  | Enable or disable** notify_source_port**.    Example: False |
| notify_source_port | Unsigned integer | No |  |  | Indicates the notify source port number. |
| enable_query_source_port | Boolean | No |  |  | Enable or disable **query_source_port.** Example: False |
| query_source_port | Unsigned integer | No |  |  | Indicates the query source port number. |
| lame_ttl | Unsigned integer | No |  |  | Indicates the lame TTL value in seconds. Example: 600 |
| auto_sort_views | Boolean | No |  |  | Enable or disable DNS views auto-sort. Example: False |
| member_views | List of Member views | No |  |  | Indicates the list of member views. Example: dns_view1, dns_view2,.. |
| allow_transfer | ACL | No | Allow zone transfers to | allow_transfer | List of **address_tsig_ac** items.Note that you can import the name of a named ACL in this field. Example: NACL1or "12.0.0.12/Deny,1234::/64/Allow". |
| excluded_servers | IP address list | No |  |  | List of excluded servers for zone transfers. |
| zone_transfer_format_option | String | No |  |  | Indicates the zone transfer format. |
| recursion_enabled | Boolean No |  |  |  | Indicates the flag to respond to recursive queries. Example: False |
| allow_query | ACL | No | Allow queries from | allow_query | List of **address_tsig_ac** items. It can be an IP address, a network entry, Any or a TSIG-/permission. If the first value is not **Any** or **TSIG**-, it is assumed to be an IP address or a network entry. Example: 10.0.0.10/Allow, 11.0.0.0/16/Deny, TSIG-foo/xyz/Allow. It can also be a named ACL. Example: NACL1. |
| allow_recursive_query | ACL | No |  |  | List of **address_tsig_ac** items. It can be an IP address, a network entry, Any or a TSIG-/permission. If the first value is not **Any** or **TSIG**-, it is assumed to be an IP address or a network entry.   Example:"10.0.0.10/Allow,11.0.0.0/16/Deny,TSIG-foo/xyz/Allow,.." or it can be a named ACL. Example: "NACL1" |
| limit_concurrent_recursive_clients | Boolean | No |  |  | Enable limit of concurrent recursive client number. Example: False |
| concurrent_recursive_clients | Unsigned integer | No |  |  | Indicates the number of clients allowed to perform concurrent queries. Example: 1000 |
| allow_update | ACL | No | Allow updates from | allow_update | List of **address_tsig_ac** items. It can be an IP address, a network entry, Any or a TSIG-/permission. If the first value is not **Any** or **TSIG**-, it is assumed to be an IP address or a network entry. Example: 10.0.0.10/Allow, 11.0.0.0/16/Deny, TSIG-foo/xyz/Allow. It can also be a named ACL. Example: NACL1. |
| allow_gss_tsig_zone_updates | Boolean | No |  |  | Allow GSS-TSIG clients to perform zone updates. Example: False |
| allow_update_forwarding | Boolean | No | Allow updates from | forward_to | Enable update forwarding for secondary zones. Example: False |
| enable_custom_root_server | Boolean | No |  |  | Indicates the flag to enable custom root servers. Example: False |
| root_name_servers | Root     nameserver list | No |  |  | Indicates the list of custom root servers. Example: rnm1.test.com/1.1.1.1/,.   The appliance displays an error message if the **root_name_servers** column has an empty value when the **enable_custom_root_server** field is set to **True** in the imported CSV file. |
| enable_blackhole | Boolean | No |  |  | Enable blackhole setting. Example: False |
| blackhole | ACL | No |  |  | Indicates the list of banned addresses. Example: "NACL" or "12.0.0.12/Deny,1234::/64/Allow ,.." |
| notify_delay | Unsigned integer | No |  | notify_delay | This field specifies the seconds of delay the notify messages are sent to the secondaries. The valid value is between 5 and 86400 seconds. Example: 5 |
| enable_nxdomain_redirect | Boolean | No |  |  | Enable intercept and redirect nxdomain responses. Example: False |
| nxdomain_redirect_addresses | IP address list | No |  |  | Indicates the list of IPv4 addresses to redirect to for nxdomain responses. Example: "1.1.1.1,2.2.2.2,..." |
| nxdomain_redirect_ttl | Unsigned integer | No |  |  | Indicates the NXDOMAIN redirect ttl in seconds. Example: 60 |
| nxdomain_log_query | Boolean | No |  |  | If you set this to **True**, the appliance logs the NXDOMAIN redirections. Example: False |
| nxdomain_rulesets | Pattern list | No |  |  | Indicates the list of ruleset objects that are used for NXDOMAIN redirection. Example: pattern1/MODIFY, pattern2/PASS, ... |
| enable_blacklist | Boolean | No |  | enable_blacklist | Enable or disable blacklisting at the Grid level. Example: False |
| blacklist_redirect_addresses | IP address list | No |  | blacklist_redirect_   addresses   | Indicates the list of IPv4 addresses addresses to which the blacklisted queries are redirected. Example: 1.1.1.1,2.2.2.2 |
| blacklist_action | String | No | Action | blacklist_action | Indicates the action to be performed when a domain name matches the pattern defined in an assigned rule. Example: Refuse |
| blacklist_redirect_ttl | Unsigned integer | No |  |  | Indicates the TTL value of synthetic DNS responses resulted by blacklisted queries. Example: 60 |
| blacklist_log_query | Boolean | No |  | blacklist_log_query | Indicates if blacklisted queries must be logged. Example: False |
| blacklist_rulesets | List of domain names | No |  | blacklist_rulesets | Indicates the ruleset objects that are blacklisted at the Grid level. Example: list1.com, list2.com, ... |
| enable_dns64 | Boolean | No |  |  | Enable DNS64 synthesis. Example: False |
| dns64_groups | List of Dns64 groups | No |  |  | List of SynthesisGroup objects. Example: dns64_groupA, dns64_groupB, ... |
| max_cached_lifetime | Unsigned integer | No |  |  | Indicates the maximum time in seconds a DNS response can be stored in the hardware acceleration cache. You can specify unsigned integer between 60 and 86400. Default value is 86400. |
| dns_over_v6_mgmt | Boolean | No |  |  | Enable or disable DNS services on the IPv6 MGMT port. Example: False |
| dns_over_v6_lan2 | Boolean | No |  |  | Enable or disable DNS services on the IPv6 LAN2 port. Example: False |
| filter_aaaa | String | No |  |  | Indicates the type of AAAA filtering for this Grid DNS object. The default value is **No**. Example: Yes |
| filter_aaaa_list | ACL | No |  |  | Indicates the list of IPv4 addresses and networks from which queries are received. Note that the AAAA  filtering is applied to these addresses. Example: "12.0.0.12/Deny,13.0.0.0/8/Allow,.." or "NACL1" |
| dns_over_v6_lan | Boolean | No |  |  | Example: False |
| copy_xfer_to_notify | Boolean | No |  |  | Enable or disable copying of the allowed IP addresses from zone transfer list into also-notify statement in named.conf. Example: False |
| transfers_in | Unsigned integer | No |  |  | Indicates the number of maximum concurrent transfers for the Grid. You can specify unsigned integers between 10 and 100. The default value is 10. Example: 10 |
| transfers_out | Unsigned integer | No |  |  | Indicates the number of maximum outbound concurrent zone transfers for the Grid. You can specify unsigned integers between 10 and 100. The default value is 10. Example: 10 |
| transfers_per_ns | Unsigned integer | No |  |  | Indicates the number of maximum concurrent transfers per member for the Grid. You can specify unsigned integers between two and 100. The default value is two. Example: 2 |
| serial_query_rate | Unsigned integer | No |  |  | Indicates the number of maximum concurrent SOA queries per second for the Grid. You can specify unsigned integers between 20 and 100. The default value is 20. Example: 20 |
| max_cache_ttl | Unsigned integer | No |  |  | Indicates the maximum time (in seconds) for which the server will cache positive answers. The default value is 604800. |
| max_ncache_ttl | Unsigned integer | No |  |  | Indicates the maximum time (in seconds) for which the server will cache negative (NXDOMAIN) responses. The default value is 10800. The maximum allowed value is 604800. |
| disable_edns | Boolean | No |  |  | Enable or disable EDNS0 support for queries that require recursive resolution. The default value is **False.** |
| query_rewrite_enabled | Boolean | No |  |  | When this is set to **True,** query rewrite is enabled at the Grid level. Example: False |
| ADMGRP-XXXX | String | No | Permissions Admin Group/Role | permission | ADMGRP-JimSmith is an example of an admin permission of a specific admin group. Example: RW |
| rpz_drop_ip_rule_enabled | Boolean | No | Ignore RPZ-IP triggers with too small prefix lengths |  | When this is set to **True,** DNS server ignores RPZ-IP rules with prefix lengths that are less than the specified prefix length limit. Example: TRUE |
| rpz_drop_ip_rule_min_prefix_   length_ipv4 | Unsigned Integer | No | Minimum IPv4 Prefix Length |  | Indicates the minimum IPv4 prefix length for RPZ-IP triggers. The default value is 29. |
| rpz_drop_ip_rule_min_prefix_   length_ipv6 | Unsigned Integer | No | Maximum IPv4 Prefix Length |  | Indicates the minimum IPv6 prefix length for RPZ-IP triggers. The default value is 112. |
| atc_forwarding_enable | Boolean | No | Enable Recursive Queries Forwarding to Infoblox Threat Defense Cloud |  | Enable or disable the forwarding of DNS recursive queries to Infoblox Threat Defense Cloud. |
| atc_forwarding_access_key | String | No | Access Key |  | API Access Key for the current member. |
| atc_forwarding_resolver_address | IP Address | No | DFP Name Server |  | IP address of the local DNS resolver. |
| atc_forwarding_forward_first | Boolean | No | Fallback to a default resolver if ATC does not respond |  | Option to resolve the DNS query if there is any resolution failure in the Infoblox Threat Defense Cloud. |
