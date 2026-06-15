---
title: "Configuring an Active Directory Authentication Service Group"
source: "/space/nios90/1471512644"
pageId: "1471512644"
---
You can add multiple domain controllers to an AD authentication server group for redundancy. The NIOS appliance tries to connect with the first domain controller on the list. If it is unable to connect, it tries the next domain controller on the list, and so on.  
To configure an Active Directory authentication server group on the NIOS appliance:

1. From the **Administration** tab, click the **Authentication** **Server** **Groups** tab.
2. Click the **Active** **Directory** **Services** subtab and click the Add icon.
3. In the *Add* *Active* *Directory* *Authentication* *Service* wizard, complete the following:
   
   - **Name:** Enter a name for the service.
   - **Active** **Directory** **Domain**: Enter the AD domain name.
   - **Domain** **Controllers**: Click the Add icon and complete the following to add an AD domain controller:
     
     - **Server** **Name** **or** **IP** **Address:** Enter the FQDN or the IP address of the AD server that is used for authentication.
     - **Comment:** Enter additional information about the AD server.
     - **Authentication** **Port**: Enter the port number on the domain controller to which the appliance sends authentication requests. The default is 389.
     - **Encryption:** Select **SSL** from the drop-down list to transmit through an SSL (Secure Sockets Layer) tunnel. When you select SSL, the appliance automatically updates the authentication port to 636. Infoblox strongly recommends that you select this option to ensure the security of all communications between the NIOS appliance and the AD server. If you select this option, you must upload a CA certificate from the AD server. Click **CA** **Certificates** to upload the certificate. In the *CA* *Certificates* dialog box, click the Add icon, and then navigate to the certificate to upload it.
     - **Connect** **through** **Management** **Interface:** Select this so that the NIOS appliance uses the MGMT port for administrator authentication communications with just this AD server.
     - **Disable** **server:** Select this to disable an AD server if, for example, the connection to the server is down and you want to stop the NIOS appliance from trying to connect to this server.
     - Click **Test** to test the configuration. If the NIOS appliance connects to the domain controller using the configuration you entered, it displays a message confirming the configuration is valid. If it is unable to connect to the server, the appliance displays a message indicating an error in the configuration.
     - Click **Add** to add the domain controller to the group.
       
       When you add multiple domain controllers, the appliance lists the servers in the order you added them. This list also determines the order in which the NIOS appliance attempts to contact a domain controller. You can move a server up or down the list by selecting it and clicking the up or down arrow.  
       You can also delete a domain controller by selecting it and clicking the Delete icon.
     - **Timeout(s):** The number of seconds that the NIOS appliance waits for a response from the specified authentication server. The default is 5.
     - **Comment:** Enter additional information about the service.
     - **Disable**: Select this to retain an inactive AD authentication service profile.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
