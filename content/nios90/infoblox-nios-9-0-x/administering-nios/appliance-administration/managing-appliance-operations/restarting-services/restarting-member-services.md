---
title: "Restarting Member Services"
source: "/space/nios90/1356301498"
pageId: "1356301498"
---
The member restart time always supersedes the Grid restart time. If the member restart time is later than the Grid restart time, then the member restarts services at its scheduled time. If the member restart time is before the Grid restart time, then the member restarts services at its scheduled restart time, and again during the Grid restart time.  
To restart member services:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; *member* checkbox.   
   or  
   From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, and then select a member checkbox.
2. Click **Restart** **Services** from the Toolbar.
3. You can specify whether the member should restart services when necessary or you can force it to restart services. Select one of the following in the *Restart* *Member* *Services* section:
   
   - **If** **needed**: Select this to restart all active DNS and DHCP services, if there are any changes requiring a service restart.
   - **Force** **service** **restart**: Select this to force a service restart even if it is not needed. A forced restart may be delayed if there are pending restarts for the same service.  
     **Affected** **Services**: This table displays the affected services when the system restarts. It can display one of the following for each service:
   - **YES**: The service is active and the system will restart the service upon execution of this task.
   - **NO**: The service will not restart unless the **Force** **service** **restart** option is selected.
   - **DISABLED**: The service is currently disabled.  
     **View** **Pending** **Changes**: You can view the list of pending changes that will take effect when you restart the services. You can use filters to look for specific objects and view the following information for each pending activity:
   - **Timestamp**: The timestamp of the operation.
   - **Admin**: The admin user who performed the operation.
   - **Action**: The type of operation that was performed by an administrator. This can be **Created**, **Modified**, **Deleted**, **Called**, or **Message**.
   - **Object** **Type**: Displays the object type. For example, DNS View, Named ACL, IPv4 MAC Filter, Blacklist Rule, and so on.
   - **Object** **Name**: The name of the object.
   - **Message**: Description of the activity.
4. To schedule a service restart task, click the Schedule icon at the top of the editor. In the *Schedule* *Change* panel, complete the following:
   
   - **Now**: Restarts services immediately.
   - **Later**: Enter the following information to schedule the member to restart services at a certain date and time:
     
     - **Date**: Enter a date in YYYY-MM-DD (year-month-day) format. The appliance displays today's date. You can also click the calendar icon to select a date from the calendar widget.
     - **Time**: Enter a time in hh:mm:ss AM/PM (hours:minutes:seconds AM or PM) format. You can also select a time from the drop-down list by clicking the time icon.
     - **Time** **Zone**: Select a time zone for the scheduled date and time from the drop-down list. This field displays the time zone of the browser that the admin uses to log in to Grid Manager.
5. Click **Restart** to restart services immediately or click **Schedule** **Restart** to create a scheduled restart task.
