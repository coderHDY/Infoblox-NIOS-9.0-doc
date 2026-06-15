---
title: "WAPI Detailed"
source: "/space/nios90/1480950354"
pageId: "1480950354"
---
You can view detailed WAPI session information logs in the audit log for successful WAPI calls such as PUT, POST, and DELETE. For more information, see [*Monitoring Tools*](https://infoblox-docs.atlassian.net/wiki/spaces/nios91x/pages/2181301152).

**Event**: Member restart or reboot service  
**Message**: [2018-07-10 16:23:08.112Z] [admin]: Called(POST) v2.9/member {“_function”:”restartservices”, “restart_option": "FORCE_RESTART","service_option": "ALL"} 3.081 MemberRestartServices: Args service_option="ALL",grid_member=Member:infoblox.localdomain,restart_option="FORCE_RESTART"



**Event**: All succeeded function calls

**Message**: [2018-07-28 08:56:44.399Z] [admin]: Called(POST) v2.9/network {"_function":"next_available_ip"} 0.034 NextAvailableIp: Args parent=Network:2.2.2.0/24\054network_view\075default



**Event**: Enhanced audit log for POST method

**Message**: [2018-05-29 09:20:12.026Z] [admin]: Created(POST) v2.9/zone_auth {"fqdn":"[http://foo.com](http://foo.com) "} 2.233 AuthZone [http://foo.com](http://foo.com)  DnsView=default: Set fqdn="[http://foo.com](http://foo.com) "



**Event**: Enhanced audit log for PUT method

**Message**: 2018-06-07 08:45:25.681Z [admin]: Modified(PUT) v2.2/zone_auth {"comment":"testing auditlogs"} 1.930 AuthZone [http://foo.com](http://foo.com)  DnsView=default: Changed comment:NULL-&gt;"testing auditlogs"



**Event**: Enhanced audit log for DELETE method:

**Message**: 2018-07-24 13:11:26.614Z [admin]: Deleted(DELETE) v2.6/zone_auth {} 0.356 AuthZone [http://foo.com](http://foo.com)  DnsView=default exclude_subobj=False
