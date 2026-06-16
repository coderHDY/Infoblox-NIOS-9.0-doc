---
title: "Enabling Active Directory Authentication for Nested Groups"
source: "/space/nios90/1471251194"
pageId: "1471251194"
---
Windows servers support nesting groups in which you can add a group of admin users as a member of another group. Nested groups consolidate admin accounts and help reduce the number of permissions required for individual users or groups. In NIOS, you can enable a nested group query so the appliance can recursively look up and use the AD authentication service to authenticate members or admin accounts. These members or admin accounts can be part of the default nested group, outside of the default nested group, or located within a non-default custom organizational unit.

When an admin belongs to multiple paths of hierarchy, you can enable nested group query in order to apply the AD authentication service hierarchically in a parent-child structure. This enables the NIOS appliance to apply the AD authentication service to all the groups of which an admin is a member. For example, if User 1 is a member of the default nested Group C, and Group C is a member of Group B, and Group B is a member of Group A, then the authentication service is applicable to all the groups of which User 1 is a member. In this example, the appliance performs a recursive lookup in Group C, Group B, and Group A while authenticating User 1.

You can also define multiple organizational units and add non-default AD admins and groups to these units.

> **warning**
>
> ### Note
> 
> - Microsoft recommends that you create all non-default users and groups in different organizational units to apply Group Policy Objects and prevent corruption or misuse of critical default accounts and groups.
> - In Active Directory, objects are referred to by the DN (Distinguished Name), which contains CN (Common Name), OU (Organizational Unit), and DC (Domain Component) that are delimited by commas and indicate where the object resides in an AD hierarchy.

Infoblox supports AD authentication for nested groups in the following scenarios:

- **Scenario 1**: When the user is located within the default **Users** group.  
  In this example, the DC ad-31.local contains CN=Users that is the default user group or the container. Users Username, VPNUsers, and Computers are located within the default user group. When you enable a nested group query, the appliance uses the AD authentication service to authenticate the admin accounts that are within the default nested group CN=Users. The DN for users within the default user group are as follows:
  
  - DN: CN=Username, CN=Users, DC=ad-31, DC=local
  - DN: CN=VPNUsers, CN=Users, DC=ad-31, DC=local
  - DN: CN=Computers, CN=Users, DC=ad-31, DC=local
- **Scenario 2**: When the user is located outside the default **Users** group.  
  In this example, users CN=Username2 and CN=Infrastructure are not located within the default user group or the container. The DN for users within the DC ad-31.local are as follows:
  
  - DN: CN=Username2, CN=Users, DC=ad-31, DC=local
  - DN: CN=Infrastructure, CN=Users, DC=ad-31, DC=local

The following figure illustrates how you can configure default and non-default nested groups and add users to these groups in a Windows Active Directory. It contains a DC ad-31.local that can contain default users group, organizational units or individual users. When you select the **Disable Default Search Path** checkbox, the AD authentication service authenticates the admin account that is mentioned in the additional search path for a non-default organizational unit.

*Active Directory Authentication for Nested Groups*

![Active Directory Authentication for Nested Groups](/assets/1471251194/8539eb77-b746-4869-83c7-0b5806d7248a.jpg)

To enable AD authentication for nested groups on the NIOS appliance:

1. From the **Administration** tab, click the **Authentication Server Groups** tab.
2. Click the **Active Directory Services** subtab and click the Add icon.
3. In the *Add Active Directory Authentication Service* wizard, complete the following:  
   **Nested Group Query:** By default, this checkbox is not selected. which means, the nested group query is disabled. When nested group query is disabled, AD authentication service is applied to only one group of which the AD admin is a member. When you select this checkbox, AD authentication service is applied to all the nested groups of which an AD admin is a member. This setting is applicable to all the AD servers configured for the Active Directory authentication service.
4. Save the configuration.
