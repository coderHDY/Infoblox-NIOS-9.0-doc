---
title: "FireEye Alerts"
source: "/space/nios90/1428849376"
pageId: "1428849376"
---
The *FireEye* *Alerts* *dashboard* lists the FireEye alerts that are received by the NIOS appliance. The dashboard displays the date and time when the alert was generated, mitigation action for the alert, ruleset specified for the blocked domain or IP address, and the name of the FireEye appliance that generated the alert. For more information about Configuring FireEye RPZs, see [*About FireEye Integrated RPZs*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs).

> **warning**
>
> Note
> 
> To enable this dashboard, you must select the **Security** checkbox in the **Grid** **Reporting** **Properties** editor. To select the checkboxes, go to the **Administration** tab -&gt; **Reporting** tab -&gt; **Grid** **Reporting** **Properties** -&gt; **General** tab  
> -&gt; **Basic** tab -&gt; select the checkbox **Security** under **Report** **Category**. Note that you can receive this dashboard only on the Grid Master, not on Grid members, even if you have selected **Security** as a report category on the members.

This dashboard displays the following information in table format:

- **Time**: The date and time when the alert was generated.
- **AlertID**: The alert type along with the alert ID.
- **LogSeverity:** The severity of the alert, which can be **Critical**, **Major** or **Minor**.
- **AlertType**: The type of alert received from the FireEye appliance.
- **FireEyeAppliance**: The FireEye appliance that generated the alert.
- **RPZEntry:** The RPZ rule specified for the FireEye alert.
- **MitigationAction:** The ruleset specified for the blocked domain name or IP address.
