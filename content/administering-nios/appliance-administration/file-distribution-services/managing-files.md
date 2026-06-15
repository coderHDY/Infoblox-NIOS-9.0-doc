---
title: "Managing Files"
source: "/space/nios90/280406844"
pageId: "280406844"
---
This section describes how to upload files using the Grid Manager or a file transfer client. You can upload files to the Grid Master or to individual members.

# Uploading Files

Some things to keep in mind when you upload files:

- When you use the Grid Manager to upload files, you can upload files only to the Grid Master, not to individual members of the Grid.
- To upload files to a member, you must use an FTP client, TFTP client or HTTP client. Files uploaded by file transfer clients to any member, will be synchronized back to Grid Master.
- The logs for file transfers using third party clients can be found in syslog.
- You can use a third party file transfer client to upload and retrieve files:
  
  - If the 'anonymous' login is enabled, you can retrieve files but this 'anonymous' user can not upload files even if the "Allow uploads" option is enabled.
  - If you create a user to use with a third party transfer client, this must be an FTP user with read/write permissions in their directory.
- You can upload a maximum of 10,000 files.
- If uploading a file exceeds the storage limit of 2 GB for a single file, NIOS logs a message and does not upload the file. For information about file distribution storage, see [*Modifying*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406938)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406938)[*File*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406938)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406938)[*Distribution*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406938)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406938)[*Storage*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406938)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406938)[*Limits*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406938).
- If you upload a file that has the same name and path as an existing file, NIOS automatically replaces the old file.

> **warning**
>
> ### Note
> 
> Administrators with superuser privileges can manage uploading files. Limited-access admins with read/write permissions to specific directories can upload files to the directories. For information, see [*Administrative Permissions for File Distribution Services*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668287)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668287)

# Enabling Upload to Grid Members

1. From the **Data** **Management** tab, select Grid **File** **Distribution** Properties on the toolbar.
2. In the *Grid* *File* *Distribution* *Properties* dialog box, select the **Allow** **Upload** **to** **Grid** **Members** checkbox.
3. Click **Save** **&** **Close**.

# Uploading Files using Grid Manager

The Grid Manager uploads files only to the Grid Master. The Grid Master propagates the files to the members. You must use a third party file transfer client to upload files directly to an individual member:

- If the 'anonymous' login is enabled, you can retrieve files but this 'anonymous' user can not upload files even if the "Allow uploads" option is enabled.
- If you create a user to use with a third party transfer client, this must be an FTP user with read/write permissions in their directory.

1. From the **Data** **Management** tab, select the **File** **Distribution** tab -> **Files** tab.
2. Select the destination directory link.
3. Click the **Add** icon -> **File** from the Toolbar.
4. Select the **Extract** **files** **after** **upload** **(.zip,** **.tar,** **.gz,** **.tgz)** checkbox in the *Upload* dialog box if you are uploading .zip, .tar, .gz, or.tgz files and you want to automatically extract the files upon upload.
   
   Note that the directory structure in the compressed file is restored when the files are extracted. A directory that already exists it will be replaced by an extracted directory with the same name.
5. Click **Select** **to** navigate to the file you want to upload.
6. Select the file you want to upload, and then click **Open.**
7. If you want to upload more than one file, repeat Steps 4 and 6 until you have selected all the files you want to upload. You can upload a maximum of ten files at one time.
   
   Note you can delete an incorrect file selection by clicking the red icon next to the filename before you click Upload.
8. To verify the upload was successful. roll the mouse cursor over the green check mark before to the file name. If the upload was successful, the message "Upload succeeded." appears.

# Uploading Files Using TFTP, FTP, or HTTP File Transfer Client

You can upload files to the Grid Master or to individual members using a third party FTP client. Files uploaded by file transfer clients to any member, will be synchronized back to Grid Master.  
To upload files to a member, you must first enable the **Allow** **Upload** **to** **Grid** **Members** checkbox in the *Grid* *File* *Distribution* *Properties* dialog box. See Enabling Upload to Grid Members.  
You must add an FTP user before you can upload files using a third party FTP client. This must be an FTP user. It is not the NIOS admin. For information see Adding FTP Users through Grid Manager.

# Deleting Files From the Grid Master

If the FTP user has read/write permissions, then that user can delete files from the Grid member wherever that FTP user is connected. Only files can be deleted but not directories.

1. From the **Data** **Management** tab, select the **File** **Distribution** tab -> **Files** tab.
2. Grid Manager displays the files and folders in the Root directory. Click the directory link to see the files in a specific directory.
3. To delete a file, select the checkbox and then click the **Delete** icon.

# Deleting Files From a Member

You can delete files from a member only if "**No**" appears in the *Synchronized* *with* *Grid* *Master* column.  
If the FTP user has Read/Write permissions, then that user can delete files from the Grid member wherever that FTP user is connected. Only files can be deleted but not directories.

1. From the **Data** **Management** tab, select the **File** **Distribution** tab -> **Files** tab.
2. Grid Manager displays the files and folders in the Root directory. Click the directory link to see the files in a specific directory.
3. If "**No**" appears in the *Synchronized* *with* *Grid* *Master* column, select the checkbox, then click the **Delete** icon.
