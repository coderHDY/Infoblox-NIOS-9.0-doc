---
title: "Configuring DNS Cache Acceleration"
source: "/space/nios90/400786054"
pageId: "400786054"
---
When you enable the virtual DNS cache acceleration feature on IB-FLEX and non IB-FLEX appliances, it acts as a high-speed DNS caching-only name server. This feature provides DNS cache acceleration support for recursive UDP DNS queries.

The DNS cache acceleration feature is bundled with tiered licensing for IB-FLEX appliances and for non-IB-FLEX appliances it is based on the type of tiered license that is installed. Only the Tier 1 (unlimited QPS up to capability) license can be installed on IB-2215 and IB-V2225 appliances. When you install the license, you are entitled to use the DNS cache acceleration feature. For non-IB-Flex appliances, the warning message is based on the tiered license that is installed, and the QPS is rate-limited which is based on the type of license installed. If the tiered license and the QPS exceed the threshold, a warning message is displayed.

All the appliances support RPZ, but the response for RPZ queries are not cached by the DNS cache accelerator. Instead, these queries are bypassed to the host. You can configure the cache expiry period for RPZ queries. Note that the maximum cache lifetime for DNS cache acceleration is set to 300 seconds if the RPZ license is installed. However, for IB-Flex appliances, you must configure RPZ zones for a member.

You can also use elastic scaling to pre-provision DNS cache acceleration. These appliances support Intel x86_64 systems with IOMMU, Hugepages processors, virtio-net, and Intel 82599 10 G NIC and SRIOV with Intel 82599 ethernet controllers for DNS cache acceleration.

You can configure DNS cache acceleration using the Grid Manager or API. To view accelerated cache details, you can either log in to Grid Manager, or use CLI commands, or Infoblox API. Infoblox supports Auto Scaling that contains OpenStack packages to automatically scale the required number of resources based on your application. For more information, refer to [*Auto Scaling for Virtual DNS Cache Acceleration*](https://infoblox-docs.atlassian.net/wiki/spaces/NKHOIG/pages/35947576)*.*

From NIOS 9.0.4 onwards:

- Virtual DNS cache acceleration caches TCP queries and cached queries are responded from virtual DNS cache acceleration instead of BIND.
- While there is TCP DNS query load, if you make changes to features that push new configurations to the virtual DNS Cache Acceleration file (For example: enable/disable TCP support on vDCA, Toggling DNS Infrastructure Protection First/DCA First and Toggling Single/multi TCP query in a session), performing a DNS force restart may cause the Grid member to go offline. To recover from this issue, Infoblox recommends that you perform a product reboot.

> **warning**
>
> **Note**
> 
> - Although, DNS Cache Acceleration can be enabled on all of the X6 series appliances. Infoblox recommends using DNS cache acceleration only on TE-2306 and TE-4106 appliances when used as IB-FLEX appliances.
> - Authoritative zones on DNS Cache Acceleration -enabled systems are intended only for internal domains; such systems cannot have a large number of authoritative zones/records configured.

Associated characteristics of the supported appliance include the following:

- Cache delete through the Grid Manager, CLI, or Infoblox API. For more information, see [*Clearing DNS Cache*](https://infoblox-docs.atlassian.net/wiki/spaces/DAAG/pages/10748016).
- ACL for IPv4 and IPv6.
- Sending SNMP traps for DNS cache acceleration service.
- SNMP queries for supported appliances.
- Fixed RRSET order for accelerated responses, for A and AAAA record types, for IPv4, and IPv6.
- Both non-accelerated recursive and authoritative DNS with Software DNS Infrastructure Protection.
