---
title: "DNS Query Message Format"
source: "/space/nios90/1380418260"
pageId: "1380418260"
---
The DNS query generates a query message in the following format:

`&lt;dd-mmm-YYYY HH:MM:SS.uuu&gt; &lt;client IP&gt;#&lt;port&gt; query: &lt;query_Domain name&gt; &lt;class name&gt; &lt;type name&gt; &lt;- or +&gt;[SETDC] &lt;(name server ip)&gt;`

where  
`+ = recursion `

`- = no recursion `

`S = TSIG `

`E = EDNS option set `

`T = TCP query `

`D = EDNS ‘DO’ flag set `

`C = ‘CD’ message flag set`

Following is a sample DNS query message:

`30-Apr-2013 13:35:02.187 client 10.120.20.32#42386: query: foo.com @0x7fbad80bda00 IN A + (100.90.80.102)`
