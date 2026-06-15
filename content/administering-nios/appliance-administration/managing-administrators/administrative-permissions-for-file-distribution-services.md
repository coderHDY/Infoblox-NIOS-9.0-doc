---
title: "Administrative Permissions for File Distribution Services"
source: "/space/nios90/280668287"
pageId: "280668287"
---
You can restrict access to the TFTP, HTTP and FTP services provided by the appliance. By default, the appliance denies access to the TFTP, HTTP and FTP services, unless an admin group has their administrative permissions defined.  
You can grant read-only or read/write permission, or deny access to the following resources:

- Grid File Distribution Properties—Applies to the Grid and its members, directories, and files. You can set this from the Administrators perspective only.
- Member File Distribution Properties—Applies to the Grid member properties only.
- A specific directory—Applies to the directory and its files.

For information on setting permissions, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424). The following table lists the tasks admins can perform and the required permissions for file distribution services.

*Permissions* *for* *File* *Distribution* *Services*

| **Tasks** | **Grid** **File** **Distribution** **Properties** | **Member** **Distribution** **Properties** | **Specific** **Directory** |
| --- | --- | --- | --- |
| Create and remove directories and files | **RW** |  |  |
| Modify the Grid and member file distribution properties | **RW** |  |  |
| View the Grid and member file distribution properties, directories, and files | **RO** |  |  |
| Modify the member file distribution properties |  | **RW** |  |
| View the member file distribution properties |  | **RO** |  |
| Add and delete a directory, subdirectories, and files in the directory |  |  | **RW** |
| View a directory and its subdirectories and files |  |  | **RO** |
