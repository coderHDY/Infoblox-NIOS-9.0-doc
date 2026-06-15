---
title: "How To Specify Appliance Settings"
source: "/space/nios90/1432819008"
pageId: "1432819008"
---
When you make the initial HTTPS connection to the NIOS appliance, the NIOS Startup Wizard guides you through the basic deployment of the appliance on your network. Use the wizard to enter the following information:

- Deployment: single independent appliance
- Host name: [ns1.corpxyz.com](http://ns1.corpxyz.com)
- Password: SnD34n534
- NTP (Network Time Protocol) server: 10.120.3.10; time zone: (UMT – 8:00 Pacific Time (US and Canada), Tijuana



1. Open an Internet browser window and enter [*https://10.1.5.2*](https://10.1.5.2).
2. Accept the certificate when prompted.  
   Several certificate warnings may appear during the login process. This is normal because the preloaded certificate is self-signed and has the hostname [*www.infoblox.com*](http://www.infoblox.com/)[,](http://www.infoblox.com/) which does not match the destination IP address you entered in step 1. To stop the warning messages from occurring each time you log in to Grid Manager, you can generate a new self-signed certificate or import a third-party certificate with a common name that matches the FQDN (fully-qualified domain name) of the appliance. This is a very simple process. For information about certificates, see [*Creating a Login Banner*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/318210233).
3. Enter the default username and password (**admin** and **infoblox**) on the Grid Manager login page, and then click **Login** or press **ENTER**. For information, see [*Logging on to the NIOS UI*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280759087).
4. Read the Infoblox End-User License Agreement, and then click **I** **Accept** to proceed.
5. Grid Manager may take a few seconds to load your user profile. In the first screen of the *NIOS* *Startup* wizard, complete the following:
   
   - **Type** **of** **Network** **Connectivity**: Select **IPv4** from the drop-down list.
   - **Are** **you** **configuring** **an** **HA** **pair** **or** **a** **standalone** **appliance?**: Select **Configuring** **a** **standalone** **appliance**. To configure an independent HA pair, see [*Deploying an Independent HA Pair*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667859).
6. Click **Next** and complete the following to configure network settings:
   
   - **Host** **Name**: Enter [**ns1.corpxyz.com**](http://ns1.corpxyz.com).
   - **Ports** **and** **Addresses**: Specify the network settings for LAN1 (IPv4) port.  
     Enter correct information for the following by clicking the field:
     
     - **IP** **Address**: Enter **10.1.5.2 **as the IPv4 address for the LAN1 port.
     - **Subnet** **Mask** **(IPv4)** **or** **Prefix** **Length** **(IPv6)**: Enter **255.255.255.0** as the subnet mask for the LAN1(IPv4) port.
     - **Gateway**: Enter **10.1.5.1** as the gateway of the subnet on which the LAN1 port is set.
     - **Port** ** Settings**: Use the default value **Automatic**.
7. Click **Next** and complete the following to set admin password:
   
   - **Would** **you** **like** **to** **set** **admin** **password?**: Click **Yes**.
   - **Password**: Enter **SnD34n534**.
   - **Retype** **Password**: Enter **SnD34n534** again.
8. Click **Next** and complete the following to configure the time settings:
   
   - **Time** **Zone**: Select UMT – 8:00 Pacific Time (US and Canada), Tijuana from the drop-down list.
   - **Would** **you** **like** **to** **enable** **NTP?**: Select **Yes** to synchronize the time with external NTP servers, and then click the Add icon. Grid Manager adds a row to the NTP Server table. Click the row and enter **10.120.3.10** in the **NTP** **Server** field.
9. Click **Next** to view the summary of the configuration. Review the information and verify that it is correct. You can change the information you entered by clicking **Previous** to go back to a previous step.
10. Click **Finish**.
