---
title: "ibDHCPv6Module"
source: "/space/nios90/1430192823"
pageId: "1430192823"
---
The figure below illustrates the structure of the ibDHCPv6Module, which contains the following objects:

- ibDHCPv6SubnetTable provides statistical data about the DHCPv6 operations of the appliance[.](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/snmp-mib-hierarchy/SNMP+MIB+Hierarchy#bookmark2945)
- ibDHCPv6Statistics maintains counters for different types of packets.
- ibDHCPv6DeferredQueuesize tracks the total number of deferred DDNS updates that are currently in the queue to be retried. When DDNS updates are deferred due to timeout or server issues, the DHCP server puts these updates in this queue.
- ibDHCPv6DDNSStats monitors the average latency for the DDNS updates in microseconds and the number of timeouts during different time intervals.



*ibDHCPv6Module*
