---
title: "Configuring DNS Infrastructure Protection Data"
source: "/space/nios90/1457029249"
pageId: "1457029249"
---
You can use this feature only if the Threat Protection and Threat Protection Update licenses are installed on the Infoblox Advanced Appliance. When you configure this feature, you receive DNS infrastructure protection events in the syslog. The events logged include DNS Infrastructure Protection rules and the source IPs that triggered the rules. For information about how to monitor these events using the syslog, see [*Monitoring through Syslog*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275770).

For certain DNS Infrastructure Protection reports, accumulated statistics for each unique IP/rule pair are collected. You can control the volume of data collected per member using the following options:

- **Top** **IP/Rule** **Statistics** **Collection** **Limit**: This option limits the collection of accumulated statistics to the top N unique IP/rule pairs.
- **IP/Rule Statistics Collection Interval (minutes)**: The interval at which the accumulated statistics for the top N unique IP/rule pairs are collected. The smaller the interval, the finer the granularity of the accumulated statistics in terms of time, but the data volume will be higher.

Based on your configuration, the reporting appliance displays data in the following DNS Infrastructure Protection reports, see [*Security Dashboards*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760447):

- DNS Infrastructure Protection Top Rules Logged
- DNS Infrastructure Protection Top Rules Logged by Source

> **warning**
>
> ### Note
> 
> When threat details are missing for a non-local RPZ feed zone entry, it is recommended to check if the associated feed zone's TSIG key is configured.
> 
> To enable DNS Infrastructure Protection reports, you must select the **Security** report category in the **Grid** **Reporting** **Properties** editor. To select the **Security** checkbox, go to the **Reporting** tab -> **Grid** **Reporting** **Properties** -> **General** tab -> **Basic** tab -> select the **Security** checkbox under **Report** **Category**. Ensure that you set the Security Index% to an optimal level so the reporting database has enough storage space to accommodate all reporting data. For information about how to configure the Index%, see Configuring Grid Reporting Properties above.

To configure the data collection limit, complete:

1. From the **Administration** tab, select the **Reporting** tab and click **Grid** **Reporting** **Properties** from the Toolbar.   
   Or  
   From the **Grid** tab, select the **Grid** **Manager** tab and click the **Services** tab. In the **Services** tab, select the **Reporting** tab and click Edit -> **Grid** **Reporting** **Properties** from the Toolbar.
2. In the *Grid Reporting Properties* editor, select the **DNS Infrastructure Protection** tab and complete the following:
   
   1. **Top IP/Rule** **Statistics** **Collection** **Limit**: Enter the maximum number of the top N unique source IP/rule pairs for data collection. For example, if you specify 20, the appliance collects data for the top 20 unique source IP/rule pairs.
   2. **IP/Rule** **Statistics** **Collection** **Interval** **(minutes)**: Enter the time interval at which the reporting appliance updates data. For example, if you specify the interval as 60 minutes, the appliance updates data at a 60-minute interval.
3. Click **Save & Close**.
