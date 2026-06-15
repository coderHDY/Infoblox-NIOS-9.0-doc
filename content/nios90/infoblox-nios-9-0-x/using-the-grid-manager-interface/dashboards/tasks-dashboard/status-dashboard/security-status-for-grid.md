---
title: "Security Status for Grid"
source: "/space/nios90/1456866574"
pageId: "1456866574"
---
The *Security* *Status* *for* *Grid* widget displays the overall status of DNS Infrastructure Protection, RPZ (Response Policy Zone), and DNS Threat Insight services on the Grid members that support Infoblox DNS Infrastructure Protection and Infoblox Threat Insight. Grid Manager displays this widget only when at least one member in the Grid has the DNS Infrastructure Protection, RPZ, or Threat Insight license installed. You can add this widget to the Security dashboard to monitor the overall security status of the Grid. The statistics displayed in this widget are cumulative, collected from all the Grid members that support Infoblox DNS Infrastructure Protection and Infoblox Threat Insight. This widget displays data for the last 30 minutes. The overall status of DNS Infrastructure Protection, RPZ, and DNS Threat Insight is determined by the threshold values configured in the *Global* *Dashboard* *Properties* editor. For information, see [Configuring Security Status Thresholds](#)

> **warning**
>
> ### Note
> 
> If the Threat Protection license is not installed on any of the Grid members, Grid Manager does not display any DNS infrastructure protection related information in this widget. Similarly, if the RPZ license is not installed on any of the Grid members, Grid Manager does not display RPZ and DNS Threat Insight related information in this widget and if the Threat Insight license is not installed on any of the Grid members, Grid Manager does not display DNS Threat Insight related information in this widget.

The widget displays the following information for DNS Infrastructure Protection, RPZ, and DNS Threat Insight:

- **Status**: It displays the overall status of the security service in the Grid based on the events collected from all the members that support Infoblox DNS Infrastructure Protection and Infoblox Threat Insight. It represents the status of the most critical member in the Grid.  
  The status icon can be one of the following for the DNS Infrastructure Protection, RPZ, and DNS Threat Insight service:
  
  - **OK** (Green): The license for the security service is installed and the security service is running. The rulesets for the security service are available and the number of events triggered are less than the yellow and red threshold values configured in the *Global* *Dashboard* *Properties* editor for the corresponding security service.
  - **Warning** (Yellow): The license for the security service is installed and the security service is running. The rulesets for the security service are available and the number of events triggered for any of the parameters equals or exceeds the yellow threshold value, but less than the red threshold value configured in the *Global Dashboard Properties* editor for the corresponding security service.
  - **Critical** (Red): The license for the security service is installed and the security service is running. The rulesets might not be available or the number of events triggered for any of the parameters, equals or exceeds the red threshold value configured in the *Global Dashboard Properties* editor for the corresponding security service.
  - **Not Setup** (Black): The license for the security service is installed, but the security service is not running.
  - **Unknown** (Black): The data is not available from the Grid member.

You can hover your mouse over the DNS Infrastructure Protection, RPZ, and Threat Insight status icon and view the *DNS Infrastructure* *Protection* *Status* *for* *Grid* widget, *Response* *Policy* *Zone* *(RPZ)* *Status* *for* *Grid* widget, and *Threat* *Insight* *Status* *for* *Grid* widget respectively. For information about *DNS Infrastructure* *Protection* *Status* *for* *Grid* widget, *Response* *Policy* *Zone* *(RPZ)* *Status* *for* *Grid* widget, and *Threat* *Insight* *Status* *for* *Grid* widget, see [DNS Infrastructure Protection Status for Grid](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/dns-infrastructure-protection-status-for-grid), Response Policy Zone (RPZ) Status for Grid, and Threat Insight Status for Grid respectively.

- **Events from &lt;&gt; of &lt;&gt; security capable members**: This column displays the cumulative event counts collected from the online Grid members that support the Infoblox DNS Infrastructure Protection and Infoblox Threat Insight.
  
  - **DNS Infrastructure Protection**: Displays the total DNS infrastructure protection event counts for the following severity levels:
    
    - **Critical** (Red): The total number of critical events.
    - **Major** (Orange): The total number of major events.
    - **Warning** (Yellow): The total number of warning events.
    - **Informational** (Blue): The total number of informational events.
  - **RPZ**: Displays the total number of hits received for the following RPZ rules:
    
    - **Blocked hits** (Red): Total number of queries that triggered a Block (No Data) or Block (No Such Domain) RPZ rule.
    - **Passthru hits** (Yellow): Total number of queries that triggered a Passthru RPZ rule.
    - **Substituted hits** (Orange): Total number of queries that triggered a Substitute (Domain Name) or Substitute (Record) RPZ rule.
  - **Analytics**: Displays the total number of DNS tunneling events.
- **Definitions/Rules**: This column displays the status of the latest ruleset available in the database. For RPZ, the definition status is based on the latest RPZ feed received from Infoblox specific feeds. You can hover your mouse over the definition status to see the RPZ definition status when RPZ definitions exists.
- **Configuration Status**: This column indicates whether the security service is enabled and running properly or not. Grid manager displays a green check mark if the security service is enabled and running properly in the Grid. If the security service is disabled, a gray pause mark is displayed. You can hover your mouse over the gray pause mark to see the status of the security service.

In addition, you can click the Configure icon and do the following:

- Click **Configure** **Security** **Status** **Thresholds** to configure the thresholds for the security status of the Grid. In the *Global* *Dashboard* *Properties* editor, you can define the threshold values for DNS Infrastructure Protection, RPZ, and DNS Threat Insight. For information, see [Configuring Security Status Thresholds](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/configuring-security-status-thresholds).
- Select the **Auto Refresh Period** checkbox to turn on auto-refresh and specify the auto-refresh period in seconds. The default auto-refresh period is 30 seconds.

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

Click the Configure icon again to hide the configuration panel after you complete the modification.
