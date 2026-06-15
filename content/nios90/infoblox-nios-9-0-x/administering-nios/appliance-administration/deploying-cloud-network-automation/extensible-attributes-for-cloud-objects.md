---
title: "Extensible Attributes for Cloud Objects"
source: "/space/nios90/280407399"
pageId: "280407399"
---
When you first enable Cloud Network Automation, NIOS installs a set of extensible attributes that are specific for cloud usage. Use these cloud extensible attributes to tag objects that belong to the CMP. Note the following when defining cloud extensible attributes through Grid Manager:

- You cannot assign cloud extensible attributes to other NIOS objects, yet you can create smart folders using these cloud attributes or modify their definitions.
- You can define and update cloud extensible attributes on Grid Master, through cloud API requests or Grid Manager, as long as the authority for the corresponding cloud objects are not delegated.
- Existing extensible attributes are automatically enrolled for cloud usage when cloud licensed are installed.
- All cloud extensible attributes are displayed in the **Administration** tab -&gt; **Extensible** **Attributes** tab in Grid Manager.

To identify a cloud object, you must reference some of these cloud attributes when you create, modify, or delete a specific object. For more information about which extensible attributes are required for cloud API requests, see [*Supported Cloud API Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation/about-cloud-api-requests)*.*  
The following table lists the default cloud extensible attributes come installed on the appliance. Note that some of the attributes are read-only and you cannot modify their properties. These attributes are applicable for specific object types or for identification purposes. See **Comments** for more information about each attribute.

*Extensible* *Attributes* *for* *Cloud* *Usage*

| **Attribute** **Name** | **Attribute** **Type** | **Comments** |
| --- | --- | --- |
| Account | String | The CMP user account for creating networks. |
| Allocation ID | String | The allocation ID of the Elastic IP. Limited to Elastic IP only. Example: eipalloc-5723d13e. |
| Application Type | String | Indicates the application type, such as Web, DB, or CRM. |
| Association ID | String | Association ID specific to Elastic IP only. |
| Attachment ID | String | The attachment ID of the network interface. This is valid for Elastic IP only and present when Network   Interface is attached to an instance. Example: eni-attach-d94b09b0. |
| Availability Zone | String |  |
| Cloud API Owned | List [True, False] | This is read-only. Defines whether an object was created by the cloud adapter. |
| Cloud Region | String | A region name for an VPC object. Example: us-west-1. |
| CMP Type | String | This is read-only. Defines the type of CMP, such as VMware or OpenStack. |
| Host Aggregates | String |  |
| Interface Name | String | The name of the interface. |
| Is External | List [True, False] | This is read-only. Limited to the object type Network and Network Container. |
| Is Primary Interface | List [True, False] | This is read-only. |
| Is Shared | List [True, False] | This is read-only. Limited to the object type Network and Network Container. |
| IP Type | List [Private, Public, Fixed, Floating, Elastic] | This is read-only. Type of IP address. |
| Location | String |  |
| Network Encap | String |  |
| Network ID | String | Network ID in OpenStack |
| Network Name | String | Network name |
| Physical Network Name | String |  |
| Port Attached Device - Device ID | String | Device ID for associated device, such as OpenStack or equivalent, in other CMPs. |
| Port Attached Device - Device Owner | String | Device name for associated device, such as OpenStack or equivalent, in other CMPs (e.g. compute:nova, network:dhcp, or netowrk:router_interface). |
| Port Group | String | VMware or equivalent in other Hypervisors or CMPs. |
| Port ID | String | Port ID for associated device, such as OpenStack or equivalent, in other CMPs. |
| Port Name | String | Port name for associated device, such as OpenStack or equivalent, in other CMPs. |
| Private IP | String | One or more secondary private IP addresses that are assigned to the given Network Interface. |
| Segmentation ID | String |  |
| Subnet ID | String |  |
| Subnet Name | String |  |
| Tenant ID | String | This is read-only. The unique ID for the tenant object. |
| vDC | String |  |
| VLAN ID | Integer | The VLAN ID. |
| VM ID | String | This is read-only. This is the Instance ID in OpenStack. |
| VM Name | String | Instance Name in OpenStack. |
| vCD App | String | The application name defined in vCloud Director; previously vApp |
| vCD Org | String | The organization name defined in vCloud Director; previously vOrg. |
| VPC ID | String | This is read-only. This is a naming convention that is used at the time of creation. Example: vpc-1a2b3c4d. |
| VPC Name | String | An optional name tag for the VPC. |
| VPCs List | String | List of all the VPCs. |

You can modify some of the properties for the cloud extensible attributes, except for the read-only attributes. By default, all cloud extensible attributes are configured to allow Read/Write access for the Cloud Platform Appliances. You can change this configuration to read-only so the Cloud Platform Appliances can only access the attribute values, but not modify them. Note that when you reference modification for a read-only attribute in a cloud API request, the Cloud Platform Appliance returns an error because it cannot modify the attribute value. For information about how to configure extensible attributes, see [*About Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.*

> **warning**
>
> ### Note
> 
> An upgrade could fail if the name of an existing extensible attribute matches the name of any of the cloud extensible attribute for a different object type. You must define values for all required cloud extensible attributes in a cloud API request.

## Extensible Attributes for Tags in AWS and Azure

You can define metadata in the form of tags for AWS and Azure which are captured through a vDiscovery process and you can save the tags as extensible attributes in NIOS. You can use predefined attributes or create your own tags that consists of an user-defined key and an optional value. The tag values defined in AWS and Azure are translated into corresponding extensible attribute values in NIOS.

Note the following about saving tags defined in AWS and Azure as extensible attributes in NIOS:

- You must add extensible attributes in NIOS with the same name as the tags added in AWS or Azure.
- You can add or delete tags in Azure, but cannot update the tags.
- The tags are translated only when the corresponding extensible attributes are created in NIOS.
- The tags are discovered only during the next vDiscovery process after creating the corresponding extensible attributes in NIOS.
- It is not recommended to delete the extensible attributes which you have created for the tags defined in AWS and Azure.

The following table shows the translation of tags defined in AWS and Azure, as extensible attributes in NIOS:

*Tag Translation*

| AWS Object | Azure Object | NIOS Object |
| --- | --- | --- |
| EC-2 Instance | Virtual Machine | VM |
| Interface | Virtual Interface | Managed private IP address: Any DNS record, fixed address, or reservation associated with that IP address. |
| Interface (tags are the same for private IP address and public IP address of the same interface) | Public IP address (Public IP address has specific tags in Azure) | Managed public IP address: Any DNS record, fixed address, or reservation associated with the IP address. |
| VPC | Virtual Network | VPC |
| Subnet | Subnet (no tags for subnet in Azure) | Network |



> **warning**
>
> ### Note
> 
> NIOS generates alert messages about tags that are translated and tags that are skipped due to missed extensible attributes or incorrect extensible attributes types will be displayed in the syslog and infoblox.log file.
