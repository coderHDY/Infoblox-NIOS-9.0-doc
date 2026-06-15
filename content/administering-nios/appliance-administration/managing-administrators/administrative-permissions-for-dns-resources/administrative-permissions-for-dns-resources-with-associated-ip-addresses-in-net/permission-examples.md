---
title: "Permission Examples"
source: "/space/nios90/1482555555"
pageId: "1482555555"
---
The following table lists examples for configuring new permissions for fixed addresses (or reservations) in network 10.1.2.0/24 and range 10.1.2.1-10.1.2.10.

| **Action** | **Permission** **for** **network** **10.1.2.0/24** | **Permission** **for** **range**    **10.1.2.1-10.1.2.10** | **Action** **Allowed?** **(Yes/No)** | **Comment** |
| --- | --- | --- | --- | --- |
| Add, modify, or delete fixed address 10.1.2.5 | No | No | No | N/A |
| Add, modify, or delete fixed address 10.1.2.5 | No | Read/write for "Fixed addresses in 10.1.2.1-10.1.2.10 Range" | Yes | Read/write permission at the range level is sufficient for creating a fixed address that falls within the range. |
| Add, modify, or delete fixed address 10.1.2.100 | Read/write for "Fixed addresses in 10.1.2.0/24 Network" | Deny for "Fixed addresses in 10.1.2.1-10.1.2.10 Range" | Yes | Since fixed address 10.1.2.100 does not belong to the 10.1.2.1-10.1.2.10 range, read/write permission for "Fixed addresses in 10.1.2.0/24 Network" is sufficient for the operation. |



The following table lists some examples for configuring DNS resources that have associated IP addresses in a network or range:

| **Action** | **Permission** **for DNS zone **[**corpxyz.com**](http://corpxyz.com)** ** | **Permission** **for** **network**  **10.1.2.0/24** | **Permission** **for** **range 10.1.2.1-10.1.2.10** | **Action**    **Allowed?** **(Yes/No)** | **Comment** |
| --- | --- | --- | --- | --- | --- |
| Add, modify, or delete an A record with IP address 10.1.2.8 | Read/write permission for [corpxyz.com](http://corpxyz.com) | No | No | No | Read/write permission for "A Records in 10.1.2.1-10.1.2.10 range" is also required. |
| Add, modify, or delete an A record with IP address 10.1.2.8 | Read/write permission for [corpxyz.com](http://corpxyz.com) | No | Read/write for "A Records in 10.1.2.1-10.1.2.10 | Yes | Since 10.1.2.8 falls within the 10.1.2.1-10.1.2.10 range, read/write permission for "A Records in 10.1.2.1-1 0.1.2.10 Range" and read/write for [corpxyz.com](http://corpxyz.com) are both required. |
| Add, modify, or delete an A record with IP address 10.1.2.8, and modify or delete a network | Read/write permission for [corpxyz.com](http://corpxyz.com) | Read-only permission for network 10.1.2.0/24 |   Read/write for "A Records in 10.1.2.1-10.1.2.10 Range | Yes for A record  No for network | Admins can add, modify, and delete A records because they have read/write permissions for the zone and range; but they cannot modify or delete networks because they have read-only permission for network 10.1.2.0/24. |
| Add, modify or delete DHCP-enabled host address 10.1.2.22 | Yes if the host is a DNS host.  N/A if the host is a DHCP host. | Read/write permission for "IPv4 Hosts in 10.1.2.0 network" | No | Yes | Host address 10.1.2.22 is within the 10.1.2.0 network but outside of the 10.1.2.1- 10.1.2.10 range, so read/write permission for "IPv4 Hosts in 10.1.2.0 network" is sufficient. |
| Add, modify, or delete DHCP-enabled host address 10.1.2.8, and modify or delete a network | Yes if the host is a DNS host.  N/A if the host is a DHCP host. | Read-only permission for network 10.1.2.0/24 | Read/write for "Hosts in 10.1.2.1-10.1.2.10 Range | Yes for A record  No for network | Admins can add, modify, and delete DHCP-enabled hosts because they have read/write permissions for "Hosts in 10.1.2.1010.1.2.10 range"; but they cannot modify or delete networks because they have read-only permission for network 10.1.2.0/24. |

The following table list an example for permissions required to configure PTR records that have associated IP addresses in a network:

| **Action** | **Permission** **for DNS zone **[**corpxyz.com**](http://corpxyz.com)** ** | **Permission** **for** **network**  **10.1.2.0/24** | **Permission** **for** **reverse zone 0.0.10.in-addr.arpa ** | **Action**    **Allowed?** **(Yes/No)** | **Comment** |
| --- | --- | --- | --- | --- | --- |
| Add, modify, or delete a PTR record with IP address 5.0.0.10. **Note**: You can also add, modify, or delete PTR records in the IPv6 reverse-mapping zone. | Read/write permission for [corpxyz.com](http://corpxyz.com) | No | Yes | Yes | Read/write permission for “PTR Records in [corpxyz.com](http://corpxyz.com) and 0.0.10.in-addr.arpa” is required. |
