---
title: "Clustering Data Replication"
source: "/space/nios90/1425997944"
pageId: "1425997944"
---
When you change the configuration from a single indexer to a single-site cluster or multi-site cluster and from a single-site cluster to a multi-site cluster, the replication of data will start only for the new data that are created after you have completed the cluster mode configuration. When you change the configuration, the replication of new data starts only after you have completed the clustering configuration. Any data created prior to switching are restored on the primary site and are not replicated on the secondary site. To manage your reporting clustering data efficiently, see [*Guidelines for Deploying Reporting Clusters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/407765137).

*Sample* *Multi-Site* *Reporting* *Cluster*

*[drawio]*

For more information about how reporting cluster works, refer to the Splunk documentation at [https://docs.splunk.com/Documentation/Splunk/9.2.1/Indexer/Basicclusterarchitecture](https://docs.splunk.com/Documentation/Splunk/9.2.1/Indexer/Basicclusterarchitecture).

*[excerpt]*

*Port* *Requirement* *for* *IPv4* *and* *IPv6* *Multi-site* *Clustering*

*[drawio]*
