---
title: "Deleting Admin Groups and Roles"
source: "/space/nios90/1395589521"
pageId: "1395589521"
---
You can remove any default or custom admin group as long as it is not your own admin group or the last admin group. You can also delete any default or custom admin role. The appliance puts the deleted roles in the Recycle Bin, if enabled.

> **warning**
>
> ### Note
> 
> You cannot delete the **cloud-api-only** and **splunk-reporting-group** admin groups. These admin groups are automatically created when you configure your Grid for Cloud Network Automation and Reporting and Analytics respectively. For information about Cloud Network Automation and Reporting and Analytics, see [*Deploying Cloud Network Automation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758966) [ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758966)and [*Infoblox Reporting and Analytics*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280659447).

To delete an admin group:

1. From the **Administration** tab, select the **Administrators** tab -> **Groups** tab -> *admin_group* checkbox, and then click the Delete icon.
2. In the *Delete Confirmation* dialog box, click **Yes**.   
   To delete an admin role:
3. From the **Administration** tab, select the **Administrators** tab -> **Roles** tab -> *admin_role* checkbox, and then click the Delete icon.
4. In the *Delete Confirmation* dialog box, click **Yes**.
