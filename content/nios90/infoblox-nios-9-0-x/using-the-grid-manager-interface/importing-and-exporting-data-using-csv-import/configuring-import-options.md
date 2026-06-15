---
title: "Configuring Import Options"
source: "/space/nios90/1455358214"
pageId: "1455358214"
---
You can import CSV files and perform various operations to update the data in the database. You can choose from several import options: add, override, merge, delete, and replace. You can add new rows from the imported file to the database, overwrite existing rows in the database, append rows to the existing rows in the database, delete existing rows in the database, or replace the existing rows in the database. You can verify whether the data in the imported file is appropriate using the **Test** option before you import the file to the database. You can also view the results and progress details of the operation.  
To import a CSV file, complete the following:

1. From the **Data Management** tab, click **CSV Job Manager** from the Toolbar.
2. In the *CSV Job Manager* wizard, select **CSV Import** and click the New CSV import job icon.
3. In the *New CSV Import Wizard*, complete the following:
   
   - **Type of Import**  
     **For** **all** **supported** **objects** **(including** **zones)**
     
     - **Add**: Select this to add new rows from the imported CSV file to the database. NIOS updates the database with the new data that you have added to the imported CSV file and retains the rows that do not have any changes.
     - **Override**: Select this to overwrite the existing data in the database with the data from the uploaded file. You cannot add new rows or delete existing rows. If you want to overwrite values in the required fields, you must include the required fields and the corresponding _NEW_XXXX fields in the data file.
     - **Merge**: Select this to add values from the imported CSV file to the existing columns in the database that do not have any data. It does not overwrite the existing data, even if the data file contains new values for certain fields. If you want to overwrite values in the required fields, you must include the required fields and the corresponding _NEW_XXXX fields in the data file.
     - **Delete**: Select this to delete the rows in the imported CSV file from the database.
     - **Custom**: Select this to apply custom import actions for individual data rows in your CSV file. When preparing the CSV file for import with the **Custom** option, add an **IMPORT-ACTION** column to the file and specify a custom import action for each data row. Use the following abbreviations for import actions: 'I' (INSERT), 'M' (MERGE), 'O' (OVERRIDE), 'IM' (INSERT+MERGE), 'IO' (INSERT+OVERRIDE), 'D' (DELETE).
   - **For** **zones** **only**
     
     - **Replace**: Select this to replace the contents of the database with data provided in the CSV file. NIOS cancels the replace operation and will not save the changes if it encounters an error. You can replace the DNS records of a zone by importing a zone file that was exported previously. You can only replace DNS records that are manually created. NIOS generates a results file listing the file name, action performed, date and time, and result at the end of the validation. You can view the results file only after the replace operation is complete. NIOS generates the backup file automatically for every replace operation and saves it in the Infoblox Grid. Note that the CSV file must contain data for one authoritative zone only, that is, you cannot insert records from different authoritative zones into a single CSV file for replace operation.
       
       Note: The replace operation might affect system performance if you try to replace a zone with a lot of changes. Infoblox recommends that you perform the replace operation for large import files (more than 10,000 rows of changes) during non-peak hours. This operation ignores _new_XXX fields in the imported CSV files.
4. Click **Next** to import the CSV file.
   
   - **Import Type**: Displays the type of import option you have selected.
   - Click **Choose** and select the CSV file that you want to import, and then click **Open**.
   - **On** **Error:** Select one of the following to tell the appliance what to do when it encounters an error during an import:
     
     - **Stop import**: Select this to stop the data import once it encounters an error in the uploaded file. Grid Manager displays the row number at which it stops the import when it encounters an error. NIOS saves the changes made to the CSV file before an error occurs. For example, if there are 100 rows of data and you select this option, and there is an error in row 90, the appliance displays **90 of 100 completed, 1 error**.
     - **Skip to the next row and continue**: Select this to skip over errors and continue the data import. You can download an error report to identify the erroneous data. NIOS displays the total number of rows it has processed by skipping over. For example, if there are 100 rows of data and you select this option, the appliance displays **100 of 100 completed, 1 error**.
5. Click **Next** to preview your CSV file. In the File Preview table, Grid Manager displays the header row, the first six rows, and up to 15 columns of the imported data. You cannot edit the data here. Field names with asterisks :yellow_star: indicate required fields. Note that you must define these fields in the imported file. If any of the required fields are missing, the appliance generates an error during the import operation. You can do the following in this wizard:
   
   - **Import type**: The type of import option you have selected.
   - **Filename**: The name of the CSV file you have selected.
   - **Separator**: Select a separator for your CSV file from the drop-down list. The default value is **Comma**.
   - **OnError**: The option you have selected.
6. Click **Test** to verify the content in your CSV file. Click **Yes** in the *Test CSV Import for Replace Operation* dialog box to verify the content or click **No** to cancel the operation.  
   NIOS automatically analyzes the data in the imported file for any syntax errors or other violations. You can also view a detailed report of the file that you are importing. Note that you can run the test as a background task. This report also displays information about the number of deleted, updated and added files. It also displays error messages, if any. NIOS generates a results file listing the file name, action performed, date and time, result, and the number of failures at the end of the validation. You can view the results file only after the replace operation is complete.
   
   Note that the **Test** button is enabled only when you select the **Replace** operation and is disabled for other import options.
7. Click **Import** to import the CSV file to the database. Click **Yes** in the dialog box to import the CSV file or **No** to cancel the operation.
8. You can view the progress and results of your import operation in the *CSV Import Progress* wizard. This wizard displays the following information:
   
   - **Import type**: The type of import option you have selected.
   - **Filename**: The name of the CSV file you have selected.
   - **Separator**: The separator you have selected for your CSV file. The default value is **Comma**.
   - **On Error**: The option you have selected when the import operation encounters an error.
   - **Current status**: If an import is in progress, this field displays its current status. Otherwise, it displays the date and time of the last import.
   - **Last action**: Displays the last operation and the admin who initiated it.
   - **Rows Completed:** The number of rows of data the import has processed. Depending on the import options, Grid Manager displays either the row number at which it stops an import when it encounters an error or the total number of rows it has processed by skipping over the erroneous data. For example, if there are 100 rows of data and you select "On error: Stop importing," and there is an error in row 90, Grid Manager displays **90 of 100** here. If you select "On error: Skip to the next row and continue," Grid Manager displays **100 of 100** here and displays **1** in **Rows with Errors**.
   - **Rows** **with** **Errors:** The number of rows of data the import has detected errors. Click **Download** **Errors** to download the CSV file that contains the fields and the rows of erroneous data. You can use this report as a reference to update the data file before you import the file again.
9. You can also perform the following actions if needed:
   
   - To cancel the import operation, click **Stop** **Import** before the operation is complete.
   - To close the wizard and execute the operation in the background, click **Close** **&** **Run** **in** **Background**.
   - When the operation is complete, you can click **Download** **errors** to download and view the errors. The **Download** **errors** button is enabled only if the operation encounters errors.
   - Click **Save** **&** **Close** to save the operation and close the wizard.

> **warning**
>
> ### Note
> 
> Superusers can view all CSV import jobs and limited-access users can view only the jobs they submitted.
