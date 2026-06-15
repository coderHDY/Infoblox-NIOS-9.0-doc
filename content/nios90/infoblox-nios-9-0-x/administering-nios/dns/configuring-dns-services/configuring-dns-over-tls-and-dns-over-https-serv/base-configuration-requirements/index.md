---
title: "Base Configuration Requirements"
source: "/space/nios90/1420231298"
pageId: "1420231298"
---
NIOS appliances must have the required base memory configuration to enable the DNS over TLS and the DNS over HTTPS features on their members. If the appliances do not meet the required criteria, the options to configure these features are not displayed in the *Member DNS Properties* editor. The following table lists the base configuration required for enabling these features on IB-FLEX appliances.

> **error**
>
> ### Warning
> 
> The numbers in the following tables are for IB-FLEX appliances only. For information about CPU and memory requirements of NIOS appliances other than IB-FLEX, see the *NIOS Release Notes*.



| **IB-FLEX Flavor Configuration** | **Total CPU** | **Total System Memory in GB (With DNS Infrastructure Protection Software only)** | **Total System Memory in GB (With virtual DNS Cache Acceleration and  DNS Infrastructure Protection Software)** | **Grid Master Capable** |
| --- | --- | --- | --- | --- |
| Small   recursive DNS (with acceleration) | 10 | 32 | 32 | No |
| Medium   recursive DNS (with acceleration) | 16 | 64 | 40 | No |
| Large   recursive DNS (with acceleration) | 26 | 80 | 50 | No |

> **warning**
>
> **Note**
> 
> - If the available memory does not meet the requirement defined in the above table, you may observe unexpected behavior. Infoblox recommends that you allocate slightly more memory to ensure that memory associated with the hypervisor is also accounted for.
> - In an HA setup, ensure that both the active and passive nodes have the memory configuration required to enable the DNS over TLS or the DNS over HTTPS feature. If you enable the feature on an active node that has the required memory footprint but the passive node does not, then in case of a failover, the DNS over TLS or the DNS over HTTPS service does not start on the new active node. Therefore, requests coming to the DNS over TLS or the DNS over HTTPS stream are not honored.
