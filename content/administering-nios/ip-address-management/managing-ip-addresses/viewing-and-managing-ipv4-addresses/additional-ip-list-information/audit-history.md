---
title: "Audit History"
source: "/space/nios90/1344964773"
pageId: "1344964773"
---
By default, the Audit History tab displays the following information about the last five actions performed on the selected IP:

- **Timestamp**: The day, date, and time of the operation.
- **Action**: The type of operation that was performed by the administrator.
- **Object** **Type**: The object type of the entry.
- **Object** **Name**: The name of the object.
- **Admin** **Name**: The name of the administrator who performed the operation.
- **Message**: The description of the administrative activity.

> **warning**
>
> ### Note
> 
> If you change the IP address of an existing record to a new one in the **IP** **MAP** tab when the Grid **Audit** **Logging** is set to *Brief*, then NIOS will not display modification or transition details about the new IP address in this tab. You can only view subsequent modifications and deletions to the new IP address. However, you can view the audit log history and transition details of the old IP address, but you cannot view the initial transition from an old IP address to the new IP address.
