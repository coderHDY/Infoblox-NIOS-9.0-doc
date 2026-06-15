---
title: "Variables for Object Change Discovery Data"
source: "/space/nios90/1375045306"
pageId: "1375045306"
---
**Note**: Infoblox supports insert and update operations from Network Insight and Cloud Discovery for object change discovery data in the NIOS 8.3.0 release version.

| **NIOS Field Name** | **Template Variable Name** | **Supported Filter** | **Enriched Data** | **Comment** |
| --- | --- | --- | --- | --- |
| timestamp | timestamp |  |  | Timestamp when event occurs, will be used record_timestamp from incoming data |
| member_ip | member_ip |  |  | Infoblox Member IP |
| member_name | member_name |  |  | Infoblox Member Name |
| object_type | object_type |  |  | Object Type, ENUM {DiscoveryData} |
| operation_type | operation_type | equals {INSERT, MODIFY, DELETE} |  | Operation Type, ENUM {INSERT, MODIFY, DELETE} |
| **Values ** |
| network | network |  | Yes | Network (from network ref) |
| is_ipv4 | is_ipv4 | equals {true, false} |  | This boolean flag will indicate whether structure is of type IPv4 or IPv6 |
| ip_address | ip_address | equals,   matches range,   matches CIDR | Yes (default) | Discovered IP address |
| mac_address | mac_address |  | Yes | Discovered MAC address |
| duid | duid |  | Yes | DUID associated with IPv6 address |
| ap_ip_address | ap_ip_address |  |  | Discovered IP address of Wireless Access Point |
| ap_name | ap_name |  |  | Discovered name of Wireless Access Point |
| ap_ssid | ap_ssid |  |  | Service set identifier (SSID) associated with Wireless Access Point |
| bridge_domain | bridge_domain |  |  | Discovered bridge domain |
| cisco_ise_endpoint_profile | cisco_ise_endpoint_profile |  |  | Endpoint profile in Cisco ISE |
| cisco_ise_security_group | cisco_ise_security_group |  |  | Name of security group created in Cisco ISE |
| cisco_ise_session_state | cisco_ise_session_state |  |  | session state |
| cisco_ise_ssid | cisco_ise_ssid |  |  | service set identifier |
| cmp_type | cmp_type |  |  | if the IP is coming from a Cloud environment, the Cloud Management Platform type |
| device_contact | device_contact |  |  | Contact information from device on which the IP address was discovered |
| device_location | device_location |  |  | Location of device on which the IP address was discovered |
| device_model | device_model |  |  | Model name of the device in the vendor terminology |
| device_port_name | device_port_name |  |  | System name of the interface the IP associates with |
| device_port_type | device_port_type |  |  | Hardware type of the interface the IP associates with |
| device_type | device_type |  |  | Type of the device in the vendor terminology |
| device_vendor | device_vendor |  |  | Vendor name of the device |
| discovered_name | discovered_name |  |  | Name of the ip as seen by the discovery station. |
| discoverer | discoverer | contains,   equals,   begins with,   ends with | Yes (default) | Name of the discoverer |
| endpoint_groups | endpoint_groups |  |  | List of discovered endpoint groups represented as a single string containing comma-separated values |
| first_discovered_timestamp | first_discovered_timestamp |  |  | When was this ip first seen by the discovery station |
| iprg_id | iprg_id |  |  | iprg(port redundant group) ID of this device interface |
| iprg_no | iprg_no |  |  | Port redundant group no of this device interface |
| iprg_state | iprg_state |  |  | State of this IP address in the group |
| iprg_type | iprg_type |  |  | Type of this prg |
| is_end_host | is_end_host |  |  | Is this object an end host or an infrastructure device for the purpose of discovery |
| last_discovered_timestamp | last_discovered_timestamp |  |  | When was this data discovered |
| last_updated_timestamp | last_updated_timestamp |  |  | Used by NetMRI sync to store timestamp when was this data updated |
| method | method |  |  | What method was being used for network discovery |
| mgmt_ip_address | mgmt_ip_address |  |  | Management IP address of the device if the device has more than one IP |
| netbios_name | netbios_name |  |  | Discovered NetBIOS name |
| network_component_contact | network_component_contact |  |  | Contact information from network component on which the IP address was discovered |
| network_component_description | network_component_description |  |  | A descriptive string for the network component |
| network_component_ip | network_component_ip |  |  | IP Address the network component |
| network_component_location | network_component_location |  |  | Location of network component on which the IP address was discovered |
| network_component_model | network_component_model |  |  | Model name of the network component the device is connected to in the vendor terminology |
| network_component_name | network_component_name |  |  | The name of network component |
| network_component_port_description | network_component_port_description |  |  | Description of the port on the network component |
| network_component_port_id | network_component_port_id |  |  | Interface ID of the connected switch/switch-router |
| network_component_port_name | network_component_port_name |  |  | Port name on the network component on which the ip was discovered |
| network_component_port_number | network_component_port_number |  |  | Port number on the network component on which the ip was discovered |
| network_component_type | network_component_type |  |  | The type of network component. Eg. Switch, Router etc. |
| network_component_vendor | network_component_vendor |  |  | Vendor name of the network component the device is connected to |
| open_ports | open_ports |  |  | List of opened ports on the IP address, represented as: "TCP: 21,22,23 UDP: 137,139". Limited to max total 1000 ports |
| os | os |  |  | Guess for OS by network discovery |
| port_duplex | port_duplex |  |  | Duplex settings on the port on the network component |
| port_link_status | port_link_status |  |  | Link Status of the port on the network component |
| port_speed | port_speed |  |  | Speed settings on the port on the network component |
| port_status | port_status |  |  | Status of the port on the network component |
| port_type | port_type |  |  | Type of the interface on the network component the device is connected to |
| port_vlan_description | port_vlan_description |  |  | Description of the vlan on the port on the network component |
| port_vlan_name | port_vlan_name |  |  | Name of the vlan on the port on the network component |
| port_vlan_number | port_vlan_number |  |  | Number of the vlan on the port on the network component |
| task_name | task_name |  |  | Name of the task discovers this data |
| tenant | tenant |  |  | Discovered tenant |
| unmanaged | unmanaged | equals {true, false} |  | Flag to indicate if the discovered data is associated with a managed object or not |
| v_adapter | v_adapter |  |  | Vmware physical adapter in which entity was found |
| v_cluster | v_cluster |  |  | Vmware cluster in which entity was found |
| v_datacenter | v_datacenter |  |  | Vmware datacenter in which entity was found |
| v_entity_name | v_entity_name |  |  | Vmware entity name in which entity was found |
| v_entity_type | v_entity_type |  |  | Type of encryption to use |
| v_host | v_host |  |  | Vmware host system in which entity was found |
| v_os | v_os |  |  | Vmware OS system in which entity was found |
| v_switch | v_switch |  |  | Vmware virtual switch in which entity was found |
| vlan_port_group | vlan_port_group |  |  | Port group which the virtual machine belongs to |
| vmhost_ip_address | vmhost_ip_address |  |  | IP address of the physical node on which the virtual machine is hosted |
| vmhost_mac_address | vmhost_mac_address |  |  | MAC address of the physical node on which the virtual machine is hosted |
| vmhost_name | vmhost_name |  |  | Name of the physical node on which the virtual machine is hosted |
| vmhost_nic_names | vmhost_nic_names |  |  | List of all physical port names used by the virtual switch on the physical node on which the virtual machine is hosted. Represented as: "eth1,eth2,eth3" |
| vmhost_subnet_cidr | vmhost_subnet_cidr |  |  | CIDR subnet of the physical node on which the virtual machine is hosted |
| vmi_id | vmi_id |  |  | ID of the virtual machine |
| vmi_ip_type | vmi_ip_type |  |  | Discovered IP address type |
| vmi_is_public_address | vmi_is_public_address |  |  | Indicates whether the IP address is a public address |
| vmi_name | vmi_name |  |  | Name of the virtual machine |
| vmi_private_address | vmi_private_address |  |  | Private IP address of the virtual machine |
| vmi_tenant_id | vmi_tenant_id |  |  | ID of the tenant which virtual machine belongs to |
| vport_conf_mode | vport_conf_mode |  |  | Configured mode of the network adapter on the virtual switch where the virtual machine connected to |
| vport_conf_speed | vport_conf_speed |  |  | Configured speed of the network adapter on the virtual switch where the virtual machine connected to. Unit is kb |
| vport_link_status | vport_link_status |  |  | Link status of the network adapter on the virtual switch where the virtual machine connected to |
| vport_mac_address | vport_mac_address |  |  | MAC address of the network adapter on the virtual switch where the virtual machine connected to |
| vport_mode | vport_mode |  |  | Actual mode of the network adapter on the virtual switch where the virtual machine connected to |
| vport_name | vport_name |  |  | Name of the network adapter on the virtual switch connected with the virtual machine |
| vport_speed | vport_speed |  |  | Actual speed of the network adapter on the virtual switch where the virtual machine connected to. Unit is kb |
| vswitch_available_ports_count | vswitch_available_ports_count |  |  | Numer of available ports reported by the virtual switch on which the virtual machine/vport connected to |
| vswitch_id | vswitch_id |  |  | ID of the virtual switch |
| vswitch_ipv6_enabled | vswitch_ipv6_enabled |  |  | Indicates the virtual switch has IPV6 enabled |
| vswitch_name | vswitch_name |  |  | Name of the virtual switch |
| vswitch_segment_id | vswitch_segment_id |  |  | ID of the network segment on which the current virtual machine/vport connected to |
| vswitch_segment_name | vswitch_segment_name |  |  | Name of the network segment on which the current virtual machine/vport connected to |
| vswitch_segment_port_group | vswitch_segment_port_group |  |  | Port group of the network segment on which the current virtual machine/vport connected to |
| vswitch_segment_type | vswitch_segment_type |  |  | Type of the network segment on which the current virtual machine/vport connected to |
| vswitch_tep_dhcp_server | vswitch_tep_dhcp_server |  |  | DHCP server of the virtual tunnel endpoint (VTEP) in the virtual switch |
| vswitch_tep_ip | vswitch_tep_ip |  |  | IP address of the virtual tunnel endpoint (VTEP) in the virtual switch |
| vswitch_tep_multicast | vswitch_tep_multicast |  |  | Muticast address of the virtual tunnel endpoint (VTEP) in the virtual swtich |
| vswitch_tep_port_group | vswitch_tep_port_group |  |  | Port group of the virtual tunnel endpoint (VTEP) in the virtual switch |
| vswitch_tep_type | vswitch_tep_type |  |  | Type of virtual tunnel endpoint (VTEP) in the virtual switch |
| vswitch_tep_vlan | vswitch_tep_vlan |  |  | VLAN of the virtual tunnel endpoint (VTEP) in the virtual switch |
| vswitch_type | vswitch_type |  |  | Type of the virtual switch: standard or distributed |
