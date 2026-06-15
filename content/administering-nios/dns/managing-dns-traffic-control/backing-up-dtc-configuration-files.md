---
title: "Backing Up DTC Configuration Files"
source: "/space/nios90/280664195"
pageId: "280664195"
---
Infoblox recommends that you regularly back up DTC configuration files. You can either schedule a backup to run at a designated date and time or you can manually back up the files. You can back up the DTC files to the following:

- A local directory
- A TFTP server
- An FTP server. This option requires that you have a valid username and password on the server prior to backing up files.
- An SSH server that supports SCP. This option requires that you have a valid username and password on the server prior to backing up files.

For information about these options, see [*Backing Up and Restoring Configuration Files*](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Backing%20Up%20and%20Restoring%20Configuration%20Files&linkCreation=true&fromPageId=280664195).

# Automatically Backing Up DTC Files

To automatically back up DTC configuration files:

1. From the **Grid** tab, select the **Grid ** **Manager** tab, and then click **Backup** -> **DTC Backup**  -> **Schedule** ** Backup** from the Toolbar.
2. In the *Schedule* *DTC Backup* dialog box, select the destination of the backup file from the **Backup** ** to** drop-down list:
   
   - **TFTP**: Back up system files to a TFTP server.
     
     - **Keep local copy**: Select this to also save a local copy of the backup file on your appliance. This is disabled by default. The local backup contains only the Grid backup, it does not contain backups for reporting and Network Automation. Note that when you select this, the total backup time will increase.
     - **IP ** **Address** ** of** ** TFTP ** **Server**: Enter the IP address of the TFTP server to which you want to back up the system files.
     - **Directory ** **Path**: Enter the directory path of the file. For example, you can enter **/archive/backups**. The directory path cannot contain spaces. The folder or directory you enter here must already exist on the specified server. Do not include the file name in the directory path.
     - **Recurrence**: Select how often you want to back up the files. You can select **Weekly**, **Daily**, or **Hourly** from the drop-down list. When you select **Weekly**, complete the following:
       
       - **Every:** Choose a day of the week from the drop-down list.
       - **Time**: Enter a time in the hh:mm:ss AM/PM format. You can also click the clock icon and select a time from the drop-down list. The Grid Master creates a backup file on the selected day and time every week.  
         When you select **Daily**, enter a time in the hh:mm:ss AM/PM format. You can also select a time from the drop-down list.  
         When you select **Hourly**, complete the following:
       - **Minutes** ** after ** **the ** **Hour**: Enter the minute after the hour when the Grid Master creates a backup file. For example, enter 5 if you want the Grid Master to create a backup file five minutes after the hour every hour.
     - **Disable ** **Scheduled ** **Backup:** Select this if you want to disable automatic backups from occurring now. You can still save the settings for future use.
   - **FTP**: Back up system files to an FTP server.
     
     - **Keep ** **local** ** copy**: Select this to also save a local copy of the backup file on your appliance. This is disabled by default. The local backup contains only the Grid backup, it does not contain backups for reporting and Network Automation. Note that when you select this, the total backup time will increase.
     - **IP** ** Address** ** of** ** FTP** ** Server**: The IP address of the FTP server.
     - **Directory** ** Path**: Enter the directory path of the file. For example, you can enter **/archive/backups**. The directory path cannot contain spaces. The folder or directory you enter here must already exist on the specified server. Do not include the file name in the directory path.
     - **Username**: Enter the username of your FTP account.
       
       Note if you have configured AD server for authentication, you must specify "domain name\\username".
     - **Password**: Enter the password of your FTP account.
     - **Recurrence**: Select how often the scheduled backups should occur. You can select **Weekly**, **Daily**, or **Hourly**.
     - **Every**: Choose a day of the week from the drop-down list.
     - **Disable** ** Scheduled** ** Backup:** Select this if you want to disable automatic backups from occurring now, but want to save the settings for future use.
   - **SCP**: Back up system files to an SSH server that supports SCP.
     
     - **Keep ** **local** ** copy**: Select this to also save a local copy of the backup file on your appliance. This is disabled by default. The local backup contains only the Grid backup, it does not contain backups for reporting and Network Automation. Note that when you select this, the total backup time will increase.
     - **IP** ** Address** ** of** ** SCP** ** Server**: The IP address of the SCP server.
     - **Directory ** **Path**: Enter the directory path of the file. For example, you can enter **/archive/backups**. The directory path cannot contain spaces. The folder or directory you enter here must already exist on the specified server. Do not include the file name in the directory path.
     - **Username**: Enter the username of your SCP account.
       
       Note if you have configured AD server for authentication, you must specify "domain name\\username".
     - **Password**: Enter the password of your SCP account.
     - **Recurrence**: Select how often the scheduled backups should occur. You can select **Weekly**, **Daily**, or **Hourly**. For information, see the TFTP section.
     - **Every**: Choose a day of the week from the drop-down list.
     - **Disable Scheduled Backup:**Select this if you want to disable automatic backups from occurring now. You can still save the settings for future use.
       
       When you select **FTP** or **SCP**, ensure that you have a valid user name and password on the server prior to backing up the files.
   - **Grid** **Master** **(local)**: Back up to a local directory on the Grid Master. This is the default.  
     By default, the Grid Master generates a backup file and saves it locally in its own storage at 3:00 AM daily.  
     Be aware that backing up the Grid and saving it locally on an hourly basis increases the turnover of files stored on the Grid Master. Backing it up hourly to a remote server increases the overall amount of traffic on your network.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

# Manually Backing Up DTC Files

You can manually back up DTC configuration files in addition to scheduling your backups. To back up manually:

1. From the **Grid** tab, select the **Grid** ** Manager** tab, and then click **Backup** -> **DTC Backup** -> **Manual** ** Backup** from the Toolbar.
2. In the *Manual DTC Backup* wizard, select the destination of the backup file from the **Backup ** **to** drop-down list:
   
   - **My** **Computer**: Back up system files to a local directory on your computer. This is the default.
   - **TFTP**: Back up system files to a TFTP server.
     
     - **Filename**: Enter the directory path and the file name of the backup file. For example, you can enter` /archive/backups/Infoblox_2009_10_20_15_30.`
     - **IP** ** Address** ** of ** **TFTP** ** Server**: Enter the IP address of the TFTP server to which you want to back up the system files.
   - **FTP**: Back up system files to an FTP server.
     
     - **Filename**: Enter the directory path and the file name of the backup file. For example, you can enter **/archive/backups/Infoblox_2009_10_20_15_30**.
     - **IP** ** Address** ** of** ** FTP** **Server**: The IP address of the FTP server.
     - **Username**: Enter the username of your FTP account.
       
       Note if you have configured AD server for authentication, you must specify "domain name//username".
     
     - **Password**: Enter the password of your FTP account.
   - **SCP**: Back up system files to an SSH server that supports SCP.
     
     - **Filename**: Enter the directory path and the file name of the backup file. For example, you can enter **/archive/backups/Infoblox_2009_10_20_15_30**.
     - **IP** ** Address ** **of** ** SCP** ** Server**: The IP address of the SCP server.
     - **Username**: Enter the username of your SCP account.
       
       Note if you have configured AD server for authentication, you must specify "domain name//username".
     
     - **Password**: Enter the password of your SCP account.
       
       When you select **FTP** or **SCP**, ensure that you have a valid username and password on the server prior to backing up the files.
3. Click **Backup**.

# Downloading DTC Backup Files

You can save an existing backup file, or create and save a new one to your local management system, a TFTP server, an FTP server, or a SCP server.  
To download an existing backup file:

1. From the **Grid** tab, select the **Grid** **Manager** tab, and the click **Backup** -> **DTC Backup** -> **Manage** **Local** **Backup** from the Toolbar. Grid Manager displays the current backup files in the *Manage* *Local* *Backups* dialog box.
2. To download a backup file, select the checkbox of a backup file, and then click the Transfer icon. You cannot select multiple files for downloading.
3. Select one of the following from the **Backup** **to** drop-down list:
   
   - **My** **Computer**: Backup to a local directory on your computer. This is the default.
   - **TFTP**: Save the backup file to a TFTP server.
     
     - **Filename**: Enter the directory path and the file name of the backup file. For example, you can enter `/archive/backups/Infoblox_2009_10_20_15_30         `.
     - **IP** **Address** **of** **TFTP** **Server**: Enter the IP address of the TFTP server to which you want to save the backup file.
   - **FTP**: Save the backup file to an FTP server.
     
     - **Filename**: Enter the directory path and the file name of the backup file. For example, you can enter `/archive/backups/Infoblox_2009_10_20_15_30.`
     - **IP** **Address** **of** **FTP** **Server**: The IP address of the FTP server.
     - **Username**: Enter the username of your FTP server account.
     - **Password**: Enter the password of your FTP server account.
   - **SCP**: Save the backup file to an SSH server that supports SCP.
     
     - **Filename**: Enter the directory path and the file name of the backup file. For example, you can enter**/archive/backups/Infoblox_2009_10_20_15_30**.
     - **IP** **Address** **of** **SCP** **Server**: The IP address of the SCP server.
     - **Username**: Enter the username of your SCP server account.
     - **Password**: Enter the password of your SCP server account.
       
       When you select **FTP** or **SCP**, ensure that you have a valid username and password on the server prior to backing up the files.
4. Click **Transfer** **Copy**.

# Restoring DTC Backup Files

You must log in with a superuser account to back up and restore files. NIOS provides three ways to restore a backup file:

- From a local directory or the management system you use to operate the appliance
- From a TFTP server
- From a remote server using FTP. This option requires that you have a valid username and password on the FTP server prior to performing a backup or restore.

> **warning**
>
> ### Note
> 
> When you restore NIC interfaces to a VM, ensure that you provision appropriate NIC interfaces with the database content that must be restored to avoid any errors.

To restore a DTC backup file to the same independent appliance or Grid Master:

1. From the **Grid** tab, select the **Grid** **Manager** tab, and then click **Restore** -> **Restore DTC **from the Toolbar.
2. In the *Restore* dialog box, choose one of the following from the **Restore** **from** drop-down list:
   
   - **My** ** Computer**: Restore a file from your local computer. This is the default.
     
     - **Filename**: Click **Select** **File** to navigate to the configuration file.
   - **TFTP**: Restore a file from a TFTP server.
     
     - **Filename**: Enter the directory path and the file name you want to restore. For example, you can enter `/archive/backups/Infoblox_2009_10_20_15_30         `.
     - **IP** ** Address ** **of** ** TFTP ** **Server**: Enter the IP address of the TFTP server from which you restore the configuration file.
   - **FTP**: Restore a file from an FTP server.
     
     - **Filename**: Enter the directory path and the file name of the backup file. For example, you can enter `/archive/backups/Infoblox_2009_10_20_15_30.`
     - **IP ** **Address ** **of ** **FTP** ** Server**: The IP address of the FTP server.
     - **Username**: Enter the username of your FTP server account.
     - **Password**: Enter the password of your FTP server account.
   - **Grid** ** Master ** **(Local)**: Restore from a local directory on the Grid Master. In the *Backup* *Set* table, select the file you want to restore.
3. To restore NIOS configuration data, select the **NIOS** **data** checkbox.
4. To download a backup file from one appliance to a different appliance, select **Force** **Restore** **from** **Different** **Grid** to enable the feature, and then select one of the following:
   
   - **Retain** **Current** **Grid** **Master** **IP** **Settings** (this is the default)
   - **Overwrite** **Grid** **Master** **IP** **Settings**
5. Click **Restore**. In the *Confirm* *Restore* dialog box, click **Yes**.  
   After restoring the file, the appliance restarts. The restore process overwrites all existing data. All pending scheduled tasks are not restored or reverted.
6. Close your current browser window, wait a few minutes, and then reconnect to the NIOS appliance.

# Downloading DTC Backup Files from a Different Appliance

When you "force restore" a NIOS appliance, you download a backup file from one appliance to a different appliance. To restore a backup file to the same appliance or Grid Master, use the Restore function as described in the previous section, see Restoring DTC Backup Files.  
To download a backup file from one appliance to a different appliance:

1. From the **Grid** tab, select the **Grid** **Manager** tab, and then click **Restore** -> **Restore DTC** from the Toolbar.
2. In the *Restore* wizard, do the following:
   
   - **Restore** **from:** Choose a source from which you restore the configuration file, as described in as described in the previous section, see Restoring DTC Backup Files.
3. Select **Force** **Restore** **from** **Different** **Grid** to enable the feature, and then select one of the following:
   
   - **Retain** **Current** **Grid** **Master** **IP** **Settings** (this is the default)
   - **Overwrite** **Grid** **Master** **IP** **Settings**
4. Click **Restore**. In the *Confirm* *Restore* dialog box, click **Yes**.  
   After restoring the file, the appliance reboots. The restore process overwrites all existing data. All pending scheduled tasks are not restored or reverted.
5. Close your current browser window, wait a few minutes, and then reconnect to the NIOS appliance.
