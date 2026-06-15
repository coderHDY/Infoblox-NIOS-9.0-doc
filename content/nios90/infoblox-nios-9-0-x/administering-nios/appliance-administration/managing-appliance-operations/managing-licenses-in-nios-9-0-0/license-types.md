---
title: "License Types"
source: "/space/nios90/1495400912"
pageId: "1495400912"
---
Infoblox licenses are divided into the following classes:

- **Member** (**Static**): These licenses are member specific. They are termed as **Static** in NIOS Grid Manager. Member licenses are mapped to the hardware ID for an individual NIOS or vNIOS appliance, which can be a Grid Master or a member.
- **Dynamic** (Pool): These are floating licenses that are dynamically allocated to specific Grid members in the Grid. Dynamic licenses belong to a license pool, which is associated with the entire Grid. When not in use, they can be released back to the pool of licenses for further allocation. In an environment, such as a CMP (Cloud Management Platform), where you need to spin up multiple remote vNIOS appliances at different times based on business requirements, you can consider installing dynamic licenses.  
  Dynamic licenses are supported only on Trinzic X5 series appliances. They are not supported on Trinzic X6 series appliances supported from NIOS 9.0.1 onwards. If you upgrade an X5 series appliance with an active pool license to an X6 series appliance, Infoblox Support will assist you to convert the pool license to a subscription license.
- **Grid Wide**: These licenses are associated with the entire Grid. They are not tied to any particular member. They are issued to the UID of a Grid Master. When installed, Grid Wide licenses are replicated to all members in a Grid. Although a Grid-wide license entitles all Grid members to run a particular feature, other conditions and factors determine whether the feature can be enabled on a particular member. For example, a member might not be able to run the Reporting and Analytics feature because it is not an appliance model that supports reporting.  
  The supported Grid-wide licenses are supported are **Security Ecosystem**, **Reporting** **Subscription**, **RPZ,** **Threat Insight, Flex** **Grid Activation**, and **FireEye**. To configure Grid-wide licenses for RPZ, see [*Grid-wide licenses for RPZ*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/license-requirements-and-admin-permissions-for-r).

The static, dynamic, and Grid-wide licenses can have one of the following terms of duration:

- **Perpetual**: Perpetual licenses are permanent licenses that do not have expiration dates.
- **Subscription** licenses: Unlike perpetual licenses, subscription licenses come with an expiry date and will be valid till the expiry of the contract. After subscription licenses expire, the renewed licenses must be downloaded from the support portal and applied. These licenses can be static or Grid-wide licenses. For more information about Subscription Licensing, see [*Licensing Requirements*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/licensing-requirements-280791646).
- **Temporary** licenses: You can enable one of several sets of temporary service licenses through the CLI command `set temp_license`. The duration for a temporary license is 60 days. They provide licensed features and functionality for the interim, while you wait for your permanent or subscription licenses to arrive. After these licenses expire, you cannot subscribe to the temporary licenses again. Note that pool licenses are not supported as temporary licenses.

Before any non-perpetual (subscription or temporary) licenses expire, an expiration warning appears during the Grid Manager login process. The warning reappears during each login until you renew the license. To renew a license, contact your accounts representative at Infoblox.

> **warning**
>
> **Note**
> 
> Grid Manager does not distinguish between subscription and temporary licenses for the functionality of features. At the expiration of temporary licenses, features may stop working until you purchase an appropriate subscription license, whereas when subscription licenses expire, most features continue to work. For more information, see [*NIOS Licenses and License Expiry*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/nios-licenses-and-license-expiry).
