---
title: "DNS Daily Peak Hour Query Rate by Member"
source: "/space/nios90/1473151120"
pageId: "1473151120"
---
The *DNS* *Daily* *Peak* *Hour* *Query* *Rate* *by* *Member* dashboard shows the average or peak DNS Query rate at the busiest hour within a day. This dashboard will help you identify the load that is being carried by each DNS Server during busy hours. This dashboard can help you plan better for capacity and reduce the risk of overloading DNS devices.  
This dashboard displays the following information

- **Time**: Timestamp of events.
- **QPS**: Query per second. QPS is calculated with two steps: 1) find out the busiest hour (on the top of hours such as from 8:00am to 9:00am) by average hourly QPS, and 2) use that hour's max/avg QPS as they daily max/avg QPS.



The **Traffic Pattern** filter allows you to refine the displayed data by the type of DNS traffic.

When applied, this filter updates the dashboard to show dedicated panels for each selected traffic type. Each panel shows the QPS over time for the selected traffic pattern, for each DNS member. You can select one or more options from the following available patterns:

- **Total Count**: Includes all query types (DoT, DoH, and DNS)
- **DoT**: Displays only DNS over TLS traffic.
- **DoH**: Displays only DNS over HTTPS traffic.
- **Encrypted DNS**: Displays sum of DoT and DoH traffic.
- **Unencrypted DNS**: Displays only DNS traffic.
