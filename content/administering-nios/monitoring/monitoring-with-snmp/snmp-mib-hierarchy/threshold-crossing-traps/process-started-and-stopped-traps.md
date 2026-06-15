---
title: "Process Started and Stopped Traps"
source: "/space/nios90/1430193011"
pageId: "1430193011"
---
| **ibTrapDesc**    **OID** **3.1.1.1.2.11.0** |   **ibTrapSeverity** |   **Description/Cause** |   **Recommended** **Actions** |
| --- | --- | --- | --- |
| **Httpd** **Start** |
| The process started normally. | Informational | The httpd process started. | No action is required. |
| **Httpd** **Stop** |
| The process stopped normally. | Informational | The httpd process stopped. | No action is required. |
| **Process** **Stop/Start** |  |  |  |
| The system stopped and started a process. | Major | The system restarted a process. | No action is required. |
| **Zone** **Transfer** **Failed** |
| A zone transfer failure has occurred. | Critical | A zone transfer failed. | Review the syslog file |
