---
title: "Viewing All Cloud Networks"
source: "/space/nios90/1356824681"
pageId: "1356824681"
---
The **Networks** tab displays all IPv4 and IPv6 networks and network containers from the CMP as well as all delegated networks. You can select a specific network or network container and modify its properties in the *Cloud* *IPv4* *Network* or *Cloud* *IPv6* *Network* editor.  
To view all cloud networks and network containers:

1. From the **Cloud** tab, click the **Networks** tab.
2. Grid Manager displays the following information for each network and network container:
   
   - **Actions**: Click the action icon
     
     next to a selected tenant and choose from the following:
     
     - **Go** **to** **Tenant**: Go to the **Tenant** tab to view associated tenant.
     - **Go To** **DHCP** **Network** **Details**: Go to the **DHCP** -&gt; **Networks** tab to view associated details.
     - **Go To** **IPAM** **Network** **Details**: Go to the **IPAM** -&gt; **Networks** tab to view associated details.
     - **Go To** **Network** **View** **Details**: Go to the **IPAM** -&gt; **Network** **View** tab to view associated details.
     - **Edit**: Modify certain general properties.
     - **Extensible** **Attributes**: Add or modify extensible attributes.
     - **Permissions**: Modify the administrative permissions.
   - **Mgmt** **Platform**: Displays the CMP that manages the network. When it displays Amazon, it indicates a successful validation of the Amazon account from NIOS to AWS.
   - **Network**: The IP address and netmask of the network.
   - **Tenant**: The associated tenant for the network.
   - **VPC** **Name**: The name of the associated VPC in AWS.
   - **Cloud** **Usage**: This field indicates whether this object is associated with any specific cloud extensible attributes or within a scope of delegation. It can be one of the following:
     
     - **Cloud** **from** **adapter**: Indicates that this object has been created by a cloud adapter and it may or may not be within a scope of delegation at the moment.
     - **Cloud** **from** **delegation**: Indicates that this object is within the scope of delegation or the object itself defines a scope of authority delegation, and it is not created by a cloud adapter.
     - **Used** **by** **cloud**: Indicates that this network or network container is associated with the extensible attribute **Is** **External** or **Is** **Shared** and the value is set to True, which implies the network is a private or shared network managed by the CMP, and it is not **Cloud** **from** **adapter** or **Cloud** **from** **delegation**.
     - **Non-cloud**: The object is a regular NIOS object and is not within the scope of any authority delegation nor is it associated with any of these extensible attributes: **Cloud** **API** **Owned,** **Is** **External** or **Is** **Shared**. NIOS admin users can modify this object based on their permissions.
   - **Owned** **By**: A cloud object can be owned by the Grid Master or the cloud adapter. When the object is created by the Grid Master, this shows **Grid**. If the object is created by the cloud adapter, this shows **Adapter**.
   - **Delegated To**: This tells you whether a cloud object has been delegated to a Cloud Platform Appliance or not. If the cloud object has a parent object and the parent has been delegated, this field shows the parent delegation and you cannot modify the field.
   - **Network** **View**: The network view to which this network belongs.
   - **Comment**: Information about the cloud network.
   - **Cloud Shared**: This column is tagged as **Yes** if this is a network in shared VPC in which a Google Cloud vDiscovery job discovered VMs.
   - **Site**: The value entered for this predefined extensible attribute.

You can also select other cloud extensible attributes for display by clicking the down arrow next to any column header and selecting **Columns** -&gt; **Edit** **Columns**.
