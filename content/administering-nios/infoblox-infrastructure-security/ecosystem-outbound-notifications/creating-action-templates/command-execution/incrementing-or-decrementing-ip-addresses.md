---
title: "Incrementing or Decrementing IP addresses"
source: "/space/nios90/1375143063"
pageId: "1375143063"
---
Use the `XC:INC` and `XC:DEC` operations respectively to increment and decrement IP address strings.

Examples:

- For namespace {'L':{'ip_str': '1.2.3.4'}}, an evaluating variable "${XC:DEC:{L:ip_str}}" results in {'L':{'ip_str': '1.2.3.3'}}.
- The same goes for IPv6 addresses. For namespace {'L':{'ip_str': '2001:db8::2'}}, an evaluating variable "${XC:INC:{L:ip_str}}" results in {'L':{'ip_str': 2001:db8::3'}}, and an evaluating "${XC:DEC:{L:ip_str}}" results in {'L':{'ip_str': '2001:db8::1'}}.

The increment of the last address results in the first address. The decrement of the first address results in the last address.  
Examples:

`INC of ‘255.255.255.255’ results in ‘0.0.0.0’`  
`INC of ‘ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff’ results in ‘::’`  
`DEC of ‘0.0.0.0’ results in ‘255.255.255.255’`  
`DEC of ‘::’ results in ‘fff:ffff:ffff:ffff:ffff:ffff:ffff:ffff’`
