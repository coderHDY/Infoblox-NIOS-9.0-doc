---
title: "Authenticating Admins Using RADIUS"
source: "/space/nios90/280275320"
pageId: "280275320"
---
RADIUS provides authentication, accounting, and authorization functions. The NIOS appliance supports authentication using the following RADIUS servers: FreeRADIUS, Microsoft, Cisco, and Funk.  
When NIOS authenticates administrators against RADIUS servers, NIOS acts similarly to a network access server (NAS), which is a RADIUS client that sends authentication and accounting requests to a RADIUS server. The following figure illustrates the RADIUS authentication process.

*Authentication* *using* *a* *RADIUS* *server*

*[drawio]*

#   
Authentication Protocols

When you configure the NIOS appliance to authenticate admins against a RADIUS server group, you must specify the authentication protocol of each RADIUS server, which can be either PAP (Password Authentication Protocol) or CHAP (Challenge Handshake Authentication Protocol).  
PAP tries to establish the identity of a host using a two-way handshake. The client sends the user name and password in clear text to the NIOS appliance. The appliance uses a shared secret to encrypt the password and sends it to the RADIUS server in an Access-Request packet. The RADIUS server uses the shared secret to decrypt the password. If the decrypted password matches a password in its database, the user is successfully authenticated and allowed to log in.  
With CHAP, when the client tries to log in, it sends its user name and password to the NIOS appliance. The appliance then creates an MD5 hash of the password together with a random number that the appliance generates. It then sends the random number, user name, and hash to the RADIUS server in an Access-Request package. The RADIUS server takes the password that matches the user name from its database and creates its own MD5 hash of the password and random number that it received. If the hash that the RADIUS server generates matches the hash that it received from the appliance, then the user is successfully authenticated and allowed to log in.  
You can configure one of the following modes to send the authentication request to the RADIUS server:

- Ordered: In this mode, the authentication request is sent to the first server in the list. The authentication request is sent to the next server only when the first server is out of service or unavailable.
- Round Robin: In this mode, the first authentication request is sent to a server chosen randomly in a group. If there is no response from the server, continued attempts are performed sequentially until it selects the last server in the list. Then it starts with the first server in the list and continues the selection process until all the servers have been attempted.

# Accounting Activities Using RADIUS

You can enable the accounting feature on the RADIUS server to track whether an administrator has initiated a session. After an administrator successfully logs in, the appliance sends an Accounting-Start packet to the RADIUS server.

# Configuring Remote RADIUS Servers

For NIOS to communicate with a RADIUS server, you must also set up the remote RADIUS server to communicate with the NIOS appliance.

> **warning**
>
> ### Note
> 
> If you have two Infoblox appliances in an HA pair, enter both the members of the HA pair as separate access appliances and use the LAN or MGMT IP address of both appliances (not the VIP address), if configured.

Depending on your particular RADIUS server, you can configure the following RADIUS server options to enable communication with the NIOS appliance:

- Authentication Port
- Accounting Port
- Domain Name/IP Address of the NIOS appliance
- Shared Secret Password
- Vendor Types

## Configuring Admin Groups on the Remote RADIUS Server

Infoblox supports admin accounts on one or more RADIUS servers.  
On the remote RADIUS server, do the following to set up admins and associate them with an admin group:

- Import Infoblox VSAs (vendor-specific attributes) to the dictionary file on the RADIUS server
- For third-party RADIUS servers, import the Infoblox vendor file (the Infoblox vendor ID is 7779* *and the vendor attribute number for the group name is 9)
- Define the admin group
- Associate one or more remote admin accounts with the admin group
- Add and activate a policy for the admin accounts, but do not associate the policy with a policy group that contains an infoblox-group-info attribute.

Refer to the documentation for your RADIUS server for more information.

# Configuring RADIUS Authentication

To configure NIOS to use one ore more RADIUS server groups to authenticate administrators, you must do the following:

- Configure at least one RADIUS authentication server group. For more information, see Configuring a RADIUS Authentication Server Group below.
- Define admin groups for the admins that are authenticated by the RADIUS servers and specify their privileges and settings. The group names in NIOS must match the admin group names on the RADIUS server. See [*About Admin Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups) for information about defining admin groups.
- In the authentication policy, add the RADIUS server groups and the admin groups that match those on the RADIUS server. You can also designate an admin group as the default group for remote admins. NIOS assigns admins to this group when it does not find a matching group for a remote admin. See [/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/defining-the-authentication-policy](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/defining-the-authentication-policy)  for more information about configuring the policy.

# Configuring a RADIUS Authentication Server Group

You can add multiple RADIUS servers to the group for redundancy. When you do, the appliance tries to connect to the first RADIUS server on the list and if the server does not respond within the maximum retransmission limit, then it tries the next RADIUS server on the list. NIOS tries to connect to each RADIUS server in the order the servers are listed. If it does not receive a response within the configured timeout period and has tried to connect the specified retry value, then it tries the next RADIUS server on the list. It logs an error to syslog when it fails to connect to any of the servers in the group.  
After you add a RADIUS server to the NIOS appliance, you can validate the configuration. The appliance uses a pre-defined username and password when it tests the connection to the RADIUS server. The pre-defined user name is "Infoblox_test_user" and the password is "Infoblox_test_password". Do not use these as your administrator username and password.  
To configure a RADIUS authentication server group :

1. From the **Administration** tab, click the **Authentication** **Server** **Groups** tab.
2. Click the Add icon in the **RADIUS** **Services** subtab.
3. In the *Add* *RADIUS* *Authentication* *Service* wizard, complete the following:
   
   - **Name**: Enter the name of the server group.
   - **RADIUS** **Servers**: Click the Add icon and enter the following:
     
     - **Server** **Name** **or** **IP** **Address:** Enter the FQDN or the IP address of the RADIUS server that is used for authentication.
     - **Comment:** Enter additional information about the RADIUS server.
     - **Authentication** **Port**: The destination port on the RADIUS server. The default is 1812. This field is required only if you do not enable accounting on the RADIUS server. This field is not required if you enable accounting to configure an accounting-only RADIUS server.
     - **Authentication** **Type:** Select either PAP or CHAP from the drop-down list. The default is PAP.
     - **Shared** **Secret:** Enter the shared secret that the NIOS appliance and the RADIUS server use to encrypt and decrypt their messages. This shared secret is a value that is known only to the NIOS appliance and the RADIUS server.
     - **Enable** **Accounting**: Select this to enable RADIUS accounting for the server so you can track an administrator's activities during a session. When you enable accounting, you must enter a valid port number in the **Accounting** **Port** field.
     - **Accounting** **Port**: The destination port on the RADIUS server. The default is 1813.
     - **Connect** **through** **Management** **Interface:** Select this so that the NIOS appliance uses the MGMT port for administrator authentication communications with just this RADIUS server.
     - **Disable** **server:** Select this to disable the RADIUS server if, for example, the connection to the server is down and you want to stop the NIOS appliance from trying to connect to this server.
     - Click **Test** to test the configuration. If the NIOS appliance connects to the RADIUS server using the configuration you entered, it displays a message confirming the configuration is valid. If it is unable to connect to the RADIUS server, the appliance displays a message indicating an error in the configuration.
     - Click **Add** to add the server to the list.

When you add multiple RADIUS servers, the appliance lists the servers in the order you added them. This list also determines the order in which the NIOS appliance attempts to contact a RADIUS server. You can move a server up or down the list by selecting it and clicking the up or down arrow.  
You can also delete a RADIUS server by selecting it and clicking the Delete icon.

- **Authentication**: Optionally, modify the authentication settings. These settings apply to all RADIUS servers that you configure on the NIOS appliance.
- **Timeout(s):** Specify the number of seconds that the appliance waits for a response from the RADIUS server.
- **Retries:** Specify how many times the appliance attempts to contact an authentication RADIUS server.

The default is 5.  
If you have configured multiple RADIUS servers for authentication and the NIOS appliance fails to contact the first server in the list, it tries to contact the next server, and so on.

- **Accounting**: Optionally, modify the Accounting settings.
  
  - **Timeout(s):** Specify the number of seconds that the appliance waits for a response from the RADIUS server.
  - **Retries:** Specify how many times the appliance attempts to contact an accounting RADIUS server. The default is 1000.
- **Mode:** Specifies how the appliance contacts the RADIUS servers. The default is Ordered List.
  
  - **Ordered List:** The Grid member always selects the first RADIUS server in the list when it sends an authentication request. It queries the next server only when the first server is considered down.
  - **Round Robin:** The Grid member sends the first authentication request to a server chosen randomly in a group. If there is no response from the server, the Grid member selects the next server in the group.Continued attempts are performed sequentially until it selects the last server in the group. Then it starts with the first server in the group and continues the selection process until all the servers have been attempted.
  - **Comment**: Enter useful information about the RADIUS service.
  - **Disable**: Select this to disable RADIUS authentication for the servers listed in the table.

4. Save the configuration and click **Restart** if it appears at the top of the screen**.**

Note that the following fields in the wizard do not apply to this feature: **Enable** **NAC** **Filter**, **Cache** **Time** **to** **Live**, and **Recovery** **Interval**. They are used with the NAC Integration feature described in [*Authenticated DHCP*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp).
