---
title: "Configuring Outbound Cloud Clients"
source: "/space/nios90/280402319"
pageId: "280402319"
---
The Infoblox outbound cloud client allows interaction of the Infoblox Portal with external endpoints. You can use the outbound cloud client, which in turn uses threat API calls, to request security events from the Infoblox Portal  and convert data to outbound events. These events are periodically published to outbound framework for filtering and enrichment before they are sent to the configured external endpoints. The outbound cloud client stores the last timestamp from data that is received from the . For the next security event request, it requests data from the last timestamp until the current time. It does not request any historical data from the cloud service portal.

With the outbound cloud client, you can request security data such as DNS RPZ, Threat Insight, content/domain category, a class/property, and a client type. Infoblox enables you to configure notification rules to filter incoming events using the following fields: Threat Origin (NIOS, Cloud), Threat Source (DNS RPZ, Threat Insight, Content Category), Threat Class and Threat Property. For more information, see *[Configuring Notification Rules](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-notification-rules)**.*

You must enable either the username or password and define an API key to enable a client. A client can be a Threat Insight in the cloud client or an outbound cloud client. The server stores the username and password to request a new API key when the existing API key expires. Note that all clients use a common API interface.

You can select any Grid member to execute the outbound cloud client. Infoblox uses event filters on the selected Grid Member to limit the amount of logs. The audit log displays information about the client connection status, exceptions during connection and data request, and data received from the Infoblox Portal Configuration. NIOS logs any critical messages in the syslog.

> **warning**
>
> **Note**
> 
> Before you configure the outbound cloud client, ensure that you have installed the Response Policy Zones and Security Ecosystem licenses.



*[drawio]*

## **Best Practices for Configuring Outbound Cloud Clients**

- Ensure that you have enabled the following on the outbound client:
  
  - Define either a username or a password.
  - Enable at least one event type.
  - Specify a Grid member and ensure that the Grid member is online.
- Any changes to the API request or response format affects the feature.
- At least one outbound notification rule for DNS RPZ event type must be active for outbound settings.
- You cannot insert or delete outbound cloud clients.
- Only superusers can update an object.

## **Configuring Outbound Cloud Clients**

To** **configure Infoblox Threat Defense Cloud API, complete the following:

1. From the **Infoblox** **Grid** tab, select the **Grid Manager** tab, and then select **Grid Properties** -&gt; **Edit** from the Toolbar.
2. In the *Grid Properties* *Editor*, click **Toggle Advanced Mode**, and click the **Infoblox Threat Defense Cloud Integration** tab.
3. Specify the following in the **Basic** tab:  
   **Infoblox Threat Defense Cloud API**
   
   - **URL**: Displays the REST API URL of the Infoblox Infoblox Threat Defense Infoblox Portal Configuration. You can use the `set cloud_services_portal` CLI command in maintenance mode to update the REST API URL.
   - **Credentials**
     
     - **Email:** Enter the email address that is registered in the Infoblox Infoblox Portal Configuration.
     - **Password**: Enter the password that is registered in the Infoblox Infoblox Portal Configuration.
     
     **Test Connection**: Click this to test the connectivity between the outbound cloud client and the Infoblox Threat Defense Portal Configuration.
4. Save the configuration.

**3.3.2 Threat Insight in the Cloud Client Editor (update) **

User will not be able to specify API key from the Editor. It should be removed.

## **Enabling Client for Outbound Events in the Cloud **

To modify an outbound cloud client:

1. From the **Infoblox** **Grid** tab, select the **Ecosystem** tab -&gt; **Outbound Endpoint** tab, and then click **Infoblox Threat Defense Cloud Client** from the Toolbar.
2. In the *Infoblox Threat Defense Cloud Client* editor, complete the following:
   
   - **Enable Cloud Client:** Select this checkbox to enable the outbound events in the cloud client.
   - **Grid member:** Click **Select** to select a Grid member to execute the outbound cloud client. Click **Clear** to clear the value. You can select any Grid Member where the cloud client must be executed.
   - **Interval**: Specify how often to request outbound events detected in the cloud client in seconds or minutes. This value is set to one minute, by default. The time interval is measured from the previous request cycle.
   - **The list of requested event types: ** Select the respective checkbox to enable or disable an event type. The event types that you request from the Infoblox Portal Configuration are listed here. You cannot add or remove them.
3. Save the configuration.
