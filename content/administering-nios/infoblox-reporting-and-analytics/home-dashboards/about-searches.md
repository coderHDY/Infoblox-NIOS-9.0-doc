---
title: "About Searches"
source: "/space/nios90/1371144602"
pageId: "1371144602"
---
Searches are criteria that the reporting server uses to save reports and dashboard panels. Each predefined report has an associated search. For more information, refer to the official Splunk documentation: [http://docs.splunk.com/Documentation](http://docs.splunk.com/Documentation)*.*  
To run a search:

1. From the **Reporting** tab, select the **Search** tab.
2. Enter the search criteria. Use the auto-open search tips from Splunk.
3. If necessary, select a time range in the time range picker at the end of the search bar. By default, it is set to **Last 24 Hours**.
4. Click the Search icon.

The search results are based on the most seen events for the dashboards listed in the table below. To know more about dedup searches, reports, or dashboards, refer to [https://docs.splunk.com/Documentation/Splunk/9.2.1/SearchReference/Dedup](https://docs.splunk.com/Documentation/Splunk/9.2.1/SearchReference/Dedup).

*Dashboards* *and* *Deduplicate* *Key(s)*

| **Dashboard** | **Deduplicate** **Key(s)** |
| --- | --- |
| Inactive IP Addresses, for more information see [*Devices (Discovery) Dashboards*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662425). | Network view + IP address |
| For more information about these dashboards, see [*IPAMv4 Utilization Dashboards*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402831). |
| DHCPv4 Top Utilized[ ](#)Networks | Network view + network |
| DNS[ ](#)Statistics per DNS[ ](#)View | DNS view |
| DNS[ ](#)Statistics[ ](#)per[ ](#)Zone | DNS view + DNS zone |
| IPAMv4 Network Usage Statistics | Network view + Network |
| IPAMv4 Top Utilized[ ](#)Networks | Network view + Network |

*Sample* *Search* *Summary*

*[drawio]*

The search results are displayed in the **New** **Search** panel, as illustrated in the *New Search View*. In the **New** **Search** panel, you can save search results as **Report**, **Dashboard** **Panel**, and **Alert**.

When you deploy reporting clustering, we enable Splunk configuration to prevent data loss from forwarders, which may cause duplicated events in the indexer under certain circumstances. When you view reports and dashboards, the events that are already deduped are not duplicated again. However, if you view raw search events (such as write your own search against the indexed data directly), you may still see the duplicated events.

*New* *Search* *View*

*[drawio]*
