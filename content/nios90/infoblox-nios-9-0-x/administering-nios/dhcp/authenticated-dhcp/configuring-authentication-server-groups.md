---
title: "Configuring Authentication Server Groups"
source: "/space/nios90/280663135"
pageId: "280663135"
---
Create an authentication server group if you want the captive portal server to authenticate users when they register. You can create an authentication server group with RADIUS servers, LDAP servers, or Active Directory servers, and then associate the group with the member that runs the captive portal and sends the authentication requests. You can associate an authentication server group with multiple captive portals, but you can associate a captive portal with only one authentication server group.  
The following sections provide instructions for creating a RADIUS authentication server group, an AD authentication server group and an LDAP server group:

*[toc]*

# Configuring a RADIUS Authentication Server Group

You can add multiple RADIUS servers to an authentication server group and prioritize them. When the member sends an authentication request, it always selects the first RADIUS server in the list. It only sends authentication requests to the next server on the list if the first server goes down.  
To configure the RADIUS authentication server group to which a captive portal server sends authentication requests:

1. From the **Administration** tab, click the **Authentication** **Server** **Groups** tab.
2. Expand the Toolbar and click **Add** -&gt; **RADIUS** **Service**.
3. In the *Add* *RADIUS* *Authentication* *Service* wizard, complete the following:
   
   - **Name:** Enter the name of the server group.
   - **RADIUS**** Servers:** Click the Add icon and enter the following:
     
     - **Server**** Name**** or**** IP**** Address:** Enter the RADIUS server FQDN or IP address.
     - **Comment:** You can enter additional information about the server.
     - **Authentication**** Port**: The destination port on the RADIUS server. The default is 1812.
     - **Authentication**** Type:** Select the authentication method of the RADIUS server from the drop-down list. You can specify either PAP (Password Authentication Protocol) or CHAP (Challenge Handshake Authentication Protocol). The default is PAP.
     - **Shared**** Secret:** Enter the shared secret that the member DHCP server and the RADIUS server use to encrypt and decrypt their messages. This shared secret must match the one you entered on the RADIUS server and must be between 4 and 64 characters (inclusive) in length.
     - **Connect**** through**** Management ****Interface:** Select this to enable the member to use its MGMT port to communicate with just this server.
     - **Disable ****server:** Select this to disable the RADIUS server if, for example, the connection to the server is down and you want to stop the DHCP server from trying to connect to this server.
     - Click **Test** to validate the configuration and check that the Grid Master can connect to the RADIUS server. Before you can test the configuration though, you must specify the authentication and accounting timeout and retry values.  
       If the Grid Master connects to the RADIUS server using the configuration you entered, it displays a message confirming the configuration is valid. If it is unable to connect to the RADIUS server, the appliance displays a message indicating an error in the configuration.
     - Click **Add** to add the RADIUS server to the group.
     
     When you add multiple RADIUS servers to the list, you can use the up and down arrows to change the position of the servers on the list. The member DHCP server connects to the RADIUS servers in the order they are listed.
   - **Authentication ****Timeout:** The time that the member DHCP server waits for a response from a RADIUS server before considering it unreachable. You can enter the time in milliseconds or seconds. The maximum is 10 seconds.
   - **Retries:** The number of times the member DHCP server retries connecting to a RADIUS server before it considers the server unreachable. The default is five.
   - **Accounting ****Timeout:** The time that the member DHCP server waits for a response from a RADIUS server before considering it unreachable. You can enter the time in milliseconds or seconds. The maximum is 10 seconds.
   - **Retries:** The number of times the member DHCP server retries connecting to a RADIUS server before it considers the server unreachable. The default is five.
   - **Recovery** **Interval:** Specifies the duration of time a RADIUS server stays inactive after being down, before becoming eligible to have RADIUS requests sent to it. The recovery interval starts when a RADIUS server is first discovered to be down.
   - **Comment**: You can enter additional information about the server group.
   - **Disable**: Select this to disable the authentication server group.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

# Configuring an Active Directory Authentication Server Group

1. From the **Administration** tab, click the **Authentication** **Server** **Groups** tab.
2. Click the **Active** **Directory** **Services** subtab and click the Add icon.
3. In the *Add* *Active* *Directory* *Authentication* *Service* wizard, complete the following:
   
   - **Name:** Enter a name for the service.
   - **Active** **Directory** **Domain**: Enter the AD domain name.
   - **Domain** **Controllers**: Click the Add icon and complete the following to add an AD domain controller:
     
     - **Server** **Name** **or** **IP** **Address:** Enter the FQDN or the IP address of the AD server that is used for authentication.
     - **Comment:** Enter additional information about the AD server.
     - **Authentication** **Port**: Enter the port number on the domain controller to which the member sends authentication requests. The default is 389.
     - **Encryption:** Select **SSL** from the drop-down list to transmit through an SSL (Secure Sockets Layer) tunnel. When you select SSL, the appliance automatically updates the authentication port to 636. Infoblox strongly recommends that you select this option to ensure the security of all communications between the member and the AD server. If you select this option, you must upload a CA certificate from the AD server. Click **CA** **Certificates** to upload the certificate. In the *CA* *Certificates* dialog box, click the Add icon, and then navigate to the certificate to upload it.
     - **Connect** **through** **Management** **Interface:** Select this so that the member uses the MGMT port for administrator authentication communications with just this AD server.
     - **Disable** **server:** Select this to disable an AD server if, for example, the connection to the server is down and you want to stop the Grid member from trying to connect to this server.
     - Click **Test** to test the configuration. If the Grid member connects to the domain controller using the configuration you entered, it displays a message confirming the configuration is valid. If it is unable to connect to the server, the appliance displays a message indicating an error in the configuration.
     - Click **Add** to add the domain controller to the group.
   - **Timeout(s):** The number of seconds that the Grid member waits for a response from the specified authentication server. The default is 5.
   - **Comment:** Enter additional information about the service.
   - **Disable**: Select this to retain an inactive AD authentication service profile.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

# Managing Multiple Domain Controllers

You can create multiple domain controllers on the Microsoft server and associate it with a single Active Directory Domain, which is synchronized by multiple Grid members within the same Grid:

- Synchronization happens from only one Grid member that is a Microsoft server, which is referred as the master, at a time in a given network view.
- If the master Microsoft server fails the synchronization three times in a row, it loses its master status.
- The Grid Master will periodically ensure that for each Active Director Domain there is one Microsoft server with the master status. Otherwise, the appliance selects a new master, based on the following:
  
  - Microsoft server that has been designated as the Grid Master for the longest time previously.
  - Microsoft server configured in read/write synchronization mode.
- The master server is indicated within the Active Directory Domain object.
- Synchronization mode changes based on the master.
- When synchronization happens in two separate network views, respective Grid members synchronize data simultaneously.
