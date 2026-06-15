---
title: "Limitations of the Traffic Capture Tool"
source: "/space/nios90/1393197270"
pageId: "1393197270"
---
- You cannot add members to the list of members in the **Members **table on the *Traffic Capture* wizard when traffic capture is in progress.
- While the traffic capture file transfer is in progress on any member on the *Traffic Capture* wizard, Grid Manager does not allow you to start or stop traffic capture on members. However, you can start traffic capture using the CLI command even though the file transfer is in progress.
- If the traffic capture has already started on Grid Manager, you cannot initiate the capture again using the CLI command. You must wait until the process is complete.
- Traffic captures that are initiated using the CLI/WAPI commands do not appear in the **Members **table. To initiate traffic capture for a single member that was initiated and stopped using the CLI/WAPI command, add the respective member manually to the list of members in the **Members **table.
- Grid Manager does not allow you to initiate traffic capture on a list of selected members, if it has already been initiated for a member in the list using CLI/WAPI commands.
