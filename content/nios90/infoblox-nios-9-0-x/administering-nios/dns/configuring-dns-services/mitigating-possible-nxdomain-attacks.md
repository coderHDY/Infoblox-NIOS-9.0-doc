---
title: "Mitigating Possible NXDOMAIN Attacks"
source: "/space/nios90/280405866"
pageId: "280405866"
---
To mitigate possible NXDOMAIN attacks, you can configure the appliance to split the LRU (Least Recently Used) list into two: one for NX (non-existent) RRsets and the other for all other RRsets. The LRU list is used to select entries that the appliance removes from the cache when the cache utilization exceeds the allowed threshold, which is a fraction of the configured maximum cache size.  
While this option is enabled, the appliance removes the least recently used items from the LRU list for NX RRsets before removing items from the LRU list for other RRsets. Doing so helps preserves valid DNS responses in the cache while eliminating NXDOMAIN responses.  
To mitigate NXDOMAIN responses. complete the following:

> **warning**
>
> ### Note
> 
> Changes made to the configuration for mitigating possible NXDOMAIN attacks take effect immediately on active DNS service and do not require a service restart.

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.** **Member:** From the **Data** **Management** tab, select the **DNS** tab -&gt; **Members** tab -&gt; *member* checkbox -&gt; Edit icon. To override Grid settings, click **Override** and complete the appropriate fields.
2. In the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor, click the **Security** tab and complete the following in the **Bogus-query** **alerting** **and** **mitigation** section:
   
   - **Deprioritize** **caching** **of** **NXDOMAIN** **responses:** Select this checkbox to split the LRU list into two: one for NX RRsets and the other for all other RRsets, and to always remove the least recently used items from the list of NX RRsets first. This is selected by default.
3. Save the configuration.

> **warning**
>
> ### Note
> 
> From NIOS 9.0.4 onwards, **Deprioritize caching of NXDOMAIN responses **is not supported.
