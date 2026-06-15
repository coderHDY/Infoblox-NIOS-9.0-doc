---
title: "Using Cloud-Init To Join Pre-Provisioned vNIOS Members"
source: "/space/nios90/1366983504"
pageId: "1366983504"
---
NIOS provides the capability to automatically deploy the pre-provisioned vNIOS appliances by using cloud-init for IPAM (IP Address Management), DNS, and/or DHCP. When you use this capability, licenses are automatically installed on the newly spun-up instances during the process of joining the member to the Grid as long as you have the correct temp licenses installed for the vNIOS model that you plan to deploy. For example, you can install a IB-V1526 license on a IB-V1516. If there are no licenses specified in cloud-init, the Grid Master notifies you with an error message (for Cloud Platform Appliances, the API calls fail).

Infoblox supports automatic pre-provisioning of members for Software DNS Infrastructure Protection profiles on the supported platforms and provides the following licenses: **Threat** **Protection** **(Software** **add-on)** and **Threat** **Protection** **Update**. For more information about Software DNS Infrastructure Protection profiles, see [*Configuring DNS Infrastructure Protection Profiles*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760256). DNS Infrastructure Protection members use management port for IPv4 and IPv6 communication with the Grid. Infoblox supports cloud API calls for such members to join the Grid using MGMT port and VPN on the MGMT port. To know more about using the MGMT port, see [*Using the MGMT Port*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129)*.*

Grid Manager displays licenses on the **Infoblox** **Grid** tab -> **Licenses** tab. You can view license information for all licenses on the **Member** tab.
