---
title: "Administrative Permissions for Reporting"
source: "/space/nios90/280275084"
pageId: "280275084"
---
NIOS supports global and object permissions for reporting: Reports and Searches. Consider the following when applying permissions for reports and searches:

- When you view a DNS report, DHCP report, or search options, you can view all the data in the corresponding report or search results, even if you do not have permissions to view the DNS or DHCP objects.
- A limited-access user needs relevant permissions to view any report or search.
- When you grant a read-only permission for a specific report to a user, the user receives read-only access to everything the report displays.
- A user can view report data returned by a search operation even when the user is denied access to the search operation.
- You can only view pre-defined reports, global reports and customized reports or searches. A user, including superuser, cannot view customized reports or searches of other users.
- You cannot edit pre-defined reports.
- Only a superuser can edit global reports or searches.
- Only an owner of the customized report or search operation can modify the report.
- Superuser may create reports up to system wide limit.
- A limited-access admin can create up to five reports by default. You can configure this limitation through Grid Manager.
