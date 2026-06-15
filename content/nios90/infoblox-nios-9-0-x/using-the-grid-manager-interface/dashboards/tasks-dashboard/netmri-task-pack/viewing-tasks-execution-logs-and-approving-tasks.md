---
title: "Viewing Tasks Execution Logs and Approving Tasks in the Task Viewer"
source: "/space/nios90/1345063014"
pageId: "1345063014"
---
You can view the logged results from any task run from the **Automation Tasks** panel through Grid Manager's Task Viewer that displays the following pages:

- **Job History**: Provides a log history of all NetMRI tasks that have recently run, including all automation task types in the dashboard.
- **Issues & Approvals**: Provides links to two important items:
  
  - **Issue Details**: Displays details about any network issue related to NetMRI tasks and jobs in an Issue Viewer from the NetMRI appliance.
  - **Approve Jobs**: These are jobs that must be approved before the NetMRI appliance can execute the job. For example, the **Isolate Rogue DHCP Server **job must be approved before it will run and attempt to isolate the detected rogue DHCP server in the network.

To view and approve tasks:

1. From the **Dashboards** tab, select the **Tasks** tab.
2. In the **Automation Tasks** panel, click the down arrow icon on the right and select **Task Viewer**.   
   The Task Viewer window appears, displaying a scrollable and sortable Job History table. Important columns include the **Start Time**, the** Job ID **(a numeric value with a clickable link to the TAE Job Details Viewer, which will open in a new browser tab), the **Job Name**, the **User **account that executed the task, the job **Status **and the **# Devices **(the number of devices) against which the task ran. The Job History page shows the most recent subset of executed NetMRI jobs. A yellow bar at the top of the table provides a **click here to see more** link, which takes the user to the NetMRI appliance** Job History** page in a new browser tab.
3. If an item appears in the** Issues & Approvals** page, do one of the folllowing in the **Action** column:  
   a. To view an issue in more detail, click an **Issue Details** link. This displays the NetMRI appliance Job Details page in a new browser tab for the selected job.  
   b. To approve a job, click an **Approve Job** link. This displays the **Summary** page of the NetMRI Job Wizard. Click **Approve Job**.
4. Click **Close** to close the Task Viewer.
