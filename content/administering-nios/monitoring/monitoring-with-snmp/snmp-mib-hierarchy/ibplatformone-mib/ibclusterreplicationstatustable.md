---
title: "ibClusterReplicationStatusTable"
source: "/space/nios90/1430127610"
pageId: "1430127610"
---
ibClusterRepliactionStatusTable (object ID 3.1.1.2.1.2.1) provides information about the Grid replication status. The following figure shows the sub branches of ibClusterReplicationStatusTable:

*ibClusterReplicationStatusTable* *Objects*

The following table provides information about the ibClusterReplicationStatusTable objects:

*ibClusterReplicationStatusTableObjects*

| Object (Type) | Description |
| --- | --- |
| ibClusterReplicationStatusEntry | A conceptual row that provides information about the Grid replication status. The status indicates whether the appliance is sending replication queues, receiving queues, or having problems with the replication. |
| ibNodeIPAddress (IbIpAddr) | IP address of a Grid member. |
| ibNodeReplicationStatus (IbString) | Replication status of the Grid member. The replication status can be one of the following: online, offline, or snapshotting. |
| ibNodeQueueFromMaster (Integer) | “Sent” queue size from master. |
| ibNodeLastRepTimeFromMaster (IbString) | Last sent time from master. |
| ibNodeQueueToMaster (Integer) | “Receive” queue size from master. |
| ibNodeLastRepTimeToMaster (IbString) | Last receive time from master. |
