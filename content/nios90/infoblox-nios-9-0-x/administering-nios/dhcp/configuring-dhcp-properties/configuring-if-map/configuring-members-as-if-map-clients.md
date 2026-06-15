---
title: "Configuring Members as IF-MAP Clients"
source: "/space/nios90/1462403474"
pageId: "1462403474"
---
To configure a member to be an IF-MAP client, you must first enable IF-MAP on the member and then configure a client authentication method. The IF-MAP client can authenticate itself to the IF-MAP server through user name and password credentials or digital certificate. Note that each member must have unique credentials or certificates. You cannot use the same credentials or certificates on multiple members. The appliance supports only one CA-signed certificate on each member. If you want to use a roll-over certificate, you must replace the existing certificate and restart services on the member.  
To enable an appliance to function as an IF-MAP client:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; *member* checkbox, and then click the Edit icon.
2. In the *Member* *DHCP* *Properties* dialog box, click **Toggle** **Advanced** **Mode**.
3. Click the **IF-MAP** tab and complete the following:
   
   - **Enable** **IF-MAP**: Select this checkbox to enable the IF-MAP service on the member. Note that you must enable the IF-MAP service in order to enable or disable publishing at the network and range levels.
   - **Authentication**: Select one of the following authentication methods:
     
     - **Certificate**: Select this to use the IF-MAP client certificate for client authentication. You must already have a certificate configured for the member before you can select and save this configuration. For information about creating a client certificate, see Creating IF-MAP Client Certificates below.
     - **Basic**: Select this to use username and password credentials for IF-MAP client authentication.  
       Complete the following:
       
       - **Username**: Enter the username the member uses to connect to the IF-MAP server. This username must have been configured as a valid username on the IF-MAP server. Each member must have its own username.
       - **Password**: Enter the password the member uses to connect to the IF-MAP server.
       - **ConfirmPassword**: Enter the password again.  
         Note when you upgrade to a new NIOS release, the basic authentication credentials are retained if IF-MAP was enabled and basic authentication was used before the upgrade.
     - **Enable** **IF-MAP** **publishing**: Click **Override** to override the Grid setting. Select this checkbox to enable IF-MAP publishing for all the networks that are served by this member. Ensure that you enable IF-MAP at either the Grid or member level in order to enable IF-MAP publishing for all networks.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
