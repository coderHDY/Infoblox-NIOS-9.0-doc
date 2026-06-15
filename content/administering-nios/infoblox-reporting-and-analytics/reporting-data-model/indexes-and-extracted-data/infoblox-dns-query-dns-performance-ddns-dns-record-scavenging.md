---
title: "Infoblox DNS Query, DNS Performance, DDNS, DNS Record Scavenging"
source: "/space/nios90/1363608710"
pageId: "1363608710"
---
| **Extracted Field Name** | **Description of the field** | **Values/Range** | **Source of Data** |
| --- | --- | --- | --- |
| CLIENT | Indicates the DNS client | String | Infoblox DNS query |
| COUNT | Indicates the count | Integer | Infoblox DNS query and DNS Record Scavenging |
| EA | Common Extracted Fields |  |  |
| FQDN | Indicates the FQDN | String | Infoblox DNS query |
| HITS | Indicates the DNS cache hits count | Integer | Infoblox DNS query |
| HNAME | Indicates the HNAME | String | Infoblox DNS query |
| HWTYPE | Common Extracted Fields |  |  |
| LATENCY | Indicates the latency count | Integer | Infoblox DNS performance |
| MAX_DB_OBJECTS | Common Extracted Fields |  |  |
| MAX_DHCP_LPS | Common Extracted Fields |  |  |
| MAX_DNS_QPS | Common Extracted Fields |  |  |
| MEMBER | Specifies the member | String | DNS Record Scavenging |
| MEMBER_IP | Common Extracted fields |  |  |
| MISSES | Specifies DNS cache miss count | Integer | Infoblox DNS query |
| QCOUNT | Specifies query count | Integer | Infoblox DNS query |
| REST | REST | String | Infoblox DDNS |
| SOURCE | SOURCE | String | Infoblox DDNS |
| SOURCEA | SOURCEA | IP address | Infoblox DDNS |
| TLD | Specifies the top-level domain name | String | Infoblox DNS query |
| TYPE | RR Type | String. Example: nxdomain | Infoblox DNS query and DNS Record Scavenging |
| TYPEA | TYPEA | String. Example: Success | Infoblox DDNS |
| VIEW |  | String | Infoblox DNS query |
| ZONE | Indicates the name of the zone | String | Infoblox DDNS |
| date_hour | Splunk Default field |  |  |
| date_mday | Splunk Default field |  |  |
| date_minute | Splunk Default field |  |  |
| date_month | Splunk Default field |  |  |
| date_second | Splunk Default field |  |  |
| date_wday | Splunk Default field |  |  |
| date_year | Splunk Default field |  |  |
| date_zone | Splunk Default field |  |  |
| display_name | Specifies the name of the DNS view | String | . |
| eventtype | Splunk Default field |  |  |
| failure | Specifies the DNS FAILURE query count | Integer |  |
| host | Splunk Default field |  |  |
| index | Splunk Default field |  |  |
| linecount | Splunk Default field |  |  |
| nxdomain | Specifies the DNS NXDOMAIN query count | Integer |  |
| nxrrset | Specifies the DNS NXRRSET query count | Integer |  |
| other | Specifies the DNS other query count | Integer |  |
| punct | *Splunk Default field* |  |  |
| referral | Specifies the DNS REFERRAL query count | Integer |  |
| source | Splunk Default field |  |  |
| sourcetype | Splunk Default field |  |  |
| splunk_server | Splunk Default field |  |  |
| splunk_server_group | Splunk Default field |  |  |
| success | Specifies the DNS success query count |  |  |
| timeendpos | Common Extracted Fields |  |  |
| timestartpos | Common Extracted Fields |  |  |
