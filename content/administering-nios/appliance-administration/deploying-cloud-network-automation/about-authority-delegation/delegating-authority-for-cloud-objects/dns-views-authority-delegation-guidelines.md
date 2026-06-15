---
title: "DNS Views: Authority Delegation Guidelines"
source: "/space/nios90/1348599829"
pageId: "1348599829"
---
Consider the following authority delegation guidelines when you create, modify, or delete a DNS view:

- You cannot explicitly delegate authority for a DNS view. The Cloud Platform Appliance automatically gains authority over any DNS view that exists in the network view whose authority is delegated to that appliance.
- You cannot create or delete a DNS view from the Cloud Platform Appliance.
- Through a cloud API request, you can update DNS views defined in a network view that has been delegated to the Cloud Platform Appliance.
- You cannot create, modify, or delete a DNS view in network views that have been delegated to a Cloud Platform Appliance through a standard API request.
- You cannot delete a DNS view as long as it contains at least one DNS zone that has been delegated to a Cloud Platform Appliance.
