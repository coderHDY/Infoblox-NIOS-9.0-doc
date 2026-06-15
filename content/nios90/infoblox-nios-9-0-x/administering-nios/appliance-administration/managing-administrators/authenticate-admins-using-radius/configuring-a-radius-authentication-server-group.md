---
title: "Configuring a RADIUS Authentication Server Group"
source: "/space/nios90/1325924389"
pageId: "1325924389"
---
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
     - **Shared** **Secret:** Enter the shared secret that the NIOS appliance and the RADIUS server use to encrypt and decrypt their messages. This shared secret is a value that is known only to the NIOS appliance and the RADIUS server. This shared secret must match the one you enteredon the RADIUS server and must be between 4 and 64 characters (inclusive) in length.
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

1. Save the configuration and click **Restart** if it appears at the top of the screen**.**

Note that the following fields in the wizard do not apply to this feature: **Enable** **NAC** **Filter**, **Cache** **Time** **to** **Live**, and **Recovery** **Interval**. They are used with the NAC Integration feature described in [*Authenticated DHCP*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp).
