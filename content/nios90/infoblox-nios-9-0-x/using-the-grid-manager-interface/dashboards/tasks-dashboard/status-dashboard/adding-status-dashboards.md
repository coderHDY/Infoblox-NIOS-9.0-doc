---
title: "Adding Status Dashboards"
source: "/space/nios90/1457193933"
pageId: "1457193933"
---
You can create your own status dashboards and add the widgets that you need. You can configure up to 100 status dashboards at a time. When you create multiple instances of a dashboard, the appliance names each dashboard by adding an incremental suffix to the name of the new dashboard. For example, if you name a new dashboard "Corp_Dashboard" and specify the number of instances as three, then the appliance creates three instances of this new dashboard. In this example, the appliance creates three dashboards: Corp_Dashboard, Corp_Dashboard1, and Corp_Dashboard2. Note that the dashboards you create will not be available to other users. You cannot share dashboards you have created with other users.

Note that "Security" is reserved for the default Security dashboard. Grid Manager displays an error message if you name a new dashboard "Security".

To add a new status dashboard, complete the following:

1. From the **Dashboards** -&gt; **Status** tab, click the Configure icon -&gt; **Add** **Dashboard**.
2. In the *Add* *Dashboard* wizard, complete the following:
   
   - **Name**: Enter a name for the new dashboard.
   - **Add** **&lt;&gt;** **instances** **of** **this** **new** **dashboard**: Enter the number of dashboards you want to create. The maximum number of dashboards you can create is 100 at a time.
   - **Copy** **initial** **content** **from** **an** **existing** **dashboard**: Select this checkbox if you want the appliance to copy the contents from an existing status dashboard into the new dashboard. After you select this checkbox, the appliance displays the list of configured dashboards. Select a dashboard from the list. By default, this checkbox is not selected.
3. Save the configuration.

The appliance displays all dashboard instances in the **Status** tab.
