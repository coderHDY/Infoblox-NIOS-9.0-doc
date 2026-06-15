---
title: "Threat Insight Status for Grid"
source: "/space/nios90/1457095936"
pageId: "1457095936"
---
The *Threat* *Insight* *Status* *for* *Grid* widget displays the statistical information about the DNS tunneling events. This widget contains the following tabs: *Detections* *Over* *Time*, *Top* *10* *Grid* *Members*, and *Detections*.  
You can do the following in this widget:

- Turn on auto-refresh.  
  Click the Configure icon, select the **AutoRefreshPeriod** checkbox, and specify the refresh period in seconds. The default auto refresh period is 30 seconds. Click the Configure icon again to hide the configuration panel after you complete the modification.

> **error**
>
> ### Warning
> 
> If the [*Detailed Status panel*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/member-status) is open, the following actions take place:
> 
> - Grid Manager auto refreshes at a rate of 30 seconds.
> - Widgets that support user-specified auto refresh, refresh at the rate specified in the **Auto Refresh Period** field.
> 
> Therefore, even if you set the session timeout to be to greater than the auto refresh rate, auto refresh still takes place. The Grid Manager session does not time out because auto refresh takes precedence over the session timeout. For more information about widgets, see [*Status Dashboard*](#).

- Click the [Detections Over Time](#) tab to view information about the detected DNS tunneling events in a given time frame.
- Click the [Top 10 Grid Members](#) tab to view information about the top 10 Grid members with the most total counts of detections by type.
- Click the [Detections](#) tab to view information about all the detected DNS tunneling events.
