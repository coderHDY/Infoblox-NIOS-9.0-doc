---
title: "User History for IP Address"
source: "/space/nios90/1429242764"
pageId: "1429242764"
---
The *User* *History* *for* *IP* *Address* sub-dashboard displays the login details of the active users associated with the IP address of the client.  
The default displays the following information in table format:

- **Last Updated**: Displays the timestamp when the user information was last updated.
- **User Name**: The logon name of the user.
- **Domain:** The domain name.
- **IP Address:** The IP address of the client.
- **First Seen**: The timestamp when the user logged in to the domain for the first time.
- **Logout Time**: The log out time of the user. This column displays **NA** when users are still active on the system.
- **Last Seen**: The timestamp when the user was last seen accessing a domain.
- **User Status**: Displays the status of the user. This can be one of the following: **Active** (logged in), **Logged** **Out**, **Timed** **Out**.
  
  - **Active**: The user is logged in and active.
  - **Logged** **Out**: The user has logged out of the system.
  - **Timed** **Out**: The user is logged in but has been idled for a certain period of time. The default is two hours. You can configure the time interval as described in Configuring Active User Timeout Session, see [*Viewing Identity Mapping Information*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764411).
