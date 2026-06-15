---
title: "Capturing DNS Queries"
source: "/space/nios90/1380844315"
pageId: "1380844315"
---
You can capture queries to all domains or limit the capture to specific domains. You can also apply the Bulk Add Domains feature to tailor query capture to a desired subset of domains or zones. When capturing DNS queries, NIOS matches the specified domain name(s) and everything that belongs to the domain. For example, when you specify 'foo.com' as the domain, NIOS captures queries sent to 'foo.com,' 'mail.foo.com,' and 'ftp.foo.com.' NIOS captures queries to domains for which a name server is authoritative; it also captures recursive queries. Note that this feature does not support wildcard characters or regular expressions.
