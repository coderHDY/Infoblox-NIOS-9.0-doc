---
title: "Site 2– Single Grid Member"
source: "/space/nios90/1340803534"
pageId: "1340803534"
---
Make a console connection to the appliance that you want to make Node 1 in the HA pair at Site 1 and use the set network command to configure its basic network and Grid settings. Use the following data:

- **IP Address**: **10.2.1.10**
- **Netmask**: **255.255.255.0**
- **Gateway**: **10.2.1.1**
- **Grid Master VIP**: **10.0.1.10**
- **Grid name**: **corpxyz**
- **Grid shared secret**: **Mg1kW17d**

The Infoblox application restarts. After restarting, the appliance contacts the Grid Master and joins the Grid.  
To check the status of all the Grid members, log in to the Grid Master at 10.0.1.10, and from the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab, select **10.0.1.10** and click the Detailed Status icon. Check that the status indicators are all green in the Detailed Status panel. As an appliance joins a Grid, it passes through the following phases: Offline, Connecting (Downloading Release from Master), Synchronizing, and Running.

> **warning**
>
> **Note**
> 
> Depending on the network connection speed and the amount of data that the master needs to synchronize with the member, the process of joining a Grid can take from several seconds to several minutes to complete.

The Grid setup is complete.
