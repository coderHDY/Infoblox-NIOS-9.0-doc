---
title: "Logging on to the NIOS UI"
source: "/space/nios90/280759087"
pageId: "280759087"
---
The NIOS UI (also called Infoblox Grid Manager) is the web interface that provides access to your appliance for network and IP address management. It provides a number of tools that you can use to effectively manage your appliance and IP address space.

You can log in to Infoblox Grid Manager as long as you have permission to log in to the NIOS appliance. Superusers have unrestricted access to Grid Manager. Limited-access users require read-only or read-write permission to the data that they want to manage through Grid Manager. Grid Manager allows limited-access users to view and manage only the data for which they have permission. For example, to view IPv4 networks, you must have at least read-only permission to IPv4 networks, or to run a discovery, you must have read/write permission to the Network Discovery feature.

Note that superusers must configure admin groups and accounts in Grid Manager application of the NIOS appliance. In Infoblox Grid Manager, superusers can set and change permissions for specific objects, such as IPv4 networks, IPv6 networks, and resource records. For information about user accounts and administrative permissions, see [*Managing Administrators*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators).

Before you log in to Infoblox Grid Manager, ensure that you have installed your NIOS appliance as described in the installation guide, or the user guide that was shipped with your products and then configure your NIOS appliance accordingly. You must upload the CA certificate(s) that issued the client certificate to ensure a successful SSL/TLS connection to the appliance.

To log in to Infoblox Grid Manager, complete the following:

1. Open an Internet browser window and enter **https://*****&lt;IPaddress_or_hostname_of_your_NIOSappliance&gt;***.  
   Infoblox Grid Manager login page appears. For information, see [*Supported Browsers*](https://infoblox-docs.atlassian.net/wiki/spaces/BloxOneCloud/pages/35366258).
2. Enter your user name and password, and then click **Login** or press the **ENTER** key. The default user name is **admin** and the default password is **infoblox**. Note that if your password expired or was reset by a superuser, you may be required to enter a new password.
   
   - If you are a smart card user and two-factor authentication is enabled on the appliance, your user name, which is the same as your CN (common name) in the client certificate, appears automatically. Enter the password you use to log in to the user account. For information about two-factor authentication, see [*Authenticating Admins Using Two-Factor Authentication*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic).
   - In NIOS 8.5.2 or later, for a Grid Master or a standalone vNIOS instance deployed on AWS, you are prompted to reset the password on the first login attempt. You must reset the default password as a security requirement.
     
     - To reset, enter a new password and confirm it. The minimum password length must be four characters. It must consist of at least one uppercase character, one lowercase character, one numeric character, and one symbol character. Example: Infoblox1!.  
       If the symbol character is at the beginning of the password, then include the password within quotes (''). Example: '@Infoblox123'.
     - Alternatively, you can define a new password in the **User data** field of the AWS console, in which case, you are not prompted to reset the password on the first login in Grid Manager. For more information, see *Provisioning vNIOS for AWS Using the BYOL Model* in the [*Installation Guide for vNIOS for AWS*](https://infoblox-docs.refined.site/space/NAIG/22413317/Installation+Guide+for+vNIOS+for+AWS)* documentation.*
3. Read the *Infoblox End-User License Agreement* (EULA), and then click **I Accept**.  
   Note that if you want to view the privacy policy of Infoblox, then on the EULA screen, click **Infoblox Privacy Policy**. Grid Manager displays the policy on a new browser tab.
4. Click **OK**. The *Grid Setup* wizard appears.
