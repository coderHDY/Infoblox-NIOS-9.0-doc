---
title: "ibDHCPModule"
source: "/space/nios90/1430094784"
pageId: "1430094784"
---
The below figure illustrates the structure of the ibDHCPModule. (Note that the OIDs shown in the illustration do not include the prefix .1.3.6.1.4.1.7779.) ibDHCPModule contains the following objects:

- ibDHCPSubnetTable provides statistical data about the DHCP operations of the appliance.
- ibDHCPStatistics maintains counters for different types of packets.
- ibDHCPDeferredQueuesize tracks the total number of deferred DDNS updates that are currently in the queue to be retried. When DDNS updates are deferred due to timeout or server issues, the DHCP server puts these updates in this queue.
- ibDHCPDDNSStats monitors the average latency for the DDNS updates in microseconds and the number of timeouts during different time intervals.



*ibDHCPModule*

*[image: media]*

ibDHCPSubnetTable provides statistical data about the DHCP operations of the appliance. It contains the following objects:



*ibDHCPSubnetTable*

| Object (Type) | Description |
| --- | --- |
| ibDHCPSubnet Entry | File that contains the objects for monitoring DHCP operations on the appliance. |
| ibDHCPSubnetNetworkAddress (IbIpAddr) | The subnetworks, in IP address format, that have IP addresses for lease. A subnetwork may have many address ranges for lease. |
| ibDHCPSubnetNetworkMask (IbIpAddr) | The subnet mask in dotted decimal format. |
| ibDHCPSubnetPercentUsed (Integer) | The percentage of dynamic DHCP addresses leased out at this time for each subnet.   The percentage of dynamic DHCP addresses that are leased out are calculated as the [Total number of active leases in the range + Fixed addresses (leased or unused) + DHCP reservation addresses + Host addresses with DHCP enabled inside the specified subnet]/[Total number of IP address available in the range + Number of Fixed address inside the subnet + Number of IPv4 reservation addresses + Host addresses]   For example:   Network: 10.192.16.0/24   Range: 10.192.16.10 – 10.192.16.20 (11 free IP addresses)   Fixed addresses: 10.192.16.3 (outside DHCP range) and 10.192.16.11 (within DHCP range)    There are 10 free IP addresses in the DHCP Range: 10.192.16.10 – 10.192.16.20 and one fixed address within the DHCP range   IPv4 DHCP Utilization in Infoblox GUI: 16.6% (2/12) -> For this case,    (1 fixed address outside range + 1 fixed address within range) / (fixed address outside DHCP range + number of IP addresses in the DHCP range which includes the fixed address within range)] * 100 = (2/12)*100 -> 17%   SNMP output from the CLI of the server:    Infoblox > show snmp variable .1.3.6.1.4.1.7779.3.1.1.4.1.1.1.3.11.49.48.46.49.57.50.46.49.54.46.48   IB-DHCPONE-MIB::ibDHCPSubnetPercentUsed."10.192.16.0" = INTEGER: 17 |



Following is an example of the table as viewed through a MIB browser:



*MIBBrowserView1*
