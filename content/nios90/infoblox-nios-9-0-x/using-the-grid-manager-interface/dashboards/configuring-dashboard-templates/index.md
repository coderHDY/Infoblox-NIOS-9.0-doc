---
title: "Configuring Dashboard Templates"
source: "/space/nios90/280401437"
pageId: "280401437"
---
Superusers can specify the tasks an admin group can perform from the **Tasks** **Dashboard** tab by creating a dashboard template and assigning it to the admin group. When you create a dashboard template, you define the tasks users in an admin group can perform and specify whether the users can configure their own dashboards when they log in to Grid Manager. When you assign a dashboard template to an admin group, all users in this group can see and perform the tasks you define in the template, provided that the users also have the correct permissions to the objects related to the tasks. For information about administrative permissions, see [*Administrative Permissions for Dashboard Tasks*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-dashboard-tasks).

If the assigned template is unlocked, users can configure tasks on their dashboard. If you lock the dashboard template, users cannot configure task packs on their own dashboards.  
Superusers can also restrict limited-access users to access only the **Tasks** **Dashboard** tab when they log in to Grid Manager. These users cannot manage other core network services through Grid Manager. They can only see the **Tasks** **Dashboard** tab and access only the tasks defined in the dashboard template, if applicable. This feature is useful when you want to define different levels of admin users and restrict them to specific tasks based on their organizational functions. For information about how to set this restriction and creating limited-access admin groups, see [*About Admin Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups).  
To configure and apply dashboard templates, complete the following:

1. Configure dashboard templates, as described in [*Configuring Dashboard Templates*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/configuring-dashboard-templates).
2. Assign dashboard templates to admin groups, as described in [*About Admin Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups).
