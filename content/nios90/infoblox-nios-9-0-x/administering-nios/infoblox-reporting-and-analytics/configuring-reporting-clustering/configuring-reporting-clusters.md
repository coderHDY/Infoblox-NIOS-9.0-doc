---
title: "Configuring Reporting Clusters"
source: "/space/nios90/1426030643"
pageId: "1426030643"
---
You can configure a reporting single indexer, a single-site cluster, or a multi-site cluster. When you configure reporting clustering, make sure that you configure two or more reporting appliances and that all indexers are online.

> **warning**
>
> ### Note
> 
> There is no action required if you see intermittent "Too many streaming errors" and "Skip indexing" messages in the **Messages** menu of the **Reporting** tab. This can be caused by network connectivity issues between the reporting nodes.
> 
> During NIOS upgrade, when configuring reporting clusters, ignore the "Unable to establish a connection to peer" message displayed on the Reporting tab.

To configure a reporting cluster:

1. From the **Administration** tab -&gt; **Reporting** tab, click **Grid** **Reporting** **Properties** from the Toolbar.
2. In the *Grid* *Reporting* *Properties* editor, select the **Reporting** **Clustering** tab and complete the following:
   
   - **Single** **Indexer**: Select this to configure only one reporting server. This is the default reporting cluster mode.
   - **Single-Site** **Cluster**: Select this if you want to configure two or more reporting servers in the same site (location). The data is replicated on multiple reporting servers. You can upgrade your configuration to the multi-site clustering mode, but you cannot revert this configuration to a singer indexer mode.
   - **Multi-Site** **Cluster**: Select this if you want to configure multiple reporting servers at different sites (locations). You must assign the ReportingSite extensible attributes to all the reporting members that you have configured in the same site within the cluster. You can configure the same ReportingSite extensible attribute with multiple reporting members. The reporting members that are configured with the same ReportingSite extensible attributes are tagged to the same site. Click the Add icon and select the ReportingSite extensible attribute that you have configured on the reporting member. The first site that you add is considered to be the primary site, which functions as the search head. You can change the order of the sites by clicking the up and down arrows.  
     For more information about the reporting cluster type, see Reporting Cluster Modes above.  
     Note that your multi-site configuration is invalid if you do not add the correct ReportingSite extensible attribute values to the reporting members. You can validate your configuration as described in Validating Reporting Clustering Configuration below.
3. Click **Save & Close**.
