---
title: "Enabling DNSSEC"
source: "/space/nios90/280762310"
pageId: "280762310"
---
You can enable DNSSEC on a Grid, individual members, and DNS views. Because only Grid Masters can serve as primary servers for signed zones, you must enable DNSSEC on the Grid Master before you can sign zones. You must also enable DNSSEC on any Grid member that serves as a secondary server for signed zones.  
When you enable DNSSEC on a Grid, you can set certain parameters that control the DNSSEC RRs, as described in  
[*Setting DNSSEC Parameters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762276).  
When you enable DNSSEC on a Grid member or DNS view, you can set parameters that affect its operations as a secondary server, as described in [*Configuring Grid Members to Support DNSSEC as Secondary Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404953).  
To enable DNSSEC on a Grid, member or DNS view:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab. Expand the Toolbar and click **Grid** **DNS** **Properties**.   
   **Member**: From the **Data** **Management** tab, select the **Members** tab -> *member* checkbox and click the Edit icon.   
   **DNS** **View**: From the **Data** **Management** tab, select the **Zones** tab -> *dns_view* checkbox and click the Edit icon.
2. In the editor, click **Toggle** **Expert** **Mode**.
3. When the additional tabs appear, click **DNSSEC**.
4. In the **DNSSEC** tab, select **Enable** **DNSSEC**.
   
   Note when you disable EDNS0, all outgoing DNSSEC queries to zones within trusted anchors will fail even if DNSSEC validation is enabled. This is due to the restriction of the UDP packet length when you disable EDNS0. For information about EDNS0, see [*Using Extension Mechanisms for DNS (EDNS0*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/154623126)[)](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/154623126).
5. Save the configuration and click **Restart** if it appears at the top of the screen.
