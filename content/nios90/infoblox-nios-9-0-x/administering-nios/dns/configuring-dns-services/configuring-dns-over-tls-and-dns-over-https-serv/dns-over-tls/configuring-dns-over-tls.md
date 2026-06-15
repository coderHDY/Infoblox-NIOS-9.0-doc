---
title: "Configuring DNS over TLS"
source: "/space/nios90/1420165707"
pageId: "1420165707"
---
To configure the DNS over TLS feature, complete the following steps:

1. **Grid member**: On the **Data Management **tab, click the **DNS** tab -&gt; **Members** tab, select the *member* checkbox, and then click the Edit icon.  
   **Standalone system**: On the **Data Management** tab, click the **DNS** tab, expand the Toolbar, and then click **System DNS Properties**.
2. In the *Member* *DNS* *Properties* editor/*System DNS Properties* editor, click **Toggle Advanced Mode** if the editor is in basic mode.
3. On the **Queries** tab -&gt; **Advanced** tab, select the **Enable DoT Service** checkbox to enable the DNS over TLS feature.  
   Note the options for DNS over TLS feature are displayed only if the appliance has the memory footprint that is required to support the feature and has the virtual DNS Cache Acceleration or Advanced DNS Protection Software license installed. For more information, see Base Configuration Requirements below.
4. In the **Maximum Session Timeout** field, specify the maximum time in seconds a session can remain idle before it times out and closes. The default value is 60 seconds.  
   If your DNS forwarders are located at different geographical locations or if the network latency is high, you may observe session timeouts. If so, Infoblox recommends that you set the **Maximum Session Timeout** to more than 60 seconds. Increasing the session duration may impact concurrent open sessions.
5. Save the configuration.
6. As prompted, manually reboot the member to enable the DNS over TLS feature.

> **warning**
>
> **Note**
> 
> The DNS over TLS feature will not take effect until you reboot the member or the standalone system and ensure that either the DNS Cache Acceleration or DNS Infrastructure Protection Software service is running after the reboot.
