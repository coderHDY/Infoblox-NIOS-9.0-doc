---
title: "Enabling BFD for OSPF"
source: "/space/nios90/1412137245"
pageId: "1412137245"
---
You can enable BFD for both IPv4 and the IPv6 OSPF areas. To support DNS anycast and other routing-dependent applications on NIOS appliances, you must first configure the LAN1, LAN1 (VLAN), or HA (for HA pairs only) interface as an OSPF advertising interface, and then assign an area ID on the interface to associate it with a specific OSPF area.

To enable BFD for the IPv4 or the IPv6 OSPF area:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox, and then click the Edit icon.
2. In the *Grid* *Member* *Properties* editor, select the **Anycast** tab.
3. In the OSPF Area Configuration table, select the OSPF advertising interface, click the Edit icon, and then complete the following:
   
   - **Enable** **BFD**: Select this checkbox to enable BFD for the OSPF advertising interface.
   - **BFD** **template**: Click **Select** **BFD** **Template** and select a BFD template from the *Select* *BFD* *Template* dialog box. You can click **Clear** to remove the selected BFD template and select a new one.
   - **BFD Internal DNS Monitoring**: Select this checkbox to enable the internal DNS monitor to send and receive DNS responses and to retract the OSPF route if it does not receive a DNS response.
4. Save the configuration.

When OSPF session with a neighbor router in the OSPF Area reaches FULL state, BFD session is automatically created. By default, BFD runs with no authentication and timer intervals of 100ms transmit, 100ms receive and multiplier 3 (hold down time = 300ms). The actual runtime intervals are negotiated with the peer as per BFD standard RFC 5880. If these intervals are not suitable or authentication needs to be enabled for BFD, you must create a BFD template.

*Enabling BFD for OSPF  *

*[image: media]*

You can use the `show ipv6_ospf neighbor` CLI command to view runtime BFD information for OSPF.
