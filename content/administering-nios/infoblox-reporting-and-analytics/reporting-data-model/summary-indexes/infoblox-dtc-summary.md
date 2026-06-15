---
title: "Infoblox DTC Summary"
source: "/space/nios90/1363608895"
pageId: "1363608895"
---
| **Extracted Field Name** | **Description of the field** | **Reports** | **Values/Range** | **Source of Data** | **Remarks** |
| --- | --- | --- | --- | --- | --- |
| EA | Common Extracted Fields |  |  |  |  |
| HWTYPE | Common Extracted Fields |  |  |  |  |
| MAX_DB_OBJECTS | Common Extracted Fields |  |  |  |  |
| MAX_DHCP_LPS | Common Extracted Fields |  |  |  |  |
| MAX_DNS_QPS | Common Extracted Fields |  |  |  |  |
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
| Monitor | Specifies the monitor |  | String. Example: https | Infoblox DTC summary |  |
| orig_host | Specifies the host name of the data source |  | Example: [http://infoblox.com](http://infoblox.com) |  | Splunk added default field |
| pool | Specifies the Pool |  | String. Example: Pool | Infoblox DTC summary |  |
| psrsvd_ct_available | Specifies the count information for available field | si_adns_resource_pool_availability   and   si_smart_dns_resource_availability |  |  | Splunk added special field |
| psrsvd_ct_response_count | Specifies the count information for response_count field | si_dtc_response_distribution |  |  | Splunk added special field |
| psrsvd_ct_unavailable | Specifies the count information for unavailable field | si_adns_resource_pool_availability   and   si_smart_dns_resource_availability |  |  | Splunk added special field |
| psrscd_ct_value | Specifies the count information for value field | si_smart_dns_resource_snmp |  |  | Splunk added special field |
| psrsvd_gc | Here, gc = group count. This is the count for stats grouping and it is not scoped to a single field. | si_dtc_response_distribution,   si_smart_dns_resource_snmp,   si_adns_resource_pool_availability,    and   si_smart_dns_resource_availability |  |  | Splunk added special field |
| psrsvd_nc_available | Specifies the numerical count information for available field | si_adns_resource_pool_availability   and   si_smart_dns_resource_availability |  |  | Splunk added special field |
| psrsvd_nc_response_count | Specifies the numerical count information for response_count field | si_dtc_response_distribution |  |  | Splunk added special field |
| psrsvd_nc_unavailable | Specifies the numerical count information for unavailable field | si_adns_resource_pool_availability   and   si_smart_dns_resource_availability |  |  | Splunk added special field |
| psrsvd_nc_value | Specifies the numerical count information for value field | si_smart_dns_resource_snmp |  |  | Splunk added special field |
| psrsvd_sm_available | Specifies the sum information for available field | si_adns_resource_pool_availability   and   si_smart_dns_resource_availability |  |  | Splunk added special field |
| psrsvd_sm_response_count | Specifies the sum information for response_count field | si_dtc_response_distribution |  |  | Splunk added special field |
| psrsvd_sm_unavailable | Specifies the sum information for unavailable field | si_adns_resource_pool_availability and   si_smart_dns_resource_availability |  |  | Splunk added special field |
| psrsvd_sm_value | Specifies the sum information for value field | si_smart_dns_resource_snmp |  |  | Splunk added special field |
| psrsvd_v | Here, v = version. This is not scoped to a single field. | si_dtc_response_distribution,   si_smart_dns_resource_snmp,   si_adns_resource_pool_availability, and   si_smart_dns_resource_availability |  |  | Splunk added special field |
| psrsvd_vt_available | Contains precision of the available field | si_adns_resource_pool_availability and   si_smart_dns_resource_availability |  |  | Splunk added special field |
| psrsvd_vt_response_count | Contains precision of the response_count field | si_dtc_response_distribution |  |  | Splunk added special field |
| psrsvd_vt_unavailable | Contains precision of the unavailable field | si_adns_resource_pool_availability and   si_smart_dns_resource_availability |  |  | Splunk added special field |
| psrsvd_vt_value | Contains precision of the value field | si_smart_dns_resource_snmp |  |  | Splunk added special field |
| **report** | **Name of the report that populates the summary index** |  |  |  |  |
|  | **DNS Traffic Control Response Distribution Trend data** | si_dtc_response_distribution |  |  |  |
|  | **DNS Traffic Control Resource Pool Availability reports data** | si_adns_resource_pool_availability |  |  |  |
|  | **DNS Traffic Control Resource SNMP reports data** | si_smart_dns_resource_snmp |  |  |  |
|  | **DNS Traffic Control Resource Availability reports data** | si_smart_dns_resource_availability |  |  |  |
| resource | Specifies the resource |  | String. Example: Server | Infoblox DTC summary |  |
| search_name | Common summary index fields |  |  |  |  |
| search_now | Common summary index fields |  |  |  |  |
| source | Splunk Default field |  |  |  |  |
| sourcetype | Splunk Default field |  |  |  |  |
| splunk_server | Splunk Default field |  |  |  |  |
| splunk_server_group | Splunk Default field |  |  |  |  |
| timeendpos | Common Extracted Fields |  |  |  |  |
| timestartpos | Common Extracted Fields |  |  |  |  |
