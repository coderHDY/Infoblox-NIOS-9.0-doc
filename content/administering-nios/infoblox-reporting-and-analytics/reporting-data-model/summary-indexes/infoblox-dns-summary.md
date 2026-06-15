---
title: "Infoblox DNS Summary"
source: "/space/nios90/1363738930"
pageId: "1363738930"
---
Note: *psrsvd* stands for *prestats reserved{*}. Syntax is psrsvd_\[type\]_\[fieldname\]. These special fields are added by Splunk to summary index data that begins with *psrsvd* when you initiate search using the *si** command to populate a summary index. See [*List of available psrsvd types*](http://docs.splunk.com/Documentation/Splunk/latest/Knowledge/Usesummaryindexing) from Splunk docs.

| **Extracted Field Name** | **Description of the field** | **Reports** | **Values/Range** | **Source of Data** | **Remarks** |
| --- | --- | --- | --- | --- | --- |
| CLIENT | Specifies the IP address of the DNS client |  | Example: 10.39.18.60 |  |  |
| COUNT | Specifies the count of DNS queries | si_dns_top_clients | Integer |  |  |
|  | Specifies the count of SERVFAIL errors that are received for DNS clients | si_top_servfail_received_queries | Integer |  |  |
|  | Specifies the count of NXDOMAIN/NOERROR replies for DNS clients | si_top_nxdomain_query | Integer |  |  |
|  | Specifies the count of DNS domain name requests | si_dns_requested_domain | Integer |  |  |
|  | Specifies the count of DNS queries per second | si_dns_qps_trend | Integer |  |  |
|  | Specifies the count of DNS SERVFAIL errors that are sent for DNS queries | si_top_servfail_sent_queries | Integer |  |  |
|  | Specifies the count of DNS timed-out recursive queries | si_top_timeout_queries | Integer |  |  |
|  | Specifies the average count of DNS RPX hits | si_dns_rpz_hits | Integer |  |  |
|  | Specifies the count of DNS clients per domain | si_top_clients_per_domain | Integer |  |  |
| EA | Common Extracted Fields |  |  |  |  |
| FQDN | Specifies the fully qualified domain name | si_dns_requested_domain and    si_top_clients_per_domain | Example: 213.31.102.10.in-addr.arpa |  |  |
| HWTYPE | Common Extracted Fields |  |  |  |  |
| MAX_DB_OBJECTS | Common Extracted Fields |  |  |  |  |
| MAX_DHCP_LPS | Common Extracted Fields |  |  |  |  |
| MAX_DNS_QPS | Common Extracted Fields |  |  |  |  |
| MEMBER | Specifies the member |  | String | Infoblox DNS Summary |  |
| MEMBER_IP | Common Extracted Fields |  |  |  |  |
| TLD | Specifies top level domain names | si_dns_requested_domain | Example: arpa |  |  |
| TYPE | Specifies the DNS response type | si_dns_query_reply,    si_dns_qps_trend, and    si_ddns_update | SUCCESS/NOERROR **OR**   REFERRAL **OR**   NXRRSET **OR**   NXDOMAIN **OR**   REFUSED **OR**   OTHER |  |  |
| VIEW | It refers to the DNS view key to map DNS view through lookup. See display_name field. | si_dns_requested_domain,    si_dns_top_clients,    si_dns_member_qps_trend_per_hour, si_dns_member_qps_trend_per_day,    si_dns_member_qps_trend,    si_dns_qps_trend,    si_ddns_update,    si_dns_cache_hit_ratio,    si_dns_rpz_hits,    si_top_clients_per_domain,    si_top_timeout_queries,    si_top_servfail_sent_queries,    si_top_nxdomain_query, and    si_top_servfail_received_queries | Example: _default |  |  |
| date_hour | Splunk Default field |  |  |  |  |
| date_mday | Splunk Default field |  |  |  |  |
| date_minute | Splunk Default field |  |  |  |  |
| date_month | Splunk Default field |  |  |  |  |
| date_second | Splunk Default field |  |  |  |  |
| date_wday | Splunk Default field |  |  |  |  |
| date_year | Splunk Default field |  |  |  |  |
| date_zone | SplunkReporting Data Model |  |  |  |  |
| display_name | Specifies the DNS view | si_dns_requested_domain,    si_dns_top_clients,    si_dns_member_qps_trend_per_hour,   si_dns_member_qps_trend_per_day,    si_dns_member_qps_trend,    si_dns_qps_trend,    si_ddns_update,    si_dns_cache_hit_ratio,    si_dns_rpz_hits,    si_top_clients_per_domain,    si_top_timeout_queries,    si_top_servfail_sent_queries,    si_top_nxdomain_query, and    si_top_servfail_received_queries | Example: default.MS-2016 |  |  |
| eventtype | Splunk Default field |  |  |  |  |
| host | Splunk Default field |  |  |  |  |
| index | Splunk Default field |  |  |  |  |
| info_max_time | Common summary index fields |  |  |  |  |
| info_min_time | Common summary index fields |  |  |  |  |
| info_search_time | Common summary index fields |  |  |  |  |
| linecount | Splunk Default field |  |  |  |  |
| orig_host | Specifies the host name of the data source |  | Example: [http://infoblox.com](http://infoblox.com) |  | Splunk added default field |
| psrsvd_ct_COUNT | Here, ct = count. It contains the count information for the COUNT field. | si_dns_query_reply and si_dns_qps_trend |  |  | Splunk added special field |
| psrsvd_ct_LATENCY | Contains the count information for the LATENCY field | si_dns_response_latency_trend |  |  | Splunk added special field |
| psrsvd_ct_QCOUNT | Contains the count information for the QCOUNT field | si_dns_member_qps_trend_per_hour,   si_dns_member_qps_trend_per_day,    and si_dns_member_qps_trend |  |  | Splunk added special field |
| psrsvd_gc | Here, gc = group count. It indicates the count for stats grouping and it is not scoped to a single field. | si_dns_query_reply,   si_dns_response_latency_trend,   si_dns_member_qps_trend_per_hour,   si_dns_member_qps_trend_per_day,   si_dns_member_qps_trend, and    si_dns_qps_trend |  |  | Splunk added special field |
| psrsvd_nc_COUNT | Here, nc = numerical count. It indicates the number of numerical values and contains the numerical count information for the COUNT field. | si_dns_query_reply and    si_dns_qps_trend |  |  | Splunk added special field |
| psrsvd_nc_LATENCY | Contains the numerical count information for the LATENCY field | si_dns_response_latency_trend |  |  | Splunk added special field |
| psrsvd_nc_QCOUNT | Contains the numerical count information for the QCOUNT field | si_dns_member_qps_trend_per_hour,   si_dns_member_qps_trend_per_day,    and si_dns_member_qps_trend |  |  | Splunk added special field |
| psrsvd_nx_QCOUNT | Here, nx = maximum numerical value. It contains the maximum numerical value information for the QCOUNT field. | si_dns_member_qps_trend_per_hour and    si_dns_member_qps_trend_per_day |  |  | Splunk added special field |
| psrsvd_sm_COUNT | Here, sm = sum. It contains the sum information for the COUNT field. | si_dns_query_reply and    si_dns_qps_trend |  |  | Splunk added special field |
| psrsvd_sm_LATENCY | Contains the sum information for the LATENCY field. | si_dns_response_latency_trend |  |  | Splunk added special field |
| psrsvd_sm_QCOUNT | Contains the sum information for the QCOUNT field | si_dns_member_qps_trend_per_hour,   si_dns_member_qps_trend_per_day,    and si_dns_member_qps_trend |  |  | Splunk added special field |
| psrsvd_sx_QCOUNT | Here, sx = maximum lexicographical value.    It contains the maximum lexicographical value information for the QCOUNT field | si_dns_member_qps_trend_per_hour   and si_dns_member_qps_trend_per_day |  |  | Splunk added special field |
| psrsvd_v | Here, v = version. This is not scoped to a single field. | si_dns_query_reply,   si_dns_response_latency_trend,   si_dns_member_qps_trend_per_hour,   si_dns_member_qps_trend_per_day,   si_dns_member_qps_trend, and   si_dns_qps_trend |  |  | Splunk added special field |
| psrsvd_vt_COUNT | Here, vt = value type. It contains precision of the associated field.    This field contains precision of the COUNT field. | si_dns_query_reply and    si_dns_qps_trend |  |  | Splunk added special field |
| psrsvd_vt_LATENCY | Contains precision of the LATENCY field | si_dns_response_latency_trend |  |  | Splunk added special field |
| psrsvd_vt_QCOUNT | Contains precision of the QCOUNT field | si_dns_member_qps_trend_per_hour,   si_dns_member_qps_trend_per_day,    and si_dns_member_qps_trend |  |  | Splunk added special field |
| **report** | **Contains the name of the report that populates the summary index** |  |  |  |  |
|  | **DNS Scavenge Object Count Trend data** | si_dns_reclaimed_object_count_trend |  |  |  |
|  | **DNS Top Clients report data** | si_dns_top_clients |  |  |  |
|  | **DNS Replies Trend data** | si_dns_query_reply |  |  |  |
|  | **DNS Top SERVFAIL Errors Received Report data** | si_top_servfail_received_queries |  |  |  |
|  | **DNS Response Latency Trend data** | si_dns_response_latency_trend |  |  |  |
|  | **DNS Daily Peak Hour Query Rate by Member Report data** | si_dns_member_qps_trend_per_hour |  |  |  |
|  | **DNS Top NXDOMAIN / NOERROR (no data) Report data** | si_top_nxdomain_query |  |  |  |
|  | **DNS Daily Query Rate by Member Report data** | si_dns_member_qps_trend_per_day |  |  |  |
|  | **DNS Query Rate by Member Report data** | si_dns_member_qps_trend |  |  |  |
|  | **DNS Top Requested Domain Names Report data** | si_dns_requested_domain |  |  |  |
|  | **DNS Queries Per Second Trend data** | si_dns_qps_trend |  |  |  |
|  | **DNS Top SERVFAIL Errors Sent Report data** | si_top_servfail_sent_queries |  |  |  |
|  | **DDNS Update Rate Trend data** | si_ddns_update |  |  |  |
|  | **DNS Cache Hit Rate Trend data** | si_dns_cache_hit_ratio |  |  |  |
|  | **DNS Top Timed-Out Recursive Queries Report data** | si_top_timeout_queries |  |  |  |
|  | **DNS RPZ Hits Reports data** | si_dns_rpz_hits |  |  |  |
|  | **DNS Top Clients per Domain Report data** | si_top_clients_per_domain |  |  |  |
| search_name | Common summary index fields |  |  |  |  |
| search_now | Common summary index fields |  |  |  |  |
| source | Splunk Default field |  |  |  |  |
| sourcetype | Splunk Default field |  |  |  |  |
| splunk_server | Splunk Default field |  |  |  |  |
| splunk_server_group | Splunk Default field |  |  |  |  |
| timeendpos | Common Extracted Fields |  |  |  |  |
| timestartpos | Common Extracted Fields |  |  |  |  |
