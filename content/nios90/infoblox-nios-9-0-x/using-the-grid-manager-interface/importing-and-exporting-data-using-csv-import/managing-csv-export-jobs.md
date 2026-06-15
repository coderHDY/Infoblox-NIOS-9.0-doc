---
title: "Managing CSV Export Jobs"
source: "/space/nios90/1455292862"
pageId: "1455292862"
---
You can view the list of CSV export operations using the **CSV** **Job** **Manager**.

1. From the **Data Management** tab, click **CSV Job Manager** from the Toolbar. In the *CSV Job Manager* wizard, click **CSV Export**.
2. Grid Manager displays the following information:
   
   - **User Name**: The admin user who submitted the CSV export. Only superusers can view this column.
   - **Status**: The current status of the export job. The CSV export process runs in an asynchronous mode similar to the CSV import. The status can be one of the following:
     
     - **Export pending**: The job is in queue for execution.
     - **Export running**: The job is being executed.
     - **Export stopped**: The job has been stopped. You can select the job and restart the export.
     - **Export completed**: The export is completed without errors. Check the **Message** field for information about the export.
     - **Export failed**: The export is completed, but with errors. Check the **Message** field for information about the error message.
   - **Submitted**: The timestamp when the job was submitted.
   - **Completed**: The timestamp when the job was completed. This field is blank if the job has not been completed yet.
   - **Failed Description**: The appliance displays the error message in the **Failed Description** column if the CSV export fails. You cannot start a failed CSV export task.
   - **File Size**: The size of the generated CSV file.

Completed CSV export jobs are deleted 30 days from the date of submission. You can also perform the following operations:

- Select a completed CSV export task and download the exported file.
- Cancel or stop a pending CSV export task using the **Delete** option.
- Purge all export tasks after an upgrade or restore.
- Start a new global CSV export job.
