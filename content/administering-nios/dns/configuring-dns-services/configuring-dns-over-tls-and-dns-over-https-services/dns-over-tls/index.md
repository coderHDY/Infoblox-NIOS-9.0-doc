---
title: "DNS over TLS"
source: "/space/nios90/1420198427"
pageId: "1420198427"
---
NIOS appliances that support DNS Cache Acceleration or DNS Infrastructure Protection Software, include the DNS over TLS capability that helps increase DNS security and privacy. When you enable the DNS over TLS feature, DNS traffic is encrypted through the TLS protocol to prevent eavesdropping and tampering of DNS data. This feature is supported on both recursive and authoritative DNS servers only through port 853. It is available only for Grid members and for standalone systems. It supports the processing of multiple DNS queries/responses over a single TLS session.

You can configure and run the DNS over TLS service on a member only when the following prerequisites are met:

- Either the accelerated DNS Cache Acceleration or the DNS Infrastructure Protection Software service is enabled.
- The memory required to support the DNS over TLS feature is available.
