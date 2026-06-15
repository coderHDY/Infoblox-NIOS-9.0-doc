---
title: "Configuring Failover Associations"
source: "/space/nios90/280663427"
pageId: "280663427"
---
1. **Grid**: From the **Data** **Management** tab, select the **DHCP** tab, and then click **Grid** **DHCP** **Properties** from the Toolbar.
2. Click **Toggle Advanced Mode** if the editor is in basic mode. When the additional tabs appear, select the **General Advanced** tab to complete the following:
   
   - **Failover** **Port:** You can modify the port number that members use for failover associations. You can use any available port from 519 to 647. The default is 647 for a new installation and 519 for an upgrade.

The following are tasks and guidelines for configuring a DHCP failover:

1. Identify the primary and secondary DHCP servers and ensure that the appliances are set up correctly for the failover association, using the following guidelines:
   
   - Configure a failover association using two NIOS appliances, or a NIOS appliance and an ISC DHCP compliant server.
   - One of the DHCP servers must be an independent appliance or in an Infoblox Grid.
   - The DHCP servers do not have to be in the same geographic location.
   - The clocks on both servers must be synchronized. This happens automatically when both servers are on the same Grid.
   - Both servers must use the same version of the DHCP configuration file. This happens automatically when both servers are on the same Grid.
   - If you use firewalls on your networks, ensure that the firewalls allow TCP port 647 between the servers, and that TCP port 7911 is open for partner down operations.
   - Each pair of DHCP servers can participate in only one failover association. An appliance can participate in more than one failover association, as long as it is with a different peer.  
       
     Configure the same DHCP properties on the primary and secondary servers, as described in [*Configuring General IPv4 DHCP Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-general-ipv4-dhcp-properties).
   - Both the primary and secondary servers must have the same operational parameters, and they must be able to receive DHCPDISCOVER messages that hosts broadcast on the networks.
   - If you change any of the DHCP failover parameters for a peer association definition, you must make the same changes on both the primary and secondary servers.  
       
     Note that if both the primary and secondary servers are in a Grid, you configure the properties on the failover association and the configuration applies to both servers.
2. Create a failover association and configure load balancing between the servers. For information, see Adding Failover Associations below.
   
   - Ensure that you use the same failover association name on both the primary and secondary servers.
   - The appliance assigns default values to the failover timers and triggers. In general, these default values serve the purpose of a failover. Do not change these values unless you understand the ramification of the changes. For example, when one of the peers in a failover association fails, the other peer goes into a COMMUNICATIONS-INTERRUPTED state, and the lease time changes to the MCLT (Maximum Client Lead Time). You should consider how the MCLT affects the lease time when a failover occurs if you want to change this value.
3. Assign the failover association to the DHCP ranges in the same network view. Failover associations can serve only IPv4 DHCP ranges. For information, see [*Configuring*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-address-ranges)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-address-ranges)[*IPv4*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-address-ranges)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-address-ranges)[*Address*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-address-ranges)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-address-ranges)[*Ranges*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-address-ranges).
   
   - If you configure a shared network, and the subnets in the shared network contain ranges served by a DHCP failover association, both the primary and secondary DHCP server must have the same shared networks defined, containing the same networks and DHCP ranges.  
     If you have multiple networks that are in a shared network and you plan to use a DHCP failover, you must use the same failover association and specify the same peers on all the networks in the shared network.
4. Enable DHCP on the primary and secondary servers AFTER you complete all the configurations. For information, see [*Managing Failover Associations*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-failover/managing-failover-associations).

> **warning**
>
> ### Note
> 
> When you set up a failover association for the first time, ensure that both servers are up and running and their databases are synchronized before they can start assigning IP addresses.

When you configure a failover association, the appliance assigns default values for timers and triggers, such as the MCLT and the maximum number of "unacked" packets. A failover may occur when some of the timers expire or when a failover peer goes out of service. When a failover occurs, the functional peer takes over and assigns IP addresses with the lease time set to the MCLT. When the server that is offline comes back online, it synchronizes its database with its peer before it starts allocating IP addresses.

# Adding Failover Associations

To add a DHCP failover association, perform the following procedures on both the primary and secondary servers:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members/Servers** tab -&gt; **IPv4 DHCP Failover Associations** section, and then click the Add icon.  
   or  
   Expand the Toolbar and click **Add** -&gt; **IPv4 DHCP Failover Association**.
2. In the *Add* *Failover* *Association* wizard, complete the following:
   
   - **Name:** Enter a unique name for the failover association. The failover association name is case sensitive. Enter the same name on both the primary and secondary servers. The appliance validates the names on both servers. The names must be exactly the same. If they do not match, the failover association goes into disconnect mode.
   - **DHCP** **Failover** **Primary**: Select one of the following. The default is **Grid** **Member**.
     
     - **Grid** **Member:** Click **Select** **member**. In the *Select* *Member* dialog box, select the primary server and click the Select icon.
     - **MS** **Server**: Click **Select** **Server**. In the *Microsoft* *Server* *Selector* dialog box, select the Microsoft server that supports DHCP failover. Note that only certain versions of Microsoft servers support failover. This dialog box also displays the following columns: **IP** **address**, **Comment**, and **Site**.  
       The failover association requires at least two Microsoft servers. NIOS displays an error message when you select **MS** **Server** if there is only one Microsoft server. When you add or modify a failover association through Grid Manager, the appliance displays a message to ensure the connectivity between two Microsoft servers. If you want a failover association to be in a normal state, you must ensure an end-to-end connectivity. If the connectivity fails, you must re-establish connectivity between the two Microsoft servers and the failover association follows the recovery states based on the DHCP failover protocol.  
       You can configure Microsoft primary and secondary servers using this wizard only. You cannot edit Microsoft primary and secondary servers after you configure them. You must delete and reconfigure the primary or secondary Microsoft server for a failover association.
     - **External Server IP Address:** Select this to use an external ISC DHCP compliant server as the primary server. Enter the IP address of the primary server in the field.
     - **DHCP** **Failover** **Secondary**: Select one of the of following. The default is **Grid** **Member**.
       
       - **Grid** **Member:** Click **Select** **member**. In the *Select* *Member* dialog box, select the secondary server and click the Select icon.
       - **MS** **Server**: NIOS selects this automatically when you set the **DHCP** **Failover** **Primary** to **MS** **Server**. Click **Select** **Server**. In the *Microsoft* *Server* *Selector* dialog box, select the Microsoft server that supports DHCP failover. Note that only Microsoft Windows Server 2012 or later versions support synchronization of failover relationships. This dialog box also displays the following columns: **IP** **address**, **Comment**, and **Site**.  
         The primary and secondary Microsoft servers that you select in a failover relationship must be in the same network view. For more information, see [About Microsoft DHCP Failover Relationships](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-dhcp-services/synchronizing-dhcp-failover-relationships).
       - **External** **Server** **IP** **Address:** Select this to use an external ISC DHCP compliant server as the secondary server. Enter the IP address of the secondary server in the field.  
         You cannot select **External Server IP Address** for both the primary and secondary servers. One of the servers must be an independent appliance or in an Infoblox Grid.
   - **Comment**: Enter useful information about the failover association.
3. Click **Next** and do the following to control the IP address allocation between the peers and how they switch from one to the other based on the configuration:
   
   - **Failover mode:** This is valid for Microsoft Management only. Select a failover mode. You can either select **Hot standby** or **Load balancing**. When you select **Hot standby**, the secondary server is set to **Standby** by default and the slider move to the position at 95%. The slider moves to 50% when you set the failover mode to **Load balancing mode**. You can synchronize and manage a failover mode that is operating in **Hot standby** mode. The primary partner is the active server that first creates the relationship if you use the **Load balancing** or the **Hot standby** mode.  
     When you configure a failover association, the slider changes its position based on the Failover mode you select. When you edit failover settings, the slider remains in the Balanced position, at 50%, by default. For more information about modifying failover associations, see [*Modifying Failover Associations*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-failover/managing-failover-associations).
   - **Load** **Balancing** **Data:** Adjust the slider to determine which server should handle more IP address requests. The default is 50%. When you move the slider all the way to the left, the primary server responds to all IP address requests. The opposite applies when you move the slider all the way to the right. Infoblox recommends that you use the default (50/50) to enable the primary and secondary servers to respond to IP address requests on an equal basis.
   - **Lease Deletion:** Select the following to override settings at the Grid and member levels.
     
     - **Keep leases from deleted ranges until one week after expiration**: When you select this and delete a DHCP range with active leases, the appliance stores these leases up to one week after they expire. When you add a new DHCP range that includes the IP addresses of these active leases, the appliance automatically restores the leases.
   - **Secondary role**: This is valid for Microsoft Management only. Note that the secondary role is available only in **Hot standby** mode. The appliance displays **Standby** by default and you cannot edit this value.
   - **Maximum client lead time**: Specify the maximum client lead time in minutes or hours. The default is one hour. Select **Minutes** or **Hours** from the drop-down list. This specifies the maximum amount of time the server waits before assuming control.
   - **Enable switchover interval:** This is valid for Microsoft Management only. Select this to automatically change the state to partner down after a specified period. NIOS does not support the "partner down" state for Microsoft DHCP failover association.
   - **State switchover interval (Minutes)**: This is valid for Microsoft Management only. Specify the amount of time after which the server must change the state. The default is 60 minutes.
   - **Enable Authentication**: This is valid for Microsoft Management only. Select this if you want to secure the communication between failover partners.
   - **Shared Secret**: This is valid for Microsoft Management only. Enter a shared secret that can be used to authenticate the communication between failover partners. You can specify a shared secret only if you enable authentication.
4. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
5. Save the configuration and click **Restart** if it appears at the top of the screen.

# Best Practices for Restoring Microsoft DHCP Server Data

When you synchronize two Microsoft servers in read/write mode for a Microsoft DHCP failover association, the appliance might override new data. For example, assume that you are synchronizing data from one Microsoft server, which has latest data. But after the restore operation, the appliance will synchronize data from a Microsoft server that has old data. If you synchronize old data, it might override new data. Infoblox recommends that you follow the steps mentioned below to prevent new data being replaced with the old one:

1. Disable DHCP synchronization for the Microsoft server before you restore data to the Microsoft server.
2. Restore the Microsoft DHCP server.
3. From the Microsoft server, which has the latest data, replicate its DHCP failover association and scopes to the restored Microsoft server. This ensures that both Microsoft servers have the same latest data.
4. Re-enable DHCP synchronization for the restored Microsoft server. NIOS will resynchronize with the Microsoft server.
