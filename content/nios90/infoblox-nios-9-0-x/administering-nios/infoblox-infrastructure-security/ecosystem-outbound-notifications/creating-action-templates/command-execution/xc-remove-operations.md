---
title: "XC:Remove* Operations"
source: "/space/nios90/1375045023"
pageId: "1375045023"
---
There are several XC:REMOVE* operations that can be used to remove one or more IP specified addresses from a list of hosts and ranges. Such list is the deserialized representation of the 'Hosts' element of the Rapid7 response or request.

For example,

`[`  
`{`  
`'&lt;xmla&gt;': True,`  
`'name': 'host',`  
`'attrs': {},`  
`'value': ['a.com'],`  
`'index': {}`  
`},`  
`{`  
`'&lt;xmla&gt;': True,`  
`'name': 'range',`  
`'attrs': {'from': '1.2.3.1', 'to': '1.2.3.7'},`  
`'value': [],`  
`'index': {}`  
`},`  
`{`  
`'&lt;xmla&gt;': True,`  
`'name': 'host',`  
`'attrs': {},`  
`'value': ['b.com'],`  
`'index': {}`  
`}`  
`]`



Represents the following `Hosts` element:



`&lt;Hosts&gt;`  
`&lt;host&gt;a.com&lt;/host&gt;`  
`&lt;range from="1.2.3.1" to="1.2.3.7"/&gt;`  
`&lt;host&gt;b.com&lt;/host&gt;`  
`&lt;/Hosts&gt;`



Items in the list are iterated one by one upon execution of any REMOVE command. The first argument of the REMOVE* command is the variable specification that contains an IP address. The second argument is the variable with the list of ranges or hosts. If the item is ‘range’, then the specified IP address is deleted from the range. Execution of any REMOVE command may result in no range, one range or two ranges that do not contain any specified IP addresses. The IP addresses specified in non-range items and ranges with different IP addresses are ignored.

- The `XC:REMOVEIP` command specifies the single IP address as string (for example, ‘1.2.3.4’ or ‘2001:db8:ce4::42’).
- The `XC:RMEOVERANGE` command specifies the set of IP addresses as Rapid7 range.
- The `XC:REMOVENET` command specifies the set of IP addresses as network string.

If the first argument denotes an incorrect IP address (range or network respectively), the template execution is stopped and an error is generated for DEBUG mode, and nothing happens for non-DEBUG mode.
