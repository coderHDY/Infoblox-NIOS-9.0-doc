---
title: " HA Master – Node 1"
source: "/space/nios90/1481016146"
pageId: "1481016146"
---
1. On your management system, open a browser window, and connect to https://*ip_addr*, where *ip_addr* is the IP address of the LAN1 port on Node 1. IPv4 and IPv6 values are valid, based on the LAN1 port configuration.
2. Log in using the default username and password: **admin** and **infoblox**. For detailed information about logging in to the GUI, see [*Logging on to the NIOS UI*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/logging-on-to-the-nios-ui).
3. Read the Infoblox *End-User License Agreement* (EULA), and then click **I Accept**.  
   Note that if you want to view the privacy policy of Infoblox, then on the EULA screen, click **Infoblox Privacy Policy**. Grid Manager displays the policy on a new browser tab.
4. The *Grid Setup* wizard appears. On the first screen, select **Configure a Grid Master** and click **Next**.
5. On the next screen, specify the Grid properties and click **Next**:
   
   - **Grid Name**: Enter a text string that the two appliances use to authenticate each other when establishing a VPN tunnel between them. The default Grid name is **Infoblox**.
   - **Shared Secret**: Enter a text string that both appliances use as a shared secret to authenticate each other when establishing a VPN tunnel between them. The default shared secret is **test**.   
     **Note**: The combined length of the **Shared Secret** and **Grid Name** fields must not exceed 100 characters.
   - **Confirm Shared Secret**: Enter the shared secret again.
   - **Hostname**: Enter a valid domain name for the appliance.
   - **Type of Network Connectivity**: Select the type of network connectivity from the drop-down list:  
     Note that HA configuration with IPv6 networks is not supported on public cloud platforms.
     
     - **IPv4 and IPv6**: Select this to configure a dual mode HA Master.
     - **IPv4**: Select this to configure an IPv4 HA Master.
     - **IPv6**: Select this to configure an IPv6 HA Master.
   - **Is the Grid Master an HA pair?**: Select **Yes**.
     
     - **Send HA and Grid Communication over**: This field is displayed only when you are configuring a dual mode HA pair. Select either **IPv4** or **IPv6** as the communication protocol for VRRP advertisements.
     
     Note:
     
     - Infoblox recommends that you back up the configuration after you convert a Grid to a different mode.
     - Restoring the old backup by performing a forced restore, may prevent the Grid members from rejoining the Grid Master after the restore.
6. On the next screen, specify the network properties and click **Next**:  
   Note: If you are deploying HA over a public cloud platform such as AWS, Azure, or Google Cloud, see the [*HA Master - Node 1 Deployed on Public Cloud*](/nios90/by-id/1480950527) section for additional steps.
   
   - **Virtual** **Router** **ID**: Enter the VRID (virtual router ID). This must be a unique VRID number—from 1 to 255—for this subnet.
   - **Ports** **and** **Addresses**: This table lists the network interfaces based on the type of network connectivity of the HA Master.  
     For IPv4 HA Master, specify the network information for VIP (IPv4), Node1 HA (IPv4), Node2 HA (IPv4), Node1 LAN1 (IPv4), and Node2 LAN1 (IPv4) interfaces.  
     For IPv6 HA Master, specify the network information for VIP (IPv6), Node1 LAN1 (IPv6), and Node2 LAN1 (IPv6) interfaces.  
     For a dual mode HA Master, if you select **IPv4** in the **Send** **HA** **and** **Grid** **Communication** **over** field, specify the network information for the following interfaces: VIP (IPv4), Node1 HA (IPv4), Node1 LAN1 (IPv4), Node2 HA (IPv4), Node2 LAN1 (IPv4), VIP (IPv6), Node1 LAN1 (IPv6), and Node2 LAN1 (IPv6) interfaces.  
     For a dual mode HA Master, if you select **IPv6** in the **Send** **HA** **and** **Grid** **Communication** **over** field, specify the network information for the following interfaces: VIP (IPv4), Node1 LAN1 (IPv4), Node2 LAN1 (IPv4), VIP (IPv6), Node1 LAN1 (IPv6), and Node2 LAN1 (IPv6) interfaces.  
     Enter correct information for the following by clicking the field:
     
     - **Interface**: Displays the name of the interface. You cannot modify this.
     - **Address**: Type the IPv4 or IPv6 address depending on the type of interface.
     - **Subnet** **Mask** **(IPv4)** **or** **Prefix** **Length** **(IPv6)**: Specify an appropriate subnet mask for IPv4 address or prefix length for IPv6 address. The prefix length ranges from 2 to 127.
     - **Gateway**: Type the IPv4 or IPv6 address of the default gateway depending on the type of interface. For the IPv6 interface, you can also type **Automatic** to enable the appliance to acquire the IPv6 address of the default gateway and the link MTU from router advertisements.
       
       Note  
       You can now define a link-local address as the default IPv6 gateway and isolate the LAN segment so that the local router can provide global addressing and access to the network and Internet. This is supported for both LAN1, LAN2, and VLAN interfaces, as well as LAN1, LAN2, VLAN in the failover mode. However, the link-local address does not support the following:
       
       - IPv6 link local gateway for the MGMT interface.
       - IPv6 link local is not supported for addresses. It supported only for gateways.
     - **VLAN Tag**: For a VLAN, enter the VLAN tag or ID. You can enter a number from 1 to 4094. Ensure that you configure the corresponding switch accordingly.
     - **Port Settings**: From the drop-down list, choose the connection speed that you want the port to use. You can also choose the duplex setting. Choose **Full** for concurrent bidirectional data transmission or **Half** for data transmission in one direction at a time. Select **Automatic** to instruct the NIOS appliance to negotiate the optimum port connection type (full or half duplex) and speed with the connecting switch automatically. This is the default setting. You cannot configure port settings for vNIOS appliances.
7. Optionally, enter a new password and click **Next**. The password must be a single string (no spaces) that is at least four characters long.
8. Select the time zone of the Grid Master and indicate whether the Grid Master synchronizes its time with an NTP (Network Time Protocol) server.
   
   - If you choose to enable NTP, click the Add icon and enter the IP address of an NTP server. Entries may be an IPv4 or IPv6 address. You can enter IP addresses for multiple NTP servers.
   - If you choose to disable NTP, set the date and time for the appliance.
   - Click **Next**.
9. The last screen displays the settings you specified in the previous panels of the wizard. Verify that the information is correct and click **Finish**. The application restarts after you click **Finish**.  
   Note that the *Grid Setup Wizard* provides options such as not changing the default password and manually entering the time and date. However, changing the password and using an NTP server improves security and accuracy (respectively), and so these choices are presented here.
   
   Record and retain this information in a safe place. If you forget the shared secret, you need to contact Infoblox Technical Support for help. When you add an appliance to the Grid, you must configure it with the same Grid name, shared secret, and VPN port number that you configure on the Grid Master.
10. Close the management window. The configuration for Node 1 is complete.
