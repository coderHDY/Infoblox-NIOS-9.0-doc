---
title: "Administrative Permissions for Object Change Tracking"
source: "/space/nios90/280275126"
pageId: "280275126"
---
Infoblox stores updated objects in the NIOS database. Users with read-only permission can query and view these objects. Grid Manager allows you to grant the following permissions:

- Read-only permission to view deleted objects information. If the users have a read-only permission and the **exclude_deleted** flag is not set, then they will receive information about the deleted objects only.
- Deny to prevent the users from accessing updated objects information. If the users have a Deny permission, then they cannot query for any object updates even if the **exclude_deleted** flag is not set.

Users with a read-only permission must have permissions on all the objects to perform a full or an incremental synchronization. For example, consider that a user, user1, has read-only permission on DNS views, but does not have permission on network views. If user1 performs a full synchronization, NIOS does not include network views in the response as user1 does not have permission to view these objects. Hence, Infoblox recommends that you give permissions to all the objects in the NIOS database.
