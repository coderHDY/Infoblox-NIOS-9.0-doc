---
title: "Modifying IPv4 Fixed Address/Reservation Templates"
source: "/space/nios90/1394541183"
pageId: "1394541183"
---
To modify a fixed address/reservation template:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Templates** tab -> *template* checkbox, and then click the Edit icon.
2. The *Fixed* *Address/Reservation* *Template* editor contains the following tabs from which you can modify data:
   
   - **General**: Modify general information for the template as described in [*Adding IPv4 Fixed Address/Reservation Templates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404118/About+IPv4+DHCP+Templates#Adding-IPv4-Fixed-Address%2FReservation-Templates)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404118/About+IPv4+DHCP+Templates#Adding-IPv4-Fixed-Address%2FReservation-Templates)above*.*
   - **IPv4** **DHCP** **Options**: Keep the inherited DHCP options or override them and enter unique settings for the template. For information, see [*Defining IPv4 DHCP Options*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271370).
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with the template. You can also modify the values of the extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
3. Optionally, you can click **Toggle Advanced Mode** to display the following tabs from which you can modify data:
   
   - **IPv4 DDNS**: Keep the inherited DDNS settings or override them and enter unique settings for the template. For information, see [*Enabling DDNS for IPv4 and IPv6 DHCP Clients*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554).
   - **IPv4** **Filters**: You can keep the inherited IPv4 logic filters or override them and add a new IPv4 logic filter for the template. For information, see [*Applying Filters to DHCP Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743).
   - **IPv4** **BOOTP/PXE**: Keep the inherited BOOTP properties or override them and enter unique settings for the template. For information, see [*Configuring IPv4 BOOTP and PXE Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663785).  
     Note that Grid Manager displays both the basic and advanced tabs the next time you log in to the GUI.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
