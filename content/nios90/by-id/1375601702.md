---
title: "Evaluating IP Address in a Range or Network"
source: "/space/nios90/1375601702"
pageId: "1375601702"
---
Use the XC:IS_IP_IN operation to validate if an IP address is in the range and network. This operation should be specified as follows: ${XC:IS_IP_IN:{“var_with_IP”}:{“var_with_net_or_range”}} where IP address is a string such as ‘1.2.3.4’ or ‘2001:db8:ce4::42’.  
Having the L namespace as:



`{`  
`'ip1': '1.2.3.4',`  
`'ip2': '2001:db8:ce5::42'`  
`'range': {`  
`'&lt;xmla&gt;': True,`  
`'name': 'range',`  
`'attrs': {'from': '1.2.0.0', 'to': '1.2.255.255'},`  
`'value': [],`  
`'index': {}`  
`},`  
`'net': '2001:db8:ce4::/48'`  
`}`  
`The ${XC:IS_IP_IN:{L:ip1}:{L:range}} variable will be evaluated to string as "true".`  
`The ${XC:IS_IP_IN:{L:ip2}:{L:net}} variable will be evaluated to string as "false".`
