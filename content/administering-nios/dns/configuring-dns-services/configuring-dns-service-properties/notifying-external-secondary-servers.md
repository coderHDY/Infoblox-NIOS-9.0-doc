---
title: "Notifying External Secondary Servers"
source: "/space/nios90/281182286"
pageId: "281182286"
---
Grid members can use database replication to maintain up-to-date zone data sets, so the secondary servers in the Grid can keep their zone data synchronized even if the primary server fails. Any external secondary servers can fall out of sync, however, if they rely only on the primary server to send notify messages when there is new zone data. Therefore all authoritative name servers in a Grid (all primary and secondary servers) send notify messages to external secondary servers by default. This ensures that an external secondary name server receives notify messages when its primary server is a secondary name server in a Grid. However, it also increases the number of notify messages.

Starting from NIOS 9.0.6, you can configure a DNS view on a primary name server with multiple external secondary server entries that use the same FQDN and IP address, but a unique TSIG key on each entry. To notify an external secondary server about changes in zone data and perform a zone transfer, NIOS will match the TSIG key configured on the external secondary server entry (on the primary server) with the key configured on the external secondary server. For instructions, see the [*Specifying Secondary Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599) and [*Configuring Zone Transfers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405834) sections respectively.  
Like before, you can continue to configure the external secondary server entries with different FQDNs and IP addresses, and with or without the TSIG keys.

Infoblox recommends that you do not configure a large number of external secondary servers in stealth mode. To ensure that these secondary servers receive notifications about zone updates, you can allow zone transfers for these IP addresses and then enable the appliance to add them to the also-notify statement. For information about how to configure this feature, see [*Configuring Zone Transfers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405834).  
To specify whether secondary name servers in the Grid are to send notify messages to external secondary name servers:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.**
2. In the *Grid* *DNS* *Properties* editor, click **Toggle** **Advanced** **Mode**.
3. When the additional tabs appear, click the **Advanced** subtab of the **General** tab.
4. Complete the following:
   
   - **Enable** **Grid** **secondaries** **to** **notify** **external** **secondaries:** This option is enabled by default.
   - Notify Delay: Specify the number of seconds that the Grid secondary servers delays sending notification messages to the external secondaries. The default is five seconds.
5. Save the configuration and click **Restart** if it appears at the top of the screen.

For the external secondary servers to accept notify messages from the secondary name servers in the Grid and then request zone transfers from them, you must configure the external secondary servers to use the Grid secondary servers as the source of the zone transfers. This ensures that the external secondary servers continue to receive notify messages, even if the primary server is unavailable.
