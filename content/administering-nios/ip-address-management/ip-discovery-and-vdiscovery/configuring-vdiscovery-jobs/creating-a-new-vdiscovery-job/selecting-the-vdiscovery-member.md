---
title: "Selecting the vDiscovery Member"
source: "/space/nios90/1468499160"
pageId: "1468499160"
---
To create a new or modify an existing vDiscovery job:

1. For a new vDiscovery job: From the **Data** **Management** tab, select the **IPAM** tab, then select **vDiscovery** -> **New** from the Toolbar; or from the **Cloud** tab, select **vDiscovery** -> **New** from the Toolbar.  
   or  
   To modify an existing job: From the **Data** **Management** tab, select the **IPAM** tab and click **vDiscovery** -> **Discovery** **Manager** from the Toolbar, or from the **Cloud** tab, select **vDiscovery** -> **Discovery** **Manager** from the Toolbar. In the **vDiscovery** **Job** **Manager** editor, click the Action icon next to a selected job and select **Edit** from the menu.
2. In *Step 1 of 5* of the v*Discovery* *Job* wizard or in the **General** tab of the *vDiscovery* *Job* *Properties* editor, complete the following:
   
   - **Job** **Name**: Enter the job name for this vDiscovery. It might be helpful to use a name that is unique to this specific discovery if you plan to configure multiple vDiscovery jobs. You cannot update the job name after the vDiscovery job is run for the first time.  
     **Note**: NIOS does not support the use of special characters /, \, ", or ? in the name of a vDiscovery job created to discover entities in AWS and Google Cloud environments. A vDiscovery job will fail if you use any of the unsupported characters in its name.
   - **Member**: Click **Select** to choose the Grid member that will perform the vDiscovery job. If only a single member is active, the appliance name automatically appears here. When you select a Cloud Platform Appliance to perform vDiscovery, it communicates directly with the CMPs to obtain information that is not available through the provisioning process from the cloud adapter.  
     If multiple members active, You can also use one of the following ways to find a specific member:
     
     - Click the **Show Filter** link and use the filters as defined in [*Using Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343292634)
     - Type the first few letters or the full name of the member in the **Find** field, and then click **Go**.
   - **Comment**: Enter information to describe this discovery.  
     The new job will not execute until you have completed all configuration steps in the wizard. You will not be able to save this job until you have completed all job settings.
3. Click **Next** to select an endpoint server on which you want to perform the vDiscovery job, as described in *Selecting*[* *](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/704348239/Configuring+vDiscovery+Jobs#SelectingtheEndpointServer)*the*[* *](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/704348239/Configuring+vDiscovery+Jobs#SelectingtheEndpointServer)*Endpoint*[* *](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/704348239/Configuring+vDiscovery+Jobs#SelectingtheEndpointServer)*Server* below, or save the configuration after you have modified data on this tab.
