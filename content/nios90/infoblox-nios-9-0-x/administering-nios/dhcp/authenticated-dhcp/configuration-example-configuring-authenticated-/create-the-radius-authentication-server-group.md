---
title: "Create the RADIUS Authentication Server Group"
source: "/space/nios90/1412005953"
pageId: "1412005953"
---
Create the RADIUS authentication server group and add two RADIUS servers to the group.

1. From the **Administration** tab, click the **Authentication** **Server** **Groups** tab.
2. Expand the Toolbar and click **Add** -&gt; **RADIUS** **Service**.
3. In the *Add* *RADIUS* *Authentication* *Service* wizard, complete the following:
   
   - **Name:** Enter **RADIUS ASG**.
   - **RADIUS Servers:** Click the Add icon and enter the following:
     
     - **Server Name or IP Address:** Enter the RADIUS server FQDN, which is [**rs1.school.edu**](http://rs1.school.edu).
     - **Authentication Port**: Accept the default port (1812).
     - **Authentication Type:** Select the PAP authentication method.
     - **Shared Secret:** Enter **no1nose**.
   - **Authentication**
     
     - **Timeout:** Enter 5 seconds.
     - **Retries:** Accept the default, which is five.
   - **Accounting**
     
     - **Timeout:** Enter 5 seconds.
     - **Retries:** Accept the default, which is five.
     - Click **Test** to validate the configuration and check that the Grid Master can connect to the RADIUS server.  
       Grid Manager displays a message confirming the configuration is valid.
       
       Click **Add** to add another RADIUS server to the group, and then enter the following:
     - **Server Name or IP Address:** Enter the RADIUS server FQDN, which is [**rs2.school.edu**](http://rs2.school.edu).
     - **Authentication Port**: Accept the default port (1812).
     - **Authentication Type:** Select the PAP authentication method.
     - **Shared Secret:** Enter **no1nose**.
   - **Authentication**
     
     - **Timeout:** Enter 5 seconds.
     - **Retries:** Accept the default, which is five.
   - **Accounting**
     
     - **Timeout:** Enter 5 seconds.
     - **Retries:** Accept the default, which is five.
     - Click **Test** to validate the configuration and check that the Grid Master can connect to the RADIUS server.  
       Grid Manager displays a message confirming the configuration is valid.
4. Click **Save** **&** **Close.**
