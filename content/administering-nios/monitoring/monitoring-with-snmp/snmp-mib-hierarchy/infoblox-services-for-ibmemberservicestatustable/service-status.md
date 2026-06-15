---
title: "Service Status"
source: "/space/nios90/1430094684"
pageId: "1430094684"
---
When you query the service status on an appliance, the response includes the status of the services. The below table shows the values and descriptions of the status. Note that for internal Grid operations, the NTP service is always in the "working" state even if it has been disabled through the Infoblox GUI.

*ibServiceStates Values*

| **Value** | **Description** | **Definition** |
| --- | --- | --- |
| 1 | working | The service is functioning properly. |
| 2 | warning | The service is having some issues. Check the service or hardware function and the syslog to identify the problem. |
| 3 | failed | The service failed. Review the syslog to identify the problem. |
| 4 | inactive | The service is disabled or out of service. |
| 5 | unknown | The appliance cannot detect the current stusof the service. |
