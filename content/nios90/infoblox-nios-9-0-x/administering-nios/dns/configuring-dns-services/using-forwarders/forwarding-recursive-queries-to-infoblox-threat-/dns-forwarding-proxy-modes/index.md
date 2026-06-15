---
title: "DNS Forwarding Proxy Modes"
source: "/space/nios90/1857814589"
pageId: "1857814589"
---
The mode set on a DNS Forwarding proxy (DFP) service in the Infoblox portal determines where recursive DNS queries must be resolved.

The configuration state of a DNS Forwarding Proxy member can be in one of the following modes:

- Detect Only Mode: This mode is available from NIOS 9.0.8 onwards. recursive DNS queries are resolved by the local BIND server. The DNS forwarding proxy member collects DNS logs from the BIND server and sends them to the Infoblox portal.
- Enforcement Mode: If the Detect Only Mode is not enabled on a DNS Forwarding Proxy service it defaults to the Enforcement Mode. Recursive DNS queries are forwarded to the Infoblox portal and responses are received from the portal.

For steps to configure the DNS Forwarding Proxy mode, see [*Enabling Detect Only Mode on DNS Forwarding Proxy*](/nios90/by-id/1857782004).

> **warning**
>
> **Note**
> 
> Detect Only mode and Enforcement mode are mutually exclusive. In a high availability (HA) setup, ensure both active and passive nodes are running DNS Forwarding Proxy services in the same mode. Otherwise, service disruptions can occur.
