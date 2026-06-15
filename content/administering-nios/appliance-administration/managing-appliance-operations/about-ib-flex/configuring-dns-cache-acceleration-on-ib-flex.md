---
title: "Configuring DNS Cache Acceleration on IB-FLEX "
source: "/space/nios90/1432720714"
pageId: "1432720714"
---
When you enable DNS cache acceleration on an IB-FLEX appliance, the appliance acts as a high-speed DNS caching-only name server. This feature provides DNS cache acceleration support for recursive UDP DNS queries on the IB-FLEX. The DNS cache acceleration feature is bundled with the **Tiered licensing**. When you install this license, you are entitled to use the DNS cache acceleration feature on IB-FLEX.

IB-FLEX supports RPZ, but the response for RPZ queries are not cached by the DNS cache accelerator. Instead, these queries are bypassed to the host and you can configure cache expiry period for RPZ queries. Note that the maximum cache lifetime for DNS cache acceleration on IB-FLEX is set to 300 seconds if the RPZ license is installed.

You can configure DNS cache acceleration on IB-FLEX using Grid Manager or API. To view accelerated cache details, you can either sign in to Grid Manager, use CLI commands, or Infoblox API. For detailed information about configuring DNS Cache Acceleration, see [*Configuring DNS Cache Acceleration*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/400786054).

At present, the TE-23*x*6, TE-41*x*6, and IB-FLEX medium and large appliances are the only qualified permutations across hardware and VMs with appropriate compute resources.
