---
title: "Restarting Grid Services"
source: "/space/nios90/1356268779"
pageId: "1356268779"
---
Only superusers and administrators with read/write permission to all Grid members can schedule a Grid restart task. You can restart services at the Grid level either simultaneously or sequentially, and can also specify the restart time.  
If you schedule the restart at a specific date and time, the system schedules the restart at the specified time on each Grid member.  
To restart services at the Grid level:

1. From the **Data** **Management** tab, select the **DHCP**, **DNS**, or **Grid** tab, or select the **Administration** tab, and then click **Restart** **Services** from the Toolbar.

The *Restart* *Grid* *Services* dialog appears.

1. You can specify whether the member restarts services when necessary or you can force it to restart services. Select one of the following in the [Restart Grid Services](#) section:
   
   - **Ifneeded**: Select this to restart all active DNS and DHCP services if there are any changes requiring a service restart.
   - **Forceservicerestart**: Select this to force a service restart even if it is not needed. A forced restart may be delayed if there are pending restarts for the same service.
2. Select one of the following in the *RestartMethod* section:
   
   - **RestartAllRestartGroups**: Restarts the services in the affected Grid members in the order defined for restart groups.
   - **Simultaneouslyforallmembers**: Restarts the services on all of the members in a Grid at the same time.
   - **Sequentiallyforallmembers**: Restarts the services on each Grid member one after one.  
     **AffectedMembersandServices**: Click the Poll Members icon to display the affected members and services when the system restarts. Grid Manager displays the member names and one of the following for each service:
   - **YES**: The service is active and the system will restart the service upon execution of this task.
   - **NO**: The service will not restart unless the **Forceservicerestart** option is selected.
   - **DISABLED**: The service is currently disabled.  
     **ViewPendingChanges**: You can view the list of pending changes that will take effect when you restart the services. You can use filters to look for specific objects and view the following information for each pending activity:
   - **Timestamp**: The timestamp of the operation.
   - **Admin**: The admin user who performed the operation.
   - **Action**: The type of operation that was performed by an administrator. This can be **Created**, **Modified**, **Deleted**, **Called**, or **Message**.
   - **ObjectType**: Displays the object type. For example, DNS View, Named ACL, IPv4 MAC Filter, Blacklist Rule, and so on.
   - **ObjectName**: The name of the object.
   - **Message**: Description of the activity.
3. To schedule a service restart task, click the Schedule icon at the top of the wizard. In the *ScheduleChange* panel, complete the following:
   
   - **Now**: Restarts services upon clicking **Restart**.
   - **Later**: Enter the following information to schedule all Grid members to restart services at a certain date and time:
     
     - **Date**: Enter a date in YYYY-MM-DD (year-month-day) format. The appliance displays today's date. You can also click the calendar icon to select a date from the calendar widget.
     - **Time**: Enter a time in hh:mm:ss AM/PM (hours:minutes:seconds AM or PM) format. When you enter the time in a 24-hour format such as 23:00, Grid Manager displays 11:00:00 PM. You can also select a time from the drop-down list by clicking the time icon.
     - **TimeZone**: Select a time zone for the scheduled date and time from the drop-down list. This field displays the time zone of the browser that the admin uses to log in to Grid Manager.
4. Click **Restart** to restart services immediately or click **ScheduleRestart** to create a scheduled restart task.

> **warning**
>
> ### Note
> 
> When you restart services at the Grid level, the services are restarted only on those members for which you have permissions.
