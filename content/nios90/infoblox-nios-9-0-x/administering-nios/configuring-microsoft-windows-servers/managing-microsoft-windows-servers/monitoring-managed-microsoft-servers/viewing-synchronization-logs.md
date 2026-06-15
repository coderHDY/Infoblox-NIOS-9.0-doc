---
title: "Viewing Synchronization Logs"
source: "/space/nios90/1480949826"
pageId: "1480949826"
---
Grid Manager maintains a synchronization log file for each Microsoft server managed by a Grid member. It logs events related to the synchronization process, depending on the logging level that you configured in the **Logging** tab of the *Microsoft* *Server* *Properties* editor described in [*/wiki/spaces/nios90draft/pages/73290910*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/managing-microsoft-servers).  
The log files are rotated and compressed once they reach 40MB. To view the log file of managed Microsoft server:

1. From the **Administration** tab, select the **Logs** tab -&gt; **Microsoft** **Logs** tab.
2. If there is more than one managed server in the Grid, you can select the Microsoft server whose logs you want to view.
3. The log file contains information related to the synchronization of the Microsoft DNS and DHCP data, as follows:

- **Timestamp**: The date and time of the log message. The time zone is the time zone configured in the User Profile.
- **Source**: Identifies the event that generated the message, such as a server synchronization or zone synchronization.
- **Level**: Indicates the severity of the message, which can be one of the following:
  
  - **Debug:** Provides information about all events associated with synchronization.
  - **Information:** The Grid member is synchronizing with the Microsoft server and these messages provide normal status information.
  - **Warning:** The Grid member synchronized the data, but there was an issue, which is detailed in the Message section.  
    If the Grid member encounters an error during the synchronization, it skips the object with the error, logs the error in the Microsoft log, and continues to synchronize the rest of the data. The Grid member logs the error at each synchronization until you resolve the issue and it can synchronize the object successfully.
  - **Error:** The Grid member failed to synchronize an object, such as a DNS zone or DHCP scope, due to the error described in the Message section.

- **Object** **Type**: The type of object that corresponds to the entry, such as FQDN or ADDRESS.
- **Object** **Name**: The name of the object that corresponds to the entry.
- **Message**: Detailed information about the event.

You can also do the following in the log viewer:

- Toggle between the single line view and the multi-line view.
- Navigate to the next or last page of the file using the paging buttons.
- Refresh the view.
- Click the Follow icon to have the appliance automatically refresh the log every five seconds.
- Download the log.
- Clear the contents of the log.
- Sort the data in ascending or descending order by column.
- Use filters and the **Go** **to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go** **to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria. For information, see [*/wiki/spaces/nios90draft/pages/73271473*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data).
- Export or print the content of the log.
