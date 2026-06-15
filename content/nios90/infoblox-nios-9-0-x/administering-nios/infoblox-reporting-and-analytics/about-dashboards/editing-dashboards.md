---
title: "Editing Dashboards"
source: "/space/nios90/1356857712"
pageId: "1356857712"
---
To edit the panels and filters of a dashboard, it is recommended to clone the default dashboard, and then add panels, filters and reports to the cloned dashboard. When you add a report to the panel, Grid Manager generates the corresponding dashboard in the panel. When you save the dashboard, Grid Manager updates reports in each panel. Alternatively, you can edit the XML source code to add filters and panels to a cloned dashboard, as described in Editing the XML Source Code of a Dashboard below.  
To add panels and filters to a dashboard:

1. From the **Reporting** tab -&gt; select the **Dashboards** tab -&gt;  select a *dashboard*.
2. From the **Edit** drop-down list, select **Edit** **Panels**.
3. In the **Edit:** **&lt;Dashboard&gt;** pane, you can click **Add** **Panel** or **Add** **Input** or **Edit** **Source**.  
   Note that you cannot modify or delete the default values set for the dashboard filters. For example, you cannot delete or modify the filter All set for Members. When you add a new input using the editor, make sure that you edit the source and refer to the token for the input in the search string. By doing so, the search is updated when you change the input value. For information editing source, refer to Splunk documentation.
4. Optionally, you can click  to delete a filter. When you delete a filter, make sure that you delete the filter information from the XML source code as well. For information, see Editing the XML Source Code of a Dashboard below.
5. Expand the panel categories and select the panel you want to add. For detailed information about how to add panel categories, refer to the Splunk documentation.
6. Click **Add** **to Dashboard**.
