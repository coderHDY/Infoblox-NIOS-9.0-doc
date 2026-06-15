---
title: "Configuring DNS64"
source: "/space/nios90/1420165250"
pageId: "1420165250"
---
You can enable DNS64 on both authoritative and recursive DNS servers. You can configure DNS64 at the Grid, member or DNS view level.  
To configure DNS64 on Infoblox DNS servers:

1. Create at least one DNS64 synthesis group. A synthesis group specifies the IPv6 prefix of the synthesized AAAA records. For more information, see  Adding a DNS64 Synthesis Group below.
2. Optionally, specify additional parameters for the synthesis group. For more information, see  Setting DNS64 Group Properties below
3. Enable the DNS64 service and assign a synthesis group to the Grid, a member or a DNS view. For more information, see  Enabling DNS64 Service below.

On the NAT64 device, you must specify the IPv6 prefixes that are configured on the DNS server.
