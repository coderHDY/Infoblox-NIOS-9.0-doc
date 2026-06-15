---
title: "Limitations when Using Multiple GSS-TSIG keys"
source: "/space/nios90/1393560050"
pageId: "1393560050"
---
- You can assign SPNs belonging to different domains to a DNS member, but you cannot assign SPNs belonging to different domains to a DHCP member, although two DHCP members can update the same DNS member.
- You must ensure that the domains assigned to a DNS member are unique.
- The GSS-TSIG domain for a remote forward or remote reverse zone is single-valued. For example, if DHCP clients ABC and XYZ from Grid 1 want to send DDNS updates to Grid 2, either client ABC or XYZ will succeed.
