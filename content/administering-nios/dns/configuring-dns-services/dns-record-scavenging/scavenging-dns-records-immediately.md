---
title: "Scavenging DNS Records Immediately"
source: "/space/nios90/1393461287"
pageId: "1393461287"
---
To perform record scavenging for the Grid, a DNS view, or a zone according to the predefined rules, use the Scavenge Records command from the Toolbar. This adds a background task that starts immediately or, if another scavenging task is in progress, after its completion.

The scavenging is split into two stages that you can execute separately or together:

- **Mark records as reclaimable**: This stage analyzes the records against the scavenging rules. The records matching the rules are marked as reclaimable, i.e. their "Reclaimable" flag is set to "Yes" in the DNS Resource Records viewer. These records can be reclaimed by using the second stage, unless you disable scavenging for them as described in ** *****Disabling***** *****Scavenging***** *****for***** *****Individual***** *****Records ***in this topic.
- **Reclaim records marked as reclaimable**: This stage automatically removes the records marked as reclaimable in the result of the execution of the first option. Running only the "Reclaim records marked as reclaimable" stage without the analysis stage does not perform a new analysis on the affected records. It only removes the records marked as reclaimable during the previous analysis.

Also, you can reset the reclaimable flag of the records. As an example of when this may be useful: if records have previously been marked as reclaimable and under a revised scavenging policy some records may no longer be reclaimable.

> **warning**
>
> ### Note
> 
> To start immediate scavenging of DNS records, you must first carefully define the scavenging properties, as described in ***Configuring DNS Record Scavenging Properties*** in this topic.

To scavenge DNS records immediately, complete the following:

1. **Grid**: From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Scavenge** **Records** -> **Scavenge** **Grid** **Records**.  
   **DNS** **view**: From the **Data** **Management** tab, select the **DNS** tab, click a DNS view, expand the Toolbar, and then click **Scavenge** **Records** -> **Scavenge** **View** **Records**.  
   **DNS** **zone**: From the **Data** **Management** tab, select the **DNS** tab, click a DNS view, click a zone, expand the Toolbar, and then click **Scavenge** **Records** -> **Scavenge** **Zone** **Records**.
2. Select one of the following:
   
   - **Scavenge** **Records**: Select this to proceed to the record scavenging. Go to the next step.
   - **Reset** **reclaimable** **flag**: Select this to set the "Reclaimable" flag of all affected records to "No".
3. If you chose **Scavenge** ** Records**, select one of the following options or both of them:
   
   - **Mark** ** records ** **are ** **reclaimable**
   - **Reclaim** ** records ** **marked** ** as** ** reclaimable**
     
     Note that static records are never reclaimed automatically even if they are marked as reclaimable. You can only delete static records manually from the DNS Resource Records viewer.
4. Click **Start**.

To check the progress of the current scavenging task, you can use the DNS Record Scavenging widget in the Dashboard. You can also view a scavenging report, as described in [*DNS Scavenged Object Count Trend*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760429/DNS+Dashboards#DNS-Scavenged-Object-Count-Trend).

The scavenging task may be subject to an approval workflow. For information on approval workflows, see [*Configuring Approval Workflows*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280398484).

> **warning**
>
> ### Note
> 
> Keep in mind that the **Enable** **record** **scavenging** property for a lower scavenging scope (e.g. view or zone) can override this property for the upper scope (i.e., Grid or view respectively). For example, if you run scavenging on the Grid with the scavenging option disabled, and there are some views or zones on which scavenging is enabled, this results in the records of the affected views and zones being scavenged. Vice versa, if scavenging is disabled for certain views or zones and you run scavenging on the Grid with the scavenging option enabled, the corresponding views and zones are excluded from scavenging.
