---
title: "CSV Import Manager"
source: "/space/nios90/1456866678"
pageId: "1456866678"
---
The **CSV** **Import** **Manager** on the Status Dashboard displays the status of CSV import jobs you have submitted. You can start a file import from **CSV** **Import** **Manager** and control and monitor it from this widget. You can also launch **CSV** **Import** **Manager** from the Task Dashboard or the Toolbar. You can also delete uploaded CSV files. For more information, see [*Importing and Exporting Data using CSV Import*](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Importing%20and%20Exporting%20Data%20using%20%20CSV%20Import&linkCreation=true&fromPageId=1456866678). You can click the Refresh icon or configure auto refresh to update the status.

The widget displays the following information about the import jobs that were submitted in the past 30 days:

- **User** **Name**: The admin user who submitted the CSV import. Only superusers can view this column.
- **Status**: The current status of the import job. The status can be one of the following:
  
  - **Import successful**: The import is completed without errors. Check the **Message** field for information about the import.
  - **Import unsuccessful**: The import is completed, but with errors. Check the **Message** field for information about the error message.
  - **Import pending**: The job is in queue for execution.
  - **Import in progress**: The job is being executed.
  - **Import stopped:** The job has been stopped. You can select the job and restart the import.
  - **Test successful**: Test is completed without errors. Check the **Message** field for information about the test.
  - **Test unsuccessful:** Test is completed, but with errors. Check the **Message** field for information about the error message.
  - **Test pending**: Test is in queue for execution.
  - **Test in progress**: Test is in progress.
  - **Test stopped**: Test has been stopped. You can select the job and restart the import.
  - **Saved file**: The data file has been uploaded, but the import has not started.  
    Note that after a product restart, which can be caused by a failover, all **Import** **in** **progress** jobs go into **Import** **stopped** state; all **Import** **pending** jobs continue to be queued for execution.
  - **Submitted**: The timestamp when the job was submitted.
  - **Completed**: The timestamp when the job was completed. This field is blank if the job has not been completed yet.
  - **File Name**: The CSV data file name.
  - **Message**: This field displays the number of rows of data that has been processed and the number of rows of data the import has detected errors. Depending on the import options, Grid Manager displays the row number at which it stops the import when it encounters an error, or the total number of rows it has processed by skipping over the erroneous data. For example, if there are 100 rows of data and you select "On error: Stop importing," and there is an error in row 90, the appliance displays **90of100completed,1error**. If you select "On error: Skip to the next row and continue," the appliance displays **100 of 100 completed, 1 error**.
  - **File Size**: The CSV data file size.

> **warning**
>
> ### Note
> 
> Superusers can view all CSV import jobs and limited-access users can view only the jobs they submitted.
