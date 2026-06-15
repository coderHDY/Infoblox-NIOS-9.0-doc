---
title: "Overriding IF-MAP Publishing Settings"
source: "/space/nios90/1462436302"
pageId: "1462436302"
---
When you enable IF-MAP publishing at the Grid level, all members, networks (IPv4 and IPv6), and DHCP ranges (IPv4 only) in the Grid inherit the same setting. To control which ip-mac and ip-duid metadata is published for specific leases that belong to a specific network or address range, you can override the Grid settings at a specific member, network, or range level. Note that you must first enable the IF-MAP service at the Grid and member levels in order to enable or disable IF-MAP publishing at other levels. For example, if you want the DHCP server to publish IF-MAP data for specific leases in a specific network that is served by a specific member, you must first enable the IF-MAP service at the Grid and member levels, as described in Configuring a Grid to Support IF-MAP above. Then, you can enable IF-MAP publishing at the range level, as described in this section.  
Though you can configure and save the settings of IF-MAP publishing any time at any level, the publishing does not actually happen unless the IF-MAP service is enabled at the Grid or member level. If a network or DHCP range is served by a specific member and you want to enable IF-MAP publishing for the network or range, you must first enable the IF-MAP service for the specified member.  
To override IF-MAP publishing settings:

1. **Member**: From the **Data** **Management** tab, select the **DHCP** tab -> **Members** tab -> *member* checkbox, and then click the Edit icon.  
   **Network**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> *network* checkbox, and then click the Edit icon.  
   **DHCP** **Range**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> *networ*k -> *addr_range* checkbox, and then click the Edit icon.
2. In the editor, click **Toggle** **Advanced** **Mode**, and then click the **IF-MAP** tab.
3. Click **Override** and complete the following:
   
   - **Enable** **IF-MAP** **Publishing**: Select this checkbox to instruct the DHCP server to publish metadata to the IF-MAP server when the IF-MAP service is enabled for the Grid or member. Clear this checkbox so the DHCP server does not publish metadata to the server.
