---
title: "Reporting Categories and Related Data Sources"
source: "/space/nios90/1426030691"
pageId: "1426030691"
---
The reporting member uses two types of data sources to generate reports: file-based data sources and script-based data sources. When the reporting member is down or unreachable, file-based data sources are queued until the reporting member is up and running. However, the script-based data sources are lost if the size of the queued data exceeds 500 KB.  
The amount of data in the queue is managed as follows:

- Rotates the reporting syslog files (extracted from /var/log/messages) at 120 MB retaining one older file. The data in the queue depends on the file size when the reporting member becomes unreachable.
- The CSV files overwrite the oldest data with the new data at regular intervals. So, the CSV file contains only the latest events.

> **warning**
>
> ### Note
> 
> If you desire older information to be kept, use any of the export methods to daily export this data to a file.

The table below lists the reports provided by the reporting server, report categories, and the source type, data source type (file or script-based), and queue data update frequencies for each report:



*Report* *Categories,* *Related* *Data* *Sources,* *and* *Update* *Frequencies*

| Report Category | Reports | Source Type | Data Source (file-based or scriptbased) | Update Frequency |
| --- | --- | --- | --- | --- |
| Device | Inactive IP Addresses | ib:reserved2 | file-based (syslog) | Rotates at 120 MB; retains one older copy; queued data is between 120 MB and 240 MB |
| Port Capacity Utilization by Device  Port Capacity Trend  Port Capacity Delta by Device | ib:reserved2 | file-based (csv) | Overwritten every 6 hours |
|  | End Host History | ib:discovery:end_host _activity | file-based (csv) | Overwritten every 24 hours |
|  | IP Address Inventory |  |  |  |
|  | Network Inventory |  |  |  |
|  | IPAMv4 Device Networks |  |  |  |
|  | Device Interface Inventory |  |  |  |
|  | Device Inventory | ib:reserved2 | file-based (csv) | Overwritten every 24 hours |
|  | Device Components |  |  |  |
|  | Device Advisor | ib:reserved2 | file-based (csv) | Overwritten every 24 hours |
| DHCP Performance | DHCP Message Rate Trend | ib:dhcp:message | file-based (csv) | Overwritten every 1 minute |
| DHCPv4 Usage Trend  DHCPv4 Range Utilization Trend | ib:dhcp:range | file-based (csv) | Overwritten every 1 hour |
| DHCP Lease History     | DHCP Lease History  DHCP Top Lease Clients | ib:dhcp:lease_history | file-based (syslog) | Rotates at 120 MB; retains one older copy; queued data is between 120 MB and 240 MB |
| Top Devices Identified  Device Trend  Device Class Trend  Top Device Classes | ib:dhcp:lease_history | file-based (syslog) | Based on summary search report, which is updated during the 16th and 46th minutes of each hour |
| Top Devices Denied an IP Address | ib:dhcp:lease_history | file-based (syslog) | Based on summary search report, which is updated during the 19th and 49th minutes of each hour |
| Device Fingerprint Change Detected | ib:dhcp:lease_history | file-based (syslog) | Executed every 24 hours |
| DNS Performance | DNS Response Latency Trend | ib:dns:perf | script-based | Executed every 1 minute |
| DNS Record Scavenging | DNS Scavenged Object Count Trend | ib:dns:reclamation | file-based (csv) | Updated whenever reclamation tasks are executed |
| DNS Query Capture | DNS Domain Query Trend  DNS Domains Queried by Client  Top DNS Clients by Query Type  Top DNS Clients Querying MX Records | ib:dns:capture | file-based (csv) | Updated whenever the Data Collection VM collects capture query data from a Grid member |
| DDNS | DDNS Update Rate Trend | ib:ddns | file-based (syslog) | Rotates at 120MB; retains one older copy; queued data is between 120MB and 240MB. |
| DNS Traffic Control       | DNS Traffic Control Resource  Availability Trend | ib:dns:reserved | file-based (csv) | Based on summary search report, which is updated once per six hour at 47th minute of each hour. With each execution, it summarizes raw events indexed from 370 minutes ago to 10 minutes ago. |
| DNS Traffic Control Resource  Availability Status | ib:dns:reserved | file-based (csv) | Based on summary search report, which is updated once per six hour at 47th minute of each hour. With each execution, it summarizes raw events indexed from 370 minutes ago to 10 minutes ago. |
| DNS Traffic Control Resource Pool  Availability Trend | ib:dns:reserved | file-based (csv) | Based on summary search report, which is updated once per six hour at 23rd minute of each hour. With each execution, it summarizes raw events indexed from 370 minutes ago to 10 minutes ago. |
| DNS Traffic Control Resource Pool  Availability Status | ib:dns:reserved | file-based (csv) | Based on summary search report, which is updated once per six hour at 23rd minute of each hour. With each execution, it summarizes raw events indexed from 370 minutes ago to 10 minutes ago. |
| DNS Traffic Control Response  Distribution Trend | ib:dns:reserved | file-based (csv) | Based on summary search report, which is updated once per six hour at 37th minute of each hour. With each execution, it summarizes raw events indexed from 370 minutes ago to 10 minutes ago. |
| DDI Utilization     | DHCPv4 Usage Statistics  DHCPv4 Top Utilized Networks | ib:dhcp:network | file-based (csv) | Overwritten every 1 hour |
| IPAM Network Usage  IPAM Top Networks | ib:ipam:network | file-based (csv) | Overwritten every 1 hour |
| DNS Zone Statistics Per DNS View | ib:dns:view | file-based (csv) | Overwritten every 24 hours |
| DNS Statistics per Zone | ib:dns:zone | file-based (csv) | Overwritten every 24 hours |
| DNS Object Count Trend for Flex Grid License | ib:dns:ibflex_zone_counts | file-based (csv) | Generated once in 24 hours and average is calculated over 5 days |
| System Utilization | CPU Utilization Trend  Memory Utilization Trend  Traffic Rate by Member | ib:system | script-based | Executed every 1 minute |
| License Pool Utilization | ib:system | file-based (csv) | Overwritten every 24 hours |
| SPLA Grid Licensing Features   Enabled | ib:system |  | Generated once in 24 hours for all IB-FLEX members and non IB-FLEX members on the Grid |
| System Capacity | System Capacity Prediction | ib:system_capacity:objects |  | Updated whenever there is relevant event occurs |
| DNS Query         | DNS Replies Trend | ib:dns:stats | script-based | Executed every 1 minute |
| DNS Cache Hit Rate Trend | ib:dns:query:cache_hit_rate | script-based | Executed every 1 minute |
| DNS Query Rate by Query Type | ib:dns:query:qps | script-based | Executed every 1 minute |
| DNS Query Rate by Member  DNS Daily Query Rate by Member  DNS Daily Peak Hour Query Rate by Member | ib:dns:query:by_member | script-based | Executed every 1 minute |
| DNS Top Clients | ib:dns:query:top_clients | script-based | Executed every 10 minutes |
| DNS Top Requested Domain  Names | ib:dns:query:top_requested  _domain_names | script-based | Executed every 10 minutes |
| DNS Top Clients Per Domain  DNS Top NXDOMAIN / NOERROR (no data)  DNS Top SERVFAIL Errors Received  DNS Top SERVFAIL Errors Sent  DNS Top Timed-Out Recursive Queries | ib:dns:reserved | script-based | Executed every 10 minutes |
| DNS Query Trend per IP Block Group | ib:dns:reserved | script-based | Executed every 5 minutes |
| DNS Effective Peak Usage Trend for Flex Grid License | ib:dns:query:qps |  | Executed every 10 minutes and average is calculated over five days |
| Security           | DNS Top RPZ Hits | ib:dns:reserved | script-based | Executed every 10 minutes |
| DNS Top RPZ Hits by Clients | ib:dns:reserved | script-based | Executed every 10 minutes |
| Top DNS Firewall Hits | ib:dns:reserved | script-based | Executed every 10 minutes |
| Malicious Activity by Client | ib:dns:reserved | script-based | Executed every 10 minutes |
| DNS Firewall Executive Threat | ib:dns:reserved | script-based | Executed every 10 minutes |
| FireEye Alerts | ib:syslog | script-based | Updated immediately when alerts are logged in the syslog. |
| DNS Infrastructure Protection Event Count By Severity Trend  DNS Infrastructure Protection Event Count By Member Trend  DNS Infrastructure Protection Event Count By Rule  DNS Infrastructure Protection Event Count By Time  DNS Infrastructure Protection Event Count By Category  DNS Infrastructure Protection Event Count By Member | ib:reserved1 | file-based (csv) | Overwritten every 5 minutes. |
| DNS Top Tunneling Activity  DNS Tunneling Traffic by Category  Top Malware and DNS Tunneling  Events by Client | ib:reserved1 | file-based (csv) | Overwritten every 5 minutes. |
| Network User | User Login History | ib:reserved1 | file-based (csv) |  |
| Ecosystem Subscription | Subscription Data | ib:reserved1 | file-based (csv) | Updated whenever there is an event received from the vendor that NIOS subscribes. |
| Ecosystem Publication | Publish Data | ib:reserved1 | file-based (csv) | Updated whenever there is a relevant RPZ, IPAM, and DHCP lease event occurs. |
| Cloud | VM Address History | ib:reserved2 | file-based (csv) | Updated immediately when there is a change related to the VM IP address. Rotates at 300MB and retains one older copy. |
| Audit Log | Audit Log Events | ib:audit | file-based (audit log) | Updated immediately when the audit log is updated. |
| Audit Log WAPI Events | ib:audit | file-based (audit log) | Updated immediately when the audit log is updated. |
| Syslog | Syslog Events | ib:syslog | file-based (Syslog) | Updated immediately when alerts are logged in the syslog. |
