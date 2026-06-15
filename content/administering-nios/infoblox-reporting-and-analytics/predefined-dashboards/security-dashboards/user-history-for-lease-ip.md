---
title: "User History for Lease IP"
source: "/space/nios90/1429013583"
pageId: "1429013583"
---
You can view user information associated with the lease IP address.  
The default *User* *History* *for* *Lease* *IP* sub-dashboard displays the following information in table format:

- **Last Updated**: Displays the timestamp when the user information was last updated.
- **User Name**: The logon name of the user.
- **Domain**: The Active Directory domain name.
- **IP Address**: The IP address of the client.
- **First Seen**: The timestamp when the user logged in to the domain for the first time.
- **Logout Time**: The log out time of the user. This column displays **NA** when users are active on the system.
- **Last Seen:** The timestamp when the user was last seen accessing a domain.
- **User Status**: Displays the status of the user. This can be one of the following: **Active** (logged in), **Logged** **Out**, **Timed** **Out**.
  
  - **Active**: The user is logged in and active.
  - **Logged** **Out**: The user has logged out of the system.
  - **Timed** **Out**: The user is logged in but has been idled for a certain period of time. The default is two hours. You can configure this time interval, as described in Configuring Active User Timeout Session, see [*Viewing Identity Mapping Information*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764411).
