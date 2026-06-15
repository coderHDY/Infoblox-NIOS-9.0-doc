---
title: "Supported DNS Infrastructure Protection Appliances and Licensing Requirements"
source: "/space/nios90/280662343"
pageId: "280662343"
---
The Infoblox DNS Infrastructure Protection solution offers the following licenses: **Threat** **Protection,** **Threat** **Protection** **(Software** **add-on),** and **Threat** **Protection** **Update**. The following are descriptions for each of these licenses:

- **Threat** **Protection**: Install this license on the physical or hardware-based DNS infrastructure protection appliances. With valid licenses installed, Infoblox DNS Infrastructure Protection supports both IPv4 and IPv6.  
  You can configure two appliances of the same model to form an HA pair for high availability configuration. For more information about how to configure an HA pair for Infoblox DNS Infrastructure Protection and its limitations, see [*About HA Pairs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765644). You can configure hardware-based appliances in either IPv4, IPv6, or dual mode (IPv4 and IPv6) network environment.

> **warning**
>
> **Note**
> 
> - Reverting to an earlier NIOS release that does not support HA configuration for these appliances could cause a service outage.
> - The Advanced DNS Protection licenses are tied to the software model and not to the hardware appliance.

- **Threat Protection (Software add-on)**: The Software ADP license is a subscription license. Grid Manager displays a warning message when the license expires. You must renew the license to use the Software DNS Infrastructure Protection service. To renew the license, contact your Infoblox representative or Infoblox Technical Support. Before you obtain your permanent license, you can install a temporary license for** Threat Protection (Software add-on)** using the` set temp_license` CLI command. For more information, refer to the *Infoblox CLI Guide.* Infoblox supports **Threat Protection (Software add-on)** and **Threat Protection Update** licenses for elastic scaling. For more information, see [*About Elastic Scaling*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407076).

> **warning**
>
> **Note**
> 
> You cannot install Multi-Grid Management and Microsoft Management licenses if you install the **Threat Protection** or **Threat Protection (Software add-on)** licenses on the same NIOS appliance.

- **Threat** **Protection** **Update**: To receive initial and subsequent DNS infrastructure protection rules and rule updates, you must have the **Threat** **Protection** **Update** license installed. You can then configure NIOS to automatically download and publish DNS infrastructure protection rules or you can manually complete the process. For information, see [*Manually Uploading Rulesets*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408834) and [*Publishing Rule Updates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408857).

With valid licenses installed, the DNS Infrastructure Protection appliance can be used as a DNS caching or DNS authoritative server. You can join the appliance to the Grid and treat it as a Grid member. Note that if you install a Threat Protection license on a member, you can enable DNS infrastructure protection only on this member. Contact your Infoblox representative to obtain the **Threat** **Protection**, **Threat** **Protection** **Update** and **Threat** **Protection** **(Software** **add-on)** licenses. For information about licenses, see [*Managing Licenses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667194).  
The following table lists all the supported DNS infrastructure protection appliance models and licenses that you can install on them to activate DNS Infrastructure Protection:

> **custom**
>
> ### Important Notes
> 
> - The stated numbers and recommendations in the following table are for reference only. They represent the results of lab testing in a controlled environment. To design and size a solution for a production environment, please contact your Infoblox Solution Architect.
> - For general VMware deployments without DNS Infrastructure Protection, refer to [About Infoblox NIOS Virtual Appliance for VMware](https://infoblox-docs.atlassian.net/wiki/spaces/NVIG/pages/35786250).

*DNS Infrastructure Protection* *Appliance* *Models* *and* *Appliances*

| **DNS Infrastructure Protection** **Appliance** **Model** | **Physical** **or** **Virtual** | **Required** **License** | **Comments** |
| --- | --- | --- | --- |
| TE-1415 | Physical | Threat Protection (Software add-on) and Threat Protection Update | Trinzic appliances |
| TE-1425 | Physical |
| TE-2215 | Physical |
| TE-2225 | Physical |
| TE-4015 | Physical |
| TE-4025 | Physical |
| TE-V1415 | Virtual | Threat Protection (Software add-on) and Threat Protection Update | NIOS virtual appliances |
| TE-V1425 | Virtual |
| TE-V2215 | Virtual |
| TE-V2225 | Virtual |
| TE-V4015 | Virtual |
| TE-V4025 | Virtual |
| IB-V926 | Virtual | Threat Protection (Software add-on) and Threat Protection Update | NIOS virtual appliances |
| IB-V1516 | Virtual |
| IB-V1526 | Virtual |
| IB-V4126 | Virtual |
| IB-V2326 | Virtual |
| IB-FLEX | Virtual | Threat Protection (Software add-on) and Threat Protection Update | IB-FLEX |

You can install the **Threat** **Protection** **(Software** **add-on)** license on vNIOS instances running on the following hypervisors:

- VMware ESXi with or without SR-IOV enabled
- OpenStack with KVM with or without SR-IOV enabled
- KVM with or without SR-IOV enabled
- AWS
- Azure



For details about the required CPU and memory allocation for supported Infoblox appliance models when DNS infrastructure Protection is enabled, see [*Appliance Specifications for DNS Infrastructure Protection*](https://docs.infoblox.com/space/vniosspec/1488715947/Appliance+Specifications+for+Threat+Protection)*.*
