---
title: "Shared Records Guidelines"
source: "/space/nios90/1340736811"
pageId: "1340736811"
---
The following are guidelines for using shared records:

- You can include multiple shared A, AAAA, CNAME, SRV, MX and TXT resource records in a group. You cannot include NS, DNAME, PTR, host and bulk host records.
- You can add shared records to authoritative zones only. You cannot add shared records to forward zones, stub zones, or reverse mapping zones.
- Zones that contain shared records can also contain regular DNS records (not shared).
- When you change or delete a shared resource record, it changes the canonical source of the shared record and impacts all the zones that contain the record.
- You cannot copy shared records from a zone.
- You do not need to restart the appliance when you create, delete, or modify shared records.
