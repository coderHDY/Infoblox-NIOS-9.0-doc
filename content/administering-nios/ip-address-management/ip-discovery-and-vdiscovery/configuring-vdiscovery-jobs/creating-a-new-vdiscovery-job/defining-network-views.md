---
title: "Defining Network Views"
source: "/space/nios90/1468335066"
pageId: "1468335066"
---
To track overlapping networks and IP address ranges so that you can discover specific networks and IP addresses, you can associate one or more network views with a Grid member or Cloud Platform Appliance that is selected to run the vDiscovery. You can then define a specific network view to which discovered data for public and private IP addresses belongs if the network view is not automatically detected. If no network view is specified, the default network view is used.  
For Network Insight, when you discover networks using multiple discovery interfaces, you must configure network views so you can associate each discovery interface with an available network view. Note that on the same discovering member, each discovery interface must have a unique network view association.

1. For a new vDiscovery job: From the **Data** **Management** tab, select the **IPAM** tab, then select **vDiscovery** -> **New** from the Toolbar; or from the **Cloud** tab, select **vDiscovery** -> **New** from the Toolbar.  
   or  
   To modify an existing job: From the **Data** **Management** tab, select the **IPAM** tab and click **vDiscovery** -> **Discovery** **Manager** from the Toolbar, or from the **Cloud** tab, select **vDiscovery** -> **Discovery** **Manager** from the Toolbar. In the **vDiscovery** **Job** **Manager** editor, click the Action icon.  
   *Action icon*
   
   
   
   next to a selected job and select **Edit** from the menu.
2. In *Step 3 of 5* of the v*Discovery* *Job* wizard, or on the **Network** **View** tab of the *vDiscovery* *Job* *Properties* editor, complete the following:
   
   - Under the **For** **Public** **IP** **Addresses** section, select one of the following options the appliance uses if the network view is not automatically detected:
     
     - **This** **Network** **View**: From the drop-down list, specify a network view to which discovered data for public IP addresses belongs. The default is the default network view. You cannot create a new network view for this option.
     - **The** **tenant's** **network** **view** **(if** **it** **does** **not** **exist,** **create** **a** **new** **one)**: Select this only if at least one cloud license is installed in the Grid. When you select this, discovered data for public IP addresses belongs to the tenant's network view. If the network view does not exist, the appliance creates it (only if a cloud license is installed in the Grid). The appliance uses tenant information of a discovered public IP address to create a new NIOS network view for all discovered objects (primarily subnets) for that tenant. For example, AWS tenants by default are associated with the user account's 12-digit account number (such as 2233441247523), which is the identifier for all objects that are created by that account in AWS. That tenant value becomes the identifier for the new network view as its objects are discovered by NIOS.
   - Under the **For** **Private** **IP** **Addresses** section, select one of the following options the appliance uses if the network view is not automatically detected:
     
     - **This** **Network** **View**: From the drop-down list, select a network view to specify a network view to which discovered data for private IP addresses belongs. The default is the default network view. You cannot create a new network view for this option.
     - **The** **tenant's** **network** **view** **(if** **it** **does** **not** **exist,** **create** **a** **new** **one)**: Select this only if at least one Cloud Platform Appliance is active or a cloud license is installed in the Grid. When you select this, discovered data for private IP addresses belongs to the tenant's network view. If the network view does not exist, the appliance creates it (only if a cloud license is installed in the Grid). The appliance uses tenant information of a discovered private IP address to create a new NIOS network view for all discovered objects (primarily subnets) for that tenant. For example, AWS tenants by default are associated with the user account's 12-digit account number (such as 2233441247523), which is the identifier for all objects that are created by that account in AWS. That tenant value becomes the identifier for the new network view as its objects are discovered by NIOS.
3. Configure filtering options for vDiscovery as described in the *Defining Filtering Options* section.
