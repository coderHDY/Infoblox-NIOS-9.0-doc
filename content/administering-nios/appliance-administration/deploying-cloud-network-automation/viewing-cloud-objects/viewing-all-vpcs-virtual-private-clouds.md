---
title: "Viewing All VPCs (Virtual Private Clouds)"
source: "/space/nios90/1356824640"
pageId: "1356824640"
---
The **VPCs** tab displays all AWS VPCs . You can also manage selected VPCs, primarily for changing permissions, defining or changing extensible attributes, and changing the delegation settings for a VPC to a different NIOS Cloud member. An Amazon VPC is analogous to a network container in NIOS, and is hence represented as a network container with a special icon.  
To view all VPCs:

1. From the **Cloud** tab, click the **VPCs** tab.
2. Grid Manager displays the following information for each VPC:
   
   - **Actions**: Click the action icon
     
     next to a selected tenant and choose from the following:
     
     - **Edit**: Modify certain general properties.
     - **Extensible** **Attributes**: Add or modify extensible attributes.
     - **Permissions**: Modify the administrative permissions.
   - **Mgmt** **Platform**: Displays the CMP that manages the VPC. When it displays **Amazon**, it indicates a successful validation of the Amazon account from NIOS to AWS.
   - **VPC** **Name**: The AWS virtual private cloud name. The name is automatically defined by AWS. Each VPC name is a link that opens the Networks tab for the selected VPC. This page lists the individual private networks that exist within the VPC.
   - **Networks**: The number of individual private networks contained in the VPC.
   - **VMs**: The number of Amazon EC2 virtual machine instances currently discovered in the VPC. (You can run a vDiscovery in any VPC.) For information about how to start a vDiscovery, see [*Configuring vDiscovery Jobs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/704348239)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/704348239)
   - **Tenants**: The number of cloud tenants associated with each VPC.
   - **Cloud** **Usage**: indicates whether the VPC is associated with any specific cloud extensible attributes or within a scope of delegation. It can be one of the following:
     
     - **Cloud** **from** **adapter**: Indicates that this object has been created by a cloud adapter and it may or may not be within a scope of delegation at the moment.
     - **Cloud** **from** **delegation**: Indicates that this object is within the scope of delegation or the object itself defines a scope of authority delegation, and it is not created by a cloud adapter.
     - **Used** **by** **cloud**: Indicates that this network or network container is associated with the extensible attribute Is External or Is Shared and the value is set to True, which implies the network is a private or shared network managed by the CMP, and it is not **Cloud** **from** **adapter** or **Cloud** **from** **delegation**.
     - **Non-cloud**: The object is a regular NIOS object and is not within the scope of any authority delegation nor is it associated with any of these extensible attributes: **Cloud** **API** **Owned**, **Is** **External** or **Is** **Shared**. NIOS admin users can modify this object based on their permissions.
   - **Owned** **By**: A cloud object can be owned by the Grid Master or the cloud adapter. When the object is created by the Grid Master, this shows Grid. If the object is created by the cloud adapter, this shows Cloud Adapter.
   - **Delegated** **to**: The NIOS Cloud appliance to which management of the AWS VPC is delegated. This field tells you whether or not a cloud object (in this case, a virtual private cloud) has been delegated to a Cloud Platform Appliance.
   - **Network**: The network IP. The network listed in this column for the VPC is also viewable from the main **Data** **Management** –> **IPAM** tab.
   - **Site**: Extensible Attribute listing the site information for the VPC.
   - **Availability** **Zone**: the Amazon availability zone in which the VPC resides.

You can also select other cloud extensible attributes for display by clicking the down arrow next to any column header and selecting **Columns** -> **Edit** **Columns**.
