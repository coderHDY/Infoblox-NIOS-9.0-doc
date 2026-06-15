---
title: "Defining Seed Routers for Probe Members"
source: "/space/nios90/1343161733"
pageId: "1343161733"
---
Seed routers can be defined only on Probe appliances. You can define seed routers that NIOS uses in quickly performing network discovery. The definition of seed routers is highly recommended for IPv4 networks and is required for IPv6 networks. For the discovery of any IPv6 networks, you must use seed router values that comprised of at least one well-connected IPv6 router, preferably with routes to all other networks to be managed. In some cases, seed routers may not have the full routing tables or be unable to provide full information for some reason. The general rule of thumb is that more seed routers are better, but the connectivity of seed router(s) also helps determine how many seed routers you need. Avoid having more seed entries than necessary.

You must associate each seed router with a network view so the appliance can properly discover virtual networks when using multiple seed routers.

> **warning**
>
> ### Note
> 
> All NIOS Probe members automatically use their default gateway as a seed router. These gateways are automatically displayed in the table. For effective use of seed routers, you must also provide SNMP credentials to NIOS to allow it to pull the key routing and connectivity information, including the IPv6 routing table and the local Neighbor Discovery Cache, from the device. If you do not define a seed router, it is recommended that you enable discovery for a network or DHCP range.

You can check **Discovery** **Status** to see whether a seed router is successfully being reached and whether the seed is providing information. By reviewing discovery status for each seed router, you can determine whether Network Insight should be able to discover the network successfully, or if there are possible configuration errors preventing network discovery, without having to wait to see what Network Insight finds. For seed routers, **Reached** **Status** and **Overall** **Status** should both read as **Passed**.

To add, view, or delete seed routers for a Probe, complete the following:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, and click **Discovery**.
2. Select the checkbox for any Probe appliance on the Discovery page and click **Edit** > **Member** **Discovery** **Properties** from the **Toolbar**.
3. In the **Member Discovery Properties Editor** dialog box, click **Seed**.
4. To add a seed router, do the following:
   
   1. Click the **Add** icon. The Grid Manager adds a row to the table.
   2. In the new row, do the following:
      
      - Click the **Router** field and then enter the IP address for the IPv4 or IPv6 seed router. Note that you can assign a seed IP address to different network views if your deployment has overlapping IP addresses.
      - Click the **Network View** field and then choose the network view you want to assign to the interface. A newly added seed IP does not have any associated network view by default.
      - Click the **Comment** field and then enter information about the seed router.

You can delete a seed router by selecting it and then click the Delete icon. Note that you cannot delete any seed router that is a default gateway.

For more information, see [IPv6 Seed Router Usage](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343096403).
