---
title: "Viewing CSV Import Jobs"
source: "/space/nios90/1455325532"
pageId: "1455325532"
---
You can view the status of import jobs. To view the status:

1. From the **Data Management** tab, click **CSV Job Manager** from the Toolbar.
2. In the **CSV Job Manager** wizard, click **CSV Import**. Grid Manager displays the following information about the import jobs that were submitted in the past 30 days:
   
   - **User Name**: The admin user who submitted the CSV import. Only superusers can view this column.
   - **Status**: The current status of the import job. The status can be one of the following:
     
     - **Import successful**: The import is completed without errors. Check the **Message** field for information about the import.
     - **Import unsuccessful**: The import is completed, but with errors. Check the **Message** field for information about the error message.
     - **Import pending**: The job is in queue for execution.
     - **Import inprogress**: The job is being executed.
     - **Import stopped**: The job has been stopped. You can select the job and restart the import.
     - **Test successful**: Test is completed without errors. Check the **Message** field for information about the test.
     - **Test unsuccessful**: Test is completed, but with errors. Check the **Message** field for information about the error message.
     - **Test pending**: Test is in queue for execution.
     - **Test inprogress**: Test is in progress.
     - **Test stopped**: Test has been stopped. You can select the job and restart the import.
     - **Saved file**: The data file has been uploaded, but the import has not started.  
       Note that after a product restart, which can be caused by a failover, all **Import** **in** **progress** jobs go into **Import** **stopped** state; all **Import** **pending** jobs continue to be queued for execution
   - **Submitted**: The timestamp when the job was submitted.
   - **Completed**: The timestamp when the job was completed. This field is blank if the job has not been completed yet.
   - **File Name**: The CSV data file name.
   - **Message**: This field displays the number of rows of data that have been processed and the number of rows of data the import has detected errors. Depending on the import options, Grid Manager displays the row number at which it stops the import when it encounters an error, or the total number of rows it has processed by skipping over the erroneous data. For example, if there are 100 rows of data and you select "On error: Stop importing," and there is an error in row 90, the appliance displays 90 of 100 completed, 1 error. If you select "On error: Skip to the next row and continue," the appliance displays **100 of 100 completed, 1 error**.
   - **FileSize**: The size of the imported CSV file.

> **custom**
>
> Superusers can view all CSV import jobs and limited-access users can view only the jobs they submitted.
