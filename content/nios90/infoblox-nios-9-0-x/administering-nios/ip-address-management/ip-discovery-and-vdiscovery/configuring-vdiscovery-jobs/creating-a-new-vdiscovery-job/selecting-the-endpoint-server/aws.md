---
title: "AWS"
source: "/space/nios90/1468499208"
pageId: "1468499208"
---
Starting from NIOS 9.0.4, you can configure the vDiscovery job to run in a single or multiple regions and discover data from multiple accounts of an AWS organization as discussed in this section.  
For more information about vDiscovery, see the *vDiscovery on AWS VPCs* topic in the [*Installation Guide for VNIOS for AWS*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances).  
Complete the following:

- **GovCloud**: Select the option if the region in which you want to run vDiscovery is on a Gov cloud. This option cannot be edited once the vDiscovery job is created. It can be defined only when creating a new job.
- **Credentials**: Select the method you want to use to authenticate the connection between the Grid member and AWS for discovery jobs. You can select one of the following:
  
  - **Use** **instance** **profile**: An instance profile is a container for an IAM role that you can use to pass the role information to an EC2 instance when the instance is up and running. Select this option if you want to collect the information from AWS by waiving a user's credentials and using configuration of a predefined IAM role to get a temporary token that allows API calls. Note that you must first configure the option for "instance profile" in AWS, define an IAM role in the instance profile, and then set permissions for this role before you can select this option. Otherwise, this option is disabled. When you select this, you do not need to provide user credentials. For more information about instance profiles and IAM roles, refer to the AWS documentation.
  - **Use** **IAM** **credential**: Select this if you want to authenticate by using IAM roles to grant secure access to AWS resources from your EC2 instances. Click **Select** to choose the IAM role and use its credentials to access AWS resources from your EC2 instances when they are up and running.
    
    - **Access** **Key** **ID** and **Secret** **Access** **Key**: Enter the Access Key ID and Secret Access Key for the AWS service endpoint. This is the secret key pair for the administrator account that executes the discovery job. For more information, refer to the [*Infoblox*](https://docs.infoblox.com/space/NAIG/22413317/Installation+Guide+for+vNIOS+for+AWS)[ ](https://docs.infoblox.com/space/NAIG/22413317/Installation+Guide+for+vNIOS+for+AWS)[*Installation*](https://docs.infoblox.com/space/NAIG/22413317/Installation+Guide+for+vNIOS+for+AWS)[ ](https://docs.infoblox.com/space/NAIG/22413317/Installation+Guide+for+vNIOS+for+AWS)[*Guide*](https://docs.infoblox.com/space/NAIG/22413317/Installation+Guide+for+vNIOS+for+AWS)[ ](https://docs.infoblox.com/space/NAIG/22413317/Installation+Guide+for+vNIOS+for+AWS)[*for*](https://docs.infoblox.com/space/NAIG/22413317/Installation+Guide+for+vNIOS+for+AWS)[ ](https://docs.infoblox.com/space/NAIG/22413317/Installation+Guide+for+vNIOS+for+AWS)[*vNIOS*](https://docs.infoblox.com/space/NAIG/22413317/Installation+Guide+for+vNIOS+for+AWS)[ ](https://docs.infoblox.com/space/NAIG/22413317/Installation+Guide+for+vNIOS+for+AWS)[*for*](https://docs.infoblox.com/space/NAIG/22413317/Installation+Guide+for+vNIOS+for+AWS)[ ](https://docs.infoblox.com/space/NAIG/22413317/Installation+Guide+for+vNIOS+for+AWS)[*AWS*](https://docs.infoblox.com/space/NAIG/22413317/Installation+Guide+for+vNIOS+for+AWS).
- **Regions**: From the list of regions that are retrieved from AWS and saved in the NIOS database, select the regions in which the vDiscovery job must run. You can run vDiscovery on one or multiple regions of an account. To know if any new regions are added to the displayed list, run the [*set refresh_supported_cloud_regions*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-refresh-supported-cloud-regions) command.
  
  - To select a region, click a region in the **Available** list and click the **&gt;** arrow to move it to the **Selected** list. Select multiple fields by using SHIFT-click or CTRL-click.
  - If you enabled the **GovCloud** option, then regions that are set up only on AWS Gov cloud are displayed.
- **Multiple Account Sync** If you want data to be discovered from multiple AWS accounts of an organization, select this option and configure the following settings:
  
  - **Role ARN**: Enter the ARN (Amazon Resource Name) of the role that you configured in your AWS management account.
  - **Multi Account Options**: You can set the data of all child accounts of an AWS organization to be synchronized or specify the accounts from which data must be synchronized.  
    Select one of the following options:
    
    - **Discover Child Accounts**: Select this option if you want a sync task to discover and synchronize data from all child accounts of an AWS organization to which the specified role ARN belongs.  
      If you want to discover data from accounts or folders outside of the current organization, configure the child accounts as detailed in the [*Setting up Member Account*](https://infoblox-docs.atlassian.net/wiki/spaces/NAIGdraft/pages/247070758) section, and then use the **Add or Upload Child Accounts** option to specify the accounts for vDiscovery.
    - **Add or Upload Child Accounts**: Select this option to specify the list of child accounts that a sync task must discover and synchronize data from. To define the list, do one of the following:  
      Note that the multi-account sync option synchronizes data from the specified child accounts and also their parent AWS Management account for which you specified the role ARN.
      
      - Upload a CSV file:
        
        1. Click the **Import** icon.
        2. In the *Upload* dialog box, click **Select** to browse for the CSV file containing the list of account IDs of child accounts you want to add.
        3. Select the file and click **Open**.
        4. Click **Upload** to upload the file, and then click **Close**.
      - Manually specify the account IDs of child accounts from which resources must be discovered and synchronized. Repeat the following steps for every account that you want to add:
        
        1. Click the **Add** icon to add a row in the *Account IDs* table.
        2. Click the new row and specify the account ID of a child account.

If your vNIOS instance is running on a version that is prior to NIOS 9.0.4, complete the following:

- **Service** **Endpoint**: This is typically the regional service endpoint for the desired Amazon region.  
  Example: [http://ec2.us-west-1.amazonaws.com](http://ec2.us-west-1.amazonaws.com) . For more information about AWS service endpoints, refer to the *Infoblox* *Installation* *Guide* *for* *vNIOS* *for* *AWS*, available on the Infoblox Support site. For a list of available AWS service endpoints, see  [https://docs.aws.amazon.com/general/latest/gr/ec2-service.html](https://docs.aws.amazon.com/general/latest/gr/ec2-service.html)
- **Port**: Enter the port you want to use for the vDiscovery job.
- **Protocol**: The protocol used for AWS is always over SSL. AWS provides certificates that is linked to the CA. By default, this certificate is embedded in NIOS and used as a reference for the CA when connecting to AWS. You can also upload a new certificate as described in [*Managing Certificates*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates). If you upload a new certificate, the embedded certificate will be overwritten by the new one.
- **Allow** **unsecured** **connection**: This option is not applicable for AWS connection.
- **Credentials**: Select the method you want to use to authenticate the connection between the Grid member and AWS for discovery jobs. You can select one of the following:
  
  - **Use** **instance** **profile**: An instance profile is a container for an IAM role that you use to pass role information to an EC2 instance when the instance is up and running. Select this option if you want to collect information from AWS by waiving a user's credentials and using configuration of a predefined IAM role to get a temporary token that allows API calls. Note that you must first configure the option for "instance profile" in AWS, define an IAM role in the instance profile, and then set permissions for this role before you can select this option. Otherwise, this option is disabled. When you select this, you do not need to provide user credentials.
  - **Use** **IAM** **credential**: Select this if you want to authenticate by using IAM roles to grant secure access to AWS resources from your EC2 instances. Click **Select** to choose the IAM role and use its credentials to access AWS resources from your EC2 instances when they are up and running.  
    **Access** **Key** **ID** and **Secret** **Access** **Key**: Enter the Access Key ID and Secret Access Key for the AWS service endpoint. This is the secret key pair for the administrator account that executes the discovery job. For more information, refer to the *Infoblox* *Installation* *Guide* *for* *vNIOS* *for* *AWS*, available on the Infoblox Support site.

For more information about instance profiles and IAM roles, refer to the AWS documentation.
