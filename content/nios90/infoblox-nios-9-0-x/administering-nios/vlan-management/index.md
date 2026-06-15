---
title: "VLAN Management"
source: "/space/nios90/280757588"
pageId: "280757588"
---
NIOS allows you to track the VLAN usage in your network thereby allowing you to compare an assigned VLAN with VLANs discovered by Network Insight. You can then generate inventory and conflict reports based on this data.You can:

- Create VLAN resource pools to use in the future
- Track the VLANs that are in use and those that are not in use
- Organize VLAN views and ranges by organization or group
- Assign VLANs to defined networks
- View conflicts if any between assigned and discovered VLANs

To configure VLAN management, perform these steps in the following order:

1. *[Create a VLAN view](/nios90/infoblox-nios-9-0-x/administering-nios/vlan-management/configuring-vlan-views)*.
2. *[Create one or multiple VLAN ranges within a VLAN view](/nios90/infoblox-nios-9-0-x/administering-nios/vlan-management/configuring-vlan-ranges)*.
3. *[Create VLAN objects that you can group into a range or view](/nios90/infoblox-nios-9-0-x/administering-nios/vlan-management/configuring-vlan-objects)*.
4. *[Assign a VLAN object to a network](/nios90/infoblox-nios-9-0-x/administering-nios/vlan-management/assigning-vlans-to-a-network)*.
5. *[Generate inventory and conflict reports to view conflicts between an assigned VLAN object and a VLAN object ](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/about-dashboards/About+Dashboards#VLAN Conflict)**[discovered by Network Insight](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/about-dashboards/About+Dashboards#VLAN Conflict)*.

You can use the *[global search](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data/Finding+and+Restoring+Data#Using Global Search)* function (**Advanced** tab) to search for VLAN views, ranges, and objects. You can also perform a CSV import or export of the VLAN data. For more information, see *[Importing and Exporting Data using CSV Import](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Importing%20and%20Exporting%20Data%20using%20%20CSV%20Import&linkCreation=true&fromPageId=280757588)*.

All VLAN configuration operations can be scheduled and are subject to administrator approval. For more information, see *[Configuring Approval Workflows](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/configuring-approval-workflows)*.

For information about permissions related to VLAN objects, see *[Administrative Permissions for VLAN Management](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-vlan-management)*.
