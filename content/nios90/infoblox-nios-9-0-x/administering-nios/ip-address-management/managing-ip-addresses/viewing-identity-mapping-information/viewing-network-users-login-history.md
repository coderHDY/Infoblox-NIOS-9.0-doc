---
title: "Viewing Network Users Login History"
source: "/space/nios90/1481015592"
pageId: "1481015592"
---
You can view the login history of end-host devices, networks, and Active Directory domain users. You must first enable the identity mapping feature to view user login information. For information about enabling Identity Mapping feature, see  Enabling Identity Mapping above.  
To view network user login history:

1. From the **Data** **Management** tab, select the **Network** **Users** tab -&gt; **User** **History** tab. Grid Manager displays the following information:
   
   - **User** **Name**: The logon name of the user. When the same user logs in to the Active Directory domain from multiple clients, entry for each IP address is displayed separately. If multiple users logs in to the same Active Directory domain, entry for each user is listed separately.
   - **Domain**: Name of the Active Directory domain.
   - **First** **Seen**: The timestamp when the user logged in to the Active Directory domain for the first time.
   - **Log** **Out** **Time**: Displays the log out time of the user.
   - **IP** **Address**: The IP address of the client.
   - **Data** **Source**: The IP address of the Microsoft server or the API method.
   - **Status**: Displays the status of the user. The status can be one of the following: **Active** (logged in), **Logged** **Out**, and **Timed** **Out**.
     
     - **Active**: The user is logged in and active.
     - **Logged** **Out**: The user has logged out of the system.
     - **Timed** **Out**: The user is logged in but has been idled for a certain period of time. The default is two hours. You can configure this time interval, as described in Configuring Active User Timeout Session below.
   - **Last** **Seen**: The timestamp when the user was last seen accessing the network.
   - **Last** **updated**: The timestamp when the user information was last updated.
