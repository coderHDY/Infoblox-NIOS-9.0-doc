---
title: "Using DNS Traffic Control Health Monitors"
source: "/space/nios90/280404830"
pageId: "280404830"
---
Health monitors determine the availability of DTC servers. You associate health monitors with pools. Every health monitor checks each server that is associated with the pool. Additionally, if you use multi-tier architecture, you can assign health monitors to individual IP addresses of a DTC server. You can use pre-defined health monitors or create custom monitors.  
You can configure health monitors of the following types:

- HTTP health monitors - [Configuring HTTP Health Monitors](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1393460825).
- ICMP health monitors - [Configuring ICMP Health Monitors](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1394543217).
- PDP health monitors - [Configuring PDP Health Monitors](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1394543259).
- SIP health monitors - [Configuring SIP Health Monitors](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1394574804).
- SNMP health monitors - [Configuring SNMP Health Monitors](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1394543309).
- TCP health monitors - [Configuring TCP Health Monitors](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1394543346).

When you install the DNS Traffic Control license, each Grid member that is associated with an LBDN independently monitors the health of a server. The appliance resolves the server FQDN using the system resolver. The appliance performs a health check on both the IPv4 and IPv6 addresses. If the member does not have the same IP address types as the server or if the DNS name resolution for A or AAAA records fail to return results, the corresponding health check is considered to be a failure. The appliance caches the addresses that are resolved.

Note that monitoring is done by each Grid member that has a DNS Traffic Control license and is associated with a zone that has an LBDN record. This implies that firewall policies should be such that the member can reach every server it is monitoring. Otherwise, DNS Traffic Control cannot direct responses to servers that are not accessible.

By default, all monitor checks are initiated from the virtual interface of the member that is performing the health check. If the monitored server has only an IPv4 or IPv6 address, then the interface must have the corresponding IP address type.

You can configure the DTC monitor source to use the VIP, MGMT, LAN2 (WHERE), or ANY (normal routing) NIOS network interface, or one of the loopback additional IP addresses for the Grid member. You can configure the loopback IP address in the Grid member editor or network configuration.

The status of a DTC server for a specific pool depends upon the status of all the health monitors that are checking it. The status of a pool depends upon the status of all the servers in the pool. The status of an LBDN depends upon the status of all the pools assigned to the LBDN.

For the HTTPS and SIP monitor types, you can upload client certificates and associate them with the monitors to provide when connecting to a DTC server. For information, see [Managing Health Monitor Certificates](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1393559762). Vice versa, DTC servers provide certificates to authenticate themselves to the HTTPS and SIP monitors. You enable DTC server certificate validation when configuring HTTPS and SIP health monitors.
