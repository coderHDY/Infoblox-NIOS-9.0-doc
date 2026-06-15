---
title: "Clearing Discovered Data"
source: "/space/nios90/1432818151"
pageId: "1432818151"
---
You can clear previously discovered managed data for selected IPv4 or IPv6 networks. This action is useful, for example, if your network topology has changed since the last discovery and you want to discover new data on the network or cloud platform. You may perform this action whether or not the network is in a managed or unmanaged state.

> **warning**
>
> ### Note
> 
> This action clears only the discovered data that is supported in the **Discovered** **Data** section for an IP address. It does not clear any NIOS objects or information such as tenants, networks, or VMs for a cloud platform. If a discovered IP address has the same IP as an existing NIOS object (such as a fixed address, DNS record, or host record), the appliance removes this IP address.

To clear discovered data:

1. In the *IP* *Map* or *List* panel, select a network, and then click **Clear** -> **Clear** **Discovered** **Data** from the Toolbar.
2. In the *Clear* *Discovered* *Data* dialog box, click **Yes**.
3. Navigate to the **Data Management** tab → **DNS** tab, delete all the associated zones.
4. After you clear all the discovered data, you should navigate to the **Data Management** tab and clear all the associated networks.

You can also clear discovered data on all networks in a network view by performing the following steps:

1. In the *IP* *Map* or *List* panel, select a network, and then click **Clear** -> **Clear** **Discovered** **Data** from the Toolbar.
2. In the *Clear* *Discovered* *Data* dialog box, click **Yes**.
3. Navigate to the **Data Management** tab → **DNS** tab, delete all the associated zones.
4. After you clear all the discovered data, you should navigate to the **Data Management** tab and clear all the associated networks.

> **warning**
>
> ### Note
> 
> When you clear all discovered data in a given network view, all imported discovered data for managed addresses, in all IPv4 and IPv6 networks in the network view, are cleared.

You can also clear discovered data for a specific discovery job, as follows:

1. From the **Cloud** tab -> **VM** tab, select **DiscoveryManager** from the Toolbar.
2. In the *vDiscoveryJobManager* dialog, click the Action icon next to the selected vDiscovery job, and then select **ClearDiscoveredData**.
3. In the *ClearDiscoveredData* dialog box, click **Yes**. The appliance clears all the discovered managed data that is collected by the specified vDiscovery job.
4. Navigate to the **Data Management** tab → **DNS** tab, and then delete all the associated zones.
5. After you clear all the discovered data, you should navigate to the **Data Management** tab and clear all the associated networks.

> **warning**
>
> ### Note
> 
> If you delete an associated zone before you clear the discovered data, the **Clear** option gets disabled from the **Cloud** tab -> **VM** tab. The **Clear** option can be accessed from the **Cloud** tab -> **Tenants** tab. This is applicable when you use WAPI calls to clear all discovery data.
