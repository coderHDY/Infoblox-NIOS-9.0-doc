---
title: "DNS QPS Usage Report"
source: "/space/nios90/1473380569"
pageId: "1473380569"
---
The *DNS QPS Usage Report* dashboard lets the administrator view the five-day rolling average for the total peak DNS queries per second (kQPS) calculated for all members in the grid. The Peak DNS kQPS is calculated as maximum per day of average kQPS calculated for 10-minute intervals.

The dashboard displays the following information in either line chart or table format. The line chart displays the five-day average for total peak DNS kQPS calculated for all members in the Grid.

- **Show Filters**: Click **Show Filters** to enable the filters.
- **Time**: Select a value from the drop-down list. The default value is **Last 30 days**.
- **Line Chart**: Click **Line Chart** to view the data in line chart format.
- **Table**: Click **Table **to view the data in table format.
- **Both**: Click **Both **to view the data in both line chart and table formats.

The rows in the table display the following:

- **Date**
- **Peak kQPS**: Maximum per day of average queries per second calculated for 10-minute intervals.
- **5-Day Average Peak kQPS**: The five-day rolling average for the total peak queries per second.

Email alerts are available for generating email reports that contain the monthly and quarterly data for Infoblox managed DDI services. This alert is disabled by default and you have to manually enable it. For more information, see [*About Alerts*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280660796). You also have to manually configure the **DNS Usage Report**, **End Customer Name**, and **Grid License UID** fields in the email message body.

The email message contains a CSV file as an attachment. The CSV file has one row per day for the billing time period and includes the following columns in each row:

- **Date**
- **Peak kQPS**: Maximum per day of average queries per second calculated for 10-minute intervals.
- **5-Day Average Peak kQPS**: The five-day rolling average for the total peak queries per second.

You must enable the following alerts to generate the email report for billing:

- ib-simplified-dns-usage-report-per-month
- ib-simplified-dns-usage-report-per-quarter
