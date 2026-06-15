---
title: "Configuring REST API Endpoints"
source: "/space/nios90/1286013328"
pageId: "1286013328"
---
You can configure REST API endpoints and define rules to send outbound notifications to the REST enabled target system.

To configure a REST API endpoint, complete the following:

1. From the **Grid/System** tab, select the **Ecosystem** tab -&gt; **Outbound** **Endpoint** tab and then click **Add** -&gt; **Add** **REST API Endpoint** from the Toolbar.
2. In the **Add** **REST** **API** **Endpoint** wizard, complete the following:
   
   - **URI**: Specify the URI for the endpoint to which you are sending the outbound notifications. Example: [https://10.36.101.14/offices](https://10.36.101.14/offices).
   - **Test** **Connection**: Click this to validate the endpoint settings and test the connectivity between the Grid Master and the endpoint. It also tests the connection between the Grid Master Candidate that is assigned as the outbound member and the endpoint. Grid Manager displays a message indicating whether the connection is successful. Note that the test does not validate username, password, or certificate for the endpoint. It only tests the basic connection between the Grid Master and the endpoint.
   - **Name**: Specify the name used to identify the endpoint.
   - **Vendor** **Type**: The REST API vendor type associated with the endpoint. This is optional.
   - **Network** **View**: This appears only when you have multiple network views. From the drop-down list, select the network view in which you want to create the network.
   - **Auth** **Username**: Enter the username of the target endpoint. The appliance ignores the **Auth** **Username** for WAPI related steps in any action templates if WAPI integration is configured. It still uses this username for other non-WAPI related steps.
   - **Auth** **Password**: Enter the user account password for the target endpoint. You can click **Clear** **Password** to clear the password and set a new one. The appliance ignores the **Auth** **Username** for WAPI related steps in any action templates if WAPI integration is configured. It still uses this password for other non-WAPI related steps.
   - **Client** **Certificate**: Click **Select** to upload the endpoint certificate. In the *Upload* dialog box, click **Select** to navigate to the certificate, and then click **Upload**.
   - **WAPI** **Integration** **Username**: If you have included at least one "wapi" related field in your action template, you must configure WAPI integration; otherwise the WAPI step will fail due to an authorization error. Enter the username of the admin user you want to designate for RESTful API outbound notifications. The appliance ignores the **Auth** **Username** and **Auth** **Passwor**d for WAPI related steps in any action templates if WAPI integration is configured.
   - **WAPI** **Integration** **Password**: Enter the password of the admin user you have designated for RESTful API outbound notifications.
   - **Server** **Certificate** **Validation**: Select one of the following for server certificate validation:
     
     - **Use** **CA** **Certificate** **Validation** **(Recommended)**: Select this to validate the CA certificate for the endpoint. The certificate is used to establish a secure connection to the endpoint before data transmission. Click **CA** **Certificates** to upload the trusted CA certificate of the endpoint. In the *CA* *Certificates* dialog box, click the Add icon, and then navigate to the certificate to upload it. This is the default.
       
       - **Enable** **Host** **Validation**: Select this to enable the validation of the hostname for the endpoint, in addition to the CA certificate. If you do not select this, the appliance validates only the CA certificate.
       - **Do** **not** **use** **validation** **(Not** **recommended)**: Infoblox does not recommend using this for your production system. Use this for testing purposes only.
   - **Member** **Source** **outbound** **API** **requests** **from**: Select the one of the following to process and send outbound API notifications:
     
     - **Selected** **Grid** **Master** **Candidate** **(Recommended)**: Select this to use the Grid Master Candidate to process and send outbound notifications to the endpoint. If there are multiple Grid Master candidates, select a Grid Master Candidate from the drop-down list. This is the recommended choice and is selected by default because the CPU and memory required for processing and sending outbound events from the Grid Master Candidate can be offloaded or manually load balanced across multiple Grid Master Candidates if required.
     - **Current Grid Master**: Click this to use the Grid Master to send outbound notifications to the endpoint. When you use the Grid Master as the outbound member, ensure that it has enough CPU and memory to process all the workloads and processes, in addition to being an outbound member. Infoblox recommends that you use the Grid Master as an outbound member only for testing purposes to avoid overloading the Grid Master and to maintain optimal performance for the Grid.
   - **Comment**: Enter additional information about the REST API endpoint.
   - **Disable**: Select this if you want to save the configuration but do not want to use it yet. You can clear this checkbox when you are ready to use this configuration.
3. Click** Next** to set the duration of time that the endpoint waits for a response from the outbound member. Complete the following to specify session timeout value:
   
   - **Timeout**: Specify the session timeout value for the endpoint. The default value is 30 seconds.
   - **Log** **Level**: From the drop-down list, select the severity level for the events. The severity level you select here determines the type of events that are being logged. This can be **Debug**, **Info**, **Warning**, or **Error**. When you select **Debug**, all fields or variables used in the events that were sent to the endpoint are logged, including deduplicated events for RPZ hits. For information about deduplication, see [*Deduplicating Events*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-notification-rules). Note that setting this to **Debug** might slightly affect the performance of your production system.
   - **Template**: Click **Select** **Template** to select a session management template. For information, see [*Creating Session Management Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/creating-session-management-templates).
   - **Vendor** **Type**: Displays the vendor information for the endpoint.
   - **Template Type**: Displays the Session Management template.
   - **Parameters**: Displays the parameters of the template you select. You can access these values in the notification rules.
4. Click **Next** to add extensible attributes for the endpoint. For information, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
5. Save the configuration.

> **warning**
>
> Note
> 
> If your outbound member is a Grid Master Candidate and in case the Grid Master Candidate is promoted to the Grid Master, make sure that you modify the outbound member to the Grid Master on the endpoint configuration to avoid any outbound notification failures.
