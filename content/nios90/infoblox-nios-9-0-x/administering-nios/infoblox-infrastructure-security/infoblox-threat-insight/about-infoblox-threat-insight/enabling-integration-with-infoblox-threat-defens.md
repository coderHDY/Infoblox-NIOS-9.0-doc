---
title: "Enabling Integration with Infoblox Threat Defense Cloud for Threat Insight"
source: "/space/nios90/1426588063"
pageId: "1426588063"
---
If your network configuration includes Infoblox Threat Defense Business On-premises, Infoblox Threat Defense Business Cloud, or Infoblox Threat Defense Advanced, you can configure a cloud integration client to collect malicious domains detected by Threat Insight in the Infoblox Threat Defense cloud. NIOS then applies the detected domains to RPZs that were configured for the on-premises Grid. This feature ensures that all malicious domains detected in Infoblox Threat Defense Cloud are also applied on Grid members on-prem.

You can use this feature when you have Infoblox Threat Defense Business On-premises, Infoblox Threat Defense Business Cloud, or Infoblox Threat Defense Advanced license. Note that you can configure only one cloud client per on-premises Grid. Ensure that you configure the email address and password in the *Grid Properties* *Editor* before you enable the integration with Infoblox Threat Defense Cloud Client. For more information about Configuring Integration with Infoblox Threat Defense Cloud, see [*Configuring Integration with Infoblox Threat Infoblox Cloud*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-infoblox-threat-defense-cloud-client).

To enable the integration with Infoblox Threat Defense Cloud, complete the following steps:

1. From the **Data Management** tab, select the **DNS **tab -&gt; **Response Policy Zones** tab. Expand the Toolbar and click **Infoblox Threat Defense Cloud Client**.
2. In the* Infoblox Threat Defense Cloud Integration Client* editor, complete the following:
   
   - **Enable Cloud Client**: Select this checkbox to enable NIOS to get Threat Insight results in Infoblox Threat Defense Cloud.  
     The results are periodically synchronized based on the interval you set. NIOS requests only subsequent data since the last data timestamp.
   - **Interval**: You can specify how often to request Threat Insight results detected in Infoblox Threat Defense Cloud in seconds or minutes. The default is 10 minutes.
   - **The list of Response Policy Zones to use for blocklisted domains**: Click the Add icon to add an RPZ to the list. When there are multiple zones, Grid Manager displays the *Zone Selector* dialog box from which you can select one. You can add RPZs from different network and DNS views.
3. Click** Save & Close**.

> **warning**
>
> Note
> 
> Whenever a new RPZ is added and NIOS requests Threat Insight results, Grid Manager displays a *Warning* dialog box to confirm that you wish to request all detected domains by Threat Insight in Infoblox Threat Defense Cloud. If you click **No** in the *Warning* dialog box, you can use the set `cloud_services_portal_force_refresh` CLI command in maintenance mode and set the flag to request all domains detected in Infoblox Threat Defense Cloud.
