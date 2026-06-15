---
title: "Configuring LAN1/LAN2 for Automated Failover"
source: "/space/nios90/1480950163"
pageId: "1480950163"
---
You can use both LAN1 and LAN2 interfaces for DNS recursion. Both these interfaces have different gateways and you can send the DNS query source using the ANY IP address.  If the default route interface goes down, the route redundancy feature configures another working interface so that there is automatic failover of recursion traffic from the failed interface to the working interface. This provides for a seamless flow of recursive traffic movement.

To configure automated failover, ensure that LAN1 and LAN2 have the same network configuration. Automated failover is supported on VLAN, IPv4, and IPv6 configurations.

To enable route redundancy:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox, and then click the Edit icon.
2. In the **Network** -> **Basic** tab of the *Grid* *Member* *Properties* editor, select the **Enable** **default route redundancy** **on** **LAN1/LAN2** checkbox.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

The *Detailed* *Status* panel displays the status of both the LAN1 and LAN2 ports.

If you select the **Enable** **default route redundancy** **on** **LAN1/LAN2** checkbox and then run the `show routes` CLI command, the output displays two default routes each having a different metric number. The primary default route that is set using the `set default_route LAN1|LAN2` CLI command has a metric value of 0 and the secondary default route has a metric value of 10 for IPv4 networks. For IPv6 networks, the primary default route has a metric value of 1024 and the secondary default route has a metric value of 1124.  For more information, see [*show routes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280789524).

In case of a failover, there may be a delay of a few seconds before the switchover to the secondary interface occurs.

If you want to enable port redundancy on LAN2 using WAPI, you have to use the entire `lan2_port_setting` struct even though the LAN2 IP addresses are already configured. The `lan2_port_setting` struct does not support partial updates.
