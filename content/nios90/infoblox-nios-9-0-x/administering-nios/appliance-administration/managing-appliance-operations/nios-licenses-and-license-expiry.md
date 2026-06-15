---
title: "NIOS Licenses and License Expiry"
source: "/space/nios90/684556455"
pageId: "684556455"
---
> **custom**
>
> If a Grid member's temp_license expires, all services will be stopped and the member will be evicted from the Grid. For the impact on HA members, see the *Impact of License Expiry on NIOS HA* section below.

The following table lists NIOS licenses and the behavior when the subscription licenses expire:

| **License** | **Supported Features** | **When the License Expires** |
| --- | --- | --- |
| Advanced DNS Protection (ADP) / Threat Protection | DNS Infrastructure Protection | Existing functionality continues to work as is. You can add new custom rules and publish them. Adding new rulesets is not allowed. Existing rulesets will remain functional. |
| Software Advanced DNS Protection / Threat Protection (software add-on) | DNS Infrastructure Protection |
| Threat Protection Update | Receive and update DNS Infrastructure Protection rules and rule updates |
| Threat Protection and Threat Protection Update | - DNS Infrastructure Protection - Elastic scaling |
| Security Ecosystem | Outbound Notification | Existing functionality continues to work as is with existing and new endpoints and notifications. Integrations such as the FireEye feed stops functioning as it is dependent on RPZ. |
| FireEye | FireEye | Existing functionality continues to work as is. |
| DNS Cache Acceleration (DCA) | DNS Cache Acceleration | Existing functionality continues to work as is. Changes and new additions work fine. |
| DNS | DNS | Existing functionality continues to work as is. Allows addition of new zones and networks. |
| DNS Traffic Control (DTC) | DNS Traffic Control | Existing functionality continues to work as is. |
| Threat Insight | Threat Insight | Existing functionality continues to work as is except the following limitations:  - Updates to Threat Insight properties are not allowed at the Grid member level. They can be updated at the Grid level. - Updates to module sets and allowlist are not allowed. - Starting or stopping of the Threat Insight service is not allowed. |
| DHCP | DHCP | Existing functionality continues to work as is. Allows addition of new zones and networks. |
| Microsoft Management (MSMGMT) | - Management of Microsoft DNS and DHCP servers from Infoblox Grid Manager. - Synchronization of DNS and DHCP data to the Grid database. | Synchronization between NIOS and Microsoft servers stops.  Data that exists in NIOS continues to be visible in NIOS. |
| *Cloud Network Automation | Cloud network automation | Existing functionality continues to work as is. |
| Cloud Platform | Cloud Platform | Existing functionality continues to work as is. The Cloud API is available. In Grid Manager, you can manage cloud objects from the **Grid** -&gt; **Infoblox** **Grid Manager** -&gt; **Cloud-API** tab.   Allows addition of an A record to a zone that is assigned with one or more members with expired cloud platform license. |
| Response Policy Zone (RPZ) | Response Policy Zone | Existing functionality continues to work as is. Allows addition of new local RPZs, feed zones, and new rules to existing zones. RPZ feed zones continue to download updates if they are available. |
| NIOS/vNIOS | NIOS services | Existing functionality continues to work as is. |
| Grid | - When installed on a member that has no other Infoblox licenses installed, you can Join the member to a Grid. - When installed on a Grid Master, you can get the UID required to obtain dynamic licenses. | Existing functionality continues to work as is with existing members. |
| Query Redirection | Query Redirection/   NXDOMAIN Redirect | Existing functionality continues to work as is. |
| Reporting | Reporting | Data will continue to be collected, but reports cannot be run on data collected after the license expiry until the license is renewed. |
| Multi-Grid Management (MGM) | Multi-Grid Management | Existing functionality continues to work as is. |
| Network Discovery (ND) | Network Discovery | Existing functionality continues to work as is. |

*To install a Cloud Network Automation license on an IB-FLEX appliance, it must be set up as a Grid Master.  
Licenses that are bundled with multiple licenses:

| **License** | **Supported Features** | **When the License Expires** |
| --- | --- | --- |
| DNSone includes the following licenses:  - DNS - DHCP | - DNS - DHCP | - |
| The Flex Grid Activation license includes the following licenses:  - Grid - DNS Cache Acceleration - DNS - DHCP - DNS Traffic Control - Response Policy Zone - NXDOMAIN Redirect - Software Threat Protection - Threat Protection Update - Threat Insight - Security Ecosystem - Microsoft Management - *Cloud Network Automation | - Grid - DNS Cache Acceleration - DNS - DHCP - DNS Traffic Control - Response Policy Zone - Software DNS Infrastructure Protection - DNS Infrastructure Protection Update - NXDOMAIN Redirect - Query rewrite - Threat Insight - Security Ecosystem - Captive Portal - Microsoft Management - Cloud Network Automation (only if IB-FLEX is used as a Grid Master). | Existing functionality continues to work as is for all features except for the Grid license, where functionality works for existing members only. |
| The Flex Grid Activation for Managed Services license installed only on Grid Master or a standalone appliance, includes the same set of licenses bundled with the Flex Grid Activation license. | Same features as the Flex Grid Activation license. |

> **warning**
>
> **Note**
> 
> NTLMv2 is the only authentication method supported for Microsoft servers managed from Infoblox Grids. For information about managing Microsoft Windows servers from Grid Manager, see [*Managing Microsoft Windows Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers).

# Impact of License Expiry on NIOS HA

The following tables outline license expiry behavior for HA-Member and HA-Master nodes. The first table covers HA-Member scenarios, and the second table covers HA-Master scenarios.

## License Expiration Scenarios for HA Members

| **Use Case** | **When the License Expires** |
| --- | --- |
| The HA-Member’s active node subscription license is valid, and the passive node subscription license is any (valid or expired). | All services continue to work as is. |
| The HA-Member’s active node subscription license is valid, and the passive node temp_license has expired. | Services running on the HA member are disabled. |
| The HA-Member’s active node subscription license has expired, and the passive node temp_license is valid. | Services running on the HA member are disabled. Both nodes restart to join the grid repeatedly. |
| The HA-Member’s active node subscription license has expired, and the passive node temp_license has expired. | Services running on the HA member are disabled. |
| The HA-Member’s active node temp_license is valid, and the passive node subscription license has expired. | Services running on the HA member are disabled. |
| The HA-Member’s active node temp_license has expired, and the passive node subscription license is valid. | Services running on the HA member are disabled. |
| The HA-Member’s active node temp_license has expired, and the passive node subscription license has expired. | Services running on the HA member are disabled. |
| The HA-Member’s active node temp_license has expired, and the passive node temp_license has expired. | **All services are disabled, and the HA member is evicted.**  Evicted: The member is disconnected from the Grid, and its services are disabled. The member entry remains in the Grid Manager but is inactive. |

## License Expiration Scenarios for HA Masters

| **Use Case** | **When the License Expires** |
| --- | --- |
| The HA-Master’s Active node subscription license is valid, and the passive node subscription license is any (valid or expired). | All services continue to work as is. |
| The HA-Master’s Active node subscription license is valid, and the passive node temp_license has expired. | Services running on the HA Master are disabled. |
| The HA-Master’s Active node subscription license has expired, and the passive node temp_license is valid. | Services running on the HA Master are disabled. |
| The HA-Master’s Active node subscription license has expired, and the passive node temp_license has expired. | Services running on the HA Master are disabled. |
| The HA-Master’s Active node temp_license is valid, and the passive node subscription license has expired. | Services running on the HA Master are disabled. |
| The HA-Master’s Active node temp_license has expired, and the passive node subscription license is valid. | Services running on the HA Master are disabled. |
| The HA-Master’s Active node temp_license has expired, and the passive node subscription license has expired. | Services running on the HA Master are disabled. |
| The HA-Master’s Active node temp_license has expired, and the passive node temp_license has expired. | The HA-Master’s GUI is not accessible. The status of the Grid shows as not configured and all Grid members are taken offline. |
