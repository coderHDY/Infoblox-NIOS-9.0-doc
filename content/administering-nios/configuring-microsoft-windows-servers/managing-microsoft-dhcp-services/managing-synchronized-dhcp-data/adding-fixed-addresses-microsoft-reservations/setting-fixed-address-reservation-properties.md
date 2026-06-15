---
title: "Setting Fixed Address/Reservation Properties"
source: "/space/nios90/1466925323"
pageId: "1466925323"
---
Microsoft reservations inherit their properties from their scopes. In Grid Manager, you can override the inherited values or set other properties of a Microsoft reservation, by editing its fixed address.  
To modify a fixed address:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* -> *fixed_address* checkbox, and then click the Edit icon.
2. The *Fixed* *Address* editor contains the following basic tabs from which you can enter data:
   
   - **General**: You can modify the fields described in Adding Fixed Addresses/Microsoft Reservations above.
   - **IPv4** **DHCP** **Options**: Keep the inherited properties, or override them and enter unique settings.   
     This section displays DHCP and Microsoft vendor options that were synchronized from the Microsoft server. You can edit any of the options. When you select a different User Class or Vendor Class from the drop-down menus, Grid Manager automatically updates the option definitions in the drop-down list.  
     To configure additional DHCP options, click **+** and select a User Class and Vendor Class from the drop-down menus. Select an option from the drop-down list, and enter a value in the field beside it. You can click - to remove an option.
   - **Discovered** **Data**: If you ran a discovery on the network, Grid Manager displays the discovered data of the fixed address. For information, see [*Viewing Discovered Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666433). Note that conflicts can occur when discovered data does not match the existing IP address data. For information about resolving these conflicts, see [*Resolving Conflicting Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406620).
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with a specific network. You can also modify the values of extensible attributes. For information, see* *[*Managing Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).

1. Optionally, you can click **Toggle** **Expert** **Mode** to display the **DDNS** tab. To set DDNS parameters for the fixed address, complete the following:

- 
  
  - **Enable DDNS Updates:** Click the checkbox to enable the Microsoft DHCP server to send dynamic DNS updates or clear the checkbox to disable this function.
  - **Option** **81** **Support**
  - **DHCP** **Server** **Updates** **DNS** **If** **Requested** **by** **Client:** The DHCP server updates DNS only if it is requested by the client. Otherwise, the client updates DNS.
  - **DHCP** **Server** **Always** **Updates** **DNS:** The DHCP server always updates DNS, regardless of any client request.

1. Save the configuration and click **Restart** if it appears at the top of the screen.

or

1. 
   
   - Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
