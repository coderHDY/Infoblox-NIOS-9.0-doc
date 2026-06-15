---
title: "Rules for User Permissions for Restarting Services"
source: "/space/nios90/1356301459"
pageId: "1356301459"
---
The following rules apply to superusers and limited-access users:

- You can cancel a schedule task that you create to restart a service. A superuser can cancel any scheduled restart task.
- Only superusers and administrators with read/write permission to all Grid members can schedule a Grid restart task.
- When a superuser schedules a Grid restart task, a limited-access user cannot schedule a member-level restart task.
- Limited-access users cannot cancel a superuser's scheduled tasks.
- Limited-access users cannot create or modify a scheduled restart task for a Grid member if a scheduled restart task for the member (created by another user) already exists.

The system writes every scheduled change action to the audit log as follows:

`USER logon_id action service restart schedule 'schedule' on Grid (or member) Grid name or member node id`

For example:

`USER jdoe insert service restart schedule '02/20/2007 01:30:00' on Grid Infoblox USER jdoe deleted service restart schedule '02/22/2007 01:30:00' on node id 3`

For more information on the audit log, see [*Using the Audit Log*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403049).
