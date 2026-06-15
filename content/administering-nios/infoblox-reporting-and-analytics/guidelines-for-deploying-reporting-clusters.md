---
title: "Guidelines for Deploying Reporting Clusters"
source: "/space/nios90/407765137"
pageId: "407765137"
---
The following are a few guidelines to consider before you deploy reporting clustering:

*[toc]*

# Best Practices for Capacity Planning

- Forecast the usage of the reporting volume and disk size based on your business needs and estimate the future potential growth.
  
  - Work with the your Infoblox representatives to gather statistics and metrics of your Grid to estimate the expected potential reporting data volume and disk storage required to manage your reporting data. This helps you determine which tier of NIOS Reporting license you should purchase, the number of appliances, and the appliance models you might need.
  - Configure reporting appliances using the same hardware appliance models. The capacity of the whole cluster is limited by the weakest reporting member if you configure reporting members using different appliance hardware models.
  - Consider the future potential growth during the initial deployment of a reporting cluster. Scaling out the reporting cluster by adding more reporting members at a later time might result in a significant configuration change.
  - Unlike single-indexer reporting solution, there might be more than one solution to handle certain estimated license and disk size for the reporting cluster. To reduce the potential admin overhead, Infoblox recommends that you use a small number of high-end reporting appliances to form a cluster, rather than using a large number of low-end reporting appliance.
- When deploying a reporting cluster in a virtual environment, consider the following:
  
  - You can deploy clustering in a virtual environment as long as it provides adequate system resources and capacities. Refer to the following resource to help design the clustering deployments. This link provides information about best practices and consequences that you must be aware of when configuring the host environments:  
    [https://docs.splunk.com/Documentation/Splunk/9.2.1/Capacity/Referencehardware](https://docs.splunk.com/Documentation/Splunk/9.2.1/Capacity/Referencehardware).
- If you expect to deploy the reporting cluster in multiple data centers to achieve disaster recovery in the future, then configure the multi-site reporting clustering for the first time, even if all reporting members are physically located in the same data center. You can move some of the reporting members to other data center at a later time as required, rather than deploying new reporting members and reconfiguring the multi-site cluster.  
  Note: Be aware that the additional reporting members (the secondary site in the same data center) doesn't really increase the capacity of the reporting cluster.
- Reporting cluster can only tolerate single node failure.
  
  - By default, the replication factor is set to 2, which means that there are two copies for each bucket in the entire single-site cluster or each site for a multi-site cluster. Therefore, it can tolerate failure only on one node.
  - The cluster may not be able to tolerate double failure. For example, if node1 just recovered from a failure and if node2 fails before node1 is fully recovered (before turning everything to green). In such cases, there is a chance of losing some data.
- When you change the reporting cluster mode, be aware of the following:
  
  - The data indexed by a single-indexer is not replicated to other peers, even if upgraded to a single-site cluster. Similarly, the data indexed by a single-site cluster is not replicated to other sites, even if upgraded to a multi-site cluster. In other words, the single-indexer configuration does not support HA configuration and single-site data does not have disaster recovery measure. Note that when you restore the reporting data created in a single-site cluster to a multi-site cluster, the data is restored only on the primary site of the cluster and are not replicated on the secondary site.

# Monitor Volume and Storage Consumption

- Monitor the license volume usage on the reporting server regularly using the following dashboards:
  
  - Monitor the **Today's License Usage** (GB) and **License Usage Trend Per Member** panels available in the [*Home Dashboards*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401011).
  - For more information about the the following, see [*Internal Dashboards*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270248)[:](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270248)
    
    - Reporting License Usage
    - Reporting Volume Usage Trend per Category
    - Reporting Volume Usage Trend per Member
- Configure alerts in the Infoblox Reporting and Analytics App to trigger actions when data volume reaches a specified limit.
- Monitor the disk usage: You can monitor the disk usage for each index in the *Grid Reporting Properties* editor and adjust the breakdown among indexes to make sure that the data is retained for the desired period of time.
- Take actions when the license volume or disk usage approaches the limit.
  
  - Choose to obtain licenses that can manage your data volume.
  - Expand the cluster with additional reporting members to increase the disk volume. If there is a surge of reporting data generation before you upgrade your license, you may reduce the inbound volume by turning off reporting on certain Grid members or certain reporting categories.
- Do not ignore license violation warnings, such as GUI yellow banner and SNMP traps.
  
  - When reporting license usage approaches the limit, NIOS displays the warning messages in the yellow banner, log messages, and SNMP traps (if configured).
  - When you receive five (5) violation notifications in a rolling period of 30 days, you cannot view reports or configure report related functions. To avoid reporting interruptions, promptly address any violation notifications by contacting Infoblox Technical Support.  
    Note that the reporting server continues to process incoming data during the violation state. However, you cannot view any report or manage any report related functions until you fix the violation issue.

# Deployment and Service Monitoring

- A reporting cluster requires that the Grid Master and reporting members have the same IPv4 or IPv6 configurations.
  
  - Use either IPv4 or IPv6 networks for all members. There might be an impact on the performance if you use both IPv4 and IPv6 networks. There are a few guidelines to consider before you deploy reporting clustering. For more information about the guidelines, see [*Guidelines for Deploying Reporting Clusters*](https://infoblox-docs.atlassian.net/wiki/pages/resumedraft.action?draftId=73292852).
- Be aware of the time lag in displaying the actual state in the reporting service status.
  
  - NIOS reporting monitors all communication between Splunk cluster master (on the Grid Master) and reporting members, between Grid members (forwarders) and reporting members, and among reporting members.
  - Grid Manager displays the service status to indicate any network issues. However, the status is not real-time and there might be some time lag up to 5 minutes from the moment when the issues occur or recover.
- Regularly backup your reporting data even for a multi-site cluster deployment. Infoblox recommends that you perform reporting data backup before changing your configuration from a single indexer to a single-site cluster or multi-site cluster and from a single-site cluster to a multi-site cluster. For information about backing up reporting data, see [*Managing Reporting Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400827).
- Use the **Reporting Clustering Status** dashboard to monitor the reporting cluster status.
  
  - If the reporting cluster is functioning properly, then the overall status is green. The status turns red if there is any network outage or reporting member goes offline, which indicates that the replication factor or search factor is not met. It might take some time for Grid Manager to change the status to green even after you fix the issue because the cluster needs to replicate buckets among peers.
- There can be duplicated bucket data in the reporting backup FTP server.
  
  - In the cluster mode configuration, there is a chance of uploading multiple copies of the same bucket because reporting data backup takes data from multiple reporting members simultaneously. However, the reporting data restore process eliminates the duplicate copies of such buckets.
- It is a good practice to back up the Infoblox Reporting and Analytics App regularly, even though the appliance backs up data from the running search head to the Grid Master periodically. By doing this, it is easier to recover the data automatically by the new search head in case of a search head failure. For information about Backing Up and Restoring the Infoblox Reporting and Analytics App, see [*Managing Reporting Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400827).

# Other Best Practices for Deploying Reporting Clusters

- When you plan a single site or multi-site reporting cluster, make sure that you join all the relevant reporting members to the cluster immediately. Any delays in adding the reporting members might cause some data loss because peers are unable to start indexing immediately. In addition, Infoblox recommends that you validate the reporting clustering configuration before you start the reporting service, as described in Validating Reporting Clustering Configuration, see [*Configuring Reporting Clustering*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758629).
- When you need to bring down any reporting members for reasons such as maintenance and the member will be back online soon, you can use the `set reporting_cluster_maintenance_mode` CLI command to suppress the cluster master to initiate any bucket fix-up activities. For more information about this command, refer to the *InfobloxCLIGuide*. After completing the maintenance, use the same (`set reporting_cluster_maintenance_mode`) CLI command to turn off the reporting cluster maintenance mode.
- During a scheduled upgrade, reporting members will restart and become unavailable to receive events from other Grid members. To avoid the scenario that all reporting members might go offline about the same time, Infoblox suggests that you put reporting members in different upgrade groups and schedule different upgrade times for these upgrade groups. By doing so, there will always be some reporting members available to receive data from other Grid members. Thus, you can avoid potential data loss during scheduled upgrades.
- During a high availability (HA) failover of the Grid Master, a NIOS upgrade, or a GMC promotion when the Splunk cluster manager experiences a downtime either due to an appliance restart or switching to a new cluster manager, for the cluster manager to rebuild a complete cluster, a minimum of the replication factor number of indexers that are in running state, must join the cluster manager.
- Infoblox recommends that you back up your reporting data before an upgrade or enabling reporting clustering.
- When you plan to move a reporting appliance from one Grid to another, you must first enable the reporting service in the new Grid and then join the reporting appliance.
- Infoblox recommends that you do not reboot the reporting appliance or restart the reporting service when performing reporting backups or restores. For information about Backing Up Reporting Data and Restoring the Reporting Database, see [*Managing Reporting Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400827).
- Infoblox recommends that you use appliance models with the same capacity as peers in a cluster. If you set up a reporting cluster using heterogeneous models, the appliance displays a warning message and limits the capacity of the entire cluster based on the peer that has the smallest capacity. For information about how to validate the reporting configuration, see [*Configuring Reporting Clustering*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758629). The following table provides example configurations for the single-site and multi-site clustering.

*Clustering* *Configuration* *Examples*

| **Clustering Types** | **Configuration Details** | **Validation** |
| --- | --- | --- |
| Single-site clustering (Replication Factor = Search Factor =2)           | Forwarder volume = 2GB per day Licensing Master: 1 X 5G Primary Site: 2 X TR-1405 (5G) | Yes |
| Forwarder volume: 5GB per day Licensing Master: 1 X 10G Primary Site: 2 X TR-2205 | Yes |
| Forwarder volume: 8GB per day Licensing Master: 2 X 10G Primary Site: 4 X TR-2205 | Yes |
| Forwarder volume: 8GB per day Licensing Master: 1 X 20G Primary Site: 2 X TR-4015 | Yes |
| Forwarder volume: 8GB per day Licensing Master: 1 X 10G Primary Site: 2 X TR-2205 | No    8GB exceeds the effective capacity of 7GB. |
| Forwarder volume: 5GB per day Licensing Master: 1 X 10G Primary Site: 4 X TR-2205 | No    A single 10G license makes this cluster underused. |
| Multi-site clustering    (Replication Factor = 2 Search Factor =1)       | Forwarder volume: 5GB per day Licensing Master: 1 X 10G Primary Site: 2 X TR-2205, Backup Site: 2 X TR-2205 | Yes |
| Forwarder volume: 5GB per day Licensing Master: 1 X 10G Primary Site: 2 X TR-2205, Backup Site: 1 X TR-2205 | No    Infoblox recommends that you configure at least two reporting members in each site (location). |
| Forwarder volume: 8GB per day Licensing Master: 1 X 10G Primary Site: 4 X TR-2205, Backup Site: 2 X TR-2205 | Yes |
| Forwarder volume: 8GB per day Licensing Master: 1 X 10G Primary Site: 4 X TR-2205, Backup Site: 1 X TR-2205 | No    Because total volume 8GB from forwarders exceed the effective capacity of 7GB. |
