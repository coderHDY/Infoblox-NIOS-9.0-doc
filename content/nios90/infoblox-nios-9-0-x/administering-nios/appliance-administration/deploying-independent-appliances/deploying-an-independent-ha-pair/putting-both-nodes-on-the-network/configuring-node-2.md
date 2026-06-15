---
title: "Configuring Node 2"
source: "/space/nios90/1503166849"
pageId: "1503166849"
---
1. Open an Internet browser window and enter **https://* ******&lt;the***** ** ** *****IP***** ** ** *****address***** ** ** *****of***** ** ** *****the***** ** ** *****appliance&gt;***** ** to make an HTTPS connection to the second node. For information about supported browsers, see [*Supported*](/nios90/infoblox-nios-9-0-x/support-matrix/Support+Matrix#SupportMatrix-SupportedBrowsers)[   ](/nios90/infoblox-nios-9-0-x/support-matrix/Support+Matrix#SupportMatrix-SupportedBrowsers)[*Browsers*](/nios90/infoblox-nios-9-0-x/support-matrix/Support+Matrix#SupportMatrix-SupportedBrowsers).  
   Several certificate warnings may appear during the login process because the preloaded certificate is self-signed and has the host name [*www.infoblox.com*](http://www.infoblox.com/)[,](http://www.infoblox.com/) which may not match the destination IP address you entered in step 1. To stop the warning messages from occurring each time you log in to Grid Manager, you can generate a new self-signed certificate or import a third-party certificate with a common name that matches the FQDN (fully qualified domain name) of the appliance. For more information, see [*Creating a Login Banner*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/setting-login-options).
2. Enter the default username and password (**admin** and **infoblox**) on the Grid Manager login screen, and then click **Login** or press **ENTER**. For more information, see [*Logging on to the NIOS UI*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/logging-on-to-the-nios-ui).
3. Read the Infoblox End-User License Agreement, and then click **I** **Accept** to proceed.
4. Grid Manager may take a few seconds to load your user profile. In the first screen of the *NIOS* *Setup* wizard, complete the following:
   
   - **Type** **of** **Network** **Connectivity:** Select the type of network connectivity from the drop-down list:
     
     - **IPv4** **and** **IPv6:** Select this to configure a dual mode HA pair.
     - **IPv4:** Select this to configure an IPv4 HA pair.
     - **IPv6:** Select this to configure an IPv6 HA pair.
   - Select **Configuring** **an** **HA** **pair** to configure an independent HA pair and click **No** to configure the first node of an HA pair
5. Click **Next** and complete the following to configure network settings:
   
   - **HA** **Virtual** **IP** **address**: Enter the VIP (virtual IP) address and its netmask.
   - **HA** **Pair** **Name**: Enter a name for the HA pair. The default name is **Infoblox**. Ensure that you use the same name as the first node.
   - **Shared** **Secret**: Enter a text string that both nodes use as a shared secret to authenticate each other when establishing a VPN tunnel. The default shared secret is test. This must be the same shared secret that you entered on the first appliance.
   - **Show** **Password**: Click this to display the shared secret. Clear it to conceal the shared secret.
6. Click **Next**, and then complete the following to set properties for the second appliance:
   
   - **IP** **Address**: Enter the IPv4 or IPv6 address of the appliance.
   - **Subnet** **Mask**: Enter the subnet mask of the appliance.   
     Or  
     **Prefix** **Length**: Enter the prefix length if you have entered the IPv6 address in the **IP** **Address** field. The prefix length ranges from 2 to 127.
   - **Gateway**: Enter the IP address of the gateway of the subnet of the interface.
7. Click **Next** to view the summary of the configuration. Review the information and verify that it is correct. You can change the information you entered by clicking **Previous** to go back to a previous step.
8. Click **Finish**.

The setup of the HA pair is complete. When you next make an HTTPS connection to the HA pair, use the VIP address.

The communication protocol for all the services in a dual mode (IPv4 and IPv6) HA appliance is the same protocol as the one used for VRRP advertisements. For example, if you select **IPv4** in the **Send** **HA** **and** **Grid** **Communication** **Over** field on the first screen of the *NIOS* *Setup* wizard, then IPv4 is set as the communication protocol for all the services. However, you can override the communication protocol for all the services in a dual mode HA pair. For information, see [*Changing the Communication Protocol for a Dual Mode Independent  Appliance*](/nios90/by-id/1330774673).
