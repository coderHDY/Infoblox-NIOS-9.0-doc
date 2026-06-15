---
title: "Scheduling Additions and Modifications"
source: "/space/nios90/1454964989"
pageId: "1454964989"
---
You can schedule the addition and modification of an object. For example, you can schedule the addition of a DNS forward zone or the modification of a fixed address. After you schedule a task, administrators cannot modify the object associated with the scheduled task until after the appliance executes the task. However, the object can still be updated with DHCP leases and other system services.  
To schedule an addition or a modification:

1. Add or modify a record following the instructions described in this guide.
2. Click the Schedule icon at the top of the corresponding wizard or editor.
3. In the *Schedule* *Change* panel, complete the following:
   
   - **Now**: Select this to have the appliance perform the task when you save the entry. This is selected by default when there is no scheduled task associated with the object.
   - **Later**: Select this to schedule the task for a later date and time. Complete the following:
     
     - **Date**: Enter a date in YYYY-MM-DD (year-month-day) format. The appliance displays today's date. You can also click the calendar icon to select a date from the calendar widget.
     - **Time**: Enter a time in hh:mm:ss AM/PM (hours:minutes:seconds AM or PM) format. You can also select a time from the drop-down list by clicking the time icon.
     - **Time** **Zone**: Select a time zone for the scheduled date and time from the drop-down list. This field displays the time zone of the browser that the admin uses to log in to Grid Manager.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
