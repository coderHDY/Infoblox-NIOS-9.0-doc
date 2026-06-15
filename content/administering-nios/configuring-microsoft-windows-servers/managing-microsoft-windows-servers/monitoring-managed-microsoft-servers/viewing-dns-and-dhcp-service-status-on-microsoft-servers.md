---
title: "Viewing DNS and DHCP Service Status on Microsoft Servers"
source: "/space/nios90/1481048159"
pageId: "1481048159"
---
Each Microsoft server reports the following statuses:

- **Service** **status** (**DNS** and **DHCP**): Displays the status of the service on the actual Microsoft server, based on the latest polling of the service by the managing member. The monitor and control setting has an effect only on the service status, and therefore can affect the overall status.
- **Overall** **status:** Displays the service status for each service that is enabled for synchronization with the Microsoft server. The overall status ignores any service status for which the monitor and control setting is disabled.
- **Synchronization** **status:** Displays the synchronization status for each service that is enabled for synchronization on the respective Microsoft server. The synchronization status is not affected by the monitor and control setting.

> **warning**
>
> ### Note
> 
> When you disable monitor and control settings, Grid Manager displays **unknown** using gray color for such services. When you enable monitor and control setting of a given service, Grid Manager displays the last known status that is obtained before the setting was first disabled. The appliance later updates to the latest status as soon as the monitoring resumes and Grid Manager displays the new status.



You can view details about the managed Microsoft servers by navigating to the **Infoblox** **Grid** tab -> **Microsoft** **Servers** tab -> **Servers** tab. For each Microsoft server, the panel displays the following by default:

- **Name:** The FQDN of the Microsoft server.
- **Status:** The connection status, which can be one of the following:
  
  - **Running:** The Grid member is connected to the Microsoft server.
  - **Connecting:** The Grid member is connecting to the Microsoft server.
  - **Error:** The Grid member failed to connect to the Microsoft server. Check the Microsoft log for any messages to determine the reason for the failure.
  - **Unknown:** The Microsoft server is disabled. The Grid member does not try to connect to disabled servers.
- **IP** **Address:** The IP address of the Microsoft server.
- **DNS:** The status of the DNS service on the Microsoft server. When you disable DNS synchronization, NIOS does not display any status icon. The status icon can be one of the following:

| **Icon** | **Color** | **Meaning** |
| --- | --- | --- |
| *[image: media]* | Green | The DNS service is functioning properly. |
| *[image: media]* | Red | The Microsoft server is unavailable. |
| *[image: media]* | Yellow | The DNS service is starting or stopping. |
| *[image: media]* | Gray | The DNS service is stopped or management of the Microsoft DNS server is disabled. |

- **DHCP:** The status of the DHCP service on the Microsoft server. When you disable DHCP synchronization, NIOS does not display any status icon. The status icon can be one of the following:

| **Icon** | **Color** | **Meaning** |
| --- | --- | --- |
| *[image: media]* | Green | The DHCP service is functioning properly. |
| *[image: media]* | Red | The Microsoft server is unavailable. |
| *[image: media]* | Yellow | The DHCP service is starting or stopping. |
| *[image: media]* | Gray | The DHCP service is stopped or management of the Microsoft DHCP server is disabled. |

- **Comment:** Displays any comments that were entered for the Microsoft server.
- **Site:** Displays any values that were entered for this pre-defined attribute. You can add the following columns for display:
- **Version:** The Windows version of the managed server.
- **Managing** **Member:** The hostname of the Grid member that manages the server.
- **Synchronization** **Status:** Displays the synchronization status as follows:
  
  - **Running:** The Microsoft server is synchronizing data with the Grid member.
  - **Connecting**: The Grid member is trying to connect to the server.
  - **Error:** Synchronization failed between the member and server. You can check the messages in the Microsoft server log to determine the reason for the failure.
- **Last** **Changed:** Displays information about when the status was last updated for Microsoft DNS and DHCP services. It corresponds to the last time information was exchanged with the server.
- **AD** **Domain:** Displays the AD domain of the Windows server. This is displayed only if the Windows server belongs to an Active Directory domain.
- **Root** **AD** **Domain:** Displays the root AD domain of the Windows server. This is displayed only if the Windows server belongs to an Active Directory domain.

You can also do the following:

- Add Microsoft servers.
  
  - Click the Add icon.
- Edit the properties of a Microsoft server.
  
  - Click the checkbox beside a server and click the Edit icon, or click the Action icon
    
    *[image: media]*
    
    next to the respective Microsoft server and select **Edit** from the menu. For information, see [*/wiki/spaces/nios90draft/pages/73291651*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270445)*.*
- Delete a Microsoft server.
  
  - Click the checkbox beside a server and click the Delete icon, or click the Action icon next to the respective Microsoft server and select **Delete** from the menu. For information, see [*/wiki/spaces/nios90draft/pages/73290910*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403352).
- Manage DNS and DHCP services of a Microsoft server.
  
  - Click the checkbox beside a server and click the Manage Server Services icon, or click the Action icon next to the respective Microsoft server and select **Manage** **Server** **Services** from the menu to view the service status. You can mouse over the DNS and DHCP service icons and click the Start/Stop service icon to start or stop a service, or click the Edit Service icon to edit the service properties. For information about setting DHCP server properties, see [*/wiki/spaces/nios90draft/pages/73291651*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270445). For information about setting DNS server properties, see [*/wiki/spaces/nios90draft/pages/73291440*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760906).
- View detailed server status information, as described in the next section Viewing Detailed Status Information.
- Click **Test** **MS** **Server** to test the Microsoft server connection. The appliance validates the Microsoft server and displays the test code and the test result data for services that you have enabled. To test the Microsoft server, click the checkbox beside a server and click the Test Microsoft Server icon, or click the Action icon next to the respective Microsoft server and select **Test** **Microsoft** **Server** from the menu. For more information, see [*/wiki/spaces/nios90draft/pages/73290813*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403395)*.*
- View extensible attributes associated with the Microsoft server.  
  Click the Action icon next to the respective Microsoft server and select **Extensible** **Attributes** from the menu. For information, see [*/wiki/spaces/nios90draft/pages/73290813*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403395).

- Define permissions for Microsoft servers.  
  Click the Action icon next to the respective Microsoft server and select **Permissions** from the menu.

- Use filters and the **Go** **To** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go** **to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria. For information, see [*/wiki/spaces/nios90draft/pages/73271473*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588).
- Sort the displayed data in ascending or descending order by column.
- Export the list of Microsoft servers to a .csv file.
  
  - Click the Export icon.
- Print the list of Microsoft servers.
  
  - Click the Print icon.
