---
title: "Setting Network Properties"
source: "/space/nios90/1467383967"
pageId: "1467383967"
---
You can change the Microsoft servers assigned to the network, and define extensible attributes and admin permissions to the network. You can also set DHCP Thresholds for the network, to enable the appliance to make a syslog entry when address usage goes above or below the DHCP Thresholds.  
To set network properties:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* checkbox, and then click the Edit icon.
2. The *Network* editor contains the following basic tabs from which you can modify data:
   
   - **General Basic**: You can enter or modify comments.
   - **Member** **Assignment**: Add or delete Microsoft servers. For information, see as described inas described in* *[*Adding IPv4 Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761742). If the network contains multiple DHCP ranges each managed by a different Microsoft server, then you can add those Microsoft servers here.
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with a specific network. You can also modify the values of the extensible attributes. For information, see [*About Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information managing permissions, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
3. Optionally, you can click **Toggle Advanced Mode** to display the following tabs from which you can modify advanced data.
   
   - **General Advanced***:* You can associate zones with a network. For information, see [*Associating Networks with Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761881).
   - **DHCP Thresholds**: These watermarks represent DHCP Thresholds above or below which address usage is unexpected and might warrant your attention. DHCP Thresholds are inherited from the Grid.
     
     - **High:** Enter a number between 0 and 100. If the percentage of allocated addresses in a DHCP range exceeds this number, the appliance makes a syslog entry. The default is 95.
     - **Low:** Enter a number between 0 and 100. If the percentage of allocated addresses in a DHCP range drops below this number, the appliance makes a syslog entry. The default is 0. Address usage must initially exceed the low-water mark threshold and then dip below it before the appliance considers low address usage an event requiring an alert.
4. Save the configuration and click **Restart** if it appears at the top of the screen.  
   or
   
   - Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
