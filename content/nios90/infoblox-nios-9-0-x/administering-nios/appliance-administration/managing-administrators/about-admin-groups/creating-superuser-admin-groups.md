---
title: "Creating Superuser Admin Groups"
source: "/space/nios90/1471283639"
pageId: "1471283639"
---
Superusers have unlimited access to the NIOS appliance. They can perform all operations that the appliance supports. There are some operations, such as creating admin groups and roles, that only superusers can perform.

Note that there must always be one superuser admin account, called "admin", stored in the local database to ensure that at least one administrator can log in to the appliance in case the NIOS appliance loses connectivity to the remote admin databases such as RADIUS servers, AD domain controllers, TACACS+ servers, LDAP servers, or OCSP responders.

NIOS comes with a default superuser admin group (**admin-group**)**.** It also automatically creates a new admin group, **fireeye-group**, when you add the first FireEye RPZ (Response Policy Zone). Infoblox recommends that you do not add another admin group with the same name as the default or FireEye admin group. Note that the FireEye admin group is read-only and you cannot assign permissions to it. For more information about FireEye RPZs, see [*About*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs)[*FireEye*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs)[*Integrated*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs)[*RPZs*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs).

When you install valid licenses and configure your Grid for Cloud Network Automation, NIOS enables the **cloud-api-only** admin group. You can assign admin users to this group so they are authorized to send cloud API requests to the Cloud Platform Appliances. Note that you cannot delete this admin group or create a new admin group using the same name. For information about Cloud Network Automation, see [*Deploying*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation)[*Cloud*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation)[*Network*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation)[*Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation).

You can create additional superuser admin groups, as follows:

1. From the **Administration** tab, select the **Administrators** tab -&gt; **Groups** tab, and then click the Add icon.
2. In the *Add* *Admin* *Group* wizard, complete the following:
   
   - **Name:** Enter a name for the admin group.
   - **Comment:** Enter useful information about the group, such as location or department. For **fireeye-group,** NIOS displays **Group** **used** **to** **receive** **FireEye** **alerts** in this field**.**
   - **Disable:** Select this to retain an inactivated profile for this admin group in the configuration. For example, you may want to define a profile for recently hired administrators who have not yet started work. Then when they do start, you simply need to clear this checkbox to activate the profile.
3. Click **Next** and complete the following:  
   **Superusers:** Select this to grant the admin accounts that you assign to this group full authority to view and configure all types of data and perform all tasks.

- **Allowed** **Interfaces**: Superusers admin groups are automatically granted access to the Infoblox GUI (Grid Manager), API, and CLI. You can specify which API the superusers group can access. Note that you must have the Cloud Network Automation or Cloud Platform license installed to configure access to the cloud API.  
  **GUI:** This is selected by default. The superusers admin group automatically has full access to Grid Manager.  
  **API:** This is selected by default. Note that the following options are displayed only if a cloud license is installed in the Grid.  
  **CLI:** This is selected by default. The superusers admin group automatically has full access to the NIOS CLI.
- **API (WAPI/PAPI only)**: The superusers admin group has full access to the RESTful API and the Infoblox API by default.
- **Cloud API:** Select this to allow the superusers admin group to use the cloud API. This option is available only if a cloud license is installed in the Grid. Select one of the following:
  
  - **Cloud API only (no PAPI)**: Select this to allow the admin group to use WAPI (RESTful API) to send cloud API requests. Note that the Cloud API uses WAPI exclusively. The group has no access to the Infoblox API.
  - **Cloud API and PAPI (No WAPI)**: Select this to allow the admin group to send API requests and have access to the Infoblox API. However, the group cannot use WAPI to send cloud API calls.

> **warning**
>
> ### Note
> 
> When you assign cloud API access to an admin group, the group assumes full authority over all delegated objects. You must however specifically assign object permissions to the admin group for the group to gain authority over non-delegated objects. For information about how to assign object permissions, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions)*.*

1. Click **Next** and complete the following to define the dashboard template:

- **Dashboard Template**: From the drop-down list, select the dashboard template you want to assign to this superuser group. When you apply a dashboard template to an admin group, the template applies to all users in the group. The default is **None**, which means that users in this group can access all licensed tasks in the **Tasks Dashboard** tab if they have the correct permissions to the task-related objects. Note that if you want to delete a template, you must first unassign the template from an admin group, or select **None**, before you can delete it. For more information about dashboard templates, see [*About*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards)[ ](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards)[*Dashboards*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards).

1. Click **Next** to add admin email addresses if you want the appliance to send approval workflow notifications to a list of email addresses for the admin group. Complete the following in the Email Address table:

Click the Add icon and Grid Manager adds a row to the table. Enter the email address of the admin who should receive workflow notifications. You can click the Add icon again to add more email addresses. You can also select an email address and click the Delete icon to delete it. To modify an email address, click the **Email** **Address** column and modify the existing address.

> **warning**
>
> ### Note
> 
> When you configure an approval workflow and select **Group Email Address(es)** as the approver notification addresses, the appliance sends workflow notifications to all email addresses you have added to this table. For information, see [*Configuring*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/configuring-approval-workflows)[ ](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/configuring-approval-workflows)[*Approval*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/configuring-approval-workflows)[ ](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/configuring-approval-workflows)[*Workflows*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/configuring-approval-workflows)[ .](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/configuring-approval-workflows)

1. Optionally, click **Next** to add extensible attributes to the admin group. For information, see [*Managing Extesible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.*

1. Save the configuration and click **Restart** if it appears at the top of the screen. You can do one of the following after you create a superuser admin group:

- Add local admins to the superuser group. For information, see [*Creating*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/creating-local-admins)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/creating-local-admins)[*Local*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/creating-local-admins)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/creating-local-admins)[*Admins*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/creating-local-admins).
- Assign the superuser group to remote admins. For information, see [*About*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-remote-admins)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-remote-admins)[*Remote*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-remote-admins)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-remote-admins)[*Admins*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-remote-admins).
