---
title: "Viewing Networks"
source: "/space/nios90/1432715867"
pageId: "1432715867"
---
You can view IPv4 networks from the **IPAM** tab -> Net Map and List panels. The Net Map panel provides a graphical view of your networks and the List panel displays the networks in table format. For more information about *IPv4 Network Map* and *IPAM* Home see, [*Managing IPv4 Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666698)*.*

You can also view a list of IPv4 and IPv6 networks in the **DHCP** tab -> **Networks** tab -> **Networks** panel. This panel displays all IPv4 and IPv6 networks.

In any of these panels, you can use filters or the **Go** **to** function to navigate to a specific network. You can also create a quick filter to save frequently used filter criteria. For information, see [*Using Quick Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588). You can add, delete, or edit a network. You can also monitor the DHCP utilization of a selected network.

When viewing networks, you can choose to view them in one of the following views:

- Click **Toggle** **Hierarchical** **View** to view networks hierarchically in a parent-child structure (networks in a network container). You can view detailed information about the networks by clicking the network link and drilling down to the lowest hierarchical level, and then opening a network. To go back to a previous hierarchical view, click the link of the corresponding level in the breadcrumb. The hierarchical view is the default view.
- Click **Toggle Flat View** to display a flat list of all networks and network containers. The parent and child networks are listed separately in the flat view.

Depending on where you view your networks, Grid Manager displays some of the following information by default. You can also select specific information for display.

- **Network**: The network address.  
  The network is displayed in one of the following colors:
  
  - **Yellow**: The network is unmanaged.
  - **Blue**: The selected network.
  - **Gray**: The network is currently not available as a NIOS network object.
- **Comment**: The information you entered about the network.
- **IPAM Utilization**: This information is available for IPv4 networks only. It displays the percentage based on the IP addresses in use divided by the total addresses in the network. For example, in a /24 network, if there are 25 static IP addresses defined and a DHCP range that includes 100 addresses, the total number of IP addresses in use is 125. Of the possible 256 addresses in the network, the IPAM utilization is about 50% for this network. The appliance updates the IPAM utilization data immediately for a network container, but for a network, it is updated every 15 minutes.  
  The IPAM utilization data is displayed in one of the following colors:
  
  - **Red**: The IPAM utilization percentage is above the configured Trigger value.
  - **Blue**: The IPAM utilization percentage is below the configured Trigger value.
- **Site**: The site to which the network belongs. This is one of the predefined extensible attributes.
- **Protocol**: Displays whether the network is an IPv4 or IPv6 network.
- **Disabled**: Indicates if the network is disabled. You can double-click a row and select the checkbox in this column to disable the network. Grid Manager displays a warning message when you select the checkbox. Click **Yes **to confirm or **No **to cancel. Note that disabling an IPv4 network may take a longer time to complete depending on the size of the data.
- **Leaf Network**: Indicates whether the network is a leaf network or not. A leaf network is a network that does not contain other networks.
- **IPv4 DHCP Utilization**: This information is available for IPv4 networks only. It displays the percentage of the total DHCP usage of theIPv4 network. This is the percentage of the total number of DHCP hosts, fixed addresses, reservations, and active leases in the network divided by the total number of IP addresses (excluding IP addresses in the exclusion range) and all DHCP objects in the network. Note that only enabled addresses are included in the calculation. It does not include abandoned addresses or leases. The appliance updates the utilization data approximately every 15 minutes. The utilization data is displayed in one of the following colors:
  
  - **Red**: The DHCP resources are 100% utilized.
  - **Yellow**: The DHCP utilization percentage is over the effective high-water mark threshold.
  - **Blue**: The DHCP utilization percentage is below the effective low-water mark threshold.
  - **Black**: The DHCP utilization percentage is at any number other than 100%, or it is not above and below any threshold.

You see the following when RIR is enabled (for more information, see [*RIR Registration Updates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267963)):

- **RIR** **Organization**: This appears only if support for RIR updates is enabled. This displays the name of the RIR organization to which the network is assigned.
- **RIR Organization ID**: This appears only if support for RIR updates is enabled. This displays the ID of the RIR organization to which the network is assigned.
- **RIR Registration Status**: This appears only if support for RIR update is enabled. This field displays the RIR registration status. This can be **Registered** or **Not Registered**. **Registered** indicates that the network has a corresponding entry in the RIPE database.
- **Last Registration Updated**: Displays the timestamp when the last registration was updated. The displayed timestamp reflects the timestamp used on the Grid Master.
- **Status of Last Registration Update**: Displays the registration status and communication method of the last registration update. The status can be Pending, Sent, Succeeded, or Failed. Each time you send a registration update to create, modify, or delete a network container or network, the updated status will be displayed here. If you have selected not to send registration updates, the previous status is retained.

You see the following only with Network Insight (For information, see [*Infoblox Network Insight*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267919)):

- **Discovery** **Enabled**: Indicates whether discovery is allowed on the network container or the network.
- **Managed**: Indicates whether the network is set to Managed status under NIOS.
- **First Discovered**: The date and timestamp of the first occasion that NIOS discovered the network.
- **Last Discovered**: The date and timestamp of the last occasion that NIOS performed discovery on the network.

You see the following when the Cloud Network Automation license is installed on the Grid Master (For information, see [*Deploying Cloud Network Automation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758966)):

- **Cloud Usage**: This field indicates whether this object is associated with any specific cloud extensible attributes or within the scope of delegation. It can be one of the following:
  
  - **Cloud from adapter**: Indicates that this object has been created by a cloud adapter and it may or may not be within a scope of delegation at the moment.
  - **Cloud from delegation**: Indicates that this object is within the scope of delegation or the object itself defines a scope of authority delegation, and it is not created by a cloud adapter.
  - **Used by cloud**: Indicates that this network or network container is associated with the extensible attribute **Is External** or **Is Shared** and the value is set to True, which implies the network is a private or shared network managed by the CMP, and it is not **Cloud from adapter** or **Cloud from delegation**.
  - **Non-cloud**: The object is a regular NIOS object and is not within the scope of any authority delegation nor is it associated with any of these extensible attributes: **Cloud API Owned**, **Is External**, or **Is Shared**. NIOS admin users can modify this object based on their permissions.
- **Owned By**: A cloud object can be owned by the Grid Master or the cloud adapter. When the object is created by the Cloud Platform member, this shows **Grid**. If the object is created by the cloud adapter, this shows **Adapter**.
- **Delegated** **To**: This tells you whether a cloud object has been delegated to a Cloud Platform Appliance or not. If the cloud object has a parent object and the parent has been delegated, this field shows the parent delegation and you cannot modify the field.
- Extensible attributes (**Building**, **Country**, **Region**, **State**, and **VLAN**): You can select the extensible attributes such as Building, Country, Region, State, and VLAN for display. When you enable other features such as RIR, Network Insight, and Cloud Network Automation, you can select additional attributes for display.

You can sort the list of networks in ascending or descending order by certain columns. For information about customizing tables in Grid Manager, see [*Customizing Tables*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569/About+the+Grid+Manager+Interface#Customizing-Tables).

You can also modify some of the data in the table. Double-click a row of data, and either edit the data in the field or select an item from a drop-down list. Note that some fields are read-only. For more information about this feature, see [*Modifying Data in Tables*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569/About+the+Grid+Manager+Interface#%5BinlineExtension%5DModifying-Data-in-Tables). You can edit values of inheritable extensible attributes by double-clicking on the respective row. If an extensible attribute has an inherited value, then the cell is highlighted in blue when you perform an inline editing. The *Descendant* *Actions* dialog box is displayed when you click **Save**. For information, see [*Managing Inheritable Extensible Attributes at the Parent and Descendant Level*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1340802820). If you delete the value of an inheritable extensible attribute at the parent level, you can choose to preserve the descendant value or remove it. For information, see [*Deleting Inheritable Extensible Attributes Associated with Parent Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1340475322).
