---
title: "Scheduling the Backup of the Reporting Database"
source: "/space/nios90/1356857465"
pageId: "1356857465"
---
- From the **Infoblox Grid** tab, select **Backup** -> **ReportingBackup** -> **ScheduleBackup** from the Toolbar.
- In the *ScheduleReportingBackup* editor, complete the following:
  
  - **Status**: Displays the status of the backup process of the last operation. Select the destination of the backup file from the **Backupto** drop-down list**:**
  - **FTP**: Back up the reporting database files to an FTP server.
    
    - **IP Address of FTPServer**: The IP address of the FTP server.
    - **Directory Path**: Enter the directory path. For example, you can enter **/archive/backups**. The directory path cannot contain spaces. The folder or directory you enter here must already exist on the specified server. Do not include the file name in the directory path.
    - **Username**: Enter the username of your FTP account.
    - **Password**: Enter the password of your FTP account.
    - **Recurrence**: Select how often you want to back up the files. You can select **Weekly**, **Daily**, or **Hourly** from the drop-down list. When you select **Weekly**, complete the following:
      
      - **Every:** Choose a day of the week from the drop-down list.
      - **Time**: Enter a time in the hh:mm:ss AM/PM format. You can also click the clock icon and select a time from the drop-down list. The Grid Master creates a backup file on the selected day and time every week.  
        When you select **Daily**, enter a time in the hh:mm:ss AM/PM format. You can also select a time from the drop-down list.  
        When you select **Hourly**, complete the following:
      - **Minutes after the Hour**: Enter the minute after the hour when the Grid Master creates a backup file. For example, enter 5 if you want the Grid Master to create a backup file five minutes after the hour every hour.
    - **Disable Scheduled Backup:** Select this if you want to disable automatic backups from occurring now, but want to save the settings for future use.
  - **SCP**: Back up the reporting database to an SSH server that supports SCP.
    
    - **IP Address of SCP Server**: The IP address of the SCP server.
    - **Directory Path**: Enter the directory path of the file. For example, you can enter **/archive/backups**. The directory path cannot contain spaces. The folder or directory you enter here must already exist on the specified server. Do not include the file name in the directory path.
    - **Username**: Enter the username of your SCP account.
    - **Use Keys**: If you select this checkbox, you can back up files to SCP without entering the password. The first time you select the checkbox, you need to enter the password. However, during subsequent times, the Infoblox server verifies whether Infoblox keys are available on the SCP server. If they are available, you can click the **Backup** button without entering the password. If Infoblox keys are not available on the SCP server, the following message is displayed:  
      `Reporting backup has failed.`
    - **Password**: Enter the password of your SCP account.
    - **Keys Type**: Select the SSH key type to be uploaded. At present, only ECDSA and RSA keys are supported. Click **Upload Keys** to upload the keys to the SCP server. If the keys are not available, click **Download Keys** to download the keys and manually add them to the SCP server.
    - **Recurrence**: Select how often the scheduled backups should occur. You can select **Weekly**, **Daily**, or **Hourly**. For information, see the FTP section.
    - **Disable Scheduled Backup:** Select this if you want to disable automatic backups from occurring now. You can still save the settings for future use.

> **warning**
>
> ### Notes
> 
> - If you are using Fedora, ECDSA keys are supported only on Fedora versions later than Fedora 12.
> - When you select **FTP** or **SCP**, ensure that you have a valid user name and password on the server prior to backing up the files. Also ensure that the target SSH server has the required permissions for an SCP backup. The permission must be 755 and the target server must have write permission to the directory to which you upload the backup file.
> - For an SCP backup, ensure that you are logged in as the user for whom the key was created. Also ensure that the .ssh directory on the server and the files it contains, have the correct permissions: `chmod 600 ~/.ssh/authorized_keys && chmod 700 ~/.ssh/`
> - If you promote a Grid Master or perform an HA failover, you must upload the SSH key once again for a successful SCP backup using keys.
