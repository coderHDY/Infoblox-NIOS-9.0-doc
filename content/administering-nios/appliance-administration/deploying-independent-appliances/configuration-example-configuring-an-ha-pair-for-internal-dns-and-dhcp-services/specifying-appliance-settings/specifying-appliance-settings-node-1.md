---
title: "Specifying Appliance Settings: Node 1"
source: "/space/nios90/1343848810"
pageId: "1343848810"
---
1. Open an Internet browser window and enter ** **[**https://10.1.4.6**](https://10.1.4.6).
2. Accept the certificate when prompted. Several certificate warnings may appear during the login process. This is normal because the preloaded certificate is self-signed and has the hostname [www.infoblox.com,](http://www.infoblox.com/) which does not match the destination IP address you entered in step 1. To stop the warning messages from occurring each time you log in to Grid Manager, you can generate a new self-signed certificate or import a third-party certificate with a common name that matches the FQDN (fully-qualified domain name) of the appliance. This is a very simple process. For information about certificates, see [*Setting Login Options*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/318210233/Setting+Login+Options#CreatingaLoginBanner).
3. Enter the default username and password (**admin** and **infoblox**) on the Grid Manager login page, and then click **Login** or press Enter. For information, see [*Logging on to the NIOS UI*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280759087).
4. Read the Infoblox End-User License Agreement, and then click **I** **Accept** to proceed. Grid Manager may take a few seconds to load your user profile.
5. In the first screen of the *NIOS* *Setup* wizard, complete the following:
   
   - **Type** **of** **Network** **Connectivity:** Select **IPv4** as the communication protocol from the drop-down list.
   - Select **Configuring** **an** **HA** **pair** and click **Yes** to configure the first appliance.
   - **Send** **HA** **and** **Grid** **Communication** **over:** Select **IPv4** from the drop-down list for VRRP advertisements.
6. In the *NIOS* *Startup* wizard, select **Configuring** **an** **HA** **pair**. Click **Yes** to configure the first appliance.
7. Click **Next** and complete the following to configure network settings:
   
   - **Host** **Name**: Enter [**ns3.corpxyz.com**](http://ns3.corpxyz.com)**.**
   - **HA** **Pair** **Name:** Use the default name **Infoblox**.
   - **Shared** **Secret:** Enter **37eeT1d**.
8. Click **Next** and complete the following to set properties for the first node:
   
   - **Virtual** **Router** **ID**: Enter **150**.
   - **Required** **Ports** **and** **Addresses**: In the table, click the empty fields and enter the following information for each corresponding interface in the table:
     
     - VIP (IPv4): **10.1.4.10**
     - Node 1 HA (IPv4): **10.1.4.7**
     - Node 2 HA (IPv4): **10.1.4.9**
     - Node 1 LAN1 (IPv4): **10.1.4.6**
     - Node 2 LAN1 (IPv4): **10.1.4.8**
     - Subnet Mask: **255.255.255.0**
     - Gateway: ** 10.1.4.1**  
       Note that Some fields are prepopulated by Grid Manager based on the existing configuration of the appliance. All fields are required.
9. Click **Next** and complete the following to set admin password:
   
   - **Would** **you** **like** **to** **set** **admin** **password?**: Click **No**.
10. Click **Next** and complete the following to configure time settings:
   
   - **Time** **Zone**: Select UMT – 8:00 Pacific Time (US and Canada), Tijuana from the drop-down list.
   - **Would** **you** **like** **to** **enable** **NTP?**: Select **Yes** to synchronize the time with external NTP servers, and then click the Add icon. Grid Manager adds a row to the NTP Server table. Click the row and enter **10.120.3.10** in the **NTP** **Server** field.
11. Click **Next** to view the summary of the configuration. Review the information and verify that it is correct. You can change the information you entered by clicking **Previous** to go back to a previous step.
12. Click **Finish**.
