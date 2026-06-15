---
title: "Restarting Groups"
source: "/space/nios90/1356236204"
pageId: "1356236204"
---
When you already have restart groups defined, you can restart services by specific groups at any time after you make configuration changes.  
To restart services by groups:

1. Go to the restart groups view for the DNS or DHCP service.
2. Select the groups to restart.
3. In the toolbar, click **Restart** **–>** **Restart** **Groups**.
4. In the Restart Group Confirmation window, select the restart type for the services on the affected members:
   
   - **If** **needed**: Select this to restart services only if there are changes requiring a service restart.
   - **Force** **service** **restart**: Select this to force a service restart even if it is not needed. A forced restart may be delayed if there are pending restarts for the same service.
5. To schedule a service restart, click the Schedule icon at the top of the wizard. In the *Schedule* *Change* panel, complete the following:
   
   - **Now**: Restarts services immediately.
   - **Later**: Enter the following information to schedule the member to restart services at a certain date and time:
     
     - **Date**: Enter a date in YYYY-MM-DD (year-month-day) format. The appliance displays today's date. You can also click the calendar icon to select a date from the calendar widget.
     - **Time**: Enter a time in hh:mm:ss AM/PM (hours:minutes:seconds AM or PM) format. You can also select a time from the drop-down list by clicking the time icon.
     - **Time** **Zone**: Select a time zone for the scheduled date and time from the drop-down list. This field displays the time zone of the browser that the admin uses to log in to Grid Manager.
6. Click **Restart** to restart services immediately or click **Schedule** **Restart** to schedule the restart.

> **warning**
>
> ### Note
> 
> Normally, you cannot restart or schedule a restart of services when a scheduled full Grid upgrade is in progress. However, you can do so for the Default DNS or DHCP restart group. In this case, only the Grid Master is restarted. The other members of the group remain in the Timed Out status and are restarted after Grid Manager gets a response from them.
