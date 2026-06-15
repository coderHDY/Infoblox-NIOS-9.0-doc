---
title: "Best Practices for Configuring Zone Signing Keys"
source: "/space/nios90/1455030315"
pageId: "1455030315"
---
Infoblox recommends that you use the pre-publish option for zone signing key method for the following reasons:

- The double-signature ZSK rollover doubles the number of signatures in your zone when a rollover is in progress. The size of the zone increases due to the duplicate signature records. This is not recommended if the size of your zones are large. When you select this option, the appliance creates a new set of signatures for all the resource records. This also increases the database usage.
- When you select to pre-publish key rollover, the rollover uses a single key to sign the records at a given time and it does not sign the zone data twice. The appliance publishes the new key in the keyset even before the actual rollover. This reduces the database usage.
