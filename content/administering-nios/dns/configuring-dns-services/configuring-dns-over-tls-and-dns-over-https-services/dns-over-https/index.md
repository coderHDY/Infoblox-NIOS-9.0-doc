---
title: "DNS over HTTPS"
source: "/space/nios90/1420165645"
pageId: "1420165645"
---
NIOS appliances that support DNS Cache Acceleration or DNS Infrastructure Protection Software, include the DNS over HTTPS capability that helps increase DNS security and privacy. When you enable the DNS over HTTPS feature, DNS traffic is encrypted through the HTTPS protocol to prevent eavesdropping and tampering of DNS data. This feature is supported on both recursive and authoritative DNS servers only through port 443. It is available only for Grid members and standalone systems. The feature supports the processing of multiple DNS queries/responses over a single TCP session.

You can configure and run the DNS over HTTPS service on a NIOS appliance only when the following prerequisites are met:

- An MGMT interface is set up.
- The memory required to support the DNS over HTTPS feature is available. For more information, see [Base Configuration Requirements](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1420231298).
- Either the accelerated DNS Cache Acceleration or the DNS Infrastructure Protection Software service is enabled.
