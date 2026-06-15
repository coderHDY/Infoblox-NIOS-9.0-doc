---
title: "Viewing Assets Associated with an Interface"
source: "/space/nios90/1455292648"
pageId: "1455292648"
---
You can narrow down an Asset list to individual interfaces on any managed network device. On the interface level, the **Assets** page shows all devices associated with the chosen interface, including switchports supporting many end hosts. In practice, most Asset tables show end hosts and devices that populate Ethernet network segments.

1. From the **Data** **Management** tab, select the **Devices** tab.
2. Click the **Name** link for the device you want to inspect.
3. Click the Action icon, for an interface in the table, and choose **Show** **Assets**. (Applies only to switched interfaces that do not have an IP address.)

Values listed in the Assets table include the following:

- Name: The asset's name on the network as discovered by Grid Manager. If the Name is that for another infrastructure device, you may click on it to see its associated Assets.
- Interface Name: The name of the interface (typically a switched interface) associated with the asset (by which the asset was discovered).
- IP Address: The IP Address for each discovered end host as managed by IPAM. The IP address is a link to the home IPAM page for the interface.
- MAC Address: The hardware MAC address associated with the asset.
- **VLAN** **ID/VLAN** **Name**: The VLAN identifier from which the asset is reachable.
- Operation Status: Normally reads **Up** or **Down**. Asset records may appear as **Down** because they are disconnected from the network or being rebooted.

In the Interfaces page, if you select an interface for a switch that is only connected to a neighboring switch, router, or switch-router, and then choose **Show** **Assets**, the Assets page displays only the neighboring device that is reachable from the chosen port.
