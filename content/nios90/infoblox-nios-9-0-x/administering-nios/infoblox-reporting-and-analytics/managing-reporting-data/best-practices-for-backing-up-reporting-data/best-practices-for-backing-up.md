---
title: "Best Practices for Backing Up"
source: "/space/nios90/1356857526"
pageId: "1356857526"
---
- The first backup of the reporting data is a full backup. Subsequent backups irrespective of scheduled or manual are incremental backups. Infoblox recommends that you do not change the backup directory for each backup.
- Reporting data backups are incremental. Any modification or deletion of the backed up data can create an impact when the data is restored.
- If you upgrade or replace the Reporting server, Infoblox recommends that you back up the reporting data and the Infoblox Reporting and Analytics App.
- Once the reporting data is restored on a Grid, subsequent backups include only the new data.
