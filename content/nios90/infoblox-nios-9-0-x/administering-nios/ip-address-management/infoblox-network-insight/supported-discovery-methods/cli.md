---
title: "CLI"
source: "/space/nios90/1346371721"
pageId: "1346371721"
---
> **warning**
>
> Note
> 
> CLI is optional for discovery but is required for all Port Control operations. Discovery can perform CLI data collection to collect information for specific device types. SNMP is required for all device discovery.

Network Insight enables the use of dynamically created and closed Telnet and SSH command-line sessions to log in, query, and configure ports using each device's command-line syntax. Network Insight does so without requiring extensive configuration from the user. You need to provide known admin account login information and any Enable passwords for devices in the networks to be discovered. CLI credentials are required for port reservation and port configuration operations under Grid Manager. You enter CLI credentials under Grid Discovery Properties (**Infoblox Grid** **–&gt;** **Grid** **Manager** **–&gt;** click **Edit** **–&gt;** **Grid** **Discovery** **Properties**) to be inherited by discovery Probe members, and as necessary for each discovery Probe member. You can also override them for individual IPAM objects (fixed addresses, hosts and IPv4 reservations) and test the CLI credentials against devices for correctness. For more information, see [*Testing SNMP and CLI Credentials*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties/Configuring+Discovery+Properties#TSCC).
