---
title: "Predefined Dashboards"
source: "/space/nios90/280758557"
pageId: "280758557"
---
Grid Manager includes a list of predefined dashboards that provide summary views for most of the data and trends in your Grid. If you need to modify the settings of a default dashboard, you can either clone the default dashboard, or create a new one from scratch to create a user-defined dashboard that displays multiple reports that are relevant to the activities that you want to monitor. For more information about activities that you can perform on dashboards, see *[About Dashboards](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/about-dashboards)*.

> **error**
>
> **Warning**
> 
> Infoblox recommends that you do not modify the predefined dashboards even if you have appropriate permissions. Editing the default dashboards changes the default settings and your changes become permanent. In addition, you might not be able to see the latest changes made by Infoblox. You can select a default dashboard and clone it to modify any of the settings, such as permissions, panels, and so on. For information about cloning dashboards, see *[About Dashboards](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/about-dashboards)*.

You can apply filters and view the dashboards in table, stacked area, or in both views. The following table lists the dashboard categories and their corresponding dashboards. The dashboards have been explained in detail in the later sections.

*Dashboard* *Categories*

| **Dashboard**** ****Category** | **Corresponding**** ****Dashboard** | **Displays**** ****IDNs**** ****in**** ****Punycode**** ****(Yes/No)** |
| --- | --- | --- |
| **Audit** **Log** **Events** | See the following dashboard categories at *[Audit Log Events Dashboards](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/audit-log-events-dashboards)* |  |
|  | For Audit Log Events | Yes |
|  | For Audit Log WAPI Events | Yes |
| I**PAMv4** **Utilization** | See the following dashboard categories at *[IPAMv4 Utilization Dashboards](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/ipamv4-utilization-dashboards)*: |  |
|  | DHCPv4 Top Utilized Networks | Yes |
|  | DNS Statistics per DNS View | Yes |
|  | DNS Statistics per Zone | Yes |
|  | IPAMv4 Network Usage Statistics | Yes |
|  | IPAMv4 Network Usage Trend | Yes |
|  | IPAMv4 Top Utilized Networks | Yes |
|  | Managed DDI Peak IP Usage Trend | NA |
|  | DNS Object Count Trend for Flex Grid License | NA |
|  | IP Address Usage Report | NA |
|  | VLAN Conflict | NA |
|  | License Pool Utilization | No |
|  | IPAM Prediction Dashboard | No |
| **Devices** **(Discovery)** | See the following dashboard categories at *[Devices (Discovery) Dashboards](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/devices-discovery-dashboards)*: |  |
|  | Inactive IP Addresses | Yes |
|  | Port Capacity Delta by Device | Yes |
|  | Port Capacity Trend | Yes |
|  | Port Capacity Utilization by Device | Yes |
|  | IP Address Inventory | Yes |
|  | Network Inventory | Yes |
| Network Insight | End Host History | Yes |
|  | Device Interface Inventory | Yes |
|  | Device Inventory | Yes |
|  | Device Components | Yes |
|  | IPAMv4 Device Networks | Yes |
|  | Device Advisor | Yes |
| **DHCP** **Dashboards** | See the following dashboard categories at *[DHCP Dashboards](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/dhcp-dashboards)**:* |  |
| DHCP Fingerprints | Device Trend | Yes |
|  | Device Class Trend | Yes |
|  | Top Devices Identified | Yes |
|  | Top Devices Denied an IP Address | Yes |
|  | Top Device Classes | Yes |
|  | Device Fingerprint Change Detected | Yes |
| DHCP Lease | DHCP Lease History | Yes |
|  | DHCP Top Lease Clients | IDN is not supported |
|  | *DHCP LPS Usage Report* | NA |
| DHCP Performance | DHCPv4 Range Utilization Trend | Yes |
|  | *DHCPv4 Usage Trend* | Yes |
|  | *DHCP Message Rate Trend* | Yes |
|  | *DHCPv4 Usage Statistics* | No |
| **DNS** **Dashboards** | See the following dashboard categories at *[DNS Dashboards](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/dns-dashboards)* |  |
| DDNS Query | DDNS Update Rate Trend | Yes |
| DNS Performance | DNS Response Latency Trend | Yes |
|  | Managed DNS Peak Usage Trend | NA |
|  | DNS QPS Usage Report | NA |
| DNS Query | DNS Top Requested Domain Names | Yes |
|  | DNS Top Clients | Yes |
|  | DNS Top Clients Per  Domain | Yes |
|  | DNS Query Rate by Query Type | Yes |
|  | DNS Query Rate by Member | Yes |
|  | DNS Replies Trend | Yes |
|  | DNS Response Latency Trend | Yes |
|  | DNS Top Clients Per Domain | Yes |
|  | The DNS Top NXDOMAIN / NOERROR (no data) | Yes |
|  | DNS Top SERVFAIL Errors Sent | Yes |
|  | DNS Top SERVFAIL Errors Received | Yes |
|  | DNS Top Timed-out Recursive Queries | Yes |
|  | DNS Query Trend per IP Block Group | Yes |
|  | DNS Effective Peak Usage Trend for SPLA Grid License | Yes |
|  | DNS Daily Peak Hour Query Rate by Member | No |
|  | DNS Daily Query Rate by Member | No |
|  | DNS Cache Hit Rate Trend | No |
| DNS Capture | DNS Domain Query Trend | Yes |
|  | DNS Domains Queried by Client | Yes |
|  | DNS Top Clients by Query Type | No |
|  | DNS Top Clients Querying MX Records | No |
| DNS Traffic Control | DNS Traffic Control Resource Availability Status | No |
|  | DNS Traffic Control Resource Availability Trend | No |
|  | DNS Traffic Control Resource Pool Availability Status | No |
|  | DNS Traffic Control Resource Pool Availability Trend | No |
|  | DNS Traffic Control Resource SNMP Trend | No |
|  | DNS Traffic Control Response Distribution Trend | No |
| DNS Reclamation | DNS Scavenged Object Count Trend | Yes |
| **Security** **Dashboards** | See the following dashboard categories at *[Security Dashboards](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/security-dashboards)* |  |
|  | FireEye Alerts | Yes |
|  | DNS Top RPZ Hits | Yes |
|  | DNS Top RPZ Hits by Clients | Yes |
|  | DNS Infrastructure Protection Event Count Dashboard | Yes |
|  | DNS Infrastructure Protection Top Rules Logged | Yes |
|  | DNS Top Tunneling Activity | Yes |
|  | DNS Tunneling Traffic by Category | Yes |
|  | Top Malware and DNS Tunneling Events by Client | Yes |
|  | Detailed RPZ Violations by Subscriber ID | NA |
|  | DNS RPZ Hits Trend by Mitigation Action | Yes |
|  | DNS Firewall Executive Threat Report | No |
|  | Top DNS Firewall Hits | No |
|  | Malicious Activity by Client | Yes |
| **Ecosystem** **Dashboards** | See the following dashboard categories at *[Ecosystem Dashboards](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/ecosystem-dashboards)* |  |
|  | User Login History Report | Yes |
|  | Subscription Data | Yes |
|  | Publish Data | Yes |
| **Cloud** **Dashboards** | *[VM Address History](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/cloud-dashboards)* | Yes |
| **System** **Utilization** | See the following dashboard categories at *[System Utilization Dashboards](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/system-utilization-dashboards)* |  |
|  | CPU Utilization Trend | Yes |
|  | Memory Utilization Trend | Yes |
|  | Traffic Rate by Member | Yes |
|  | SPLA Grid Licensing Features Enabled | NA |
|  | Managed DDI Features Enabled | Yes |
| System Capacity | System Capacity Prediction Trend | No |
| **Internal** **Dashboards** | See the following dashboard categories at *[Internal Dashboards](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/internal-dashboards)* |  |
|  | Reporting Index Usage Statistics | NA |
|  | Reporting License Usage | No |
|  | Reporting Volume Usage Trend per Category | NA |
|  | Reporting Volume Usage Trend per Member | NA |
| License Dashboards | *[License Pool Utilization](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/license-dashboards)* | No |

> **warning**
>
> **Note**
> 
> To view RPZ-related reports or dashboards, you must enable RPZ logging on the **Logging** tab in the *Grid DNS Properties* editor.
