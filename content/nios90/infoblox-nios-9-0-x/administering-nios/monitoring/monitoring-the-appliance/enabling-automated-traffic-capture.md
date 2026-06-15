---
title: "Enabling Automated Traffic Capture"
source: "/space/nios90/280760742"
pageId: "280760742"
---
Sometimes, there may be a sudden and unexplained change in the KPIs (Key Performance Indicators) in your network that may degrade your network performance and traffic capture during these events may not be available. For example, the cache hit ratio may drop below the configured value, or there may be an increase in authoritative delay.

You can configure NIOS so that a traffic capture may be triggered based on thresholds configured for DNS Cache Hit Ratio and Queries Per Seconds. You can then analyse the traffic capture data and use it to gather production data thus bringing down the time taken for root cause analysis. You can also attach the traffic capture data to a support case so that Infoblox Support can take the investigation forward.

You can choose to receive an SNMP trap or an email notification every time traffic capture is enabled or disabled or a support bundle is downloaded. For more information see, *[Configuring SNMP](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/configuring-snmp)*.

> **warning**
>
> **Note**
> 
> If DNS Cache Acceleration is enabled on the IB-FLEX platform, the cache hit ratio is not updated for a minute thus triggering a false traffic capture.

To configure automated traffic capture:

1. From the** Infoblox ****Grid** tab, select the **Grid**** Manager** tab -&gt; click **Grid Properties** -&gt; **Edit** from the Toolbar.  
   Or to configure automated traffic capture for a member, from the **Grid** tab, select the **Grid**** Manager** tab -&gt; **Members** tab -&gt; select the member -&gt; click the Action icon and click **Edit**.
2. In *Grid Properties Editor (for Grid) *or* Grid Member Properties Editor* (for members), click **Monitoring** -&gt; **Advanced** tab.
3. Select the **Enable Automated Traffic Capture** checkbox.
4. In the **Capture Duration** field, enter the number of seconds for which traffic must be captured. For example, if you enter 30 in the **Capture Duration** field, traffic is captured for 30 seconds and stored in the traffic capture file. After 30 seconds, traffic is captured once again and the details are stored in a new traffic capture file. A new traffic capture is started only after the earlier traffic capture file is packaged. You can set a value from 1 to 600 seconds.  **Capture Duration** is a mandatory field. If the capture file exceeds 2 GB (for IB-40*XX *and PT-40*XX *appliances) and 1 GB (for all other appliances), NIOS stops the traffic capture.
5. Select the **Save Local Copy** checkbox to save traffic capture data in your local disk.
6. Select the **Include Support Bundle **checkbox to download the support bundle after the traffic capture is complete and the system has remained in a stable state for 5 minutes.
7. From the **Export to** drop-down list, select your local management system (FTP server or SCP server) to which to transfer the traffic capture file. The default is **None**.
8. In the **Directory Path For Capture** field, enter the destination directory on the NIOS server for which to transfer the traffic capture files.
9. In the **Directory Path For Support Bundle **field, enter the destination directory on the NIOS server for which to transfer the support bundles.  
   Note that if you enable the **Include Support Bundle **checkbox but do not specify the directory path for the support bundle, NIOS transfers the support bundles to the directory path that you specify in the **Directory Path For Capture** field.
10. In the **Server Address** field, enter the IP address of the FTP or the SCP server that you selected from the **Export to** drop-down list.
11. In the **Username** and **Password** fields, enter the user credentials to upload to the FTP or SCP server.
12. Select the **Enable Cache Hit Ratio Trigger** checkbox if you want NIOS to trigger a traffic capture based on the value of the cache hit ratio of recursive queries. If the cache utilization goes above the value you specify in the **Cache Utilization** field and the cache hit ratio goes below the value you specify in the **Hit Ratio Threshold Trigger** field, traffic capture is triggered. Once  the cache hit ratio reaches the value you specify in the **Reset** field, NIOS stops the traffic capture.
13. Select the **Enable Queries Per Second Trigger** checkbox if you want NIOS to monitor the QPS (queries per second). NIOS triggers a traffic capture if the QPS value goes below the threshold value you specify in the **QPS Threshold Trigger** field. Once the QPS value reaches the value you specify in the **Reset** field, NIOS stops the traffic capture. For information about QPS, see *[About Dashboards](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/about-dashboards)*.
14. Select the **Enable Outgoing Recursive Queries Trigger** checkbox if you want NIOS to monitor the count of concurrent outgoing recursive queries. NIOS triggers a traffic capture if the count goes above the value you specify in the **Recursive Queries Threshold Trigger** field. If the number of concurrent recursive queries goes below the value you specify in the **Reset** field, NIOS stops the traffic capture. For information about recursive queries, see *[Enabling Recursive Queries](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/enabling-recursive-queries)*.
15. Select the **Enable Authoritative DNS Latency Trigger** checkbox if you want NIOS to monitor the authoritative DNS latency. NIOS performs the DNS latency on the IPS address you choose from the **Query IP Address** field and triggers a traffic capture if the DNS latency goes above the value you specify in the **Authoritative DNS Latency Threshold Trigger** field. The DNS latency is determined by querying a reverse zone against the IP address you selected using the `dig` command. If the authoritative DNS query latency goes below the value you specify in the **Reset** field, NIOS stops the traffic capture. For information about DNS latency, enabling and disabling DNS alert monitoring, see *[Monitoring Tools](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/monitoring-tools)*.
16. Select the **Enable Recursive DNS Latency Trigger** checkbox if you want NIOS to monitor the recursive DNS latency. NIOS performs the DNS latency on the IPS address you choose from the **Query IP Address** field and triggers a traffic capture if the DNS latency goes above the value you specify in the **Recursive DNS Latency Threshold Trigger** field. The DNS latency is determined by querying each domain against the IP address you selected using the `dig` command. If the recursive DNS query latency goes below the value you specify in the **Reset** field, NIOS stops the traffic capture. For information about DNS latency, enabling and disabling DNS alert monitoring, see *[Monitoring Tools](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/monitoring-tools)*.
17. Click **Save & Close**.
