---
title: "Other Supported Objects"
source: "/space/nios90/280402168"
pageId: "280402168"
---
| **Other **** ****Supported **** ****Objects** | **Required**** **** Fields **** ****and **** ****Syntax** |
| --- | --- |
| Grid Member | *Grid Member* |
| Upgrade Groups   Distribution Schedules   Upgrade Schedules | *Upgrade Groups and Schedules* |
| Named ACLs (access control lists) | *Named ACLs*   *ACES in Named ACLs* |
| Infoblox Network Insight | *Discovery Credentials* |

# Grid DNS Objects

| **Field**** ****Name** | **Data**** ****Type** | **Required**** ****(Yes/No)** | **Associated**** ****GUI**** ****Field** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-GridDNS | String | Yes |  |  | Identifies the first row as a header row for the Grid DNS objects. Example: GridDNS |
| refresh | Unsigned integer | No |  |  | Indicates the refresh time in seconds. Example: 10800 |
| retry | Unsigned integer | No |  |  | Indicates the retry time in seconds. Example: 3600 |
| expire | Unsigned integer | No |  |  | Indicates the expiration time in seconds. Example: 2419200 |
| default_ttl | Unsigned integer | No |  |  | Indicates the default TTL value in seconds. Example: 28800 |
| negative_ttl | Unsigned integer | No |  |  | Indicates the negative TTL value in seconds. Example: 900 |
| lame_ttl | Unsigned integer | No |  |  | Indicates the lame TTL value in seconds. Example: 600 |
| email | String | No |  |  | Indicates the email address. Example: admin@xyz.com |
| enable_secondary_notify | Boolean | No |  |  | Enable Grid secondaries to send notification. Example: False |
| enable_notify_source_port | Boolean | No |  |  | Enable notification source port Example: False |
| notify_source_port | Unsigned integer | No |  |  | Indicates notify-source port number. |
| enable_query_source_port | Boolean | No |  |  | Enable query source port. Example: False |
|  |  |  |  |  |  |
| query_source_port | Unsigned integer | No |  |  | Indicates query-source port number. |
| allow_transfer | ACL | No | Allow zone transfers to | allow_transfer | List of **address_tsig_ac** items. Example: NACL1or    "12.0.0.12/Deny,1234::/64/Allow". Note that you can import the name of a named ACL in this field. |
| excluded_servers | IP address list | No |  |  | List of excluded servers for zone transfers. |
| zone_transfer_format_option | String | No |  |  | Indicates the zone transfer format. Example: MANY_ANSWERS |
| allow_query | ACL | No | Allow queries from | allow_query | List of **address_tsig_ac** items. It can be an IP address, a network entry, Any or a TSIG-/permission. If the first value is not **Any** or **TSIG**-, it is assumed to be an IP address or a network entry. Example: 10.0.0.10/Allow, 11.0.0.0/16/Deny, TSIG-foo/xyz/Allow. It can also be a named ACL. Example: NACL1. |
| recursion_enabled | Boolean | No |  |  | Indicates the flag to respond to recursive queries. Example: False |
| recursive_query_list | ACL | No |  |  | It can be an IP address, a network entry, Any or a TSIG-/permission. If the first value is not **Any** or **TSIG**-, it is assumed to be an IP address or a network entry. Example: 10.0.0.10/Allow, 11.0.0.0/16/Deny,TSIG-foo/xyz/Allow. It can also be a named ACL. Example: NACL1. |
| allow_update | ACL | No | Allow updates from | allow_update | List of **address_tsig_ac** items. It can be an IP address, a network entry, Any or a TSIG-/permission. If the first value is not **Any** or **TSIG**-, it is assumed to be an IP address or a network entry. Example: 10.0.0.10/Allow, 11.0.0.0/16/Deny, TSIG-foo/xyz/Allow. It can also be a named ACL. Example: NACL1. |
| allow_update_forwarding | Boolean | No | Allow updates from | forward_to | Enable update forwarding for secondary zones. Example: False |
| allow_bulkhost_ddns | String | No |  |  | Enable updates to PTR records sourced from a bulkhost. Example: Refuse |
| forwarders_only | Boolean | No | Use Forwarders Only |  | Enable use of forwarders only. Example: False |
| allow_forwarder | IP address list | No |  |  | Indicates the list of forwarders. |
| enable_custom_root_server | Boolean | No |  |  | Indicates the flag to enable custom root servers. Example: False |
| root_name_servers | Root nameserver list | No |  |  | Indicates the list of custom root servers. Example: rnm1.test.com/1.1.1.1/,...    The appliance displays an error message if the **root_name_servers** column has an empty value when the **enable_custom_root_server** field is set to **True** in the imported CSV file. |
| enable_blackhole | Boolean | No |  |  | Enable blackhole setting. Example: False |
| blackhole | ACL | No |  |  | Indicates the list of banned addresses. Example: "NACL" or "12.0.0.12/Deny,1234::/64/Allow,.." |
| notify_delay | Unsigned integer | No |  | notify_delay | This field specifies the seconds of delay the notify messages are sent to the secondaries. The valid value is between 5 and 86400 seconds.    Example: 5 |
| enable_nxdomain_redirect | Boolean | No |  |  | Enable intercept and redirect nxdomain responses. Example: False |
| nxdomain_redirect_addresses | IP address list | No |  |  | Indicates the list of IPv4 addresses to redirect to for nxdomain responses. Example: "1.1.1.1,2.2.2.2,..." |
| nxdomain_redirect_ttl | Unsigned integer | No |  |  | Indicates the NXDOMAIN redirect ttl in seconds. Example: 60 |
| nxdomain_log_query | Boolean | No |  |  | If you set this to **True**, the appliance logs the NXDOMAIN redirections.    Example: False |
| nxdomain_rulesets | Pattern list | No |  |  | Indicates the list of ruleset objects that are used for NXDOMAIN redirection.    Example: pattern1/MODIFY, pattern2/PASS, ... |
| enable_blacklist | Boolean | No |  | enable_blacklist | Enable or disable blacklist redirection at the Grid level. Example: False |
| blacklist_redirect_addresses | IP address list | No |  | blacklist_ redirect_ addresses | Indicates the list of IPv4 addresses to which the blacklisted queries are redirected. Example: 1.1.1.1,2.2.2.2 |
| blacklist_action | String | No | Action | blacklist_action | Indicates the action to be performed when a domain name matches the pattern defined in an assigned rule. Example: Refuse |
| blacklist_redirect_ttl | Unsigned integer | No |  | blacklist_ redirect_ttl | Indicates the blacklist redirect TTL value in seconds. Example: 60 |
| blacklist_log_query | Boolean | No |  | blacklist_log_ query | When this is set to **True**, blacklisted queries are logged. Example: False |
| blacklist_rulesets | List of domain names | No |  | blacklist_ rulesets | List of ruleset objects that are used for blacklist redirection. Example: list1.com, list2.com, ... |
| enable_dns64 | Boolean | No |  |  | Enable DNS64 synthesis. Example: False |
| dns64_groups | List of Dns64 groups | No |  |  | List of SynthesisGroup objects. Example: dns64_groupA, dns64_groupB, ... |
| host_rrset_order | Boolean | No |  |  | Specify **True** to set the **enable_host_rrset_order** flag or **False** to deactivate **enable_host_rrset_order** value at the Grid level. Example: False |
| preserve_host_rrset_order_on_ secondaries | Boolean | No |  |  | Specify **True** to set the **preserve_host_rrset_order_on_second** **aries** flag or **False** to deactivate **preserve_host_rrset_order_on_second** **aries** value at the Grid level. The default value is **False**. Example: False |
| filter_aaaa | String | No |  |  | Indicates the type of AAAA filtering for this Grid DNS object. The default value is **No**. Example: Yes |
| filter_aaaa_list | ACL | No |  |  | Indicates the list of IPv4 addresses and networks from which queries are received. Note that the AAAA filtering is applied to these addresses. Example: "12.0.0.12/Deny,13.0.0.0/8/Allow,.." or "NACL1" |
| copy_xfer_to_notify | Boolean | No |  |  | Enable or disable copying of the allowed IP addresses from zone transfer list into also-notify statement in named.conf. Example: False |
| transfers_in | Unsigned integer | No |  |  | Indicates the number of maximum concurrent transfers for the Grid. You can specify unsigned integers between 10 and 100. The default value is 10.    Example: 10 |
| transfers_out | Unsigned integer | No |  |  | Indicates the number of maximum outbound concurrent zone transfers for the Grid. You can specify unsigned integers between 10 and 100. The    default value is 10. Example: 10 |
| transfers_per_ns | Unsigned integer | No |  |  | Indicates the number of maximum concurrent transfers per member for the Grid. You can specify unsigned integers between two and 100. The default value is two. Example: 2 |
| serial_query_rate | Unsigned integer | No |  |  | Indicates the number of maximum concurrent SOA queries per second for the Grid. You can specify unsigned integers between 20 and 100. The    default value is 20. Example: 20 |
| max_cache_ttl | Unsigned integer | No |  |  | Indicates the maximum time (in seconds) for which the server will cache positive answers. The default value is 604800. |
| max_ncache_ttl | Unsigned integer | No |  |  | Indicates the maximum time (in seconds) for which the server will cache negative (NXDOMAIN) responses. The default value is 10800. The maximum allowed value is 604800. |
| disable_edns | Boolean | No |  |  | Enable or disable EDNS0 support for queries that require recursive resolution. The default value is **False**. |
| query_rewrite_enabled | Boolean | No |  |  | When this is set to **True**, query rewrite is enabled at the Grid level. Example: False |
| query_rewrite_domain_names | List of domain names | No |  |  | Indicates the list of domain names that trigger DNS query rewrite.Example: "aa.com, bb.com." |
| query_rewrite_prefix | String | No |  |  | Indicates the domain name prefix for DNS query rewrite. The default value is **undefined**. |
| rpz_drop_ip_rule_enabled | Boolean | No | Ignore RPZ-IP    triggers with too smallprefix lengths |  | When this is set to **True**, DNS server ignores RPZ-IP rules with prefix lengths that are less than the specified prefix length limit. Example: TRUE |
| rpz_drop_ip_rule_min_prefix_leng th_ipv4 | Unsigned Integer | No | Minimum IPv4 Prefix Length |  | Indicates the minimum IPv4 prefix length for RPZ-IP triggers. The default value is 29. |
| rpz_drop_ip_rule_min_prefix_leng th_ipv6 | Unsigned Integer | No | Minimum IPv6 Prefix Length |  | Indicates the minimum IPv6 prefix length for RPZ-IP triggers. The default value is 112. |
| rpz_hit_rate_interval | Unsigned Integer | No | Interval |  | Indicates the minimum time interval in seconds between RPZ hit rate checks. The default interval is 10 seconds. |
| rpz_hit_rate_min_query | Unsigned Integer | No | Minimum query |  | Indicates the minimum number of queries between RPZ hit rate checks. The default value is 1000. |
| rpz_hit_rate_max_query | Unsigned Integer | No | Maximum query |  | Indicates the maximum number of queries between RPZ hit rate checks. The default value is 100000. |
