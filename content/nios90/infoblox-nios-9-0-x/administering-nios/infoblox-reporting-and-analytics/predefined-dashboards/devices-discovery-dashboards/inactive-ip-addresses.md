---
title: "Inactive IP Addresses"
source: "/space/nios90/1471219296"
pageId: "1471219296"
---
The *Inactive* *IP* *Addresses* dashboard lists inactive IP addresses that are not in use since the initially specified time, and remain so through the last discovery cycle. For example, you can use this dashboard to compare the state of all ports on devices for one month's operation versus 1 weeks' operation. The dashboard lists inactive IP addresses associated with Hosts, IPv4 and IPv6 Fixed Address objects, and IPv4 Reservation objects. Each unique IP address within each network view appears exactly once in the dashboard. You can go to the **Data** **Management** **–&gt;** **IPAM** page to delete listed inactive IP addresses.  
By default, this dashboard operates for all devices across all network views. This dashboard supports the use of a single-time filter. You can filter by device name or network view.  
This dashboard displays the following IP address and device information in table format:

- **IP**: The IP address.
- **Last MAC/DUID**: The discovered MAC or DUID.
- **Type**: Inactive IP address object type: Fixed Address, IPv4 Reservation or Host.
- **Device Type**: The type of device connected to the inactive IP address. Types include **Router**, **Firewall**, **Switch-Router**, and **Switch**.
- **Device Name:** The name of the device connected to the inactive IP address.
- **Port/Interface**: The device interface is bound to the IP address.
- **Network View:** The network view containing the inactive IP address.
