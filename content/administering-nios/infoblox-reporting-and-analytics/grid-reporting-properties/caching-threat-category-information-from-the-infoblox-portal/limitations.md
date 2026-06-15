---
title: "Limitations"
source: "/space/nios90/1457094813"
pageId: "1457094813"
---
Note the following limitations when you use the threat indicator caching feature:

- Enabling the threat indicator caching feature results in higher usage of network bandwidth and reduction of the reporting indexing capacity.
- Enabling the threat indicator caching feature impacts the performance of Grid Master as Splunk consumes significant bandwidth to forward the entries to indexers. It takes a few minutes for the entries to get forwarded and indexed completely based on the data size.
- If you enable the threat indicator caching feature, and then revert or upgrade the Grid to a version that does not support the feature, then the indexed threat indicator database data will still occupy disk space even though they are not searchable in the upgraded or reverted Grid version.
- The size of the downloaded threat indicator database file will be huge due to data retention in the following scenarios:
  
  - When you enable and disable the threat indicator caching feature a few times.
  - When you upgrade NIOS and then revert it to the prior version without disabling the threat indicator feature, and also when you upgrade NIOS again.
- When the threat indicator caching feature is enabled, threat details in the *DNS Top RPZ Hits* report does not show historic data. For more information about the *DNS Top RPZ Hits* report, see [*Security Dashboards*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760447).
- For replication to work properly in cluster mode, Infoblox recommends that an appliance should have 12 cores CPU and 12 GB memory.
