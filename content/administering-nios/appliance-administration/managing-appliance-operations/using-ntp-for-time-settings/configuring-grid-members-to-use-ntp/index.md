---
title: "Configuring Grid Members to Use NTP"
source: "/space/nios90/1449394364"
pageId: "1449394364"
---
Once you configure a Grid member to use external NTP server, make sure that the NTP service is enabled at Grid level. Otherwise, the Grid member will not function as an NTP client.  
To configure Grid members to synchronize their time with external NTP servers:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox.
2. Expand the Toolbar and click **NTP** -> **NTP** **Member** **Config**.
3. In the **General** tab of the *Member* *NTP* *Properties* editor, do the following:
   
   - **Enable** **the** **NTP** **Server** **on** **this** **Member:** Select this checkbox to configure a Grid Master or a Grid member as an NTP server. If you have configured DNS anycast on the appliance, it can answer NTP requests through the anycast IP address.
   - **Synchronize** **this** **Member** **only** **with** **the** **Grid** **Master**: Select this checkbox to enable this Grid member to synchronize its time with the Grid Master. This is the default.
   - **Synchronize** **this** **Member** **with** **other** **NTP** **Servers**: Select this checkbox to enable this Grid member to use external NTP servers. When you select this checkbox, you must enter at least one external NTP server for the member.
   - **Exclude** **the** **Grid** **Master** **as** **an** **NTP** **Server**: Select this checkbox if you want to exclude the Grid Master from being one of the time sources. By default, the appliance automatically configures the Grid Master as the backup NTP server for a Grid member. When the member cannot reach any of its configured NTP servers, it uses the Grid Master as the NTP server. The appliance does not display the Grid Master in the NTP external server list. For a Grid Master, this checkbox has no meaning.
   - **External** **NTP** **Servers**: Click **Override** and then click the **Add** icon. In the *Add* *NTP* *Server* dialog box, enter the following information:
   - **NTP** **Server** **(FQDN** **or** **IP** **Address)**: Enter either the IP address or the resolvable host name of an NTP server. You can view a list of public NTP servers at [ntp.isc.org](http://ntp.isc.org). To check whether the DNS server can resolve the NTP server host name, click **Resolve** **Name**. You must have a DNS name resolver configured.
   - **Enable** **Authentication**: Select this checkbox to enable authentication of NTP communications between the external NTP server and the NIOS appliance (the Grid Master or Grid member in a Grid, an independent NIOS appliance, or the active node in an independent HA pair).  
     Note that to prevent intruders from interfering with the time services on your network, you can authenticate communications between a Grid member and an external NTP server, as well as between a Grid member and external NTP clients. NTP communications within the Grid go through an encrypted VPN tunnel, so you do not have to enable authentication between the Grid Master and Grid members.
     
     **Authentication** **Key**: Select a key that you previously entered from the drop-down list. Note that you must enter authentication keys at the Grid level when you configure a Grid Master or Grid member to use external NTP servers.
   - Click **Add** to add the NTP server to the list or **Cancel** to cancel the operation. In the table, click **Override** in the table to override configurable settings. To inherit the same properties as the Grid, click **Inherit**.
     
     - **Preferred**: Select this to mark an external NTP server as the preferred NTP server. You can select only one server as the preferred NTP server. NIOS uses the responses from this preferred server over responses from other external NTP servers. A response from a preferred server will be discarded if it differs significantly from the responses of other servers. Infoblox recommends that you select an NTP server that is known to be highly accurate as the preferred server, such as one that has special time monitoring hardware. Note that this option is enabled only when you have selected the checkbox **Synchronize** **this** **Member** **with** **other** **NTP** **Servers**.
     - **Server**: Displays the FQDN or IP address of the NTP server that you added.
     - **Authentication**: When you enable authentication, this column displays **Yes**. Otherwise, it displays **No**.
     - **Key** **Number**: Displays the authentication key that you have selected.
     - **BURST**: Select this checkbox to configure the NTP client to send a burst of eight packets if the external NTP server is reachable and a valid source of synchronization is available. The NTP client transmits each packet at a regular interval of two seconds. After you add an NTP server and save the configuration, the appliance will enable this option by default. When you deselect this checkbox, the client sends a single packet only once to the server.
     - **IBURST**: Select this checkbox to configure the NTP client to send a burst of eight packets if the external NTP server is not reachable when the client sends the first packet to the server. The NTP client transmits each packet at a regular interval of two seconds. After you add an NTP server and save the configuration, the appliance will enable this option by default. When you deselect this checkbox, the client sends a single packet only once to the server.
       
       Note that NTP members inherit NTP properties from the Grid. Click **Override** in the *Member* *NTP* *Properties* wizard to override configurable settings. To inherit the same properties as the Grid, click **Inherit**. For information about adding NTP authentication keys, see Adding NTP Authentication Keys above*.*
4. Save the configuration and click **Restart** if it appears at the top of the screen.
