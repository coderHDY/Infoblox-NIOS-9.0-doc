---
title: "Configuring Grid Members to Support DNSSEC as Secondary Servers"
source: "/space/nios90/280404953"
pageId: "280404953"
---
Any Infoblox Grid member can function as a secondary server for DNSSEC signed zones. It can receive transfers of signed zones from the Grid Master or an external primary server, and from other secondary servers. It can also respond to queries for DNS data in DNSSEC signed zones for which it is a secondary server.

# Configuring a Secondary Server for Signed Zones

The following are the tasks to configure an appliance as a secondary server for signed zones:

1. Enable DNSSEC on the appliance. For information, see [*Enabling DNSSEC*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762310).
2. Configure the appliance as a secondary server for the zone. For information, see [*Specifying Secondary Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1456865883). If the primary server for the signed zone is external, then you must allow zone transfers to the secondary server.
3. For information, see [*Enabling Zone Transfers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405834)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405834) If the primary server is the Grid Master, then the secondary server receives data through the Grid replication process by default.
