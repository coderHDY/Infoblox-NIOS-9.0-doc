---
title: "Defining Object Permissions"
source: "/space/nios90/1343095459"
pageId: "1343095459"
---
You can add permissions to specific objects for selected admin groups or roles. When you add permissions to objects, you can select multiple objects with the same or different object types. When you select multiple objects with the same object type, you can apply permissions to the selected objects as well as the sub object types that are contained in the selected objects. As described in the below figure *Selecting* *Multiple* *Objects* *with* *the* *Same* *Object* *Type*, when you select five DNS forward-mapping authoritative zones, the appliance displays the object type "AuthZone" for all the zones. Since all five DNS zones are of the same object type, you can also apply permissions to all the resource records in these zones. The appliance displays the resources in the resource section of the *Create* *Object* *Permissions* editor. You can choose one or more of the resources to which you want to apply permissions.  
In Cloud Network Automation, admin groups and admin users who have cloud API access have full permissions to delegated. However, you must specifically assign permissions for objects that have not been delegated in order for any admin groups or admin users to gain permission to these objects. Therefore, an admin group that has access to the cloud API would have full permissions to all delegated objects but limited permissions to non-delegated objects.  
For information about how to allow cloud API access to an admin group, see  [*Creating Limited-Access Admin Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275587). For information about guidelines for authority delegation, see [  ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667711)[*About*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667711)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667711)[*Authority*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667711)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667711)[*Delegation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667711).  
*Selecting* *Multiple* *Objects* *with* *the* *Same* *Object* *Type*

*[drawio]*

When you select multiple objects with more than one object type, you can add permissions to the selected objects as well as to the sub object types that are common among the selected objects. For example, when you select three DNS forward-mapping authoritative zones and two DNS IPv4 reverse-mapping authoritative zones as illustrated in the below figure Multiple Objects with Common Sub Object Types, you can apply permissions to all the five DNS zones as well as to the CNAME, DNAME, and host records in these zones because CNAME, DNAME, and host records are the common sub object types in these zones.   
When you select three DNS forward-mapping authoritative zones and two IPv4 reverse-mapping authoritative zones, you can apply object permissions to all the DNS zones as well as the CNAME, DNAME and Host records in these DNS zones.

*Multiple* *Objects* *with* *Common* *Sub* *Object* *Types*

*[drawio]*

To define object permissions for an admin group or role:

1. For an admin group: From the **Administration** tab, select the **Administrators** tab -> **Permissions** tab -> *admin_group* in the Groups table, and then click the Add icon -> **Object** **Permissions** from the Create New Permission area or select **Add** -> **Object** **Permissions** from the Toolbar.  
   or  
   For an admin role: From the **Administration** tab, select the **Administrators** tab -> **Permissions** tab -> *admin_role* in the Roles table, and then click Add icon -> **Object** **Permissions** from the Create New Permission area or select Add -> **Object** **Permissions** from the Toolbar.
2. Grid Manager displays the *Create* *Object* *Permissions* wizard. For an admin group, the appliance displays the selected group in the **Group** **Permission** field. For an admin role, the appliance displays the selected admin role in the **Role** **Permission** field. You can also select a different group or role from the drop-down list.
3. Click **Select** **Object(s)**. Grid Manager displays the *Object* *Selector* dialog box.
4. In the *Object* *Selector* dialog box, complete the following:
   
   - Enter a value or partial value of an object in the first field. This field is not case-sensitive. For example, if the object to which you want to define permissions contains "Infoblox", enter Infoblox here.
   - Select the object type for which you are searching in the **Type** drop-down list. By default, the appliance searches all object types.
   - In the operator drop-down list, select an operator for the filter criteria. Depending on what you select in the first filter field, this list displays the relevant operators for the selection.
   - In the value field, enter or select the attribute value for the first filter field. Depending on what you select for the first two filter fields, you can either enter a value or select a value from a drop-down list.
5. Click **Search**. The appliance lists all matching objects in the table. You can select multiple object types by clicking the Add icon to add more filter criteria. You can also click **Reset** to clear all entries.
6. Select the checkboxes of the objects to which you are defining permissions, and then click the Select icon.
7. In the *Create* *Object* *Permissions* wizard, do the following:
   
   - **Object**: Displays the name of the selected object. When you select multiple objects, the appliance displays **Multiple** here. Mouse over to the information icon to view the list of objects to which you are defining permissions.
   - **Object** **Type**: Displays the object type of the selected object. When you select more than one object type, the appliance displays **Multiple** here.
   - **Resource**: Displays the selected objects. When you select more than one object type, the appliance displays **Multiple** **Selected** **Objects** here. Mouse over to the information icon to view the list of objects to which you are defining permissions. Grant the resources an appropriate permission: **Read/Write**, **Read**-**Only,** or **Deny**.
8. Save the configuration and click **Restart** if it appears at the top of the screen.

Grid Manager displays a warning message when the permissions you define here overlap with other permissions in the system. Click **See** **Conflicts** to view the overlapping permissions in the *Permissions* *Conflict* dialog box. For information, see Applying Permissions and Managing Overlaps below.  
You can also set permissions for specific objects from the objects themselves. For example, to define permissions for a particular Grid member, navigate to that Grid member and define its permissions.  
To define the permissions of a specific object:

1. Navigate to the object. For example, to define permissions for a particular network, from the **Data** **Management** tab, select the **IPAM** tab -> *network* checkbox, and then click the Edit icon.
2. In the editor, select the **Permissions** tab, and then do one of the following:
   
   - Click the Add icon to add permission to the object. In the **Admin** **Group / Role** **Selector** dialog box, select an admin group or role to which you want to assign the permission, and then click the Select icon.
   - Modify the permission and resource type of a selected admin group or role.
   - Select an admin group or role and click the Delete icon to delete it.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
