---
title: "Changing the Password and Email Address"
source: "/space/nios90/1446412610"
pageId: "1446412610"
---
Grid Manager creates and stores a user profile for each admin user. Each user profile contains information about the admin group and admin type assigned to the user. You can modify certain information in your user profile any time after the initial login. You can change your password to facilitate future logins and add your email address for reference.

Note that when multiple users log in to Grid Manager using the same admin account, they share the same user profile and preference settings, such as the widget, table size and column settings, independent of their browser settings. Instead of using the same admin account for multiple users, you can add multiple users to the same admin group so they can share the same permissions. For information about configuring admin accounts and admin groups, see [*Managing Administrators*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators).

If you can access only the Tasks Dashboard, you may not see or configure certain fields in the *User* *Profile* editor.

To change your password and email address, complete the following:

1. At the top-right corner of the navigation bar, click the admin name and select **Profile** from the drop-down menu.
2. In the *User* *Profile* editor, complete the following:
   
   - **Name**: Displays your user name.
   - **Last** **Login**: Displays the timestamp of your last log in.
   - **Type**: Displays your user type. There are two user types: **Local** and **Remote**. Local type admin accounts are stored in the NIOS database. Remote type admin accounts are stored on another server, such as a RADIUS server. Grid Manager automatically deletes remote user profiles if users have not logged in for more than six months.
   - **Group**: Displays the admin group to which your account belongs. The admin group determines your administrative permissions. Only superusers can define admin groups through Grid Manager.
   - **Password**: You can set a new password according to the requirements that are displayed.
     
     - **Set** **Password**: If you are a local user, select this checkbox to set a new password for your account. If you are a remote user, this field does not appear.
     - **Old Password**: Enter your current password.
     - **New Password**: Enter the new password, and then re-enter it in the **Retype Password** field.
   - **Email** **Address**: Enter your email address. Note that this address simply provides contact information. By default, this field is blank.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
