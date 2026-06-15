---
title: "Specifying Port Settings for DNS"
source: "/space/nios90/281215121"
pageId: "281215121"
---
When requesting zone transfers from the primary server, some secondary DNS servers use the source port number (the primary server used to send the notify message) as the destination port number in the zone transfer request. If the primary server uses a random source port number when sending the notify message—that the secondary server then uses as the destination port number when requesting a zone transfer—zone transfers can fail if there is an intervening firewall blocking traffic to the destination port number.  
Specifying a source port number for recursive queries ensures that a firewall allows the response. If you do not specify a source port number, the NIOS appliance sends these messages from a random port number. You can also specify a source for the DNS Traffic Control health check.  
When performing recursive queries, the NIOS appliance uses a random source port number above 1024 by default. The queried server responds using the source port number in the query as the destination port number in its response. If there is an intervening firewall that does not perform stateful inspection and blocks incoming traffic to the destination port number, the recursive query fails.  
You can specify a source port number for notify messages to ensure the firewall allows the zone transfer request from the secondary server to the primary server. If you do not specify a source port number, the NIOS appliance sends messages from a random port number above 1024.  
You can limit If you have configured anycast and non-anycast IP addresses on the loopback interface, you must enable the appliance to provide DNS services on them. You can also configure the appliance to listen for DNS queries on a specific IP address that you configure on the loopback interface, by separating the source port for DNS queries from the port for notify messages and zone transfer requests. For information about the loopback interface and anycast addressing, see [*Configuring IP Addresses on the Loopback Interface*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ip-routing-options/configuring-ip-addresses-on-the-loopback-interfa).  
You can specify the source address settings for a Grid member and for DNS views assigned to a Grid member. Note that you can specify the source address settings for only specific DNS views that contain zones that are assigned to a Grid member. The static source port values for DNS views are inherited from the Member DNS properties.

> **info**
>
> **Note:** In NIOS 8.6 and earlier versions, BIND allowed the configuration of the listen-on, notify-source, and query-source options on port 53 for both IPv4 and IPv6 addresses. However, starting from NIOS 9.0.x onwards, this configuration is not recommended as BIND does not support the listen-on, notify source, and query-source options to use the same port for both IPv4 and IPv6. Having this configuration can cause BIND to fail during start-up.

# Specifying Source Ports

To specify port numbers and settings for queries, notify messages and zone transfer requests for a Grid member:

1. **Member**: From the **Data Management** tab, select the **DNS** tab and click the **Members** tab -&gt; *member *checkbox -&gt; Edit icon.
2. In the *Member DNS Properties* editor, click **General** -&gt;** Basic** tab.
3. You can change the port settings as follows:
   
   - **Listen on these additional IP addresses**: Click the Add icon to add an anycast or non-anycast address you configure on the loopback or VLAN interface. You must add all IP addresses you configure on the loopback or VLAN interface so the appliance can provide DNS services on them. Adding source ports for listening supports both IPv4 and IPv6 interfaces. For information about adding IP addresses on the loopback interface, see [*Configuring IP Addresses on the Loopback Interface*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ip-routing-options/configuring-ip-addresses-on-the-loopback-interfa).
     
     Enter correct information for the following by clicking the field in the row:
     
     - **Address**: Type the IPv4 or IPv6 address depending on the type of interface.
     - **Interface**: The Interface column displays the name of the interface.
     - **VLAN Tag**: For a VLAN, enter the VLAN tag or ID. You can enter a number from 1 to 4094. Ensure that you configure the corresponding switch accordingly.
   - **Send queries from**: If you want to improve the DNS service performance, you can separate the DNS queries from the notify messages and zone transfer requests. Select a value from the drop-down list to select an interface name: **VIP**, **MGMT**, **LAN2**, **Any interface**, **IP**.
     
     - **IP Address**: This is displayed only when you select **IP** from the drop-down list. Specify the IP address of the source.
   - **Send notify messages and zone transfer requests from**: From the drop-down list, select the source port of the notify messages and zone transfer requests that the Grid member sends. Select a value from the drop-down list to select an interface name: **VIP**, **MGMT**, **LAN2**, **Any interface**, **IP**. You can select IP addresses on the loopback or non-primary VLAN interface.
     
     - **IP Address**: This is displayed only when you select **IP** from the drop-down list. Specify the IP address of the source.  
       Note:
       
       - **IP** is displayed only if you have additional IP addresses such as the loopback address or VLANs configured.
       - If you select IP addresses on the loopback or non-primary VLAN interface, then you must add these IP addresses in the **Listen on these additional IP addresses** table.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

If you have enabled secondary name servers in the Grid to send notify messages to external secondary name servers, you can specify the delay time for sending the notify messages. For information about enabling Grid secondary servers to send notification messages to the external secondaries, see [*Notifying External Secondary Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/notifying-external-secondary-servers).

To specify the delay time for the Grid secondary servers to send notify messages to the external secondaries:

1. **Member**: From the **Data Management** tab, select the **DNS** tab and click the **Members** tab -&gt; *member *checkbox -&gt; Edit icon.  
   **DNS view**: From the **Data Management** tab, select the **DNS** tab and click the **Members** tab -&gt; *member *checkbox -&gt; Edit icon.
2. In the editor, click **Toggle Advanced Mode**.
3. **Member**: When the additional tabs appear, click the **Advanced** subtab of the **General** tab.  
   **DNS view**: When the additional tabs appear, click the** Advanced** subtab of the **DNS Views** tab.
4. Complete the following:
   
   - **Notify Delay**: Specify the number of seconds that the Grid secondary servers delays sending notification messages to the external secondaries. You can enter a value between 5 and 86400 seconds. The default is five seconds.
5. Save the configuration and click **Restart** if it appears at the top of the screen.

# Specifying Static Source Ports

To specify static source ports for a Grid and Grid member:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.**  
   **Member:** From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -&gt; *member* checkbox -&gt; Edit icon.  
   **DNS** **View**: From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -&gt; *member* checkbox -&gt; Edit icon.
2. In the editor, click **Toggle** **Advanced** **Mode**.
3. **Member**: When the additional tabs appear, click the **Advanced** subtab of the **General** tab. **DNS** **View**: When the additional tabs appear, click the **Advanced** subtab of the **DNS** **Views** tab. To override an inherited property, click **Override** next to it and complete the appropriate fields.
4. Complete the following:
   
   - **Set** **static** **source** **UDP** **port** **for** **queries** **(not** **recommended)**: This is disabled by default. To override the value that has been inherited from the Grid, click **Override**. Select this checkbox to enable it and enter the UDP port number. You can enter a value between 1 and 63999. To retain the same value as the Grid, click Inherit.
   - **Set** **static** **source** **UDP** **port** **for** **notify** **messages**: This is disabled by default. To override the value that has been inherited from the Grid, click **Override**. Select this checkbox to specify a source port for notify messages to ensure that the firewall allows the zone transfer request from the secondary server to the primary server. You can enter a value between 1 and 63999. If you do not specify a source port, the appliance sends messages from a random port with a number above 1024. To retain the same value as the Grid, click Inherit.
5. Save the configuration and click **Restart** if it appears at the top of the screen.
