---
title: "Supported Variables"
source: "/space/nios90/1462338258"
pageId: "1462338258"
---
| **Name** | **Example** | **Result** | **Description** |
| --- | --- | --- | --- |
| 1 | <sup>vm${1}-example.com</sup> | [vm172-example.com](http://vm172-example.com) / 192.168.1.1 | The first octet (quad for IPv6) of the discovered asset. Alias for "ip_address_octet1". |
| 2 | <sup>vm${2}-example.com</sup> | [vm41-example.com](http://vm41-example.com) / 192.168.1.1 | The second octet (quad for IPv6) of the discovered asset. Alias for "ip_address_octet2". |
| 3 | <sup>vm${3}-example.com</sup> | [vm13-example.com](http://vm13-example.com) / 192.168.1.1 | The third octet (quad for IPv6) of the discovered asset. Alias for "ip_address_octet3". |
| 4 | <sup>vm${4}-example.com</sup> | [vm9-example.com](http://vm9-example.com) / 192.168.1.1 | The fourth octet (quad for IPv6) of the discovered asset. Alias for "ip_address_octet4". |
| *discovered_name* | <sup>iface-${discovered_name}.example.org</sup> | [iface-example09.example.org](http://iface-example09.example.org) / iface-example09 | The discovered name of the asset. |
| *ip_address* | <sup>${ip_address}.example.org</sup> | [1.2.3.4.example.org](http://1.2.3.4.example.org) / 1.2.3.4 | The IP address of the discovered asset. |
| *ip_address[index]* | <sup>${ip_address[7]}.example.com</sup> | [b.example.com](http://b.example.com) / 2001:db8:acad::1 | The IP address octet (quad) substitution. Useful for IPv6 addresses. Throws an error if address have less octets (quads) than specified. |
| *ip_address_octet1* | <sup>dev-${ip_address_octet1}.example.com</sup> | [dev-2.example.com](http://dev-2.example.com) / 2dba::db8::1 | The first octet (quad) of the discovered asset. |
| *ip_address_octet2* | <sup>dev-${ip_address_octet2}.example.com</sup> | [dev-d.example.com](http://dev-d.example.com) / 2dba::db8::1 | The second octet (quad) of the discovered asset. |
| *ip_address_octet3* | <sup>dev-${ip_address_octet3}.example.com</sup> | [dev-b.example.com](http://dev-b.example.com) / 2dba::db8::1 | The third octet (quad) of the discovered asset. |
| *ip_address_octet4* | <sup>dev-${ip_address_octet4}.example.com</sup> | [dev-a.example.com](http://dev-a.example.com) / 2dba::db8::1 | The fourth octet (quad) of the discovered asset. |
