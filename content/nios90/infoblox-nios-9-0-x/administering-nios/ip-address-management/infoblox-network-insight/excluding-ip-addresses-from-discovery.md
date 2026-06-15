---
title: "Excluding IP Addresses from Discovery"
source: "/space/nios90/280406210"
pageId: "280406210"
---
> **warning**
>
> ### Note
> 
> You use the IPv4 Network or IPv6 Network editors to exclude IP addresses or ranges of IP addresses from discovery within the specified network. For more information, see [*Disabling Discovery for a Network*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/disabling-discovery-for-a-network).

Host records, fixed address and IPv4 reservations can be excluded from discovery. You may also exclude an IP address or a range of IPs within a network from discovery.

> **warning**
>
> ### Note
> 
> You may create a network and choose not to discover it at that time, by disabling both **Enable** **Immediate** **Discovery** and **Enable** **Discovery**. If you disable the **Enable** **Discovery** checkbox, the network will never be discovered unless you change the setting again at a later time.  
> Conversely, you can explicitly exclude specific IPs or IP ranges from discovery. Discovery will never take place on these IPs unless the admin specifically changes their exclusion setting.

Administrators can specify IPv4 and/or IPv6 addresses that must be immediately discovered by the appliance. Some devices may need exclusion because they do not support SNMP, or for other organizational reasons.  
Devices matching IP addresses selected for immediate discovery (using the **Discover** **Now** feature described in [*Using Discover Now to Discover an Existing Objec*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/discovering-devices-and-networks/Discovering+Devices+and+Networks/#UDNDEO)[t](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/discovering-devices-and-networks)) are given one-time priority over other discovered devices, for data collection and counting toward any device found matching the license limits.  
A device specified through an IP address can also be excluded from discovery or management.

# Quick Exclusion of IPs from Discovery

You can use the IPAM IP Map or IP List page to quickly exclude IP addresses and selected ranges of IP addresses from discovery. For example, you may have Infoblox appliances or routers that provide the gateway to networks that are already managed by Grid Manager, or devices on which you do not wish to have discovery operations take place.

1. From the **Data** **Management** tab, select the **IPAM** tab. The IPAM Home page appears.
2. Click on any network or network container in the list. The **IP** **Map** appears for the selected network.
   
   Note that you may also use the **List** page for the selected network to exclude IPs or selected ranges of IPs. However, you have to page through or search through the pages comprising the list view to locate the IPs you want to exclude. (If you know the IP address value in the **List** view but it does not appear on the page, enter it in the **Go** **to** field to search for the IP.) The **IP** **Map** view allows you to view every IP address in a selected network, such as a /24 prefix.
3. Select one or more IPs in the map. SHIFT+click to select a series of contiguous IPs. CTRL+click to select non-contiguous IPs.
4. Expand the Toolbar and click **Exclusion** **–&gt;** **Enable** **Exclusion**. The selected IP addresses are excluded from any discovery actions.

> **warning**
>
> ### Note
> 
> You can click the Action icon  for any List record and choose **Exclusion–&gt;EnableExclusion**.

To locate an IP to exclude within a network container:

1. From the **Data** **Management** tab, select the **IPAM** tab. The IPAM Home page appears.
2. Select the network container by clicking it. The IPAM Home page changes to display the List page, showing the list of networks within the container.
3. Click the network that has the IP in its space that you wish to exclude.
4. Select the network IP address from the **List** table. If you know the IP address value but it does not appear on the page, enter it in the **Go** **to** field to search for the IP.
5. Expand the Toolbar and choose **Exclusion** **–&gt;** **Enable** **Exclusion**.

A parent network container may exclude IPs, and you may add and remove discovery exclusions within network containers. You can drill down to the child networks in the **Net** **Map** view to perform exclusions on IPs. For example, consider a /16 network container that has a number of smaller /24 child networks within it. Right-clicking on any child network in the network container and choosing **Edit** from the popup menu, opens the editor with its **Discovery** **Exclusions** tab, where you can perform exclusions within the child network.

# Creating a New IPAM Object and Excluding it from Discovery

You can create a new object from the main **Data** **Management** **–&gt;** **IPAM** or **Data** **Management** **–&gt;** **DHCP** pages.

1. From the **Data** **Management** tab, select the **IPAM** or **DHCP** tab.
   
   1. For IPAM, the **IPAM** home page appears, listing all networks reachable by IPAM.
   2. For DHCP, the home **Networks** page appears, showing all networks reachable by DHCP.

> **warning**
>
> ### Note
> 
> Note the network lists between IPAM and DHCP will likely differ, because networks can be set to be Disabled from DHCP. IPAM provides a complete list of all networks configured or discovered by Grid Manager.
> 
> 

2. To select a network, do one of the following:

- On the **IPAM** page, select the network.
- Click **DHCP–&gt;Networks** and then select the network.

3. On the Toolbar, expand the **Add **drop-down list and then select the object type from the drop-down menu, such as **Host**, **Fixed Address **–&gt;**IPv4**, or another object type.

4. In the second Wizard step, click **NextAvailableIP** to obtain the next available IP address in the chosen network. For more information about obtaining the next available IP address, see [*About the Next Available Network or IP*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-the-next-available-network-or-ip-add).

> **warning**
>
> ### Note
> 
> For adding a host record, the first step in the Add Host Wizard requires adding an IP address.

5. If the network of the IP address is served by a Grid member, Grid Manager displays the **AssignIPAddressby** section, with its **MACAddress**, **DHCPClientIdentifier** and **DHCPRelayAgent** settings. Select the different options as needed to define a fixed IP Address or another object.  
   6. Click **Next** to continue to the DHCP Options page in the wizard.

> **warning**
>
> ### Note
> 
> For more information about DHCP Options configuration, see [*About the Next Available Network or IP*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-the-next-available-network-or-ip-add)*.*

7. If you do not wish to configure DHCP Options for this Fixed IP, click **Next** to go to the following Wizard step.  
   8. (*Optional*) In the **DeviceInformation **page, select the Device Type and the Device Vendor, or, if you do not wish to configure device settings for the current object, click Next to go to the next Wizard step, for defining discovery settings.

> **warning**
>
> ### Note
> 
> For more information about Device Information settings, see [*Creating Port Reservations for IPAM Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/creating-port-reservations-for-ipam-objects).

9. Choose from the options on the Step 5 Wizard page:

- Check **Exclude** **from** **Network** **Discovery** to prevent the object from being probed by discovery.
- (Enabled by default) If you want immediate discovery of the current Fixed IP, select the **Enable** **Immediate** **Discovery** checkbox.  
  You may disable both checkboxes. Doing so does not disable discovery for the current object–discovery is simply performed by Network Insight on its own internal timetable.
- To override SNMP credentials for either SNMPv1/v2 or for SNMPv3 for the current Fixed IP, select the **Override** **Credentials** checkbox.  
  You can enter both a SNMPv1/v2 Read community string and an SNMPv3 credential, or enter only the single type you need. Each can be selected and edited in turn.
  
  - Select **SNMPv1/v2** and enter the **Read** community string;  
    –or–
  - Select **SNMPv3** and enter the device admin account name, and the **Auth** **Protocol**, **Auth** **Password**, **Privacy** **Protocol** and **Privacy** **Password** values where necessary.
- You can apply a set of CLI Credentials to the specific fixed address object. To override the inherited CLI credentials from the Grid, select the **Override** **CLI** **Credentials** checkbox. You can enter the admin user **Name** and **Password** values and, if necessary, an **Enable** **Password**. The values you enter here are specific only to the current object.

> **warning**
>
> ### Note
> 
> Clicking **Schedule** **for** **Later** is a navigational button to allow you to skip quickly to the scheduling step in the Wizard. You can return at any time to complete remaining Wizard steps to finish creating the object. You may click the **Schedule** **for** **Later** button at any time in the Wizard process. For more information, see [*Scheduling New IPAM/DHCP Objects and Associated Port Configurations*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-new-ipam-dhcp-objects-and-associated-).

10. (*Optional*) Click **Next** to go to the sixth Wizard step, which governs **Reserve** **Port** and **Configure** **Port** settings. (For more information, see [*Creating Port Reservations for IPAM Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/creating-port-reservations-for-ipam-objects).) Click **Next** when finished with settings.  
  11. If necessary, add or apply any extensible attributes necessary for the new record. Click **Next**.  
  12. The final Wizard page governs scheduling of the object creation task and the optional port reservation task. Click **Save & Close**.

# Excluding IP Addresses in Grid Manager

You may exclude IP addresses from discovery from within a number of different contexts in Grid Manager. Under IPAM, you can exclude in the IP Map and IP List pages. The IP List page provides an Exclude data column that directly shows the exclusion status for all IPs in the selected network. Various objects, such as host records, IPv4 and IPv6 fixed addresses, and IPv4 reservations, may be excluded from discovery.  
You may view excluded IP addresses in the IP List page or in the network editor's **Exclusions** tab.
