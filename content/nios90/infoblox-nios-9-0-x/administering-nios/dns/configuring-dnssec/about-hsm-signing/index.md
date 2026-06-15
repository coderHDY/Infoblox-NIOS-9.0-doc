---
title: "About HSM Signing"
source: "/space/nios90/280664372"
pageId: "280664372"
---
You can integrate a Grid with third-party, network-attached Hardware Security Modules (HSMs) for secure private key storage and generation, and zone-signing off-loading. Infoblox appliances support integration with either Thales Luna HSMs or Entrust nShield HSMs. When using a network-attached HSM, you can provide tight physical access control, allowing only selected security personnel to physically access the HSM that stores the DNSSEC keys. When you enable this feature, the HSM performs DNSSEC zone signing, key generation, and key safe keeping.  
Note that if you migrate from using the Grid Master to HSMs, HSM signing starts at the next key rollover. Only a superuser can configure this feature. To configure HSM signing in a Grid, do the following:

1. Create the HSM group and add HSMs to the group. You can create either a Thales Luna HSM group or an Entrust nShield HSM group. You can use only one group at a time. After you add the HSM group, the Add icon and Add button in the Toolbar are greyed out.
   
   - For information on adding a Thales Luna HSM group, see *Configuring a Thales Luna HSM Device* below.
   - For information on adding an Entrust nShield HSM group, see *Adding and Managing an **Entrust nShield** HSM Group* below.
2. Enable HSM signing. For information, see *Enabling HSM Signing* below.

> **warning**
>
> **Note**
> 
> If you delete an HSM or an HSM group, it is permanently deleted. It is not stored in the Recycle Bin.

After you enable this feature, you can monitor the HSM group, as described in Monitoring the HSM Group below. In addition, the Grid sends SNMP traps when zone signing succeeds or fails. For information about these traps, see [*Processing and Software Failure Traps*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/snmp-mib-hierarchy/processing-and-software-failure-traps).  
Note that NIOS does not provide key life cycle management functions; these are handled by the HSM and must be configured via the HSM's administrative interface to adhere to corporate policies on key management. The keys (ZSK and KSK) used for DNSSEC are stored securely on the HSM and are not deleted by NIOS when the key is no longer required by the DNSSEC function. However, references to the keys are removed from the appliance.
