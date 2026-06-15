---
title: "Limitations of Super Hosts"
source: "/space/nios90/1468497964"
pageId: "1468497964"
---
- You can associate extensible attributes with a super host, but it does not support inheritance.
- You cannot associate DNS records that are auto-created with a super host.
- Infoblox has limited control over resource records, from a zone or a network, which is associated with a super host. This can cause inconsistent behaviors when you enable or disable the resource record from the parent zone or network.
