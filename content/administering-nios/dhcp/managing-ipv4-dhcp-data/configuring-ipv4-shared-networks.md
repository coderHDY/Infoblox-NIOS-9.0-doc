---
title: "Configuring IPv4 Shared Networks"
source: "/space/nios90/280761703"
pageId: "280761703"
---
You can combine individual contiguous networks into a shared network to allow the DHCP server to assign IP addresses from any subnet (that resides on the same network interface) in the shared network.  
  
Before creating a shared network, you must first create the subnets. For example, you must first create the networks` 10.32.1.0` and `10.30.0.0` before designating them to a shared network. For more information, see [*About Shared Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271474/Managing+DHCP+Data#About-Shared-Networks)*.*

# Adding IPv4 Shared Networks

To add a shared network, complete the following:

1. Select the **Data** **Management** tab.
2. If you have more than one network view in the system, select the network view in which you want to add the network.
3. Select the **DHCP** tab -> **Networks** tab.
4. In the **Shared** **Networks** section, select **IPv4** **Shared** **Network** from the Add icon drop-down menu, or expand the **Toolbar**, click the **Add** drop-down list and select **Shared ****Network **-> **IPv4.**
5. In the *Add* *IPv4* *Shared* *Network* wizard, complete the following and click **Next**:
   
   - **Name**: Enter the name of the shared network.
   - **Comment**: Enter information about the shared network.
   - **Disabled**: Select this if you want to enable the shared network at a later time. You can disable and enable existing networks instead of removing them from the database. This feature is especially helpful when you have to move or repair the server for a particular network.
6. Perform the following to add networks:
   
   1. Click the Add icon.
   2. In the *Select* *Network* dialog box, select the networks that you want to include in the shared network. Ensure that the networks are served by the same Grid members to avoid DHCP inconsistencies.
7. Click **Next** to configure or override DHCP options as described in [*Defining IPv4 DHCP Options*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1331332118)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271370/About+IPv4+DHCP+Options#bookmark2266)
8. Click **Next** to enter values for required extensible attributes or add optional extensible attributes for the shared network. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#UsingExtensibleAttributes)
9. Save the configuration or click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)

# Viewing Shared Networks

To view IPv4 and IPv6 shared networks, complete the following:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Shared** **Networks**.
2. Grid Manager displays the following information:
   
   - **Name**: The name of the shared network.
   - **Protocol**: Displays whether the network is an IPv4 or IPv6 network.
   - **Comment**: The information you entered about the shared network.
   - **IPv4** **DHCP** **Utilization**: The percentage of the DHCP utilization of the networks that belong to the shared network. This is the percentage of the total number of available IP addresses from all the networks that belong to the shared network versus the total number of all IP addresses in all of the networks in the shared network.
   - **Site**: The site to which the shared network belongs. This is one of the predefined extensible attributes.

You can select **Disabled** or available extensible attributes for display. You also can view detailed information about a network in a shared network by clicking the network link.   
  
In this panel, you can use filters or the **Go** **to** function to navigate to a specific network. You can also create a quick filter to save frequently used filter criteria. For information, see [*Using Quick Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588).  
  
You can sort the list of networks in ascending or descending order by columns. For information about customizing tables in Grid Manager, see [*About the Grid Manager Interface*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569/About+the+Grid+Manager+Interface#Customizing-Tables).  
  
You can also modify some of the data in the table. Double-click a row of data, and either edit the data in the field or select an item from a drop-down list. Note that some fields are read-only. For more information about this feature, see [*About the Grid Manager Interface*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569)*.*

# Modifying IPv4 Shared Networks

You can modify existing network settings and override the Grid or member DHCP properties. To modify, complete the following:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Shared** **Networks** section ->* shared_network* checkbox, and then click the Edit icon.
2. The *Shared* *Network* editor contains the following tabs from which you can modify data:
   
   - **General**: Modify the fields **Name**, **Comments**, and **Disabled** as described in the section Adding IPv4 Shared Networks above.
   - **Networks**: Displays the networks that are currently assigned to the shared network. You can add or delete a network. To add a network, click the Add icon. In the *Select* *Network* dialog box, select the network you want to add. To delete an existing network, select the *network* checkbox, and then click the Delete icon.
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with a specific network. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#bookmark868)
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see* *[*Managing Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343324639)*.*
3. Optionally, you can click **Toggle Advanced Mode** to display the following tabs from which you can modify advanced data:
   
   - **IPv4 DHCP Options**: Keep the inherited DHCP properties or override them and enter unique settings for the shared network. For information, see [*Defining IPv4 DHCP Options*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271370).
   - **IPv4 DDNS**: Keep the inherited DDNS settings or override them and enter unique settings for the shared network. Note that you must click **Override** and select **Enable DDN Supdates** for the DDNS settings you configure in this tab to take effect. For information, see [*Enabling DDNS for IPv4 and IPv6 DHCP Clients*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554)*.*
   - **IPv4 BOOTP/PXE**: Keep the inherited BOOTP properties or override them and enter unique settings for the shared network. For information, see [*Configuring IPv4 BOOTP and PXE Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663785)*.*
   - **Filters**: You can keep the inherited IPv4 logic filters or override them and add a new IPv4 logic filter. For information, see [*Applying Filters to DHCP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743)[ Objects](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743).  
     Note that Grid Manager displays both the basic and advanced tabs the next time you log in to the GUI.
4. Save the configuration and click **Restart** if it appears at the top of the screen.  
   Or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).

# Deleting IPv4 Shared Networks

Though you can delete the networks in a shared network, a shared network must have at least one network in it. To delete a shared network, complete the following:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Shared** **Networks** section ->* shared_network* checkbox, and then select **Delete** or **Schedule** **Delete** from the drop-down menu.
2. To delete the shared network now, in the *Delete* *Confirmation* dialog box, click **Yes**. To schedule the deletion, see [*Scheduling New IPAM/DHCP Objects and Associated Port Configurations*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/504168883).

The appliance puts the deleted shared network in the Recycle Bin, if enabled.
