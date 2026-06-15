---
title: "Configuring Node 1"
source: "/space/nios90/1503691122"
pageId: "1503691122"
---
1. Open an Internet browser window and enter **https://* ******&lt;the***** ** ** *****IP***** ** ** *****address***** ** ** *****of***** ** ** *****the***** ** ** *****appliance&gt;***** ** to make an HTTPS connection to the first node. For information about supported browsers, see [*Supported*](/nios90/infoblox-nios-9-0-x/support-matrix)[   ](/nios90/infoblox-nios-9-0-x/support-matrix)[*Browsers*](/nios90/infoblox-nios-9-0-x/support-matrix)[.](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90draft&title=Chapter%201%20Infoblox%20Grid%20Manager&linkCreation=true&fromPageId=73275302)   
   Several certificate warnings may appear during the login process because the preloaded certificate is self-signed and has the hostname [*www.infoblox.com*](http://www.infoblox.com/)[,](http://www.infoblox.com/) which may not match the destination IP address that you entered in step 1. To stop the warning messages from occurring each time you log in to Grid Manager, you can generate a new self-signed certificate or import a third-party certificate with a common name that matches the FQDN (fully qualified domain name) of the appliance. For information, see [*Creating a Login Banner*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/setting-login-options).
2. Enter the default username and password (**admin** and **infoblox**) on the Grid Manager login page, and then click **Login** or press **ENTER**. For information, see [*Logging on to the NIOS UI*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/logging-on-to-the-nios-ui).
3. Read the Infoblox End-User License Agreement, and then click **I** **Accept** to proceed.
4. Grid Manager may take a few seconds to load your user profile. In the first screen of the *Grid* *Setup* wizard, select **Configure** **a** **Grid** **Master** and click **Next**.
5. Specify the following:
   
   - **Grid** **Name**: Type the name of the Grid. The default name is *Infoblox*.
   - **Shared** **Secret:** Enter the shared secret that both nodes use to authenticate each other when establishing a VPN tunnel for ensuing bloxSYNC traffic. The default shared secret is **test**.  
     **Note: **The combined length of **Shared Secret** and **Grid Name** should not exceed 100 characters
   - **Confirm** **Shared** **Secret:** Enter the shared secret again.
   - **Host** **Name**: Enter a valid domain name for the node.
   - **Type** **of** **Network** **Connectivity:** Select the type of network connectivity from the drop-down list:
     
     - **IPv4** **and** **IPv6:** Select this to configure a dual mode HA pair.
     - **IPv4:** Select this to configure an IPv4 HA pair.
     - **IPv6**: Select this to configure an IPv6 HA pair.
   - Select **Yes** in the **Is** **the** **Grid** **Master** **an** **HA** **pair** field for the first appliance of the HA pair.
     
     - **Send** **HA** **and** **Grid** **Communication** **over:** Select either **IPv4** or **IPv6**. This field is displayed only when you configure a dual mode (IPv4 and IPv6) HA pair.
6. Click **Next** and complete the following to set properties for the first node:
   
   - **Virtual** **Router** **ID**: Enter the VRID (virtual router ID). This must be a unique VRID number—from 1 to 255—for this subnet.
   - (Only for NIOS 9.0.4 or later) **Public Cloud**: Select the checkbox If you are deploying the vNIOS instance on a public cloud platform, and then choose the platform from the drop-down list. This option appears after you select **Yes** for **Is the Grid Master an HA pair?**.  
     Note that HA configuration with IPv6 networks is not supported on public cloud platforms.
   - **Ports** **and** **Addresses**: This table lists the network interfaces depending on the type of network connectivity. For IPv4 HA pair, specify the network information for VIP (IPv4), Node1 HA (IPv4), Node2 HA (IPv4), Node1 LAN1 (IPv4), and Node2 LAN1 (IPv4) interfaces. For IPv6 HA pair, specify the network information for VIP (IPv6), Node1 LAN1 (IPv6), and Node2 LAN1 (IPv6) interfaces.  
     For a dual mode HA pair, if you select **IPv4** in the **Send** **HA** **and** **Grid** **Communication** **over** field in step 2 of the *NIOS* *Startup* wizard, specify the network information for the following interfaces: VIP (IPv4), Node1 HA (IPv4), Node1 LAN1 (IPv4), Node2 HA (IPv4), Node2 LAN1 (IPv4), VIP (IPv6), Node1 LAN1 (IPv6), and Node2 LAN1 (IPv6) ports. If you select **IPv6** in the **Send** **HA** **and** **Grid** **Communication** **over** field in step 2 of the *NIOS* *Startup* wizard, specify the network information for the following interfaces: VIP (IPv4), Node1 LAN1 (IPv4), Node2 LAN1 (IPv4), VIP (IPv6), Node1 LAN1 (IPv6), and Node2 LAN1 (IPv6).  
     Click the empty fields and complete the following information:
     
     - **Interface**: Displays the name of the interface. You cannot modify this.
     - **Address**: Type the IPv4 or IPv6 address depending on the type of interface.
     - **Subnet** **Mask** **(IPv4)** **or** **Prefix** **Length** **(IPv6)**: Specify an appropriate subnet mask for IPv4 address or prefix length for IPv6 address. The prefix length ranges from 2 to 127.
     - **Gateway**: Type the IPv4 or IPv6 address of the default gateway depending on the type of interface. For IPv6 interface, you can also type Automatic to enable the appliance to acquire the IPv6 address of the default gateway and the link MTU from router advertisements.
     - **Port** **Settings**: Select the port settings from the drop-down list. The list contains all settings supported by the hardware model. The default is **Automatic**. The appliance automatically detects the port settings.
7. Click **Next** and complete the following to set admin password:
   
   - **Yes**: To change the default password.
   - **No**: To keep the default password.  
     If you select **Yes**, complete the following:
   - **Password**: Enter a password for the superuser admin account. The password cannot contain spaces and it must be at least four characters long. The password is case-sensitive.
   - **Retype** **Password**: Enter the same password.
8. Click **Next** and complete the following to configure time settings:
   
   - **Time** **Zone**: Select the applicable time zone from the drop-down list. The default is **UTC**.
   - **Would** **you** **like** **to** **enable** **NTP?**:
   - Select **Yes** to synchronize the time with external NTP servers. Click the Add icon. Grid Manager adds a row to the NTP Server table. Click the row and enter either the IPv4 or IPv6 address or the resolvable host name of an NTP server. You can view a list of public NTP servers at [ntp.isc.org](http://ntp.isc.org).
   - Select **No** to specify a date and time.
     
     - **Date**: Enter the data in YYYY-MM-DD format. You can also click the calendar icon to select a date from the calendar widget.
     - **Time**: Enter the time in HH:MM:SS AM/PM format. You can also click the clock icon to select a time from the drop-down list.
9. Click **Next** to view the summary of the configuration. Review the information and verify that it is correct. You can change the information you entered by clicking **Previous** to go back to a previous step.
10. Click **Finish**.
