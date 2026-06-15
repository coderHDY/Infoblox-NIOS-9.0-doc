---
title: "DNS Infrastructure Protection Status for Grid"
source: "/space/nios90/1457095584"
pageId: "1457095584"
---
The *DNS Infrastructure* *Protection* *Status* *for* *Grid* widget displays the statistical information about the DNS infrastructure protection events triggered on all the members in the Grid that support Infoblox DNS Infrastructure Protection and Infoblox Threat Insight. This widget contains the following tabs: *Total* *Events* *by* *Severity*, *Top* *10* *Grid* *Members*, *Events* *Over* *Time*, *Top* *10* *Rules*, and *Top* *10* *Clients*.  
You can do the following in this widget:

> **error**
>
> ### Warning
> 
> If the [*Detailed Status panel*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/member-status) is open, the following actions take place:
> 
> - Grid Manager auto refreshes at a rate of 30 seconds.
> - Widgets that support user-specified auto refresh, refresh at the rate specified in the **Auto Refresh Period** field.
> 
> Therefore, even if you set the session timeout to be to greater than the auto refresh rate, auto refresh still takes place. The Grid Manager session does not time out because auto refresh takes precedence over the session timeout.

- Turn on auto-refresh.  
  Click the Configure icon, select the **Auto Refresh Period** checkbox, and specify the refresh period in seconds. The default auto refresh period is 30 seconds. You can click the Configure icon again to hide the configuration panel.
- Click the **Total** **Events** **by** **Severity** tab to view information about DNS Infrastructure Protection related events by the severity level.
- Click the **Top 10 Grid Members** tab to view information about the top 10 Grid members that have the most number of DNS Infrastructure Protection events.
- Click the **Events Over Time** tab to view information about the total event count for each type of event severity in the given time frame.
- Click the **Top 10 Rules** tab to view information about the top 10 DNS Infrastructure Protection rules with the most number of hits.
- Click the **Top 10 Clients** tab to view information about the top 10 clients that have the most number of DNS Infrastructure Protections events.
