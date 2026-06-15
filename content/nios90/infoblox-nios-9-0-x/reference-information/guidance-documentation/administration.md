---
title: "Administration"
source: "/space/nios90/280791060"
pageId: "280791060"
---
A user must have an admin account to log in to the TOE. Each admin account belongs to an admin group, which contains roles and permissions that determine the tasks a user can perform.  
The TOE provides a default superuser admin group, called **admin-group**, with one superuser administrator, **admin**. The default superuser admin can log in to the TOE, using the default user name **admin** and password **infoblox**.  
Superuser admins are the security admins and have full access and control of all the operations of a TOE. Note that you must change the default user name and password of the default superuser admin to prevent unauthorized access to the TOE.  
Only superusers can do the following:

- Create admin accounts and groups. For more information, see [*Managing Administrators*](https://infoblox-docs.atlassian.net/wiki/spaces/NOIS91xDRAFT/pages/1686798389).
- Set password parameters. For more information, see [*Managing Passwords*](https://infoblox-docs.atlassian.net/wiki/spaces/nios91x/pages/1934297712).
- Create the login banner. For more information, see [*Creating a Login Banner*](https://infoblox-docs.atlassian.net/wiki/spaces/nios91x/pages/1934884891).
- Set the session timeout. For more information, see [*Modifying the Session Timeout Setting*](https://infoblox-docs.atlassian.net/wiki/spaces/NOIS91xDRAFT/pages/1686900853/WebUI+Settings#Modifying-the-Session-Timeout-Setting).

Limited-access admin groups provide their members with read-only or read/write access to specific resources. These admin groups can access the appliance through the GUI, API, or both. They cannot access the appliance through the console. In addition, limited-access admins are not allowed to perform the following tasks:

- Download the support bundle.
- Enable SNMP on the appliance.
- Upload files that are larger than 100 MB. If the file size is greater than the maximum size allowed, the **Upload** dialog box closes and an error message is displayed in the feedback panel. The attempt to upload a file that exceeded the maximum will be logged to syslog. Non-superusers only are able to upload files for file distribution and do CSV import.

# Setting Password Restrictions for Local Admins

All admins are required to enter a username and password when they log in to Grid Manager or the CLI. The password is always obscured when an admin logs in. The TOE defaults to locking out the user after three consecutive failed logins.  
A superuser must define a password policy that is consistent with the security policy of the organization. The password policy specifies the minimum password length and character types, such as lowercase or uppercase characters, that are allowed in the password. In addition, the policy specifies the number of required character changes from the previous password, whether passwords expire and their duration. Additionally, you can require admins to change their passwords when they first log in or after their passwords are reset. For information about defining the password policy, see [*Managing Passwords*](https://infoblox-docs.atlassian.net/wiki/spaces/NOIS91xDRAFT/pages/1686799245).

Local admins must change their passwords according to the defined password policy. A password can be changed as follows:

- By the local admin in the User Profile page. For more information, see [*Changing the Password and Email Address*](https://infoblox-docs.atlassian.net/wiki/spaces/nios91x/pages/1934230846).
- By the local admin when a password expires or when the admin first logs in. Note that this applies to logging in to the CLI or WebUI.
- By a superuser admin.
