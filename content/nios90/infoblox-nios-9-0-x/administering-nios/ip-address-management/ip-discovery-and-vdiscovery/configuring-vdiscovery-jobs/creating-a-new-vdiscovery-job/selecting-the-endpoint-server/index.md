---
title: "Selecting the Endpoint Server"
source: "/space/nios90/1468630069"
pageId: "1468630069"
---
Consider the following key points when configuring the endpoint server for a vDiscovery job:

- You might lose some discovered data if you modify any of the parameters discussed in this section for an existing vDiscovery job. To avoid this, create a new vDiscovery job instead.
- Azure Government Cloud uses different service endpoints for its services. For more information about Azure service endpoints, refer to the [*Infoblox Installation Guide for vNIOS for Azure*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances).
- Updates to the root CAs of Azure services installed by Microsoft, can cause vDiscovery to fail. If vDiscovery fails with ERROR: PycURL error: (60, 'SSL certificate problem: unable to get local issuer certificate'):
  
  1. Download the **DigiCert Global Root G2 **Certificate from [*DigiCert Root Certificates*](https://www.digicert.com/kb/digicert-root-certificates.htm).
  2. Upload the certificate to NIOS as described in [*Uploading CA Certificates*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates/Managing+Certificates#UploadingCACertificates).
- From NIOS 8.4.2 onwards, each Google Cloud vDiscovery job can utilize only one uniquely named service account file.
- You can use the same service account file for different Google Cloud vDiscovery jobs in earlier NIOS releases (such as 8.4.0, 8.4.1). However, deleting one vDiscovery job causes the other vDiscovery job with the same name to be stuck in "Job in Progress" state. It is recommended to use only one uniquely named service account file for each vDiscovery job.
- You cannot edit an existing Google Cloud vDiscovery job to upload a different service account file.
- Auto created networks and VM instances having IP address of auto created networks cannot be discovered by Google Cloud vDiscovery.



In *Step 2 of 5* of the v*Discovery* *Job* *Wizard*, or in the **Endpoint** tab of the *vDiscovery* *Job* *Properties* editor, complete the following:

**Server** **Type**: Choose one of the following server types for this vDiscovery:

- **AWS**: Collects information available for the AWS service endpoint. You can perform vDiscovery jobs through a proxy server in an AWS deployment, including Amazon Route 53. For more information, see [*Configuring Proxy Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-proxy-servers).  
  Ensure that NIOS is able to reach the AWS endpoints. If the endpoints are not reachable, AWS vDiscovery jobs will remain in an in-progress state for a long time and then time out.
- **Azure**: Collects information available for virtual entities in the specified VNets (Azure virtual networks) within the Microsoft Cloud.
- **GCP**: Collects information available for virtual entities in the specified Google Cloud project.
- **OpenStack**: When you select this server type, vDiscovery discovers network information stored in Neutron servers, VM instance information in Nova servers, and tenant or project information in Keystone servers.
- **VMware**: Supports VMware vCenter and vSphere servers v5.0 and later. Collects information for all virtual entities running on the specified servers.

According to the server type you select, other options in this step change as discussed in the following sections.
