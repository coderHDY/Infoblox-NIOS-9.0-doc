---
title: "Configuring Reporting Clustering"
source: "/space/nios90/280758629"
pageId: "280758629"
---
You can add higher scale, performance, and reliability to the Reporting and Analytics solution by using the reporting clustering feature. Through reporting clustering, you can combine and configure multiple reporting members in a cluster.

The reporting clustering feature offers high availability and disaster recovery. You can configure one or more reporting appliances in multiple locations (sites). Reporting data is replicated among these reporting appliances to ensure redundancies and continuous service even if one of the servers fails. For example, if one of the reporting members has operational issues, reports and dashboards will use backup copies of the data on other reporting members in the cluster to ensure continuous reporting service. When a new reporting member joins the cluster, you do not need to reconfigure and restart your forwarders to send data to the new reporting member as the Grid Master automatically notifies all forwarders about the new member. In addition, data indexed on the new reporting member participates in searches that support reports and dashboards. Thus, the new reporting clustering solution increases scale, offers higher reporting performance and greatly improves the reliability of the Reporting and Analytics solution.

For more information about how reporting clustering works and the types of clustering mode, see Clustering Overview and Reporting Cluster Modes below.

> **warning**
>
> ### Note
> 
> Reporting clusters are not supported in a Multi-Grid configuration.

*[children]*
