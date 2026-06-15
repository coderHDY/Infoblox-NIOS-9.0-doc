---
title: "Report Clustering Dashboard"
source: "/space/nios90/280661151"
pageId: "280661151"
---
The **Reporting** **Clustering** **Status** dashboard provides detailed information on the status of the entire indexer cluster. You can get information on the status of each peer node, search head, and indexes. You can view the number of peers (reporting members), searchable copies, and number of copies (buckets).

> **warning**
>
> ### Note
> 
> The **Reporting** **Clustering** **Status** dashboard is available only when you configure the reporting clustering and you must also have the global read-only permissions for Grid Reporting Properties.



The default dashboard includes the following information:

- Indicates whether the reporting data is fully searchable. Displays **Yes** to indicate that all buckets in the cluster have a primary copy.
- Indicates whether the search and replication factors are met.
- Displays the number of indexes and peers that are searchable.

This dashboard might also display the following messages depending on the health of your cluster: Some data is not searchable, All Data is Searchable, Replication factor not met, and Search factor is not met.

# Viewing Reporting Clustering Status

To view the *Reporting* *Clustering* *Status* dashboard:

1. From the **Dashboards** -&gt; **Reporting** **Clustering** **Status** tab. In the **Peers** tab, you can view the following information:
   
   - **Peer** **Name**: The name of the reporting member.
   - **Fully** **Searchable**: Indicates whether the peer currently has a complete set of primaries and is fully searchable.
   - **Status**: The status of the reporting member.
   - **Buckets**: The number of copies stored on the peer node. The number of buckets for which the peer has copies

- The **Indexes** tab displays the following information:
  
  - **Index** **Name**: The name of the indexer.
  - **Fully** **Searchable**: Indicates whether the peer currently has a complete set of primaries and is fully searchable.
  - **Searchable** **Data** **Copies** **Status**: The status of the reporting member.
  - **Replicated** **Data** **Copies**: The replicated number of copies.
  - **Buckets**: The number of buckets for which the peer has copies.
  - **Cumulative** **Raw** **Data** **Size**: The size of the index, excluding hot buckets.
- The **Search** **Heads** tab displays the following information:
  
  - **Search** **Head** **Name**: Name of the search head.
  - **Status**: The status of the search head.
