---
title: "Modifying Health Monitors"
source: "/space/nios90/1393460908"
pageId: "1393460908"
---
To modify a health monitor:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Traffic** **Control** tab, and then click **Manage** **Health** **Monitors** in the Toolbar.
2. In the Health Monitors Manager, click the Action icon next to the health monitor name, and select **Edit** from the menu.
3. The *Health* *Monitor* editor contains the following tabs from which you can modify data:
   
   - **General**: This tab displays the health monitor **Name,** **Comment,** **Interval,** **Timeout,** **Retry** **Up** **Count,** and **Retry** **Down** **Count** fields. You can edit the values.
   - (HTTP, SIP, and SNMP health monitors) **Protocol**: This tab displays the protocol data that you can modify.
   - (HTTP/S health monitors only) **Request/Response**: This tab displays HTTP request and response check options for HTTP/S health monitors.
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with the pool. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).

For information about modifying the details of specific monitors, see the corresponding sections above.

1. To schedule this task, click the Schedule icon at the top of the wizard. In the *Schedule* *Change* panel, select **Later** and enter a date, time, and time zone. The Schedule icon is green when there is a pending scheduled task. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)

1. Save the configuration.
