---
title: "Modifying IPv4 Fixed Addresses"
source: "/space/nios90/1320357654"
pageId: "1320357654"
---
To modify the settings of a fixed address:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** section -> *network* ->* fixed_address* checkbox, and then click the Edit icon.
2. The *Fixed* *Address* editor contains the following tabs from which you can modify settings:
   
   - **General**: You can modify the fields, except the network address, as described in Adding IPv4 Fixed Addresses above.
   - **Device Information**: Define general identity/type information for the type of device to which your new object connects. For more information, see step 5 in the previous section, [*Adding IPv4 Reservations*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404203).
   - **Discovery**: Checking the **Enable Discovery** checkbox informs NIOS to begin discovering the fixed address after you click **Save and Close**. You manage discovery polling settings local to the fixed address from this page. For a complete overview of features on this page, see [*Discovering Devices and Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200)*  *and its subsections.
   - **IPv4 DHCP Options**: You can keep the inherited DHCP options or override them and enter unique settings for the fixed address. For information, see [*Defining IPv4 DHCP Options*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1331332118).
   - **IPv4 Discovered Data**: Displays the discovered data of the fixed address. For information, see [*Viewing Discovered Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666433).
   - **Port Reservation**: Review and edit any device port reservations that may be defined for the current object, or create a new port reservation and schedule it. For a closer look, see the section [*Port Control Features in Network Insight*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406109), and steps 4-8 in the section Adding IPv4 Fixed Addresses above.
   - **Extensible Attributes**: Add and delete extensible attributes that are associated with a specific network. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215). You can edit values of inheritable extensible attributes by double clicking on the respective column. If an extensible attribute has an inherited value, then the cell is highlighted in blue when you perform an inline editing.
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see [*Managing Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343324639).
3. Optionally, you can click **Toggle Advanced Mode** to display the following tabs from which you can modify advanced data.
   
   - **IPv4 DDNS**: You can keep the inherited DDNS settings or override them and enter unique settings for the fixed address. Note that you must click **Override** and select **Enable DDN Supdates** for the DDNS settings you configure in this tab to take effect. For information, see* *[*Enabling DDNS for IPv4 and IPv6 DHCP Clients*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554/Configuring+DHCP+for+DDNS#bookmark1924)
   - **IPv4 BOOTP/PXE**: You can keep the inherited BOOTP properties or override them and enter unique settings for the fixed address. For information, see [*Configuring IPv4 BOOTP and PXE Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663785).
   - **Filters**: You can keep the inherited IPv4 logic filters or override them and add a new IPv4 logic filter. For information, see [*Applying Filters to DHCP Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743).  
     Note that Grid Manager displays both the basic and advanced tabs the next time you log in to the GUI.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

> **warning**
>
> ### Note
> 
> At any step during the wizard, you can click **Schedule** **for** **Later** to schedule the task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666). You cannot schedule this task when you are creating an object that is within a delegated scope.
