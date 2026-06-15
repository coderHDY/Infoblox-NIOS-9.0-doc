---
title: "Deleting Uploaded Jobs"
source: "/space/nios90/1455325556"
pageId: "1455325556"
---
You can delete import jobs that are uploaded. You cannot delete jobs that are already imported. You can delete the content of a CSV file that you have imported to the database. Note that the CSV import files and the backed up files are saved for a period of 30 days, but the size limit is set to 1 GB. If these files increase in size, NIOS removes the older files from the Grid. NIOS generates a syslog message if it encounters an error when generating the backup file.

> **warning**
>
> ### Note
> 
> When you delete a parent object from the CSV file, the child objects associated with the parent objects are also deleted.

To delete uploaded jobs, complete the following:

1. From the **Data Management** tab, click **CSV Job Manager** from the Toolbar.
2. In the *CSV Job Manager* wizard, select **CSV Import** and select the import job that you want to delete, click the Action icon and select **Delete** or click the Delete pending job icon.
3. Click **Yes** to delete the uploaded job or **No** to cancel the operation in the *Cancel Import Job* wizard.
