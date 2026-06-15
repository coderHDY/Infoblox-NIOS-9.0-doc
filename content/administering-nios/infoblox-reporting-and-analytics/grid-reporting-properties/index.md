---
title: "Grid Reporting Properties"
source: "/space/nios90/280267688"
pageId: "280267688"
---
After you set up a dedicated reporting appliance in your Grid, you must configure the Grid reporting properties so you can communicate with the reporting appliance and retrieve report data through the Grid Master. In addition, you must select the correct report categories in order for the reporting server to generate the correct data in corresponding reports, as described in [Configuring Grid Reporting Properties](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1457029215).  
By default, only superusers can configure the Grid reporting properties. When you enable the Grid reporting service, all members transmit data to the reporting server. You can disable data transmission from specific members to the reporting server. Before using the reporting service, you must configure the remote server to export the search results, as described in [Reporting (Index) Storage Space](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1457094775). Once you configure the reporting server and enable the reporting service on Grid members, you can view and manage reports through the **Reporting** tab of Grid Manager.

> **warning**
>
> ### Note
> 
> - When you reset the appliance using the `reset all` CLI command or reset the database using the `reset database` CLI command, reporting configurations are not preserved. If you reset the appliance, you must configure Grid reporting properties and remote server settings to use the reporting service.
> - Expired cookies in a Splunk session are not removed in the Firefox browser by default. Expired cookies also cannot be reused. However, there is no impact on functionality.

Complete the following to set up your reporting solution:

1. Configure general reporting properties, including the selection of report categories, as described in [Configuring Grid Reporting Properties](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1457029215).
2. Specify the network port for reporting, as described in [Setting the Network Port for Reporting](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1456865327) below.
3. Specify email properties, as described in [https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280660796/About+Alerts#Configuring-Email-Notification-Settings](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280660796/About+Alerts#Configuring-Email-Notification-Settings) .
4. Configure the logo image for PDF delivery, as described in [Configuring Logo Image in PDF Reports - I](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1371177318).

The properties you define in the *Grid* *Reporting* *Properties* editor apply to all the reporting members unless you override them at the specific member level. To override at the member level, see [Modifying Member Reporting Properties](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1457422450).
