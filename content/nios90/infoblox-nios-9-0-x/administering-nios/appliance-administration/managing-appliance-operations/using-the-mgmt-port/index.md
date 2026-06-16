---
title: "Using the MGMT Port"
source: "/space/nios90/660144129"
pageId: "660144129"
---
The MGMT (Management) port is a 10/100/1000Base-T Ethernet connector on the front panel of the TE-906, TE-1506, TE-1606, TE-2306, TE-4106, TE-815, TE-825, TE-1415, TE-1425, TE-2215, TE-2225, TE-4015 and TE-4025 appliances. It allows you to isolate the following types of traffic from other types of traffic on the LAN and HA ports:

- Appliance Management
- Grid Communications
- DNS Services

For information about what types of traffic qualify as appliance management, Grid communications, and DNS services, see the Sources and Destinations for Services table in [*Configuring Ethernet Ports*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-ethernet-ports).

> **warning**
>
> **Note**
> 
> - The MGMT port currently does not support DHCP, NAT, or TFTP. IPv6 addressing may be applied to the MGMT port.
> - Configuring the member Management (MGMT) network and the Grid Master's LAN network in the same subnet is not supported. This can cause connectivity issues.

Some NIOS appliance deployment scenarios support more than one concurrent use of the MGMT port. The following table depicts MGMT port uses for various appliance configurations.

*Supported* *MGMT* *Port* *Uses* *for* *Various* *appliance* *Configurations*

| **Appliance** **Configuration** | **Appliance** **Management** | **Grid** **Communications** | **DNS** ** Services** |
| --- | --- | --- | --- |
| Single Independent Appliance | ![image](/assets/660144129/d1ec36c2-368d-40d4-a0bb-b210b84b50f9.png) | Not Applicable | ![image](/assets/660144129/d1ec36c2-368d-40d4-a0bb-b210b84b50f9.png) |
| Independent HA Pair | ![image](/assets/660144129/d1ec36c2-368d-40d4-a0bb-b210b84b50f9.png) | Not Applicable | ![image](/assets/660144129/ff1901a3-11cd-46b8-8631-b21b48138e21.png) |
| Grid Master | ![image](/assets/660144129/d1ec36c2-368d-40d4-a0bb-b210b84b50f9.png) | (for external Grid communication) | ![image](/assets/660144129/d1ec36c2-368d-40d4-a0bb-b210b84b50f9.png) |
| Grid Master Candidate | ![image](/assets/660144129/d1ec36c2-368d-40d4-a0bb-b210b84b50f9.png) | (for external Grid communication) | ![image](/assets/660144129/d1ec36c2-368d-40d4-a0bb-b210b84b50f9.png) |
| HA Grid Member | ![image](/assets/660144129/4a4aa6de-90e5-4978-be97-5260896c50fc.png) | ![image](/assets/660144129/d1ec36c2-368d-40d4-a0bb-b210b84b50f9.png) | ![image](/assets/660144129/ff1901a3-11cd-46b8-8631-b21b48138e21.png) |
| Single Grid Member | ![image](/assets/660144129/4a4aa6de-90e5-4978-be97-5260896c50fc.png) | ![image](/assets/660144129/d1ec36c2-368d-40d4-a0bb-b210b84b50f9.png) | ![image](/assets/660144129/d1ec36c2-368d-40d4-a0bb-b210b84b50f9.png) |
| HA Grid Master | Not Recommended | (for external Grid communication) | ![image](/assets/660144129/d1ec36c2-368d-40d4-a0bb-b210b84b50f9.png) |
| HA Grid Master Candidate | Not Recommended | (for external Grid communication) | ![image](/assets/660144129/d1ec36c2-368d-40d4-a0bb-b210b84b50f9.png) |

`

Although you manage all Grid members through the Grid Master, if you enable the MGMT port on common Grid members, they can send syslog events, SNMP traps, and e-mail notifications, and receive SSH connections on that port.  
Infoblox does not support MGMT port usage for some appliance configurations (indicated by the symbol in Supported MGMT Port Uses for Various appliance Configurations table ) because it cannot provide redundancy through the use of a VIP. A Grid Master that is an HA pair needs the redundancy that a VIP interface on the HA port provides for Grid communications. Similarly, DNS servers in an HA pair need that redundancy to answer DNS queries. Because the MGMT port does not support a VIP and thus cannot provide redundancy, Grid Masters (and potential Grid Masters) do not support Grid communications (communication between the Grid Master and the external networks) on the MGMT port. Grid communication between the Grid Master and the Grid members is supported over the MGMT port.  
In addition, NIOS appliances in an HA pair support DNS services on the active node only (indicated by the symbol in Supported MGMT Port Uses for Various appliance Configurations table ). Only the active node can respond to queries that it receives. If a DNS client sends a query to the MGMT port of the node that happens to be the passive node, the query can eventually time out and fail.  
The MGMT port is not enabled by default. By default, a NIOS appliance uses the LAN port (and HA port when deployed in an HA pair). You must log in using a superuser account to enable and configure the MGMT port. You can configure both IPv4 address and IPv6 address for the MGMT port of a Grid member. You can enable the MGMT port through the Infoblox GUI, as explained in the following sections.
