---
title: "Reporting Indexes and Update Time Intervals"
source: "/space/nios90/1371144438"
pageId: "1371144438"
---
The Reporting Indexes table below lists the search indexes that the reporting server uses to generate reports. It contains information about the frequency of the summary report updates for each report and the percentage of the total index space allocated for each report category. Use this information to plan your reporting strategy for the Grid so you can optimize the performance of the reporting server.  
Each summary report or search has its own update frequency. For example, the *DNS* *Top* *Requested* *Domain* report updates its data every 30 minutes, starting at the 4**th** minute of each half hour. It collects report data during the first 30 minutes of the previous 60 minutes. For example, if the report starts an update at 6:04 a.m., the data it collects is from 5:04 a.m. to 5:34 a.m.  
The reporting server also uses this information to generate alerts. For example, once configured, Top Devices Identified alerts are executed at the 17**th** and 47**th** minutes of each hour (one minute after each update), regardless of whether DHCP fingerprint detection is enabled or disabled. For information about alerts, see [*About Alerts*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/about-alerts).

> **warning**
>
> ### Note
> 
> The maximum retention period for the reporting data is 136 years. However, the data is removed from the database if the data exceeds the maximum limit for a reporting index and when the data crosses the retention period (after 136 years).

*Reporting* *Indexes*

| **Indexes** | **Reports/Searches** | **Summary Report Data Updates** | **Default Maximum Index Size (% of Total Index Storage)** |  |  |
| --- | --- | --- | --- | --- | --- |
| Device (Discovery)         |  |  | 0% |  |  |
| Inactive IP Addresses | N/A |  |  |  |
| Port Capacity Utilization by Device | N/A |  |  |  |
| Port Capacity Trend | N/A |  |  |  |
| Port Capacity Delta by Device | N/A |  |  |  |
| IP Address Inventory | N/A |  |  |  |
| Network Inventory | N/A |  |  |  |
| IPAMv4 Device Networks | N/A |  |  |  |
| Device Interface Inventory | N/A |  |  |  |
| Device Inventory | N/A |  |  |  |
| Device Components | N/A |  |  |  |
| Device Advisor | N/A |  |  |  |
| End Host History | N/A | 0% |  |  |
| IPAMv4       |  |  | 5% |  |  |
| IPAMv4 Network Usage Statistics (Detailed) | N/A |  |  |  |
| DNS Statistics per DNS View (Detailed) | N/A |  |  |  |
| DNS Statistics per Zone (Detailed) | N/A |  |  |  |
| IPAMv4 Top Utilized Networks (Detailed) | N/A |  |  |  |
| DNS Object Count Trend for Flex Grid License | Data is generated once every   24 hours |  |  |  |
| DNS               |  |  | 10% |  |  |
| DDNS Update Rate Trend | N/A |  |  |  |
| DNS Response Latency Trend (Summary) | N/A |  |  |  |
| DNS Cache Hit Rate Trend | N/A |  |  |  |
| DNS Query Rate by Query Type | N/A |  |  |  |
| DNS Query Rate by Server (Detailed) | N/A |  |  |  |
| DNS Replies Trend | N/A |  |  |  |
| DNS Query Trend Per IP Block Group | N/A |  |  |  |
| FireEye Alerts | N/A |  |  |  |
| DNS Summary                   |  |  | 10% |  |  |
| DDNS Update Rate Trend (Summary) | Every 30 minutes, starting at the 6**th** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |
| DNS Response Latency Trend (Summary) | Every 30 minutes, starting at the 20th minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |
| DNS Top Requested Domain Names (Summary) | Every 30 minutes, starting at the 4**th** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |
| DNS Cache Hit Rate Trend (Summary) | Every 30 minutes, starting at the 8**th** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |
| DNS Effective Peak Usage Trend for SPLA Grid License | NA |  |  |  |
| DNS Top Clients (Summary) | Every 30 minutes, starting at the 2**nd** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |
| DNS Query Rate by Query Type (Summary) | Every 30 minutes, starting at the 10**th** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |
| DNS Query Rate by Member (Summary) | Every 30 minutes, starting at the 12**th** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |
| DNS Daily Query Rate by Member (Summary) | Every day, starting at 00:32 each day. Data covers from 00:00 of yesterday to 00:00 of today. |  |  |  |
| DNS Daily Peak Hour Query Rate by Member (Summary) | Every 60 minutes, starting at the 34**th** minute of each hour. Data covers from the top of last hour to the top of current hour. |  |  |  |
| DNS Replies Trend (Summary) | Every 30 minutes, starting at the 18**th** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |
| DNS Top Clients Per Domain (Summary) | Every 30 minutes, starting at the 3**rd** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |
| DNS Top NXDOMAIN / NOERROR    (no data) (Summary) | Every 30 minutes, starting at the 5**th** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |
| DNS Top SERVFAIL Errors Sent (Summary) | Every 30 minutes, starting at the 6**th** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |
| DNS Top SERVFAIL Errors Received (Summary) | Every 30 minutes, starting at the 7**th** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |
| DNS Top Timed-Out Recursive Queries (Summary) | Every 30 minutes, starting at the 8**th** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |
| DNS Top RPZ Hits (Summary) | Every 10 minutes, starting at the 2**nd** minu |  | te of each 10 minute. Data covers from 20 minute ago to 10 minute ago. |  |
| DNS Top RPZ Hits by Clients (Summary) | Every 10 minutes, starting at the 2**nd** minute of each 10 minute. Data covers from 20 minute ago to 10 minute ago. |  |  |
| DNS Scavenged Object Count Trend | Every 30 minutes, starting at every 21**st** and 51**st** minute of each hour. |  |  |
| DHCP           |  |  |  |
| DHCPv4 Usage Statistics (Detailed) | N/A |  |
| DHCPv4 Range Utilization Trend (Summary) | N/A |  |
| DHCP Message Rate Trend (Detailed) | N/A |  |
| DoT | DoT Query Rate by Server (Summary) | Every 10 minutes, starting at the 0th minute of each hour. Data covers the most recent 10 minutes at each interval. |  |  |
|  | DoT Daily Query Rate by Member (Summary) | Every day, starting at 00:32 each day. Data covers from 00:00 of yesterday to 00:00 of today. |  |  |
|  | DoT Daily Peak Hour Query Rate by Member (Summary) | Every 60 minutes, starting at the 34th minute of each hour. Data covers from the top of last hour to the top of current hour. |  |  |  |
| DoH | DoH Query Rate by Server (Summary) | Every 10 minutes, starting at the 0th minute of each hour. Data covers the most recent 10 minutes at each interval. |  |  |  |
|  | DoH Daily Query Rate by Member (Summary) | Every day, starting at 00:32 each day. Data covers from 00:00 of yesterday to 00:00 of today. |  |  |  |
|  | DoH Daily Peak Hour Query Rate by Member (Summary) | Every 60 minutes, starting at the 34th minute of each hour. Data covers from the top of last hour to the top of current hour. |  |  |  |
| Device Trend (Summary) | Every 30 minutes, starting at every 16**th** and 46th minutes of each hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |  |
| Device Class Trend (Summary) | Every 30 minutes, starting at every 16**th** and 46th minutes of each hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |  |
| Top Devices Identified (Summary) | Every 30 minutes, starting at every 16**th** and 46th minutes of each hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |  |
| Top Devices Denied an IP Address (Summary) | Every 30 minutes, starting at every 19**th** and 49th minutes of each hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |  |
| Top Device Classes (Summary) | Every 30 minutes, starting at every 16**th** and 46th minutes of each hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |  |
| DHCP Top Lease Clients (Summary) | Every 30 minutes, starting at the 16**th** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |  |
| DHCPv4 Range Utilization Trend (Summary) | Every 8 hours, starting at the 24**th** minute of each half hour. Data covers the first 8 hours of the previous 8.25 hours. |  |  |  |  |
| DHCPv4 Usage Trend (Summary) | Every 8 hours, starting at the 22**nd** minute of each half hour. Data covers the first 8 hours of the previous 8.25 hours. |  |  |  |  |
| DHCP Message Rate Trend (Summary) | Every 30 minutes, starting at the 14**th** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |  |
| DHCP Lease History     |  |  | 39% |  |  |
| DHCP Lease History (Detailed) | N/A |  |  |  |
| Device Fingerprint Change Detected (Detailed) | N/A |  |  |  |
| Security               |  |  | 1% |  |  |
| DNS Infrastructure Protection Event Count By Severity Trend (Summary) | N/A |  |  |  |
| DNS Infrastructure Protection Event Count By Member Trend (Summary) | N/A |  |  |  |
| DNS Infrastructure Protection Event Count By Rule (Summary) | N/A |  |  |  |
| DNS Infrastructure Protection Event Count By Category (Summary) | N/A |  |  |  |
| DNS Infrastructure Protection Event Count By Time (Summary) | N/A |  |  |  |
| DNS Infrastructure Protection Event Count By Member (Summary) | N/A |  |  |  |
| DNS Infrastructure Protection Top Rules Logged (Summary) | N/A |  |  |  |
| DNS Infrastructure Protection Top Rules Logged by IP (Summary) | N/A |  |  |  |
| DNS Top Tunneling Activity (Summary) | Every 30 minutes, starting at every 11**th** and 41st minute of each hour. |  |  |  |
| DNS Tunneling Traffic by Category (Summary) | Every 30 minutes, starting at every 11**th** and 41st minute of each hour. |  |  |  |
| Top Malware and DNS Tunneling Events by Client (Summary) | Every 30 minutes, starting at every 11**th** and 41st minute of each hour. |  |  |  |
| Cloud | VM Address History (Detailed) | N/A | 0% |  |  |
| Audit Log | Audit Log Events (Detailed) | N/A | 0% |  |  |
| Audit Log WAPI Events | N/A | 0% |  |  |
| Ecosystem | Ecosystem Subscription Ecosystem Publication | N/A |  |  |  |
| License | License Pool Utilization | N/A | 1% |  |  |
| System Utilization         |  |  | 15% |  |  |
| Memory Utilization Trend (Summary) | Every 30 minutes, starting at the 26**th** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes |  |  |  |
| Memory Utilization Trend (Detailed) | N/A |  |  |  |
| Traffic Rate (Detailed) | N/A |  |  |  |
| Traffic Rate by Member (Summary) | Every 30 minutes, starting at the 28**th** minute of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |
| CPU Utilization Trend (Summary) | Every 30 minutes, starting at the top of each half hour. Data covers the first 30 minutes of the previous 60 minutes. |  |  |  |
| SPLA Grid Licensing Features Enabled | Every 24 hours for all IB-FLEX members and non IB-FLEX members in the Grid. |  |  |  |



> **warning**
>
> When you filter a dashboard by a time frame that is larger than the maximum retention period, the reporting server returns data within the maximum retention period. For example, when you try to view data of the *CPU* *Utilization* *Trend* report for the past six months, the server only returns data up to the last two months.
