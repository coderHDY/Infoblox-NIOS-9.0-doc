---
title: "Adding Host Records"
source: "/space/nios90/1346274138"
pageId: "1346274138"
---
You can add host records from the Toolbar of the **IPAM**, **DHCP** and **DNS** tabs of the **Data** **Management** tab and from the Tasks Dashboard. For information about the Tasks Dashboard, see [*Tasks Dashboard*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard).  
When you create a host record, you must specify its zone and at least one IP address. If the zone of the host record is associated with one or more networks, the IP addresses must belong to one of the associated networks. If a zone of a host record contains IDNs, the appliance displays the zone name in the native character set.  
For Cloud Network Automation, you can create host records within a delegated network view only when you enable DNS for the host record.  
To add a host from the **Data** **Management** tab:

1. From the **IPAM**, **DHCP** or **DNS** tab of the **Data** **Management** tab, expand the Toolbar.
2. Click **Add** and select the option to add a host from the drop-down menu.
3. In the first page of the *Add* *Host* wizard, do the following:
   
   - **Name**: If Grid Manager displays a zone name, enter the host name here. The displayed zone name can either be the last selected zone or the zone from which you are adding the host. If no zone name appears or if you want to specify a different zone, click **Select** **Zone**. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box. Click a zone name in the dialog box, and then enter a unique name for the host. The name you enter is prefixed to the DNS zone name that is displayed, and the complete name becomes the FQDN (fully qualified domain name) of the host. For example, if the zone name displayed is [corpxyz.com](http://corpxyz.com) and you enter admin, then the FQDN is [admin.corpxyz.com](http://admin.corpxyz.com).
   - **Enable** **in** **DNS**: This is selected by default. It enables DNS service for the host. If you clear this checkbox, DNS does not serve this host and you cannot assign it to a zone.
   - **Protected**: This is selected by default. To mark the record as protected in order to restrict DDNS updates to this record, select the Protected checkbox. This applies to both static and dynamic records.
     
     Note that if you select to protect the record, ensure that you also select the Prevent dynamic updates to RRsets containing protected records checkbox in the advanced updates properties of the Grid, view, zone, or Standalone appliance.
   
   Alternatively, you can protect records by selecting them, individually or in bulk, in the Resource Records Viewer and clicking Protect Records -&gt; Enable Protection in the Toolbar.
   
   - **DNS** **View**: Displays the DNS view for the host record. This appears only when you enable the host record in DNS.
   - **Host** **Name** **Policy**: Displays the host name policy of the selected zone. This appears only when you enable the host record in DNS.
   - **RRset** **Order**: Select one of the following RRset orders that the appliance uses to return A and AAAA records of the host. This checkbox appears only when you have enabled the configuration of RRset order for the Grid and there are multiple IP addresses in this host record. For information about how to enable this feature, see [*Enabling the Configuration of RRset Orders*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/enabling-the-configuration-of-rrset-orders).
     
     - **Cyclic**: The records are returned in a round robin pattern. This is the default.
     - **Fixed**: The records are returned in the order you specify in this host record. When you select this checkbox, the appliance displays up and down arrows next to the IPv4 and IPv6 address tables. You can use these arrows to reorder the address list. The appliance returns the A and AAAA records of this host based on the order you define in the address tables.
     - **Random**: The records are returned in a random order.  
       Note that when you specify **Fixed** as the RRset order, the appliance places the resource records as follows:
     - A and AAAA records of the host in the fixed order you specify in the address tables. Note that the order of the returned A and AAAA records are independent of each other.
     - Other A and AAAA records in an undefined order.
     - Other record types in the default cyclic order.  
       For more information about RRset order, see [*Enabling the Configuration of RRset Orders*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/enabling-the-configuration-of-rrset-orders).
   
   - In the **IPv4** **Addresses** and **IPv6** **Addresses** sections, specify the IP addresses of the host record. Click the Add icon do one of the following:
     
     - Select **Next** **Available** **IP** **Address** to retrieve the next available IP address in a network. Infoblox recommends this option to ensure that you assign an IP address from the appropriate network.  
       If the host record is in a zone that has one associated network, Grid Manager retrieves the next available IP address in that network.  
       If the host record is in zone that has multiple associated networks, the *Network* *Selector* dialog box lists the associated networks. If the zone has no network associations, the *Network* *Selector* dialog box lists the available networks. When you select a network, Grid Manager retrieves the next available IP address in that network.  
       If you want to enter a link-local IPv6 address, you must enter an IPv4 address and the host MAC address first, and then click the Add (**+**) icon again to enter the link-local IPv6 address. When you select the link-local IPv6 address, the MAC address is automatically filled in. For information, see [*Understanding DNS for IPv6*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/infoblox-dns-service/understanding-dns-for-ipv6).  
       Optionally, you can delete an IP address from the host by selecting an IP address in the table and clicking the Delete icon.  
       or
     - Select **Add** **Address** to enter an IPv4 or IPv6 address. You can also enter an IPv6 prefix. Note that when you use this option, you could specify an IP address from a network that has not yet been defined. To avoid this, use the **Next** **Available** **IP** **Address** option instead.
     - **MAC** **Address**: For an IPv4 address, enter the MAC address of the network device associated with this host IP address. Note that you must enter a MAC address if DHCP is enabled for the host IP address.  
       or
     - **DUID:** For an IPv6 address, enter the DHCP Unique Identifier (DUID) of the network device associated with this host IP address. Note that you must enter a DUID if DHCP is enabled for an IPv6 host address.
     - **DHCP**: Select this to enable the DHCP services to manage the host IP address. If you do not select this option, the host IP address is not managed by the DHCP server.
     - **Comment**: Optionally, enter additional information about the host record.
     - **Disable:** Select this option to temporarily disable the host record. For example, you might want to disable a host when you need to update the network device.  
       The **Cloud** section appears when the Cloud Network Automation license is installed on the Grid Master. For information, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation). This section displays the following information:
     - **Cloud** **Usage**: This field indicates whether this object is associated with any specific cloud extensible attributes or within a scope of delegation. It can be one of the following:
       
       - **Cloud** **from** **adapter**: Indicates that this object has been created by a cloud adapter and it may or may not be within a scope of delegation at the moment.
       - **Cloud** **from** **delegation**: Indicates that this object is within the scope of delegation or the object itself defines a scope of authority delegation, and it is not created by a cloud adapter.
       - **Used** **by** **cloud**: Indicates that this network or network container is associated with the extensible attribute **Is** **External** or **Is** **Shared** and the value is set to True, which implies the network is a private or shared network managed by the CMP, and it is not **Cloud** **from** **adapter** or **Cloud** **from** **delegation**.
       - **Non-cloud**: The object is a regular NIOS object and is not within the scope of any authority delegation nor is it associated with any of these extensible attributes: **Cloud** **API** **Owned,** **Is** **External** or **Is** **Shared**. NIOS admin users can modify this object based on their permissions.
     - **Owned** **By**: A cloud object can be owned by the Grid Master or the cloud adapter. When the object is created by the Grid Master, this shows **Grid**. If the object is created by the cloud adapter, this shows **Adapter**.  
       Delegate authority from the Grid Master
     - **Delegate To**: This field indicates whether the authority for the object you want to create has already been delegated. If so, it displays the name of the delegation.
4. (*Applies* *only* *to* *Network* *Insight*) In the current Wizard step, you can optionally define the following identification values and settings for the new object's port reservation:
   
   - Choose the Device Type: Router, Switch-Router, Switch, MSFT (Microsoft) Server, **NetMRI**, **NIOS**, **VNIOS**, or ESX (VMware) Server.  
     The values on this page are not required for defining the actual port reservation in a later wizard step.
   - Choose the Device Vendor: Cisco, Juniper, Aruba, Dell, **Infoblox**, or HP.
   - You can also enter a Location and a Description. These values are advisory and not required for configuration.  
     After you define this group of settings, you will still need to define a device port reservation.
5. (*Applies* *only* *with* *Network* *Insight*) Click **Next** to initiate or disable discovery of the new host.
   
   - Choose either **Exclude** **from** **Network** **Discovery** or **Enable** **Immediate** **Discovery**. If you choose to Exclude, discovery will not execute on the host. If you choose **Enable** **Immediate** **Discovery**, discovery will execute on the host after you save your settings. You may also choose to leave both options disabled.
   - By default, the new host inherits its SNMP credentials from those defined at the grid level. Should you wish to override them for a local set of credentials, check the **Override** **Credentials** checkbox and select the **SNMPv1/SNMPv2** or **SNMPv3** option and enter the locally used credentials. For more information, see the sections [*Configuring Discovery Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties)for a complete description of SNMP credentials for discovery. (You can also test SNMP credentials to ensure they work before use.)
   - For the new object, you can check the **Override** **CLI** **Credentials** checkbox to override the inherited set of CLI credentials taken from the Grid level. This set of credentials may be used for the device that is directly associated with the new object (in this case, a Host) in its port reservation.
   - You can also click **Test** **CLI** **Credentials** to enter and test a set of CLI login credentials against a device based on its IP address.  
     Port control operations require CLI credentials for the involved devices. (If you are not using port control for the new object, usage of CLI credentials is optional.) Because some IPAM and DHCP objects will use port control features as part of object creation, CLI credentials are automatically leveraged as part of discovery. Ensure you have the correct sets of CLI credentials for devices in your network. For more information, the section [*Configuring Discovery Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties).
   - SSH is the default for CLI operations. Check the **Allow** **Telnet** checkbox if you know the device involved in the object assignment may support Telnet but may not support SSH, or if you want Telnet as an option.
6. (*Applies* *only* *with* *Network* *Insight*) Click **Next** to define switch port connectivity for the device that will be associated with the new host record. *This* *step* *is* *optional* *and* *not* *required* *for* *creating* *the* *new* *host* *record*. This feature set is also termed port control in Grid Manager. The device to which the new host record will be associated should already be discovered and managed from Grid Manager.
   
   - Begin by checking the Reserve Port checkbox. Note that reserving a switch port does not guarantee its availability.  
     Optionally, you can skip connecting port configuration by clicking Next.  
     Click the **Clear** button to remove the selected device from the configuration.
   - Click the Select Device button to choose the device for which the port reservation will be associated. You should know the identity of the device to whose interface the new object will be associated before taking this step. For more information, see the section [*Using the Device Selector*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/discovering-devices-and-networks).
   - After choosing the device, choose the Interface with which the port reservation will be bound. The drop-down list shows only interfaces that are most recently found to be available by Grid Manager during the last discovery cycle. This list will not include any ports that are Administratively Up and Operationally Up or that are otherwise already assigned to other networks or objects.
   - The Wizard page also shows a list of any VLANs that are currently configured in the chosen device (**The** **following** **VLANs** **are** **configured**). This Wizard page allows only the assignment of an existing VLAN in the chosen device to the new port reservation.
   - Check the Configure Port checkbox to define specific port control settings for the port reservation.
   - Choose the Data VLAN and/or the Voice VLAN settings you may need for the port assignment. Depending on the selected device, you may or may not be able to apply VLAN settings.
   - Set the Admin Status to Up if you need to activate the port after assignment in the current task.  
     All port control operations require CLI credentials to be entered into Grid Manager. Because some IPAM and DHCP objects will use port control features as part of object creation, CLI credentials are automatically leveraged as part of discovery and configuration of port configurations such as Admin Up/Down status.  
     Ensure you have the correct sets of CLI credentials for devices in your network.
   - Enter a Description for the port assignment. Infoblox recommends doing so to help other technicians to recognize the port assignment task.
7. Click **Next** to define extensible attributes. For information, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
8. As the final step in the Add Host wizard, you define when Grid Manager creates the new object by scheduling it. As a separate task, you also schedule when the associated Port Configuration task executes.
   
   - To create the new Host and its associated port reservation immediately, select Now. The port control event is automatically synchronized to take place at the same time as the activation of the new host.
   - You can choose to have Grid Manager execute the port reservation at the same time as the host object creation. To do so, select **At** **same** **time** **as** **Host**.
   - You can have Grid Manager execute the port reservation at a later time by selecting Later. Choose a **Selected** **time** by entering or selecting a Start Date (click the calendar icon to choose a calendar date) and a Start Time, and choose a Time Zone.
9. Choose one of the following from the **Save** **&** **...** drop-down button menu:
   
   - Click **Save** **&** **Close** to add the Host object and close the wizard (this is the default).
   - Click **Save** **&** **Edit** to add the Host object and launch the editor.
   - Click **Save** **&** **New** to add the Host object and launch the wizard again to add another Host object.
