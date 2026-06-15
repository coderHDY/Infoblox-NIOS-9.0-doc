---
title: "IP Address Used in the Syslog Configuration File"
source: "/space/nios90/1381171646"
pageId: "1381171646"
---
The following table describes which IP address the appliance uses as the node ID in the syslog configuration file, provided that the MGMT port has been configured. If the MGMT port is not configured, the LAN1 IP address is always used regardless of the configuration.

*IP* *address* *Used* *in* *Syslog* *Config* *File* *when* *MGMT* *Port* *is* *Configured*

| **Interface** | **Node** **ID** | **IP** **used** **in** **syslog** **configuration** **file** |
| --- | --- | --- |
| Any | MGMT | MGMT IP address |
| Any | IP and Host Name | MGMT IP address |
| MGMT | MGMT | MGMT IP address |
| MGMT | IP and Host Name | MGMT IP address |
| LAN | MGMT | LAN1 IP address |
| LAN | IP and Host Name | LAN1 IP address |
