---
title: "Setting DNS Logging Categories"
source: "/space/nios90/1381139017"
pageId: "1381139017"
---
You can specify logging categories you want the syslog to capture. Furthermore, you can filter these messages by severity at the Grid and member levels. For information about severity types, see [*Specifying Syslog Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1380844672).

To specify logging categories, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab, and then click **Grid** **DNS** **Properties** from the Toolbar.   
   or  
   From the **Data** **Management** tab, select the **DNS** tab -> **Members** tab -> *Grid_member* checkbox, and then click the Edit icon.
2. In the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor, click **Toggle** **Advanced Mode** if the editor is in the basic mode, select the **Logging** tab, and then complete the following:
   
   - **Logging** **Facility**: Select a facility from the drop-down list. This is the location on the syslog server to which you want to sort the DNS logging messages.
   - **Logging** **Category**: Select one or more of these log categories:
     
     - **general**: Records the BIND messages that are not specifically classified.
     - **client**: Enables the logging of messages related to query processing, but not the queries themselves. Examples of messages include exceeding recursive client quota, and other errors related to recursive clients, blacklist and NXDOMAIN interception, query name rewrite, and others.
     - **config**: Records the configuration file parsing messages.
     - **database**: Records BIND's internal database processes.
     - **dnssec**: Records the DNSSEC-signed responses.
     - **network**: Records the network operation messages.
     - **notify**: Records the asynchronous zone change notification messages.
     - **queries**: Records the DNS queries.   
       **Note:** **Enabling the logging of queries and responses will significantly affect system performance. It may also significantly increase DNS startup time taken to load all the zones. **To reduce performance impact, use the capture DNS queries and capture DNS response features. For more information, see [Capturing DNS Queries and Responses](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403128).
     - **rate-limit**: Logs RRL (Response Rate Limiting) events. You must enable RRL in order for the appliance to log RRL events to this logging category.
     - **resolver**: Logs messages related to outgoing queries from the 'named' process, when it is acting as a resolver on behalf of clients.
     - **responses**: Records DNS responses.   
       **Note:** **Enabling the logging of queries and responses will significantly affect system performance. It may also significantly increase DNS startup time taken to load all the zones. **To reduce performance impact, use the capture DNS queries and capture DNS response features. For more information, see [Capturing DNS Queries and Responses](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403128).
     - **rpz**: Records log messages when responses are modified through RPZs or for which explicit passthrus were invoked in the RPZs. This checkbox is not selected by default.
     - **security**: Logs miscellaneous messages that are related to security, such as denial or approval (mostly denial) of certain operations.
     - **transfer-in**: Records zone transfer messages from the remote name servers to the appliance.
     - **transfer-out:** Records zone transfer messages from the NIOS appliance to remote name servers.
     - **update**: Records the dynamic update instances.
     - **update-security**: Records the security updates.
     - **DTC** **load** **balancing**: Records information about which client is directed to which server.
     - **DTC** **health** **monitors**: Records any changes to the health state of a monitored server.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

> **warning**
>
> **Note**
> 
> - When the log categories **queries** or **responses** is enabled for a member, it is displayed in a yellow background in the **Infoblox Grid** > **Grid Manager** > **Members** > **Status** column and the Grid Manager displays a banner suggesting that enabling the logging feature can impact the system performance and stability. You can manage the visibility of this banner (whether to display it or not) by using the [*set query_logging_warnings*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1577680919) command.
> - A member in a failed state is displayed in a red background instead of yellow in the **Members** > **Status** column even if queries or response logging is enabled, because the Failed state takes precedence over the Warning state. You can view the status of the [*DNS query logging*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1580827644) field in the *Detailed Status* panel.
