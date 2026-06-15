---
title: "Viewing Overlapping Permissions"
source: "/space/nios90/1343292113"
pageId: "1343292113"
---
When you click **See Conflicts** to view overlapping permissions, Grid Manager displays the following information in the *Permission Overlap* dialog box:

1. **Resource**: The name of the object or resource.
2. **Type**: The object type.
3. **Permission**: The permission granted. This can be Read/Write, Read-Only, or Deny.
4. **Inherited From**: Indicates the source from which the permission is inherited.
5. **Conflict Status**: Indicates whether the permission is being used or ignored. In a permission overlap, the group permission always overrides the role permission if both permissions are set at the same level (global or object). However, if the permissions are set at different levels, the permission at a more specific level overrides that set at a higher level.
6. **Role/Group Name**: The name of the admin group or admin role.

You can click the arrow key next to the resource to view the permission that is being ignored in the overlap.
