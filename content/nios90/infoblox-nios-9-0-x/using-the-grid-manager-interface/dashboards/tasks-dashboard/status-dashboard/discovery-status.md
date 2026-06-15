---
title: "Discovery Status"
source: "/space/nios90/1457652523"
pageId: "1457652523"
---
The appliance can run an IP discovery to detect and obtain information about active hosts in specified networks. For information about the discovery process, see [*About Discovery*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/about-discovery).

You can add the *Discovery* *Status* widget to your Dashboard. From this widget, you can access Discovery Manager and configure parameters for a discovery. You can do the following from the widget:

- Start a discovery immediately. For more information about immediate discovery, see [*Configuring IP Discovery*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/configuring-ip-discovery).
- Schedule a discovery for a later date and time. For more information about discovery, see [*Configuring IP Discovery*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/configuring-ip-discovery).
- Configure a recurring discovery. For more information about recurring discovery, see [*Configuring IP Discovery*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/configuring-ip-discovery)[.](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/configuring-ip-discovery)
- Click the Start button to start a discovery process.
- Click the Pause button to temporarily pause the process.
- Click the Stop button to stop the process.

This widget displays the status of discovery tasks. If there are no active discovery tasks, the widget displays the discovery results of the previous tasks. For information about starting and scheduling a discovery task, see [*Guidelines Before Starting a Discovery*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/guidelines-before-starting-a-discovery).  
After you start a discovery, the *Discovery* *Status* widget displays a status bar that indicates the discovery is in progress. It also tracks the number of networks in an IP discovery. You can click the Refresh icon to update the discovery status.

The widget displays the following information about the discovery process:

- **Current** **Status**: If a discovery is in progress, this field displays its current status. Otherwise, it displays the date and time of the last discovery.
- **Last Action**: Displays the last operation and the admin who initiated it.
- **IPv4 Device Discovery:** Displays the total number of IPv4 networks and the IPv4 network and IP address range on which the IP discovery is currently running. You can click **Refresh** to update this information.

The *Discovery* *Status* widget also displays the following information about the last discovery:

- **Discovered:** The total number of active hosts in the network.
- **Managed:** The number of discovered IP addresses that are managed by the NIOS appliance. These IP addresses have an A record, PTR record, fixed address record, host record, lease, or are within a configured DHCP range.
- **Unmanaged:** The number of discovered IP addresses that do not have corresponding records on the appliance, such as A records, PTR records, fixed address records, host records, or leases.
- **Conflicts:** The number of discovered hosts that have a MAC address conflict or are part of a configured DHCP range, but do not have a fixed address or lease record and are not part of an exclusion range.
