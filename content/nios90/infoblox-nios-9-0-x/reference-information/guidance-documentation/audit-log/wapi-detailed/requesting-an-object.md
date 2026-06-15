---
title: "Requesting an Object"
source: "/space/nios90/1481016064"
pageId: "1481016064"
---
Each WAPI call for a request object shows the timestamp, user, operation, URI, InData, and the response time.

**Example of Request object**: [https://10.35.120.1/wapi/v2.9/request](https://10.35.120.1/wapi/v2.9/request) body : [{ "method": "POST", "object": "network", "data": {"network": "22.2.2.0/24"} }, { "method": "POST", "object": "network", "data": {"network": "111.1.111.0/24"} } ]

**Message**: 2018-10-24 11:18:18.828Z [admin]: Created(POST) v2.9/request [{'object': 'network', 'data': {'network': '22.2.2.0/24'}, 'method': 'POST'}, {'object': 'network', 'data': {'network': '111.1.111.0/24'}, 'method': 'POST'}] 5.5867

**Message**: 2018-10-24 11:18:18.828Z [admin]: Created Network 22.2.2.0/24 network_view=default: Set address="22.2.2.0",cidr=24

**Message**: 2018-10-24 11:18:18.828Z [admin]: Created Network 111.1.111.0/24 network_view=default: Set address="111.1.111.0",cidr=24
