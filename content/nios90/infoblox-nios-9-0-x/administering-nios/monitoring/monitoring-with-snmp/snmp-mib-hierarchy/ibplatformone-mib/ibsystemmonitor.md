---
title: "ibSystemMonitor"
source: "/space/nios90/1430193084"
pageId: "1430193084"
---
## ibSystemMonitor

As shown in the figure below, ibSystemMonitor (object ID 3.1.1.2.1.2.8) has the following subtrees:

- ibSystemMonitorCpu: Contains ibSystemMonitorCpuUsage (Integer) that reports the CPU usage of the appliance.
- ibSystemMonitorMem: Contains ibSystemMonitorMemUsage (Integer) that reports the memory usage of the appliance.
- ibSystemMonitorSwap: Contains ibSystemMonitorSwapUsage (integer) that reports the swap usage of the appliance.
- ibSystemMonitorSnic: Contains ibSystemMonitorSnicStatsTable1 (integer) and ibSystemMonitorSnicStatsTable5 (integer) that contains the smart NIC (SNIC) details. The OID 3.1.1.2.1.8.4.3.1.1.4.112.111.111.108  indicates that the member is a pool, 3.1.1.2.1.8.4.3.1.1.5.99.97.99.104.101  indicates that the member is a cache, 3.1.1.2.1.8.4.3.1.1.5.116.99.111.114.101  indicates that the cache is tcore, and 3.1.1.2.1.8.4.3.1.1.5.109.99.111.114.101  indicates that the cache is mcore.



*ibSystemMonitor* *Objects3*

*[drawio]*
