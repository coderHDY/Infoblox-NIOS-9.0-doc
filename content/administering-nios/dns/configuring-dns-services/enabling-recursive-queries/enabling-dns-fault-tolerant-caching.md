---
title: "Enabling DNS Fault Tolerant Caching"
source: "/space/nios90/1420231532"
pageId: "1420231532"
---
When an authoritative DNS server experiences an outage, all web sites served by the DNS server become inaccessible. Enabling the DNS fault tolerant caching option allows users to access the web sites served by the DNS server despite the DNS server outage. When you enable the DNS fault tolerant caching option, DNS records are retained in the recursive cache even after they expire. Whenever recursive query times out or returns a SERVFAIL response, the appliance returns the cached response to the client instead of the SERVFAIL response.

When you enable DNS fault tolerant cache, you can also specify the TTL (time-to-live) and timeout settings for the expired records. TTL specifies the time duration for which the expired record is retained in the recursive cache. Setting a high TTL might cause the client to use incorrect data for a longer duration. Conversely, setting a low TTL renders more current cached data, but also increases the traffic on your network. The expired record is deleted from the recursive cache after the specified timeout duration.

When you enable DNS fault tolerant cache, when the resolver receives a DNS query for an expired answer, the resolver returns the expired answer to the downstream client and then refreshes the cache by sending the query to upstream server.

Only DNS members with recursion enabled can support this feature. You can enable this feature at the Grid level and override it at member level with recursion enabled. For information on enabling recursion for a Grid or member, see Enabling Recursive Queries topic.

To enable DNS fault tolerant caching, complete the following:

1. **Grid**: From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties**.  
   **Member**: From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -> *member* checkbox -> Edit icon.  
   To override Grid settings, click **Override** next to it and complete the appropriate fields.
2. In the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor, click **Advanced** subtab of the **Queries** tab and complete the following:
   
   - **Enable Fault Tolerant Caching**: Select this checkbox to enable the retention of expired records in the recursion. When you enable this option, the appliance retains the expired records in the recursive cache. Whenever recursive queries times out or returns a SERVFAIL response, the appliance returns the cached response to the client instead of the SERVFAIL response. This is disabled by default. When you enable this option and the resolver receives a DNS query for an expired answer, the resolver returns the expired answer to the downstream client and then refreshes the cache by sending the query to an upstream server.
     
     - **Expired Record TTL**: Specify the time duration that the appliance must serve the expired records from the recursive cache before attempting to refresh the records.  The default is five seconds. Select the time period in minutes, hours, or days from the drop-down list.
     - **Expired Record Timeout**: Specify the time duration that the appliance waits before deleting the expired records from recursive cache. The default is 24 hours. Select the time period in minutes, hours, or days from the drop-down list.
3. Save the configuration.
