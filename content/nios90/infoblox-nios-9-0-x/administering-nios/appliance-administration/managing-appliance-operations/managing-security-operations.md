---
title: "Managing Security Operations"
source: "/space/nios90/280407257"
pageId: "280407257"
---
The Grid provides certain security-related features. The following sections describe the different security-related features that you can set.

# Restricting Remote Console Access

You can restrict admins from accessing the Infoblox CLI from a remote location using an SSH (Secure Shell) v2 client. When you select this only admins who have access rights will be able to access the Infoblox CLI using an SSH (Secure Shell) v2 client. By default, this option is disabled.

# Restricting GUI/API Access

You can specify the IP addresses from which administrators are allowed to access the NIOS appliance. When the NIOS appliance receives a connection request, it tries to match the source IP address in the request with IP addresses in the list. If there is at least one item in the HTTP Access Control list and the source IP address in the request does not match it, the NIOS appliance ignores the request.

---

**Caution:** If you specify an address or network other than the one from which you are currently accessing the appliance, when you save your configuration, you will lose your administrative session and be unable to reconnect. If you have enabled the **Enable** **GUI/API** **Access** **via** **both** **MGMT** **and** **LAN1/VIP** feature and configured ACLs to control access to the GUI and API, then the same set of ACLs are applicable on both the interfaces (LAN1 and MGMT port). For information, see [*Enabling GUI and API Access on the MGMT and LAN1/VIP Ports*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-ethernet-ports) and Configuring Security Features below.

---

# Enabling HTTP Redirection

You can enable the NIOS appliance to redirect administrative connection requests using HTTP to the secure HTTPS protocol. When you disable redirection, the NIOS appliance ignores any administrative connection requests not using HTTPS. By default, the NIOS appliance does not redirect HTTP connection requests to HTTPS. When you change this setting, the application restarts and your management session terminates.

# Modifying the Session Timeout Setting

You can set the length of idle time before an administrative session to the Infoblox GUI times out. The default timeout value is 600 seconds (10 minutes).  
If a user does not interact with the application for the specified time, the appliance displays a message that a timeout has occurred. Click **OK** to restart the GUI session. Note that the session timeout is not honored when the Infoblox GUI supports auto-refresh. This means that the Infoblox interface page is automatically refreshed even after you have set the session timeout value.

> **error**
>
> ### Warning
> 
> If the [*Detailed Status Panel*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/member-status) is open, the following actions take place:
> 
> - Grid Manager auto refreshes at a rate of 30 seconds.
> - Widgets that support user-specified auto refresh, refresh at the rate specified in the **Auto Refresh Period** field.
> 
> Therefore, even if you set the session timeout to be greater than the auto refresh rate, auto refresh still takes place. The Grid Manager session does not time out because auto refresh takes precedence over the session timeout. For more information about widgets, see [*Status Dashboard*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard).



> **warning**
>
> ### Note
> 
> If you change the session timeout value, the new setting takes effect only after you log out and log back in.

# Disabling the LCD Input Buttons

By default, the LCD input function is enabled, which allows you to use the LCD buttons on the front panel of a NIOS appliance to change the IPv4 address settings of the LAN port. You can disable this function if the appliance is in a location where you cannot restrict access exclusively to NIOS appliance administrators and you do not want anyone to be able to make changes through the LCD.

# Configuring Security Features

You can manage only certain features at the member level. To configure security features for the Grid or an individual member:

1. **Grid:** From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, expand the Toolbar and click **Grid** **Properties** -&gt; **Edit**.  
   **Member:** From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then click the Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. On the **Security** tab, complete the following:
   
   - **Session** **Timeout(s)**: This field is in the *Infoblox* *Grid* *Properties* editor only. Enter a number between 60 and 31536000 seconds (one minute – one year) in the Session Timeout field. The default session timeout is 600 seconds (10 minutes).
   - **Redirect** **HTTP** **to** **HTTPS**: This field is in the *Grid* *Properties* editor only. Select this option to have the appliance redirect HTTP connection requests to HTTPS.
   - **Restrict** **GUI/API** **Access**: To control access to the GUI and API, select one of the following. You can restrict access using a named ACL or define individual ACEs. For information about named ACLs, see [*Configuring Access Control*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-access-control)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations)
     
     - **Allow** **Any**: Select this to allow any clients to access the GUI and API. This is selected by default.
     - **Named** **ACL**: Select this and click **Select** **Named** **ACL** to select a named ACL that contains only IPv4 and IPv6 addresses and networks. GUI and API access restriction does not support TSIG key based ACEs. When you select this, the appliance allows GUI and API access for all ACEs in the named ACL. You can click **Clear** to remove the selected named ACL.
     - **Set** ** of** ** ACEs**: Select this to configure individual access control entries (ACEs). Click the Add icon and select one of the following from the drop-down list. Depending on the item you select, Grid Manager either adds a row for the selected item or expands the panel so you can specify additional information about the item you are adding.
       
       - **IPv4** **Address** and **IPv6** **Address**: Select this to add an IPv4 address or an IPv6 address. Click the **Value** field and enter the IP address. The appliance allows this client to access the GUI and API and restricts others.
       - **IPv4** **Network** and **IPv6** **Network**: Select this to add an IPv4 network or IPv6 network. Click the **Value** field and enter the network. The appliance allows this network to access the GUI and API and restricts others.  
         After you have added access control entries, you can do the following:
       - Select the ACEs that you want to consolidate and put into a new named ACL. Click the Create new named ACL icon and enter a name in the *Convert * *to* * Named* *ACL* dialog box. The appliance creates a new named ACL and adds it to the **Named** ** ACL** panel. Note that the ACEs you configure for this operation stay intact.
       - Reorder the list of ACEs using the up and down arrows next to the table.
       - Select an ACE and click the Delete icon to delete the entry. You can select multiple ACEs for deletion.
     - **Access** **Restrictions** **Apply** **to** **Remote** **Console**: Select this to restrict admins from accessing the Infoblox CLI from a remote location using SSH (Secure Shell) v2 client.
     - **Enable** ** Remote** ** Console** ** Access**: Select this option to enable superuser admins to access the Infoblox CLI from a remote location using SSH (Secure Shell) v2 clients. You can set this at the Grid and member levels.
     - **Enable** ** Support** ** Access**: Select this checkbox to enable an SSH (Secure Shell) daemon that only Infoblox Technical Support can access. You can set this at the Grid and member levels.
     - **Restrict** **Remote Console** **and** **Support** **Access to the** **MGMT** **Port**: This field is in the *Infoblox Grid* *Member* *Properties* editor only. Select this checkbox to restrict SSH (Secure Shell) v2 access to the MGMT port only. This restricts Infoblox Technical Support and remote console connections—both of which use SSH v2—to just the MGMT port. For an HA pair, you can make an SSH v2 connection to the MGMT port on both the active and passive node.  
       Clear the checkbox to allow SSH v2 access to both the MGMT and LAN ports.
     - **Permanently** **Disable** **Remote** **Console** **and** **Support** **Access**: This field is in the *Infoblox* *Grid* *Properties* editor only.  
       Select this option to permanently disable remote console (Secure Shell v2) access for appliance administration and for Infoblox Technical Support.
     - **Enable Audit Log Rolling: **When you select this option, the appliance rolls the audit log when it reaches 100 MB.
     - **Enable Login Banner: **Select this option to create a message that appears at the top of the Login screen. Enter the message in the text field.
     - **Disable Concurrent Login**: Select this checkbox to disallow multiple logins per user for the same NIOS session. That is, if you have already logged on to one NIOS session (for example https://650.650.650.0) you cannot log on to the same IP address from another browser or from another system.
       
       Note that before you disable multiple logins to a NIOS system, ensure that all its existing sessions (if any) are logged out. If not, the existing sessions continue to remain active even after you disable multiple logins.
     - **Enable Account Lockout**: Select the checkbox to enable account lockout for the local user. You can enable password security such that if a local user tries to log in to Grid Manager by using an incorrect password, NIOS appliance locks the user account after the configured number of failed login attempts for a configured time period. Only superusers can enable and configure this feature. This feature is applicable only to local users. This option is disabled by default.
       
       - **Maximum number of attempts**: Enter the maximum number of invalid login attempts to Grid Manager after which NIOS locks the account. You can specify a value from **1** to **99. **The default value is **5**.
       - **Lockout duration**: Enter the time duration in minutes for which the account must be locked. You can specify a value from **1 **to **1440**. The default value is **5 mins**.
       - **Never Unlock**: Select the checkbox to permanently lock a local user account which is already locked. Only a superuser can clear the checkbox to unlock the account. NIOS displays a warning message if you enable this option. This option is not applicable to superuser accounts because you cannot permanently lock a superuser account. This option is disabled by default.  
         You can also configure account lockout for admin groups. For more information, see [*Configuring Account Lockout for Admin Group*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/managing-admin-groups-and-admin-roles).
     - **Disable Inactive Users**: Select this checkbox to disable users who have not logged in to NIOS for a specified period of time. You can specify the time period (in days) in the** Disable account if user has not logged in for &lt;time period&gt; days** field. The range of days is from 2 to 9999. Note that local accounts that have never been authenticated are deactivated within 3 to 5 hours, rather than after the configured interval. Accounts that have been authenticated at least once are correctly deactivated after the configured interval. You can also specify a reminder to be sent in the **Remind &lt;days&gt; prior to expiration** field. The range of days is from 1 to 30. The number of days you specify in this field is the time from which users start getting daily email reminders that their account will be disabled. NIOS sends the email reminder only if an email address has been configured for the user.
     - Select the** Allow user to reactivate account via serial console** and **Allow user to reactivate account via remote console** checkboxes if you want users to activate their account after it has been disabled. To reactivate using the serial console, see [*Deploying a Single Independent Appliance*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-independent-appliances/deploying-a-single-independent-appliance). To reactivate using the remote console, type `ssh &lt;user name&gt;@&lt;ip address&gt;`.  
       **Note**: Reactivating the account using the serial console or the remote console is possible only for superusers.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

# Enabling and Disabling Remote Console and Infoblox Technical Support Access

Infoblox Technical Support might need access to your NIOS appliance to troubleshoot problems. This function enables an SSH (Secure Shell) daemon that only Infoblox Technical Support can access. By default, this option is disabled. This function also makes it possible for a superuser admin to access the Infoblox CLI from a remote location using an SSH (Secure Shell) v2 client. The management system must have an SSH v2 client to use this function. After opening a remote console connection using an SSH client, log in using a superuser name and password. By default, this option is disabled. Note that only superusers can log in to the appliance through a console connection.  
You can permanently disable remote console (Secure Shell v2) access for appliance administration and for Infoblox Technical Support to perform remote troubleshooting. Disabling this type of access might be required in a high-security environment.

> **error**
>
> ### Warning
> 
> *After*   *permanently*   *disabling*   *remote*   *console*   *and*   *support*   *access,*   *you*   *cannot*   *re-enable*   *them!*   *Not*   *even*   *resetting*   *an*   *appliance*   *to*   *its*   *factory*   *default*   *settings*   *can*   *re-enable*   *them.*

If you have any questions, contact Infoblox Technical Support. To enable or disable remote console and Infoblox technical support access:

1. **Grid**: From the **Infoblox Grid** tab, select **Grid Manager** tab, expand the Toolbar and click **Grid Properties** -&gt; Edit.  
   **Member**: From the **Infoblox Grid** tab, select the **Grid Manager** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then click the Edit icon.  
   **Independent appliance**: From the **System** tab, select the **System Manager** tab, expand the Toolbar and click **System Properties** -&gt; Edit.
2. In the editor, select the **Security** tab -&gt; **Advanced** tab, and then complete the following in the **Remote Console and Infoblox Technical Support Access** section:
   
   - **Enable Remote Console Access**: Select this checkbox to enable superuser admins to access the Infoblox CLI from a remote location using SSH (Secure Shell) v2 clients. You can set this at the Grid and member levels.
   - **Enable Support Access**: Select this checkbox to enable an SSH (Secure Shell) daemon that only Infoblox Technical Support can access. You can set this at the Grid and member levels.
   - **Support Access Info**: Displays the support access code and the expiration time of the code. Note that the **Enable Support Access** is disabled after the expiration time.
   - **Permanently Disable Remote Console and Support Access**: This field is in the  *Grid Properties* editor only.  
     Select this checkbox to permanently disable remote console (Secure Shell v2) access for appliance administration and for Infoblox Technical Support.
3. Save the configuration.
