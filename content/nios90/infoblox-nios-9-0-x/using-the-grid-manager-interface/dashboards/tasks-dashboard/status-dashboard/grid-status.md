---
title: "Grid Status"
source: "/space/nios90/1457095703"
pageId: "1457095703"
---
The* Infoblox Grid* *Status* widget provides status information about the Grid members and services. Add the *Infoblox* *Grid* *Status* widget to your Dashboard to monitor the Grid status.  
You can configure the *Infoblox* *Grid* *Status* widget to display information about all Grid members or only Grid members that have service errors. To modify the *Infoblox* *Grid* *Status* widget, click the Configure icon and select one of the following:

- **Show** **all** **Grid** **members** (this is the default)
- **Only show members with service warnings or errors:** When you select **Only show members with service warnings or errors**, the widget displays only the members that have service errors. The widget does not display any data in the member table if all the services on all members are running properly.
- **Group Members by**: If you want to group members by the same extensible attribute value, select this and choose an extensible attribute from the drop-down list. The appliance groups Grid members that have the same extensible attribute value, and the Grid Status displays the following information:
  
  - **&lt;Extensible Attribute  Name&gt;**: The value of the selected extensible attribute. You can click the link of the extensible attribute value to view all the members in this group in the Grid/Members view.
  - **Status**: This is the overall status for all members in the group. Depending on the status of each member, the overall status can be one of the following:
    
    - **Working**: Indicates that all the members in the group are running properly.
    - **Warning**: Indicates that one of the members in the group has operational problems. For example, if there are two members in a group with one member **Running** and another member is **Offline**, then the overall status will be **Warning**.
    - **Failed**: Indicates that at least one of the members in the group is in the failed status and none of the members in the group are in the **Running** or **Working** status. For example, if there are two members in the group and one of them is in **Failed** status and the other is **Offline**, then the overall status is **Failed**.
    - **Offline**: Indicates that one or more members in the group is offline and none of the members in the group are in the **Failed** or **Running** status. For example, if a member is in the **Working** status and another member is in the **Offline** status, then overall status is **Offline**.
    - **Inactive**: Indicates that one or more members in the group is inactive and none of the members in the group are in the **Failed**, **Offline**, **Working**, or **Running** status.
    - **Unknown**: Indicates that the status of all the members in the group is unknown.  
      Note that you can click a member link to monitor the detailed status of the selected member. Grid Manager displays the **Infoblox** **Grid** tab -&gt; **Member** tab. You can click on a group to show the members of the group in the Grid/Members view.

The *Infoblox* *Grid* *Status* widget also displays the following information in the member table:

- **Member** **Name**: The name of the member.
- **IPv4 Address**: The IPv4 address of the member.
- **IPv6 Address**: The IPv6 address of the member.
- **Status**: The current status of the member.
- **System Uptime:** The duration of time (days, hours, and minutes) that the Grid member has been up and running.



In the upper section of the widget, Grid Manager displays the overall status of the Grid. The Grid status represents the status of the most critical member in the Grid. When all Grid members are running properly, the overall Grid status is green. When one of the members has operational issues, the overall Grid status is red. The status icon can be one of the following:

| **Icon** | **Color** | **Meaning** |
| --- | --- | --- |
|   ![Status Dashboard_green_color_icon.png](/assets/1457095703/d616dc0d-f9ba-4fc6-b07d-9e2320b0d03c.png)   | Green | All Grid members are operating normally in a "Running" state. |
|   ![Status Dashboard_yellow_color_icon.png](/assets/1457095703/93a39b94-0a59-43f7-b246-a30f7734e55c.png)   | Yellow | At least one of the Grid members is connecting or synchronizing with its Grid Master. |
|   ![Status Dashboard_red_color_icon.png](/assets/1457095703/ce82674d-103f-4660-bf94-7c08e890a603.png)   | Red | At least one of the Grid members does not have a Grid license, is offline, upgrading, downgrading, or shutting down. |

This section also displays the overall operational status of the DNS, DHCP, NTP, FTP, TFTP, HTTP (File Distribution), bloxTools, Captive Portal, Cloud Sync (Cloud DNS Sync in 9.0.x versions prior to 9.0.4), DNS Accelerator usage, and Reporting services that are currently running on the Grid. The status icon can be one of the following:

| **Icon** | **Color** | **Meaning** |
| --- | --- | --- |
|   ![Status Dashboard_green_color_icon.png](/assets/1457095703/d616dc0d-f9ba-4fc6-b07d-9e2320b0d03c.png)   | Green | The enabled service is running properly on one or more Grid members. |
|   ![Status Dashboard_yellow_color_icon.png](/assets/1457095703/93a39b94-0a59-43f7-b246-a30f7734e55c.png)   | Yellow | At least one of the Grid members is having issues with the enabled service. |
|     ![Status Dashboard_red_color_icon.png](/assets/1457095703/ce82674d-103f-4660-bf94-7c08e890a603.png)   | Red | The enabled service is not running properly on at least one of the members. (A red status icon can also appear temporarily when the service is enabled and begins running, but the monitoring mechanism has not yet notified Grid Manager.) |
|   ![Status Dashboard_gray_color_icon.png](/assets/1457095703/b09547e6-6a73-4ef2-bdf5-c7f17bf9f5b9.png)   | Gray | The service is not configured or is disabled on at least one Grid member. |
