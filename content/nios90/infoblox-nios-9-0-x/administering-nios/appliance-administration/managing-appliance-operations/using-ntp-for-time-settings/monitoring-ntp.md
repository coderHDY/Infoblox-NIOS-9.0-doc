---
title: "Monitoring NTP"
source: "/space/nios90/1449394394"
pageId: "1449394394"
---
When you enable the Grid to synchronize its time with external NTP servers, you can monitor the status of the NTP service by checking the NTP status icons in the *Member* *Services* panel. To access the panel, from the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then select the Manage Member Services icon in the table toolbar of the Members tab.  
The following are descriptions of the NTP status icons in the *Members* *Services* panel. The type of information that can appear in the **Description** column corresponds to the SNMP trap messages. For information about the Infoblox SNMP traps, see [*Configuring SNMP*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/configuring-snmp)*.*

| **Icon** | **Color** | **Meaning** |
| --- | --- | --- |
|  | Green | The NTP service is enabled and running properly. |
|  | Yellow | The NTP service is enabled, and the appliance is synchronizing its time. |
|  | Red | The NTP service is enabled, but it is not running properly or is out of synchronization. |
|    | Gray | The NTP service is disabled. |

After you upgrade the Grid, the color of the Grid status icon changes based on the following:

- If you activate an external synchronization, or start the NTP service using the Grid Manager, or do not configure any external NTP servers, except local, then the NTP behavior remains the same and the NIOS appliance displays the Grid status icon in green.
- If you activate an external synchronization and configure one or more external NTP servers, or if the servers are in synchronization with the Grid Master, then the Grid status icon is as follows:
  
  - Green: NTP is synchronizing with an external server.
  - Red: NTP is synchronizing with the local server and none of the external NTP servers are reachable. This status icon also indicates if there are problems with the NTP service.
  - Yellow: NTP is synchronizing with the local server and at least one external NTP server is reachable; but there could be problems on the external server, such as an exceeded root distance error.
