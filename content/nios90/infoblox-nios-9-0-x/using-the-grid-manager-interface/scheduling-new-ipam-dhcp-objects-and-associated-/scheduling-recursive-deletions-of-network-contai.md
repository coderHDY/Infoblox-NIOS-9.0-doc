---
title: "Scheduling Recursive Deletions of Network Containers and Zones"
source: "/space/nios90/1455030696"
pageId: "1455030696"
---
Superusers can determine which group of users are allowed to schedule the deletion of a network container and its child objects as well as a zone and its child objects. For information about how to configure the recursive deletion of network containers and zones, see [*Managing a Grid*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/managing-a-grid)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/managing-a-grid)  
To schedule the recursive deletion of network containers and zones:

1. Navigate to the object.
2. Select **Schedule** **Deletion** from the Delete drop-down menu.
3. In the *Schedule* *Deletion* dialog box, complete the following:
   
   - **Delete** **Now**: Select this to delete the object upon clicking **Delete** **Now**.
   - **Delete** **Later**: Select this to schedule the deletion at a later date and time. Complete the following:
     
     - **Date**: Enter the date in YYYY-MM-DD (year-month-day) format. The appliance displays today's date. You can also click the calendar icon to select a date from the calendar widget.
     - **Time**: Enter the time in hh:mm:ss AM/PM (hours:minutes:seconds AM or PM) format. You can also select a time from the drop-down list by clicking the time icon.
     - **Time** **Zone**: Select a time zone for the scheduled date and time from the drop-down list. This field displays the time zone of the browser that the admin uses to log in to Grid Manager. Select one of the following:
       
       - **Delete** **only** **the** **parent** **container**: Select this to delete only the parent objects and re-parent the child objects.
       - **Delete** **the** **parent** **container** **and** **its** **children**: Select this to delete the parent objects and all its child objects.
4. Click **Schedule** **Deletion**.

The appliance performs the deletion at the scheduled date and time.
