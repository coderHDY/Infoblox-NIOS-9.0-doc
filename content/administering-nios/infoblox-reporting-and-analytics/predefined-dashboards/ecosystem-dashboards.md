---
title: "Ecosystem Dashboards"
source: "/space/nios90/280270217"
pageId: "280270217"
---
This section details the dashboards of Ecosystem dashboards category. For more information on operations that can be performed on reporting dashboards, see *[About Dashboards](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400911)*.

The dashboards covered in this section are as follows:

*[toc]*

# User Login History Report

The *User* *Login* *History* dashboard provides information about user login activities in a given time frame. You can use this dashboard to audit user logins. This dashboard allows you to identify the IP address of a client, domains used by a user to login, the number of active users, and the login activities of a user over a period of time.  
This dashboard displays the following information in table format:

- **Last Updated:** Displays the timestamp when the user information was last synchronized with the Microsoft server.
- **User Name:** The logon name of the user.
- **Domain**: The Active Directory domain name.
- **IP Address:** The IP address of the client.
- **First Seen**: The timestamp when the user logged in to the Active Directory domain for the first time.
- **Logout Time:** The log out time of the user. This column displays **NA** when users are active on the Microsoft server.
- **Last Seen:** The timestamp when the user was last seen accessing an Active Directory domain.
- **User Status:** Displays the status of the user. This can be one of the following: **Active** (logged in), **Logged** **Out**, **Timed** **Out**.
  
  - **Active**: The user is logged in and active.
  - **Logged** **Out**: The user has logged out of the system.
  - **Timed** **Out**: The user is logged in but has been idled for a certain period of time. The default is two hours. You can configure the time interval as described in Configuring Active User Timeout Session, see *[Viewing Identity Mapping Information](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764411)*.

# Subscription Data

The *Subscription* *Data* dashboard displays the user and device identity captured by the Cisco ISE for the subscribed member. The default dashboard displays user name, domain name, VLAN ID, Device operating system, and last discovered timestamp.  
The predefined *Subscription* *Data* dashboard displays the following information:

- **User Name:** The logon name of the user.
- **Domain**: The domain name.
- **SSID**: Provision SSID. This is for corporate devices that connect to the corporate wireless SSID.
- **VLAN** **Name**: The name of the VLAN of the switch port.
- **VLAN** **ID**: The ID of the VLAN of the switch port.
- **Device OS:** Operating system of the device.
- **Session** **State**: The current status of the device.
- **Security** **Group**: Unique security group tag.
- **Discovered** **At**: Timestamp when the device was discovered.
- **Quarantine** **Status**: Indicates if the device should be quarantined or not.
- **IP** **Address**: The IP address of the client.
- **Grid** **ID**: The IP address of the subscribed member.

# Publish Data

The *Publish* *Data* dashboard displays the RPZ, Security DNS Infrastructure Protection, IPAM and DHCP lease information that is shared with the Cisco ISE.  
The default *Publish* *Data* dashboard displays the following information:

- **Last** **Updated**: Timestamp when the data was last updated for the device.
- **IP** **Address**: The source IP address that is publishing the data.
- **Target** **Address**: The IP address of the target Cisco ISE.
- **Publish** **Type**: The event type that is published.
- **Contents**: Additional details of the published information.
