---
title: "Testing HTTP Health Monitors"
source: "/space/nios90/1393460861"
pageId: "1393460861"
---
After the HTTP health monitor is configured, you can test the configuration for a specific DTC server. Note that if you make changes to the HTTP health monitor settings, you must save the configuration so you can run the test.  
To test the HTTP health monitor, do the following:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Traffic** **Control** tab, and then click **Manage** **Health** **Monitors** in the Toolbar.
2. In the *Health Monitors Manager*, click the Action icon next to the HTTP health monitor name and select **Edit**:
3. Select the **Request/Response** tab.
4. Click **Test** **HTTP** **Health** **Monitor**.
5. In the field **Select** **a** **DTC** **Server** **or** **enter** **the** **IP** **address** **or** **domain** **name** **of** **an** **HTTP** **server**, do one of the following to specify the server to test:
   
   - Click **Select** to select an existing DTC server.
   - Enter the IP address or host name of an HTTP server. The IP address can be IPv4 or IPv6.
6. In the field **Select** **a** **Grid** **member** **that** **is** **running DTC**, select a DTC server on which the test will be run.  
   If there is only one DTC server with the DTC license, it is selected by default. If there are several DTC servers with the license, the Grid Master is selected by default. If there is no Grid Master with the DTC license and there are several member servers with the license, click **Select** and choose a server.
7. Click **Test**.
8. In the result of the test, the following information is returned:
   
   1. Test status
   2. Status message

> **custom**
>
> **Note:** If you configure an HTTP or HTTPS monitor for a pool and try to test the monitor for HTTP version 1.1 using the **Test HTTP Health Monitor** option, you must add the host header for the health check to be successful.
