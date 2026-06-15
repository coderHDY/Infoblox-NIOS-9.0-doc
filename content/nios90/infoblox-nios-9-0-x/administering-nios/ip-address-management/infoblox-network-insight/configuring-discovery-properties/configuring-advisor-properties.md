---
title: "Configuring Advisor Properties"
source: "/space/nios90/1343293033"
pageId: "1343293033"
---
For information about Advisor, see [*Monitoring Device Lifecycle and Vulnerabilities Using Advisor*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/monitoring-device-lifecycle-and-vulnerabilities-).

See the following pre-requisites:

- You have purchased the Advisor subscription.
- You have access to the internet, either through one of the Consolidator interfaces or through a proxy server.
- You have a Consolidator with the discovery service working on it.
- You have a local DNS resolver working on the discovery node. For more information, see [*Enabling DNS Resolution*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/enabling-dns-resolution)*.*

To configure Advisor properties, complete the following:

1. From the **Infoblox** **Grid** tab, select the **Grid Manager** tab, and then click **Discovery**.
2. Click **Edit** &gt; **Grid Discovery Properties** in the Toolbar.
3. Click the **Advisor** tab.
4. Select **Enable Advisor Application**.
   
   Note this checkbox is available if a Consolidator exists in the Grid and the discovery service is working.
5. **Network Interface**: Specify one of the network interfaces of the Consolidator that runs Advisor. This interface is used for the internet connection to obtain the lifecycle and vulnerability data.
6. **Execution Interval**: Specify how often the Advisor service should be executed every N days or weeks.
7. **Execution Hour**: Specify the server hour when the Advisor service should be executed.
   
   Note the Advisor runs not at the exact hour specified, but at any minute of the specified hour.
8. If you do not want to expose your Grid member directly to the internet, select **Use proxy server**. Ensure that the proxy server has access to the internet.
9. Specify the following information for the proxy server:
   
   - DNS Name or IP Address
   - Port
   - Credentials to connect to Proxy Server (username and password)
10. Under **Advisor Central**, specify the following data:
   
   - **API Endpoint Address**: The IP address of the Advisor API endpoint.
   - **API Endpoint Port**: The port of the Advisor API endpoint.
   - **Authentication**: Select **Token** or **Credentials**.
   - If you selected token authentication, specify the authentication token value.
   - If you selected credentials authentication, specify the username and password.
11. In **Minimum Severity**, specify the severity threshold for vulnerabilities data that you want to obtain for your devices. To see possible values, hover the mouse over the field. The popup window displays the following values:
   
   - **Critical**: 9.0-10.0
   - **High:** 7.0-8.9
   - **Medium:** 4.0-6.9
   - **Low**: 0.1-3.9
   - **None**: 0.0
12. **Last Scheduled Execution Result**: Displays the timestamp of the last successful or unsuccessful scheduled execution result.
13. **Last Run Now Result**: Displays the timestamp of the last successful or unsuccessful immediate execution result.
14. **Test connection to central**: Central refers to the server where the application for Network Insight Advisor is running, that is the Advisor server. NIOS sends a POST query to the Advisor server from Discovery Consolidator, when you click **Test connection to central**. In the API Endpoint Address, the server address is specified. If the query enters the Advisor server successfully and returns a correct response, then OK is displayed else Not OK is displayed.
15. If you want to launch Advisor immediately, click **Run Now**.
16. Save the configuration.
