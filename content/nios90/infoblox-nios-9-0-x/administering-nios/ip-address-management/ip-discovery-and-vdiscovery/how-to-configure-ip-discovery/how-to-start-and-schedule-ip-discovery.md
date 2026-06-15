---
title: "How to Start and Schedule IP Discovery"
source: "/space/nios90/1592983565"
pageId: "1592983565"
---
After you configure a discovery, you can start the discovery process immediately or schedule it for a later date. You can also configure a recurring discovery that repeats on a regular basis. When you start a discovery immediately or schedule for a later date after you configure it, the discovery happens only once and it will not be repeated. To repeat a discovery regularly, you can configure a recurring discovery. A recurring discovery occurs repeatedly based on the schedule you have configured. For more information about how to start a discovery immediately or schedule it for a later date, see  Configuring and Starting an IP discovery  and  Scheduling IP Discovery below.  
You can configure IP discovery tasks independent of each other and each one contains a specific set of networks and discovery settings.  
Note the following guidelines about immediate, regular and recurring IP discovery tasks:

- You cannot run regular and recurring discovery processes concurrently.
- If a recurring discovery is scheduled to start when a discovery is in progress, the recurring discovery will be postponed to the next schedule time. The current recurring discovery will not be performed.
- You can pause and resume all discovery tasks.
- You cannot start a discovery when another one has been paused.
- You cannot use the start command to start a recurring discovery.
- Discovery permissions are applicable to all discovery tasks.
- When you start an IP discovery, only the available IP addresses in the network are discovered. The discovered data through a specific Discovery job can only be modified or deleted by the same Discovery job. When you start a different Discovery job to discover IP addresses in the same network and if some of the information in the network is changed, the newly discovered data and the originally discovered data (now old data) co-exist in the database. When you run the original Discovery job again, the old data is deleted or modified, or the new data is added depending on the information discovered.
