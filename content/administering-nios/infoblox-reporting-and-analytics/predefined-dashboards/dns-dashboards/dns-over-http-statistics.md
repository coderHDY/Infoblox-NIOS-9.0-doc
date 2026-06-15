---
title: "DNS over HTTP Statistics"
source: "/space/nios90/1580990751"
pageId: "1580990751"
---
The* DNS over HTTPS (DoH) Statistics* dashboard provides information about DoH traffic on the configured DNS members and their interfaces at a specific time.

This dashboard displays DoH query statistics from all DNS members that handle DoH traffic, and it is updated every 10 minutes.

You can use the below filters to narrow down the data by:

- **Time:** Choose a predefined time range (e.g., last week, last 24 hours).
- **Member: **Select a specific DNS member or view 'All' members.
- **Interface Address: **Filter statistics based on the network interface of the member.

The DoH dashboards are updated every 10 minutes. After setting the desired filters, click **Submit** to refresh the charts.



The dashboard contains the following information:

1. **QPS Trend per Member:** Displays the Queries Per Second (QPS) handled by each DNS member over the selected time period.
2. **RX and TX Trend per Member:** Displays the cumulative count of received (RX) and transmitted (TX) DoH queries for each DNS member over the selected time period.
3. **QPS Trend per Interface:** Displays the Queries Per Second (QPS) handled by the selected interface over the selected time period.
4. **RX and TX Trend per Interface:** Displays the cumulative count of received (RX) and transmitted (TX) DoH queries for the selected interface over the selected time period.
5. **Hourly grid wide DoH RX & TX trend: **Displays single point metrics showing the change in RX and TX queries over the last hour, compared to the previous period.
6. **Detailed table:** A tabular view of DoH session statistics and metadata for each member and interface. It shows the below data:

- **Time:** Timestamp of the record.
- **Member:** Name of the DNS member.
- **Interface Address:** IP address of the interface.
- **RX Count:** Total DoH queries received.
- **TX Count:** Total DoH queries transmitted.
- **Dropped Count:** Number of dropped queries.
- **Session Drop Count:** Number of dropped sessions.
- **Open Session Count:** Number of currently open sessions.
- **Closed Session Count:** Number of sessions that have closed.
- **Active Session Count:** Number of active sessions.
- **QPS:** Queries per second at that point.
