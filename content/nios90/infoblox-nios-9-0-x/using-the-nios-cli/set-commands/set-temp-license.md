---
title: "set temp_license"
source: "/space/nios90/220168268"
pageId: "220168268"
---
The `set temp_license `command generates and installs a temporary 60-day license for a fully functional NIOS appliance and IBOS (Infoblox Orchestration Server). To view the list of temporary licenses varies, Use the [*show license*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-license) command. For more information about licenses, see [*Managing Licenses*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-0).  
Infoblox supports cloud API calls to set temporary licenses for **Threat** **Protection** **(Software** **add-on)** and **Threat** **Protection** **Update** licenses.

| **To install temporary license(s) for...** | **Select...** | **Remarks** |
| --- | --- | --- |
| DNS and DHCP services | **DNSone** **(DNS,** **DHCP)** | Installs DNS and DHCP licenses. |
| DNS and DHCP services with Grid | **DNSone** **with** **Grid** **(DNS,** **DHCP,** **Grid)** | Installs DNS, DHCP, and Grid licenses. |
| DHCP services with Grid | **Network** **Services** **for** **Voice** **(DHCP,** **Grid)** | Installs DHCP and Grid licenses. |
| NIOS services | **Add** **NIOS** **License** | Installs a NIOS license for Trinzic 2016 hardware appliances. |
| DNS services | **Add** **DNS** **Server** **license** | Installs a DNS license. |
| DNS Cache Acceleration | **Add DNS Cache Acceleration** | Installs a DNS Cache Acceleration license. |
| DHCP services | **Add** **DHCP** **Server** **license** | Installs a DHCP license. |
| Grid | **Add** **Grid** **license** | Installs a Grid license. |
| Microsoft server management | **Add** **Microsoft** **management** **license** | Installs a Microsoft server management license. |
| Multi-Grid management | **Add** **Multi-Grid** **Management** **license** | Installs a Multi-Grid license for Multi-Grid management |
| Query Redirection | **Add** **Query** **Redirection** **license** | Installs a query redirection license. |
| Software Advanced DNS Protection (ADP) | **DNS Infrastructure** **Protection** **(Software** **add-on)** | Installs a Software Advanced DNS Protection license for supported platforms. |
| DNS infrastructure protection | **Threat Protection Update license** | Installs a Threat Protection Update license. |
| Response Policy Zones support | **Add** **Response** **Policy** **Zones** | For support of Response Policy Zones. |
| FireEye integrated RPZ support | **Add ****FireEye** **license** | Installs FireEye license. |
| DNS Traffic Control | **Add** **DNS** **Traffic** **Control** **license** | Installs a DNS Traffic Control license. |
| Cloud Network Automation | **Add** **Cloud** **Network** **Automation license** | Installs a Cloud Network Automation license. |
| Cloud Platform Appliances | **Add** **Cloud Platform license** | Installs a Cloud Platform license. |
| Security Ecosystem | **Add** **Security** **Ecosystem** **license** | Installs a Security Ecosystem license. |
| Threat Insight | **Add** **Threat** **Insight** **license** | Installs a Threat Insight license |
| Flex Grid Activation | **Flex** **Grid** **Activation** **license** | Installs the following licenses: Grid (enterprise), DNS Cache Acceleration (DCA), DNS, DHCP, DNS Traffic Control (DTC), Response Policy Zone, Dual Engine DNS (only for recursive DNS), Software DNS Infrastructure Protection (sw_tp), DNS Infrastructure Protection Update (tp_sub), DNSFW (rpz), NXDOMAIN Redirect (qrd), FireEye, Threat Insight, Microsoft Management, Security Ecosystem, and Cloud Network Automation. |
| FLEX Grid Activation for Managed Services | **FLEX Grid Activation for Managed Services license** | Installs FLEX Grid Activation for Managed Services license. It includes the same set of licenses that are bundled with the Flex Grid Activation license. |
| Discovery service | **Add** **Discovery** **license** | Installs a network discovery license. |
| Reporting service | **Add** **Reporting** **license** | Installs a license on the reporting server |
| Reporting Subscription service | **Reporting Subscription** | Installs a Reporting Subscription license, which is a Grid-wide license. |

> **warning**
>
> **Note**
> 
> To configure an appliance as an IB-FLEX, use the set hardware-type command. For more information, see [*set hardware-type*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-hardware-type).

# Syntax

`set temp_license`

This command has no arguments.

# Example

## Installing a temporary license on the NIOS appliance:

`Infoblox &gt; set temp_license  `

`  1. DNSone (DNS, DHCP)`  
`  2. DNSone with Grid (DNS, DHCP, Grid)`  
`  3. Network Services for Voice (DHCP, Grid)`  
`  4. Add NIOS License`  
`  5. Add DNS Server license`  
`  6. Add DHCP Server license`  
`  7. Add Grid license`  
`  8. Add Microsoft management license`  
`  9. Add Multi-Grid Management license`  
` 10. Add Query Redirection license`  
` 11. Add Threat Protection (Software add-on) license`  
` 12. Add Threat Protection Update license`  
` 13. Add Response Policy Zones license`  
` 14. Add FireEye license`  
` 15. Add DNS Traffic Control license`  
` 16. Add Cloud Network Automation license`  
` 17. Add Cloud Platform license`  
` 18. Add Security Ecosystem license`  
` 19. Add Threat Insight license`  
` 20. Add Flex Grid Activation license`  
` 21. Add Flex Grid Activation for Managed Services license`

`**Temporary License Warning**`  
`This software is currently operating under a temporary license. Please be aware of the following important points:`

1. `The temporary license will expire in 60 days. After this time, the software will stop functioning until a subscription license is installed.`
2. `It is not recommended to use the temporary license in the production environment. The temporary license is intended for testing and evaluation purposes only.`
3. `It is recommended to enable notifications such as SNMP traps and email settings before installing the temporary license so that you get a notification before the license expires.`

`Select license (1-21) or q to quit: 4`

`  1. CP-V805`  
`  2. IB-V805`  
`  3. ND-V805`  
`  4. IB-V815`  
`  5. IB-V825`  
`  6. ND-V906`  
`  7. IB-V926`  
`  8. CP-V1405`  
`  9. IB-V1405`  
` 10. ND-V1405`  
` 11. IB-V1415`  
` 12. IB-V1425`  
` 13. IB-V1516`  
` 14. IB-V1526`  
` 15. ND-V1606`  
` 16. CP-V2205`  
` 17. IB-V2205`  
` 18. ND-V2205`  
` 19. IB-V2215`  
` 20. IB-V2225`  
` 21. ND-V2306`  
` 22. IB-V2326`  
` 23. IB-V4005`  
` 24. ND-V4005`  
` 25. IB-V4015`  
` 26. IB-V4025`  
` 27. ND-V4106`  
` 28. IB-V4126`  
` 29. IB-V5005`

`Enter a number corresponding to a NIOS model (1 - 29) or q to quit:`
