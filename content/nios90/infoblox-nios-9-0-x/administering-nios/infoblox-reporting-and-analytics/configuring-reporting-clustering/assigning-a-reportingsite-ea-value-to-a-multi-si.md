---
title: "Assigning a ReportingSite EA Value to a Multi-Site Cluster"
source: "/space/nios90/1425408312"
pageId: "1425408312"
---
The multi-site clustering configuration is valid only when you associate all the reporting members in the cluster with the specified **ReportingSite** extensible attribute values. Make sure that you select the ReportingSite values from those that are specified for the multi-site cluster in the *Grid* *Reporting* *Properties* editor. After you assign extensible attribute values to the reporting members, you can validate the multi-site cluster configuration as described in Validating Reporting Clustering Configuration below.  
To associate the ReportingSite extensible attribute with the reporting member:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *member* checkbox, and then click **Extensible** **Attributes** in the Toolbar.
2. Click the Add icon in the **Extensible** **Attributes** table to enter extensible attributes. The appliance adds a row to the table each time you click the Add icon. Select the row and the attribute name from the drop-down list, and then enter the value.
3. Optionally, select an extensible attribute and click **Delete** to delete it.
4. Click **Save** **&** **Close**.
