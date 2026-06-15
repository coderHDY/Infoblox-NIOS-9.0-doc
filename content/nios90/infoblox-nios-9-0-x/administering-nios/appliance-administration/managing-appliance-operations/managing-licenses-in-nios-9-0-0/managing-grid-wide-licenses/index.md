---
title: "Managing Grid-wide Licenses"
source: "/space/nios90/1495269905"
pageId: "1495269905"
---
NIOS supports Grid-wide licenses that are valid across the entire Grid. You can obtain Grid-wide licenses for features listed in this section. Although a Grid-wide license entitles all Grid members to run a particular feature, other conditions and factors determine whether the feature can be enabled on a particular member. For example, a member might not be able to run the Reporting and Analytics feature because it does not have the reporting appliance model.

For a Grid-wide license, you can either upload the license file to the appliance or copy the information and paste it in the text field on the **Paste License(s)** field on the **Infoblox** **Grid** tab -&gt; **Licenses** tab -&gt; **Grid** **Wide** tab of Grid Manager. You must copy the entire string (license type, expiry date, and license string). The **Flex** **Grid** **Activation** license is bundled with the following licenses: Grid, DNS Cache Acceleration, DNS, DHCP, DNS Traffic Control, Response Policy Zone, Software Threat Protection, Threat Protection Update, NXDOMAIN Redirect, Microsoft Management, Threat Analytics, Security Ecosystem, and Cloud Network Automation.

Note the following about Grid-wide licenses:

- When you restore or perform a factory reset operation, you will lose the existing Grid-wide licenses.
- NIOS restores any Grid-wide licenses that are present in a restored database.
- When you restore a database from another Grid, NIOS replaces the UID of the Grid and the Grid-wide licenses from the other Grid.
- Static and Grid-wide licenses of the same type can co-exist in the same Grid.
- If a member is pre-provisioned for a specific feature, it is allowed to join the Grid that has the Grid-wide license for that feature even if the member does not have a license for that feature.
- To install a Cloud Network Automation license on an IB-FLEX appliance, it must be set up as a Grid Master.
