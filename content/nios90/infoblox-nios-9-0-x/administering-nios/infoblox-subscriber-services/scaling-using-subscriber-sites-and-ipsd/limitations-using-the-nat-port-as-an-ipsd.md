---
title: "Limitations Using the NAT Port as an IPSD"
source: "/space/nios90/1471479987"
pageId: "1471479987"
---
- No acceleration support using SNIC appliances, however, it is supported for all appliances including vDCA acceleration.
- You need to restart the DNS service.
- IPSD is a global configuration that applies to all sites. IPSD may be set from CSV, WAPI, and CLI to a different AVP.
- A performance penalty for Dynamic subscribers (without Deterministic-Nat-Port AVP) in Deterministic Sites (Sites with block_size configuration) requires two lookups.
- NAT port can be configured as IPSD only if the subscriber services properties is set to **Deterministic-Nat-Port** and block size must be greater than zero.
- The site block size must be the same as the deployment CGNAT block size configuration.
- Changing the site block size will initialize the state of the subscriber collection.
- Static default network policies in a strict NAT configuration (Allow NATed Subscribers only) will not resolve at the DCA.
