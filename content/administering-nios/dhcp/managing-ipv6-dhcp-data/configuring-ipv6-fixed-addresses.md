---
title: "Configuring IPv6 Fixed Addresses"
source: "/space/nios90/280663479"
pageId: "280663479"
---
You can configure IPv6 fixed addresses with either an IPv6 address or prefix. You can assign prefix-based fixed addresses to routers so they can advertise the prefixes associated with a link. The fixed addresses also can be bound to interfaces on a network device, such as a switch or a router, that is discovered and managed under IPAM. DHCP hosts, in turn, use these prefixes to generate IP addresses using the stateless autoconfiguration mechanism defined in *RFC* *2462,* *IPv6* *Stateless* *Autoconfiguration*. You can also create IPv6 fixed addresses from the Tasks Dashboard. For information about the Tasks Dashboard, see [*Tasks Dashboard*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280759015).

> **warning**
>
> **Note**
> 
> IPv6 fixed addresses do not support dynamic DNS updates.

# Adding IPv6 Fixed Addresses

> **warning**
>
> **Note**
> 
> At any time during the wizard, you can click **Schedule** **for** **Later** to schedule the task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).

To add an IPv6 fixed address:

1. Navigate to the network to which you want to add a fixed address, and then select **Fixed** **Address** from the **Add** drop down list.  
   Or  
   From any panel on the DHCP tab, expand the Toolbar and click **Add** -> **Fixed** **Address** -> **IPv6**.
2. In the *Add* *Fixed* *Address* wizard, select one of the following and click **Next**:
   
   - **Add** **IPv6** **Fixed** **Address**   
     or
   - **Add** **IPv6** **Fixed** **Address** **Using** **Template**  
     Click** Select Template** and select the template that you want to use. When you use a template to create a fixed address, the configurations of the template apply to the new address. The appliance automatically populates the fixed address properties in the wizard. You can edit the pre-populated properties.
3. In this panel, the displayed network address can either be the last selected network or the network from which you are adding the fixed address. If no network address is displayed or if you want to specify a different network, click  **Select** **Network**. When there are multiple networks, Grid Manager displays the *Select* *Network* dialog box.  
   Specify one of the following:
   
   - Select **Address** to assign an IPv6 address to a fixed address. You can either enter an IPv6 address or select **Next Available IP** to obtain the next available IP address. Note that for Cloud Network Automation, Next Available IP is not available if the fixed address you want to create is within a delegated range.
   - Select **Prefix Delegation** to assign an IPv6 prefix. Enter the prefix and prefix length.
   - Select **Both** to assign an IPv6 prefix and address. Enter the IPv6 address, prefix, and prefix length.
   - In the *Assign IPv6 Address by* section, specify one of the following:
     
     - **DUID**: Specify the DHCP Unique Identifier (DUID) of the DHCP client assigned to this fixed address.
     - **MAC Address **(from NIOS 9.0.6 onwards): Enter the MAC address of the DHCP client assigned to this fixed address.  
       To use the MAC address as the matching criteria, you must set up your DHCPv6 environment as follows:
       
       - The DHCPv6 relay agents must support RFC-6939 and they must be configured to add the Client Link-Layer Address Option to the DHCP RELAY-FORWARD messages that they send.
       - The DHCP traffic must pass through a DHCPv6 relay agent that supports RFC-6939 and the relay agent must be configured to add the Client Link-Layer Address Option to the DHCP RELAY-FORWARD messages.
   - **Name:** Enter a name for the fixed address.
   - **Comment**: Optionally, enter additional information.
   - **Disabled**: Select this if you do not want the DHCP server to allocate this IP address at this time.
   - The **Cloud** section appears when the Cloud Network Automation license is installed on the Grid Master. For information, see [*Deploying Cloud Network Automation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758966). This section displays the following information:
     
     - **Cloud** **Usage**: This field indicates whether this object is associated with any specific cloud extensible attributes or within a scope of delegation. It can be one of the following:
       
       - **Cloud from adapter**: Indicates that this object has been created by a cloud adapter and it may or may not be within a scope of delegation at the moment.
       - **Cloud from delegation**: Indicates that this object is within the scope of delegation or the object itself defines a scope of authority delegation, and it is not created by a cloud adapter.
       - **Used by cloud**: Indicates that this network or network container is associated with the extensible attribute **Is External** or **Is Shared** and the value is set to True, which implies the network is a private or shared network managed by the CMP, and it is not **Cloud from adapter** or **Cloud from delegation**.
       - **Non-cloud**: The object is a regular NIOS object and is not within the scope of any authority delegation nor is it associated with any of these extensible attributes: **Cloud API Owned, Is External** or **Is Shared**. NIOS admin users can modify this object based on their permissions.
     - **Owned By**: A cloud object can be owned by the Grid Master or the cloud adapter. When the object is created by the Grid Master, this shows **Grid**. If the object is created by the cloud adapter, this shows **Adapter**.
   - **Delegate** **authority** **from** **the** **Grid** **Master**
     
     - **Delegate To**: This field indicates whether the authority for the object you want to create has already been delegated. If so, it displays the name of the delegation.
4. Click **Next** to configure or override DHCP options as described in [*Defining General IPv6 Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663691).
5. (*Applies only with Network Insight*) *This step is not required for creating a new Fixed Address*. In the current Wizard step, you can optionally define the following identification values and settings for the new object's port reservation:
   
   - Choose the **Device Type**: **Router**, **Switch-Router**, **Switch**, **MSFT** (Microsoft) **Server**, **NetMRI**, **NIOS**, **VNIOS**, or **ESX** (VMware) **Server**.  
     The values on this page are not required for defining the actual port reservation in a later wizard step.  
     Certain device types could be descriptively relevant based on the type of object you are creating. As an example, the **MSFT** **Server** designator helps identify the new object as a Microsoft Hyper-V Host. The **ESX** **Server** designator can be used to identify the new object as a VMware ESX Host. These values are not required and will not affect the functionality of the object.
   - Choose the **Device** **Vendor**: **Cisco**, **Juniper**, **Aruba**, **Dell**, **Infoblox**, or **HP**.
   - You can also enter a **Location** and a **Description**. These values are advisory and not required for configuration.  
     After you define this group of settings, you will still need to define a device port reservation, which is done in a later step.
6. Click **Next** to initiate or disable discovery of the new Fixed Address. (*Applies* *only* *to* *Network* *Insight*) *This* *step* *is* *not* *required* *for* *creating* *a* *new* *Fixed* *Address*.
   
   1. Choose either **Exclude from Network Discovery** or **Enable Immediate Discovery**. If you choose to Exclude, discovery will not execute on the Fixed Address. If you choose **Enable Immediate Discovery**, discovery will execute on the host after you save your settings. You may also choose to leave both options disabled.
   2. By default, the new fixed address object inherits its SNMP credentials from those defined at the grid level. Should you wish to override them for a local set of credentials, check the **Override Credentials** checkbox and select the **SNMPv1/SNMPv2** or **SNMPv3** option and enter the locally used credentials.
   3. You may also test the entered SNMP credentials by clicking **Test SNMP Credential**.  
      For descriptions of SNMP credentials for discovery, see the section [*Configuring SNMP1/v2 Credentials for Polling*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343325342) and [*Configuring SNMPv3 Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343096290). These Grid-based values are inherited, by default, by each new object you create.
      
      - For the new object, you can check the **Override CLI Credentials** checkbox to override the inherited set of CLI credentials taken from the Grid level. This set of credentials may be used for the device that is directly associated with the new object in its Port Reservation.
      - You can also click **Test CLI Credentials** to enter and test a set of CLI login credentials against a device based on its IP address.  
        Port control operations require CLI credentials for the involved devices. (If you are not using port control for the new object, usage of CLI credentials is optional.) Because some IPAM and DHCP objects will use port control features as part of object creation, CLI credentials are automatically leveraged as part of discovery. Ensure you have the correct sets of CLI credentials for devices in your network. See the section [*Configuring CLI Discovery Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343292849) for related information.
      - SSH is the default for CLI operations. Check the **Allow** **Telnet** checkbox if you know the device involved in the object assignment may support Telnet but may not support SSH, or if you want Telnet as an option.  
        All port control operations require CLI credentials to be entered into Grid Manager. Because some IPAM and DHCP objects will use port control features as part of object creation, CLI credentials are automatically leveraged as part of discovery. Ensure you have the correct sets of CLI credentials for devices in your network.
7. Click **Next** to define the port reservation for the device port that will be associated with the new Fixed Address. *This step is not required for creating a new Fixed Address*. This feature set is also termed *port control* in the NIOS/Grid Manager system. The device to which the new Fixed Address will be associated should already be discovered and managed from the Grid Manager.
   
   - Begin by checking the **Reserve Port** checkbox. Note that reserving a switch port does not guarantee its availability.  
     Optionally, you can skip connecting port configuration by clicking **Next**.   
     Click the **Clear** button to remove the selected device from the configuration.
   - Click the **Select** **Device** button to choose the device for which the port reservation will be associated. You should know the identity of the device to whose interface the new object will be associated before taking this step. For more information, see the section [*Using the Device Selector*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200/Discovering+Devices+and+Networks#Using-the-Device-Selector).
   - After choosing the device, choose the **Interface** with which the port reservation will be bound. The drop-down list shows only interfaces that are most recently found to be available by Grid Manager during the last discovery cycle. This list will not include any ports that are Administratively Up and Operationally Up, or that are otherwise already assigned to other networks or objects.
   - The Wizard page also shows a list of any VLANs that are currently configured in the chosen device (**The** **following** **VLANs** **are** **configured**). This Wizard page allows only the assignment of an existing VLAN in the chosen device to the new port reservation.
   - Check the **Configure** **Port** checkbox to define specific port control settings for the port reservation.
   - Choose the **Data** **VLAN** and/or the **Voice** **VLAN** settings you may need for the port assignment. Depending on the selected device, you may or may not be able to apply VLAN settings.
   - Set the **Admin** **Status** to **Up** if you need to activate the port after assignment in the current task.  
     All port control operations require CLI credentials to be entered into Grid Manager. Because some IPAM and DHCP objects will use port control features as part of object creation, CLI credentials are automatically leveraged as part of discovery and definition of port configurations such as Admin Up/Down status. Ensure you have the correct sets of CLI credentials for devices in your network.
   - Enter a **Description** for the port assignment. Infoblox recommends doing so to help other technicians to recognize the port assignment task.
8. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).  
   You need to assign a **Subscriber Member Site** to add subscriber service related extensible attribute in order to populate Subscriber Cache.
9. As the final step in the *Add Fixed Address wizard*, you define when Grid Manager creates the new object by scheduling it. You can also schedule when the associated port configuration task executes.
   
   - To create the new object and its associated port configuration immediately, select **Now**. The port control event is automatically synchronized to take place at the same time as the activation of the new object.
   - You can choose to have Grid Manager execute the port reservation task at the same time as the Fixed Address object creation. To do so, select **At** **same** **time** **as** **Host**.
   - You can choose to have Grid Manager execute the port reservation task at a later time by selecting **Later**. Choose a **Selected** **time** by entering or selecting a **Start** **Date** (click the calendar icon to choose a calendar date) and a **Start** **Time**, and choose a **Time** **Zone**.
10. Choose one of the following from the **Save&...** drop-down button menu:
   
   - Click **Save & Close** to add the new object and close the wizard (this is the default).
   - Click **Save & Edit** to add the new object and launch the editor.
   - Click **Save & New** to add the new object and launch the wizard again to add another Fixed Address object.
11. Save the configuration and click **Restart** if it appears at the top of the screen.

> **warning**
>
> **Note**
> 
> At any step during the wizard, you can click **Schedule** **for** **Later** to schedule the task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666). You cannot schedule this task when you are creating an object that is within a delegated scope.

For information on viewing IPv6 fixed addresses in a network, see [*Viewing IPv4 DHCP Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761679).

# Modifying IPv6 Fixed Addresses

To modify a fixed address:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** section -> *network* ->* fixed_address* checkbox, and then click the **Edit** icon.
2. The *Fixed* *Address* editor contains the following basic tabs from which you can modify data:
   
   - **General**: You can modify all the fields you filled out in the first step of the wizard described in[* Adding IPv6 Fixed Addresses.*](#AddIPvFD)
   - **Device** **Information**: You can change advisory Device Information settings for the object's port reservation; settings are described in [*Configuring IPv6 Fixed Addresses*](#DI)*.*
   - **Discovery:** Checking the **Enable** **Discovery** checkbox informs NIOS to begin discovering the network after you click **Save** **and** **Close**. You manage discovery polling settings local to each fixed address from this page. For a complete overview of features on this page, see [*Discovering*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200)[*Devices*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200)[*and*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200)[*Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200) and its subsections.
   - **Port** **Reservation:** Review and edit any device port reservations that may be defined for the current object, or create a new port reservation and schedule it. For a closer look, see the section Port Control Features in Network Insight, and [steps 5-9](#step5) in the this topic Configuring IPv6 Fixed Addresses*.*
   - **IPv6** **DHCP** **Options**: You can keep the inherited DHCP options or override them and enter unique settings for the fixed address. For information, see [*Defining General IPv6 Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663691)*.*
   - **Filters**: You can keep the inherited IPv6 logic filters or override them and add a new IPv6 logic filter. For information, see [*Applying Filters to DHCP Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743).
   - **Discovered** **Data**: You can view discovered data of this address, if any, in this tab. For information, see[* Viewing*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666433)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666433)[*Discovered*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666433)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666433)[*Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666433)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666433)
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with a specific network. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#bookmark868)
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see[* *](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424#AboutAdministrativePermissions#ManPerm)[*Managing Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343324639).
3. Save the configuration and click **Restart** if it appears at the top of the screen.  
   Or,  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[*Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).

# Deleting IPv6 Fixed Addresses

To delete a fixed address, from the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** section -> *network* -> *fixed_address* checkbox, and then click the Delete icon. You cannot delete multiple fixed addresses at the same time if the authority for one of the fixed addresses is delegated to a Cloud Platform Appliance.
