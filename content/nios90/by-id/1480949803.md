---
title: "Viewing Detailed Status Information"
source: "/space/nios90/1480949803"
pageId: "1480949803"
---
You can view more status information by selecting a server from the Microsoft servers panel and clicking the Action icon next to the respective Microsoft server and selecting **Detailed** **Status** from the menu or clicking the Detailed Status icon. The **Detailed** **Status** panel displays the following information:

- **Synchronization** **Status**: The status icon indicates the synchronization status as follows:
  
  - Green: The Microsoft server is synchronizing data with the Grid member.
  - Red: Synchronization failed between the member and server. You can check the messages in the Microsoft server log to determine the reason for the failure.
- **DNS** **Service** **Status**: For information about the status icons, see Viewing DNS and DHCP Service Status on Microsoft Servers above.
- **DNS** **Service** **Status** **Last** **Updated**: The date and time of the last DNS service status update from the Microsoft DNS server.
- **DHCP** **Service** **Status**: For information about the status icons, see Viewing DNS and DHCP Service Status on Microsoft Servers above.
- **DHCP** **Service** **Status** **Last** **Updated**: The date and time of the last DHCP service status update from the Microsoft DHCP server.
- **Active** **Directory** **Sync** **Status**: The Active Directory Site is synchronizing data with the Grid member when the status icon is green.
- **Active** **Directory** **sync** **status** **last** **updated**: The date and time of the last Active Directory Site update from the Microsoft server.

Note the following guidelines about status information:

- Grid Manager does not display any status information if there is no synchronization between DHCP and DNS.
- If the appliance has not received any information when the services are enabled, then the Synchronization Status icon is displayed in red, whereas the DNS and DHCP status icons are displayed in grey.
