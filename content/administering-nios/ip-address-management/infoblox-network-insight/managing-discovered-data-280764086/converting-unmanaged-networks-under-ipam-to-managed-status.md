---
title: "Converting Unmanaged Networks under IPAM to Managed Status"
source: "/space/nios90/1432786191"
pageId: "1432786191"
---
> **warning**
>
> ### Note
> 
> When you convert a network to managed status, Grid Manager uses the discovered Router IP for the network to automatically populate the Router IP value in DHCP configurations for the selected network. Conversion for DHCP is optional; you can choose to **DisableforDHCP** when you convert the network.

The IPAM tab lists all discovered networks as unmanaged, highlighted in yellow. Administrators cannot apply services or IPAM objects to IP addresses in unmanaged networks until the networks are converted to managed status. You can explore unmanaged networks through the IP Map and IP List views, but many operations cannot be carried out on unmanaged networks, including editing, splitting, resizing, permissions changes and other tasks.

> **warning**
>
> ### Note
> 
> Unmanaged IP addresses that are part of an unmanaged network cannot be independently converted to a managed IP address.

Unmanaged networks can be converted at the IPAM main page and at the device level under **Data** **Management** **–>** **Devices**, selecting a device and opening the **Networks** page.    
Under IPAM, the **Managed** column for the Network tables can show one of two possible states for all discovered IPAM networks:

- **No**–Shows that the network is not managed under IPAM/Grid Manager, but enough information is catalogued that the device can be converted to Managed state. This state is required before a network can be converted to managed status.
- **Yes**–The network shown in the table is now Managed under IPAM, converted to an IPAM network.

You can discover the network again after it is converted, or keep discovery disabled and execute it at another time, or impose blackout periods that limit the time windows under which discovery can execute on the network. Other management benefits include the ability to enable Infoblox services to the network;

1. From the **Data** **Management** tab, select the **IPAM** tab.
2. To convert a single network: Click the Action icon
   
   next to the network you want to convert to the Managed state (this automatically selects it), and then select **Convert** from the menu.   
   To convert multiple networks (bulk conversion): Select the checkboxes of the networks you want to convert to the Managed state. From the Toolbar, select **Convert** from the menu.  
   You do not need to take further action other than **Save** **&** **Close** to set the network as Managed.
3. If necessary, you can select the converted network and do the following in the *Network* editor:
4. Select the **Disable** **for** **DHCP** checkbox to disallow the converted network from being usable under DHCP.
   
   - If necessary, click the **Discovery** tab and click **Enable** **Discovery** to start discovery on the network immediately after it is converted to Managed state. You can also elect not to discover the network, by leaving the checkbox clear.
   - Click **Select** **Member** to choose the Probe member through which the network may be discovered.
   - If necessary, click **Override** under **Polling** **Options**, and modify the device discovery polling options for the network. You can also specify **Discovery** **Exclusions**, port control settings, or a **Discovery** **Blackout** period.
   - A number of associated DNS and DHCP services are also available for configuration for the new IPAM network, including DHCP Forwarding, IPv4 DDNS settings, and an array of other DDI service settings for the network. None of these configurations are required in order for the network to be in Managed state, but may be required for other purposes.
5. The IPAM main page shows **Yes** as the value for the network under the **Managed** column. The network is now under management of IPAM and can participate in Infoblox services.

> **warning**
>
> ### Note
> 
> Most conversion operations for networks and individual IP addresses are managed under IPAM and are described in the section [*Managing IPv4 and IPv6 Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666531)*.*
