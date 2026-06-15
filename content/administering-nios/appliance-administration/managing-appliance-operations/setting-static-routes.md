---
title: "Setting Static Routes"
source: "/space/nios90/280667278"
pageId: "280667278"
---
When you put the NIOS appliance on a segment of the network where there is a single path to and from it, a single default route is sufficient. For example, in the figure Single Default Route below, the appliance is in the DMZ behind a firewall and connects to the rest of the network through the DMZ interface on the firewall. For example, when hosts send DNS queries from the Internet and the internal network to the appliance and when the appliance replies to those hosts, the firewall takes care of all the routing.

*Single* *Default* *Route*

*[drawio]*

When the NIOS appliance is on a segment of the network where there are multiple gateways through which traffic to and from the appliance can flow, a single default route is insufficient. For an example, see the below figure.   
  
*Erroneously* *Routed* *DNS* *Replies*

*[drawio]*

To resolve the problem illustrated in the figure Erroneously Routed DNS Replies above, add a second route pointing traffic destined for 10.1.1.0/24 to use the gateway with IP address 1.2.2.2 on firewall-2. This is shown in the below figure.

*Properly* *Routed* *DNS* *Replies*

*[drawio]*

Whenever you want the NIOS appliance to send traffic through a gateway other than the default gateway, you need to define a separate route. Then, when the appliance performs a route lookup, it chooses the route that most completely matches the destination IP address in the packet header.  
When you enable the MGMT port, the gateway you reference in a static route determines which port the NIOS appliance uses when directing traffic to a specified destination.

- If a route definition references a gateway that is in the same subnet as the IP and VIP addresses of the LAN (or LAN1) and HA ports, the NIOS appliance uses the LAN (or LAN1) or HA port when directing traffic to that gateway.
- If a route definition references a gateway that is in the same subnet as the MGMT port, the NIOS appliance uses the MGMT port when directing traffic to that gateway

*Static* *Routes* *for* *the* *LAN* *and* *MGMT* *Ports*

*[drawio]*

The need for routes can apply to any type of traffic that originates from the appliance, such as DNS replies, DHCP messages, SNMP traps, ICMP echo replies, Infoblox GUI management, and Grid communications.  
To set a static route, do the following:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox, and then click the Edit icon.
2. In the **Network** -> **Advanced** tab of the *Grid* *Member* *Properties* editor, click the Add icon for the **IPv4** **Static** **Routes** table, and then enter the following:
   
   - **Network** **Address:** Type the address and netmask of the remote network to which the NIOS appliance routes traffic.
   - **Gateway** **Address:** Type the IP address of the gateway on the local subnet through which the NIOS appliance directs traffic to reach the remote network. The gateway address must meet the following requirements:
     
     - It must belong to a working gateway router or gateway switch.
     - It must be in the same subnet as the NIOS appliance.
       
       Note to consult your network administrator before specifying the gateway address for a static route on the appliance. Specifying an invalid gateway address can cause problems, such as packets being dropped or sent to an incorrect address.

3. Save the configuration and click **Restart** if it appears at the top of the screen.

#   
Defining IPv6 Static Routes

Principles and applications related to IPv4 static routing in this section apply equally to IPv6. In the figure Static Routes for IPv6 Traffic below, a NIOS appliance supports both IPv4 and IPv6 on its LAN1 port. IPv6 is routed to the internal network while the default IPv4 route remains to the outbound 10.2.2.1 address.  
You can use prefix notation to enter an IPv6 network address; the full 128-bit gateway value must be entered. To set an IPv6 static route, do the following:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox, and then click the Edit icon.
2. In the **Network** -> **Advanced** tab of the *Grid* *Member* *Properties* editor, click the Add icon for the **IPv6** **Static** **Routes** table, and then enter the following:
   
   - **Network** **Address:** Type the prefix and prefix length of the remote network to which the NIOS appliance routes traffic. As an example: 2001:DB8::256:/64. The double colon is required at the end of the prefix. NIOS performs validity checks on the address while it is being entered.
   - **Gateway** **Address:** Type the IP address of the gateway on the local subnet through which the NIOS appliance directs traffic to reach the remote network. As an example: 2001:DB8::256:ABCD:EF12:1234:1. The gateway address must meet the following requirements:
     
     - It must belong to a working gateway router or gateway switch.
     - It must be in the same subnet as one of the interfaces of the NIOS appliance.
     - The gateway address cannot be the same value as that for the VIP.
       
       Note to consult your network administrator before specifying the gateway address for a static route on the appliance. Specifying an invalid gateway address can cause problems, such as packets being dropped or sent to an incorrect address.

3. Save the configuration and click **Restart** if it appears at the top of the screen.

*Static* *Routes* *for* *IPv6* *Traffic*

*[drawio]*
