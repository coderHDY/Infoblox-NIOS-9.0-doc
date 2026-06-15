---
title: "Managing Signed Zones"
source: "/space/nios90/1455063112"
pageId: "1455063112"
---
After you sign a zone, you can do the following:

- You can add a DS RR at the delegation point for a signed subzone when the subzone is hosted on a non-Infoblox DNS server or an Infoblox server that is part of a different Grid. For information, see Importing a Keyset below.
- Trust anchors can be specified as DNSKEY RRs, DS RRs, and as a BIND trusted-keys statement. You can export any of these as trust anchors. For information, see Exporting Trust Anchors below.
- You must change the KSK periodically, to ensure its security. For information, see Checking Key-Signing Keys and Rolling Key-Signing Keys below.
- You can initiate ZSK rollovers manually. For information, see Rolling Zone-Signing Keys below.
- If, for any reason, the security of the keys are compromised, you can delete a key and perform a manual rollover. For information, see Configuring Emergency KSK Rollover below.  
  Note that when you re-sign a zone, the Grid Master generates new ZSK and KSK pairs. You must send the new DNSKEY of the KSK to resolvers that use it as a trust anchor and generate new DS records and send them to the parent zones.

- You can move a signed zone to the Recycle Bin, from where you can delete it permanently or restore it. For information, see Deleting and Restoring Signed Zones below.

In addition, signed zones can accept dynamic DNS updates. For information about configuring zones to accept dynamic DNS updates, see [*Configuring DNS Servers for DDNS*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272279).
