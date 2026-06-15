---
title: "Infoblox DDI Utilization"
source: "/space/nios90/1363738763"
pageId: "1363738763"
---
| **Extracted Field**    **Name** | **Description of the field** | **Values/Range** | **Source of Data** |
| --- | --- | --- | --- |
| EA | Common Extracted Fields |  |  |
| HWTYPE | Common Extracted Fields |  |  |
| MAX_DB_OBJECTS | Common Extracted Fields |  |  |
| MAX_DHCP_LPS | Common Extracted Fields |  |  |
| MAX_DNS_QPS | Common Extracted Fields |  |  |
| MEMBER_IP | Common Extracted Fields |  |  |
| address_alloc | Specifies the address allocation count | Integer | Infoblox DDI utilization |
| address_assignable | Specifies the address assignable count | Integer | Infoblox DDI utilization |
| address_assigned | Specifies the address assigned count | Integer | Infoblox DDI utilization |
| address_conflicts | Specifies the address conflicts count |  | Infoblox DDI utilization |
| address_reserved | Specifies the address reserved count | Integer | Infoblox DDI utilization |
| address_total | Specifies the total number of addresses | Integer | Infoblox DDI utilization |
| address_unalloc | Specifies the address unallocation count | Integer | Infoblox DDI utilization |
| address_unmanaged | Specifies the address unmanaged count | Integer | Infoblox DDI utilization |
| allocation | Allocation | Integer | Infoblox DDI utilization |
| cidr | Specifies the CIDR | Example: 24 | Infoblox DDI utilization |
| date_hour | Splunk Default field |  |  |
| date_mday | Splunk Default field |  |  |
| date_minute | Splunk Default field |  |  |
| date_month | Splunk Default field |  |  |
| date_second | Splunk Default field |  |  |
| date_wday | Splunk Default field |  |  |
| date_year | Splunk Default field |  |  |
| date_zone | Splunk Default field |  |  |
| discovered_name | Specifies the discovered name | String | Infoblox DDI utilization |
| display_name | Specifies the DNS view | String |  |
| eventtype | Splunk Default field |  |  |
| first_discovered_timestamp | Specifies the first discovered timestamp | Timestamp | Infoblox DDI utilization |
| host | Splunk Default field |  |  |
| hosts | Specifies the address hosts count | Integer | Infoblox DDI utilization |
| index | Splunk Default field |  |  |
| ip_address | Specifies the IP address | IP Address | Infoblox DDI utilization |
| last_discovered_timestamp | Specifies the last discovered timestamp | timestamp | Infoblox DDI utilization |
| linecount | Splunk Default field |  |  |
| managed | Indicates if managed or not | Boolean | Infoblox DDI utilization |
| management_platform | Specifies the management platform | String | Infoblox DDI utilization |
| members | Specifies the DHCP members | Example: infoblox.localdomain | Infoblox DDI utilization |
| ms_primary | Specifies the MS primary | String | Infoblox DDI utilization |
| port_vlan_name | Specifies the VLAN port name | String | Infoblox DDI utilization |
| port_vlan_number | Specifies the VLAN port number | Integer | Infoblox DDI utilization |
| network_view | Specifies the network view | String | Infoblox DDI utilization |
| primary | Primary | FQDN | Infoblox DDI utilization |
| protocol | Specifies the DHCP protocol | Example: IPV4 | Infoblox DDI utilization |
| punct | Splunk Default field |  |  |
| rr_a | Specifies the resource record A count | Integer | Infoblox DDI utilization |
| rr_aaaa | Specifies the resource record AAAA count | Integer | Infoblox DDI utilization |
| rr_cname | Specifies the resource record CNAME count | Integer | Infoblox DDI utilization |
| rr_dhcid | Specifies the resource record DHCID count | Integer | Infoblox DDI utilization |
| rr_dname | Specifies the resource record DNAME count | Integer | Infoblox DDI utilization |
| rr_dnskey | Specifies the resource record DNSKEY count | Integer | Infoblox DDI utilization |
| rr_ds | Specifies the resource record DS count | Integer | Infoblox DDI utilization |
| rr_lbdn | Specifies the resource record LBDN count | Integer | Infoblox DDI utilization |
| rr_mx | Specifies the resource record MX count | Integer | Infoblox DDI utilization |
| rr_naptr | Specifies the resource record NAPTR count | Integer | Infoblox DDI utilization |
| rr_ns | Specifies the resource record NS count | Integer | Infoblox DDI utilization |
| rr_nsec | Specifies the resource record NSEC count | Integer | Infoblox DDI utilization |
| rr_nsec3 | Specifies the resource record NSEC3 count | Integer | Infoblox DDI utilization |
| rr_nsec3param | Specifies the resource record NSEC3PARAM count | Integer | Infoblox DDI utilization |
| rr_other | Specifies the resource record OTHER count | Integer | Infoblox DDI utilization |
| rr_ptr | Specifies the resource record PTR count | Integer | Infoblox DDI utilization |
| rr_rrsig | Specifies the resource record RRSIG count | Integer | Infoblox DDI utilization |
| rr_soa | Specifies the resource record SOA count | Integer | Infoblox DDI utilization |
| rr_srv | Specifies the resource record SRV count | Integer | Infoblox DDI utilization |
| rr_tlsa | Specifies the resource record TLSA count | Integer | Infoblox DDI utilization |
| rr_total | Specifies the resource record TOTAL count | Integer | Infoblox DDI utilization |
| rr_txt | Specifies the resource record TXT count | Integer | Infoblox DDI utilization |
| signed | Indicates whether signed or not | Boolean | Infoblox DDI utilization |
| source | Splunk Default field |  |  |
| sourcetype | Splunk Default field |  |  |
| splunk_server | Splunk Default field |  |  |
| splunk_server_group | Splunk Default field |  |  |
| timeendpos | Common Extracted Fields |  |  |
| Timestamp | Specifies the timestamp of the event | Example: 2017-02-04 03:45:53 | Infoblox DDI utilization |
| timestartpos | Common Extracted Fields |  |  |
| utilization | Specifies the address utilization count | Integer | Infoblox DDI utilization |
| view | Specifies the network view | Example: default | Infoblox DDI utilization |
| zone_format | Specifies the zone format | String. Example: Forward-Mapping | Infoblox DDI utilization |
| zone_name | Specifies the zone name | String. Example: [http://member1.com](http://member1.com) | Infoblox DDI utilization |
| zones_forward | Specifies the zone forward count | Integer | Infoblox DDI utilization |
| zones_ipv4 | Specifies the IPv4 count of the zone | Integer | Infoblox DDI utilization |
| zones_ipv6 | Specifies the IPv6 count of the zone | Integer | Infoblox DDI utilization |
| zones_signed | Specifies the signed count of the zone | Integer | Infoblox DDI utilization |
