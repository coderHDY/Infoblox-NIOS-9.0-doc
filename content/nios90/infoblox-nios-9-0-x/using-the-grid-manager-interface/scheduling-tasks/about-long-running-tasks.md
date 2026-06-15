---
title: "About Long Running Tasks"
source: "/space/nios90/280401557"
pageId: "280401557"
---
A long running task is a task that requires more than 30 seconds to complete and involves a large amount of data.  
When Grid Manager performs a long running task, it displays the *Long* *Running* *Task* dialog box that indicates whether you can run the task in the background. You can navigate to another tab or perform other functions only if the task can be run in the background. For information, see Running Tasks in the Background below.  
Grid Manager disconnects if a task takes more than five hours to perform. Though you can log back in to Grid Manager while the appliance continues to perform the task, Grid Manager does not display the progress of the task.

> **warning**
>
> ### Note
> 
> You cannot stop a long running task once you start it.

The appliance supports the following long running tasks:

- Restoring the database
- Backing up the database
- Backing up licenses
- Signing DNS zones
- Unsigning DNS zones
- Exporting DS records and trust anchors
- Deleting all objects in a table or dataset
- Modifying multiple extensible attributes
- Viewing DNS and DHCP configuration properties
- Migrating bloxTools data
- IPAM tasks on the Tasks Dashboard
- Downloading the following:
  
  - Audit logs
  - Syslog files
  - Support bundles
  - SNMP MIB files
  - NTP keys
  - HTTPS certificates
  - Traffic capture

# Running Tasks in the Background

Grid Manager allows certain long running tasks to run in the background. You can navigate to other tabs and perform other functions when Grid Manager performs tasks in the background. However, when you make changes to objects that are currently affected by a long running background task, Grid Manger does not save the changes until after the long running task is completed. Grid Manager can perform up to 10 background tasks at a time.  
You can run the following tasks in the background:

- Signing DNS zones
- Unsigning DNS zones
- Modifying multiple extensible attributes
- Deleting all objects in a table or dataset
- Migrating bloxTools data

To run a task in the background:

1. Perform the task following the instructions described in this guide.
2. In the *Long* *Running* *Task* dialog box, click **Run** **in** **Background**.

You can view the progress of the task by clicking the progress bar at the top of the interface.

# Monitoring Long Running Tasks

When you have one or more tasks running in the background, Grid Manager displays a progress bar next to the Global Search icon at the top of the interface. You can click the progress bar to view detailed information about the tasks in the *Background* */* *Long* *Running* *Task* viewer. In this viewer, Grid Manager displays a progress bar for each task that is currently running in the background. When all background tasks are completed, the progress bar at the top of the interface disappears. Grid Manager displays a message at the top of the interface when the task is completed successfully or if the task fails.  
For other tasks that you cannot run in the background, the *Long* *Running* *Task* dialog box remains open until the task is completed. You cannot navigate to other tabs or perform other functions when the long running task is in progress. Grid Manager closes the dialog box when the task is completed. It also displays a message at the top of the interface when the task is completed successfully or if the task fails.
