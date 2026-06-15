---
title: "Authenticating BGP Neighbors"
source: "/space/nios90/1468334717"
pageId: "1468334717"
---
You can configure authentication for BGP advertisements to avoid any malicious interference by ASs. This ensures that the routing information exchanged between BGP peers is authentic, and it is accepted only if the authentication is successful. BGP authentication must be configured with the same password on both BGP peers. Otherwise, the connection between them is not established. The Infoblox BGP authentication fully conforms to RFC 2385. For information about BGP authentication, refer to RFC 2385, *Protection* *of* *BGP* *Sessions* *via* *the* *TCP* *MD5* *Signature* *Option*.

> **warning**
>
> ### Note
> 
> If you upgrade from a previous NIOS version to latest NIOS version, BGP authentication is disabled for existing BGP neighbors.

The BGP service restarts automatically when any of the following authentication changes are made:

- MD5 authentication is enabled or disabled for a BGP neighbor.
- Change the authentication password of a BGP neighbor, for which MD5 authentication is enabled.

To configure BGP for anycast addresses:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then click the Edit icon.
2. In the *Grid* *Member* *Properties* editor, select the **Anycast** tab.
3. In the BGP Configuration section, complete the following:
   
   - **Interface** **Link** **Detection**: Select this checkbox to enable link detection when the default connection fails. This enables the router to track the next available route. For example, if LAN1 is set as the default gateway when both LAN1 and LAN2 are working, and LAN1 later fails, the router will switch to LAN2. When LAN1 reconnects, the router will then switch back to LAN1.
   - **ASN**: Enter the autonomous system number of the interface. You can enter an ASN number from 1 to 4294967295. You can configure only one ASN on each Grid member.
   - **BGP** **Timers**: BGP uses timers to control how often the interface sends KEEPALIVE messages and how long it waits before declaring a neighboring router out of service. The keepalive timer determines the time interval at which the interface sends KEEPALIVE messages to a neighboring router to inform the neighbor that the appliance is alive. The hold down timer determines how long the interface waits to hear a KEEPALIVE or UPDATE message before it assumes its neighbor is out of service. If a neighboring router is down, the interface terminates the BGP session and withdraws all the BGP routing information to the neighbor.
     
     - **Keep** **Alive**: Enter the time interval in seconds when the interface sends keepalive messages. You can enter a time from 1 to 21845 seconds. The default is four seconds.
     - **Hold** **Down**: Enter the time in seconds that the interface waits to hear a keepalive message from its neighbor before declaring the neighbor out of service. You can enter a time from 3 to 65535 seconds. The default is 16 seconds.  
       Click the Add icon to add a neighboring router to receive BGP advertisements from the NIOS appliance. The appliance adds a new row to the table. Complete the following:
   - **Neighbor** **Router** **IP**: Enter the IP address (IPv4 or IPv6) of the neighboring BGP router. The neighboring router can be within the same AS (the most likely case) or from a router in an external AS.
   - **Remote** **ASN**: Enter the ASN of the neighboring router. You can enter an ASN number from 1 to 4294967295.
   - **MD5** **Authentication**: Select this checkbox to enable MD5 authentication for the BGP neighbor. When you enable MD5 authentication, you must enter the authentication password in the **Password** field.
   - **Password**: Enter the authentication password that the NIOS appliance uses to connect to the BGP neighbor.You can enter up to 80 printable ASCII characters. The password configured on the Grid member must match the password of the BGP neighbor.
     
     When you enter the password for a BGP neighbor, it will be preserved even if you disable MD5 authentication for the BGP neighbor later. But if you change the IP address for any existing BGP neighbor, you must re-enter the authentication password for the BGP neighbor, even if the authentication password remains the same.
   - **Comment**: Enter useful information about this neighboring router.  
     Click the Add icon again to add another neighboring router. You can add up to 10 neighboring routers.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
5. Anycast configuration is complete. To activate anycast, see* *[*Specifying Port Settings for DNS*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/specifying-port-settings-for-dns)* *and its subtopic, [*Specifying Source Ports*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/specifying-port-settings-for-dns/Specifying+Port+Settings+for+DNS#Specifying-Source-Ports).
