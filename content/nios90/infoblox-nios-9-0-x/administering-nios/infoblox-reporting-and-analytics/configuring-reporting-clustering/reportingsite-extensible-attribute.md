---
title: "ReportingSite Extensible Attribute"
source: "/space/nios90/1425342912"
pageId: "1425342912"
---
NIOS defines the ReportingSite extensible attribute for use by the multi-site cluster reporting configuration. You must associate a ReportingSite extensible attribute value with the reporting members defined in the cluster. For more information, see Assigning a Reporting Site EA Value to a Multi-Site Cluster below. Note that your multi-site cluster configuration is invalid unless you assign ReportingSite values to all the reporting members that are part of the cluster.  
You can add up to five ReportingSite extensible attributes, and view and edit the ReportingSite extensible attributes in the **Administration** tab -&gt; **Extensible** **Attributes** tab in Grid Manager. You can view the **ReportingSite** extensible attribute values in the **Grid** -&gt; **Grid** **Manager** -&gt; **Members** tab in Grid Manager. The **ReportingSite** column is not available if you customize the Results table. You can enable the **ReportingSite** column by selecting **Columns** -&gt; **Edit** **Columns**. For information about customizing tables, see [*About the Grid Manager Interface*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface). You can also use the **Group** **Results** function to group reporting members that contain the same ReportingSite extensible attributes. For information about grouping members by extensible attributes,  as described in Grouping Members by Extensible Attribute, see [*Adding Grid Members*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/adding-grid-members).  
As illustrated in Sample Multi-Site Reporting Cluster above, the ReportingSite value "site1" is assigned to a site within a multi-site cluster and to the reporting members RM1, RM2 and RM3. The ReportingSite value "site2" is assigned to a different site in the cluster and to reporting members RM4, RM5 and RM6. If the search head goes down, the Grid Master automatically chooses an available reporting member in the same site to be the search head.

> **warning**
>
> ### Note
> 
> When you modify the ReportingSite extensible attribute value for any indexers in a multi-site cluster, ensure that you validate the configuration again, as described in Validating Reporting Clustering Configuration below.
