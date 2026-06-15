---
title: "Administrative Permissions for Cloud Objects"
source: "/space/nios90/280408136"
pageId: "280408136"
---
You can grant read-only or read/write permission, or deny access to the following cloud related objects:

- All tenant—Applies to all tenants.
- Per tenant object—Applies to selected tenants only.

You need appropriate permissions to make changes to all tenants or a specific tenant object through Grid Manager. Note that following:

- Update the tenant object: You must have permission on all tenant objects or the specific tenant object that is being updated. When you modify any tenant object associated with a tenant, it requires explicit Read/Write permission on the specific tenant object, whether permission on the associated tenant exists or not.
- Read-Only: This operation returns all tenant objects if you have the all tenant permission, or returns only specific tenant objects for which you have access.
- Permission for a tenant object implicitly gives the read permission to any object that is associated with the tenant.
- Note that creating and deletion operations do not need any permission.

# Administrative Permissions for CSV Import

The following CSV import permissions are applicable to local users on the NIOS appliance. They are not valid for AD or RADIUS users.

- When you delete a user, CSV import tasks associated with the respective user are not deleted. Superusers can access these tasks. Pending CSV import tasks will not be executed due to authentication failure.
- If you change user permissions, the pending and running CSV import tasks are executed, but may finish with errors. Note that the appliance re-establishes database transaction after every 500 lines are imported. If you delete or modify the respective user entry between these transactions, the rest of the import may fail.
- Superusers can manage any stopped, failed, or completed CSV import tasks belonging to a deleted user.
