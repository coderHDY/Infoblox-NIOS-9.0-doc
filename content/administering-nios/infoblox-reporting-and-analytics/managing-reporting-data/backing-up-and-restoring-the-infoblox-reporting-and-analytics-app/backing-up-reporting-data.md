---
title: "Backing Up Reporting Data"
source: "/space/nios90/1356824818"
pageId: "1356824818"
---
Before you back up the reporting database, ensure that the reporting service is enabled on the reporting server. You cannot perform or schedule a backup if the reporting service is disabled on the reporting server. If you want to upgrade your reporting server, back up all the data before you power down the server. During an upgrade, the reporting server is automatically upgraded after the Grid Master. You cannot control or schedule when to upgrade the reporting server.

Note that reporting data backups are incremental backups, which means that backup files are copied to the designated file server only when there are new events generated since the last backup. Backing up of the reporting database to an FTP or SCP server using IPv4 or IPv6 is supported. The backup file is a .tar.gz file that contains the reporting data.  
If you stop an ongoing backup process, backup files are still being copied to the designated file server. When you perform a subsequent backup, the appliance appends incremental data to these backup files.

You can manually back up the reporting database or schedule a backup, but you cannot perform both at the same time. The backup process starts when the indexed data rolls from the hot bucket to the warm bucket. The hot bucket includes all inbound events and actively written data. Indexed data moves to the warm bucket when one of the following conditions is met:

- The size of the reporting data reaches 1 GB
- Data is 90 days old
- The reporting server restarts

You can perform the following reporting data backups:

- Manual backups, as described in Backing Up the Reporting Database Manually below.
- Scheduled backups, as described in Scheduling the Backup of the Reporting Database below.
