---
title: "Managing vDiscovery Jobs"
source: "/space/nios90/1468630027"
pageId: "1468630027"
---
You can view all configured vDiscovery jobs or modify some of the settings for selected ones in the **vDiscovery** **Job** **Manager**. You can also add a new vDiscovery job by clicking the Add icon.  
To view or modify vDiscovery jobs:

1. From the **Data** **Management** tab, select the **IPAM** tab, then select **vDiscovery** -&gt; **Discovery** **Manager** from the Toolbar; or from the **Cloud** tab, select **vDiscovery** -&gt; **Discovery** **Manager** from the Toolbar.
2. The appliance displays the following information in the **vDiscovery** **Job** **Manager**:
   
   - **Name**: The name of the vDiscovery job.
   - **Status:** The current status of the vDiscovery job. Grid Manager displays an icon and descriptive information about the status. You can hover you mouse over the icon to view the current status, as follows:
     
     - **Job created**: The configured job has been created.
     - **Job starting**: Starting the configured job.
     - **Job in progress**: The job is being executed at the moment.
     - **Job completed**: The job is completed successfully.
     - **Cancelled**: The job was cancelled while it was being executed.
     - **Error while running job**: The job has failed.   
       If the "ERROR: PycURL error: (60, 'SSL certificate problem: unable to get local issuer certificate')" error message is displayed, it means that the certificate has expired or is invalid. You need to remove the expired or invalid certificate and upload a new one. If the error is displayed for an AWS vDiscovery job, download the certificates from [https://www.amazontrust.com/repository/](https://www.amazontrust.com/repository/)  and upload them. If it is displayed for an Azure vDiscovery job, follow the instructions in the Azure documentation to generate a root certificate for Azure and upload it to NIOS. For information about uploading certificates, see [*Managing Certificates*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates).
   - **Schedule**: Displays the configured schedule for the selected job.
   - **Public** **IP's** **Network** **View**: The name of the network view to which discovered data for public IP addresses belongs.
   - **Private** **IP's** **Network** **View**: The name of the network view to which discovered data for private IP addresses belongs.
   - **Member**: The Grid member that performs the vDiscovery job.
   - **Last** **Run**: The timestamp when the selected vDiscovery job was last performed.
   - **Comment**: Comments added when the vDiscovery job was created
3. Click the Action icon
   
   
   
   next to a selected job, and you can do one of the following:
   
   - **Edit**: Modify the vDiscovery job settings in the *vDiscovery* *Job* *Properties* editor. The editor displays the following tabs: **General**, **Endpoint**, **Network** **View**, **Data** **Consolidation**, and **Schedule**. Click the tab that contains information you want to modify, and then modify the information as described in Configuring vDiscovery Jobs above.
   - **Delete**: Remove the vDiscovery job from the list.
   - **Start**: Start vDiscovery now for the selected job. The appliance might display an AMQP error when you first start a newly created vDiscovery job. This is due to the start-on-demand mechanism experiencing a delay in executing the job. Wait a few seconds and start the job again.
   - **Stop**: Stop and terminate the vDiscovery job that is in progress. You cannot resume this discovery once you stop it. All discovered data remains intact in the database.
4. Click **Close** to close the **vDiscovery** **Job** **Manager**.
