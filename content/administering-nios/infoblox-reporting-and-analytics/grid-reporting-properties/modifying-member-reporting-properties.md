---
title: "Modifying Member Reporting Properties"
source: "/space/nios90/1457422450"
pageId: "1457422450"
---
To modify reporting properties for a reporting member:

1. From the **Infoblox Grid** tab -> **Grid** **Manager** tab -> **Services** tab, select the **Reporting** service and click the *Grid_member* checkbox, and then click the Edit icon.
2. In the *Reporting* *Member* *Properties* editor, select the **General** tab and click **Override**.
3. Under **Reporting** **Settings**, complete the following:
   
   1. **Enable** **data** **forwarding** **to** **the** **indexer** **on** **this** **member**: Select this checkbox to enable data transmissions to the reporting server. If you do not select this checkbox, a member will not forward data to the indexer and reporting service is disabled on that member.
   2. **Select** **the** **data** **categories** **to** **forward**: Select the report categories for which you want this member to forward data to the reporting server. Clear the report categories for which you do not want this member to forward data to the reporting server.
      
      Note that the member configured as an indexer displays only the **Audit** **Log** category.

1. Save the configuration.
