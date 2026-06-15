---
title: "Supported Variables for Conversion Rules"
source: "/space/nios90/1462371022"
pageId: "1462371022"
---
This table lists all the variables you can use in the condition syntax.

|   **Name** | **Discovered by Network Insight** |   **Description** |
| --- | --- | --- |
| ip_address | Y | Discovered IP address. |
| mac_address | Y | Discovered MAC address. |
| duid | Y | DUID associated with the IPv6 address. |
| netbios_name | Y | Discovered NetBIOS name. |
| os | Y | OS guessed by network discovery. |
| method | Y | The method being used for network discovery: FULL, ICMP, NETBIOS, TCP, or CSV. |
| network_component_type | Y | The type of network component, such as Switch, Router, and others. |
| network_component_name | Y | The name of the network component. |
| network_component_description | Y | A descriptive string for the network component |
| network_component_ip | Y | IP Address of the network component. |
| network_component_port_number | Y | Port number on the network component on which the IP was discovered. |
| network_component_port_name | Y | Port name on the network component on which the IP was discovered. |
| network_component_vendor | Y | Vendor name of the network component to which the device is connected. |
| network_component_model | Y | Model name of the network component to which the device is connected in the vendor terminology. |
| network_component_port_id | Y | Interface ID of the connected switch/switch-router. |
| port_vlan_name | Y | Name of the VLAN on the port on the network component. |
| port_vlan_description | Y | Description of the VLAN on the port on the network component. |
| port_vlan_number | Y | Number of the VLAN on the port on the network component. |
| port_speed | Y | Speed settings on the port on the network component: 10M, 100M, 1G, 10G, 100G, or Unknown. |
| port_duplex | Y | Duplex settings on the port on the network component. |
| port_status | Y | Status of the port on the network component. |
| port_link_status | Y | Link Status of the port on the network component. |
| port_type | Y | Type of interface on the network component to which the device is connected. |
| open_ports | Y | List of opened ports on the IP address, represented as: "TCP: 21,22,23 UDP: 137,139". Limited to max total of 1000 ports. |
| last_discovered_timestamp | Y | The timestamp when this data discovered. |
| first_discovered_timestamp | Y | The timestamp when this IP was first seen by the discovery station. |
| discovered_name | Y | Name of the IP as seen by the discovery station. |
| discoverer | Y | Name of the discoverer or Grid member. |
| device_vendor | Y | Vendor name of the device. |
| device_type | Y | Type of the device in the vendor terminology. |
| device_model | Y | Model name of the device in the vendor terminology. |
| mgmt_ip_address | Y | Management IP address of the device if the device has more than one IP. |
| device_port_name | Y | System name of the interface with which the IP associates. |
| device_port_type | Y | Hardware type of the interface with which the IP associates. |
| is_end_host | Y | Whether this object is an end host or an infrastructure device for the purpose of discovery. |
| iprg_id | Y | Port Redundant Group ID of this device interface. |
| iprg_no | Y | Port Redundant Group no of this device interface. |
| iprg_type | Y | Type of Port Redundant Group |
| iprg_state | Y | State of this IP address in the group. |
| vmi_name | N/A | Name of the virtual machine. |
| vmi_id | N/A | ID of the virtual machine. |
| vlan_port_group | N/A | Port group to which the virtual machine belongs. |
| vswitch_name | N/A | Name of the virtual switch. |
| vswitch_id | N/A | ID of the virtual switch. |
| vswitch_type | N/A | Type of the virtual switch: standard or distributed: Unknown, Standard, or Distributed |
| vswitch_ipv6_enabled | N/A | Indicates whether the virtual switch has IPV6 enabled: true or false |
| vport_name | N/A | Name of the network adapter on the virtual switch connected with the virtual machine. |
| vport_mac_address | N/A | MAC address of the network adapter on the virtual switch to which the virtual machine is connected. |
| vport_link_status | N/A | Link status of the network adapter on the virtual switch to which the virtual machine is connected. |
| vport_conf_speed | N/A | Configured speed of the network adapter on the virtual switch to which the virtual machine is connected. Unit is Kib. |
| vport_conf_mode | N/A | Configured mode of the network adapter on the virtual switch to which the virtual machine is connected: Unknown, Full-duplex, or Half-duplex |
| vport_speed | N/A | Actual speed of the network adapter on the virtual switch to which the virtual machine is connected. Unit is Kib. |
| vswitch_segment_type | N/A | Type of network segment on which the current virtual machine/vport is connected. |
| vswitch_tep_ip | N/A | IP address of the virtual tunnel endpoint (VTEP) in the virtual switch. |
| vswitch_tep_port_group | N/A | Port group of the virtual tunnel endpoint (VTEP) in the virtual switch. |
| vswitch_tep_vlan | N/A | VLAN of the virtual tunnel endpoint (VTEP) in the virtual switch. |
| vswitch_tep_dhcp_server | N/A | DHCP server of the virtual tunnel endpoint (VTEP) in the virtual switch. |
| vswitch_tep_multicast | N/A | Multicast address of the virtual tunnel endpoint (VTEP) in the virtual switch. |
| vmhost_ip_address | N/A | IP address of the physical node on which the virtual machine is hosted. |
| vmhost_name | N/A | Name of the physical node on which the virtual machine is hosted. |
| vmhost_mac_address | N/A | MAC address of the physical node on which the virtual machine is hosted. |
| vmhost_subnet_cidr | N/A | CIDR subnet of the physical node on which the virtual machine is hosted. |
| vmhost_nic_names | N/A | List of all physical port names used by the virtual switch on the physical node on which the virtual machine is hosted. Represented as: eth1,eth2,eth3. |
| vmi_tenant_id | N/A | ID of the tenant to which the virtual machine belongs. |
| cmp_type | N/A | If the IP is coming from a Cloud environment, the Cloud Management Platform type. |
| vmi_ip_type | N/A | Discovered IP address type. |
| vmi_ip_type | N/A | Discovered IP address type. |
| vmi_private_address | N/A | Private IP address of the virtual machine. |
| vmi_is_public_address | N/A | Indicates whether the IP address is a public address. |
| cisco_ise_ssid | N/A | Service Set Identifier. |
| cisco_ise_security_group | N/A | Name of the security group created in Cisco ISE. |
| cisco_ise_quarantine_status | N/A | Quarantine status for the IPAddress as coming from Cisco ISE: NONE or QUARANTINE |
| cisco_ise_endpoint_profile | N/A | Endpoint profile in Cisco ISE. |
