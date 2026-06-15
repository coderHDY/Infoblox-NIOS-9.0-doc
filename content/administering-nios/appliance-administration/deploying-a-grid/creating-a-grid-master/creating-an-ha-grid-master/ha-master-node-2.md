---
title: "HA Master – Node 2"
source: "/space/nios90/1481016177"
pageId: "1481016177"
---
1. On your management system, open a new browser window, and connect to https://*ip_addr*, where *ip_addr* is the IP address of the LAN1 port on Node 2. IPv4 or IPv6 values are valid.  
   When you enter an IPv6 address, enclose the address in square brackets (as in https://[ip_addr] or https://[2001:db8::256:ABCD:EF12:34:1].
2. Log in using the default username and password **admin** and **infoblox**.
3. Read the Infoblox *End-User License Agreement* (EULA), and then click **I Accept**.  
   Note that if you want to view the privacy policy of Infoblox, then on the EULA screen, click **Infoblox Privacy Policy**. Grid Manager displays the policy on a new browser tab.
4. The *Grid Setup* wizard appears. On the first screen, select **Join** **Existing** **Grid** and click **Next**.
5. On the next screen, specify the Grid properties and click **Next**.
   
   - **Grid** **Name**: Enter a text string that the two appliances use to authenticate each other when establishing a VPN tunnel between them. This must match the Grid name you entered for Node 1.
   - **Grid Master's IP Address**: Enter the same VIP you entered for Node 1.
   - **Shared Secret**: Enter a text string that both appliances use as a shared secret to authenticate each other when establishing a VPN tunnel between them. This must match your entry in Node 1.
6. On the next screen verify the IP address settings of the member and click **Next**.   
   The last screen displays the settings you specified in the previous panels of the wizard.
7. Verify that the information is correct and click **Finish**.  
   The setup of the HA master is complete. From now on, when you make an HTTPS connection to the HA pair, use the VIP address.

The communication protocol for all the services in a dual mode (IPv4 and IPv6) HA Master is the same protocol as the one used for VRRP advertisements. For example, if you select **IPv4** in the **Send** **HA** **and** **Grid** **Communication** **over** field in step 2 of the *Grid* *Setup* wizard, then IPv4 is set as the communication protocol for all the services. However, you can override the communication protocol for all the services in a dual mode HA Master. For information, see [*Changing the Communication Protocol for a Dual Mode Appliance*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1483637004).
