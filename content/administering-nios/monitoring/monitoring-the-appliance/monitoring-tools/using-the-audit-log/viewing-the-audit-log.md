---
title: "Viewing the Audit Log"
source: "/space/nios90/1393459465"
pageId: "1393459465"
---
To view an audit log:

1. On the **Administration** tab, select the **Logs** tab -> **Audit** **Log** tab.
2. Optionally, use the filters to narrow down the audit log messages you want to view. Click **Show** **Filters** to enable the filters. Configure the filter criteria, and then click **Apply**.  
   Based on your filter criteria (if any), Grid Manager displays the following in the *Audit* *Log* viewer:
   
   - **Timestamp**: The date, time, and time zone the task was performed. The time zone is the time zone configured on the member.
   - **Admin**: The admin user who performed the task.  
     Note that the admin user displayed as $admin group name$ represents an internal user. You can create an **admin** filter with “**matches expression**” equals ^[^$] to filter out internal users.
   - **Action**: The action performed. This can be CALLED, CREATED, DELETED, LOGIN_ALLOWED, LOGIN_DENIED, MESSAGE, MODIFIED, POST, PUT, and DELETE.
   - **Object** **Type**: The object type of the object involved in this task. This field is not displayed by default. You can select this for display.
   - **Object** **Name**: The name of the object involved in this task.
   - **Execution** **Status**: The execution status of the task. Possible values are **Executed**, **Normal**, **Pending** **Approval** and **Scheduled**.
   - **URI**: A certain part of the incoming WAPI request.
   - **InData**: Input data fields of the incoming WAPI request.
   - **Response Time:** The processing time of the incoming WAPI request.
   - **Message**: Detailed information about the performed task.

You can also perform the following in the log viewer:

- Toggle between the single line view and the multi-line view for display.
- Navigate to the next or last page of the file using the paging buttons.
- Refresh the audit log view.
- Click the Follow icon to have the appliance automatically refresh the log every five seconds.
- Download the log.
- Clear the contents of the audit log.
- Use filters and the **Go** **To** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go** **to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria.
- Export or print the content of the log.
