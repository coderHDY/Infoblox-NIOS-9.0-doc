---
title: "Monitoring IPv4 DHCP Failover Association Utilization"
source: "/space/nios90/1857683522"
pageId: "1857683522"
---
From NIOS 9.0.8 onwards, Grid Manager displays a warning when the number of failover association IP addresses on a DHCP member approaches the maximum failover association capacity during configuration.

To prevent overutilization, NIOS sets the maximum failover association capacity threshold for each appliance model as 80% of its total supported IP addresses (see table below). Grid Manager displays a warning when the number of IP addresses assigned to a failover association on a DHCP member reaches or exceeds 90% of this threshold (80% of the total supported IP addresses) during configuration. If you proceed after receiving the warning, NIOS sends SNMP and email alerts and logs the event, allowing you to take corrective action before service impact occurs.

> **note**
>
> **Note**
> 
> SNMP trap messages are not generated at the Grid member level for IPv4 DHCP Failover Association Utilization; they are only generated at the Grid level.

- The following actions can trigger the Grid Manager warning prompt when the utilization breaches 90% threshold:
  
  - Creating a new range and assigning a failover association
  - Updating or expanding an existing range associated with a failover association
  - Changing member assignment from none/member to a failover association
  - Updating the primary or secondary member of a failover association
- Once an alert is triggered for a member, it is not reissued unless the utilization drops below 80% and then exceeds 90% again. If the utilization falls below 80% during configuration:
  
  - The alert is automatically cleared
  - A clear event SNMP trap is sent with the message “All Clear”, including member details
  - Both the alert and its clearance are recorded in the logs.
  - An email is sent to the configured recipients.

*Log snippet of clear SNMP trap *

*[image: media]*

*Log snippet of alert clearance from syslog *

*[image: media]*



*Appliance models with their maximum supported IPs, thresholds, and alert triggering counts*

| **Appliance** | **Maximum supported IPs** | **Threshold values (80%)** | **Alert Trigger Level (90% of Threshold)** |
| --- | --- | --- | --- |
| TE-815/825 | 100,000 | 80,000 | 72,000 |
| TE-926 | 110,000 | 88,000 | 79,000 |
| TE-1415/1425 | 100,000 | 80,000 | 72,000 |
| TE-1516 | 440,000 | 352,000 | 317,000 |
| TE-1425 | 100,000 | 80,000 | 72,000 |
| TE-1526 | 880,000 | 704,000 | 634,000 |
| TE-2215/2225 | 250,000 | 200,000 | 180,000 |
| TE-2326 | 1,000,000 | 800,000 | 720,000 |
| TE-4015/4025 | 250,000 | 200,000 | 180,000 |
| TE-4126 | 1,000,000 | 800,000 | 720,000 |

# Viewing the IPv4 DHCP Failover Association Utilization

You can view the IPv4 DHCP failover association utilization details on the **Data** **Management** tab, **DHCP** tab &gt; **Members** tab &gt; **Members/Servers** &gt; **IPv4** **DHCP** **Failover** **Association Utilization** section.

> **note**
>
> ### Note
> 
> If the newly introduced **IPv4 DHCP Failover Association Utilization** column in NIOS 9.0.8, is hidden after upgrading to or performing a fresh installation of NIOS 9 0.8, you can make it visible by selecting the **IPv4 DHCP Failover Association Utilization** checkbox in the *Edit Columns* dialog box.

# **Use Cases**

## Scenario: Initial breach triggers alerts

Assume that you have a TE-1425 Grid member that supports a maximum of 100,000 IP addresses. The Grid member currently has 71,999 allocated IP addresses (89.99% of the threshold value). When the allocation increases to 90% (72,000 IP addresses), the following events occur:

- Grid Manager displays a banner for that member.

* Example of warning alert in Grid Manager*

*[image: media]*

- The `dhcpMemberCapacityExceeded` SNMP trap is generated. It includes the following variables:  
  `{hostname, model, supported_max, allocated, percent_used, threshold, severity, first_seen}`
- An email is sent to configured recipients.
- The event is recorded in the audit log, Infoblox log, and syslog with a timestamp of when the event was first seen.

*[image: media]*

## Scenario: No duplicate spam while still over threshold

If a Grid member has already exceeded the 90% of the utilization threshold and an alert was sent earlier, no additional alert is triggered when the utilization increases further (for example, from 90% to 91%).
