---
title: "Configuring Grid Members to Support DNSSEC as Secondary Servers"
source: "/space/nios90/280404953"
pageId: "280404953"
---
Any Infoblox Grid member can function as a secondary server for DNSSEC signed zones. It can receive transfers of signed zones from the Grid Master or an external primary server, and from other secondary servers. It can also respond to queries for DNS data in DNSSEC signed zones for which it is a secondary server.

# Configuring a Secondary Server for Signed Zones

The following are the tasks to configure an appliance as a secondary server for signed zones:

1. Enable DNSSEC on the appliance. For information, see [*Enabling DNSSEC*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dnssec/enabling-dnssec).
2. Configure the appliance as a secondary server for the zone. For information, see [*Specifying Secondary Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers/specifying-secondary-servers). If the primary server for the signed zone is external, then you must allow zone transfers to the secondary server.
3. For information, see [*Enabling Zone Transfers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/enabling-zone-transfers)[.](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/enabling-zone-transfers) If the primary server is the Grid Master, then the secondary server receives data through the Grid replication process by default.
