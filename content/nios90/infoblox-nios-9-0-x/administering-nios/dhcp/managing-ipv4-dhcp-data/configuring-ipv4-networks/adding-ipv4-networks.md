---
title: "Adding IPv4 Networks"
source: "/space/nios90/1432813878"
pageId: "1432813878"
---
When you configure an IPv4 network, you must assign either Grid members or Microsoft servers to the network. A network cannot be served by a mix of Microsoft and Infoblox DHCP servers. Multiple servers can serve a network, but Grid members and Microsoft servers cannot serve the same network.

A Grid member can serve only one network view. Similarly, a Microsoft server can serve only one network view. Therefore when you assign Grid members to networks, you must assign the members to networks in the same network view. For information, see [*Managing IPv4 DHCP Data*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data).

If you have enabled support for RIR (Regional Internet Registry) updates and are adding an RIR IPv4 network container or network to NIOS, Grid Manager displays an RIR section in the *Add* *IPv4* *Network* wizard. You must enter RIR related information in this section in order for NIOS to associate the newly added network with an RIR organization. For more information about RIR address allocation and updates, see* *[*RIR Registration Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates).

To add an IPv4 network, complete the following:

1. From the **Data Management** tab, select the **DHCP** tab -&gt; **Networks** tab.
2. In the **Networks** section, expand the **Toolbar** and click the **Add** drop-down list and select **Network **-&gt; **IPv4** network or, click the Add icon drop-down list and select **IPv4 Network.**
3. In the *Add Network* wizard, select one of the following and click **Next**:
   
   - **Add Network**: Click this to add a network from scratch.
   - **Add Network using Template**: To use a template, click this, and then click **Select Template** and select a network template. For information, see [*About IPv4 DHCP Options*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options). The appliance populates the template properties in the wizard when you click **Next**. You can then edit the pre-populated properties, except for **Netmask**.
   - If you are adding or creating a network or a network container on an unmanaged network, you must first convert the unmanaged network into a managed network before creating the new network.
4. Complete the following and then click **Next**:
   
   - **Regional Internet Registry**: This section appears only when support for RIR updates is enabled. For information about RIR, see [*RIR Registration Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates). Complete the following to create an RIR IPv4 network container or network:
     
     - **Internet Registry**: Select the RIR from the drop-down list. The default is **RIPE**. When you select **None**, the network is not associated with an RIR organization.
     - **Organization ID**: Click **Select Organization** and select an organization from the *RIR Organization Selector* dialog box.
     - **Registration Status**: The default is **Not Registered**. When adding an RIR allocated network, you can change this to **Registered** and select the **Do not update registrations** checkbox below. Note that when you select **API** as the communication method, the registration status will be updated automatically after the registration update is completed. However, when you select **Email** as the communication method, the registration status will not be automatically updated. If you are creating a new network and the registration update is completed successfully, the status will be changed to **Registered**. If the update fails, the status will be changed to **Not Registered**. The updated status and timestamp are displayed in the **Status of last update** field in the *IPv4 Network Container* or *IPv4 Network* editor.
     - **Registration Action**: Select the registration action from the drop-down list. When you select **Create**, the appliance creates the IPv4 network and assigns it to the selected organization. When you select **None**, the appliance does not send registration updates to RIPE. When you are adding an existing RIR allocated network to NIOS, select **None**. When you are adding networks to an RIR allocated network (a parent network), select **Create**. Ensure that the parent network associated with an RIR organization already exists.
     - **Do not update registrations**: Select this checkbox if you do not want the appliance to submit RIR updates to RIPE. By default, the appliance sends updates to the RIR database based on the configured communication method.
   - **Network View**: This appears only when you have multiple network views. From the drop-down list, select the network view in which you want to create the network.
   - **Netmask**: Enter the netmask or use the netmask slider to select the appropriate number of subnet mask bits for the network. The appliance supports /1 to /32 netmasks. Note that when you use a template that contains a fixed netmask, you cannot adjust the netmask for this network.  
     Microsoft servers can serve networks with /1 to /31 netmasks. Infoblox DHCP servers can serve networks with /8 to /32 netmasks.  
     Since Infoblox DHCP servers do not support /1 to /7 networks, you can assign these networks to Microsoft DHCP servers only. You can create DHCP ranges and fixed addresses within these subnets.
   - **Networks**: Do one of the following to add new networks:
     
     - Click the Add icon to enter a new network. Grid Manager adds a row to the table. Enter the network address in the **Network** field. Click the Add icon again to add another network.  
       Or
     - Click the Next Available icon to have the appliance search for the next available network. Complete the following in the Next Available Networks section:
     - **Create** **new** **network(s)** **under**: Enter the network container in which you want to create the new network. When you enter a network that does not exist, the appliance adds it as a network container. When you enter a network that is part of a parent network, the parent network is converted into a network container if it does not have a member assignment or does not contain overlapping address ranges, fixed addresses, reservations, shared networks, and host records. When you enter a network that has a lower CIDR than an existing network, the appliance creates the network as a parent network and displays a message indicating that the newly created network overlaps an existing network. You can also click **Select** **Network** to select a specific network in the *Network* *Selector* dialog box. For information about how the appliance searches for the next available network, see [*Obtaining the Next Available*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-the-next-available-network-or-ip-add).
     - **Number** **of** **new** **networks**: Enter the number of networks you want to add to the selected network container. Note that if there is not enough network space in the selected network to create the number of networks specified here, Grid Manager displays an error message. The maximum number is 20 at a time. Note that when you have existing networks in the table and you select one, the number you enter here includes the selected network.
     - Click **Add** **Next** to add the networks. Grid Manager lists the networks in the table. You can click **Cancel** to reset the values.  
       Note that you must click Add Next to add the network container you enter in the Next Available Networks section. If you enter a network in the Next Available Networks section and then use the Add icon to add another network, the appliance does not save the network you enter in the Next Available Networks section until you click Add Next.
   - **Comment**: Enter useful information about the network, such as the name of the organization it serves.
   - The **Sync to MGM** drop-down list is available only on the managed Grid when it remains joined with the Multi-Grid Master. Select one of the following from the **Sync to MGM** drop-down list:
     
     - **Yes**: Select this to enable synchronization of networks between the managed Grid and Multi-Grid Master.
     - **No**: Select this to disable synchronization of networks between the managed Grid and Multi-Grid Master.  
       Note that if you have selected No at the parent network (disabled synchronization) and if you try to select Yes when adding a child network, the appliance returns an error. This means that you cannot override the settings at the child level if you have already restricted synchronization at the parent network.
     - **Use Inherited Setting**: Select this is to inherit synchronization settings from the parent object.
   - **Automatically Create Reverse-Mapping Zone**: This function is enabled if the netmask of the network equals /8, /16, or /24. Select this to have the appliance automatically create reverse-mapping zones for the network. A reverse-mapping zone is an area of network space for which one or more name servers have the responsibility for responding to address-to-name queries. These zones are created in the DNS view assigned to receive dynamic DNS updates at the network view level.
   - **Disable for DHCP**: Select this if you do not want the DHCP server to provide DHCP services for this network at this time. This feature is useful when you are in the process of setting up the DHCP server. Clear this after you have configured the server and are ready to have it serve DHCP for this network. Note that disabling an IPv4 network may take a longer time to complete depending on the size of the data.
     
     The **Cloud** section appears when the Cloud Network Automation license is installed on the Grid Master. For information, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation).
     
     To delegate authority for this network, complete the following:
     
     **Delegate** **authority** **from** **the** **Grid** **Master**
   - **Delegate To**: This field indicates whether the authority for the network you want to create has already been delegated to a Cloud Platform Appliance. Click **Select** to choose the Cloud Platform Appliance to which you want to delegate authority. The *Member Selector* displays only Cloud Platform Appliances in the Grid. Click the member, and Grid Manager displays the member name next to this field. This cloud member now assumes authority for this network, and the Grid Master does not have authority anymore. You can also click **Clear** to remove authority delegation from the selected Cloud Platform Appliance and return authority back to the Grid Master.
5. Click **Next** and add a Grid member or Microsoft server as a DHCP server for the network. A network can be served by either Grid members or Microsoft servers, but not both at the same time.
   
   - Click the Add icon and select one of the following options:
     
     - **Add Infoblox Member**: Select this option to add a Grid member as a DHCP server for the network. Select the Grid member from the *Member Selector* dialog box. Keep in mind, DHCP properties for the network are inherited from this member. The network can be served by multiple members, but a member can serve networks in one network view only.
       
       Or
     - **Add** **Microsoft** **Server**: Select this option to add a Microsoft server as a DHCP server for the network. Select the Microsoft server from the *Microsoft* *Server* *Selector* dialog box.
6. Click **Next** to associate Active Directory Sites with the network. For more information, see [*Associating Active Directory Sites with Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/managing-active-directory-sites).
7. Click **Next** to override DHCP properties as described in [*Configuring DHCP Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties). This only applies if you are adding a network that is served by an Infoblox Grid member.  
   Or
8. (*Applies only with Network Insight*) Click **Next** to initiate or disable discovery of the new network(s).* This step is not required for creating a new network*. Discovery settings differ based on whether you are defining one network or multiple networks.
   
   - **Configuring one network**: Discovery settings include the following: **Enable Discovery** and **Enable Immediate Discovery**, selecting a Probe member to perform the discovery; and **Polling Options**, which define how the network will be discovered by the Probe member, including the ability to enable or disable the use of **SNMP Credentials** and **CLI Credentials**, along with **Switch Port Data Collection** settings. By default, all Polling Options discovery settings are inherited from the parent network (or Grid, if no parent exists) unless you click **Override**. Polling Options govern the protocols used to query and collect information about the network devices being discovered. For more information, see the section [*Configuring Discovery Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties) for a complete description of discovery Polling Options.
     
     Or
   - **Configuring** **more** **than** **one** **network**: If the networks are child networks, they automatically inherit the settings of the parent network, including discovery settings and the discovery member. Discovery is disabled for any parent networks. These settings will not appear in the wizard page. For discovery of multiple networks, you can only enable or disable **Immediate** **Discovery**.
9. Assign VLAN objects to the network. For more information, see [*VLAN Management*](/nios90/infoblox-nios-9-0-x/administering-nios/vlan-management).
10. As part of creating a network in IPAM or DHCP, you can provision the network on an actual device (switch, router, or switch-router), that is discovered and managed through the Grid Manager.
   
   - Begin by checking the **Enable Network Provisioning** checkbox, and clicking the **Select Device** button. Choose your device from the Device Selector dialog. Click **Clear** to remove the setting. For more information, see the section [*Using the Device Selector*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/discovering-devices-and-networks).
   - If you performed DHCP configuration in the previous step of the Add Network Wizard, the **Router** **IP** value will automatically be populated with the DHCP Router IP address value. Otherwise, you enter the standard router IP address.
   - For example, if Grid Manager discovers and manages a router 172.16.22.1, the IP value 172.16.22.1 should be entered in the **Router** **IP** field.
   - IF required for the newly provisioned network to ensure that attached devices receive DHCP auto-configuration, enable the **DHCP Forwarding** checkbox. For this setting, if a DHCP Failover was previously configured, the IP addresses defined for DHCP failover are automatically used for the DHCP forwarding configuration.
   - You will also need to choose an interface on the selected device on which to provision the network by selecting it from the **Interface** drop-down menu. Grid Manager ensures that only those interfaces that can support provisioning, and are available for provisioning (that do not have an **Operation** **Status** of Up), appear in the drop-down menu.
   - Otherwise, when creating networks and provisioning them on managed devices, you can create a VLAN on which to provision the network by clicking the **Create VLAN** option and entering the **VLAN Name** and **VLAN ID**. Ensure that the **VLAN ID** value you enter is appropriate for the application. Do not create a new VLAN and provision a network for a VLAN value that is already actively carrying traffic for another routing domain.  
     If a selected device does not support VLANs, the **Create** **VLAN** option will not appear.
11. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).  
   If you are adding an RIR network, the RIR network attribute table appears. For information about these attributes and how to enter them, see [*RIR Network Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates/managing-rir-attributes)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates/managing-rir-attributes/Managing+RIR+Attributes#bookmark1197) You can preview the information before the appliance submits updates to the RIPE database. To preview registration updates, click **Preview** **RIR** **Submissions**. For more information, see [*Previewing Registration Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates/monitoring-rir-data).
   
   You cannot leave an optional RIR attribute value empty. If you do not have a value for an RIR attribute, you must delete it from the table. You can enter up to 256 characters for all RIR attributes.
   
   You need to assign a **Subscriber Member Site** to add subscriber service related extensible attributes in order to populate Subscriber Cache.
12. As the final step in the Add IPv4 Network wizard, you define when Grid Manager provisions the new network by scheduling it. You also schedule when the associated port control task executes (if a port configuration has been specified).
   
   - To create the new network and its associated port configuration immediately, select **Now**. Grid Manager synchronizes the port control task to take place at the same time as the creation of the new network.
   - You can choose to have Grid Manager execute the port control task at a later time by selecting **Later**.
   - Choose a **Selected** **time** by entering or selecting a Start Date (click the calendar icon to choose a calendar date) and a Start Time, and choose a Time Zone.
13. Choose one of the following from the **Save** **&** **...** drop-down menu:
   
   - Click **Save** **&** **Close** to add the new network and close the wizard (this is the default).
   - Click **Save & Edit** to add the new network and launch the editor.
   - Click **Save & New** to add the new network and launch the wizard again to add another network.

> **warning**
>
> ### Note
> 
> At any step during the wizard, you can click **Schedule** **for** **Later** to schedule the task. In the *Schedule* *Change *panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks)[.](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks)

After you create a network, you can perform the following:

- Use the split network feature to create subnets for the network. For information, see [*Splitting IPv4 Networks into Subnets*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv4-networks).
- Use the join networks feature to create a parent network that encompasses multiple subnets into a larger network. For information, see [*Joining IPv4 Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv4-networks). You can also create a shared network for subnets that are on the same network segment.

Networks served by Microsoft servers do not support the split and join functions.
