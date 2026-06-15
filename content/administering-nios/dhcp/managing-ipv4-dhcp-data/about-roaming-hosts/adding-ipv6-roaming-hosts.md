---
title: "Adding IPv6 Roaming Hosts"
source: "/space/nios90/1356268597"
pageId: "1356268597"
---
To add an IPv6 roaming host:

1. From the **Data** **Management** tab, select the **DHCP** tab.
2. Select a network view from the drop-down list.
3. From the **Add** drop-down list, select, **IPv6 Roaming Host**.  
   Or  
   Expand the Toolbar and click **Add** -> **Roaming** **Host** -> **IPv6**.
4. In the *Add* *Roaming* *Host* wizard, select one of the following and click **Next**:
   
   - **Add** **IPv6** **Roaming** **Host**   
     or
   - **Add** **Roaming** **Host** **Using** **IPv6** **Template**  
     Click **Select IPv6 Template **to create a roaming host using an IPv6 fixed address template. In the *DHCP Template Selector* dialog box, select the template that you want to use. Note that when you use a template to create a roaming host, the configurations of the template apply to the new host. The appliance automatically populates the host properties in the wizard. You can then edit the pre-populated properties.
5. In Step 2 of the *Add Roaming Host* wizard, *c*omplete the following:
   
   - **Name**: Enter the name of the roaming host. The name must be unique for each roaming host in a given network view.
   - **Assign IPv6 Address by**: Configure one of the following options:
     
     - **DUID**: Enter the DHCP unique identifier of the host.
     - **MAC Address** (from NIOS 9.0.6 onwards): Enter the MAC address of the host.
   - **Comment**: Optionally, enter additional information about the roaming host.
   - **Disabled**: Select this if you do not want the DHCP server to use this roaming host definition. When you disable a roaming host, the host gets an IP address without the defined DHCP options.
6. Click **Next** to configure the DHCP options for the roaming host, as described in [*Defining General IPv6 Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663691)[*.*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663691/Configuring+DHCPv6+Properties#ConfiguringDHCPv6Properties-DefiningGeneralIPv6Properties)
7. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#UsingExtensibleAttributes)
8. Save the configuration and click **Restart** if it appears at the top of the screen.  
   or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
