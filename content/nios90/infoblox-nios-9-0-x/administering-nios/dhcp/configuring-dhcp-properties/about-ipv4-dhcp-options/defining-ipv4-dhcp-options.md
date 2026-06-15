---
title: "Defining IPv4 DHCP Options"
source: "/space/nios90/1331332118"
pageId: "1331332118"
---
You can define basic DHCP options that the DHCP server uses to provide configuration information to DHCP clients. The server includes these options in its DHCP messages.  
To define DHCP options:

1. **Network**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* check box, and then click the Edit icon.
   
   **Network** **Container**: From the **Data** **Management** tab, select the **IPAM** tab -&gt; *network_container* check box, and then click the Edit icon.  
   **DHCP** **Range**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network*-&gt; *DHCP_range* check box, and then click the Edit icon.  
   **Fixed** **Address**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network*-&gt; *fixed_address* check box, and then click the Edit icon.  
   **Reservation**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* -&gt; *reservation* check box, and then click the Edit icon.  
   **Host** **Address**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* -&gt; *host_record* check box, and then click the Edit icon. Select the host IP address, and then click the Edit icon.  
   **Roaming** **Host**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Roaming** **Hosts** -&gt;* roaming_host* check box, and then click the Edit icon.
2. In the *DHCP Properties* editor, select the **IPv4 DHCP Options** tab and complete the following:
   
   - **Routers**: Click the Add icon. Grid Manager adds a row to the table. In the table, enter the IP address of the router that is connected to the same network as the DHCP client. When configuring this for a template, enter the offset value of the IP address of the router. The DHCP server includes this information in its DHCPOFFER and DHCPACK messages.
   - **DomainName**: Enter the name of the domain for which the Grid serves DHCP data. The DHCP server includes this domain name in Option 15 when it responds with a DHCPOFFER packet to a DHCPDISCOVER packet from a client. If DDNS is enabled on the DHCP server, it combines the host name from the client and this domain name to create the FQDN (fully-qualified domain name) that it uses to update DNS. For information about DDNS, see [*Configuring DDNS Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates).  
     When overriding the domain name already set by a parent object, enter the new value for the selected option or use "" to clear the value.
   - **DNS** **Servers**: Click the Add icon. Grid Manager adds a row to the table. In the table, enter the IP address of the DNS server to which the DHCP client sends name resolution requests. The DHCP server includes this information in the DHCPOFFER and DHCPACK messages.
   - **Broadcast Address**: Enter the broadcast IP address of the network to which the DHCP server is attached. When configuring this for a template, enter the offset value of the broadcast IP address of the network.

1. Save the configuration and click **Restart** if it appears at the top of the screen.
