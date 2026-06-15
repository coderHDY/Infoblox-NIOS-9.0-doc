---
title: "Managed DNS Peak Usage Trend"
source: "/space/nios90/1473740832"
pageId: "1473740832"
---
The *Managed DNS Peak Usage Trend* dashboard is for managed services deployment and lets the administrator view the five-day average for the total peak DNS queries per second calculated for all IB-FLEX members and non IB-FLEX members in the grid. Peak DNS queries per second is calculated as maximum per day of average queries per second calculated for 10-minute intervals. You can use the **Reporting SPLA** and **Members** fields as filters to get data specific to a member assigned with the extensible attribute ReportingSPLA. For more information, see the [*ReportingSPLA Extensible Attribute Assignment*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/about-ib-flex) section.

This dashboard displays the following information in either line chart or table format. The line chart displays the 5-day average for total peak DNS queries per second for all IB-FLEX members and non IB-FLEX members in the Grid.

- **Show Filters**: Click **Show Filters** to enable the filters.
- **Time**: Select a value from the drop-down list. The default value is **Last 30 days**.
- **Reporting SPLA**: Select a extensible attribute value from the drop-down list.
- **Members**: Select a member for which you want to view the data.
- **Line Chart:** Click **Line Chart** to view the data in line chart format.
- **Table**: Click **Table **to view the data in table format.
- **Both**: Click **Both **to view the data in both line chart and table format.

The rows in the table display the following:

- **Date**
- **Peak QPS**: Maximum per day of average queries per second calculated for 10-minute intervals.
- **5-Day Average Peak QPS**: The 5-day rolling average peak queries per second.

An email alert is also generated for this report that contains the monthly and quarterly data for Infoblox managed DDI services. This alert is disabled by default and you have to manually enable it. For more information, see [*About Alerts*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/about-alerts). You also have to manually configure the **MSP Name**, **End Customer Name**, and **Grid License UID** fields in the email message body.

The email message contains a CSV file as an attachment. The CSV file has one row per day for the billing time period and includes following columns in each row:

- **Date**
- **Peak QPS**: Maximum per day of average queries per second calculated for 10-minute intervals.
- **5-Day Average Peak QPS**: The 5-day rolling average peak queries per second.

You must enable the following alerts to generate the email report for billing:

- ib-managed-dns-usage-report-per-month
- ib-managed-dns-usage-report-per-quarter
