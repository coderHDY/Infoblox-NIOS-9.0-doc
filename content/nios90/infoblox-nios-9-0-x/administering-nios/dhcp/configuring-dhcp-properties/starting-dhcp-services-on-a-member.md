---
title: "Starting DHCP Services on a Member"
source: "/space/nios90/280404283"
pageId: "280404283"
---
The DHCP service is disabled by default. After you complete the DHCP configuration, you can start DHCP service on a member. To enable the member to provide DHCPv6 service as well, you must start the DHCP service and then enable the DHCPv6 service on the member. In addition, you must specify the DHCP Unique Identifier (DUID) of the member. IPv6 clients use DUIDs to identify the source of the DHCP messages from servers.  
To start DHCP service on a member:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; -&gt; **Members** -&gt; *member* checkbox.
2. Expand the Toolbar and click **Start**.
3. In the *Start* *Member* *DHCP* *Service* dialog box, click **Yes**.
4. Grid Manager starts DHCP on the selected member.

You can stop DHCP service on a member by selecting the member checkbox and click **Stop** from the Toolbar. This will stop DHCP service enabled on the LAN port.  
To stop DHCP service enabled on the LAN2 port:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; **Members** -&gt; *member* checkbox.
2. Click the Edit icon.
3. In the *Member* *DHCP* *Properties* editor, select the **General** **Basic** tab.
4. Clear the checkbox for LAN2 under DHCP interfaces.
5. Save the configuration.

To enable DHCPv6 service on the member:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; *member* checkbox.
2. In the *Member* *DHCP* *Properties* editor, select the **General** **Basic** tab.
3. In the **IPv6** **Properties** section, do the following:
   
   - **Server** **DUID:** Enter the DUID of the member.
   - **Enable** **DHCPv6** **Service**: Select this checkbox.
4. Save the configuration.
