---
title: "Configuring Concurrent Zone Transfers"
source: "/space/nios90/1394868266"
pageId: "1394868266"
---
The default number of zone transfers that are allowed is set at the Grid or member level. However, you can override the default value and configure the required concurrent zone transfers. Note that when you increase the number of concurrent zone transfers, there will be an impact on CPU and memory usage.

> **warning**
>
> **Note**
> 
> The tcp-client value is unconditionally set to 1000 to control the total number of simultaneous TCP connections, which cap the maximum inbound and maximum outbound transfer plus any DNS request made with the TCP. The tcp-client value specifies the maximum number of simultaneous DNS clients that can be handled with TCP connections and does not account for UDP connections. The UDP connection accounts for the regular DNS requests and TCP is used only for AXFR and rare DNS requests that don't fit in a UDP connection. You can change the  tcp-client value by running the [*set named_tcp_clients_limit*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90draft/pages/73297545) command.

To specify concurrent zone transfers:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.**   
   **Independent** **appliance**: From the **System** tab, select the **System** **Manager** tab, expand the Toolbar and click **System** **Properties** -&gt; **Edit**.  
   **Member:** From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -&gt; *member* checkbox -&gt; **Edit**.
2. In the editor, click **Toggle** **Advanced** **Mode**.
3. When the additional tabs appear, click the **Advanced** subtab of the **General** tab.
4. You can change the zone transfer settings as follows:
   
   - **Maximum inbound concurrent zone transfers**: The maximum number of inbound zone transfers that can be performed concurrently. Click **Override** to override the value inherited from the Grid and enter the required value. The default value is 10. Make sure that you specify a value from 10 to 10000. Otherwise, the appliance displays an error message. To retain the same value as the Grid, click **Inherit**.
   - **Maximum outbound concurrent zone transfers**: The maximum number of outbound zone transfers that can be performed concurrently. Click **Override** to override the value inherited from the Grid and enter the required value. The default value is 10. Make sure that you specify a value from 1 to 10000. Otherwise, the appliance displays an error message. To retain the same value as the Grid, click **Inherit**.
   - **Maximum concurrent inbound zone transfers per remote name server**: The maximum number of zone transfers that can be performed concurrently from a given remote name server. This configuration can be done on a per server basis. Click **Override** to override the value inherited from the Grid and enter the required value. The default value is 2. Make sure that you specify a value from 2 to 10000. Otherwise, the appliance displays an error message. To retain the same value as the Grid, click **Inherit**.
   - **Maximum concurrent SOA queries**: The maximum number of concurrent queries a secondary name server sends to the primary server to find out if the zone serial numbers have been changed. Click **Override** to override the value inherited from the Grid and enter the required value. The default value is 20. Make sure that you specify a value from 20 to 1000. Otherwise, the appliance displays an error message. To retain the same value as the Grid, click **Inherit**.
5. Save the configuration and click **Restart** if it appears at the top of the screen.
