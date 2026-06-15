---
title: "Reporting User Interface Overview"
source: "/space/nios90/280857174"
pageId: "280857174"
---
When you access the **Reporting** tab in Grid Manager, you can do the following:

- View and analyze all of your DNS, DHCP, and IPAM data.
- View the reporting data in the form of charts and tables.
- Use the **Search** tab to create or edit searches.

The key options in the **Reporting** tab are: **Home** **Dashboards**, **Dashboards**, **Reports,** **Alerts,** **Search**, **Datasets**, **Administration**, and **Reporting** **Help**. For more information about these options, refer the below table.

*Reporting* *Tab Overview*

*[drawio]*



The following table summarizes the different tabs and key options that are available on the **Reporting** tab:   
*Reporting* *Tab* *Overview*

| **Tab**** ****Name** | **Purpose** | **Description** |
| --- | --- | --- |
| **Settings** | Email notification settings Server Logging | For information about Configuring Email Notification Settings, see *[About Alerts](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280660796)* |
| **Home** **Dashboard** | Overall summary view for the reporting data in your Grid | For information, see *[Home Dashboards](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401011)* |
| **Dashboard** | Provide table and graph views for the reporting data in your Grid. | For information, see *[About Dashboards](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400911)* |
| **Reports** | Saved searches that retrieve specific type of reporting data | For information, see *[About Reports](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400960)* |
| **Alerts** | Set alerts to trigger actions when certain events occur | For information, see *[About Alerts](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280660796)* |
| **Search** | Create a search interactively from scratch and save it as a dashboard panel, alert and report. | For information about About Searches, see *[Home Dashboards](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401011)* |
| **Datasets** | Refer to Splunk documentation for more information. |  |
| **Administration** | - Set up - Permissions | For information, see *[Reporting (Index ) Storage Space](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267688)*  For information, see *[Administrative Permissions](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280857269)* |
| **Reporting** **Help** | Quick help on some of the reporting topics. |

Hierarchy settings for all the navigation menu options (listed in the Reporting Tab Overview table above) are available in the *default.xml* file.

> **error**
>
> **Warning**
> 
> *Infoblox recommends that you do not modify the default.xml file. The navigation menu is built on a custom XML structure that is stored as default.xml in the navigation directory (from the ****Reporting**** tag, select the ****Settings**** tab -> ****User Interface**** -> ****Navigation Menus**** -> default). Editing this file changes the specific default settings for the reporting features and your changes become permanent. In addition, you might not be able to see the latest changes made by Infoblox. To restore the default settings, you must reset the NIOS appliance to its original factory settings. For Information, see* *[Resetting a NIOS Appliance to Factory Settings](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764842)*.
