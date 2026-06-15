---
title: "Starting and Stopping the DNS Service"
source: "/space/nios90/281247822"
pageId: "281247822"
---
The DNS service is disabled by default. After you complete the DNS configuration, you can start DNS service on a member. You can also disable the DNS service on any Grid member. Be aware that disabling the DNS service on a member removes the NS records from it. If you later re-enable DNS service for this member, the NS records are then restored.  
To start DNS service on a member:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Members** tab -&gt; *member* checkbox -&gt; click the Edit icon.
2. In the *Member* *DNS* *Properties* editor, click **General** -&gt; **Basic** tab, and do the following:
   
   - **LAN1**: Select **IPv4** to start the DNS service using IPv4 or select **IPv6** to start the DNS service using IPv6. Note that for a dual mode member, **IPv4** will be selected by default.
3. Save the configuration.
4. Expand the Toolbar and click **Start**.
5. In the *Start* *Member* *DNS* *Service* dialog box, click **Yes**.  
   Grid Manager starts the DNS service on the selected member.

You can stop DNS service on a member by selecting the member checkbox and click **Stop** from the Toolbar.
