---
title: "Discovering Devices and Networks"
source: "/space/nios90/280666200"
pageId: "280666200"
---
To start discovery on connected networks, complete the following:

1. Ensure that your appliances are licensed for discovery.
2. Add the needed seed routers to each Probe appliance, as described in [*Defining Seed Routers for Probe Member*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties)[s](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties)*.*
3. Add the necessary SNMPv1/v2 and SNMPv3 credentials at the Grid level and/or Member/Probe level. For information, see [*Configuring SNMP1/v2 Credentials for Polling*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties), [*Configuring SNMPv3 Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties), and [*Defining Seed Routers for Probe Members*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties).
4. If necessary, add CLI Credentials, including device admin username/password tuples and Enable passwords, at the Grid level and/or Member/Probe level, as described in [*Configuring CLI Discovery Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties) and [*Testing SNMP and CLI Credentials*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties).
5. If necessary, enable the use of DHCP routers and servers as seeds to increase device discovery, as described in [*Configuring SNMP1/v2 Credentials for Polling*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties).
6. If you have extensive end host Ethernet segments connected to Ethernet switches, enable switch port discovery, as described in [*Defining Seed Routers for Probe Members*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties)*.*

With these settings, the Probe appliances automatically begin discovering network infrastructure devices.  
You can elect to immediately discover or schedule discovery of new objects that you create and enable under IPAM or DHCP. Objects that allow immediate discovery include the following:

- **IPv4** **Fixed** **Address** (see [*Configuring IPv4 Fixed Addresses*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-fixed-addresses) for the complete procedure).  
  You can **Enable** **Immediate** **Discovery** or **Exclude** **from** **Network** **Discovery** after creating the IPv4 fixed address, and override the SNMP credentials if necessary.
- **IPv6** **Fixed** **Address** (see [*Configuring IPv6 Fixed Addresses*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-fixed-addresses)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-fixed-addresses)for the complete procedure).  
  You can **Enable** **Immediate** **Discovery** or **Exclude** **from** **Network** **Discovery** after creating the fixed address, and override the SNMP credentials if necessary.
- **IPv4** **Reservation** (see [*Configuring IPv4 Reservations*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-reservations)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-reservations)for the complete procedure).  
  You can **Enable** **Immediate** **Discovery** or **Exclude** **from** **Network** **Discovery** after creating the IPv4 reservation, and override the SNMP credentials if necessary.
- **Host** (see [*Adding Host Records*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/about-host-records) for the complete procedure).  
  You can **Enable** **Immediate** **Discovery** or **Exclude** **from** **Network** **Discovery** after creating the host, and override the SNMP credentials if necessary.
- **IPv4** **Network** (see [*Configuring IPv4 Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks) for the complete procedure).  
  You can **Enable** **Immediate** **Discovery** (option is enabled by default) and override inherited discovery **Polling** **Options** for the new network.
- **IPv6** **Network** (see [*Configuring IPv6 Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-networks) for the complete procedure).  
  You can **Enable** **Immediate** **Discovery** (option is enabled by default) and override inherited discovery **Polling** **Options** for the new network.
- **IPv4** **DHCP** **Range** (see [*Configuring IPv4 Address Ranges*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-address-ranges)* *for the complete procedure).  
  You can **Enable** **Immediate** **Discovery** (option is enabled by default) and override inherited discovery **Polling** **Options** for the new IPv4 DHCP range.
- **IPv6** **DHCP** **Range** (see [*Configuring IPv6 Address Ranges*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-address-ranges)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-address-ranges)for the complete procedure).  
  You can **Enable** **Immediate** **Discovery** (option is enabled by default) and override inherited discovery **Polling** **Options** for the new IPv6 address range.

During configuration, you can choose to **Exclude** **from** **Network** **Discovery** if you wish to postpone discovery for specific object types.

> **warning**
>
> ### Note
> 
> Individual IP addresses within a network, and specific object types (IPv4 reservation, fixed address, and host), may be excluded from discovery. You must explicitly select **Enable** **Discovery** for other object types (IPv4 and IPv6 Ranges, IPv4 and IPv6 Networks); you can optionally **Enable** **Immediate** **Discovery**.  
> If you choose not to perform immediate discovery, but do **Enable** **Discovery**, the new network or other object is discovered at a normal time determined by Network Insight.

You can manually perform discovery on any object at any time by selecting the object and choosing  **Discover** **Now** from the Toolbar. For more information, see [Using Discover Now to Discover an Existing Object](#UsingDiscoverNow). When you do so, you see a status icon appear in the **Discover** **Now** data column for the object under IPAM, in the **Data** **Management** **–&gt;** **DHCP** page and other locations.  
By default, Grid discovery settings are the prevailing settings for all newly created objects. You can override basic discovery polling options for networks and DHCP ranges allowing immediate discovery.  
In such cases, local settings take priority. Credentials cannot be overridden for networks and DHCP ranges,

# Using Discover Now to Discover an Existing Object

> **warning**
>
> ### Note
> 
> If after you select a a network, object or IP and the **Discover** **Now** button is not enabled, make sure the network or other object has a discovery Probe member assigned to it.

After you create any supported IPAM object, you may wish to perform discovery on it at a later time. You can simply select the object and discover it.

1. From the **Data** **Management** tab, select the **IPAM** tab. The IPAM Home page appears.
2. Select the network or other object over which you want to perform discovery.  
   Depending on the object type, navigate from the network level to the individual IP table in the **List** page to locate the object for immediate discovery.
3. Expand the Toolbar and click **Discover** **Now**.  
   You can also click the Action icon for the network and choose **Discover** **Now** from the menu.

The Probe member associated with the network or other object initiates a discovery procedure. Smart Folders and Discovered Devices

Grid Manager maintains a Smart Folder titled **Discovered** **Switches/Routers**, under which appears a list of all routers, switches and switch-routers that thus far have been discovered and catalogued through discovery. Clicking a device name opens the device's main page, with **Interfaces**, **Networks**, **IP** **Addresses**, **Assets** and **Components** panels. For more information, see [*Managing Discovered Data*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/managing-discovered-data).  
Open the Smart Folders category under the Finder menu and click on the **Discovered** **Switches/Routers** folder. Clicking on a device name opens the device page under **Data** **Management** **–&gt;** **Devices** and shows the **Interfaces** page for the chosen device. For related information, go to [*My Smart Folders and Predefined Smart Folders*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/smart-folders/my-smart-folders-and-predefined-smart-folders).

# Using the Device Selector

You use a dedicated Device Selector window to choose a discovered device for creating a port reservation with various IPAM objects such as IPv4 reservations, fixed addresses, host records, and provisioning of IPv4 and IPv6 networks on device interfaces; testing SNMP or CLI credentials, and other purposes, as shown in the below figure.   
*Using* *the* *Device* *Selector* *Window*

*[drawio]*

The chosen device is discovered and listed in the Devices panel in IPAM, or any other device on the network under the **All** **Devices** category in the left pane of the device selector.  
Clicking a managed device's device name selects the device and brings you back to the originating page. Otherwise, select a device and click **OK** to continue.  
If you have a long list of devices even after selecting a smart folder, enter a device name search value or a search expression in the **Find** field and click **Go**.

# Tips for Quick Navigation

To locate interface and device information quickly, along with associated IPAM objects that may be associated with elements such as port reservations, you can use Device and Interface terms in Global Search. (For additional information on Global Search, see [*Global*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface/About+the+Grid+Manager+Interface#GlobalSearch)[ ](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface/About+the+Grid+Manager+Interface#GlobalSearch)[*Search*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface/About+the+Grid+Manager+Interface#GlobalSearch).)  
Smart Folders provide another means of locating items such as IP addresses and IPAM objects of various types. Smart Folders provides additional filters for Device Type, Vendor, Model and Version. In a Smart Folder containing interfaces, you can filter by Admin Status, Operation Status, Trunk Status, VLAN ID or VLAN Name, and Description.  
Using Smart Folders, you can also isolate all objects of a certain type by creating a smart folder with settings such as: **Type** **equals** **IPv4** **Fixed** **Address**. Title the smart folder appropriately, to make clear what data set it is presenting.
