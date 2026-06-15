---
title: "System Utilization Dashboards"
source: "/space/nios90/280270234"
pageId: "280270234"
---
This section details the dashboards of System Utilization dashboards category. For more information on operations that can be performed on reporting dashboards, see *[About Dashboards](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/about-dashboards)*.

The dashboards covered in this section are as follows:

*[toc]*

# CPU Utilization Trend

The *CPU* *Utilization* *Trend* dashboard provides CPU usage trends over a given time frame. The default dashboard displays line graphs that show CPU usage trends for up to five members in the Grid over the last 24 hours. Each of the members is represented with a different color line graph.

# Memory Utilization Trend

The *Memory* *Utilization* *Trend* dashboard provides memory usage trends over a given time frame. The default dashboard displays line graphs that show memory usage trends for up to five members in the Grid over the last 24 hours. Each of the members is represented with a different color line graph.

# Traffic Rate by Member

The *Traffic* *Rate* *by* *Member* dashboard provides inbound and outbound traffic over a given time frame. The dashboard displays line graphs that show traffic rate for members with reporting service enabled within the last 24 hours. Grid Manager uses different color line graphs to distinguish inbound and outbound traffic for different members.

# SPLA Grid Licensing Features Enabled

The *SPLA Grid Licensing Features Enabled* dashboard lists the overall status of licensed features across all IB-FLEX members and non IB-FLEX members in the Grid. You can also view the status of each feature for individual members during a specified time period. You can use the **TIme**, **Reporting SPLA**, and **Members** fields as filters to get data for a specified period for individual members assigned with the extensible attribute ReportingSPLA. For more information, see the [*ReportingSPLA Extensible Attribute Assignment*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/about-ib-flex/About+IB-FLEX) section.

> **warning**
>
> **Note**
> 
> When you move your mouse away from the **SPLA Grid Licensing Features Enabled** section, the **Open in Search, Inspect, **and** Refresh** icons might not show up in the GUI. You can view these icons when you move your mouse on the data displayed for the **SPLA Grid Licensing Features Enabled** dashboard.

This dashboard displays the following information in table format:

- **Feature**: Indicates the features on which the Flex Grid Activation license is installed.
- **Active Trust Plus:** Displays **Active Trust Plus** as enabled on a member when any of the following RPZ feed zones are configured: antimalware-ip.rpz.infoblox.local, bot-ip.rpz.infoblox.local, exploitkit-ip.rpz.infoblox.local, malware-dga.rpz.infoblox.local, tor-exit-node-ip.rpz.infoblox.local, multi-domain.surbl.rpz.infoblox.local, and fresh-domain.surbl.rpz.infoblox.local.
- **Active Trust Standard**: Displays **Active Trust Standard** as enabled on a member when any of the following RPZ feed zones are configured: base.rpz.infoblox.local, antimalware.rpz.infoblox.local, ransomware.rpz.infoblox.local, and bogon.rpz.infoblox.local. Active Trust Standard supports four zones whereas Active Trust Plus or Active Trust Advanced supports four zones and additional seven zones. This report displays the highest level of Active Trust support that is configured for a member.
- **Authoritative DNS:** Displays if DNS is enabled and authoritative zone is assigned to the member.
- **DNS Cache Acceleration**: Displays if DNS Cache Acceleration service is enabled on a member.
- **DNS Traffic Control**: Displays if DNS is enabled with resolver set to DNS server and the LBDN pool is configured for DNS Traffic Control.
- **FireEye**: Displays if DNS is enabled and FireEye zone is configured on a member.
- **Recursive DNS**: Displays information about whether DNS and recursion are enabled at the following levels:
  
  - Recursion is enabled at the member level.
  - Recursion is enabled at the Grid level and member inherits the setting.
  - Recursion is enabled for any DNS view assigned to a member.
- **Security Ecosystem**: Displays if TAXII is enabled on a member.
- **Subscriber Services**: Displays if Subscriber Services is enabled on a member.
- **Threat Insight**: Displays if Threat Insight is enabled on a member.
- **DNS Infrastructure Protection**: Displays if DNS Infrastructure Protection service is enabled on a member.

# Managed DDI Features Enabled

The* Managed DDI Features Enabled* dashboard is for managed services deployment and displays the overall status for licensed features across all IB-FLEX members and non IB-FLEX members on the Grid. The status data used in the report is generated once every 24 hours for all IB-FLEX members and non IB-FLEX members in the Grid. The report is in a tabular format and the rows indicate the status of the feature. The report displays **Yes** in the **Enabled** column if the feature is enabled on at least one IB-FLEX member in the Grid for a period of at least 15 days. You can drill down on a row to view the feature status for individual members during a specified time period. You can also drill down on a row to view the feature status for individual members that are assigned with extensible attribute ReportingSPLA by using the **Reporting SPLA** and **Members** fields. For more information, see the [*ReportingSPLA Extensible Attribute Assignment*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/about-ib-flex/About+IB-FLEX) section.

The report displays the status for the following features:

- Recursive DNS
- Authoritative DNS: Displayed if DNS is enabled and the authoritative zone is assigned to the member.
- DNS Cache Acceleration: Displayed if the DNS Cache Acceleration service is enabled on the member.
- DHCP: Displayed if the DHCP service is enabled o the member.
- Captive Portal: Displayed if the Captive Portal service is enabled on the member.
- Active Trust: Separate rows are displayed for Active Trust Standard and Active Trust Plus. Active Trust Standard supports 4 zones whereas Active Trust Plus/Active Trust Advanced supports 7 zones in addition to these 4 zones. The *Managed DDI Features Enabled* report displays the highest level of Active Trust support configured for a member.  
  Active Trust Plus is displayed as **Enabled ** if a member has any of the following RPZ feed zones configured: antimalware-ip.rpz.infoblox.local, bot-ip.rpz.infoblox.local, exploitkit-ip.rpz.infoblox.local, malware-dga.rpz.infoblox.local, tor-exit-node-ip.rpz.infoblox.local, multi-domain.surbl.rpz.infoblox.local, fresh-domain.surbl.rpz.infoblox.local  
  Active Trust Standard is displayed as **Enabled ** if a member has any of the following RPZ feed zones configured: base.rpz.infoblox.local, antimalware.rpz.infoblox.local, ransomware.rpz.infoblox.local, bogon.rpz.infoblox.local
- DNS  Traffic Control: Displayed if the DNS service is enabled with the resolver set to BIND and the LBDN pool is configured during DTC configuration.
- FireEye: Displayed if the DNS service is enabled with the FireEye zone configured on a member.
- Security Ecosystem: Displayed if the TAXII service is enabled on a member.
- Threat Insight: Displayed if the Threat Insight service is enabled on a member.
- DNS Infrastructure Protection: Displayed if the DNS Infrastructure Protection service is enabled on a member.
- Microsoft Management: Displayed as **True** if an IB-FLEX member is associated with at least one Microsoft Server.
- Cloud Network Automation: Displayed as **True** for the IB-FLEX Grid Master if any of the following conditions are met.
  
  - At least one Cloud Platform member is present in the Grid and the cloud API service is enabled on the Cloud Platform member.
  - AWS Route 53 integration is enabled with at least one enabled synchronization task.

An email alert is also generated for this report that contains the IP address count. This alert is disabled by default and you have to manually enable it. For more information, see *[About Alerts](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/about-alerts)*. You also have to manually configure the **MSP Name**, **End Customer Name**, and **Grid License UID** fields in the email message body.

The email message contains a CSV file as an attachment that includes the following columns in each row:

- **Feature**: Features that are displayed in the report.
- **Enabled**: Yes or No

You must enable the following alerts to generate the email report for billing:

- ib-managed-ddi-feature-usage-report-per-month
- ib-managed-ddi-feature-usage-report-per-quarter

# System Capacity Prediction Trend

The *System* *Capacity* *Prediction* *Trend* dashboard forecasts the date and timestamp when the system resources such as CPU, database objects, DHCP leases, DNS queries meet its thresholds based on the current usage trends for the selected Grid member. This dashboard helps you determine the current usage, thresholds, and the predicted utilization over time. Using this dashboard, you can avoid unexpected usage of resources in your environment. In addition, you can scale the functional capacity for different appliance models.  
The default dashboard displays the following information:

- **CPU** **Threshold**
  
  - **Max** **CPU** **Utilization**: Displays the maximum CPU used by the selected member.
  - **CPU ****Threshold**** Prediction**: Displays the predicted date and time when the CPU usage might reach its threshold based on your current usage.
  - **CPU**** Trend ****Prediction**: Displays the line graph to show the actual, threshold, and predicted CPU usage with a different color for the selected member and model type.
- **DB**** Objects ****Threshold**
  
  - **Max**** DB**** Objects ****Utilization**: The maximum number of database objects that is in use for the selected member.
  - **DB**** Objects**** Threshold**** Prediction**: Displays the predicted date and time when the database objects reach its thresholds based on your current usage trend.
  - **DB**** Objects**** Trend**** Prediction**: Displays the line graphs with different colors to show the actual database objects usage, database threshold value, and predicted database objects usage.
- **DNS ****Thresholds**
  
  - **Datasheet**** Max ****QPS**: The maximum number of queries sent to the selected member.
  - **QPS**** Threshold**** Prediction**: Displays the predicted date and time when the queries might reach its threshold based on your current trend.
  - **QPS ****Prediction**: Displays line graphs to show the actual number of queries, threshold, and predicted number of queries with a different color for the selected member.
- **DHCP**** Thresholds**
  
  - **Datasheet**** Max ****LPS**: Displays the appliance model and the number of DHCP leases issued.
  - **LPS**** Threshold ****Prediction**: Displays the predicted date and time when the DHCP leases might reach its threshold based on your current usage trend.
  - **DHCP**** Activity**** Prediction**: Displays the line graphs with a different color to show the actual, threshold, and predicted count of DHCP leases.
