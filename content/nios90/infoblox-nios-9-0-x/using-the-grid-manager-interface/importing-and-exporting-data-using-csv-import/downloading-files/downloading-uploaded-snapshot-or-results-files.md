---
title: "Downloading Uploaded, Snapshot, or Results Files"
source: "/space/nios90/1455522048"
pageId: "1455522048"
---
You can view the uploaded, result, and snapshot files. The snapshot and results files are enabled only for replace operation.

To download the file, complete the following:

1. From the **Data Management** tab, click **CSV Job Manager** from the Toolbar.
2. In the *CSV Job Manager* wizard, select **CSV Import** and select the import job that you want to download, click the Action icon and select **Edit**.
3. In **Edit - CSV Import Job**, click the arrow beside the **Download** option and select one of the following:
   
   - **Uploaded File**: Select this to download the uploaded CSV import file. The uploaded report displays the content of the imported file, before it was uploaded, that is before the content of the database is changed.
   - **Snapshot File**: Select this to download the backup file. NIOS automatically creates a backup of the database before replacing the content of the database with the content in the imported CSV file. This option is enabled only for the replace operation. NIOS generates an error message and saves it in the syslog and the infoblox.log file when the backup file is not generated. You can download the backup file after the replace operation is complete. NIOS saves the backup file and other results file in the Grid for a period of 30 days. The name of the backup file has the following format:  
     `csv-snapshot-10-\[view\]-\[zone\]-\[timestamp\].csv where 10 is the import ID of the CSV import task, view is the DNS view name, zone is the FQDN of the zone being replaced and timestamp is the timestamp at when the file is generated.`
   - **Results** **File**: Select this to download the results file. The file displays the content of the database after the content of the file replaced the content of the database. You can view the results file only after the replace operation is complete.

You can export these files to your local system.
