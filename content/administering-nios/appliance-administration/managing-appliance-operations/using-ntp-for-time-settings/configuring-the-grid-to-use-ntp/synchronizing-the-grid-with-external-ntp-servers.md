---
title: "Synchronizing the Grid with External NTP Servers"
source: "/space/nios90/1449590834"
pageId: "1449590834"
---
To enable the Grid to synchronize its time with external NTP servers:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, expand the Toolbar and click **NTP** -> **NTP** **Grid** **Config**.
2. In the **General** tab of the *Grid* *NTP* *Properties* editor, select **Synchronize** **the** **Grid** **with** **these** **External** **NTP** **Servers**.
3. Click the Add icon to add external NTP servers and enter the following information in the *Add* *NTP* *Server* dialog box:
   
   - **NTP** **Server** **(FQDN** **or** **IP** **Address):** Enter either the IP address or the resolvable host name of an NTP server. Entries may be an IPv4 or IPv6 address. You can view a list of public NTP servers at [ntp.isc.org](http://ntp.isc.org). To check whether the DNS server can resolve the NTP server host name, click **Resolve** **Name**. You must have a DNS name resolver configured. For information, see [*Enabling DNS Resolution*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764908).  
     **Important: **If you configure multiple external NTP servers using domain names instead of IP addresses, you may  encounter a delayed NIOS system startup. Therefore, Infoblox strongly recommends using IP addresses rather than fully qualified domain names (FQDN) to ensure optimal performance. As a best practice if configuring NTP servers using the FQDN (instead of an IP address), configure an external DNS name resolver that is reachable by NIOS appliance.
   - **Enable** **Authentication:** Select this option to enable authentication of NTP communications between the external NTP server and the NIOS appliance (the Grid Master or Grid member in a Grid, an independent NIOS appliance, or the active node in an independent HA pair).  
     Note that to prevent intruders from interfering with the time services on your network, you can authenticate communications between a Grid member and an external NTP server, as well as between a Grid member and external NTP clients. NTP communications within the Grid go through an encrypted VPN tunnel, so you do not have to enable authentication between the Grid Master and Grid members.
     
     **Authentication** **Key:** Select a key that you previously entered from the drop-down list.
   - Click **Add** to add the NTP server to the list or **Cancel** to cancel the operation. In the table, you can configure some of the following settings:
     
     - **Preferred**: Select this to mark an external NTP server as the preferred NTP server. You can select only one server as the preferred NTP server. NIOS uses the responses from this preferred server over responses from other external NTP servers. A response from a preferred server will be discarded if it differs significantly from the responses of other servers. Infoblox recommends that you select an NTP server that is known to be highly accurate as the preferred server, such as one that has special time monitoring hardware. Note that this option is enabled only when you have selected the checkbox **Synchronize** **the** **Grid** **with** **these** **External** **NTP** **Servers**.
     - **Server**: Displays the FQDN or IP address of the NTP server that you added.
     - **Authentication**: When you enable authentication, this column displays **Yes**. Otherwise, it displays **No**.
     - **Key** **Number**: Displays the authentication key that you have selected.
     - **BURST**: Select this checkbox to configure the NTP client to send a burst of eight packets if the external NTP server is reachable and a valid source of synchronization is available. The NTP client transmits each packet at a regular interval of two seconds. After you add an NTP server and save the configuration, the appliance will enable this option by default. When you deselect this checkbox, the client sends a single packet only once to the server.
     - **IBURST**: Select this checkbox to configure the NTP client to send a burst of eight packets if the external NTP server is not reachable when the client sends the first packet to the server. The NTP client transmits each packet at a regular interval of two seconds. After you add an NTP server and save the configuration, the appliance will enable this option by default. When you deselect this checkbox, the client sends a single packet only once to the server.  
       For information about adding NTP authentication keys, see Adding NTP Authentication Keys above*.*
4. Save the configuration and click **Restart** if it appears at the top of the screen.
