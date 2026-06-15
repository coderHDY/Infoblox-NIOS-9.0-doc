---
title: "Reporting Cluster Modes"
source: "/space/nios90/1425342952"
pageId: "1425342952"
---
You must first enable the reporting service and configure one or more reporting members as needed before configuring the reporting cluster. When you enable reporting clustering, the Grid Master, forwarders, and reporting members use specific ports for network communication. Ports Required for IPv4 and IPv6 Single Indexer, Port Requirement for IPv4 and IPv6 Single-site Clustering, and Port Requirement for IPv4 and IPv6 Multi-site Clustering figures below illustrates whether the network communication is over TCP/SSL or VPN, and ports that you can use for the reporting service.

- **Single** **Indexer:** This is the traditional configuration that works on one reporting server (indexer). The forwarder sends reporting data to the indexer and the indexer indexes the data. This is the default configuration when you enable the reporting service for new installations.



*Ports* *Required* *for* *IPv4* *and* *IPv6* *Single* *Indexer*

*[drawio]*

- **Single-Site** **Cluster**: In a single-site cluster, the Grid Master is also the cluster master and all reporting members are cluster indexer peers. NIOS selects a peer and configures it as the search head to handle search queries. If the selected search head goes down, NIOS automatically selects another search head among the reporting members in the same site. All other Grid members (non-reporting members) are considered forwarders that send reporting data to the cluster peers for processing. You must configure at least two reporting members that are located in the same site (location). By default, the replication factor and search factor for a single-site cluster are set to 2. Note that you can upgrade your configuration from a single-site cluster to a multi-site cluster. However, once configured, you cannot change your configuration back to a single indexer. For information about how to configure a single-site cluster, see Configuring Reporting Clusters below.

*Port* *Requirement* *for* *IPv4* *and* *IPv6* *Single-site* *Clustering*

*[drawio]*

- **Multi-Site** **Cluster** - A multi-site clustering configuration is useful when you want to manage multiple reporting sites at different locations, with each site having its own set of indexers. The multi-site clustering configuration is valid only when you associate all the reporting members in the cluster with the predefined **ReportingSite** extensible attribute. For information about the ReportingSite extensible attribute, see ReportingSite Extensible Attribute below. In a multi-site cluster, you configure one of the sites as the primary site, and then plan other sites in a specific order. This order defines the next site of indexers to which the forwarders send data when the primary site is out of service. Note that all Grid members send data only to indexers in the primary site. You can designate a new primary site either by using the *Grid* *Reporting* *Properties* editor, or using the set promote_master CLI command. For more information about the CLI command, refer to the *Infoblox* *CLI* *Guide*. A multi-site cluster must have at least two sites with two reporting members in each site, as illustrated in the Sample Multi-Site Reporting Cluster figure. The first reporting site that you configure is the primary site, which also hosts the search head for the cluster. If the search head goes down, the Grid Master automatically chooses an available reporting member in the same site as the search head. If all the indexers in a site go down, or if you want to change the search head to another site, then you must manually redefine the primary site. Note that you must make one of the active sites as the primary site. In a multi-site cluster, the search factor (also known as the site search factor) determines both the number of searchable copies that the entire cluster maintains and the number of copies that each site maintains. By default, the search factor is set to 1 and the replication factor is 2 in a multi-site cluster.

> **warning**
>
> ### Note
> 
> You can change your configuration from a single indexer to a single-site cluster or multi-site cluster and from a single-site cluster to a multi-site cluster. However, you cannot revert your configuration from a multi-site cluster to a single-site cluster or to a single indexer.
