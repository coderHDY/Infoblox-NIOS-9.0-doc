---
title: "Verifying the Deployment"
source: "/space/nios90/280765318"
pageId: "280765318"
---
After you deploy a single independent appliance or HA pair, you can make an HTTPS connection to it, log in, and check its status.

# Single Independent Appliance

From the Dashboard, check the appliance status in the *System* *Status* widget. For information, see [*Member Status (System Status)*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/member-status-system-status)[.](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/Status+Dashboard#MemberStatus(SystemStatus))

- If the Status icon is green, the appliance has a network connection and is operating properly.
- If the Status icon is red, there is a problem. To determine what it is, look at the system log file for this appliance by selecting the **Administration** tab -&gt; **Logs** tab -&gt; **Syslog**.

# Independent HA Pair

1. Make an HTTPS connection to the VIP address of the HA pair, log in, and check the status of both nodes.
2. From the Dashboard, check the appliance status in the *SystemStatus* widget. For information, see [*Member Status (System Status)*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/member-status-system-status)*.*

- If the Status icon is green, both nodes have connectivity with each other and are operating properly.
- If the Status icon is yellow, the two nodes are in the process of forming an HA pair.
- If the Status icon is red, the passive node is offline or there is a problem. To determine what it is, look at the system log file by selecting the **Administration** tab -&gt; **Logs** tab -&gt; **Syslog**. You can also gather information from the **System** tab -&gt; **SystemManager** tab.
