---
title: "Managing the Order of DNS Views"
source: "/space/nios90/1415939076"
pageId: "1415939076"
---
When a member receives a query from a DNS client, it checks the Match Client lists in the order the DNS views are listed in the *Order* *of* *DNS* *Views* table of the **DNS** **Views** tab in the DNS Member editor. The NIOS appliance can order DNS views automatically, or you can order the DNS views manually. If you choose to have the appliance automatically update the order of the DNS views, it does so after each of the following events:

- Adding a DNS view to a member.
- Removing a DNS view from a member.
- Changing the address match list of a DNS view hosted by the member.
