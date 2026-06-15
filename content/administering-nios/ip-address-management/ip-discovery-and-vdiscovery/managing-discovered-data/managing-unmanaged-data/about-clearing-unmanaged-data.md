---
title: "About Clearing Unmanaged Data"
source: "/space/nios90/1432719402"
pageId: "1432719402"
---
Unmanaged objects are objects that are not configured for DNS or DHCP and do not have any corresponding NIOS objects such as fixed addresses, DNS records, or host records. You can clear unmanaged data if you do not want it to appear in the discovered data. Any unmanaged data that was discovered in a previous discovery can be removed. When you clear an unmanaged IP address, the status of the IP address changes to **Unused**.  
Note that for cloud deployments, you can remove an unmanaged VM only when all the VM related properties are removed first. When the VM is removed, the tenant pointing to this VM will also be removed automatically. For information about cloud deployments, see [*Deploying Cloud Network Automation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758966).  
To clear unmanaged data, complete the following steps:

### Method 1

1. **For IP addresses**: From the **Data Management** tab -> **IPAM** tab, select an unmanaged IP address in the *IPMap* or *List* panel.  
   **For networks**: From the **Data Management** tab -> **IPAM** tab -> *IPMap* or *List* panel, select a network in which you want to clear all unmanaged addresses.  
   **For Cloud tenants**: From the **Cloud** tab -> **Tenants** tab, select a tenant for which you want to clear unmanaged data.  
   **For Cloud VMs**: From the **Cloud** tab -> **VMs** tab, select a VM for which you want to clear unmanaged data.
2. Click **Clear** -> **Clear Unmanaged Data** or **Clear All Unmanaged Data** from the Toolbar.
3. In the *ClearUnmanagedData* confirmation dialog box, click **Yes**. The appliance clears data that has no corresponding NIOS objects such as fixed addresses, DNS records, or host records.

### Method 2

1. From the **Cloud** tab -> **VM** tab, select **Discovery** **Manager** from the Toolbar.
2. In the *vDiscoveryJobManager* dialog, click the Action icon next to the selected vDiscovery job, and then select **Clear Unmanaged Data**.
3. In the *ClearUnmanagedData* confirmation dialog box, click **Yes**. The appliance clears data that has no corresponding NIOS objects such as fixed addresses, DNS records, or host records.

> **warning**
>
> ### Note
> 
> After you clear all the unmanaged data, you should navigate to the **Data Management** tab and clear all the associated networks. When you clear unmanaged addresses in a given network view, all unmanaged IPv4 and IPv6 addresses of all networks in the network view are cleared. When you select an entire network or a specific network in the *IP* *Map* or *List* panel, all the unmanaged addresses in the network are cleared. After you clear the unmanaged data, the status of the IP addresses changes to **Unused**.
