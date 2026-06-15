---
title: "Configuring dnstap to Log DNS Queries and Responses"
source: "/space/nios90/1432748211"
pageId: "1432748211"
---
You can use the dnstap log format to log DNS queries and responses at high rates to well-known destinations and achieve high performance query  and response logging. NIOS logs all valid DNS queries and responses that are not dropped by DNS Infrastructure Protection. For information about dnstap, see [https://dnstap.info/](https://dnstap.info/) *.*

To use the dnstap log format, you need to enable dnstap by running the [*set enable_dnstap*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280855743)* *command. To view whether the dnstap log format is enabled or disabled, run the [*show dnstap-status*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280266134) command. To view the number of queries and responses sent to the destination when the dnstap log format is enabled for high-performance logging of queries and responses, run the [*show dnstap-stats*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280397382) * *command.

If you choose to enable the dnstap log format, you will not be able to capture queries and responses using the **Data connector for all DNS Queries/Responses to a Domain** fields. And if you use the **Data connector for all DNS Queries/Responses to a Domain** fields for query capture, the **DNSTAP settings for DNS Queries/Responses** fields will be disabled.

> **warning**
>
> ### Note
> 
> For DNS Infrastructure Protection software with acceleration, you must download the latest ruleset before enabling dnstap.
