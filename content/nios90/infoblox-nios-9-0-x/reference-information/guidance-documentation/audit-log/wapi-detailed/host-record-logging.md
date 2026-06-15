---
title: "Host Record Logging"
source: "/space/nios90/1480950390"
pageId: "1480950390"
---
NIOS inserts two records for each host record object and the audit log displays the URI, InData and response time twice, that is, one for the host record and the other one for the host address/host alias records.

**Example of Host Record logging:** curl -H "Content-Type: application/json" -k -u admin:infoblox -X POST [https://10.120.20.129/wapi/v2.0/record:host](https://10.120.20.129/wapi/v2.0/record:host) -d '{ "ipv4addrs":[ {"ipv4addr" : "1.1.1.0","configure_for_dhcp" : false, "mac" : "aa:0:0:0:1:cc" }], "comment":"this is my one.perfusera comment","view":"default","name":"[perfusera.test.com](http://perfusera.test.com)"}'

**Message**: 2018-07-24 12:27:40.375Z [admin]: Created(POST) v2.0/record:host {"ipv4addrs":[ {"ipv4addr" : "1.1.1.0","configure_for_dhcp" : false, "mac" : "aa:0:0:0:1:cc" }],"comment":"this is my one.perfusera comment","view":"default","name":"[perfusera.test.com](http://perfusera.test.com)"} 0.236 HostAddress 1.1.1.0 network_view=default: Set address="1.1.1.0",configure_for_dhcp=False,mac_address="aa:0:0:0:1:cc",match_option="MAC_ADDRESS",parent=HostRecord:._default.com.foo.perfusera

**Message**: 2018-07-24 12:27:40.375Z [admin]: Created(POST) v2.0/record:host {"ipv4addrs":[ {"ipv4addr" : "1.1.1.0","configure_for_dhcp" : false, "mac" : "aa:0:0:0:1:cc" }],"comment":"this is my one.perfusera comment","view":"default","name":"[perfusera.test.com](http://perfusera.test.com)"} 0.236 HostRecord [http://perfusera.foo.com](http://perfusera.foo.com)  DnsView=default address=1.1.1.0: Set addresses=[address="1.1.1.0"],comment="this is my one.perfusera comment",fqdn="[http://perfusera.foo.com](http://perfusera.foo.com) ",view=DnsView:default
