---
title: "DHCP Failover Association"
source: "/space/nios90/280661295"
pageId: "280661295"
---
| **Field**** ****Name** | **Data**** ****Type** | **Required**** ****(Yes/No)** | **Associated**** ****GUI**** ****Field** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-DhcpFailoverAssoc | String | Yes |  |  | Identifies the first row as a header row for the DHCP failover association. Example: DhcpFailoverAssoc. |
| name | String | Yes | Name | name | Indicates the name of the DHCP failover association. Example: dhcp_fo_assoc1. |
| _new_name | String | No |  |  | Add this field to overwrite the **name** field when you select the **Overwrite** or **Merge** option. |
| comment | String | No | Comment | comment | Example: DHCP Failover Association. |
| primary_server_type | String | Yes |  |  | Indicates whether the primary server of the name server group is set to Grid or External. Example: GRID |
| grid_primary | String | No | Grid Primary | primary | Indicates the name of the Grid primary. Example: infoblox.localdomain |
| external_primary | IP address | No | External Primary | primary | Indicates the IP address. Example: 10.10.10.1 |
| secondary_server_type | String | Yes |  |  | Indicates whether the secondary server of the name server group is set to Grid or External. Example: External |
| grid_secondary | String | No | Grid Secondary | secondary | Indicates the name of the Grid secondary. Example: infoblox2.localdomain |
| external_secondary | IP address | No | External Secondary | secondary | Indicates the IP address. Example: 20.20.20.1 |
| failover_port | Unsigned integer | No |  |  | Indicates the failover port number. The default value is 647. The port number must be between 1 and 63999. |
| max_response_delay | Unsigned integer | No |  | max_response_delay | Indicates the maximum response delay value of a DHCP failover object. Default value is 60 seconds and the minimum value is one second. |
| max_unacked_updates | Unsigned integer | No |  | max_unacked_ updates | Indicates the maximum number of unacked updates value of a DHCP failover object. Default value is10 minutes and the minimum value is one second. |
| mclt | Unsigned integer | No |  | max_client_lead_ time | Indicates the maximum client lead time value of a DHCP failover object. Specify the value of the maximum client lead time in a 32-bit integer format (range from 0 to 4294967295) that represents the duration in seconds. The default value is 3600. |
| max_load_balance_delay | Unsigned integer | No |  | max_load_balance_delay | Indicates the maximum load balancing delay value of a DHCP failover object. Specify the value of the maximum load balancing delay in a 32-bit integer format (range from 0 to 4294967295) that represents the duration in seconds. The default value is three seconds. |
| load_balance_split | Unsigned integer | No |  | load_balance_split | Indicates the load balancing split value of a DHCP failover object. Specify a value from zero to 255. The default value is 128. |
| recycle_leases | Boolean | No | Lease Deletion | recycle_leases | This field is set to **True** by default. When you set this to **True**, leases in a deleted range are kept until expiration. Ensure that you use the **Overwrite** option if you want to change the value to **False**.    Merging data from an import preserves the default value. |
| EA-Site | String | No | Extensible attribute | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. Example: California. |
| EA-Users | String | No | Extensible attribute | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. Example: John. |

# Grid Member

| **Field**** ****Name** | **Data**** ****Type** | **Required**** ****(Yes/No)** | **Associated**** ****GUI**** ****Field** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-Member | String | Yes |  |  | Identifies the first row as a header row for the member objects. Example: Member |
| _new_name | FQDN | No |  |  | Add this field to overwrite the **name** field when you select the **Overwrite** or **Merge** option. |
| comment | String | No | Comment | comment | Example: This is a Grid member. |
| enable_ha | Boolean | No |  | enable_ha | Enable or disable HA. This is **True** if HA is enabled. Example: False |
| ha_nodes | String | No |  |  | Indicates the list of ha_status, or public_ip_address, or ipv6_public_ip_address, or ha_ip_address. Example: ACTIVE/10.0.0.11//10.0.0.12, PASSIVE/10.0.0.13//10.0.0.14 |
| vpn_mtu | Unsigned integer | No |  | vpn_mtu | Indicates maximum transmission unit of the VPN. Example: 1450 |
| ipv4addr | String | Yes (Insert) | IP Address | ipv4addr | Indicates IPv4 address.Example:    10.0.0.10. Note that you must specify this column in the CSV file when you perform a CSV Import Insert operation. |
| mask | String | Yes (Insert) |  | mask | Indicates the netmask. Example: 255.255.255.0. Note that you must specify this column in the CSV file when you perform a CSV Import Insert operation. |
| gateway | String | Yes (Insert) |  | gateway | Indicates the gateway address. Example:    10.0.0.1. Note that you must specify this column in the CSV file when you perform a CSV Import Insert operation. |
| vlan_id | Unsigned integer | No |  |  | VLAN Id for LAN1 and LAN2 address. Example: 10 |
| ipv6addr | String | No | IP Address | ipv6addr | Indicates IPv6 address. Example: 2001::10 |
| ipv6_cidr | Unsigned integer | No |  | ipv6_cidr | The CIDR of the Grid member. This is required only when ipv6addr is specified.Example: 64 |
| ipv6_enable_auto_config | Boolean | No |  | ipv6_enable_ auto_config | Enable or disable IPv6 auto-configuration of the Grid member. Example: False |
| ipv6_gateway | String | No |  | ipv6_gateway | The LAN IPv6 gateway of the Grid member. Example: 2001::1 |
| ipv6_vlan_id | Unsigned integer | No |  |  | The IPv6 VLAN ID of a Grid member. Example: 10 |
| nic_failover_enabled | Boolean | No |  | nic_failover_enabled | Set or deactivate the **nic_failover_enabled** flag of a Grid member. This is required only when the member is a single appliance. To enable this flag, you must set the **lan2_port** flag to **True**. Example: False |
| lan2_enabled | Boolean | No |  |  | Enable or disable LAN2.Example: False |
| lan2_ipv4addr | String | No |  | lan2_ipv4addr | The LAN IP address of the LAN2 port. To configure the LAN2 port, you must set the **lan2_port** flag to **True**. Example: 10.0.0.20 |
| lan2_mask | String | No |  | lan2_mask | The netmask of the LAN2 port. To configure the LAN2 port, you must set the **lan2_port** flag to **True**. Example: 255.255.255.0 |
| lan2_ipv6addr | String | No |  |  | The LAN IPv6 address of the LAN2 port. To configure the LAN2 port, you must set the **lan2_port** flag to **True**. Example: 2001::20 |
| lan2_vlan_id | Unsigned integer | No |  |  | The VLAN ID of the IPv4 LAN2 port. To configure the LAN2 port, you must set the **lan2_port** flag to **True**. Example: 10 |
| lan2_dscp | Unsigned integer | No |  |  | The DSCP value of the IPv4 LAN2 port. Valid values are integers between zero and 63. Example: 15 |
| lan2_gateway | String | No |  | lan2_gateway | The gateway IP address of the LAN2 port. To configure the LAN2 port, you must set the **lan2_port** flag to **True**. Example: 10.0.0.1 |
| lan2_ipv6_cidr | Unsigned integer | No |  | lan2_ipv6_cidr | The CIDR of the LAN2 port. To configure the LAN2 port, you must set the **lan2_port** flag to **True**. Example: 64 |
| lan2_ipv6_dscp | Unsigned integer | No |  |  | The DSCP value of the IPv6 LAN2 port. Valid values are integers between zero and 63. Example: 15Example: 0 |
| lan2_ipv6_enable | Boolean | No |  | lan2_ipv6_ enable | Enable or disable IPv6 configuration of the LAN2 interface. Example: False |
| lan2_ipv6_enable_auto_config | Boolean | No |  | lan2_ipv6_enable_auto_config | Enable or disable IPv6 auto-configuration of the LAN2 interface.Example: False |
| lan2_ipv6_gateway | String | No |  | lan2_ipv6_ gateway | The LAN IPv6 gateway of the LAN2 port. To configure the LAN2 port, you must set the **lan2_port** flag to **True**. Example: 2001::1 |
| lan2_ipv6_vlan_id | Unsigned integer | No |  |  | The VLAN ID of the IPv6 LAN2 port. To configure the LAN2 port, you must set the **lan2_port** flag to **True**.Example: 20 |
| nat_enabled | Boolean | No |  | nat_enabled | Specify **True** to enable the NAT compatibility setting or **False** to disable it. Example: False |
| nat_group | String | No |  | nat_group | The NAT group of a Grid member. This is required only when NAT compatibility is enabled. Example: group1/comm1,group2/comm2 |
| nat_ip_address | String | No |  |  | The NAT IP address of a Grid member. Required only when NAT compatibility is enabled. Example: 10.0.0.10 |
| static_routes | List of IPv4 static routes | No |  | static_routes | This list contains the static routes of a Grid member. The valid format is: address/subnet_mask/gateway.    Example:10.10.1.10/255.255.0.0/ 10.10.1.1 |
| ipv6_static_routes | List of IPv6 static routes | No |  | ipv6_static_ routes | This list contains the IPv6 static routes of a Grid member. The valid format is: address/cidr/gateway. Example: 2001::10/64/2001::1 |
| remote_console_access | Boolean | No |  | use_remote_ console_ access | Enable or disable remote console access. When you enable remote console access, a client can access the device using a Secure Shell (SSH) connection. Example: False |
| support_access | Boolean | No |  | use_support_ access | Specify **True** to set the r**emote_console_access** flag or **False** to deactivate it.Default value is **True**.    Example: False |
| enable_query | Boolean | No |  |  | Example: False |
| query_comm_string | String | No |  |  | Indicates the SNMP (Simple Network Management Protocol) community string that management systems must send together with their queries to the Infoblox appliance. If this is set to **undef**, SNMP queries will be disabled. |
| enable_snmpv3_query | Boolean | No |  | enable_ snmpv3_query | Enable or disable SNMPv3 queries. Example: False |
| enable_traps | Boolean | No |  |  | Enable or disable traps. Example: False |
| trap_comm_string | String | No |  |  | The SNMP trap community string of the Grid member. Default value is **undef**. |
| enable_snmpv3_traps | Boolean | No |  |  | Enable or disable SNMPv3 traps. Example: False |
| snmp_admin | String | No |  |  | Set or retrieve the SNMP admin object. Example: sysname/syscontact/syslocation/ sysdescr |
| snmpv3_query_users | String | No |  |  | Indicates the SNMPv3 user setting at the Grid level. Example: snmpv3User/comment |
| trap_receiver | String | No |  |  | Indicates the SNMP trap receivers of a Grid member. Example: 10.0.0.10/snmpUseName/    comment |
| additional_ip_list | String | No |  | additional_ip_list | Indicates the additional IP list of a Grid member. This list contains additional interface information that can be used on the member level.The valid format is: interfaceType/networkSetting/comment/ ospf/anycast/bgp    Example for IPv4:    address/subnet_mask/gateway/vlan_id/primary/dscp/use_dscp    Example for IPv6:    virtual_ip/cidr_prefix/gateway/vlan_id/ primary/dscp/use_dscp/enabled/ auto_router_configure_enabled |
| enable_member_redirect | Boolean | No |  | enable_ member_redirect | Set or retrieve the flag that specifies if GUI redirection is enabled for members.    Example: False |
| virtual_router_id | Integer | No |  |  | Indicates virtual router identifier. Example:110 |
| dscp | Unassigned integer | No |  | dscp | Indicates the DSCP value. The default value is zero. |
| EA-Site | String | No | Extensible attribute | extensible_ attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. Example: California |
| EA-Users | String | No | Extensible attribute | extensible_ attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. Example: John |
| ADMGRP-XXXX | String | No | Permissions Admin Group/Role | permission | ADMGRP-JimSmith is an example of an admin permission of a specific admin group. Example: RW |
