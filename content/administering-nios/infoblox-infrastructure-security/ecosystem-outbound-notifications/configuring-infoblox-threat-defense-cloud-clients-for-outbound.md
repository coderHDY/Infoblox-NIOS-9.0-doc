---
title: "Configuring Infoblox Threat Defense Cloud Clients for Outbound"
source: "/space/nios90/280759852"
pageId: "280759852"
---
The Infoblox Threat Defense Cloud Client on NIOS allows the interaction between Infoblox Threat Defense Cloud and outbound endpoints so you can collect blocked/logged request via feeds or domains detected by Threat Insight in Infoblox Threat Defense Cloud and send the outbound events to external endpoints. When you enable and configure Infoblox Threat Defense Cloud Client on an on-prem NIOS member, the client uses threat API calls to request RPZ events from Infoblox Threat Defense Cloud, and then convert the data into outbound events. These events are periodically synchronized (between Infoblox Threat Defense Cloud and NIOS) and sent to the configured outbound endpoints. Note that the client requests only subsequent data since the last data timestamp, and each synchronization happens based on the schedule and retrieves only the current data.

You can configure notification rules to filter incoming events using the following fields: Threat Origin (NIOS, Infoblox Threat Defense Cloud), Infoblox Threat Defense Cloud Hit Type (DNS RPZ, Threat Insight), Infoblox Threat Defense Cloud Hit Class and Infoblox Threat Defense Cloud Hit Property. When you configure notification rules to filter incoming events using these fields for Infoblox Threat Defense Cloud Client, relevant information gets synchronized with the event types that you add to the list. This synchronization happens periodically based on the interval that you define. For more information about notification rules, see[* Configuring Notification Rules*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280759890)*.*

You can select any Grid member to execute the Infoblox Threat Defense Cloud Client. Infoblox uses event filters on the selected Grid Member to limit the amount of logs. For debugging purposes, information about the client connection status will be displayed in the infoblox.log file. An error is logged in the debug mode for any exceptions that appear when the data is requested and received from the Infoblox Threat Defense Cloud. NIOS logs any critical messages in the syslog.

You must specify the email address and password in the *Grid Properties* *Editor *before you enable the Infoblox Threat Defense Cloud Client.* *For* *more information about configuring Integration with Infoblox threat defense cloud, see below*.*

> **warning**
>
> ### Note
> 
> - Before you configure the Infoblox Threat Defense Cloud Client for outbound, ensure that you have installed the **Security Ecosystem** license.
> - Starting from NIOS 9.0.7, the NIOS version number and the appliance serial number are sent to the anycast IP address of Infoblox Threat Defense. The IP address is encrypted and added to the EDNS section of the DNS query. Infoblox Threat Defense logs the query information, including the EDNS section.
>   
>   We make a query once after upgrade and sub-sequently once every month and user has an option to disable this query through CLI.

The following figure shows how Threat Insight in the Infoblox Threat Defense Cloud client and Infoblox Threat Defense Cloud Client use a common API interface to interact with Infoblox Threat Defense Cloud. For more information about enabling Infoblox threat defense cloud client for outbound, see below.

*[drawio]*

# Best Practices for Configuring Infoblox Threat Defense Cloud Client

- Ensure that you have enabled the following on the Infoblox Threat Defense Cloud Client:
  
  - Credentials to access your Infoblox Threat Defense Infoblox Portal tenant. An email address and a password of a valid user can be used. The best practice is to use a dedicated service account on the Infoblox Portal as the email address and its associated API key as the password. Service accounts on the Infoblox Portal have an auto-generated email address that you can use (for example, user.service.[UUID]@infoblox.invalid). You must use a service account if the user login IDs are restricted by  multi-factor authentication.
  - A Grid member that is online.
- Ensure that at least one outbound notification rule for DNS RPZ event type is active for outbound settings.
- Only superusers can update the Infoblox Threat Defense Cloud Client settings.
- If the timestamp for the data collected by the Infoblox Threat Defense Cloud Client is ahead of the current time in NIOS, then such events are logged in the syslog. In such an instance, the client does not request any data until the current time reaches the timestamp of the data that is collected and it logs a message in the Infoblox.log based on the time interval that you have set.

# Configuring Integration with Infoblox Threat Defense Cloud

To integrate the Infoblox Threat Defense Cloud client with Infoblox Threat Defense Cloud, you must have already created a user profile and the API key for the user profile in the Infoblox Portal.

To** **configure the Infoblox Threat Defense Cloud client to integrate with Infoblox Threat Defense Cloud, you must configure the URL of the Infoblox Portal and credentials for logging in to the portal. Complete the following steps:

1. **Grid**: From the **Infoblox** **Grid** tab, select the **Grid Manager** tab, and then select **Grid Properties** -> **Edit** from the Toolbar.  
   **Standalone appliance**: From the **System** tab, select the **System** **Manager** tab, and then select **System Properties** -> **Edit** from the Toolbar.
2. In the *Infoblox Grid Properties* *Editor* or the *System Properties* *Editor*, click **Toggle Advanced Mode** to switch to the advanced mode.  
   Note that if the editor is already in the advanced mode, then you will see the Toggle Basic Mode button.
3. On the **Infoblox** **Threat Defense Cloud Integration** tab -> **Basic** tab, specify the following in the *Infoblox* *Threat Defense Cloud Integration *section:
   
   - **URL**: Displays the REST API URL of the Infoblox Portal.
   - **Credentials**:
     
     - **Email**: Enter the email address that is registered in the Infoblox Portal. The best practice is to use a dedicated service account on the Infoblox Portal as the email address (for example, user.service.[UUID]@infoblox.invalid).
     - **Password**: Enter the password associated with the email address you specified in the **Email** field. If you are using a service account on Infoblox Portal, enter the API key associated with the service account rather than a password.
     - **Test Connection**: Click this to test the connectivity between NIOS and the Infoblox Portal.
4. Save the configuration.

# Enabling Infoblox Threat Defense Cloud Client for Outbound

To configure an Infoblox Threat Defense Cloud Client to collect event types from Infoblox Threat Defense Cloud and send them to external endpoints, complete the following steps:

1. From the **Infoblox** **Grid** tab, select the **Ecosystem** tab -> **Outbound Endpoint** tab, and then click **Infoblox Threat Defense Cloud Client** from the Toolbar.
2. In the *Infoblox Threat Defense Cloud Client* editor, complete the following:
   
   - **Enable Cloud Client**: Select this checkbox to enable the Infoblox Threat Defense Cloud Client to send outbound events.
   - **Grid member**: Click **Select** to select a Grid member on which you run the configured client. Click **Clear** to clear the value. You can select any Grid member where the cloud client must be executed.
   - **Interval**: Specify how often to request the list of event types from Infoblox Threat Defense Cloud, in seconds or minutes. This value is set to one minute by default. The time interval is measured from the previous data synchronization.
   - **The list of requested event types**: Select the respective checkbox to enable or disable an event type. The event types that you request from the Infoblox Threat Defense Cloud are listed here. You cannot add or remove them.
3. Save the configuration.
