---
title: "Limitations for Virtual DNS Cache Acceleration"
source: "/space/nios90/1468629805"
pageId: "1468629805"
---
- You cannot enable the DNS cache acceleration feature during a scheduled NIOS upgrade, but if you have already enabled this feature, it will function normally during the upgrade process.
- The appliance prompts for a reboot when you enable the DNS cache acceleration feature for the first time. You must accept it to start the service.
- You must disable the DNS cache acceleration feature and reboot the appliance manually to switch from virtual DNS cache acceleration to authoritative servers.
- The appliance prompts for a reboot when you enable virtual DNS cache acceleration and DNS Infrastructure Protection on IB-FLEX, IB-22x5 and IB-40x5 platforms.
- DSCP is not supported on IB-805, IB-V805, IB-905, and IB-V905 appliances.
- DHCP license cannot be installed if the DCA license is installed and vice versa.
- DCA and Microsoft Management licenses cannot be installed and configured simultaneously.
- On all vNIOS appliances that support vDCA (virtual DNS Cache Acceleration) or DNS Infrastructure Protection, you must run vDCA or DNS Infrastructure Protection on a single virtual NUMA node. If the configuration of the virtual NUMA node and physical NUMA node are not the same, it may result in performance degradation.
- For virtual DCA appliances using virtio, it is recommended to increase the number of virtio queues to 2 for IB-v14x5, 4 for IB-v22x5, 4 for IB-v40x5, 2 for IB-FLEX Small, 4 for IB-FLEX Medium and 4 for IB-FLEX Large systems.
- The output for `show dns-accel-cache` CLI command is restricted to 255 bytes for DNS type 64 and DNS type 65 records respectively. If one or more serviceparam value contributes to the displayed output, the param size is displayed in brackets. To view the complete output, use the **expand** option in the [*show dns-accel-cache*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280658561) CLI command.
