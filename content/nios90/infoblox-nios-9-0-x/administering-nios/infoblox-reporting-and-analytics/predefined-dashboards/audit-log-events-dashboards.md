---
title: "Audit Log Events Dashboards"
source: "/space/nios90/280402856"
pageId: "280402856"
---
This section details the dashboards of Audit Log Events dashboards category. For more information on operations that can be performed on reporting dashboards, see *[About Dashboards](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/about-dashboards)*.

The dashboards covered in this section are as follows.

*[toc]*

# Audit Log Events

The *Audit* *Log* *Events* dashboard provides information about the administrator-initiated events such as login events, logout events, service restarts, appliance reboots, write operations such as the addition, modification, and deletion of objects, etc. The default dashboard displays the audit log events for all admin users and for all Grid members in table format. You can use the displayed fields as filters to get specific information you want displayed in the dashboard. Only superusers can view and modify this dashboard.  
This dashboard displays the following information about each audit log event in table format:

- **Timestamp**: The date, time, and time zone the task was performed. The time zone is the time zone configured on the member.
- **Admin**: The admin user who performed the task.
- **Action**: The action performed. This can be one of the following: Called, Created, Deleted, Login_Allowed, Login_Denied, Message, Modified, Logout, PUT, POST, and DELETE.
- **Object**** Type**: The object type of the object involved in this task.
- **Object**** Name**: The name of the object involved in this task.
- **Execution**** Status**: The execution status of the task. Possible values are Executed, Normal, Pending Approval, and Scheduled.
- **Message:** Detailed information about the performed task.
- **Members**: The Grid member on which the task was performed.

# Audit Log WAPI Events

The Audit Log WAPI Events dashboard provides statistics about the WAPI login session information. It displays the URI, InData and response time for WAPI calls, such as PUT, POST, and DELETE.

This dashboard displays the following information about each audit log WAPI event in table format:

- **Timestamp**: The date, time, and time zone the task was performed. The time zone is the time zone configured on the member.
- **Admin**: The admin user who performed the task.
- **Action**: The action performed. This can be one of the following: Called, Created, Deleted, Login_Allowed, Login_Denied, Message, Modified, Logout, PUT, POST, and DELETE.
- **Response** **Time**: The processing time of the incoming WAPI request. Example: 0.0648.
- **URI**: A certain part of the incoming WAPI request. Example: v2.10/ftpuser.
- **Object** **Type**: The object type of the object involved in this task.
- **Object** **Name**: The name of the object involved in this task.
- **Execution Status:** The execution status of the task. Possible values are Executed, Normal, Pending Approval, and Scheduled.
- **Member**: The Grid member on which the task was performed.
- **InData**: Input data fields of the incoming WAPI request. Example: [{'object': 'network', 'data': {'network': '22.2.2.0/24'}, 'method': 'POST'}, {'object': 'network', 'data': {'network': '111.1.111.0/24'}, 'method': 'POST'}]
- **Message**: Detailed information about the performed task.
