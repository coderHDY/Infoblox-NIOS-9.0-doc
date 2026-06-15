---
title: "reset all"
source: "/space/nios90/280856005"
pageId: "280856005"
---
The` ``reset`` ``all`` `command clears the NIOS appliance of database, configuration, and network settings. It then re-establishes the factory settings with the default IP address, gateway, and subnet mask. Containers created for the DNS Forwarding Proxy (DFP) are not deleted using the reset command. To delete these cloud containers, you must run the scrape command in the maintenance mode. Information about trial licenses is also retained.

The `reset all licenses` command clears database, configuration, and network settings. It also clears all licensing information from the appliance before re-establishing the factory settings.

The `reset all auto_provision` command clears database, configuration, and network settings. It also re-enables auto-provisioning and a dynamic IP address is assigned to the appliance.

When the `reset all licenses` command is executed on X6 hardware and the NIOS license is installed, the system is restored to a clean state. Consequently, Threat Insight artifacts maybe missing after the NIOS license installation, which may impact Threat Insight functionality. To ensure that the Threat Insight service is functional, apply the latest moduleset and allowlist updates. For more information, see [About Infoblox Threat Insight](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-threat-insight/about-infoblox-threat-insight).

# Syntax

`reset all [licenses | auto_provision]`

| **Argument** | **Description** |
| --- | --- |
| licenses | Specifies the removal of all licenses during the process of re-establishing the factory settings on the appliance. |
| auto_provision | Auto-provisioning is re-enabled and a dynamic IP address is assigned after re-establishing the factory settings on the appliance. |

# Examples

## Re-establish factory settings

`Infoblox &gt; ``reset`` ``all`  
` The entire system will be reset to default settings.`  
` WARNING: THIS WILL ERASE ALL DATA AND LOG FILES THAT HAVE BEEN CREATED ON THIS SYSTEM. ARE YOU SURE YOU WANT TO PROCEED? (y or n): ``y`

## Re-establish factory settings and remove all licenses

`Infoblox &gt; ``reset`` ``all`` ``licenses`  
` The entire system will be reset to default settings and all licenses will be removed. WARNING: THIS WILL ERASE ALL DATA AND LOG FILES THAT HAVE BEEN CREATED ON THIS SYSTEM. ARE YOU SURE YOU WANT TO PROCEED? (y or n): ``y`

## Re-establish factory settings and re-enable auto-provisioning

`Infoblox &gt; ``reset`` ``all`` ``auto_provision`  
` The entire system will be reset to default settings and system will try to obtain a dynamic address.`  
` WARNING: THIS WILL ERASE ALL DATA AND LOG FILES THAT HAVE BEEN CREATED ON THIS SYSTEM. ARE YOU SURE YOU WANT TO PROCEED? (y or n): y`
