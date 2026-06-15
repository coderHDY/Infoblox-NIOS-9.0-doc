---
title: "Security Status for All Members"
source: "/space/nios90/1457652463"
pageId: "1457652463"
---
The *Security* *Status* *for* *All* *Members* widget displays information about the status of all the Grid members that support Infoblox DNS Infrastructure Protection and Infoblox Threat Insight. Grid Manager displays this widget only when at least one member in the Grid has the Threat Protection or RPZ license. You can add this widget to the Security dashboard to monitor the status of the Grid members that support Infoblox DNS Infrastructure Protection and Infoblox Threat Insight.

> **warning**
>
> ### Note
> 
> When an HA Grid Master fails over, the new active node re-collects data from all the Grid members. Hence, it might take a few seconds until the data is displayed in the Security dashboard. When an HA Grid member fails over, the Grid Master stops collecting data from the HA member.

The *Security* *Status* *for* *All* *Members* widget displays the following information:

- **Overall** **Status**: The current overall security status of the members that support Infoblox DNS Infrastructure Protection and Infoblox Threat Insight. This can be **OK**, **Warning**, **Critical**, or **Unknown**.

The security status for a member might be **Unknown** if NTP service is out of synchronization for the member. Hence, to ensure that the correct data is displayed for the member, use NTP to synchronize the time of the member with that of the Grid Master.

- **Member**: The name of the member. You can hover your mouse over the member name and view the *Member* *Status* widget.
- **IPv4 Address**: The IPv4 address of the member.
- **IPv6 Address**: The IPv6 address of the member.
- **DNS Infrastructure Protection Status**: The status of the DNS infrastructure protection service running on the member. This can be either **OK**, **Warning**, **Critical**, **NotSetup,** or **Unknown**. You can hover your mouse over the DNS infrastructure protection status and view the *DNS Infrastructure Protection Status for Member* widget.
- **RPZ Status**: The status of the RPZ service running on the member. This can be either **OK**, **Warning**, **Critical**, **NotSetup,** or **Unknown**. You can hover your mouse over the RPZ status and view the *ResponsePolicyZone(RPZ)Statistics* widget. For information about the *Response Policy Zone (RPZ) Statistics* widget.
- **Analytics Status**: The status of the DNS Threat Insight service running on the member. This can be either **OK**, **Warning**, **Critical**, **NotSetup**, or **Unknown**.

You can also do the following in this widget:

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

- Turn on auto-refresh. Click the Configure icon and select the **AutoRefreshPeriod** checkbox to turn on auto-refresh. Specify the auto-refresh period in seconds. The default auto refresh period is 30 seconds.
- Click the Action icon (shown as a gear in each row of the table) next to the overall status of each member, and select **ViewSyslog** to view all the events logged in the syslog. Grid Manager displays the syslog messages in the Syslog Preview window.
- Click the Export icon to export the data displayed in this widget.
- Click the Print icon to print the data displayed in this widget.
- Click **Response Policy Zones** link in the **GoTo** field at the top of the widget to view the RPZs configured on the member. Grid Manager displays the **Response Policy Zones** tab in the **DNS** tab. To navigate back to the Security dashboard, click **Back to Security Dashboard** at the top left corner of the navigation bar in the **Response Policy Zones** tab.
- Click **DNS Infrastructure Protection** link in the **Go To** field at the top of the widget to view the DNS infrastructure protection rulesets configured on the member. Grid Manager displays the **DNS Infrastructure Protection Rules** tab in the **Security** tab. To navigate back to the Security dashboard, click **Back to Security Dashboard** at the top left corner of the navigation bar in the **DNS Infrastructure Protection Rules** tab.
- Click **Threat Insight** link in the **Go To** field at the top of the widget to view the whitelist domains configured on the member. Grid Manager displays the **Threat Insight** tab. To navigate back to the **Security** dashboard, click **Back to Security Dashboard** at the top right corner of the panel in the **Threat Insight** tab.
- Click **Members** link in the **Go** **To** field at the top of the widget to view the members configured in the Grid. Grid Manager displays the **Members** tab in the **Grid** **Manager** tab. To navigate back to the Security dashboard, click **Back** **to** **Security** **Dashboard** at the top left corner of the navigation bar in the **Members** tab.
