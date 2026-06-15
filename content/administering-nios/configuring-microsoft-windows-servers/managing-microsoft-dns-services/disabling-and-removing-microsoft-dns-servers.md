---
title: "Disabling and Removing Microsoft DNS Servers"
source: "/space/nios90/280403227"
pageId: "280403227"
---
When you disable synchronization with a Microsoft server, the managing Grid member completes any ongoing synchronization and does not start a new one. Synchronization resumes when the Microsoft server is re-enabled. The synchronized DNS data stays in the same state until synchronization resumes. For information, see [*Disabling Synchronization*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403352/Managing+Microsoft+Servers#Disabling-Synchronization).  
When you remove a managed Microsoft server from the Grid, the managing Grid member terminates any ongoing synchronization and does not start a new one. Zones and their content on the Microsoft server remain in the state that existed the moment the Microsoft server was removed. The Grid retains the zones that were assigned to the Microsoft server that was removed, but deletes the Microsoft server from its assigned zones as follows:

- If the Microsoft server is the only primary server and there are no other assigned servers or if the secondary server is an external secondary server, Grid Manager deletes all the server assignments.
- If the Microsoft server is the only primary server and there are Grid secondary servers, an external primary is created with the FQDN and IP address of the removed Microsoft server.
- If the Microsoft server is a secondary server and there is a Grid primary, an external secondary is created with the FQDN and IP address of the removed Microsoft server.
- If the Microsoft server is a server for a stub zone, the server is removed. To remove a Microsoft DNS server:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Members/Servers** tab -> *ms_server* checkbox.
2. Expand the Toolbar and click **Delete**.
3. Click **Yes** when the confirmation dialog box appears.
