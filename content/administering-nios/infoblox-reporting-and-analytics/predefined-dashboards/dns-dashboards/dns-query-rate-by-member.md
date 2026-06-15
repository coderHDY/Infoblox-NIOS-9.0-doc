---
title: "DNS Query Rate by Member"
source: "/space/nios90/1473446021"
pageId: "1473446021"
---
The *DNS* *Query* *Rate* *by* *Member* dashboard shows the trend of DNS queries for selected members. This dashboard displays line graphs of DNS query trends for the selected members over a given time frame.

This dashboard displays the following information:

- **Time**: Timestamp of events.
- **QPS**: Query per second. QPS is calculated as the max/avg QPS observed over the 30 minute window starting at the top of the last half-hour.



The **Traffic Pattern** filter allows you to refine the displayed data by the type of DNS traffic.

When applied, this filter updates the dashboard to show dedicated panels for each selected traffic type. Each panel shows the QPS over time for the selected traffic pattern, for each DNS member. You can select one or more options from the following available patterns:

- **Total Count**: Includes all query types (DoT, DoH, and DNS)
- **DoT**: Displays only DNS over TLS traffic.
- **DoH**: Displays only DNS over HTTPS traffic.
- **Encrypted DNS**: Displays sum of DoT and DoH traffic.
- **Unencrypted DNS**: Displays only DNS traffic.
