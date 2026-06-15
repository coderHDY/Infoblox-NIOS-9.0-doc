---
title: "About IB-FLEX Instances and Platform Settings"
source: "/space/nios90/1432720672"
pageId: "1432720672"
---
An IB-FLEX instance supports capacity-based licensing only, but it is compatible with NIOS Grid Master that uses node-based licensing. You can upgrade an IB-FLEX instance from a low-end platform to a high-end platform by increasing the resource allocation of the virtual machine. An IB-FLEX instance selects the default internal settings for a respective instance platform based on the resource settings detected during the startup.  
An IB-FLEX instance supports VMware ESXi with or without SR-IOV enabled, OpenStack with KVM with or without SR-IOV, AWS, Azure, and Nutanix. The table below provides information about the IB-FLEX platform resource specification:

> **custom**
>
> **Important Note**
> 
> The stated numbers and recommendations in the following table are for reference only. They represent the results of lab testing in a controlled environment. Enabling additional protocols, services, cache hit ratio for recursive DNS, and customer environment variables will affect performance. To design and size a solution for a production environment, please contact your Infoblox Solution Architect.

*IB-FLEX* *Platform* *Resource* *Specification*

| **Resource** **Type** | **Allowed** **Range** **of** **Values** | **Recommended** **Value** | **Description** |
| --- | --- | --- | --- |
| Virtual NUMA Nodes | 1 | 1 | Single virtual CPU socket |

For disk size specification for resizable and fixed images, refer to the latest *NIOS Release Notes* in the Infoblox Support portal.
