---
title: "set refresh_supported_cloud_regions"
source: "/space/nios90/692125698"
pageId: "692125698"
---
The `set refresh_supported_cloud_regions` command is used to retrieve new regions from AWS on which you can run vDiscovery to discover and synchronize data. The command compares the list of regions retrieved from AWS with the existing list of regions in the NIOS database, and returns if any new regions are found. The output also includes a consolidated list of all regions including the new regions that were found. You can configure vDiscovery jobs on these regions. For more information, see [*Configuring vDiscovery Jobs*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/configuring-vdiscovery-jobs).

> **warning**
>
> **Note**
> 
> - The `set refresh_supported_cloud_regions` command must be run from a Grid Master only.
> - The access key credentials that you specify to run this command must be from an account that is assigned with the API permission ec2:DescribeRegions.
> - If you specify invalid credentials repeatedly, the CLI session closes after a maximum of three invalid retries.

# Syntax

`Infoblox &gt; set refresh_supported_cloud_regions`  
`AWS Access Key ID: &lt;access_key_id&gt;`  
`AWS Secret Access Key: &lt;secret_access_key&gt;`

| **Argument** | **Description** |
| --- | --- |
| `AWS Access Key ID` | Specifies a valid access key ID in your access key credentials. |
| `AWS Secret Access Key` | Specifies a valid secret access key in your access key credentials. |

# Example

`Infoblox &gt; set refresh_supported_cloud_regions`

`AWS Access Key ID: AK12U5JGZTABQGYSS7ZZ`  
`AWS Secret Access Key: `

`New regions found in AWS: {'ap-south-1', 'ap-south-2', 'eu-south-1', 'me-central-1', 'eu-south-2'}`

`Updated list of AWS regions in NIOS: ['ap-northeast-3', 'us-west-1', 'ap-southeast-1', 'ap-southeast-2', 'eu-south-2', 'eu-north-1', 'ap-southeast-4', 'eu-central-1', 'sa-east-1', 'eu-south-1', 'ca-central-1', 'ap-east-1', 'eu-west-3', 'eu-west-1', 'ap-southeast-3', 'me-south-1', 'il-central-1', 'eu-west-2', 'us-east-1', 'ap-south-2', 'me-central-1', 'us-east-2', 'ap-northeast-1', 'ap-northeast-2', 'eu-central-2', 'ap-south-1', 'af-south-1', 'us-west-2', 'ca-west-1'] `
