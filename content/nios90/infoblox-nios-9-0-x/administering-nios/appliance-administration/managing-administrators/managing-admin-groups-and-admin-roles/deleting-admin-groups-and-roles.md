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
> You cannot delete the **cloud-api-only** and **splunk-reporting-group** admin groups. These admin groups are automatically created when you configure your Grid for Cloud Network Automation and Reporting and Analytics respectively. For information about Cloud Network Automation and Reporting and Analytics, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation) [ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation)and [*Infoblox Reporting and Analytics*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics).

To delete an admin group:

1. From the **Administration** tab, select the **Administrators** tab -&gt; **Groups** tab -&gt; *admin_group* checkbox, and then click the Delete icon.
2. In the *Delete Confirmation* dialog box, click **Yes**.   
   To delete an admin role:
3. From the **Administration** tab, select the **Administrators** tab -&gt; **Roles** tab -&gt; *admin_role* checkbox, and then click the Delete icon.
4. In the *Delete Confirmation* dialog box, click **Yes**.
