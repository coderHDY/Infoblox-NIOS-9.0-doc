---
title: "Configuring IPv4 Reservations"
source: "/space/nios90/280404203"
pageId: "280404203"
---
You can create a reservation as a static IP address for future use. A reservation is a pre-provisioned fixed address that is associated with a MAC address of 00:00:00:00:00:00. Since 00:00:00:00:00:00 is not a real MAC address, no client can receive this IP address from the address pool. You can reserve this static IP address and assign it to a client in the future.  
To create a reservation, you can do one of the following:

- Add a reservation.
- Convert a fixed address or a dynamic address with an active lease to a reservation. For information, see* *[*Converting Objects Associated with IP Addresses*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv4-and-ipv6-addresses/converting-objects-associated-with-ip-addresses).
- Define a fixed address with an IP address. For information, see [*Adding IPv4 Fixed Addresses*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-fixed-addresses/adding-ipv4-fixed-addresses)*.*

# Adding IPv4 Reservations

> **warning**
>
> ### Note
> 
> At any step during the wizard, you can click **Schedule** **for** **Later** to schedule the task. In the *Schedule* *Change*  
> panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).

To create a reservation:

1. Navigate to the network to which you want to add a reservation, and then select **IPv4** **Reservation** from the Add drop down menu.  
   or  
   From any panel in the DHCP tab, expand the Toolbar and click **Add** -&gt; **IPv4** **Reservation**.
2. In the *Add Reservation* wizard, select one of the following and click **Next**:
   
   - **Add Reservation**   
     or
   - **Add Reservation using Template**  
     Click **Select** **Template** and select the template that you want to use. Note that when you use a template to create a reservation, the configurations of the template apply to the new address. The appliance automatically populates the reservation properties in the wizard. You can then edit the pre-populated properties.
3. Complete the following:
   
   - **Network**: The displayed network address can either be the last selected network or the network from which you are adding the DHCP range. If no network address is displayed or if you want to specify a different network, click **Select Network**. When there are multiple networks, Grid Manager displays the *Select Network* dialog box from which you can select one.
   - **IP Address:** Enter the IP address that you want to reserve for manual assignment, or click **Next Available IP** to obtain the next available IP address. For information about obtaining the next available IP address, see [*Adding IPv4 Fixed Addresses*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-fixed-addresses). Note that for Cloud Network Automation, Next Available IP is not available if the reservation you want to create is within a delegated range.
   - **Name:** Optionally, enter a name for the reservation.
   - **Comment:** Optionally, enter additional information about the reservation.
   - **Disabled:** Select this if you do not want the DHCP server to use this reservation at this time.  
     The **Cloud** section appears when the Cloud Network Automation license is installed on the Grid Master. For information, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation). This section displays the following information:
     
     - **Cloud** **Usage**: This field indicates whether this object is associated with any specific cloud extensible attributes or within a scope of delegation. It can be one of the following:
       
       - **Cloud** **from** **adapter**: Indicates that this object has been created by a cloud adapter and it may or may not be within a scope of delegation at the moment.
       - **Cloud** **from** **delegation**: Indicates that this object is within the scope of delegation or the object itself defines a scope of authority delegation, and it is not created by a cloud adapter.
       - **Used** **by** **cloud**: Indicates that this network or network container is associated with the extensible attribute **Is** **External** or **Is** **Shared** and the value is set to True, which implies the network is a private or shared network managed by the CMP, and it is not **Cloud** **from** **adapter** or **Cloud** **from** **delegation**.
       - **Non-cloud**: The object is a regular NIOS object and is not within the scope of any authority delegation nor is it associated with any of these extensible attributes: **Cloud** **API** **Owned,** **Is** **External** or **Is** **Shared**. NIOS admin users can modify this object based on their permissions.
       - **Owned** **By**: A cloud object can be owned by the Grid Master or the cloud adapter. When the object is created by the Grid Master, this shows **Grid**. If the object is created by the cloud adapter, this shows **Adapter**.  
           
         **Delegate** **authority** **from** **the** **Grid** **Master**
         
         - **Delegate To**: This field indicates whether the authority for the object you want to create has already been delegated. If so, it displays the name of the delegation.
4. Click **Next** to configure or override DHCP options as described in [*Defining IPv4 DHCP Options*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options).
5. (*Applies only to Network Insight*) *This step is not required for creating a new IPv4 Reservation*. In the following Wizard step, you can optionally define the following identification values and settings for the new object's port reservation:
   
   - Choose the **Device Type**: **Router**, **Switch-Router**, **Switch**, **MSFT** (Microsoft) **Server**, **NetMRI**, **NIOS**, **VNIOS**, or **ESX** (VMware) **Server**.  
     The values on this page are not required for defining the actual port reservation in a later wizard step.  
     Certain device types could be descriptively relevant based on the type of object you are creating. As an example, the **MSFT** **Server** designator helps identify the new object as a Microsoft Hyper-V Host. The **ESX** **Server** designator can be used to identify the new object as a VMware ESX Host. These values are not required and will not affect the functionality of the object.
   - Choose the **Device** **Vendor**: **Cisco**, **Juniper**, **Aruba**, **Dell**, **Infoblox**, or **HP**.
   - You can also enter a **Location** and a **Description**. These values are advisory and not required for configuration.  
     After you define this group of settings, you will still need to define a device port reservation, which is done in a later step.
6. (*Applies only to Network Insight*) Click **Next** to initiate or disable discovery of the new IPv4 reservation.
   
   - Choose either **Exclude from Network Discovery** or **Enable Immediate Discovery**. If you choose to Exclude, discovery will not execute on the object. If you choose **Enable Immediate Discovery**, discovery will execute on the object after you save your settings. You may also choose to leave both options disabled.
   - By default, the new object inherits its SNMP credentials from those defined at the grid level. Should you wish to override them for a local set of credentials, check the **Override Credentials** checkbox and select the **SNMPv1/SNMPv2** or **SNMPv3** option and enter the locally used credentials. For more information, see the sections [*Configuring SNMP1/v2 Credentials for Polling*](/nios90/by-id/1343325342) and [*Configuring SNMPv3 Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties/configuring-device-credentials/configuring-snmpv3-credentials) for a complete description of SNMP credentials for discovery.
   - For the new object, you can check the **Override CLI Credentials** checkbox to override the inherited set of CLI credentials taken from the Grid level. This set of credentials may be used for the device that is directly associated with the new object (in this case, an IPv4 Reservation) in its port reservation.
   - You can also click **Test CLI Credentials** to select and test a set of CLI login credentials against a device based on its IP address.
   - Port control tasks require CLI credentials for the involved devices. (If you are not using port control for the new object, usage of CLI credentials is not required.) Because some IPAM and DHCP objects will use port control features as part of object creation, CLI credentials are automatically leveraged as part of discovery. Ensure you have the correct sets of CLI credentials for devices in your network. For more information, see the section [*Configuring CLI Discovery Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties/configuring-device-credentials/configuring-cli-credentials).
   - SSH is the default for CLI operations. Check the **Allow** **Telnet** checkbox if you know the device involved in the object assignment may support Telnet but may not support SSH, or if you want Telnet as an option.
7. (*Applies only with Network Insight*) Click **Next** to define optional device port association for the IPv4 reservation. *This step is optional and not required for creating the new IPv4 Reservation*. This feature set is also termed *port control* in the NIOS/Grid Manager system. The device to which the new object will be associated should already be discovered and managed from the Infoblox Grid.
   
   - Begin by checking the **Reserve Port** checkbox. Note that reserving a switch port does not guarantee its availability.  
     Optionally, you can skip connecting port configuration by clicking **Next**.  
     Click the **Clear** button to remove the selected device from the configuration.
   - Click the **Select** **Device** button to choose the device for which the port reservation will be associated. You should know the identity of the device to whose interface the new object will be associated before taking this step. For more information, see the section [*Using the Device Selector*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/discovering-devices-and-networks/Discovering+Devices+and+Networks#Using-the-Device-Selector)*.*
   - After choosing the device, choose the **Interface** with which the reservation will be bound. The drop-down list shows only interfaces that are most recently found to be available by Grid Manager during the last discovery cycle.
   - The Wizard page also shows a list of any VLANs that are currently configured in the chosen device (**The** **following** **VLANs** **are** **configured**). This Wizard page allows only the assignment of an existing VLAN in the chosen device to the new port reservation.
   - Check the **Configure** **Port** checkbox to define specific port configuration settings for the port reservation.
   - Choose the **DataVLAN** and/or the **VoiceVLAN** settings you may need for the port assignment. Depending on the selected device, you may or may not be able to apply VLAN settings.
   - Set the **AdminStatus** to **Up** if you need to activate the port after assignment in the current task.  
     All port control operations require CLI credentials to be entered into Grid Manager. Because some IPAM and DHCP objects will use port control features as part of object creation, CLI credentials are automatically leveraged as part of discovery and definition of port configurations such as Admin Up/Down status. Ensure you have the correct sets of CLI credentials for devices in your network.
   - Enter a **Description** for the port reservation. Infoblox recommends doing so to help other technicians to recognize the port assignment task.
8. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).  
   You need to assign a **Subscriber Member Site** to add subscriber service related extensible attribute in order to populate Subscriber Cache.
9. As the final step in the Add IPv4 Reservation wizard, you define when Grid Manager creates the new object by scheduling it. You also schedule when the associated port control task executes (if a port configuration is specified).
   
   - To create the new IPv4 Reservation and its associated port reservation immediately, select Now. Grid Manager synchronizes the port control task to take place at the same time as the activation of the new object.
   - You can choose to have Grid Manager execute the port control task at the same time as the object creation. To do so, select **At** **same** **time** **as** **IPv4** **Reservation**.
   - You can choose to have Grid Manager execute the port control task at a later time by selecting **Later**. Choose a **Selected** **time** by entering or selecting a **Start** **Date** (click the calendar icon to choose a calendar date) and a **Start** **Time**, and choose a **Time** **Zone**.
10. Choose one of the following from the **Save&...** drop-down button menu:
   
   - Click **Save & Close** to add the new object and close the wizard (this is the default).
   - Click **Save & Edit** to add the new object and launch the editor.
   - Click **Save & New** to add the new object and launch the wizard again to add another IPv4 Reservation object.
11. Click **Restart** if it appears at the top of the screen.

> **warning**
>
> ### Note
> 
> At any step during the wizard, you can click **Schedule** **for** **Later** to schedule the task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks)[.](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks) You cannot schedule this task when you are creating an object that is within a delegated scope.



# Modifying IPv4 Reservations

To modify an IPv4 reservation:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** section -&gt; *network* -&gt; *reservation* checkbox, and then click the Edit icon.
2. The *Reservation* *Address* editor contains the following tabs from which you can modify data:
   
   - **General**: Modify the fields, except the network address, as described in Adding IPv4 Reservations above.
   - **Device** **Information**: Define general identity/type information for the type of device to which your new object connects. For more information, see Step 5 in the previous section.
   - **IPv4** **DHCP** **Options:** Keep the inherited DHCP options or override them and enter unique settings for the reservation. For information, see [*Defining IPv4 DHCP Options*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options/defining-ipv4-dhcp-options).
   - **IPv4** **Discovered** **Data**: Displays the discovered data of the reservation. For information, see [*Viewing Discovered Data*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/viewing-discovered-data).
   - **Port** **Reservation**: Review and edit any device port reservations that may be defined for the current object, or create a new port reservation and schedule it. For a closer look, see the section [*Port Control Features in Network Insight*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/port-control-features-in-network-insight)[,](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/editing-interfaces-in-a-device) and steps 4-8 in the section Adding IPv4 Reservations above.
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with a reservation. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes). You can edit values of inheritable extensible attributes by double clicking on the respective column. If an extensible attribute has an inherited value, then the cell is highlighted in blue when you perform an inline editing. The *Descendant* *Actions* dialog box is displayed when you click **Save**. For information, see [*Managing Inheritable Extensible Attributes at the Parent and Descendant Level*](/nios90/by-id/1340802820). If you delete the value of an inheritable extensible attribute at the parent level, you can choose to preserve the descendant value or remove it. For information, see [*Deleting Inheritable Extensible Attributes Associated with Parent Objects*](/nios90/by-id/1340475322).
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see [ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-radius/managing-permissions)[*Managing Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-radius/managing-permissions).
3. Optionally, you can click **Toggle Advanced Mode** to display the following tabs from which you can modify advanced data.
   
   - **IPv4 DDNS**: Keep the inherited DDNS settings or override them and enter unique settings for the reservation. Note that you must click **Override** and select **Enable DDN Supdates** for the DDNS settings you configure in this tab to take effect. For information, see [*Enabling DDNS for IPv4 and IPv6 DHCP Clients*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/configuring-dhcp-for-ddns)[.](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/configuring-dhcp-for-ddns/Configuring+DHCP+for+DDNS#bookmark1924)
   - **IPv4 BOOTP/PXE**: You can keep the inherited BOOTP properties or override them and enter unique settings for the reservation. For information, see [*Configuring IPv4 BOOTP and PXE Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-ipv4-bootp-and-pxe-properties).
   - **Filters**: You can keep the inherited IPv4 logic filters or override them and add a new IPv4 logic filter. For information, see [*Applying*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects)[*Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects)[*to*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects)[*DHCP*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects)[*Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects)[.](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects)  
       
     Note that Grid Manager displays both the basic and advanced tabs the next time you log in to the GUI.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

> **warning**
>
> ### Note
> 
> At any step during the wizard, you can click **Schedule** **for** **Later** to schedule the task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks). You cannot schedule this task when you are creating an object that is within a delegated scope.
