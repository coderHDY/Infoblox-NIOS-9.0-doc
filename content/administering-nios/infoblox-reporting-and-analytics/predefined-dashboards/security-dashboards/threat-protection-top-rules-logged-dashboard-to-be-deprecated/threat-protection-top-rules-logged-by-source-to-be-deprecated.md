---
title: "Threat Protection Top Rules Logged by Source (To be Deprecated)"
source: "/space/nios90/1858241115"
pageId: "1858241115"
---
> **warning**
>
> **Note**
> 
> From NIOS 9.0.8, Threat Protection is called DNS Infrastructure Protection.
> 
> This sub-dashboard with previous name will be deprecated from NIOS 9.1.0 onwards. For future reference, use [*DNS Infrastructure Protection Top Rules Logged by Source*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1428849707).

The *Threat* *Protection* *Top* *Rules* *Logged* *by* *Source* sub-dashboard provides statistics about the total number of events triggered by the top sources (by client IP addresses) in a given time frame. You can also view the statistics for the total number of events triggered by NAT'ed clients in a given time frame. For example, if you configure a range of ports for a NAT'ed client, and if there are events logged from different port blocks of the NAT'ed client, then each port block is considered as a logical client in the dashboard. You can view the source IP address, total number of events, rule name, and timestamp of an event. If an event is triggered by a NAT'ed client, then you can view the source IP address along with the port block of the NAT'ed client. The default sub-dashboard displays a bar chart for the top 10 source IP addresses that triggered DNS Infrastructure Protection rules within the last seven days. This sub-dashboard allows you to identify the IP address of the client and the rules it triggered.

> **warning**
>
> **Note**
> 
> You can configure the top number of source IP addresses and Threat Protection rules on the appliance. For information about how to configure Threat Protection data, see [*Configuring DNS Infrastructure Protection Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1457029249).

This sub-dashboard displays the following information in table format:

- **Source**: The IP address of a source that triggered a Threat Protection rule.
- **Logged** **Event** **Count:** The total number of events triggered by a source against the rule.
- **Top** **Rules:** The name of the top rules triggered by each source IP. By default, the top three rules are displayed.
- **Last** **Active:** The timestamp when the source was last active.
