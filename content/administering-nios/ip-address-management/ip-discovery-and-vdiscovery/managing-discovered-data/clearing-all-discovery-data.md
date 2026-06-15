---
title: "Clearing All Discovery Data"
source: "/space/nios90/1432818183"
pageId: "1432818183"
---
You can clear all the discovered data, whether managed or unmanaged, for a specific vDiscovery job. This action removes only the discovered data, not the associated NIOS objects, collected by the specified vDiscovery job only. It does not remove any discovered data collected through Network Insight or other non vDiscovery tasks.

> **warning**
>
> ### Note
> 
> If the same data is collected by the specified vDiscovery job and another non vDiscovery job such as Network Insight or IP discovery, the discovered data remains intact and will not be removed.

To clear all discovered data for a specific vDiscovery job, perform the following:

1. From the **Cloud** tab -> **VM** tab, select **Discovery Manager** from the Toolbar.
2. In the *vDiscoveryJobManager* dialog, click the Action icon next to the selected vDiscovery job, and then select **Clear All Discovery Data**.
3. In the *ClearDiscoveredData* dialog box, click **Yes**. The appliance clears all the discovered managed and unmanaged data that is discovered by the specified vDiscovery job.

> **warning**
>
> ### Note
> 
> If you delete all the networks from the **Data Management** tab before you clear all the discovered data, the data gets cleared only from the NIOS user interface and not from the NIOS database which results in stale VM to be fetched when WAPI calls are made.
