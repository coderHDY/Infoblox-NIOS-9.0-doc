---
title: "CSV Import User Permissions"
source: "/space/nios90/1455325503"
pageId: "1455325503"
---
Superusers can perform any CSV import tasks. You must assign limited-access users the correct configurations and permissions so they can perform CSV imports and exports. For information about how to configure the CSV Import task for limited-access users, see [*Configuring Dashboard Templates*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/configuring-dashboard-templates). Limited-access users can import data to which they have proper permissions. For information about admin permissions, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions). Changes you make to user permissions can affect CSV import and export behaviors. The following table lists actions performed on user permissions and the corresponding effects on CSV imports and exports:

| **Actions taken on user permissions** | **CSV import and export behaviors associated with the affected user account** |
| --- | --- |
| Delete a user account | - CSV import jobs remain in the system and are accessible by superusers only. - All pending import jobs cannot be executed due to authentication failures. - If the action is taken during an import job that is in progress, the rest of the import will fail. - All stopped and successful jobs are available to superusers only. |
| Modify a user account | - If the action is taken during an Import in progress import job, the rest of the import will fail. |
| Remove user permissions in a user account | - Pending import jobs may be completed with errors. |
