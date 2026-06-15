---
title: "IB-FLEX Platform Settings for DNS Cache Acceleration"
source: "/space/nios90/1468629832"
pageId: "1468629832"
---
eWhen you enable the DNS cache acceleration feature on IB-FLEX, ensure that it has enough CPU and memory to start the service. Note that you cannot start the service if the total CPU is less than 8 cores or if memory is less than 12G. To start the service, see the number of mandatory resources mentioned in the [*Total Resource Usage for Different Use Cases*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/about-ib-flex/ib-flex-resource-usage) table.

If the DNS cache acceleration feature is enabled on a pre-provisioned member and fails to start due to insufficient resources on the member, the DCA status is displayed as failed. If you disable DCA on a member with insufficient resources, the member is not displayed in the **DCA** -&gt; **Members** tab.

> **warning**
>
> **Note**
> 
> - Under certain circumstances, the DNS cache acceleration feature may not function normally when you perform a product restart. This happens due to increased resource allocation on the virtual machine and the appliance does not log any entries in the syslog. Infoblox recommends that you restart or reboot the system and free up server resources if you encounter this issue.
> - Before enabling DNS Cache Acceleration or DNS Infrastructure Protection on virtual platforms, ensure that the ssse3, sse4_1, and sse4_2 CPU flags are set on the host server. For more information, see [https://help.ubuntu.com/lts/serverguide/DPDK.html.en](https://help.ubuntu.com/lts/serverguide/DPDK.html.en)
> - If you see the "/usr/bin/fast-path.sh: error starting /usr/bin/fp-rte. Check logs for details" error message in the infoblox.log file, ensure that the ssse3, sse4_1, and sse4_2 flags are set for the VM.

# Impact of DNS Infrastructure Protection-only Enabled Configurations on vNIOS Running on VMware Hardware Versions Later than 13

VMware has a known issue as explained in the KB article [https://knowledge.broadcom.com/external/article/315655/virtual-machine-hardware-versions.html](https://knowledge.broadcom.com/external/article/315655/virtual-machine-hardware-versions.html).

Because of this issue, DNS Infrastructure Protection-only enabled configurations on vNIOS running on VMware hardware versions later than 13 are impacted. To avoid running into this issue, Infoblox recommends that you disable automatic VM hardware version upgrades. To ensure compatibility and prevent issues related to Receive Side Scaling (RSS), the VM hardware version should be explicitly set to version 13 (compatible with ESXi 6.5) or lower.

For scenarios where ESXi version is greater than the 6.5, and the VM hardware version is greater than 13,  please contact Infoblox Support.
