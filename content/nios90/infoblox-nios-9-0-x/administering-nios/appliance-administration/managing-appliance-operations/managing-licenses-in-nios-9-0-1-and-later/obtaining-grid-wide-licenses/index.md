---
title: "Obtaining Grid Wide Licenses"
source: "/space/nios90/2340585482"
pageId: "2340585482"
---
NIOS supports Grid Wide licenses that are valid across the entire Grid. These licenses are issued to the UID of a Grid Master. Although a Grid Wide license allows all Grid members to run a feature, other conditions determine whether the feature can be enabled on a particular member. For example, a member might not run the Reporting and Analytics feature if it is not a reporting appliance model. You can obtain Grid Wide licenses for the features listed in this section.

You can upload a Grid Wide license file on the appliance or paste it into the **Paste License(s)** field on the **Infoblox** **Grid** tab -&gt; **Licenses** tab -&gt; **Grid** **Wide** tab in Grid Manager. Copy the entire string that includes license type, expiry date, and license string.

Note the following about Grid-wide licenses:

- When you restore or perform a factory reset operation, you will lose the existing Grid-wide licenses.
- NIOS restores any Grid-wide licenses that are present in a restored database.
- When you restore a database from another Grid, NIOS replaces the UID of the Grid and the Grid-wide licenses from the other Grid.
- Static and Grid-wide licenses of the same type can co-exist in the same Grid.
- If a member is pre-provisioned for a specific feature, it is allowed to join the Grid that has the Grid-wide license for that feature even if the member does not have a license for that feature.
- To install a Cloud Network Automation license on an IB-FLEX appliance, it must be set up as a Grid Master.

## About the Flex Grid Activation License

**Flex** **Grid** **Activation** is a permanent Infoblox license that you can implement as a NIOS Grid-wide license to enable the following features at the same time:

- Grid
- DNS Cache Acceleration
- DNS
- DHCP
- DNS Traffic Control
- Response Policy Zone
- Software DNS Infrastructure Protection
- DNS Infrastructure Protection Update
- NXDOMAIN Redirect
- Query rewrite
- Threat Analytics
- Security Ecosystem
- Captive Portal
- Microsoft Management
- Cloud Network Automation

For more information, see [*About IB-Flex*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/about-ib-flex). After you install the **Flex** **Grid** **Activation** license, you can view it on the **Infoblox Grid** tab -&gt; **Licenses** tab -&gt; **Grid** **Wide** tab in Grid Manager.

You can install the **Flex** **Grid** **Activation** license on a Grid Master even if IB-FLEX is not a part of the Grid, but this license is effective only for an IB-Flex member. The Infoblox License Portal allows you to acquire any number of **Flex** **Grid** **Activation** license keys for each individual Grid. To install a temporary license, use the  [*set temp_license*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-temp-license) CLI command.

## About the Flex Grid Activation for Managed Services License

Flex Grid Activation for Managed Services is a combination of all existing Infoblox licenses that you can implement as a NIOS Grid Wide license. If you install this license, you do not need to install each license separately. The Flex Grid Activation for Managed Services license comprises the following licenses:

- Grid
- DNS Cache Acceleration
- DNS
- DHCP
- DNS Traffic Control
- Response Policy Zone
- NXDOMAIN Redirect
- Software Threat Protection
- Threat Protection Update
- Threat Analytics
- Security Ecosystem
- Microsoft Management
- Cloud Network Automation

You can install the Flex Grid Activation for Managed Services license only on a Grid Master or a standalone appliance. To install a temporary license, use the [*set temp_license*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-temp-license) CLI command.

> **warning**
>
> **Note**
> 
> You cannot install the Flex Grid Activation for Managed Services license if you have installed Flex Grid Activation license, and vice versa.
