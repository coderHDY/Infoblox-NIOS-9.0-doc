---
title: "Deleting Server Keys"
source: "/space/nios90/1455030355"
pageId: "1455030355"
---
The appliance retains the key until the expiration of the grace period. For example, if the validity period of a KSK is two years, you can delete the rolled key after publishing the DS record to the parent zone and waiting for a period greater than its TTL.  
The following rules are valid for KSK and ZSK signing using the double-signature scheme:

- You cannot delete an active key.
- When you delete a rolled key, the appliance displays a warning message indicating that it might break validation on clients.

The following rules are valid for ZSK signing using the pre-publish scheme:

- You cannot delete an active key.
- When you delete a pre-published key, the appliance generates a new pre-published key.
- You can delete a rolled key. The appliance deletes this key as it is no longer used.

When you use an HSM, the appliance does not delete the key from HSM. For more information, see [*About HSM Signing*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dnssec/about-hsm-signing).
