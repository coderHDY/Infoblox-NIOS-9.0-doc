---
title: "Clustering Overview"
source: "/space/nios90/1425441194"
pageId: "1425441194"
---
The concept of reporting clustering is to set up a group of reporting members within one site (location) or across multiple sites. When you configure multiple reporting members within one site, you are setting up a single-site cluster. Configuring multiple reporting members across different sites gives you a multi-site cluster, as illustrated in the figure Sample Multi-Site Reporting Cluster Single-site clusters and multi-site clusters below, offer the benefits of high availability and disaster recovery. Without reporting clustering, a reporting member is known as a single indexer.  
A reporting cluster, either single-site or multi-site, consists of the following components that work together to perform reporting and clustering activities:

- **Cluster** **Master**: The cluster master coordinates all clustering activities and always runs on the Grid Master.
- **Indexer** (also known as cluster peer): An indexer that collects, processes, and indexes reporting data. It can also function as the originating indexer (source peer) or a replication target (target peer).
- **Forwarder**: A forwarder sends reporting data to the indexer for processing.
- **Search Head**: A search head handles search queries and distributes search requests to indexers in the cluster. One of the reporting members in the cluster will have double duties of being the indexer and search head.
- **Replication Factor**: This factor defines the number of copies of reporting data the cluster replicates and maintains. This is set to 2 by default for both single-site and multi-site clusters so the clusters can tolerate one reporting member failure without losing any data (since there will still be another copy of data available in the cluster).
- **Search Factor**: This factor defines the number of copies of searchable data. This is set to 2 for single-site clusters and set to 1 for multi-site clusters so the cluster can tolerate one reporting member failure without impacting search results (since there will still be a searchable copy of data available in the cluster).
- **ReportingSite Extensible Attribute**: This is an extensible attribute that you associate with reporting members in a multi-site cluster. For more information, see ReportingSite Extensible Attribute below.

In a Grid that includes a reporting cluster, the Grid Master coordinates various activities across reporting members.  
In the reporting cluster, a reporting member can act as an indexer and/or a search head. It also participates in peer-to-peer data replication.   
To configure a reporting cluster, you must first set up all the reporting members and enable the reporting service in the Grid. You can then select the reporting clustering type for your cluster. For more information about cluster types, see Reporting Cluster Modes below. When you configure the reporting cluster, you must use an NTP server to synchronize the time of the Grid Master, Grid members and reporting members.
