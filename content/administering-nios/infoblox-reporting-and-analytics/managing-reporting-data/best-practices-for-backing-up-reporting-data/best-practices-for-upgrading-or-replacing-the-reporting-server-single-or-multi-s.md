---
title: "Best Practices for Upgrading or Replacing the Reporting Server (Single or Multi-Site Cluster)"
source: "/space/nios90/1356824934"
pageId: "1356824934"
---
If the Grid has a reporting configuration updated from a single indexer to a single or multi-site cluster, data replication starts only for the data indexed after clustering. If you upgrade or replace the old reporting server, you may lose the data indexed before clustering. Infoblox recommends that you restore the reporting backup to view historic data.
