---
title: "Adding IPv4 Fixed Addresses"
source: "/space/nios90/1320357604"
pageId: "1320357604"
---
For Cloud Network Automation, you can create IPv4 fixed addresses within the delegation authority of a Cloud Platform Appliance. The newly created fixed address is forwarded to the Cloud Platform Appliance. For information, see [*About Authority Delegation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667711).  
To add an IPv4 fixed address:

1. Navigate to the network to which you want to add a fixed address, and then select **Fixed** **Address** from the Add drop-down menu.  
   or  
   From any panel in the **DHCP** tab, expand the Toolbar and click **Add** -> **Fixed** **Address** -> **IPv4**.
2. In the *Add IPv4 Fixed Address* wizard, select one of the following and click **Next**:
   
   - **Add Fixed Address**   
     or
   - **Add Fixed Address using Template**  
     Click **Select** **Template** and select the template that you want to use. Note that when you use a template to create a fixed address, the configurations of the template apply to the new address. The appliance automatically populates the fixed address properties in the wizard. You can then edit the pre-populated properties.
     
     1. Complete the following:
        
        1. **Network**: Click **Select** **Network**. When there are multiple networks, Grid Manager displays the *Select* *Network* dialog box from which you can select one.
        2. **IP** **Address:** Enter the IPv4 address for the fixed address, or click **Next** **Available** **IP** to obtain the next available IP address. For information about obtaining the next available IP address, see [*About the Next Available Network or IP Address*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663648). Note that for Cloud Network Automation, Next Available IP is not available if the fixed address you want to create is within a delegated range.
        3. If the network of the IP address is served by a Grid member, Grid Manager displays the **Assign IP Address by** section. Select one of the following to match your criteria:
           
           - **MAC** **Address**: Select this to assign a fixed address to a host with the MAC address that you specify here. Enter the MAC address in the field. For MAC address format, see [*Configuring IPv4 Fixed Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095).
           - **DHCP Client Identifier:** Select this to assign a fixed address to a host with the DHCP client identifier that you specify here. In the field, enter the client identifier of the host to which you want the DHCP server to assign this IP address. The client identifier must be unique within the network.
             
             - **Match null (\0) at beginning of DHCP client identifier**: This is enabled when you select **DHCP client identifier**. Select this when a DHCP client sends a \000 prefixed to the DHCP client identifier. \0 is the null character. Some DHCP clients (for example, Microsoft) send the client identifier in a \000foo format (with the null character prefix instead of just foo). The client identifier for the requesting host and the client identifier stored in the appliance must match.
           - **DHCP** **Relay** **Agent:** Select this to assign a fixed address to a host with the circuit ID or remote ID you specify here. From the drop-down list, select **Circuit** **ID** or **Remote** **ID**, and then enter the ID in the field. For information about circuit IDs and remote IDs, see [*About the DHCP Relay Agent Option (Option 82)*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1331822666). You can enter the ID in hexadecimal format, such as ex:aa, ab, 1f:cd, or ef:23:56, or in string format, such as abcd or aa:gg. The appliance matches the value you enter here with the value sent by the DHCP client in counted octet sequence format. For information about how to use hexadecimal values, see [*DHCP Option Data Types*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1331789828). The ID is case sensitive and can contain up to 230 characters. Regardless of the entry you enter here, you can define the logging format for the circuit ID and remote ID when Grid Manager displays them in the detailed lease information page. For information about how to configure the logging format, see [*Defining Logging Format for DHCP Option 82*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1331299409).
             
             Note that you cannot use the same circuit ID or remote ID for different fixed addresses if the addresses are in the same network or the same shared network.
        4. **Name**: Enter a name for the Fixed Address. This field is required if the network is served by a Microsoft server. For information, see [*Adding Fixed Addresses/Microsoft Reservations*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1466859764).
        5. **Comment:** Optionally, enter additional information about the fixed address.
        6. **Disabled:** Select this if you do not want the DHCP server to allocate this IP address at this time.
           
           The **Cloud** section appears when the Cloud Network Automation license is installed on the Grid Master. For information, see [*Deploying Cloud Network Automation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758966). This section displays the following information:
           
           - **Cloud** **Usage**: This field indicates whether this object is associated with any specific cloud extensible attributes or within a scope of delegation. It can be one of the following:
             
             - **Cloud** **from** **adapter**: Indicates that this object has been created by a cloud adapter and it may or may not be within a scope of delegation at the moment.
             - **Cloud** **from** **delegation**: Indicates that this object is within the scope of delegation or the object itself defines a scope of authority delegation, and it is not created by a cloud adapter.
             - **Used** **by** **cloud**: Indicates that this network or network container is associated with the extensible attribute **Is** **External** or **Is** **Shared** and the value is set to True, which implies the network is a private or shared network managed by the CMP, and it is not **Cloud** **from** **adapter** or **Cloud** **from** **delegation**.
             - **Non-cloud**: The object is a regular NIOS object and is not within the scope of any authority delegation nor is it associated with any of these extensible attributes: **Cloud** **API** **Owned,** **Is** **External** or **Is** **Shared**. NIOS admin users can modify this object based on their permissions.
           - **Owned** **By**: A cloud object can be owned by the Grid Master or the cloud adapter. When the object is created by the Grid Master, this shows **Grid**. If the object is created by the cloud adapter, this shows **Adapter**.
             
             **Delegate** **authority** **from** **the** **Grid** **Master**
             
             - **Delegate To**: This field indicates whether the authority for the object you want to create has already been delegated. If so, it displays the name of the delegation.
3. (Optional) Click **Next** to configure or override DHCP options as described in [*About IPv4 DHCP Options*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271370).
4. (*Applies only to Network Insight*) *This step is not required for creating a new Fixed Address*. In the following Wizard step, you can optionally define the following identification values and settings for the new object's port reservation:
   
   - Choose the **Device** **Type**: **Router**, **Switch-Router**, **Switch**, **MSFT** (Microsoft) **Server**, **NetMRI**, **NIOS**, **VNIOS**, or **ESX** (VMware) **Server**.  
     The values on this page are not required for defining the actual port reservation in a later wizard step.  
     Certain device types could be descriptively relevant based on the type of object you are creating. As an example, the **MSFT** **Server** designator helps identify the new object as a Microsoft Hyper-V Host. The **ESX** **Server** designator can be used to identify the new object as a VMware ESX Host. These values are not required and will not affect the functionality of the object.
   - Choose the **Device** **Vendor**: **Cisco**, **Juniper**, **Aruba**, **Dell**, **Infoblox**, or **HP**.
   - You can also enter a **Location** and a **Description**. These values are advisory and not required for configuration.
   - After you define this group of settings, you can also define a device port reservation, which is done in a later step. This is not required for the Fixed Address object creation.
5. Click **Next** to initiate or disable discovery of the new Fixed Address. (*Applies* *only* *to* *Network* *Insight*) *This* *step* *is* *not* *required* *for* *creating* *a* *new* *Fixed* *Address*.
   
   - Choose either **Exclude from Network Discovery** or **Enable Immediate Discovery**. If you choose to Exclude, discovery will not execute on the fixed IP address. If you choose **Enable Immediate Discovery**, discovery will execute on the object after you save your settings. You may also choose to leave both options disabled.
   - By default, the new fixed address object inherits its SNMP credentials from those defined at the grid level. Should you wish to override them for a local set of credentials, check the **Override Credentials** checkbox and select the **SNMPv1/SNMPv2** or **SNMPv3** option and enter the locally used credentials.
   - You may also test the entered SNMP credentials by clicking **Test SNMP Credential**.
     
     For descriptions of SNMP credentials for discovery, see the section Configuring SNMP1/v2 Credentials for Polling and Configuring SNMPv3 Properties. These Grid-based values are inherited, by default, by each new object you create.
   - For the new object, you can check the **Override** **CLI** **Credentials** checkbox to override the inherited set of CLI credentials taken from the Grid level. This set of credentials may be used for the device that is directly associated with the new object in its port reservation.
   - You can also click **Test CLI Credentials** to enter and test a set of CLI login credentials against a device based on its IP address.  
     Port control operations require CLI credentials for the involved devices. (If you are not using port control for the new object, usage of CLI credentials is optional.) Because some IPAM and DHCP objects will use port control features as part of object creation, CLI credentials are automatically leveraged as part of discovery. Ensure you have the correct sets of CLI credentials for devices in your network. For more information, see the section [*Configuring CLI Discovery Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343292849).
   - SSH is the default for CLI operations. Check the **Allow** **Telnet** checkbox if you know the device involved in the object assignment may support Telnet but may not support SSH, or if you want Telnet as an option.
     
     
     
     Note that all port configuration operations require CLI credentials to be entered into Grid Manager. Because some IPAM and DHCP objects will use port control features as part of object creation, CLI credentials are automatically leveraged as part of discovery. Ensure you have the correct sets of CLI credentials for devices in your network.
6. Click **Next** to define port connectivity for the device port that will be associated with the new object. *This step is not required for creating a new Fixed Address*. This feature set is also termed *portcontrol* in the NIOS/Grid Manager system. The device whose interface the new Fixed Address will be associated should already be discovered by Network Insight.
   
   - After choosing the device, choose the **Interface** with which the port reservation will be bound. The drop-down list shows only interfaces that are most recently found to be available by Grid Manager during the last discovery cycle.
   - The Wizard page also shows a list of any VLANs that are currently configured in the chosen device (**The** **following** **VLANs** **are** **configured**). This Wizard page allows only the assignment of an existing VLAN in the chosen device to the new port reservation.
   - Check the **Configure** **Port** checkbox to define port control settings for the port reservation.
   - Choose the **Data VLAN** and/or the **Voice** **VLAN **settings you may need for the port assignment. Depending on the selected device, you may or may not be able to apply VLAN settings.
   - Set the **Admin Status** to **Up** if you need to activate the port after assignment in the current task.  
     All port control operations require CLI credentials to be configured. Because some IPAM and DHCP objects will use port control features as part of object creation, CLI credentials are automatically leveraged as part of discovery and definition of port configurations such as Admin Up/Down status. Ensure you have the correct sets of CLI credentials for devices in your network.
   - Enter a **Description** for the port assignment. Infoblox recommends doing so to help other technicians to recognize the port assignment task.
7. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215). When you create a new fixed address whose authority is delegated to a Cloud Platform Appliance, the required cloud extensible attributes and their values are automatically populated.  
   You need to assign a **Subscriber Member Site** to add subscriber service related extensible attribute in order to populate Subscriber Cache.
8. As the final step in the Add Fixed Address wizard, you define when Grid Manager creates the new object by scheduling it. You also schedule when the associated port control task executes (if a port configuration is specified).
   
   - To create the new object and its associated port configuration immediately, select Now. Grid Manager synchronizes the port reservation task to take place at the same time as the activation of the new object.
   - You can choose to have Grid Manager execute the port reservation task at the same time as the Fixed Address object creation. To do so, select **At same time as Fixed Address**.
   - You can choose to have Grid Manager execute the port reservation task at a later time by selecting **Later**. Choose a **Selected time** by entering or selecting a **Start Date** (click the calendar icon to choose a calendar date) and a Start Time, and choose a **Time Zone**.
9. Choose one of the following from the **Save&...** drop-down button menu:
   
   - Click **Save & Close** to add the new object and close the wizard (this is the default).
   - Click **Save & Edit** to add the new object and launch the editor.
   - Click **Save & New** to add the new object and launch the wizard again to add another Fixed Address object.

> **warning**
>
> ### Note
> 
> At any step during the wizard, you can click **Schedule** **for** **Later** to schedule the task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666) You cannot schedule this task when you are creating an object that is within a delegated scope.
> 
> For information on viewing fixed addresses and other DHCP objects, see [*Viewing IPv4 DHCP Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761679).
