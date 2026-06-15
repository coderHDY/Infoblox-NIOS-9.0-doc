---
title: "Changing Grid Properties"
source: "/space/nios90/1340475475"
pageId: "1340475475"
---
You can change a Grid name, its shared secret, and the port number of the VPN tunnels that the Grid uses for communications. Note that changing the VPN port number, time zone, date or time requires a product restart.  
To modify the properties of a Grid:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab.
2. Expand the Toolbar and select **Grid** **Properties** -&gt; **Edit**.
3. In the *Grid* *Properties* editor, select the **General** tab -&gt; click the **Basic** tab, and then modify any of the following:
   
   - **Grid** **Name:** Type the name of a Grid. The default name is *Infoblox*.
   - **Shared** **Secret:** Type a shared secret that all Grid members use to authenticate themselves when joining the Grid. The default shared secret is *test*.  
     **Note**: The combined length of the **Shared Secret** and **Grid Name** fields must not exceed 100 characters.
4. **Shared** **Secret** **Retype:** Type the shared secret again to confirm its accuracy.
   
   - **Time** **Zone:** Choose the applicable time zone from the drop-down list.
   - **Date:** Click the calendar icon to select a date or enter the date in YYYY-MM-DD format.
   - **Time:** Click the clock icon to select a time or enter the time in HH:MM:SS format.
   - **VPN** **Port:** Type the port number that the Grid members use when communicating with the Grid Master through encrypted VPN tunnels. The default port number is 1194. For more information about port numbers for grid communication, see [*Creating a Grid Master*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/creating-a-grid-master)*.*
   - **Enable** **Recycle** **Bin:** Select the checkbox to enable the Recycle Bin. The Recycle Bin stores deleted items when the user deletes Grid, DNS, or DHCP configuration items. Enabling the Recycle Bin allows you to undo deletions and to restore the items on the appliance at a later time. If you do not enable this feature, deleted items from the GUI are permanently removed from the database.
   - **Audit** **Logging:** Select one of the following:
     
     - **Detailed**: This is the default type. It is automatically selected. It provides detailed information on all administrative changes such as the date and time stamp of the change, administrator name, changed object name, and the new values of all properties.
     - **Brief**: Provides information on administrative changes such as the date and time stamp of the change, administrator name, and the changed object name. It does not show the new value of the object.
     - **WAPI Detailed**: Select this option to view detailed WAPI (RESTful API) session information logs for successful WAPI calls such as PUT, POST, and DELETE. You can view the URI, InData and response time for each WAPI call. For more information, see [*Monitoring Tools*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/monitoring-tools).
     - In the *Grid* *Properties* editor, select the **General** tab -&gt; click the **Advanced** tab (or click Toggle Advanced Mode) and modify any of the following:
       
       - **Enable** **GUI** **Redirect** **from** **Member**: Select this checkbox to allow the appliance to redirect the Infoblox GUI from a Grid member to the Grid Master.
         
         Note that if read-only API access is enabled for a Grid Master Candidate, then selecting the **Enable** **GUI** **Redirect** **from** **Member** checkbox for the Grid Master Candidate does not redirect the Infoblox GUI from the Grid Master Candidate to the Grid Master. For more information about enabling read-only API access on a Grid Master Candidate, see Enabling Read-only API Access on the Grid Master Candidate below.
       - **Enable** **GUI/API** **Access** **via** **both** **MGMT** **and** **LAN1/VIP**: Select this checkbox to allow access to the Infoblox GUI and API using both the MGMT and LAN1 ports for standalone appliances and MGMT and VIP ports for an HA pair. This feature is valid only if you have enabled the MGMT port. For information about enabling the MGMT port, see [*Appliance Management*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-mgmt-port).
         
         Note that the appliance uses the MGMT port only to redirect the Infoblox GUI from a Grid member to the Grid Master even after you enable the **Enable** **GUI/API** **Access** **via** **both** **MGMT** **and** **LAN1/VIP** feature.
   - **Show** **Restart** **Banner**: Select this checkbox to enable the appliance to display the **Restart** **Banner** at the top of Grid Manager whenever the appliance notifies you that a service restart is required.
   - **Require** **Name**: Select this checkbox to prompt the administrator to input the username before performing the service restart. When you select this checkbox, the appliance displays the *Confirm* *Restart* *Services* dialog box. Enter the username in the **Name** field and click **Restart** **Services**. For information about restarting service, see [*Restarting Services*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/restarting-services)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/restarting-services)
5. Save the configuration.

If you changed the VPN port number, time zone, date or time, Grid Manager displays a warning indicating that a product restart is required. Click **Yes** to continue, and then log back in to Grid Manager after the application restarts.
