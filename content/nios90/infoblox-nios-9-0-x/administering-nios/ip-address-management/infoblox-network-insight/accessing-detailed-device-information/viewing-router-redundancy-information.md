---
title: "Viewing Router Redundancy Information "
source: "/space/nios90/1455259833"
pageId: "1455259833"
---
Some discovered devices may support router redundancy. After discovery, some IP addresses are indicated as a VIP (virtual IP) in the device's IP Addresses page with router redundancy. In the **IP** **List** page, **Router** **Redundancy** in the Action icon menu lists the IP addresses associated with the VIP. For each IP, there are various menu items as shown in the below figure.   
*Virtual* *IPs* *and* *discovered* *redundancy* *information*

![Virtual IPs and discovered redundancy information](/assets/1455259833/84a47243-2c36-4f7a-8e54-fb6e0a2d5c6d.jpg)

- **Active**: lists the active interface in the redundancy pair;
- **VIP**: The Virtual IP for the router redundancy pair;
- **Standby**: The standby IP interface for the router redundancy.

Discovery of all three IP components of the Router Redundancy instance also provides related information for all three IP entities:

- **Show** **IPAM** **Address**: opens the IPAM page to the listed IP address;
- **VIP**: Opens the virtual interface in the host device's Interfaces page;
- Device name: The third item lists the device name of the router for each of the three IP address entities comprising the redundancy instance. The currently active router is identified with the **Active** and **VIP** objects; the second **Standby** router is identified with the **Standby** IP address.
