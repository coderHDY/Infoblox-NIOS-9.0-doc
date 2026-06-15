---
title: "Setting DHCP Range/Scope Properties"
source: "/space/nios90/1467384004"
pageId: "1467384004"
---
A Microsoft scope inherits its properties from its Microsoft server. In Grid Manager, you can override the inherited values or set other properties by editing the DHCP range. You can also configure an exclusion range within the scope and set DHCP Thresholds, to enable the appliance to make a syslog entry when address usage goes above or below the DHCP Thresholds.  
You can modify a scope's properties, including its start and end addresses, servers, and exclusion ranges. If you edit the properties of a split-scope and it results in gaps or overlapping exclusion ranges so that the ranges are no longer identical, Grid Manager displays a warning indicating that continuing with the operation automatically removes the split-scope flag. Grid Manager also removes the flag when the start or end address of a scope changes, so its range is no longer the same.  
To set DHCP range properties:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* -> *addr_range* checkbox, and then click the Edit icon.
2. The *DHCP* *Range* editor contains the following basic tabs from which you can modify data:
   
   - **General**: Modify the fields, including the start and end addresses, as described in Adding a DHCP Range/Scope above.
   - **Server** **Assignment**: Switch to **None** or select a different Microsoft server for the DHCP range.
   - **IPv4** **DHCP** **Options**: Keep the DHCP properties or override them and enter unique settings for the DHCP range.  
     This tab displays DHCP and Microsoft vendor options that were synchronized from the Microsoft server. You can edit any of the options. When you select a different User Class or Vendor Class from the drop-down menus, Grid Manager automatically updates the option definitions in the drop-down list.  
     To configure additional DHCP options, click **+** and select a User Class and Vendor Class from the drop-down menus. Select an option from the drop-down list, and enter a value in the field beside it. You can click - to remove an option.
   - **Extensible** **Attributes**: You can add and delete extensible attributes that are associated with a specific DHCP range. You can also modify the values of extensible attributes. For information, see [*Managing Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information about managing permissions, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
3. Optionally, you can click **Toggle Advanced Mode** to display the following tabs from which you can modify advanced data.
   
   - **DDNS**: Complete the following to set DDNS parameters for the range:
     
     - **Enable DDNS Updates:** Click the checkbox to enable the Microsoft DHCP server to send dynamic DNS updates or clear the checkbox to disable this function.
     - **Option** **81** **Support**
     - **DHCP** **Server** **Updates** **DNS** **If** **Requested** **by** **Client:** The DHCP server updates DNS only if it is requested by the client. Otherwise, the client updates DNS.  
       **DHCP** **Server** **Always** **Updates** **DNS:** The DHCP server always updates DNS, regardless of any client request.
   - **Exclusion Ranges**: Configure a range of IP addresses that the server does not use to assign to clients. You can use these exclusion addresses as static IP addresses. For information, see* *[*Configuring IPv4 Fixed Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095)*.* In a split-scope, the exclusion range identifies the range of IP addresses that the other Microsoft server serves. If you edit the exclusion range of either of the scopes in a split-scope and the exclusion ranges no longer complement each other, NIOS removes the split-scope flag from both scopes.
   - **DHCP Thresholds**: DHCP Thresholds are inherited from the Grid. These watermarks represent DHCP Thresholds above or below which address usage is unexpected and might warrant your attention.
     
     - **High-wate rMark:** Enter a number between 0 and 100. If the percentage of allocated addresses in a DHCP range exceeds this number, the appliance makes a syslog entry. The default is 95.
     - **Low-water Mark:** Enter a number between 0 and 100. If the percentage of allocated addresses in a DHCP range drops below this number, the appliance makes a syslog entry. The default is 0. Address usage must initially exceed the low-water mark threshold and then dip below it before the appliance considers low address usage an event requiring an alert.
4. Save the configuration and click **Restart** if it appears at the top of the screen.  
   or
   
   - Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[*Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
