---
title: "Managing IPv6  Networks"
source: "/space/nios90/319292098"
pageId: "319292098"
---
You can create an IPv6 network from scratch or create a network template and then use that template to create one or more networks. Using a network template facilitates creating multiple IPv6 networks with similar properties. You can also create an IPv6 network from the Tasks Dashboard. For information about the Tasks Dashboard, see [*Tasks Dashboard*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280759015).  
An IPv6 network inherits its DHCP options & DDNS settings from its shared network, if it is part of a shared network, or from the member to which it is assigned.  
If you have enabled support for RIR (Regional Internet Registry) updates and are adding an RIR IPv6 network container or network to NIOS, Grid Manager displays an RIR section in the *Add* *IPv6* *Network* wizard. You must enter RIR related information in this section in order for NIOS to associate the newly added network with an RIR organization. For more information about RIR address allocation and updates, see [*RIR Registration Updates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267963).

# Adding IPv6 Networks

To add an IPv6 network:

1. Select the **Data** **Management** tab.
2. If you have more than one network view in the system, select the network view in which you want to add the network.
3. Select the **DHCP** tab -> **Networks** tab.
4. In the **Networks** section, expand the **Toolbar** and click the **Add** drop-down list and select **Network**-> **IPv6 **or click the Add icon drop-down list and select **IPv6 Network**.
5. In the *Add* *IPv6* *Network* wizard, select one of the following and click **Next**:
   
   - **Add** **IPv6** **Network:** Click this to add an IPv6 network from scratch.
   - **Add** **IPv6** **Network** **using** **Template:** To use a template, click this, and then click **Select** **Template** and select an IPv6 network template. For information about network templates, see [*About IPv6 Network Templates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271022). When you use a template to create a network, the configurations of the template apply to the new network. The appliance populates the template properties in the wizard when you click **Next**. You can then edit the pre-populated properties. If the template specified a fixed netmask, you cannot edit the netmask.
   - If you are adding or creating a network or a network container on an unmanaged network, you must first convert the unmanaged network into a managed network before creating the new network.
6. Complete the following and click **Next**:
   
   - **Regional Internet Registry**: This section appears only when support for RIR updates is enabled. For information about RIR, see [*RIR Registration Updates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267963). Complete the following to create an RIR IPv6 network container or network:
     
     - **Internet Registry**: Select the RIR from the drop-down list. The default is **RIPE**. When you select **None**, the network is not associated with an RIR organization.
     - **Organization ID**: Click **Select Organization** and select an organization from the *RIR Organization Selector* dialog box.
     - **Registration Status**: The default is **Not Registered**. When adding an RIR allocated network, you can change this to **Registered** and select the **Do not update registrations** checkbox below. Note that when you select **API** as the communication method, the registration status will be updated automatically after the registration update is completed. However, when you select **Email** as the communication method, the registration status will not be automatically updated. If you are creating a new network and the registration update is completed successfully, the status will be changed to **Registered**. If the update fails, the status will be changed to **Not Registered**. The updated status and timestamp are displayed in the **Status of last update** field in the *IPv6 Network Container* or *IPv6 Network* editor.
     - **Registration Action**: Select the registration action from the drop-down list. When you select **Create**, the appliance creates the IPv4 network and assigns it to the selected organization. When you select **None**, the appliance does not send registration updates to RIPE. When you are adding an existing RIR allocated network to NIOS, select **None**. When you are adding networks to an RIR allocated network (a parent network), select **Create**. Ensure that the parent network associated with an RIR organization already exists.
     - **Do not update registrations**: Select this checkbox if you do not want the appliance to submit RIR updates to RIPE. By default, the appliance sends updates to the RIR database based on the configured communication method.
   - **Netmask**: Use the netmask slider to select the appropriate number of subnet mask bits for the network. Select /64 as the CIDR, if an IPv6 prefix is unavailable for an IPv6 network. When the prefix is available, you must adjust the slider to the desired netmask as per the CIDR in the prefix.
   - **Networks**: Do one of the following to add new networks:
     
     - Click the Add icon to enter a new network. If you are adding a network for a previously defined global IPv6 prefix, you can select the prefix from the **IPv6** **Prefix** drop-down list. The default is **None**, which means that you are not creating an IPv6 network for a previously defined subnet route. If you have defined a global prefix at the Grid level, the default is the global prefix value. Click **Add** and Grid Manager adds a row to the table. Enter the network address in the **Network** field. When you enter an IPv6 address, you can use double colons to compress a contiguous sequence of zeros. You can also omit any leading zeros in a  
       four-hexadecimal group. For example, the complete IPv6 address 2001:0db8:0000:0000:0000:0000:0102:0304 can be shortened to 2001:db8::0102:0304. Note that if there are multiple noncontiguous groups of zeros, the double colon can only be used for one group to avoid ambiguity. The appliance displays an IPv6 address in its shortened form, regardless of its form when it was entered. Click **Add** again to add another network. You can also select a network and click the **Delete** icon to delete it.  
       or  
       Click the Next Available icon to have the appliance search for the next available network. Complete the following in the Next Available Networks section:
       
       - **Create** **new** **network(s)** **under**: Enter the network container in which you want to create the new network. When you enter a network that does not exist, the appliance adds it as a network container. When you enter a network that is part of a parent network, the parent network is converted into a network container if it does not have a member assignment or does not contain fixed addresses and host records that are served by DHCP. You can also click **Select** **Network** to select a specific network in the *Network* *Selector* dialog box. For information about how the appliance searches for the next available network, see [*Obtaining the Next Available*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663648).
       - **Number** **of** **new** **networks**: Enter the number of networks you want to add to the selected network container. Note that if there is not enough network space in the selected network to create the number of networks specified here, Grid Manager displays an error message. The maximum number is 20 at a time. Note that when you have existing networks in the table and you select one, the number you enter here includes the selected network.
       - Click **Add** **Next** to add the networks. Grid Manager lists the networks in the table. You can click **Cancel** to reset the values.  
           
         You must click **Add** **Next** to add the network container you enter in the Next Available Networks section. If you enter a network in the Next Available Networks section and then use the Add icon to add another network, the appliance does not save the network you enter in the Next Available Networks section until you click **Add** **Next**.
   - **Comment**: Enter additional information about the network, such as the name of the organization it serves.
   - **Automatically Create Reverse-Mapping Zone**: This function is enabled if the netmask of the network is a multiple of four, such as 4, 8, 12 or 16. Select this to have the appliance automatically create reverse-mapping zones for the network. A reverse-mapping zone is an area of network space for which one or more name servers have the responsibility for responding to address-to-name queries. These zones are created in the DNS view assigned to receive dynamic DNS updates at the network view level.
   - **Disable for DHCP: **Select this if you do not want the DHCP server to provide DHCP services for this network at this time. This feature is useful when you are in the process of setting up the DHCP server. Clear this after you have configured the server and are ready to have it serve DHCP for this network. Note that disabling an IPv6 network may take a longer time to complete depending on the size of the data.
   - The **Cloud** section appears when the Cloud Network Automation license is installed on the Grid Master. For information, see [*Deploying Cloud Network Automation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758966). To delegate authority for this network, complete the following:  
     **Delegate** **authority** **from** **the** **Grid** **Master**
   - **Delegate To**: This field indicates whether the authority for the network you want to create has already been delegated to a Cloud Platform Appliance. Click **Select** to choose the Cloud Platform Appliance to which you want to delegate authority. The *Member* *Selector* displays only Cloud Platform Appliances in the Grid. Click the member, and Grid Manager displays the member name next to this field. This cloud member now assumes authority for this network, and the Grid Master does not have authority any more. You can also click **Clear** to remove authority delegation from the selected Cloud Platform Appliance and return authority back to the Grid Master.
7. Click **Next** and add one or more Grid members as DHCP servers for the network.
   
   - Click the **Add** icon and select a Grid member from the *Member Selector* dialog box. Note that, some DHCP properties for the network are inherited from this member. The network can be served by multiple members, but a member can serve networks in one network view only.
8. Click **Next** to associate Active Directory Sites with the network. For more information, see [*Associating Active Directory Sites with Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403295).
9. (*Applies only to Network Insight*) Click **Next** to initiate or disable discovery of the new network(s). Discovery settings differ based on whether you are defining one network or multiple networks.
   
   - **Configuring one network**: discovery settings include the following: **Enable Discovery** and **Immediate Discovery**, selecting a Probe member to perform the discovery; and **Polling Options**, which define how the network will be discovered by the Probe member. By default, all Polling Options discovery settings are inherited from the parent network (or Grid, if no parent exists) unless you click **Override**. Polling Options govern the protocols used to query and collect information about the network devices being discovered.  
     or
   - **Configuring** **more** **than** **one** **network**: If the networks are child networks, they automatically inherit the settings of the parent network, including discovery settings and the discovery member. These settings will not appear in the wizard page. For discovery of multiple networks, you can only enable or disable **Immediate** **Discovery**. Click **Next** to override the DHCP properties described in [*Defining General IPv6 Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663691).
10. Assign VLAN objects to the network. For more information, see [*VLAN Management*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280757588).
11. As part of creating a network, you can provision the network on an actual device (switch, router, or switch-router), that is discovered and managed through the Grid Manager.
   
   - Begin by checking the **Enable** **Network** **Provisioning** checkbox, and clicking the **Select** **Device** button. Choose your device from the Device Selector dialog. (Click **Clear** to remove the setting. For more information, see the section [*Using the Device Selector*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200).)
   - If you performed DHCP configuration in the previous step of the Add Network Wizard, the **Router** **IP** value will automatically be populated with the DHCP Router IP address value. Otherwise, you enter the standard router IP address.
   - If required for the newly provisioned network to ensure that attached devices receive DHCP auto-configuration, enable the **DHCP** **Forwarding** checkbox. For this setting, if a DHCP Failover was previously configured, the IP addresses defined for DHCP failover are automatically used for the DHCP forwarding configuration.
   - You will also need to choose an interface on the selected device on which to provision the network by selecting it from the **Interface** drop-down menu. Grid Manager ensures that only those interfaces that can support provisioning, and are available for provisioning (that do not have an **Operation** **Status** of Up), appear in the drop-down menu.
   - Otherwise, when creating networks and provisioning them on managed devices, you can create a VLAN on which to provision the network by clicking the **Create** **VLAN** option and entering the **VLAN** **Name** and **VLAN** **ID**. Ensure that the **VLAN** **ID** value you enter is appropriate for the application - don't create a new VLAN and provision a network for a VLAN value that is already actively carrying traffic for another routing domain.  
     If a selected device does not support VLANs, the **Create** **VLAN** option will not appear.
12. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Managing Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).  
   If you are adding an RIR network, the RIR network attribute table appears. For information about these attributes and how to enter them, see [*RIR Network Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666911). You can preview the information before the appliance submits updates to the RIPE database. To preview registration updates, click **Preview** **RIR** **Submissions**. For more information, see [*Previewing Registration Updates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406780).  
     
   Note that you cannot leave an optional RIR attribute value empty. If you do not have a value for an RIR attribute, you must delete it from the table. You can enter up to 256 characters for all RIR attributes.  
     
   You need to assign a **Subscriber Member Site** to add subscriber service related extensible attributes in order to populate Subscriber Cache.
13. As the final step in the Add IPv6 Network wizard, you define when Grid Manager creates the new network by scheduling it. You also schedule when the associated port control task executes (if a port configuration has been specified).
   
   - To create the new network and its associated port configuration immediately, select **Now**. Grid Manager synchronizes the port control task to take place at the same time as the creation of the new network.
   - You can choose to have Grid Manager execute the port control task at a later time by selecting **Later**. Choose a **Selected** **time** by entering or selecting a **Start** **Date** (click the calendar icon to choose a calendar date) and a **Start** **Time**, and choose a **Time** **Zone**.
14. Choose one of the following from the **Save &...** drop-down button menu:
   
   - Click **Save & Close** to add the new network and close the wizard (this is the default).
   - Click **Save & Edit** to add the new network and launch the editor.
   - Click **Save & New** to add the new network and launch the wizard again to add another network.  
       
     At any step during the wizard, you can click Schedule for Later to schedule the task. In the Schedule Change panel, enter a date, time, and time zone. For information, see [Scheduling Tasks](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)  
       
     After you create a network, you can do the following:

- Add it to a shared network. For more information, see [*Adding IPv6 Shared Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403994).
- Use the split network feature to create subnets for the network. For information, see [*Splitting IPv6 Networks into Subnets*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764556)*.*
- Use the join networks feature to create a parent network that encompasses multiple subnets into a larger network. For information, see [*Joining IPv6 Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764556). You can also create a shared network for subnets that are on the same network segment.
- View a list of networks. For more information, see [*Viewing Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761742).

# Modifying IPv6 Networks

You can modify existing network settings and override the Grid or member DHCP properties, with the exception of the network address and netmask.  
To modify an IPv6 network:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* checkbox, and then click the Edit icon.
2. The *IPv6* *Network* editor contains the following basic tabs from which you can modify data:
   
   - **General** **Basic**: You can modify the following fields:
     
     - **Comment**: The information you entered for the network.
     - **Disabled:** This field is displayed only if the selected network is a network without a child network under it. You can disable and enable existing networks instead of removing them from the database, if the selected network does not have a child subnet. This feature is especially helpful when you have to move or repair the server for a particular network. Note that disabling an IPv6 network may take a longer time to complete depending on the size of the data.  
       When the Cloud Network Automation license is installed on the Grid Master, Grid Manager displays the following information in the **Cloud** section: **Cloud** **Usage**, **Owned** **By**, and **Delegated** **To**.   
       You cannot modify these fields. For more information, see Adding IPv6 Networks above.
       
       - **Member** **Assignment**: Add or delete a Grid member that provides DHCP services for this network.
       - **IPv6 DHCP Options**: Keep the inherited DHCP properties or override them and enter unique settings for the network. For information, see [*Defining General IPv6 Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663691).
       - **Discovery**: Checking the **Enable Discovery** checkbox informs NIOS to begin discovering the network after you click **Save and Close**. You manage discovery polling settings local to each network from this page. For a complete overview of features on this page, see [*Discovering Devices and Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200)and its subsections.
       - **Discovery Exclusions**: IP Addresses and IP ranges can be locally excluded from discovery by clicking the Add icon and selecting **Add IP Address** or **Add IP Range**. These IP addresses or IP ranges are selected from within the chosen network. For related information, see [*Excluding IP Addresses from Discovery*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406210) and its subsections.
       - **Discovery Blackout**: Define extended time periods and regularly scheduled times when discovery and/or port configuration tasks will not take place on a network. Editing a network under DHCP, blackout settings apply only to the specified network. You also specify the scheduled time when the blackout period begins, and the duration of the blackout period. By default, the network inherits its discovery blackout settings from the Grid level. For related information, see [*Defining Blackout Periods*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406071) and its subsections.  
           
         Discovery blackout settings also can be defined for DHCP ranges.
       - **RIR Registration**: Modify RIR network information. This tab appears only when support for RIR updates is enabled. For information, see [*Modifying RIR Network Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666942).
       - **Extensible Attributes**: Add and delete extensible attributes that are associated with a specific network. You can also modify the values of the extensible attributes. For information, see [*Managing Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
       - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see [* Managing Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
3. Optionally, you can click **Toggle Advanced Mode** to display the following tabs from which you can modify advanced data.
   
   - **General Advanced***:* You can associate zones with a network. For information, see [*Associating Networks with Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761881).
   - **IPv6 DDNS**: Keep the inherited DDNS settings or override them and enter unique settings for the network. Note that you must click **Override** and select **Enable DDNS updates** for the DDNS settings you configure in this tab to take effect. For information, see [*Enabling DDNS for IPv4 and IPv6 DHCP Clients*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554).
   - **Filters**: You can keep the inherited IPv6 logic filters or override them and add a new IPv6 logic filter. For information, see* *[*Applying Filters to DHCP Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743).  
     Note that Grid Manager displays both the basic and advanced tabs the next time you log in to the GUI.
4. Save the configuration or click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[*Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)

# Deleting IPv6 Networks

When you delete a network, all of its data, including all DHCP records, subnets, and records in its subnets, is deleted from the database. Because of the potentially large loss of data that can occur when you delete a network, the appliance stores the deleted network in the Recycle Bin. You can restore a deleted network from the Recycle Bin, if enabled. You can also disable a network instead of deleting it. For information, see Modifying IPv6 Networks above.  
To delete a network:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> *network* checkbox, and then select **Delete** or **Schedule** **Delete** from the Delete drop-down menu.
2. To delete the network now, in the Delete Confirmation dialog box, click Yes. Grid Manager displays a warning message. Click **Yes **to continue or **No **to cancel the process. To schedule the deletion, see [*Scheduling Deletions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/504168883). You can also choose to export all network data to a CSV file before deleting. To do this, click the **Export & Delete** button. For more information about this option, see [*Configuring IPv4 Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761742).

The appliance puts the deleted network in the Recycle Bin, if enabled. Click **Restore **in the Recycle Bin to recover the deleted data. Click **Yes **in the Restore Item dialog box to restore or **No **to cancel the process. Note that deleting and restoring an IPv6 network may take a longer time to complete depending on the size of the data.

> **warning**
>
> ### Note
> 
> You cannot delete a network that has a VLAN object assigned to it. For more information, see [*Assigning VLANs to a Network*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400578).
