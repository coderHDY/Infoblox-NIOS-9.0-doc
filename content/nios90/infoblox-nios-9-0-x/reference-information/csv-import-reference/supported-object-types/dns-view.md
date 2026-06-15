---
title: "DNS View"
source: "/space/nios90/280268742"
pageId: "280268742"
---
| **Field** **Name** | **Data** **Type ** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage** **and** **Guideline** |
| --- | --- | --- | --- | --- | --- |
| Header-View | String | Yes |  |  | Identifies the first row as a header row for the DNS view objects.    Example: View |
| name | String | Yes |  |  | Example: dns_view1 |
| _new_name | String | No |  |  | Add this field to overwrite the **name** field when you select the **Overwrite** or **Merge** option.** ** |
| comment | String | No | Comment | comment | Example: This is a DNS view. |
| network_view | String | No | Network View | network_view | If no network view is specified, the default view is used. Example: Default |
| disable | Boolean | No | Disable | disable | Enable or disable view. Example: False |
| recursion | Boolean | No |  | allow_recursive_query | Flag to respond to recursive queries. Example: False |
| root_name_server_type | String | No |  |  | This is a single inheritance from GridDns. Example: Custom |
| match_clients | ACL | No |  |  | List of **address_tsig_ac** items. It can be an IP address, a network entry, **Any** or a **TSIG**-/permission. If the first value is not Any or TSIG-, it is assumed to be an IP address or a network entry. Example: 10.0.0.10/Allow, 11.0.0.0/16/Deny, TSIG-foo/xyz/Allow. It can also be a named ACL. Example: NACL1. |
| match_destinations | ACL | No |  |  | Indicates the match_destination list. It can be an IP address, a network, Any or a TSIG-/permission. If the first value is not **Any** or **TSIG-,** it is assumed to be an IP address or a network entry. Example: 10.0.0.10/Allow, 11.0.0.0/16/Deny, TSIG-foo/xyz/Allow. It can also be a named ACL. Example: NACL1. |
| custom_root_name_servers | Root nameserver list | No |  |  | List of custom root name servers. Example: rnm1.test.com/1.1.1.1/ |
| lame_ttl | Unsigned integer | No |  |  | Indicates the lame TTL value in seconds. Example: 600 |
| nxdomain_redirect | Boolean | No |  |  | Enable intercept and redirect nxdomain responses Example: False |
| nxdomain_redirect_addresses | IP address list | No |  |  | Example: 1.1.1.1,2.2.2.2    Note that the field **nxdomain_redirect_addresses** is dependent on the **nxdomain_redirect** field. Infoblox recommends that you specify values for **nxdomain_redirect_addresses** and **nxdomain_redirect** fields and do not leave these fields blank while performing a CSV import operation. |
| nxdomain_redirect_ttl | Unsigned integer | No |  |  | Indicates the NXDOMAIN redirect ttl in seconds. Example: 60 |
| nxdomain_log_query | Boolean | No |  |  | When you set this to **True**, NXDOMAIN redirections will be logged.Example: False |
| nxdomain_rulesets | List of domain names | No |  |  | List of Ruleset objects used for NXDOMAIN redirection. Example: nxd1.com, nxd2.com |
| enable_blacklist | Boolean | No |  | enable_blacklist | Enable or disable blacklisting at the Grid level. Example: False |
| blacklist_redirect_addresses | IP address list | No |  | blacklist_redirect_ addresses | Set or retrieve the list of IPv4 addresses to which the blacklisted queries are redirected.Example: 1.1.1.1,2.2.2.2 |
| blacklist_action | String | No |  |  | Specify the action to be performed when a domain name matches the pattern defined in an assigned rule. Example: Redirect |
| blacklist_redirect_ttl | Unsigned integer | No |  |  | Set or retrieve the TTL value of synthetic DNS responses resulted by blacklisted queries. Example: 60 |
| blacklist_log_query | Boolean | No |  | blacklist_log_query | Specify if blacklisted queries must be logged. Example: False |
| blacklist_rulesets | List of domain names | No |  | blacklist_rulesets | Specify or retrieve ruleset objects that are blacklisted at the Grid level. Example: list1.com, list2.com, ... |
| enable_dns64 | Boolean | No |  |  | Enable or disable DNS64 synthesis. Example: False |
| dns64_groups | DNS64    group list | No |  |  | List of SynthesisGroup objects. Example: dns64_grp1, dns64_grp2 |
| forwarders_only | Boolean | No | Use Forwarders Only | forward_only | Enable use of forwarders only. Example: False |
| forwarders | IP address list | No |  | forwarders | List of forwarders for zone transfers. Example: "10.10.0.1,20.20.0.1,.." |
| filter_aaaa | String | No |  |  | Indicates the type of AAAA filtering for this Grid DNS object. The default value is **No**. Example: Yes |
| filter_aaaa_list | ACL | No |  |  | Indicates the list of IPv4 addresses and networks from which queries are received. Note that the AAAA filtering is applied to these addresses.   Example: “12.0.0.12/Deny,13.0.0.0/8/Allow,. .” or “NACL1” |
| max_cache_ttl | Unsigned integer | No |  |  | Indicates the maximum time (in seconds) for which the server will cache positive answers. The default value is 604800. |
| max_ncache_ttl | Unsigned integer | No |  |  | Indicates the maximum time (in seconds) for which the server will cache negative (NXDOMAIN) responses. The default value is 10800. The maximum allowed value is 604800. |
| EA-Site | String | No | Extensible attribute | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. Example: California. |
| EA-Users | String | No | Extensible attribute | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. Example: John. |
| ADMGRP-XXXX | String | No | Permissions   Admin   Group/Role | permission | ADMGRP-JimSmith is an example of an admin permission of a specific admin group. Example: RW |
| rpz_drop_ip_rule_enabled | Boolean | No | Ignore RPZ-IP triggers with too small prefix lengths |  | When this is set to True, DNS server ignores RPZ-IP rules with prefix lengths that are less than the specified prefix length limit.   Example: TRUE |
| rpz_drop_ip_rule_min_prefix_length_ipv4 | Unsigned Integer | No | Minimum   IPv4 Prefix   Length |  | Indicates the minimum IPv4 prefix length for RPZ-IP triggers. The default value is 29. |
| rpz_drop_ip_rule_min_prefix_length_ipv6 | Unsigned Integer | No | Maximum IPv4 Prefix Length |  | Indicates the minimum IPv6 prefix length for RPZ-IP triggers. The default value is 112 |

For CSV import/export of IPv4 network containers, see [*IPv4 Network Container*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/supported-object-types/ipv4-network-container).
