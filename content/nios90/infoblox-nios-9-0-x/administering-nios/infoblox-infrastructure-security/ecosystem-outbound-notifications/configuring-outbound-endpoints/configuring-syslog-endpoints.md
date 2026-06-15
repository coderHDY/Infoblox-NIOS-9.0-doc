---
title: "Configuring Syslog Endpoints"
source: "/space/nios90/1287422102"
pageId: "1287422102"
---
You can configure syslog endpoints to define syslog message format. When an event is triggered, the syslog message is sent based on the format you define. You can then analyze the data presented in the messages and take corrective measures. To do this, you must configure syslog endpoints. You can send syslog notifications either in raw or formatted text and also send a test syslog notification.

To configure a syslog endpoint, complete the following:

1. From the **Grid/System** tab, select the **Ecosystem** tab -&gt; **Outbound Endpoint** tab and then click **Add** -&gt; **Add Syslog  Endpoint** from the Toolbar.
2. In the **Add Syslog Endpoint** wizard:
   
   - **Name**: Specify a name for the endpoint.
   - Click the + icon to add a syslog address:
   - **Address**: Enter the IP address of the syslog server.
   - **Transport**: Select the connection type that the syslog server will use. Supported types are UDP, TCP, and Secure TCP. If you select TCP or UDP, the default port number is 514 and you do not need to upload a certificate. If you select Secure TCP, the default port number is 6514 and  you need to upload a certificate.
   - **Certificate**: If you selected Secure TCP, you must upload an HTTPS or a CA certificate. For more information, see [*Managing Certificates*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates).
   - **Port**: Specify the port number that the syslog server will use to communicate with NIOS.
   - **Message Format**: Select the format of the sys log message. If you select Formatted, you must specify the facility and severity to be sent in the syslog message header.
   - **Host Name**: If you selected Formatted as the message format, then the value that you select from the **Host Name** drop-down list is sent in the syslog message header.
   - **Facility**: Select the location that determines the processes and daemons from which the log messages are generated.
   - **Severity**: Select a severity for the syslog message. The severity type that you select is sent in the syslog message header.
   - Click **Add**. The syslog server details are added to the table. You can add more syslog addresses by clicking the + icon. You can also generate a test syslog notification by clicking **Test**.
   - **Vendor Type**: Select the vendor information for the endpoint.
   - **WAPI** **Integration** **Username**: If you have included at least one "wapi" related field in your action template, you must configure WAPI integration; otherwise the WAPI step fails due to an authorization error. Enter the user name of the admin user you want to designate for Syslog outbound notifications. The appliance ignores the **Auth** **Username** and **Auth** **Passwor**d for WAPI related steps in any action templates if WAPI integration is configured.
   - **WAPI** **Integration** **Password**: Enter the password of the admin user you have designated for Syslog outbound notifications.
   - **Member** **Source** **outbound** **API** **requests** **from**: Select the one of the following to process and send outbound notifications:
   - **Comment**: Enter additional information about the REST API endpoint.
   - **Disable**: Select this if you want to save the configuration but do not want to use it yet. You can clear this checkbox when you are ready to use this configuration.
3. Click** Next** to set the duration of time that the endpoint waits for a response from the outbound member. Complete the following to specify session timeout value:
   
   1. **Timeout**: Specify the session timeout value for the endpoint. The default value is 30 seconds.
   2. **Log Level**: From the drop-down list, select the severity level for the events. The severity level you select here determines the type of events that are being logged. This can be **Debug**, **Info**, **Warning**, or **Error**. When you select **Debug**, all fields or variables used in the events that were sent to the endpoint are logged, including deduplicated events for RPZ hits. Note that setting this to **Debug** might slightly affect the performance of your production system.
   3. **Template**: Click **Select Template** to select a session management template.
   4. **Vendor Type**: Displays the vendor information for the endpoint.
   5. **Template Type**: Displays the Session Management template.
   6. **Parameters**: Displays the parameters of the template you select. You can access these values in the notification rules.
4. Click **Next** to add extensible attributes for the endpoint.
5. Save the configuration.
