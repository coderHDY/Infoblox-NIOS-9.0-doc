---
title: "Examples"
source: "/space/nios90/1420198146"
pageId: "1420198146"
---
The following example illustrates how the appliance applies NXDOMAIN rulesets. Ruleset 1:

| **Pattern** | **Action** |
| --- | --- |
| [a1.corpxyz.com](http://a1.corpxyz.com) | PASS |
| *.corpxyz.com | REDIRECT |

- If the DNS member receives a query for [a1.corpxyz.com](http://a1.corpxyz.com), it resolves the query and forwards the response, even if it is an NXDOMAIN response, to the client. Note that if the order of the rules was switched, the DNS client would have been redirected immediately, because the domain name [a1.corpxyz.com](http://a1.corpxyz.com) matches the *.corpxyz.com pattern.
- If the DNS member receives a query for [b1.corpxyz.com](http://b1.corpxyz.com), the member immediately redirects the DNS client to the specified IP address because the domain name in the query matches the second rule.
- If the DNS member receives a query for [b1.corp200.com](http://b1.corp200.com), it resolves the query because the domain name does not match any rule. If the DNS member receives an A record from an authoritative server, the member forwards the response to the client. However, if the member receives an NXDOMAIN response, it redirects the DNS client to the specified IP address.

In the following example, the rules redirect queries for dotted domain names that do not have ".com" As shown in the example, an explicit PASS rule is required at the end.  
Ruleset 2:

| Pattern | Action |
| --- | --- |
| *.com | PASS |
| .*.$ | MODIFY |
| * | PASS |

- If the DNS member receives a query for [corpxyz.com](http://corpxyz.com) which matches the pattern "*.com", the member resolves the query and forwards the response, even if it is an NXDOMAIN response, to the client.
- If the DNS member receives a query for [corpxyz.org](http://corpxyz.org), which matches the pattern ".*.$", the member resolves the query. If the member receives an NXDOMAIN response, it redirects the client to the specified IP address. If the member receives a non-NXDOMAIN response, it forwards the response to the client.
- If the DNS member receives a query for corp200, the member resolves the query and forwards the response to the client.
