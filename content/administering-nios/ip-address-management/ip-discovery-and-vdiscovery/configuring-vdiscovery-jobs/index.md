---
title: "Configuring vDiscovery Jobs"
source: "/space/nios90/704348239"
pageId: "704348239"
---
A vDiscovery job retrieves information about virtual entities in cloud environments that are managed through cloud management platforms (CMPs) such as VMware, OpenStack, AWS, Azure, and Google Cloud. The current vDiscovery feature supports tenants, networks, and compute VMs only. It does not support data that is retrieved from load balancer networks, load balancer VMs, Kubernetes platform VMs, application gateways, service VMs, SQL VMs, or any other VMs that are created using cloud services such as Kubernetes service or analytics service, where the IPAM is handled by the respective orchestration engines of the cloud provider.  
Note that if the vDiscovery job retrieves unsupported data from AWS, Azure, or Google Cloud, then it impacts the performance of the vDiscovery process.

You must first select a member to run the vDiscovery job. To ensure that the job is executed properly, verify the connection between the discovering member and the discovered endpoint. If you select HTTPS as the protocol for communication, you must upload either an SSL CA (Certified Authority) certificate or a self-signed SSL certificate to the Grid. If the certificate has expired, ensure that you delete the expired certificate and then upload a new certificate. For more information about uploading certificates, see [*Managing Certificates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280266962).

> **warning**
>
> **Note**
> 
> - After you upload a new certificate, wait for two minutes before running a vDiscovery job. This is because the newly uploaded certificate takes some time to be reflected in the NIOS database.
> - If a lag in synchronization of vDiscovery data is observed either due to simultaneous triggering of multiple jobs on a member, jobs that need to synchronize large amount of data, or both, Infoblox recommends that you run only one job per member.

To run vDiscovery on instances deployed on Google Cloud and AWS cloud platforms, the Cloud Sync Service must be started and running. on the Grid member on which you want to discover and synchronize data. NIOS automatically starts the service when you create a vDIscovery job.

Note that when you disable any virtual entities or interfaces on the CMP, the appliance excludes them from the vDiscovery job. In situations where the discovering member you select to perform vDiscovery jobs is disconnected from the Grid Master, the member continues to execute vDiscovery jobs based on the configured schedule. Newly discovered data replaces previously discovered data. The last set of discovered data is considered the most up-to-date and is sent to the Grid Master when the member reconnects with the Grid Master.

When you configure vDiscovery jobs, you can enable the Infoblox NIOS appliance to automatically create DNS records for discovered IP addresses of VM instances that are served by the NIOS appliance. You can configure the appliance to add DNS records for specific DNS views associated with the network view defined for public and private IP addresses of VM instances served by the appliance. For more information about this feature, see *Creating DNS Records for Newly Discovered VMs* below.  
Sections covered in this topic are:

*[children]*
