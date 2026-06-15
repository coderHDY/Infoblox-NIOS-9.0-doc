---
title: "Restoring the Reporting Database"
source: "/space/nios90/1356955825"
pageId: "1356955825"
---
Restoring the reporting database may take a long time to perform, and the reporting service is unavailable during a restore. Ensure that you back up the reporting database before you perform the operation. Restoring of reporting database from an FTP or SCP server using IPv4 or IPv6 is supported.  
Note the following during a restore:

- The reporting service is unavailable.
- Existing reporting data is removed from the reporting server.
- Backup data is restored up to the amount the reporting server can accommodate.  
  The Volume Used Today displayed in the Device Information section will not be updated after restoring the data. Also, when you restore data or execute the CLI command reset reporting_data, the volume violation count will be reset to zero on the second day.

1. From the **Infoblox** **Grid** tab, select **Restore** -> **Restore** **Reporting** from the Toolbar.
2. In the *Restore* dialog box, complete the following:
   
   - **Status**: Displays the status of the restore process, if in progress.
     
     Select the destination of the backup file from the **Restore** **from** drop-down list**:**
   - **FTP**: Restore the reporting backup files from an FTP server.
     
     - **Filepath**: Enter the directory path. For example, you can enter **/archive/backups/Infoblox/**.
     - **IP Address of FTP Server**: The IP address of the FTP server.
     - **Username**: Enter the username of your FTP server account.
     - **Password**: Enter the password of your FTP server account.
   - **SCP**: Restore the reporting backup files from a SCP server.
     
     - **Filepath**: Enter the directory path. For example, you can enter **/archive/backups/Infoblox/**.
     - **IP Address of SCP Server**: The IP address of the SCP server.
     - **Username**: Enter the username of your SCP server account.
     - **Password**: Enter the password of your SCP server account.
3. Click **Restore**.
