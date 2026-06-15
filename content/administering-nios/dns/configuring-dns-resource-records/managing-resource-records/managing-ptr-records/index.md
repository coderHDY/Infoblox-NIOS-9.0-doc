---
title: "Managing PTR Records"
source: "/space/nios90/1422721184"
pageId: "1422721184"
---
In a reverse-mapping zone, a PTR (pointer) record maps an IP address to a host name. Before adding a PTR record to a reverse-mapping zone, you must first create the zone. You can also add PTR records to forward-mapping zones to support zeroconf (zero configuration networking), such as wide-area Bonjour. For information about the Bonjour protocol, refer to [http://www.apple.com/support/bonjour](http://www.apple.com/support/bonjour) . Though adding PTR records to forward-mapping zones supports some of the use cases in RFC 1101, it does not support the network name mapping use case described in the RFC. For more information, refer to [http://tools.ietf.org/html/rfc1101](http://tools.ietf.org/html/rfc1101) .

> **warning**
>
> ### Note
> 
> If a PTR record with the domain name in its native characters is added to the Infoblox Grid through DDNS updates, the **Name** and **Domain** **Name** fields display the record name in UTF-8 encoded format. For example, a PTR record with the domain name 工作站 .[test.com](http://test.com) added through DDNS updates displays \229\183\165\228\189\156\231\171\153.test.com in the **Name** and **Domain** **Name** fields.
