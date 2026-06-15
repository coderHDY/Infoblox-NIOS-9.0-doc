---
title: "Enabling DHCP on LAN2"
source: "/space/nios90/1481015739"
pageId: "1481015739"
---
You can configure an appliance to provide DHCP service through the LAN1 port, LAN2 port, or both the LAN1 and LAN2 ports. Note that when you enable both ports, they must be connected to different subnets. You can also start and stop DHCP service for IPv4 or IPv6 on the LAN1 or LAN2 port after you have enabled the service.  
After you configure the LAN2 port, you can enable DHCP services on the LAN2 port as follows:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then click the Edit icon.
2. *If* *you* *are* *running* *DHCP* *for* *IPv4*: In the **General** -&gt; **Basic** tab of the *Member* *DHCP* *Configuration* editor, select the **IPv4** checkbox for **LAN2** under DHCP Interfaces.   
   *If* *you* *are* *running* *DHCP* *for* *IPv6*: In the **General** -&gt; **Basic** tab of the *Member* *DHCP* *Configuration* editor, select the **IPv6** checkbox for **LAN2** under DHCP Interfaces. (An IPv6 address must also be provisioned for the port.)  
   You can run either or both protocols for DHCP depending on your network deployment.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
