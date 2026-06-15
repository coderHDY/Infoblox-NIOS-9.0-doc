---
title: "About License Types"
source: "/space/nios90/1446871451"
pageId: "1446871451"
---
Infoblox licenses are classified as:

- **Member** (**Static**): These licenses are member-specific. They are termed as **Static** licenses in NIOS Grid Manager. A member license is mapped to the hardware ID for an individual NIOS or vNIOS appliance, which can be a Grid Master or a member.
- **Grid Wide**: These licenses are associated with the entire Grid. They are not tied to any particular member. They are issued to the UID of a Grid Master. When installed, Grid Wide licenses are replicated to all members in the Grid. Although a Grid Wide license entitles all Grid members to run a particular feature, other conditions and factors determine whether the feature can be enabled on a particular member. For example, a member might not be able to run the Reporting and Analytics feature because it is not an appliance model that supports reporting.  
  Grid-wide licenses that NIOS supports are **Security Ecosystem**, **Reporting** **Subscription**, **RPZ,** **Threat Insight, Flex** **Grid Activation**, and **FireEye**. To configure Grid-wide licenses for RPZ, see [*Grid-wide licenses for RPZ*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/420544897).

According to the duration of their validity, licenses are classified as:

- **Subscription** licenses: Subscription licenses come with an expiry date and will remain valid until the expiry of the contract. After subscription licenses expire, the renewed licenses must be downloaded from the support portal and applied. These licenses can be static or Grid-wide licenses. For more information about Subscription licensing, see [*Licensing Requirements*](https://infoblox-docs.atlassian.net/wiki/spaces/NOIS91xDRAFT/pages/1686805815).  
  A subscription license can be a member license or a Grid-wide license.
- **Temporary** licenses: Temporary licenses remain valid for 60 days. You can enable an X6 series appliance with one or more temporary service licenses through the CLI command `set temp_license`. They provide licensed features and functionality for the interim, while you await for your subscription licenses. After expiration, you cannot renew temporary licenses.

## Messages About License Expiry

Before subscription or temporary licenses expire, an expiration warning appears during Grid Manager login. The warning reappears at each login until you renew the license.

Grid Manager also displays banner messages for expiring licenses. From NIOS 9.0.8 onwards, the banner message common for all licenses shows the count of expiring licenses, the days until the earliest expiry, and its expiration date. The banner message specific to temporary licenses shows days until the earliest expiry and the expiration date. The banner color changes from yellow to red when the license enters the 30-day expiry window. If email notifications are configured, messages are sent every 24 hours during this window.

To renew a license, contact your accounts representative at Infoblox.

> **warning**
>
> **Note**
> 
> - At the expiration of temporary licenses, features stop working until you purchase an appropriate subscription license, whereas when subscription licenses expire, most features continue to work. For more information, see the table in the [*NIOS Licenses and License Expiry*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667194) section.
> - For information about Managing static and Grid-wide licenses, see [*Managing Licenses in 9.0.0*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667194).
