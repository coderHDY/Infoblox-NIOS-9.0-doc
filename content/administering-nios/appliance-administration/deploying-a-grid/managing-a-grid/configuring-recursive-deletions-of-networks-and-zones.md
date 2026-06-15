---
title: "Configuring Recursive Deletions of Networks and Zones"
source: "/space/nios90/1340475549"
pageId: "1340475549"
---
Through Grid Manager, you can configure the group of users that are allowed to delete or schedule the deletion of a network container and its child objects as well as a zone and its child objects. For information about how to delete a network container or zone, see [*Deleting Network Containers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779) and [*Removing Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405463).  
When you select **All** **Users** or **Superusers**, these users can choose to delete a parent object and reparent its child objects, or they can choose to delete a parent object and all its child objects. These options appear only if a network container or a zone has child objects. For information about scheduling recursive deletion of network containers and zones, see [*Scheduling Recursive Deletions of Network Containers and Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/504168883).   
When you select **Nobody**, all the users can delete the parent object only. All the child objects, if any, are re-parented. For more information about scheduling deletions, see as described in [*Scheduling Deletions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/504168883) .Note that you can restrict specific users to perform recursive deletions of network containers and zones only through Grid Manager. These settings do not prevent other users from performing recursive deletions through the API.

> **warning**
>
> Note
> 
> You must have Read/Write permission to all the child objects in order to delete a parent object. Recursive deletion is applicable to all zone types except stub and forward-mapping zones.

The appliance puts all deleted objects in the Recycle Bin, if enabled. You can restore the objects if necessary. When you restore a parent object from the Recycle Bin, all its contents, if any, are re-parented to the restored parent object. For information about the Recycle Bin, see [*Finding and Restoring Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588).   
To configure the group of users to perform recursive deletions:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab.
2. Expand the Toolbar and select **Grid** **Properties** -> **Edit**.
3. In the *Grid* *Properties* editor, select the **General** tab -> **Advanced** tab.
4. Under **Present** **the** **option** **of** **recursive** **deletion** **of** **networks** **or** **zones** **to**, select one of the following:
   
   - **All** **Users**: Select this to allow all users, including superusers and limited-access users, to choose whether they want to delete the parent object and its contents or the parent object only when they delete a network container/network or a zone. This is selected by default.
   - **Superuser**: Select this to allow only superusers to choose whether they want to delete the parent object and its contents or the parent object only when they delete a network container/network or a zone.
   - **Nobody**: When you select this, users can only delete the parent object (network container or zone). All child objects, if any, are re-parented.
5. Save the configuration.
