---
title: "Authenticating Admin Accounts Using TACACS+"
source: "/space/nios90/280668479"
pageId: "280668479"
---
You can configure NIOS to authenticate admins against TACACS+ (Terminal Access Controller Access-Control System Plus) servers. TACACS+ provides separate authentication, authorization, and accounting services. To ensure reliable delivery, it uses TCP as its transport protocol, and to ensure confidentiality, all protocol exchanges between the TACACS+ server and its clients are encrypted. For detailed information about TACACS+, refer to the Internet draft [*https://tools.ietf.org/html/draft-grant-tacacs-02*](http://tools.ietf.org/html/draft-grant-tacacs-02).  
In addition, you can configure a custom service, infoblox, on the TACACS+ server, and then define a user group and specify the group name in the custom attribute infoblox-admin-group. Ensure that you apply the user group to the custom service infoblox. On NIOS, you define a group with the same name and add it to the authentication policy.  
Then when the TACACS+ server responds to an authentication and authorization request and includes the infoblox-admin-group attribute, NIOS can match the group name with the group in the authentication policy and automatically assign the admin to that group.  
The following figure illustrates the TACACS+ authentication and authorization process when PAP/CHAP authentication is used.  
  
*TACACS+* *Authentication*

*[drawio]*

**TACACS+** **Accounting**   
When you enable TACACS+ accounting, NIOS sends the TACACS+ accounting server a TACACS+ accounting event with the same information that it sends to the Audit Log for any user command/event. NIOS sends an accounting start packet when a user first logs in successfully using TACACS+ authentication, and it sends an accounting STOP packet when a user logs out of the GUI or CLI or when a GUI or CLI session times out. If a product restarts or software failure occurs, NIOS drops any outstanding accounting packets. Note that audit log entries that are greater than 3,600 characters are truncated in accounting events sent to TACAS+ servers.

# Configuring TACACS+

Complete the following tasks to enable NIOS and the TACACS+ servers to communicate. On each TACACS+ server that you are adding to the authentication server group:

- For Windows TACACS+ servers, add the NIOS appliance as an AAA client. This step is not required for LINUX TACACS+ servers.
- Determine which user group on the TACACS+ server is used to match the admin group in NIOS, and then configure the following settings for the user group:
  
  - Add "infoblox" as a custom service.
  - Define the custom attribute for the group, in the format: **infoblox-admin-group=** *group_name*. For example, **infoblox-admin-group=remoteadmins1**. The group name can have a maximum of 64 characters.

On the NIOS appliance:

- Create a TACACS+ authentication server group. You can create only one TACACS+ server group. For more information, see Configuring a TACACS+ Authentication Server Group below.
- Create the local admin group in NIOS that matches the user group on the TACACS+ server. Note that the NIOS admin group name must match the group name specified in the TACACS+ server and in the custom attribute. For example, if the custom attribute is **infoblox-admin-group=remoteadmins1**, then the admin group name must be **remoteadmins1**. In addition, you can designate a default admin group for remote admins. For information about configuring group permissions and privileges, see [*About Admin Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups)*.*
- In the authentication policy, add the newly configured TACACS+ server group and the TACACS+ admin group name. See [*Defining the Authentication Policy*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/defining-the-authentication-policy) for more information about configuring an admin policy.

# Configuring a TACACS+ Authentication Server Group

You can add multiple TACACS+ servers to the TACACS+ authentication server group. NIOS sends authentication requests to the TACACS+ servers in the order they are listed. NIOS sends authentication requests to the first server on the list. If that server is unreachable or generates an error, then NIOS sends the request to the next server in the list that has not been previously queried, and so on. NIOS logs an error message in syslog if all servers have been queried and they all generate errors or are unreachable.  
To configure a TACACS+ authentication server group:

1. From the **Administration** tab, click the **Authentication** **Server** **Groups** tab.
2. Click the **TACACS+** **Services** subtab and click the Add icon.
3. In the *Add* *TACACS+* *Service* wizard, complete the following:
   
   - **Name:** Enter a name for the server group.
   - **TACACS+** **Servers:** Click the Add icon and complete the following:
     
     - **Server** **Name** **or** **IP** **address:** Enter the FQDN or IP address of the TACACS+ server used for authentication. Both IPv4 and IPv6 addresses are supported.
     - **Comment:** You can enter additional information about the server.
     - **Port:** The TCP destination port for TACACS+ communication. This port is used for authentication, accounting and authorization packets. The default is port 49.
     - **Authentication** **Type:** Select **ASCII**, **PAP** or **CHAP**. The default is **CHAP**.
     - **Shared** **Secret:** The shared key that the NIOS appliance and the TACACS+ server use to encrypt and decrypt messages.
     - **Enable** **Accounting:** Select this to enable NIOS to send accounting information to the TACACS+ server.
     - **Connect through Management Interface**: Select this checkbox to enable the appliance to use the MGMT port to communicate with the TACACS+ server. Ensure that the MGMT port is configured. Otherwise, the appliance will use the LAN interface
     - **Disable** **Server:** Select this to prevent queries from being sent to this server. You can retain the configuration, but disable the service.  
       Click **Test** to test the configuration. Click **Add** to add the TACACS+ server to the list.   
       When you add multiple TACACS+ servers, the appliance lists the servers in the order you added them. This list also determines the order in which the NIOS appliance attempts to contact a TACACS+ server. You can move a server up or down the list by selecting it and clicking the up or down arrow.
     - **Authentication/Authorization:** Optionally, modify the authentication and authorization settings. These settings apply to all TACACS+ servers that you configure on the NIOS appliance.
       
       - **Timeout(s):** Specify the number of seconds or milliseconds that the appliance waits for a response from the TACACS+ server before it tries to contact it again. The amount of time before the server is retried. The default and minimum is 5000, and the maximum is 60000.
       - **Retries:** Specify how many times NIOS attempts to contact a TACACS+ server and fails before it tries to contact the next server on the list. The default is 0. The maximum is 5.
     - **Accounting**: Optionally, modify the Accounting settings.
       
       - **Timeout(s):** Specify the number of seconds or milliseconds that the appliance waits for a response from the TACACS+ server. The amount of time before the server is retried. The default and minimum is 1000, and the maximum is 30000.
       - **Retries:** Specify how many times the appliance attempts to contact an accounting TACACS+ server and fails before it tries to contact the next accounting server on the list. The default is 0. The maximum is 5.
     - **Comment:** Enter additional information about the service.
     - **Disable**: Select this to retain an inactive TACACS+ authentication service profile.
4. Save the configuration.
