---
title: "DNS Response Message Format and Examples"
source: "/space/nios90/1380844355"
pageId: "1380844355"
---
The DNS query generates a response message in the following format:

`&lt;dd-mmm-YYYY HH:MM:SS.uuu&gt; &lt;client IP&gt;#&lt;port&gt; query: &lt;query_Domain name&gt; &lt;class name&gt; &lt;type name&gt; &lt;- or +&gt;[SETDC] response: &lt;Record information&gt;`

`Flags = &lt;- or +&gt;[ATEDVL]`

where

`- = recursion not available`

`+ = recursion available (from DNS message header)`

`A = authoritative answer (from DNS message header)`

`t = truncated response (from DNS message header)`

`E = EDNS OPT record present (from DNS message header)`

`D = DNSSEC OK (from EDNS OPT RR)`

`V = responding server has validated DNSSEC records`

`L = response contains DTC synthetic record`

The following is a sample DNS query message:

`30-Apr-2020 13:35:02.187 client 10.120.20.32#42386: query: foo.com IN A + (100.90.80.102)`

Following are some DNS response samples:

**Example 1:** **When querying an** **A** **record**

`07-Apr-2013 20:16:49.083 client 10.120.20.198#57398 UDP: query: a2.foo.com IN A response: NOERROR +AED a2.foo.com. 28800 IN A 1.1.1.2;`

**Example 2:** **When querying an** **AAAA record**

`07-Apr-2013 20:16:49.083 client 10.120.20.198#57398 UDP: query: a4.foo.com IN AAAA response: NOERROR +AED a4.foo.com. 28800 IN AAAA ab::a;`

**Example 3:** **When querying an** **A** **record** **over IPv6**

`07-Apr-2013 20:16:49.083 client 2001::2#57398 UDP: query: a2.foo.com IN A response: NOERROR +AED a2.foo.com. 28800 IN A 1.1.1.2;`

**Example 4:** **When querying an** **A** **record** **over TCP**

`07-Apr-2013 20:16:49.083 client 10.120.20.198#57398 TCP: query: a2.foo.com IN A response: NOERROR +ED a2.foo.com. 28800 IN A 1.1.1.2;`

**Example 5:** **When querying ANY record**

`07-Apr-2013 20:16:49.083 client 10.120.20.198#57398 UDP: query: a2.foo.com IN ANY response: NOERROR +ED a2.foo.com. 28800 IN A 1.1.1.2;`

**Example 6:** **When querying an** **A** **record** **with multiple addresses**

`07-Apr-2013 20:16:49.083 client 10.120.20.198#57398 UDP: query: a1.foo.com IN A response: NOERROR +ED a1.foo.com. 28800 IN A 1.1.1.1; a1.foo.com. 28800 IN A 11.1.1.1;`

**Example 7:** **When querying an** **aliased** **A** **record**

`07-Apr-2013 20:16:49.083 client 10.120.20.198#57398 UDP: query: c2.foo.com IN A response: NOERROR +ED c2.foo.com. 28800 IN CNAME a2.foo.com.; a2.foo.com. 28800 IN A 1.1.1.2;`

**Example 8:** **When querying an** **NXDOMAIN**

`07-Apr-2013 20:16:49.083 client 10.120.20.198#57398 UDP: query: non-exist.foo.com IN A response: NXDOMAIN +ED`

**Example 9:** **Response** **message** **for NOERROR/nodata**

`07-Apr-2013 20:16:49.083 client 10.120.20.198#57398 UDP: query: a1.foo.com IN SRV response: NOERROR +ED`

**Example 10:** **Response message for refused query**

`07-Apr-2013 20:16:49.083 client 10.120.20.198#57398 UDP: query: refused.com IN A response: REFUSED +ED`

**Example 11:** **Response message when server fails**

`07-Apr-2013 20:16:49.083 client 10.120.20.198#12345 UDP: query: servfail.com IN A response: SERVFAIL +E`

**Example 12:** **Response message when query A record in** **a** **signed** **zone**

`07-Apr-2013 20:16:49.083 client 10.120.20.198#57398 UDP: query: a1.signed.com IN A response: NOERROR +ED a1.signed.com. 28800 IN A 1.1.1.1;`

**Example 13:** **Response message for explicit query to DNSSEC RRs**

`07-Apr-2013 20:16:49.083 client 10.120.20.198#57398 UDP: query: a1.signed.com IN RRSIG response: NOERROR +ED a1.signed.com. 28800 IN RRSIG A 5 3 28800 20130616004903 20130611234903`   
` 4521 signed.com. evROKe7RbnkjFTsumT3JJg76bduFLfdEEnszitXHQCbVYBS5rDy+qbUI HCQuN/ldCNTJbZQ8MEhuatzfms+2Y5K2sU67P9Yg6GkOMxsT2LcJiBm/ YqrYiZBWGKpLF6J0PdX05133Xwq8XxUStUEJxKfuzcKSY6jaSduQIdFL v6A=; a1.signed.com.900 IN RRSIG NSEC 5 3 900 20130616004903 20130611234903 4521 signed.com.`   
` CnFmXMx9D+ZkDsztQbW2xx8XCROGNMBp0baxFXS/Pxxhg4PQcq58laI97y2Xgqswn/wKNhY8p9hkes5+6t/ihCOIbw FryxtdivPfYYFf3jafedFN ymZu05K9bYUfCUzZTGiRzoJYhxBM7xFT8fMvxni9ngsbLym82Tqv3Nua 6wU=;`
