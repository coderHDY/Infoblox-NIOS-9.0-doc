---
title: "Infoblox System Summary"
source: "/space/nios90/1363543174"
pageId: "1363543174"
---
| **Extracted Field Name** | **Description of the field** | **Reports** | **Values/Range** | **Source of Data** | **Remarks** |
| --- | --- | --- | --- | --- | --- |
| EA | Common Extracted Fields |  |  |  |  |
| HWTYPE | Common Extracted Fields |  |  |  |  |
| MAX_DB_OBJECTS | Common Extracted Fields |  |  |  |  |
| MAX_DHCP_LPS | Common Extracted Fields |  |  |  |  |
| MAX_DNS_QPS | Common Extracted Fields |  |  |  |  |
| MEMBER | Specifies the member |  | String. Example: infoblox.localdomain: inbound |  |  |
| MEMBER_IP | Common Extracted Fields |  |  |  |  |
| date_hour | Splunk Default field |  |  |  |  |
| date_mday | Splunk Default field |  |  |  |  |
| date_minute | Splunk Default field |  |  |  |  |
| date_month | Splunk Default field |  |  |  |  |
| date_second | Splunk Default field |  |  |  |  |
| date_wday | Splunk Default field |  |  |  |  |
| date_year | Splunk Default field |  |  |  |  |
| date_zone | Splunk Default field |  |  |  |  |
| eventtype | Splunk Default field |  |  |  |  |
| host | Splunk Default field |  |  |  |  |
| index | Splunk Default field |  |  |  |  |
| info_max_time | Common summary index fields |  |  |  |  |
| info_min_time | Common summary index fields |  |  |  |  |
| info_search_time | Common summary index fields |  |  |  |  |
| linecount | Splunk Default field |  |  |  |  |
| orig_host | Specifies the host name of the data source |  | Example: [http://infoblox.com](http://infoblox.com) |  | Splunk added default field |
| psrsvd_ct_CPU_PERCENT | Specifies the count information for the CPU_PERCENT field | si_cpu_usage |  |  | Splunk added special field |
| psrsvd_ct_MEMORY_PERCENT | Specifies the count information for the MEMORY_PERCENT field | si_memory_utilization |  |  | Splunk added special field |
| psrsvd_ct_TRAF_VALUE | Specifies the count information for TRAF_VALUE field | si_traffic_rate |  |  | Splunk added special field |
| psrsvd_gc | Here, gc = group count. This is the count for a stats grouping and it is not scoped to a single field. | si_memory_utilization,   si_traffic_rate, and   si_cpu_usage |  |  | Splunk added special field |
| psrsvd_nc_CPU_PERCENT | Specifies the numerical count information for CPU_PERCENT field | si_cpu_usage |  |  | Splunk added special field |
| psrsvd_nc_MEMORY_PERCENT | Specifies the numerical count information for MEMORY_PERCENT field | si_memory_utilization |  |  | Splunk added special field |
| psrsvd_nc_TRAF_VALUE | Specifies the numerical count information for TRAF_VALUE field | si_traffic_rate |  |  | Splunk added special field |
| psrsvd_sm_CPU_PERCENT | Specifies the sum for CPU_PERCENT field | si_cpu_usage |  |  | Splunk added special field |
| psrsvd_sm_MEMORY_PERCENT | Specifies the sum for MEMORY_PERCENT field | si_memory_utilization |  |  | Splunk added special field |
| psrsvd_sm_TRAF_VALUE | Specifies the sum for TRAF_VALUE field | si_traffic_rate |  |  | Splunk added special field |
| psrsvd_v | Here, v = version. This is not scoped to a single field. | si_memory_utilization,   si_traffic_rate, and   si_cpu_usage |  |  | Splunk added special field |
| psrsvd_vt_CPU_PERCENT | Contains precision of the CPU_PERCENT field | si_cpu_usage |  |  | Splunk added special field |
| psrsvd_vt_MEMORY_PERCENT | Contains precision of the MEMORY_PERCENT field | si_memory_utilization |  |  | Splunk added special field |
| psrsvd_vt_TRAF_VALUE | Contains precision of the TRAF_VALUE field | si_traffic_rate |  |  | Splunk added special field |
| **report** | **Specifies the name of the report that is populating the summary index** |  |  |  |  |
|  | **Index Disk Usage Report Data** | si_index_disk_usage |  |  |  |
|  | **Memory Utilization Trend data** | si_memory_utilization |  |  |  |
|  | **Traffic Rate by Member report data** | si_traffic_rate |  |  |  |
|  | **CPU Utilization Trend data** | si_cpu_usage |  |  |  |
| search_name | Common summary index fields |  |  |  |  |
| search_now | Common summary index fields |  |  |  |  |
| source | Splunk Default field |  |  |  |  |
| sourcetype | Splunk Default field |  |  |  |  |
| splunk_server | Splunk Default field |  |  |  |  |
| splunk_server_group | Splunk Default field |  |  |  |  |
| timeendpos | Common Extracted Fields |  |  |  |  |
| timestartpos | Common Extracted Fields |  |  |  |  |
