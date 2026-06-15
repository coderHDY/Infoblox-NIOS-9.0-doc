---
title: "Enabling Recursion and Validation for Signed Zones"
source: "/space/nios90/1502871993"
pageId: "1502871993"
---
The following are the tasks to enable recursion and validate recursively derived data:

1. Enable DNSSEC on the appliance. For information, see [*Enabling DNSSEC*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762310).
2. Enable validation and configure the trust anchor of each signed zone. For information, see Enabling DNSSEC Validation below.  You must configure at least one trusted DNSKEY RR.
3. Enable recursion on the appliance. For information, see [*Enabling Recursive Queries*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665882).
4. Complete any of the following:
   
   - Configure the forward, delegated, stub or root zones for the signed zones. For information, see [*Configuring Delegated, Forward, and Stub Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762909) and [*Creating a Root Zone*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405638).
   - Configure global forwarders and custom root name servers, if needed. For information, see [*Using Forwarders*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/317784896) and [*About Root Name Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405807).
