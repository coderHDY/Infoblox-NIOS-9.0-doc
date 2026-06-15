---
title: "Adding IPv4 Roaming Hosts"
source: "/space/nios90/1356203102"
pageId: "1356203102"
---
To add an IPv4 roaming host:

1. From the **Data** **Management** tab, select the **DHCP** tab.
2. Select a network view from the drop-down list.
3. From the **Add** drop-down list, select, **IPv4 Roaming Host**.  
   Or  
   Expand the Toolbar and click **Add** -> **Roaming** **Host** -> **IPv4**.
4. In the *Add* *Roaming* *Host* wizard, select one of the following and click **Next**:
   
   - **Add** **Roaming** **Host**   
     or
   - **Add** **Roaming** **Host** **using** **Template**  
     Click **Select** **Template** to create a roaming host using a fixed address/reservation template. In the *DHCP* *Template* *Selector* dialog box, select the template that you want to use. Note that when you use a template to create a roaming host, the configurations of the template apply to the new host. The appliance automatically populates the host properties in the wizard. You can then edit the pre-populated properties.
5. Complete the following:
   
   - **Name**: Enter the name of the roaming host. The name must be unique for each roaming host in a given network view.
   - **Assign IPv4 Address by**: Select one of the following criteria on which the appliance matches when assigning an IP address to the host.
     
     - **MAC Address**: Select this to assign a dynamic IP address to a host, provided that the MAC address of the requesting host matches the MAC address that you specify here.
     - **DHCP Client Identifier**: Select this to assign a dynamic IP address to a host with the same DHCP client identifier that you specify here. When you select this, the **Match null (\0) at beginning of DHCP client identifier** checkbox is displayed. Select this when a DHCP client sends a \000 prefixed to the DHCP client identifier. \0 is the null character. Some DHCP clients (for example, Microsoft) send the client identifier in a \000foo format (with the null character prefix instead of just foo). The client identifier for the requesting host and the client identifier stored in the appliance must match.
   - **Comment**: Enter useful information about the roaming host.
   - **Disabled**: Select this if you do not want the DHCP server to use this roaming host definition. When you disable a roaming host, the host gets an IP address without the defined DHCP options.
6. Click **Next** to configure the IDHCP options for the roaming host, as described in [*Defining IPv4 DHCP Options*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1331332118).
7. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
8. Save the configuration and click **Restart** if it appears at the top of the screen.  
   or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *ScheduleChange* panel, enter a date, time, and time zone. For information, see* *[*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
