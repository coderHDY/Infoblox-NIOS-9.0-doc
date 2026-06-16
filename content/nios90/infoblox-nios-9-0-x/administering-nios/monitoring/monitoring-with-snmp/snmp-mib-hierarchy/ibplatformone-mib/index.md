---
title: "ibPlatformOne MIB"
source: "/space/nios90/1430127412"
pageId: "1430127412"
---
The ibPlatformOne MIB provides information about the CPU temperature of the appliance, the replication status, the average latency of DNS requests, DNS security alerts, CPU and memory utilization of the appliance, and the Infoblox service status. The figure below illustrates the structure of the PlatformOne MIB. (Note that the OIDs in the illustration do not include the prefix .1.3.6.1.4.1.7779.)  
The ibPlatformOne MIB contains the following objects:

- ibCPUTemperature (IbString) tracks the CPU temperature of the appliance.
- ibClusterReplicationStatusTable provides information in tabular format about the replication status of the appliance.
- ibNetworkMonitor provides information about the average latency of authoritative and nonauthoritative replies to DNS queries for different time intervals. It also provides information about invalid DNS responses that arrive on invalid ports or have invalid DNS transaction IDs.
- ibHardwareType (IbString) provides information about the hardware platform. For an Infoblox appliance, it provides the model number of the Infoblox hardware platform. For vNIOS appliances, it identifies if the hardware platform is VMware.
- ibHardwareId (IbString) provides the hardware ID of the NIOS appliance.
- ibSerialNumber (IbString) provides the serial number of the Infoblox hardware platform.
- ibNiosVersion (IbString) provides the version of the NIOS software.
- ibSystemMonitor provides information about the CPU and memory utilization of the appliance.
- ibGridStatus provides information about an appliance. It indicates whether the appliance is a Grid Master, member, or an independent appliance.
- ibHAStatus provides information about the HA status of a member. It indicates if the member is part of an HA configuration, and if it is the active or passive node.
- ibGridMasterCandStatus indicates if a member is a Grid Master candidate.
- ibGridMasterVIP provides the Grid Master virtual IP address.
- ibGridReplicationState provides information about the replication status.

The ibPlatformOne MIB also contains the following tables that provide status of the Infoblox services as well as system and hardware services on the appliance you query:

- ibMemberServiceStatusTable provides status of the Infoblox services, such as the DNS and DHCP services, on a queried appliance.
- ibMemberNodeServiceStatusTable provides status of the system and hardware services on a queried appliance.
- ibMemberPassiveNodeServiceStatusTable provides status of the system and hardware services on the passive node of an HA pair if the queried appliance is the VIP or the active node of an HA pair. For independent appliances and the passive nodes of HA pairs, this table does not display any status.

*ibPlatformOne* *MIB* *Structure*

*[image: image]*
