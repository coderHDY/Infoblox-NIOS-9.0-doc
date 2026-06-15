---
title: "Adding IPv4/IPv6 Roaming Hosts"
source: "/space/nios90/1356268635"
pageId: "1356268635"
---
To add an IPv4/IPv6 roaming host:

1. From the **Data** **Management** tab, select the **DHCP** tab.
2. Select a network view from the drop-down list.
3. From the **Add** drop-down list, select, **IPv4&IPv6 Roaming Host**.  
   Or  
   Expand the Toolbar and click **Add** -> **Roaming** **Host** -> **Both**.
4. In the *Add* *Roaming* *Host* wizard, select one of the following and click **Next**:
   
   - **Add** **Roaming** **Host**   
     or
   - **Add** **Roaming** **Host** **using** **Both** **IPv4** **and** **IPv6** **Templates**  
     When you use both templates to create a roaming host, the appliance applies the IPv4 template and then the IPv6 template. Therefore, the comments and extensible attributes from the IPv6 template override those from the IPv4 template.
5. Complete the following:
   
   - **Name**: Enter the name of the roaming host. The name must be unique for each roaming host in a given network view.
   - **Assign** **IPv4** **Address** **by**: Select one of the following criteria on which the appliance matches when assigning an IP address to the host.
     
     - **MAC** **Address**: Select this to assign a dynamic IP address to a host, provided that the MAC address of the requesting host matches the MAC address that you specify here.
     - **DHCP** **Client** **Identifier**: Select this to assign a dynamic IP address to a host with the same DHCP client identifier that you specify here. When you select this, the **Match** **null** **(\0)** **at** **beginning** **of** **DHCP** **client** **identifier** checkbox is displayed. Select this when a DHCP client sends a \000 prefixed to the DHCP client identifier. \0 is the null character. Some DHCP clients (for example, Microsoft) send the client identifier in a \000foo format (with the null character prefix instead of just foo). The client identifier for the requesting host and the client identifier stored in the appliance must match.
   - **Assign** **IPv6** **Address** **by**: Select one of the following criteria on which the appliance matches when assigning an IP address to the host:
     
     - **DUID**: Specify the DHCP unique identifier of the host.
     - **MAC Address**  (from NIOS 9.0.6 onwards): Enter the MAC address of the host.
   - **Comment**: If both IPv4 and IPv6 templates were used to create the host, this field displays the comment from the IPv6 template. You can change or add information..
   - **Disabled**: Select this if you do not want the DHCP server to use this roaming host definition. When you disable a roaming host, the host gets an IP address without the defined DHCP options.
6. Click **Next** to configure the IPv4 DHCP options for the roaming host, as described in [*Defining IPv4 DHCP Options*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1331332118)*.*
7. Click **Next** to configure IPv6 properties described in [*Defining General IPv6 Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663691/Configuring+DHCPv6+Properties#Defining-General-IPv6-Properties).
8. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. If both IPv4 and IPv6 templates were used to create the host, this panel displays the attributes from the IPv6 template. You can change or add information. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#UsingExtensibleAttributes)
9. Save the configuration and click **Restart** if it appears at the top of the screen.

or

Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
