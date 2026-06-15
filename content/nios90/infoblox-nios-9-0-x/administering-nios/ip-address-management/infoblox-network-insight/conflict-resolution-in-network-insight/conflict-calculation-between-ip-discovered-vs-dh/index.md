---
title: "Conflict Calculation Between IP Discovered vs DHCP Range and Leases"
source: "/space/nios90/1432719092"
pageId: "1432719092"
---
The Discovery Engine uses several background processes to determine the existence of IPs. Depending on the process the ‘timestamp’ of discovery (last-discovered date) corresponds to a real date by a direct check (ping, SNMP, CLI), or an indirect check (presence in forwarding tables, or ARP tables).

When the check is indirect the timestamp of an IP is NOT real time as compared to a direct check against the device. It means that this timestamp may not be accurate when the device was associated to this IP, but not really at the time denoted by the timestamp. This will have impact when computing conflict with RANGE and LEASE, as the timestamp may be inaccurately stated at a time the LEASE is already ended.
