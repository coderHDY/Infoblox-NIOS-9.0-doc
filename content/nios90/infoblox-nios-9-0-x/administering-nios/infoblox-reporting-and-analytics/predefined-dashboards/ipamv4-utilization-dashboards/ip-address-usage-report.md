---
title: "IP Address Usage Report"
source: "/space/nios90/1380384786"
pageId: "1380384786"
---
The *IP Address Usage Report* dashboard displays the five-day rolling average for peak values of the total count of IP addresses aggregated across all networks in the Grid. The count includes the number of IPv4 and IPv6 addresses across all networks and network views in the Grid. If the same network is present in different network views, the IP address count will include all of such views.

The following table lists the features for which the IP addresses are counted or not counted in the report:

| **Counted** | **Not Counted** |
| --- | --- |
| DHCP Lease | Unused addresses in DHCP ranges |
| DHCP fixed addresses | Unused addresses in reserved ranges |
| Host addresses |  |
| DNS records (A, AAAA, PTR) |  |
| Unmanaged addresses found by discovery |  |

The *IP Address Usage Report* dashboard displays the following information in either line chart or table format.

The columns in the table display the following:

- **Time**: Time duration for which the report must be generated.
- I**Pv4 Count**: Count of IPv4 addresses at the time of daily peak usage aggregated across all networks in the Grid.
- I**Pv6 Count**: Count of IPv6 addresses at the time of daily peak usage aggregated across all networks in the Grid.
- **Total Count**: Daily peak total count of addresses at the time of peak usage aggregated across all networks in the Grid.
- **5-Day Avg IPv4 Count**: The five-day rolling average of the IPv4 count (rounded off to the nearest whole number).
- **5-Day Avg IPv6 Count**: The five-day rolling average of the IPv6 count (rounded off to the nearest whole number).
- **5-Day Avg Total Count**: The five-day rolling average of the peak total address count (rounded off to the nearest whole number).

Email alerts are available for generating email reports that contain the quarterly and monthly data of five-day average of peak IP address count values. This alert is disabled by default and you have to manually enable it for monthly or quarterly billing alerts based on your requirement. For more information, see [*About Alerts*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/about-alerts). You also have to manually configure the **IPAM Usage Report**, **End Customer Name**, and **Grid License UID** fields in the email message body.

The email message contains a CSV file as an attachment. The CSV file has one row per day for the billing time period and includes the following columns in each row:

- **Peak Time**: Timestamp for the daily peak usage.
- I**Pv4 Count**: Count of IPv4 addresses at the time of daily peak usage aggregated across all networks in the Grid.
- I**Pv6 Count**: Count of IPv6 addresses at the time of daily peak usage aggregated across all networks in the Grid.
- **Total** **Count**: Daily peak total count of IP addresses at the time of peak usage aggregated across all networks in the Grid.
- **5-Day Avg IPv4 Count**: The five-day rolling average of the IPv4 count (rounded off to the nearest whole number).
- **5-Day Avg IPv6 Count**: The five-day rolling average of the IPv6 count (rounded off to the nearest whole number).
- **5-Day Avg Total Count**: The five-day rolling average of the peak total address count (rounded off to the nearest whole number).

You must enable the following alerts to generate the email report for billing:

- ib-simplified-ip-usage-report-per-month
- ib-simplified-ip-usage-report-per-quarter
