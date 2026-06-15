---
title: "Viewing the RPZ Threat Details"
source: "/space/nios90/1380844821"
pageId: "1380844821"
---
Make sure that DNS resolution is enabled and running properly on the member to view threat details. To view threat details for the RPZ zones being queried, complete the following:

1. From the **Administration** tab, select the **Logs** tab -&gt; **Syslog** tab.
2. Click the Action icon and select **View** **Threat** **Context** to open the *RPZ* *Threat* *Details* dialog. The **View** **Threat** **Context** option is disabled if there is no RPZ rule.
   
   - **RPZ** **Rule**: Displays the name of the RPZ rule.
   - **First** **Identified**: The date and timestamp of the first occasion that the threat was detected.
   - **Short** **Description**: The brief description of the threat.
   - **Description**: The description of the RPZ rule.  
     Note the *RPZ* *Threat* *Details* dialog box may display *Unknown* if the threat is unknown, or *Unavailable *if the threat is known and threat details are not available.
3. Click the Close icon to close the *RPZ* *Threat* *Details* dialog.

You can also perform the following in the *Syslog* viewer:

- Toggle between the single line view and the multi-line view for display.
- Navigate to the next or last page of the file using the paging buttons.
- Refresh the syslog output with newly logged messages.
- Click the Follow icon to have the appliance automatically refresh the log every five seconds.
- Clear the contents of the syslog.
- Use filters and the **Go** **To** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go** **To** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria.
- To filter Microsoft synchronization related events, click **Show** **Filter**, select **Server** from the first drop-down list, and select **MS_Server** from the drop-down list in the value field. This filter displays entries that begin with the prefix **ms**. To view values that belong to a specific Microsoft server, you must specify either the name or IP address of a given Microsoft server in the **Message** field. When you filter the syslog for a specific Grid member, it displays the log entries of Microsoft servers that are assigned to the respective Grid member when the entries are logged.
- Print the report or export it in CSV format.
- Bookmark the syslog page.
