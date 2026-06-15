---
title: "Handling DNS Queries Through DNS Cache Acceleration"
source: "/space/nios90/280275835"
pageId: "280275835"
---
By default, DNS Infrastructure Protection rules are applied on all DNS queries and packets before they are passed on to DNS Cache Acceleration. However, you can configure such that DNS queries and packets are first passed on to DNS Cache Acceleration. If the query is valid and the answer is in the cache, the query is answered by DNS Cache Acceleration. Only if the answer is not in the cache, DNS infrastructure Protection rules are applied to the query.

Passing DNS queries and packets to DNS Cache Acceleration first betters the performance for recursive DNS queries.

To handle DNS Queries Through DNS Cache Acceleration, do the following:

1. **Infoblox Grid**: From the **Data ****Management** tab, select the **Security** tab, and then click **Grid ****Security ****Properties** from the Toolbar.  
     
     
     
   **Member**: From the **Data ****Management** tab, select the **Security** tab -> **Members** tab -> *member* checkbox, and then click the Edit icon.
2. In the *Grid **Security **Properties* or *Member **Security **Properties* editor, select the **DNS Infrastructure** **Protection** tab -> **Advanced** tab, and complete the following:  
   **Enable** **DNS** **responses from acceleration cache before applying DNS Infrastructure Protection rules**: Select this checkbox for incoming DNS queries to be first handled by DNS Cache Acceleration. This checkbox is enabled by default.
3. Save the configuration.

# Guidelines for Enabling DNS Responses from DNS Cache Acceleration

The following guidelines apply when you select the **Enable** **DNS** **responses from acceleration cache before applying DNS Infrastructure Protection rules** checkbox:

- This checkbox is available only on IB-FLEX platforms which are capable of both DNS Infrastructure Protection and DNS Cache Acceleration.
- You do not need to restart the DNS service or publish DNS Infrastructure Protection rules for the setting to take effect.

# Limitation of Enabling DNS Responses from DNS Cache Acceleration

If you select the **Enable** **DNS** **responses from acceleration cache before applying DNS Infrastructure Protection rules** checkbox, rate-limiting or response based rules will not be triggered if the FQDNs queries are being cached.
