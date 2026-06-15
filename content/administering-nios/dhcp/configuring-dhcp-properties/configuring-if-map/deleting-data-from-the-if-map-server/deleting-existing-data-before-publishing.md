---
title: "Deleting Existing Data Before Publishing"
source: "/space/nios90/1462337952"
pageId: "1462337952"
---
You can define how the IF-MAP server deletes existing metadata before an IF-MAP client publishes new data. You can configure the IF-MAP client to instruct the server to always delete existing data, never delete it, or delete the data before a specified time period.  
To define how the IF-MAP server deletes DHCP data before the next publish:

1. From the **Data** **Management** tab, select the **DHCP** tab, and then click **Grid** **DHCP** **Properties** from the Toolbar.
2. In the *Grid* *DHCP* *Properties* editor, click **Toggle** **Advanced** **Mode**.
3. Click the **IF-MAP** tab and complete the following:
   
   - **Enable** **IF-MAP**: Select this checkbox to enable the IF-MAP service.
   - **Delete** **existing** **metadata**: You can define how the IF-MAP server deletes the existing metadata before the IF-MAP client publishes new data. Select one of the following:
     
     - **Always** **delete**: Select this to always delete existing metadata before the IF-MAP client publishes updates. This is the default.
     - **Do** **not** **delete**: Select this to never delete the existing metadata before the IF-MAP client publishes updates.
     - **Earlier** **than**: Select this to delete metadata that was published before a given time before the IF-MAP client publishes updates. When you select this option, enter a time value, and then select a time unit from the drop-down list.
4. Save the configuration and click **Restart** if it appears if it appears at the top of the screen.
