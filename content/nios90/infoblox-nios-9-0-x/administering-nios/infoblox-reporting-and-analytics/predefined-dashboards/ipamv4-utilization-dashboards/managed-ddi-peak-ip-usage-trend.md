---
title: "Managed DDI Peak IP Usage Trend"
source: "/space/nios90/1380286530"
pageId: "1380286530"
---
The *Managed DDI Peak IP Usage Trend* dashboard displays the 5-day rolling average for peak values of the total count of IP addresses (IPv4 and IPv6 counts) aggregated across all networks in the Grid. The count includes the number of IPv4 and IPv6 addresses across all networks and network views in the Grid. If the same network is present in different network views, the IP address count will include all of such views. You can use the **Reporting SPLA** and **Members** fields as filters to get data specific to a member assigned with the extensible attribute ReportingSPLA. For more information, see the [*ReportingSPLA Extensible Attribute Assignment*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/about-ib-flex) section.

After a NIOS upgrade, ensure that you clone the data in the Manage DDI Peak IP Usage Trend dashboard and use the newly cloned dashboard. If you clone the Manage DDI Peak IP Usage Trend dashboard before the upgrade and use the clone, the reported data may be incorrect.

The following table lists the features for which the IP addresses are counted or not counted in the report:

| **Included** | **Not Included** |
| --- | --- |
| DHCP Lease | Unused addresses in DHCP ranges |
| DHCP fixed addresses | Unused addresses in reserved ranges |
| Host addresses | Reserved addresses such as network and broadcast addresses |
| DNS records (A, AAAA, PTR) |  |
| Unmanaged addresses found by discovery |  |

The *Managed DDI Peak IP Usage Trend* dashboard displays the following information in either line chart or table format.

The columns in the table display the following:

- **Time**: Time duration for which the report must be generated.
- **Reporting SPLA**: The extensible attribute value assigned to a member.
- **Members**: Select a member for which you want to view the data.
- I**Pv4 Count**: Count of IPv4 addresses at the time of daily peak usage aggregated across all networks in the Grid.
- I**Pv6 Count**: Count of IPv6 addresses at the time of daily peak usage aggregated across all networks in the Grid.
- **Total Count**: Daily peak total count of addresses at the time of peak usage aggregated across all networks in the Grid.
- **5-Day Avg IPv4 Count**: The 5-day rolling average of the IPv4 count (rounded off to nearest whole number).
- **5-Day Avg IPv6 Count**: The 5-day rolling average of the IPv6 count (rounded off to nearest whole number).
- **5-Day Avg Total Count**: The 5-day rolling average of the peak total address count (rounded off to nearest whole number).

Click on the following cells in a row in the table to view a drill-down of the network usage statistics at peak usage time for that day:

- **IPv4 Count**: Displays statistics for all the IPv4 networks in the Grid.
- **IPv6Count**: Displays statistics for all the IPv6 networks in the Grid.
- **Total Count**: Displays statistics for all the IPv4 and IPv6 networks in the Grid.

An email alert is also generated for this report that contains the IP address count. This alert is disabled by default and you have to manually enable it. For more information, see [*About Alerts*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/about-alerts). You also have to manually configure the manually configure the **MSP Name**, **End Customer Name**, and **Grid License UID** fields in the email message body.

The email message contains a CSV file as an attachment. The CSV file has one row per day for the billing time period and includes following columns in each row:

- **Peak Time**: Timestamp for the daily peak usage.
- I**Pv4 Count**: Count of IPv4 addresses at the time of daily peak usage aggregated across all networks in the Grid.
- I**Pv6 Count**: Count of IPv6 addresses at the time of daily peak usage aggregated across all networks in the Grid.
- **Total** **Count**: Daily peak total count of IP addresses at the time of peak usage aggregated across all networks in the Grid.
- **5-Day Avg IPv4 Count**: The 5-day rolling average of the IPv4 count (rounded off to nearest whole number).
- **5-Day Avg IPv6 Count**: The 5-day rolling average of the IPv6 count (rounded off to nearest whole number).
- **5-Day Avg Total Count**: The 5-day rolling average of the peak total address count (rounded off to nearest whole number).

You must enable the following alerts to generate the email report for billing:

- ib-managed-ddi-ip-usage-report-per-month
- ib-managed-ddi-ip-usage-report-per-quarter
