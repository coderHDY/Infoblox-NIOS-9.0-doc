---
title: "Sample Cloud API Requests"
source: "/space/nios90/1471252030"
pageId: "1471252030"
---
This section includes sample cloud API requests for supported objects:  
Adding a network view:

`curl -H "Content-Type: application/json" -k1 -u cloud:infoblox -X POST https://10.0.0.2/wapi/v2.0/networkview -d '{"name": "netview1", "extattrs": { "Tenant ID":{"value": "1011"} ,"Cloud API Owned":{"value":"True"},"CMP Type":{"value":"vCO/vCAC"}}}'`

Adding a network within the delegated network view in the above example:

`curl -H "Content-Type: application/json" -k1 -u cloud:infoblox -X POST https://10.0.0.2/wapi/v2.0/network -d '{ "network": "20.0.0.0/24","network_view":"netwview1","extattrs": { "Tenant ID":{"value": "1011"} ,"Cloud API Owned":{"value":"True"},"CMP Type":{"value":"vCO/vCAC"}}}'`

Adding a DHCP range within the network created in the above example:

`curl -H "Content-Type: application/json" -k1 -u cloud:infoblox -X POST https://10.0.0.2/wapi/v2.0/range -d '{ "end_addr": "20.0.0.40", "member": {"_struct": "dhcpmember1", "ipv4addr": "10.0.0.2", "name": "`[corpxyz.com](http://corpxyz.com)`"},"network": "20.0.0.0/24", "network_view": "netview1", "start_addr": "20.0.0.35", "extattrs": {"Tenant ID":{"value": "1011"} ,"CMP Type":{"value":"vCO/vCAC"},"Cloud API Owned":{"value":"True"}}}'`

Adding an A Record:

`curl -H "Content-Type: application/json" -k1 -u cloud:infoblox -X POST https://10.0.0.2/wapi/v2.0/record:a -d '{"name": "corp200.com", "ipv4addr":"20.0.0.2","view": "default.netview1","extattrs": {"Tenant ID":{"value": "1011"} , "CMP Type":{"value":"vCO/vCAC"},"Cloud API Owned": {"value":"True"},"VM ID":{"value":"12"}}}'`

Adding a Fixed address:

`curl -H "Content-Type: application/json" -k1 -u cloud:infoblox -X POST https://10.0.0.2/wapi/v2.0/fixedaddress -d '{"ipv4addr": "20.0.0.5", "network_view": "netview1","mac":"15:06:32:16:00:00","extattrs": { "Tenant ID":{"value": "1011"} ,"CMP Type":{"value":"vCO/vCAC"} ,"VM ID":{"value":"352"},"Cloud API Owned":{"value":"True"}}}'`

Adding a zone:

`curl -H "Content-Type: application/json" -k1 -u cloud:infoblox -X POST https://10.0.0.2/wapi/v2.0/zone_auth -d '{ "fqdn":"`[test.com](http://test.com)`","grid_primary": [{"name": "infoblox.localdomain", "stealth": false},{"name": "corpxyz.com", "stealth": false}],"view": "default.netview1","extattrs": { "Tenant ID":{"value": "1011"} , "CMP Type":{"value":"vCO/cCAC"} ,"Cloud API Owned":{"value":"True"}}}'`

Adding a network container:

`curl -H "Content-Type: application/json" -k1 -u cloud:infoblox -X POST https://10.0.0.2/wapi/v2.0/networkcontainer -d '{ "network": "200.0.0.0/24","network_view": "netview1","extattrs": { "Tenant ID":{"value": "1011"} ,"Cloud API Owned":{"value":"True"},"CMP Type":{"value":"vCO/vCAC"}}}'`

Add a host record:

`curl -H "Content-Type: application/json" -k1 -u cloud:infoblox -X POST https://10.0.0.2/wapi/v2.0/record:host -d '{ "ipv4addrs": [{ "configure_for_dhcp": false,"ipv4addr": "20.0.0.1", "mac": "11:11:22:22:33:33"}],"ipv6addrs": [{"configure_for_dhcp": false,"duid": "11:22", "ipv6addr": "13::1"},{"configure_for_dhcp": false,"duid": "21:22", "ipv6addr": "13::2"}],"name": "`[host.corpxyz.com](http://host.corpxyz.com)`", "view": "default.netview1"}'`

Adding an MX Record:

`curl -H "Content-Type: application/json" -k1 -u cloud:infoblox -X POST https://10.0.0.2/wapi/v2.0/record:mx -d '{ "mail_exchanger": "`[http://abc.com](http://abc.com) `","name":"`[def.corpxyz.com](http://def.corpxyz.com)`", "preference": 10,"view":"default.netview1","extattrs": { "Tenant ID":{"value": "1011"} , "CMP Type":{"value":"vCO/vCAC"}, "Cloud API Owned":{"value":"False"},"VM ID":{"value":"230"}}} `
