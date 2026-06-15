---
title: "Managing Users"
source: "/space/nios90/280764743"
pageId: "280764743"
---
This section describes how to add and modify user accounts for use with an FTP client.  
You must be a NIOS admin user with super user privileges to add, modify, or delete FTP users. FTP users are created at Grid level, so the same users will be available to access FTP service on all members.

- Each user must have unique Username.
- By default, the home directory with the user name is under the `/ftpusers` directory. However, the user can also choose to use an existing directory outside of` /ftpusers` as his home directory. If the admin specified home directory is not available then it will raise an error.
- Permission: Read-write or Read-only are assigned for each FTP user. Users with read-write permissions are allowed to upload files, delete files and list the files and directories under his home directory.
- You can have multiple users to use same home directory. One user may have read-only permissions while others have read-write permissions on same home directory.
- FTP users are not allowed to add, modify, or delete the directories, even with read-write permissions.
- If the "Allow uploads on the member" is disabled, then users with read-write permission also can not upload files to his home directory.

# Users Default Home Directory

- FTP users default home directory is `/ftpusers`.
- The `/ftpusers` directory is created by default and listed in the 'Files' viewer under the root directory.By default, home directories for FTP users are under this directory.
- NIOS admin is allowed to upload and delete files to and from users home directories.
- Files uploaded by FTP users are visible in the Grid Manager.

# Adding FTP Users through Grid Manager

1. From the **Data** **Management** tab, select the **File** **Distribution** tab -> FTP Users tab, and then click the Add icon.
2. In the *Add* *FTP* *User* dialog box, complete the following:
   
   - **Username**: Enter a name for the user. This is the username that the user uses to log in.
   - **Password**: Enter a password for the user to use when logging in.
   - C**onfirm** **Password**: Enter the same password.
   - **Permissions**: From the drop down choose from the following:
     
     - **Read** **Only**: This allows the user to display files, but not to upload, or delete files using a third party FTP client.
     - **Read/Write**: This allows the user to upload, delete and list files using a third party FTP client.
   - Choose a directory for this user. This is the directory where files uploaded with this Username will go:
     
     - **Create** **Home** **DIrectory**: This creates a directory using the Username.
     - **Choose** **Specified** **Directory**: This allows the user to choose an existing directory.
3. Click **Save** **&** **Close**.

# Adding FTP Users through CSV Import

You can add an FTP User by importing a CSV file with the headers in the following format:

`version 1.0,,,,`  
` header-ftpuser,username*,password*,create_home_dir,home_dir,permission ftpuser,user1,passwd1,True,/ftpusers/user1,RO`

# Modifying FTP Users

1. From the **Data** **Management** tab, select the **File** **Distribution** tab -> FTP Users tab.
2. Select the checkbox for the user you want to modify and click the Edit icon.
3. In the *FTP* *User* *Editor* you can modify the following:
   
   - **Password**: Enter a password for the user to use when logging in.
   - C**onfirm** **Password**: Enter the same password.
   - **Permissions**: From the drop down choose from the following:
     
     - **Read** **Only**: This allows the user to display the files and their properties, but not to edit them.
     - **Read/Write**: This allows the user to display and edit the files and their properties.
4. Click **Save** **&** **Close**.
