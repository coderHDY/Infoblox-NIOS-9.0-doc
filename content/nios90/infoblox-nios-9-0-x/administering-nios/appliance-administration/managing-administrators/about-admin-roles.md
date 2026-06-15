---
title: "About Admin Roles"
source: "/space/nios90/280668617"
pageId: "280668617"
---
An admin role is a group of permissions that you can apply to one or more admin groups. Roles allow you to quickly and easily apply a suite of permissions to an admin group. You can define roles once and apply them to multiple admin groups. The appliance contains the following system-defined admin roles:

- **DHCP Admin:** Provides read/write access to all network views, all DHCP MAC filters, all Grid members, and all Microsoft servers that are managed by the Grid. It also provides read-only access to all DHCP templates and DHCP lease history.
- **DNS Admin**: Provides read/write access to all Grid members, all Microsoft servers that are managed by the Grid, all shared record groups, and all DNS views.
- **DTC Admin**: Provides read/write access to all DTC objects, such as LBDNs, LBDN records, pools, servers, monitors, certificates, GeoIP, and topologies.
- **File Distribution Admin**: Provides read/write access to Grid file distribution properties.
- **Grid Admin**: Provides read/write access to all DNS views, all shared record groups, all members, all Microsoft servers that are managed by the Grid, all network views, all DHCP MAC filters, all DHCP templates, DHCP lease history, Grid File distribution properties, network discovery, task scheduling, and all Dashboard tasks.
- **Load Balancer Admin**: Provides read/write access to all load balancer resources.
- **PKI Admin**: Provides read/write access to all HSM groups, all certificate authentication services, and all CA certificates.
- **DHCP Fingerprint**: Provides read/write access to all DHCP fingerprint related objects.
- **Super Host Admin**: Provides read/write access to all super host objects.
- **VLAN Admin**: Provides read/write access to all VLAN views, ranges, and objects.

You can assign these system-defined roles to admin groups and create additional roles based on the job functions in your organization. If you are creating a role that has similar permissions to an existing role, you can copy the role and then make the necessary modifications to the new role. Thus you do not have to create each new role from scratch.  
  
You can assign up to 21 roles to an admin group, and you can assign a role to more than one admin group. When you make a change to a role, the appliance automatically applies the change to that role in all admin groups to which the role is assigned.

# Creating Admin Roles

There are two ways to create an admin role. You can create a new role and define its permissions, or you can copy an existing role and redefine the configuration for the new role.  
  
To create a new role from scratch:

1. From the **Administration** tab, select the **Administrators** tab -&gt; **Roles** tab, and then click the Add icon.
2. In the *Add* *Role* wizard, complete the following:
   
   - **Name:** Enter a name for the role. For Infoblox Reporting and Analytics, Splunk internally supports role names in lower case only. However, NIOS allows a mix of lower case and upper case characters for role names. Therefore, Infoblox strongly recommends that you use lower case characters to create role names if you are using Infoblox Reporting and Analytics.
   - **Comment:** Enter useful information about the role. For example, if you are creating a role for IT personnel, you can put the information here.
   - **Disable:** Select this to retain an inactivated profile for this admin role in the configuration.
3. Optionally, click **Next** to add extensible attributes to this role. For information, see [*About Extensible attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
4. Click **Next** and select one of the following:
   
   - **Save** **&** **Add** **Permissions**: Save the entry and add permissions to the role. Grid Manager displays the **Permissions** tab with the newly created role selected. You can then add permissions to this role. For information, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).
   - **Save** **&** **Close**: Save the entry and close the wizard.
   - **Save** **&** **Edit**: Save the entry and continue to edit.
   - **Save** **&** **New**: Save the entry and open a new wizard.

To copy an existing role:

1. From the **Administration** tab, select the **Administrators** tab -&gt; **Roles** tab -&gt; *admin_role* checkbox, and then click **Clone** from the Toolbar.
2. The *Copy* *Role* editor provides the following tabs from which you can modify data for the new role:
   
   - **General**: Enter the name and information about the new role. You can also disable the role in this tab.
   - **Admin Groups**: Displays a list of admin groups that are currently using this role. You cannot modify the list.
   - **Extensible Attributes**: Add and delete extensible attributes that are associated with the admin role. You can also modify the values of the extensible attributes. For information, see [*About Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
3. Save the configuration and click **Restart** if it appears at the top of the screen. The appliance displays the new role in the **Roles** tab.

After you create roles, you can do the following:

- Define their permissions. For information and guidelines on defining permissions, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).
- Assign roles to admin groups, as described in creating limited-access admin groups, see [*About Admin Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups).
