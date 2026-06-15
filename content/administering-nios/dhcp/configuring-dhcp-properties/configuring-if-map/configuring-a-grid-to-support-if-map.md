---
title: "Configuring a Grid to Support IF-MAP"
source: "/space/nios90/1462337869"
pageId: "1462337869"
---
1. From the **Data** **Management** tab, select the **DHCP** tab, and then click **Grid** **DHCP** **Properties** from the Toolbar.
2. In the *Grid* *DHCP* *Properties* editor, click **Toggle** **Advanced** **Mode**.
3. Click the **IF-MAP** tab, and then complete the following:
   
   - **Enable** **IF-MAP**: Select this checkbox to enable the IF-MAP service for the Grid. Note that you must enable the IF-MAP service in order to enable or disable publishing at the Grid, member, network, or range level.
   - **IF-MAP** **Server** **URL**: Enter the URL of the IF-MAP server to which the Grid members publish DHCP data. The URL must begin with **https://**. For example, **https://***&lt;server_ip_addr&gt;***/ifmap**.
   - **IF-MAP** **Server** **Port**: The default HTTP port is 80 and the default HTTPS port is 443. Optionally, you can specify a different port on the IF-MAP server.
   - **Enable** **IF-MAP** **publishing**: Select this checkbox to enable IF-MAP publishing for the Grid. When you select this, IF-MAP publishing is enabled for all members, networks (IPv4 and IPv6), and DHCP ranges (IPv4 only). You can override the Grid property at a specific level to control the ip-mac and ip-duid metadata you want the client to publish for specific leases. For information, see Overriding IF-MAP Publishing Settings below.
   - **IF-MAP** **Protocol** **Version**: Select the IF-MAP protocol version you want the IF-MAP client to use to connect to the IF-MAP server. The default is IF-MAP 2.0.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
5. You can also configure how the IF-MAP server deletes existing metadata before the IF-MAP client publishes another update. For information, see Deleting Data from the IF-MAP Server below.
