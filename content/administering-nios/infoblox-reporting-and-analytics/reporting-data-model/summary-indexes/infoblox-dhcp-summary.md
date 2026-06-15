---
title: "Infoblox DHCP Summary"
source: "/space/nios90/1363837285"
pageId: "1363837285"
---
| **Extracted Field Name** | **Description of the field** | **Reports** | **Values/Range** | **Source of Data** | **Remarks** |
| --- | --- | --- | --- | --- | --- |
| ACTION | Specifies the action |  | String. Example: Issued | Infoblox DHCP summary |  |
| DEVICE_CLASS | Specifies the device class |  | String. Example: Linux |  |  |
| DHCP_RANGE | Specifies the DHCP range |  | Network range. Example: 10.0.0.1-10.0.0.200 |  |  |
| EA | Common Extracted fields |  |  |  |  |
| FP | Specifies the fingerprint data |  | String. Example: No Match | Infoblox DHCP summary |  |
| HWTYPE | Common Extracted Fields |  |  |  |  |
| LEASED_IP | Specifies the lease IP address |  | IP address | Infoblox DHCP summary |  |
| MAC_DUID | Specifies the MAC address |  | MAC address | Infoblox DHCP summary |  |
| MAX_DB_OBJECTS | Common Extracted Fields |  |  |  |  |
| MAX_DHCP_LPS | Common Extracted Fields |  |  |  |  |
| MAX_DNS_QPS | Common Extracted Fields |  |  |  |  |
| MEMBER_IP | Common Extracted Fields |  |  |  |  |
| Protocol | Specifies the DHCP protocol |  | String. Example: IPV4 | Infoblox DHCP summary |  |
| SFP | Specifies the SFP |  | String. Example: Ubuntu/Debian 5/Knoppix 6 |  |  |
| VIEW | It refers to the DNS view key to map the DNS view through lookup. See display_name field |  | String |  |  |
| date_hour | *Splunk Default field* |  |  |  |  |
| date_mday | Splunk Default field |  |  |  |  |
| date_minute | Splunk Default field |  |  |  |  |
| date_month | Splunk Default field |  |  |  |  |
| date_second | Splunk Default field |  |  |  |  |
| date_wday | Splunk Default field |  |  |  |  |
| date_year | Splunk Default field |  |  |  |  |
| date_zone | Splunk Default field |  |  |  |  |
| dhcp_utilization_status | Specifies the DHCP utilization status |  | String | Infoblox DHCP summary |  |
| display_name | Specifies the DNS view |  | String |  |  |
| end_address | Specifies the end IP address |  | IP address | Infoblox DHCP summary |  |
| eventtype | Splunk Default field |  |  |  |  |
| host | Splunk Default field |  |  |  |  |
| index | Splunk Default field |  |  |  |  |
| info_max_time | Common summary index fields |  |  |  |  |
| info_min_time | Common summary index fields |  |  |  |  |
| info_search_time | Common summary index fields |  |  |  |  |
| linecount | Splunk Default field |  |  |  |  |
| members | Specifies the DHCP member |  | String. Example: infoblox.localdomain | Infoblox DHCP summary |  |
| ms_servers | Specifies the MS servers |  | IP address | Infoblox DHCP summary |  |
| orig_host | Specifies the host name of the data source |  | Example: [http://infoblox.com](http://infoblox.com) |  | Splunk added default field |
| psrsvd_ct_FREE_   ADDRESSES | Specifies the count information for FREE_ADDRESSES field | si_dhcp_usage_trend |  |  | Splunk added special field |
| psrsvd_ct_dhcp_utilization | Specifies the count for dhcp_utilization field | si_dhcp_range_utilization   _trend |  |  | Splunk added special field |
| psrsvd_ct_dynamic_hosts | Specifies the count for dynamic_hosts field | si_dhcp_usage_trend |  |  | Splunk added special field |
| psrsvd_ct_static_hosts | Specifies the count for static_hosts field | si_dhcp_usage_trend |  |  | Splunk added special field |
| psrsvd_ct_v4ack | Specifies the count for v4ack field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v4decline | Specifies the count for v4decline field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v4discover | Specifies the count for v4discover field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v4inform | Specifies the count for v4inform field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v4leaseactive | Specifies the count for v4leaseactive field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v4leasequery | Specifies the count for v4leasequery field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v4leaseunassigned | Specifies the count for v4leaseunassigned field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v4leaseunknown | Specifies the count for v4leaseunknown field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v4nak | Specifies the count for    v4nak field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v4offer | Specifies the count for v4offer field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v4release | Specifies the count for v4release field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v4request | Specifies the count for v4request field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v6advertise | Specifies the count for v6advertise field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v6confirm | Specifies the count for v6confirm field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v6decline | Specifies the count for v6decline field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v6information_   request | Specifies the count for v6information_request field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v6leasequery | Specifies the count for v6leasequery field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v6leasequery_   reply | Specifies the count for v6leasequery_reply field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v6rebind | Specifies the count for v6rebind field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v6reconfigure | Specifies the count for v6reconfigure field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v6relay_forward | Specifies the count for v6relay_forward field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v6relay_reply | Specifies the count for v6relay_reply field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v6release | Specifies the count for v6release field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v6renew | Specifies the count for v6renew field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v6reply | Specifies the count for v6reply field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v6request | Specifies the count for v6request field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_ct_v6solicit | Specifies the count for v6solicit field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_gc | Here, gc = group count. The count for stats grouping and not scoped to a single field. |  |  |  | Splunk added special field |
| psrsvd_nc_FREE_   ADDRESSES | Specifies the numerical count for FREE_ADDRESSES field | si_dhcp_usage_trend |  |  | Splunk added special field |
| psrsvd_nc_dhcp_utilization | Specifies the numerical count for dhcp_utilization field | si_dhcp_range_utilization_trend |  |  | Splunk added special field |
| psrsvd_nc_dynamic_hosts | Specifies the numerical count for dynamic_hosts field | si_dhcp_usage_trend |  |  | Splunk added special field |
| psrsvd_nc_static_hosts | Specifies the numerical count for static_hosts field | si_dhcp_usage_trend |  |  | Splunk added special field |
| psrsvd_nc_v4ack | Specifies the numerical count for v4ack field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v4decline | Specifies the numerical count for v4decline field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v4discover | Specifies the numerical count for v4discover field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v4inform | Specifies the numerical count for v4inform field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v4leaseactive | Specifies the numerical count for v4leaseactive field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v4leasequery | Specifies the numerical count for v4leasequery field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v4leaseunassigned | Specifies the numerical count for v4leaseunassigned field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v4leaseunknown | Specifies the numerical count for v4leaseunknown field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v4nak | Specifies the numerical count for v4nak field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v4offer | Specifies the numerical count for v4offer field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v4release | Specifies the numerical count for v4release field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v4request | Specifies the numerical count for v4request field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v6advertise | Specifies the numerical count for v6advertise field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v6confirm | Specifies the numerical count for v6confirm field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v6decline | Specifies the numerical count for v6decline field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v6information_   request | Specifies the numerical count for v6information_request field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v6leasequery | Specifies the numerical count for v6leasequery field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v6leasequery_reply | Specifies the numerical count for v6leasequery_reply field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v6rebind | Specifies the numerical count for v6rebind field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v6reconfigure | Specifies the numerical count for v6reconfigure field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v6relay_forward | Specifies the numerical count for v6relay_forward field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v6relay_reply | Specifies the numerical count for v6relay_reply field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v6release | Specifies the numerical count for v6release field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v6renew | Specifies the numerical count for v6renew field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v6reply | Specifies the numerical count for v6reply field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v6request | Specifies the numerical count for v6request field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_nc_v6solicit | Specifies the numerical count for v6solicit field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_FREE_   ADDRESSES | Specifies the sum for FREE_ADDRESSES field | si_dhcp_usage_trend |  |  | Splunk added special field |
| psrsvd_sm_dhcp_utilization | Specifies the sum for dhcp_utilization field | si_dhcp_range_utilization_trend |  |  | Splunk added special field |
| psrsvd_sm_dynamic_hosts | Specifies the sum for dynamic_hosts field | si_dhcp_usage_trend |  |  | Splunk added special field |
| psrsvd_sm_static_hosts | Specifies the sum for static_hosts field | si_dhcp_usage_trend |  |  | Splunk added special field |
| psrsvd_sm_v4ack | Specifies the sum for v4ack field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v4decline | Specifies the sum for v4decline field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v4discover | Specifies the sum for v4discover field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v4inform | Specifies the sum for v4inform field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v4leaseactive | Specifies the sum for v4leaseactive field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v4leasequery | Specifies the sum for v4leasequery field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v4leaseunassigned | Specifies the sum for v4leaseunassigned field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v4leaseunknown | Specifies the sum for v4leaseunknown field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v4nak | Specifies the sum for v4nak field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v4offer | Specifies the sum for v4offer field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v4release | Specifies the sum for v4release field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v4request | Specifies the sum for v4request field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v6advertise | Specifies the sum for v6advertise field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v6confirm | Specifies the sum for v6confirm field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v6decline | Specifies the sum for v6decline field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v6information_   request | Specifies the sum for v6information_request field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v6leasequery | Specifies the sum for v6leasequery field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v6leasequery_reply | Specifies the sum for v6leasequery_reply field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v6rebind | Specifies the sum for v6rebind field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v6reconfigure | Specifies the sum for v6reconfigure field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v6relay_forward | Specifies the sum for v6relay_forward field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v6relay_reply | Specifies the sum for v6relay_reply field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v6release | Specifies th sum for v6release field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v6renew | Specifies the sum for v6renew field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v6reply | Specifies the sum for v6reply field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v6request | Specifies the sum for v6request field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_sm_v6solicit | Specifies the sum for v6solicit field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_v | Here, v = version. This is not scoped to a single field. | si_dhcp_usage_trend,   si_dhcp_top_lease_client,    si_dhcp_range_utilization_trend,   si_dhcp_top_os_by_network, and   si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_FREE_ADDRESSES | Contains precision of the FREE_ADDRESSES field | si_dhcp_usage_trend |  |  | Splunk added special field |
| psrsvd_vt_dhcp_utilization | Contains precision of the dhcp_utilization field | si_dhcp_range_utilization_trend |  |  | Splunk added special field |
| psrsvd_vt_dynamic_hosts | Contains precision of the dynamic_hosts field | si_dhcp_usage_trend |  |  | Splunk added special field |
| psrsvd_vt_static_hosts | Contains precision of the static_hosts field | si_dhcp_usage_trend |  |  | Splunk added special field |
| psrsvd_vt_v4ack | Contains precision of the v4ack field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v4decline | Contains precision of the v4decline field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v4discover | Contains precision of the v4discover field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v4inform | Contains precision of the v4inform field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v4leaseactive | Contains precision of the v4leaseactive field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v4leasequery | Contains precision of the v4leasequery field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v4leaseunassigned | Contains precision of the v4leaseunassigned field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v4leaseunknown | Contains precision of the v4leaseunkown field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v4nak | Contains precision of the v4nak field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v4offer | Contains precision of the v4offer field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v4release | Contains precision of the v4release field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v4request | Contains precision of the v4request field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v6advertise | Contains precision of the v6advertise field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v6confirm | Contains precision of the v6confirm field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v6decline | Contains precision of the v6decline field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v6information_request | Contains precision of the v6information_request field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v6leasequery | Contains precision of the v6leasequery field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v6leasequery_reply | Contains precision of the v6leasequery_reply field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v6rebind | Contains precision of the v6rebind field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v6reconfigure | Contains precision of the v6reconfigure field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v6relay_forward | Contains precision of the v6relay_forward field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v6relay_reply | Contains precision of the v6relay_reply field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v6release | Contains precision of the v6release field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v6renew | Contains precision of the v6renew field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v6reply | Contains precision of the v6reply field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v6request | Contains precision of the v6request field | si-search-dhcp-message |  |  | Splunk added special field |
| psrsvd_vt_v6solicit | Contains precision of the v6solicit field | si-search-dhcp-message |  |  | Splunk added special field |
| **report** | **Name of the report that is populating the summary index** |  |  |  |  |
|  | **DHCP** **Message Rate Trend data** | si-search-dhcp-message |  |  |  |
|  | **DHCPv4 Usage Trend data** | si_dhcp_usage_trend |  |  |  |
|  | **DHCP** **Top Lease Clients report data** | si_dhcp_top_lease_client |  |  |  |
|  | **Top Devices Denied an IP Address report data** | si_devices_denied_an_ip_address |  |  |  |
|  | **DHCPv4 Range Utilization Trend** | si_dhcp_range_utilization_trend |  |  |  |
|  | **Device and Device Classes reports data** | si_dhcp_top_os_by_network |  |  |  |
| search_name | Common summary index fields |  |  |  |  |
| search_now | Common summary index fields |  |  |  |  |
| source | Splunk Default field |  |  |  |  |
| sourcetype | Splunk Default field |  |  |  |  |
| splunk_server | Splunk Default field |  |  |  |  |
| splunk_server_group | Splunk Default field |  |  |  |  |
| start_address | Specifies the start IP address |  | IP address | Infoblox DHCP summary |  |
| timeendpos | Common Extracted Fields |  |  |  |  |
| timestartpos | Common Extracted Fields |  |  |  |  |
| View | Specifies the network view |  | String. Example: default | Infoblox DHCP summary |  |
