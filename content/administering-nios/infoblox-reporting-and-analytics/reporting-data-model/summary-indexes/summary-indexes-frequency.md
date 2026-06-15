---
title: "Summary Indexes Frequency"
source: "/space/nios90/1363738889"
pageId: "1363738889"
---
The field frequencies of all fields for each summary index are as mentioned below:

| **Summary Index** | **Report** | **Frequency** | **Cron Schedule** | **Earliest**    **Time** | **Latest**    **Time** |
| --- | --- | --- | --- | --- | --- |
| ib_dns_summary | si_dns_reclaimed_object_count_trend | At every 30<sup>th</sup> minute from 21 through 59 | 21-59/30 * * * * | 30m@m | 60m@m |
|  | si_dns_top_clients | At every 30<sup>th</sup> minute from 2 through 59 | 2-59/30 * * * * | 30m@m | 60m@m |
|  | si_dns_query_reply | At every 30<sup>th</sup> minute from 18 through 59 | 18-59/30 * * * * | 30m@m | 60m@m |
|  | si_top_servfail_received_queries | At every 30<sup>th</sup> minute from 7 through 59 | 7-59/30 * * * * | 30m@m | 60m@m |
|  | si_dns_response_latency_trend | At every 30<sup>th</sup> minute from 20 through 59 | 20-59/30 * * * * | 30m@m | 60m@m |
|  | si_dns_member_qps_trend_per_hour | At minute 34 | 34 * * * * | @h | -1h@h |
|  | si_top_nxdomain_query | At every 30<sup>th</sup> minute from 5 through 59 | 5-59/30 * * * * | 30m@m | 60m@m |
|  | si_dns_member_qps_trend_per_day | Every day 32 minutes past midnight | 32 0 * * * | @d | -1d@d |
|  | si_dns_member_qps_trend | At every 30<sup>th</sup> minute from 12 through 59 | 12-59/30 * * * * | 30m@m | 60m@m |
|  | si_dns_requested_domain | At every 30<sup>th</sup> minute from 4 through 59 | 4-59/30 * * * * | 30m@m | 60m@m |
|  | si_dns_qps_trend | At every 30<sup>th</sup> minute from 10 through 59 | 10-59/30 * * * * | 30m@m | 60m@m |
|  | si_top_servfail_sent_queries | At every 30<sup>th</sup> minute from 6 through 59 | 6-59/30 * * * * | 30m@m | 60m@m |
|  | si_ddns_update | At every 30<sup>th</sup> minute from 6 through 59 | 6-59/30 * * * * | 30m@m | 60m@m |
|  | si_dns_cache_hit_ratio | At every 30<sup>th</sup> minute from 8 through 59 | 8-59/30 * * * * | 30m@m | 60m@m |
|  | si_top_timeout_queries | At every 30<sup>th</sup> minute from 8 through 59 | 8-59/30 * * * * | 30m@m | 60m@m |
|  | si_dns_rpz_hits | At every 10<sup>th</sup> minute from 2 through 59 | 2-59/10 * * * * | 10m@m | 20m@m |
|  | si_top_clients_per_domain | At every 30<sup>th</sup> minute from 3 through 59 | 3-59/30 * * * * | 30m@m | 60m@m |
| ib_dhcp_summary | si_dhcp_message | At every 30<sup>th</sup> minute from 14 through 59 | 14-59/30 * * * * | 30m@m | 60m@m |
|  | si_dhcp_usage_trend | At 22 minutes past every 8<sup>th</sup> hour | 22 */8 * * * | 15m@m | 495m@m |
|  | si_dhcp_top_lease_client | At every 30<sup>th</sup> minute from 16 through 59 | 16-59/30 * * * * | 30m@m | 60m@m |
|  | si_devices_denied_an_ip_address | At every 30<sup>th</sup> minute from 19 through 59 | 19-59/30 * * * * | 30m@m | 60m@m |
|  | si_dhcp_range_utilization_trend | At 24 minutes past every 8<sup>th</sup> hour | 24 */8 * * * | 15m@m | 495m@m |
|  | si_dhcp_top_os_by_network | At every 30<sup>th</sup> minute from 16 through 59 | 16-59/30 * * * * | 30m@m | 60m@m |
| ib_dtc_summary | si_dtc_response_distribution | At 37 minutes past every 6<sup>th</sup> hour | 37 */6 * * * | 10m@m | 370m@m |
|  | si_adns_resource_pool_availability | At 23 minutes past every 6<sup>th</sup> hour | 23 */6 * * * | 10m@m | 370m@m |
|  | si_smart_dns_resource_snmp | At 47 minutes past every 6<sup>th</sup> hour | 47 */6 * * * | 10m@m | 370m@m |
|  | si_smart_dns_resource_availability | At 47 minutes past every 6<sup>th</sup> hour | 47 */6 * * * | 10m@m | 370m@m |
| ib_system_summary | si_index_disk_usage | At 37 minutes past every 6<sup>th</sup> hour | 37 */6 * * * | 10m@m | 370m@m |
|  | si_memory_utilization | At every 30<sup>th</sup> minute from 26 through 59 | 26-59/30 * * * * | 30m@m | 60m@m |
|  | si_traffic_rate | At every 30<sup>th</sup> minute from 28 through 59 | 28-59/30 * * * * | 30m@m | 60m@m |
|  | si_cpu_usage | At every 30<sup>th</sup> minute | */30 * * * * | 30m@m | 60m@m |
| ib_security_summary | si_dns_tunneling_activity | At every 3030<sup>th</sup> th minute from 11 through 59 | 11-59/30 * * * * | 30m@m | 60m@m |

**Note**:

- **cron schedule** - cron time scheduled to execute a search
- **earliest time** - specifies the earliest time for a search
- **latest time** - specifies the latest time for a saved search
