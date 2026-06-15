---
title: "About Authentication Servers"
source: "/space/nios90/280663035"
pageId: "280663035"
---
You can create a RADIUS authentication server group for Sophos NAC Advanced servers, and then associate the group with the member DHCP server that sends authentication requests. The member DHCP server tries to connect to each Sophos NAC Advanced server in the group using one of the following methods: Ordered List or Round Robin.  
In the Ordered List method, the member DHCP server always selects the first Sophos NAC Advanced server in the list when it sends an authentication request. It only sends authentication requests to the next server on the list if the first server goes down.  
In the Round Robin method, the member DHCP server selects the first Sophos NAC Advanced server for the first request, the second server for the next request, and so on until it selects the last server in the list. Then it starts with the first server in the list and continues the same selection process.  
Each member DHCP server can have only one RADIUS server group assigned, but a RADIUS server group can be assigned to multiple member DHCP servers.

# Adding a Server Group

To create a RADIUS authentication server group for Sophos NAC Advanced servers:

1. From the **Administration** tab, click the **Authentication** **Server** **Groups** tab.
2. Expand the Toolbar and click **Add** -&gt; **RADIUS** **Service**.
3. In the *Add* *RADIUS* *Authentication* *Service* wizard, complete the following:
   
   - **Name:** Enter the name of the server group.
   - **RADIUS**** Servers:** Click the Add icon and enter the following:
     
     - **Server**** Name**** or ****IP**** Address:** Enter the Sophos NAC Advanced server FQDN or IP address.
     - **Comment:** You can enter additional information about the server.
     - **Authentication ****Port**: The destination port on the Sophos NAC Advanced server. The default is 1812.
     - **Authentication**** Type:** Select the authentication method of the RADIUS server from the drop-down list. You can specify either PAP (Password Authentication Protocol) or CHAP (Challenge Handshake Authentication Protocol). The default is PAP.
     - **Shared**** Secret:** Enter the shared secret that the member DHCP server and the Sophos NAC Advanced server use to encrypt and decrypt their messages. This shared secret must match the one you entered on the Sophos NAC Advanced server.
     - **Enable**** Accounting**: Leave this blank. RADIUS accounting is not supported.
     - **Connect**** through ****Management**** Interface:** Select this so that the NIOS appliance uses the MGMT port for communications with just this server.
     - **Disable**** server:** Select this to disable the Sophos NAC Advanced server if, for example, the connection to the server is down and you want to stop the DHCP server from trying to connect to this server.
     - Click **Test** to validate the configuration and check that the Grid Master can connect to the Sophos NAC Advanced server. Before you can test the configuration though, you must specify the authentication and accounting timeout values.  
       If the Grid Master connects to the Sophos NAC Advanced server using the configuration you entered, it displays a message confirming the configuration is valid. If it is unable to connect to the Sophos NAC Advanced server, the appliance displays a message indicating an error in the configuration.
     - Click **Add** to add the Sophos NAC Advanced server to the server group.
     
     When you add multiple Sophos NAC Advanced servers to the list, you can use the up and down arrows to change the position of the servers on the list. The member DHCP server connects to the Sophos NAC Advanced servers in the order they are listed.
   - **Authentication**
   - **Timeout:** The time that the member DHCP server waits for a response from a Sophos NAC Advanced server before considering it unreachable. You can enter the time in milliseconds or seconds.
   - **Retries:** The number of times the member DHCP server retries connecting to a Sophos NAC Advanced server before it considers the server unreachable. The default is five.
   - **Mode:** Specifies how the member DHCP server selects the first Sophos NAC Advanced server to contact.
     
     - **Ordered** **List:** The member DHCP server always selects the first Sophos NAC Advanced server in the list when it sends an authentication request. It queries the next server only when the first server is considered down. This is the default.
     - **Round** **Robin:** The member DHCP server selects the first Sophos NAC Advanced server for the first request, the second server for the next request, and so on. If the last server is reached, then the DHCP server starts with the first server in the list, and so on.
   - **Enable** **Authentication** **Cache:** The member DHCP server automatically caches authentication results for 120 seconds. When you enable this option, you can override this default in the **Cache** **Time** **to** **Live** field. You must enable this option to clear the cache, as described in Clearing the Authentication Cache below.
   - **Cache** **Time** **to** **Live:** Specifies the duration of time an authentication result is stored. The default is one hour. The maximum is 259200 seconds (3 days).
   - **Recovery** **Interval:** Specifies the duration of time a Sophos NAC Advanced server stays inactive after being down, before becoming eligible to have RADIUS requests sent to it. The recovery interval starts when a Sophos RADIUS server is first discovered to be down.
   - **Comment**: You can enter additional information about the server group.
   - **Disable**: Select this to disable the authentication server group.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

# Associating a Server Group with a Member

To associate an authentication server group with a member DHCP server:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; *member* checkbox box, and click the Edit icon.
2. If the *Member* *DHCP* *Properties* editor is in Basic mode, click **Toggle** **Expert** **Mode**.
3. Select the **IPv4** **Authenticated** **DHCP** tab.
4. Click the **Use** **this** **Authentication** **Server** **Group** **for** **Sophos/RADIUS** **Authenticated** **DHCP** checkbox, and then select a group from the drop-down list.
5. Save the configuration and click **Restart** if it appears at the top of the screen.

# Managing Server Groups

To view the list of authentication server groups, from the **Administration** tab, click the **Authentication** **Server** **Groups** tab and expand the **RADIUS** **Service** subtab. For each server group, you can view the server group name, comments, and whether the group is available or disabled. You can then select a server group to modify or delete it.  
To modify a server group, select it and click the Edit icon. You can modify any of its properties, and add or delete servers from the group. When you delete a Sophos NAC Advanced server from a group, the appliance permanently deletes it.  
To delete a server group, select it and click the Delete icon. When you delete an authentication server group, the appliance permanently deletes it.

# Clearing the Authentication Cache

The authentication cache can store authentication results for up to 20,000 DHCP clients. When the cache reaches its limit, the DHCP member logs a message in syslog. To clear the entire cache or the cache entry of a specific MAC address, you must enable the authentication cache in the RADIUS Service wizard or editor.  
To clear the entire authentication cache:

1. From the **Data**** Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; *member* checkbox.
2. Expand the Toolbar and select **Clear** -&gt; **Authentication ****Cache**.
3. When the **Clear**** Authentication ****Cache** confirmation dialog appears, click **Purge**.

To delete a specific entry:

1. From the **Data**** Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; *member* checkbox.
2. Expand the Toolbar and select **Clear** -&gt; **Authentication ****Record**.
3. In the **Clear**** Authentication ****Record** dialog box, enter the DHCP client MAC address, and then click **Purge**.
