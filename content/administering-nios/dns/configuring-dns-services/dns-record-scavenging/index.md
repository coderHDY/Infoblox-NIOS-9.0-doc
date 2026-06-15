---
title: "DNS Record Scavenging"
source: "/space/nios90/280405717"
pageId: "280405717"
---
The DNS scavenging feature allows you to remove unused DNS resource records from zone data to prevent the accumulation of unneeded records. A scavenging operation determines, based on predefined rules, which records are not needed, i.e. are reclaimable, and removes them. For information about scavenging rules, see ***Scavenging Rules*** in this topic.

Scavenging is used for records with the dynamic record source type. Dynamic records are those created automatically, for example, via a dynamic DNS update. Static records, i.e. records that you add manually, can be identified as reclaimable based on scavenging rules but are not subject to scavenging. You can see the source type for each record in the DNS Resource Records viewer in Grid Manager.

You can use the records scavenging feature at the following levels in NIOS:

- Grid: scavenging is performed in all views and zones of the Grid.
- DNS view: scavenging is performed in all zones of the view.
- Authoritative zone (a Grid primary or unassigned zone): scavenging is performed in the specified zone, but not in the subzones.

You can either scavenge DNS records immediately or schedule automatic scavenging. For more information, see** **[*Scavenging DNS Records Immediately*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1393461287) and [*Scheduling Automatic Scavenging*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1393461255) in this topic.

You can organize and monitor records identified as reclaimable by using Smart Folders. For information, see [*Smart Folders*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280757969).

Scavenging events are logged in the NIOS syslog. You can view it, as described in [*Viewing the Syslog*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1380844786) and [*Searching in the Syslog*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1380418575).

The records are removed to the Recycle Bin and can be restored from there. For more information, see  ***Restoring***** *****Reclaimed Records***** ** in this topic.**.**

> **warning**
>
> ### Note
> 
> Membership in the DNS Admin group is required to complete scavenging operations. For details, see *Administrative* *Permissions* *for* *DNS* *Records* *Scavenging* below. See [*Forcing Creation Timestamp Initialization for Unchanged Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280664653) for information on handling the creation timestamp of records that remain unchanged at DDNS updates.
