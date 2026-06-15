---
title: "DNS Daily Query Rate by Member"
source: "/space/nios90/1473183891"
pageId: "1473183891"
---
The *DNS* *Daily* *Query* *Rate* *by* *Member* dashboard shows the trend of the average or maximum daily DNS Query rate by member. This dashboard can help you identify the average or maximum daily load that is being carried by each DNS Server. This dashboard can help you plan better for capacity and reduce the risk of overloading DNS devices.  
This dashboard displays the following information:

- **Time**: Timestamp of events.
- **QPS**: Query per second. QPS is calculated by the max/avg of 24 hourly QPS data per day (between midnights).



The **Traffic Pattern** filter allows you to refine the displayed data by the type of DNS traffic.

When applied, this filter updates the dashboard to show dedicated panels for each selected traffic type. Each panel shows the QPS over time for the selected traffic pattern, for each DNS member. You can select one or more options from the following available patterns:

- **Total Count**: Includes all query types (DoT, DoH, and DNS)
- **DoT**: Displays only DNS over TLS traffic.
- **DoH**: Displays only DNS over HTTPS traffic.
- **Encrypted DNS**: Displays sum of DoT and DoH traffic.
- **Unencrypted DNS**: Displays only DNS traffic.
