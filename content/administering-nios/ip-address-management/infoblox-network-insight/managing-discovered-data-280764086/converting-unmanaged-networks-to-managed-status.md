---
title: "Converting Unmanaged Networks to Managed Status"
source: "/space/nios90/1432753519"
pageId: "1432753519"
---
On the **Data** **Management** **–>** **Devices** page, click a device name, and then open the **Networks** tab. You see the following types of networks based on their managed or unmanaged status:

- Unmanaged: These networks are displayed in yellow rows with the value of **No **in the Managed column. Shows that the network is not managed under IPAM/Grid Manager, but enough information is catalogued so that the network can be converted to managed status. You can provision these networks onto devices.
- Managed: These networks are displayed in white rows with the value of **Yes** in the Managed column. These networks are currently managed under IPAM, converted to an IPAM network. You can provision and de-provision managed networks.
- The so called "non-NIOS networks": These networks are displayed in grey rows with a blank value in the Managed column. Indicates that the network is discovered but available information is insufficient to identify and catalog the network in IPAM at the present time. This can be due to the following reasons:
  
  - The admin or operation status of the corresponding interface is "down". That is, the interface is either disconnected physically or disabled by administrator.
  - The prefix length for the network is /32 (ipv4) or /128 (ipv6). Network Insight treats this as a route to a specific device rather than a subnet, therefore it does not create such network in IPAM.
  - The route for this interface is configured incorrectly.
  - The route is learned from a remote source via BGP, OSPF and so on (i.e., indirect next hop), or come from a static route using the netmgmt protocol. Network Insight creates networks in IPAM for only direct and local routes from routing tables.
  - The network is within a VRF and the VRF is not mapped to a network view. VRF mapping is required in this case for the network to appear in IPAM. Some time after the VRF is mapped, the network turns from non-NIOS to unmanaged, or managed if the network is already present in IPAM.

Unmanaged networks listed under discovered devices present the same conversion features as networks listed under IPAM (see the following section Converting Unmanaged Networks under IPAM to Managed Status below).

Converting a network in the device context is the same as converting it at the top IPAM level. You cannot apply services or IPAM objects to IP addresses in unmanaged networks until the networks are converted to managed status. Many operations cannot be carried out on unmanaged networks, including editing, splitting, resizing, permissions changes and many other tasks.

1. From the **Data** **Management** tab, select the **Devices** tab.
2. Click the **Next** **Page** and **Last** **Page** icons to locate the device through which you want to locate the assets to convert.
3. Click the device name.
4. Click the **Networks** tab.
5. To convert a single network: Click the Action icon
   
   next to the network you want to convert to the Managed state (this automatically selects it), and then select **Convert** from the menu.  
   To convert multiple networks (bulk conversion): Select the checkboxes of the networks you want to convert to the Managed state. From the Toolbar, select **Convert** from the menu.
6. The *Network* editor appears. In the editor, define the required **General** settings for the network. You can also define other settings you need from any of the tabs in the editor. For details about how to configure these settings, refer to the online Help in Grid Manager.
   
   Note Networks inherit discovery setting from their parent networks. Discovery will be disabled for networks that do not have a parent network.

1. If necessary, select the **Disable** **for** **DHCP** checkbox. When you convert a network to managed status, Grid Manager uses the discovered Router IP for the network to automatically populate the Router IP value in DHCP configurations for the selected network. Selecting this option disallows the converted network from being usable under DHCP.
2. If necessary, click the **Discovery** tab and click **Enable** **Discovery** to start discovery on the network after it is converted to Managed state. You can also elect not to discover the network, by leaving the checkbox clear.
   
   - Click **Select** **Member** to choose the Probe member through which the network may be discovered.
   - If necessary, click **Override** under **Polling** **Options**, and modify the device discovery polling options for the network. You can also specify **Discovery** **Exclusions** or a **Discovery** **Blackout** period.
   - A number of associated DNS and DHCP services are also available for configuration for the new IPAM network, including DHCP Forwarding, IPv4 DDNS settings, and an array of other DDI service settings for the network. None of these configurations are required in order for the network to be in Managed state, but may be required for other purposes.

1. Click **Save** **&** **Close** to make the conversion.

In the **Managed** column in the **Networks** tab, Grid Manager displays **Yes** for all converted entities to indicate their Managed status. You can now manage the networks through Grid Manager.
