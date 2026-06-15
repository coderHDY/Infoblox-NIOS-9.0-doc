---
title: "Implementing Quality of Service Using DSCP"
source: "/space/nios90/1327497251"
pageId: "1327497251"
---
You can implement DiffServ (Differentiated Services) on the appliance by configuring the DSCP (Differentiated Services Code Point) value. DiffServ is a scalable and class-based mechanism that provides relative priorities to the type of services on your network. It can provide low latency for critical network traffic while providing simple best-effort service for non-critical services. The Infoblox DSCP implementation fully conforms to RFC 2475. For more information about DiffServ, refer to RFC 2475, *An* *Architecture* *for* *Differentiated* *Services*.

In IPv4 and IPv6 headers, DiffServ uses the DS (Differentiated Services) field for packet classification purposes. The DS field defines the layout of the ToS (Type of Services) octet in IPv4 and the Traffic Class octet in IPv6. The first six bits of the DS field are used as the DSCP value, which determines the PHBs (per-hop behaviors) on DiffServ compliant nodes and enables priorities of services to be assigned to network traffic. For more information about the DS field, refer to RFC 2474, *Definition* *of* *the* *Differentiated* *Services* *Field* *(DS* *Field)* *in* *the* *IPv4* *and* *IPv6* *Headers*.

When you configure the DSCP value for DiffServ, the appliance sets priorities for all outgoing IP traffic. It implements QoS (quality of service) rules so you can effectively classify and manage your critical network traffic. To ensure that core network services, such as DNS services, continue to operate in the event of network traffic congestion, you can set the DSCP value for the entire Grid and override it at the member level. Note that on an appliance, all outgoing IP traffic on all interfaces uses the same DSCP value.

DSCP is supported on both IPv4 and IPv6 transports and the DSCP value for both IPv4 and IPv6 transports must be the same.

> **warning**
>
> **Note**
> 
> - You can set the DSCP value of the primary LAN using the [*set network*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280855567) CLI command. DSCP values for all other interfaces and VLANs must be set through Grid Manager.
> - You can set the DSCP value for a Grid or an individual member from the Grid Manager UI, as detailed in [*Configuring the DSCP Value*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1327464518)*,* or you can set it using the [*set dscp*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790074) CLI command.

# Support Information

- In NIOS 9.0.7 and later versions:
  
  - DSCP configurations are not supported on TE-815, TE-825, and TE-926 appliances. Starting from NIOS 9.0.7, DSCP is supported on all other physical and virtual NIOS appliances even when DNS Cache Acceleration(DCA) is enabled. The configurations are supported even in cached responses going out of DNS Cache Acceleration when it is enabled.
  - DSCP can be enabled on NIOS virtual appliances deployed in any of the supported cloud platforms. For the list of supported platforms and specific installation guides, see [*NIOS Virtual Appliances*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances).
- In NIOS 9.0.6 and prior versions:
  
  - DSCP configurations are supported only on physical NIOS appliances. They are not supported on virtual NIOS appliances.
  - In physical appliances configured with DSCP, though the packets in the IP traffic outgoing from NIOS are attached with DSCP values, if DNS Cache Acceleration is enabled, the DSCP values are ignored in the IP traffic passing out of it.
