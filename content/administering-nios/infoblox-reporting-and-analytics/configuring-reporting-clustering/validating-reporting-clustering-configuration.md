---
title: "Validating Reporting Clustering Configuration"
source: "/space/nios90/1425408420"
pageId: "1425408420"
---
After you have configured the reporting cluster mode, you can verify its validity. Whenever you make changes to the reporting configuration through Grid Manager or hardware replacement, make sure that you validate the configuration.  
When you verify a multi-site cluster configuration, NIOS validates the following:

- The extensible attribute ReportingSite is specified for all reporting members.
- The set of extensible attributes configured in the *GridReportingProperties* editor equals to the set of ReportingSite extensible attributes defined for the reporting members.
- For each ReportingSite extensible attribute, the number of reporting peers must be greater or equal to the replication factor in each site.
- For each ReportingSite extensible attribute, the search factor must be less than or equal to the replication factor in each site.

To verify the reporting cluster-mode configuration:

1. From the **Infoblox Grid** tab -> **Grid** **Manager** tab, click the **Reporting** service.
2. In the vertical Toolbar, click **Verify** **Cluster** **Configuration**.  
   The *Verify* *Reporting* *Cluster* *Configuration* dialog box displays an error message if the configuration is invalid. Make sure that you associate the ReportingSite extensible attributes with all the reporting members that you have configured.
3. Click **OK** to close the dialog box.
