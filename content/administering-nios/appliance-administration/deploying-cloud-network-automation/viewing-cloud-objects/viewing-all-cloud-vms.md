---
title: "Viewing All Cloud VMs"
source: "/space/nios90/1356824724"
pageId: "1356824724"
---
The **VMs** tab lists all cloud VMs by IP addresses. A VM object is an abstract object representing a virtual machine that is running on the CMP. A VM belongs to one and only one tenant. However, the same VM may have more than one IP addresses (including unmanaged IP addresses) associated with it. Each VM may have an IP address that is part of an overlapping private IP address space and one or more IP addresses in the shared or external networks.  
A VM object in NIOS can be a collection of supported object types that have the same value for the extensible attribute **VM** **ID**. Only the following NIOS object types are considered as existing VMs when they are tagged with the **VM** **ID** attribute: Host Record, A Record, AAAA Record, and PTR Record, and Fixed Address. A VM object may be defined by objects from different network views, and it can have more than one IP addresses associated with it.

**Note:** Since a VM can be defined by objects from different network views, the same IP address may appear multiple times if it has been defined in more than one network view. A VM object is a read-only abstract object, therefore you cannot create, modify, or delete it.

After a vDiscovery job is completed, the appliance displays discovered data for each VM in this tab. Available data is displayed based on the vDiscovery configuration and your CMP. For example, if your CMP is AWS, discovered data can include the VPC to which the VM belongs. You can click a VM name and drill down to the **Networks** and **IP** **Addresses** sub tabs to view networks and IP addresses associated with the selected VM. For more information about vDiscovery, see [*Configuring vDiscovery Jobs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/704348239)*.*  
Note that in addition to managing discovered data through Grid Manager, you can clear any managed or unmanaged discovered data, or clear all discovery data related to a vDiscovery job through a cloud API request. You can use this feature to properly identify VMs that you spin up or de-provision through a cloud adapter. For example, when you use Infoblox IPAM Plug-In for VMware as the cloud adapter to de-provision a VM, you can send a cloud API call to remove the discovered data for this VM so you can avoid IP address conflict with IP addresses manually allocated by the VMware vCenter. For information about cloud API requests, see [*About Cloud API Requests*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667760).  
In the **VMs** tab, discovered VMs are highlighted in different background colors, as follows:

- **Yellow**: Unmanaged VMs that do not have associated NIOS objects.
- **White**: Discovered VMs that have at least one associated NIOS object and there is no conflicting information between the discovered data and the NIOS data.
- **Red**: Discovered VMs that have at least one associated NIOS object and there is conflicting information between the discovered data and the NIOS data. Depending on the nature of the conflict, you can resolve them as described in [*Resolving Conflicting Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1432719329).You may also be able to convert or clear unmanaged data, as described in [*Managing Unmanaged Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1432719297)*.*

To view all VM objects in NIOS:

1. From the **Cloud** tab, click the **VMs** tab.
2. Grid Manager displays the following information for all cloud VM by IP address:
   
   - **Actions**: Click the action icon
     
     next to a selected tenant and select the action you want to perform.
   - **Mgmt** **Platform**: Displays the CMP to which this tenant belongs. This can be Amazon, OpenStack, VMware, Azure, or Google Cloud.
   - **VM** **Name**: The name of the VM.
   - **VM** **ID**: The unique tenant ID to which this VM belongs.
   - **Networks**: The number of networks that belong to this VM.
   - **IP** **Address**: The IP address of the VM.
   - **VM** **VPC**: The VPC to which this VM belongs.
   - **VM** **Tenant**: The tenant to which this VM belongs.
   - **Port** **ID**: The port ID for the VM.
   - **Network** **View**: The network view to which this VM belongs.
   - **Active** **Users**: The number of active users on the selected network.
   - **FQDN**: The FQDN of the VM.
   - **VM** **Last** **Updated**: The timestamp when the VM data was last updated.
   - **First** **Discovered**: The timestamp when the VM was first discovered.
   - **Last** **Discovered**: The timestamp when the VM was last discovered.
   - **Task Name**: The name of the task that collected the discovered data. It is usually the ID or task name that collected the discovered data.
   - **Comment**: Information about the VM.

Depending on you CMP, you can also select additional discovered fields to be displayed in the **VMs** tab by clicking the down arrow next to any column header and selecting **Columns** -> **Edit** **Columns**. Note that some of these fields contain discovered data that is only relevant to your CMP.
