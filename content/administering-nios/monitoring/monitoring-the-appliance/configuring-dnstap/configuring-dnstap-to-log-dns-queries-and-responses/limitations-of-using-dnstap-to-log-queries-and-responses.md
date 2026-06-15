---
title: "Limitations of Using dnstap to Log Queries and Responses"
source: "/space/nios90/1432781116"
pageId: "1432781116"
---
Ensure that you understand the following limitations before you use dnstap to log queries and responses:

- The dnstap supports UDP, TCP, and EDNS protocols that require additional processing thus leading to a decrease in performance.
- NIOS does not support BIND9 dnstap.
- If the remote logging server is not accessible, then the logs are dropped and not buffered.
- The dnstap server cannot truncate EDNS0 queries.
- If you run a query that contains +edns=1, a dnstap server that uses the Golang DNS library to process the captured data displays it as a bad signature (TSIG signature failure).
- Capturing the queries and responses also depends on other factors such as the size of the flavor deployed and features enabled over it.
- dnstap does not support query and response logging on the management (MGMT) interface.
- Configuring dnstap on accelerated networking -enabled servers may affect DNS multi-protocol performance.
- By default, the MGMT interface is excluded from the accelerated networking. As a result, any services that rely on accelerated networking do not function correctly over the MGMT interface unless explicitly included. For example, dnstap fails to connect to the receiver if you switch the default network interface route.
- Non-accelerated mode appliances such as IB-8x5 / IB-v8x5 do not support DNSTAP.
