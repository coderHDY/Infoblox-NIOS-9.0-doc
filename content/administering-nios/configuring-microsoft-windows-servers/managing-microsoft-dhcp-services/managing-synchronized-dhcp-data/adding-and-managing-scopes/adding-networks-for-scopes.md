---
title: "Adding Networks for Scopes"
source: "/space/nios90/1466925291"
pageId: "1466925291"
---
Following are guidelines for adding a network for Microsoft scopes:

- The network must be served by Microsoft servers. It cannot be served by a mix of Microsoft and Infoblox DHCP servers.
- If you are adding a split-scope, you must assign the network to two Microsoft servers that serve the split-scope. A split-scope cannot be served by a mix of Microsoft and Infoblox DHCP servers.
- The network can contain only one DHCP range per Microsoft server. It can contain multiple DHCP ranges as long as they do not overlap and are each served by a different Microsoft server.
- You can set DHCP properties at the DHCP range level only, not the network level.

You can run discoveries on networks served by Microsoft servers. For information about network discoveries, see IP Discovery and vDiscovery below.

> **warning**
>
> ### Note
> 
> Networks served by Microsoft DHCP servers do not support the split, join, and expand functions.

You can create a network from scratch or use a network template. For information about creating network templates, see [*Adding IPv4 Network Templates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401262). To add an IPv4 network for a scope:

1. From the **Data** **Management** tab, select the **DHCP** tab.
2. If you have more than one network view in the system, select the network view in which you want to add the network. It must be the same network view to which the Microsoft server is assigned.
3. Expand the Toolbar and click **Add** -> **Network**.
4. In the *Add* *Network* wizard, select one of the following and click **Next**:
   
   - **Add** **Network**   
     or
   - **Add** **Network** **using** **Template:** Click **Select** **Template** and select a network template. For more information, see [*Adding IPv4 Network Templates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401262). In the *DHCP* *Network* *Template* *Selector* dialog box, select the template you want to use and click the Select icon. Note that when you use a template to create a network, the configurations of the template apply to the new network. The appliance populates the template properties in the wizard when you click **Next**. You can then edit the pre-populated properties, except for **Netmask**.
5. Complete the following and click **Next**:
   
   - **Address**: Enter the IP address of the network. You can enter the IP address with a CIDR block. For example, enter 10.0.0.0/24, and the netmask slider adjusts the netmask to /24. You can also enter partial IP address with a CIDR block. When you are done, Grid Manager displays the complete IP address with the CIDR block. For example, when you enter 15/24, Grid Manager displays 15.0.0.0/24 and the netmask slider adjusts the netmask to /24. Note that Microsoft DHCP servers do not support /32 subnets.
   - **Netmask**: Use the netmask slider to select the appropriate number of subnet mask bits for the network. Microsoft servers support /1 to /31 netmasks. Note that when you use a template that contains a fixed netmask, you cannot adjust the netmask for this network.
   - **Comment**: Enter additional information about the network, such as the name of the organization it serves.
   - **Automatically** **create** **reverse-mapping** **zone** **in** **view**: This function is enabled if the netmask of the network equals /8, /16, or /24. Select this to have the appliance automatically create reverse-mapping zones for the network. A reverse-mapping zone is an area of network space for which one or more name servers have the responsibility for responding to address-to-name queries. These zones are created in the DNS view assigned to receive dynamic DNS updates at the network view level.
   - **Disabled:** This option does not apply to networks assigned to Microsoft servers. The member ignores this field when the network is assigned to Microsoft servers. You can disable DHCP ranges assigned to Microsoft servers, but not networks.
6. Click **Next** to add Microsoft servers as DHCP servers for the network. Click the Add icon and select the following:
   
   - Add Microsoft Server: Select the Microsoft server from the *Microsoft* *Server* *Selector* dialog box. You can add multiple Microsoft servers, if you are adding multiple DHCP ranges served by different Microsoft servers. For a split-scope, you must assign two Microsoft servers to the network.
7. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*About Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
8. Save the configuration and click **Restart** if it appears at the top of the screen.   
   or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
