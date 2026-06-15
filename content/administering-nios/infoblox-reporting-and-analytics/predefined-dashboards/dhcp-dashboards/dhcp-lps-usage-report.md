---
title: "DHCP LPS Usage Report"
source: "/space/nios90/1471316242"
pageId: "1471316242"
---
The *DHCP LPS Usage Report* dashboard lets the administrator view the five-day rolling average for the total peak DHCP leases per second (LPS) calculated for all members in the grid. The peak DHCP LPS is calculated as maximum per day of average LPS calculated for 10-minute intervals. The LPS calculation includes both leased and renewed actions.

This dashboard displays the following information in either line chart or table format. The line chart displays the five-day average for total peak DHCP leases per second for all members in the Grid.

- **Show Filters**: Click **Show Filters** to enable the filters.
- **Time**: Select a value from the drop-down list. The default value is **Last 30 days**.
- **Line Chart:** Click **Line Chart** to view the data in line chart format.
- **Table**: Click **Table **to view the data in table format.
- **Both**: Click **Both **to view the data in both line chart and table format.

The rows in the table display the following:

- **Date**
- **Peak LPS**: Maximum per day of average leases per second calculated for 10-minute intervals.
- **5-Day Average Peak LPS**: The five-day rolling average peak leases per second.

Email alerts can be configured to generate reports that contain monthly and quarterly data for Infoblox managed DDI services. The alerts are disabled by default and you have to manually enable them. For more information, see [*About Alerts*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280660796). You also have to manually configure the **DHCP Usage Report**, **End Customer Name**, and **Grid License UID** fields in the email message body.

The email message contains a CSV file as an attachment. The CSV file has one row per day for the billing time period and includes the following columns in each row:

- **Date**
- **Peak LPS**: Maximum per day of average queries per second calculated for 10-minute intervals.
- **5-Day Average Peak LPS**: The five-day rolling average peak leases per second.

You must enable the following alerts to generate the email report for billing:

- ib-simplified-dhcp-usage-report-per-month
- ib-simplified-dhcp-usage-report-per-quarter
