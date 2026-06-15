---
title: "Licensing Requirements"
source: "/space/nios90/1458241996"
pageId: "1458241996"
---
To enable Cloud Network Automation, you must install valid licenses on the Grid Master and Cloud Platform Appliance members. Depending on your deployment scenarios, you can take advantage of Elastic Scaling to automatically deploy virtual cloud appliances, either inside or outside your CMP.   
The following valid licenses are part of the Cloud Network Automation solution:

- Cloud Network Automation license on the Grid Master and Grid Master Candidate
- Cloud Platform license on the Cloud Platform AppliancesThe license you install on the Grid Master enables the **Cloud** user interface functions in Grid Manager and **Tenant** permissions.

The license you install on the Cloud Platform Appliance enables the cloud API service on the Cloud Platform Appliance.  
Note that it is possible to use the Cloud Network Automation solution only with the Cloud Network Automation license or with one or more Cloud Platform Appliances. In the case when only the Cloud Network Automation license is installed on the Grid Master, all cloud API requests are sent to the Grid Master instead of to individual Grid members. Creation of cloud objects through cloud API requests is visible in the **Cloud** tab of Grid Manager on the Grid Master.  
When Cloud Platform Appliances are used without the Cloud Network Automation license, cloud API requests are sent either to the Cloud Platform Appliances or to the Grid Master. However, the **Cloud** tab in Grid Manager is not available on the Grid Master for viewing cloud objects created through cloud API requests.  
You can also use the CLI command set temp_license to generate and install temporary licenses. This provides licensed features and functionality for the interim, while you wait for your permanent licenses to arrive. For information about how to install a temporary license, see [*Adding Temporary Licenses*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-0/Managing+Licenses+in+NIOS+9.0.0#Adding-Temporary-Licenses). Note that the temporary license is only effective on the Grid Master, not the Grid Master Candidate.   
For an HA pair, ensure that you use the same appliance models for both nodes and install the Cloud Platform license on both nodes as well. For information about supported models, see [*Supported Cloud Platform Appliance Models*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation/supported-cloud-platform-appliance-models). If a failover occurs and the passive node does not have a valid license, the cloud API service will stop and all resource delegations to the Cloud Platform Appliance will also stop.  
Note that the Cloud Network Automation license on the Grid Master is incompatible with the following licenses:

- Multi-Grid Manager
- Reporting

Cloud Platform licenses are only supported on Cloud Platform Appliances. They may not be installed on any other Infoblox physical or virtual appliances. The following licenses and functionality are not supported on the Cloud Platform Appliances:

- Microsoft Management
- Multi-Grid Management
- Network Insight
- Reporting
- Tiered DNS Cache Acceleration
- DNS Cache Acceleration
- Load Balancing
- Infoblox
- RIR (Regional Internet Registry)

Before you install or remove the Cloud Platform license, consider the following:

- Installing or removing the Cloud Platform license stops the cloud API service.
- When you remove the Cloud Platform license from the appliance, it still serves DNS and DHCP if those licenses are installed on the appliance. However, the appliance will no longer be able to run the cloud API service. In addition, you cannot delegate authority to this member for objects that have not already been delegated to this appliance. Existing delegations to this member remain in the NIOS database, but API requests proxied from other Cloud Platform Appliances or from the Grid Master will fail.
