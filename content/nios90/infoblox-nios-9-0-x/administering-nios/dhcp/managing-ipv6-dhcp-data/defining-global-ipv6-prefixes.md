---
title: "Defining Global IPv6 Prefixes"
source: "/space/nios90/280663525"
pageId: "280663525"
---
To simplify network creation, you can define IPv6 prefixes that are used for networks served by the Grid members. If your organization is assigned IPv6 prefixes, you can enter them globally at the Grid level, and then just select the appropriate IPv6 prefix when you define the network and network templates. You can create multiple global prefixes. When you define an IPv6 network and network templates, you must adjust the slider to the desired netmask as per the CIDR in the prefix. Use the netmask slider to select /64 as the CIDR, if an IPv6 prefix is unavailable for an IPv6 network.

To add global IPv6 prefixes:

1. From the **Data** **Management** tab, select the **DHCP** tab.
2. Expand the Toolbar and click **Grid** **DHCP** **Properties**.
3. In the *Grid* *DHCP* *Properties* editor, select the **IPv6** **Global** **Prefixes** tab.
4. Click the Add icon and enter a name for the prefix and the prefix. Select the **Default** checkbox to specify a default IPv6 prefix for the Grid.
5. Save the configuration.
