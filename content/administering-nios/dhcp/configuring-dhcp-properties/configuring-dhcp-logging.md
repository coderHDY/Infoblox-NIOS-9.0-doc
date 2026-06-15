---
title: "Configuring DHCP Logging"
source: "/space/nios90/280271168"
pageId: "280271168"
---
If you have a syslog server operating on your network, you can specify in which facility you want the server to display the DHCP logging messages. You can also select the Grid member on which you want to store the DHCP lease history log, as described in the next section Configuring the Lease Logging Member. You can configure DHCP and lease logging only on the Grid and member levels.

To specify DHCP logging for the Grid or member:

1. **Grid**: From the **Data** **Management** tab, select the **DHCP** tab, and then click **Grid** **DHCP** **Properties** from the Toolbar.  
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab -> **Members** tab -> **Members** -> *member* checkbox, and then click the Edit icon.
2. In the *DHCP* *Properties* editor, select the **Logging** **Basic** tab and complete the following:
   
   - **Syslog** **Facility:** From the drop-down list, select the facility that is used to tag syslog messages from the DHCP server. This facility can be used to filter messages on a central syslog server.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

# Configuring the Lease Logging Member

To configure DCHP lease logging, you must have a dedicated Grid member. Logging DHCP lease events makes significant CPU demands, especially when there is heavy DHCP activity. Therefore, Infoblox strongly recommends that you designate a Grid member other than the master as a logging member whenever possible. Another way to manage the increased load that logging introduces is to log selectively per Grid member. For example, you might want to log DHCP leases for members serving critical parts of your network and not keep historical logs for members serving other parts.

If you have a reporting server, you do not need lease logging. You can get the same data from the DHCP Lease History reporting dashboard in which the data is not limited to a specific count. However, the data displayed in the dashboard is not in the format displayed on the **Lease History** tab.   
  
*DHCP* *Lease* *History* *Logging* *with* *Member* *Overrides*

*[drawio]*

To specify lease logging for a member:

1. **Grid**: From the **Data** **Management** tab, select the **DHCP** tab, and then click **Grid** **DHCP** **Properties** from the Toolbar.  
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab -> **Members** tab -> **Members** -> *member* checkbox, and then click the Edit icon.
2. In the **Logging** tab, complete the following:
   
   - **Lease**** Logging:** Select **Enable ****Lease**** History** (for Grid) or **Log**** Lease**** Events**** from**** DHCP**** Server** (for member) to enable DHCP lease logging. To disable DHCP lease logging, clear the checkbox. You can set member overrides if you want to enable or disable lease logging per member.
   - **Send**** leases ****to:** For Grid only. Click **Select**. In the *Select** Member* dialog box, select the Grid member on which you want to store the DHCP lease history log. Infoblox recommends that you dedicate a member other than the Grid Master as a logging member. If possible, use this member solely for storing the DHCP lease history log. If you do not select a member, no logging can occur. You can click **Clear** to remove the selected Grid member and select a new one.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
4. For information about viewing current leases, see *[Viewing Current Leases](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663001)*[*.*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663001)
