---
title: "Other Limitations"
source: "/space/nios90/1446904336"
pageId: "1446904336"
---
- Perpetual/permanent licenses are not supported on Trinzic X6 series appliances.
- Installing NIOS software model licenses for X6 series physical appliance from Grid Manager is not supported. You must install them from the CLI.
- When installing multiple licenses, ensure to sequence the order of installation in such a way that the dependency conflict does not occur.
- If you install a Multi-Grid Management license, you must manually perform a product restart using either the CLI or Grid Manager to set up Multi-Grid management.
- TR (reporting) and ND (Discovery) appliances will not run DDI.
- Revoking or disassociating a pool license from a member is not supported. If you replace an expired pool license with an active license, the license is installed as a new license leaving the expired license as is. If a valid static license is installed for the same feature, then the dynamic license is deleted and returned to the pool it belongs.
- Downgrading NIOS on a Trinzic X6 series appliance to a version prior to 9.0.1 is not supported. Trinzic X6 series appliances are supported only from NIOS 9.0.1 onwards.
- Installing NIOS software model licenses that are not compatible with a Trinzic X6 series physical appliance may show a successful message when installed using the CLI. Such licenses are not installed in the backend.  
  For example: If you install an TE-2326 license over an TE-4126 appliance using the CLI, the installation shows a successful message but the license is not installed.  
  For the list of supported appliances, see the hardware installation guide available of the specific X6 appliance or the Infoblox NIOS Release Notes that is available in the Infoblox Support portal.
