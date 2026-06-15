---
title: "DNS Top RPZ Hits"
source: "/space/nios90/1428849407"
pageId: "1428849407"
---
The *DNS* *Top* *RPZ* *Hits* dashboard lists the top clients who received re-written responses through RPZ. The dashboard displays the total client hits and total rule hits over a given time frame. You can choose to view either the aggregated RPZ hits report or a detailed report of the top RPZ hits. In the **Show** **filter**, select **Details** to view the detailed report or select **Aggregated** **Hits** **Count** to view the aggregated report. When you select the **Aggregated** **Hits** **Count** option, the report data is consolidated based on the client ID, domain name, RPZ entry, RPZ severity, and mitigation action.  
The appliance lists the top RPZ hits in table format. You can click a specific row in the table or the Client ID to view the DHCP lease history of a client. For information about DHCP lease history, see [*DHCP Dashboards*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/dhcp-dashboards). Grid Manager displays another report that specifies more detailed information, such as the leased IPs, host name, and MAC addresses for each client. For more information about RPZs, see [*About Infoblox DNS Firewall*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-infoblox-dns-firewall). You can click **Domain** **Name** or **RPZ Entry** to view threat details of an RPZ rule. In addition, you can click the client IP address to view login details of the user. For information, see User History for IP Address below.  
You can compare the domain name and mitigation action in this dashboard with the RPZ rules and mitigation actions in the **FireEye** **Alerts** report to determine the RPZ hits received due to FireEye alerts.

> **warning**
>
> Note
> 
> To enable this dashboard, you must select the **DNS** **Query** and **Security** checkboxes in the **Grid** **Reporting** **Properties** editor. To select the checkboxes, to the **Administration** tab -&gt; **Reporting** tab -&gt; **Grid** **Reporting** **Properties** -&gt; **General** tab -&gt; **Basic** tab -&gt; select the checkboxes **DNS** **Query** and **Security** under **Report** **Category**.

If you have configured Infoblox Subscriber Services, you can click **Subscriber ID** to view the sub-dashboard *RPZ Details for the Subscriber ID* dashboard. For information, see RPZ Details for the Subscriber ID below.

This dashboard displays the following information in table format:

- **Client** **ID**: The IP address of the client that queried the domain name that is listed in the RPZ ruleset.
- **Total** **Client** **Hits**: The total number of hits received for each DNS view from the respective client.
- **Domain** **Name:** The domain name that was queried.
- **Severity:** The threat severity level of an RPZ zone associated with the RPZ rule that was triggered.
- **RPZ** **Entry**: The RPZ rule that was triggered based on client queries.
- **Total** **Rule** **Hits**: The total number of hits received for a specific RPZ rule.
- **Mitigation** **Action**: The ruleset specified for the blocked domain name or IP address.
- **Subscriber ID**: The subscriber ID type and the subscriber ID value. This field is displayed only if you have configured Infoblox Subscriber Services.
- **Substitute** **Addresses**: The address which was substituted for the blocked domain.
- **Time**: The date and time when the last hit was received. This information is displayed only in the detailed *DNS* *Top* *RPZ* *Hits* report.

The sub-dashboard *Threat* *Details* displays the following information in table format:

> **warning**
>
> Note
> 
> Make sure that DNS resolution is enabled and running properly on the reporting member to view *Threat* *Details.*

- **RPZ** **Rule**: The RPZ rule that was triggered based on client queries.
- **First** **Identified**: The date and timestamp of the first occasion that the threat was detected.
- **Last** **Seen**: The date and timestamp of the last occasion that the threat was detected.
- **Threat** **Category**: The category to which the threat belongs.
- **Danger** **Level**: The severity level of the threat.
- **Short** **Description**: The brief description of an RPZ rule.
- **Description:** The detailed description of an RPZ rule.
