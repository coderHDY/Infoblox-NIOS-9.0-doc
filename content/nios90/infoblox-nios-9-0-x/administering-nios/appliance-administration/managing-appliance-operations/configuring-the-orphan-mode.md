---
title: "Configuring the Orphan Mode"
source: "/space/nios90/280274375"
pageId: "280274375"
---
After you enable NTP on a Grid, the Grid members including Grid Manager can function as NTP servers to clients. For information on how to configure a NIOS appliance as an NTP server, see [*NIOS Appliances as NTP Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-ntp-for-time-settings).

> **error**
>
> ### Warning
> 
> Setting a proper stratum value is important for time and service synchronization among Grid members. Unless a special configuration is required, use the default values. In case you configure the values, keep the configuration as simple as possible.

The NIOS NTP service is configured with external NTP servers, and the NTP service stratum is derived from these external NTP servers. Sometimes, in the absence of the external NTP servers, NIOS Grid members, through the disconnected NTP server deliver the NTP service to the clients. Depending on your admin permissions, you need to configure the NTP service stratum values for Grid Manager and Grid members to facilitate the disconnected NTP service. The disconnected NTP service uses the service stratum values to help Grid Manager or members act as NTP servers. Once the external NTP server is accessible, the Grid connects to the external NTP server and receives the stratum values from the external NTP server. When the NTP service is in a disconnected state, it is referred to as the orphan mode.

You can configure stratum values for Grid Manager and Grid member at the Grid level, and for individual member at Grid member level using Grid Manager or CLI commands. For information on how to configure orphan mode stratum values, see [*Defining NTP Orphan Mode*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-ntp-for-time-settings) and for information about admin permissions, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).

> **warning**
>
> ### Note
> 
> The Grid member value configuration takes precedence over Grid Manager value configuration.

## Limitation of Orphan Mode

Note the following limitation of orphan mode:

- You can use the disconnected NTP service only if you have configured stratum values for NTP services on Grid Manager or a Grid member.
- When the member is offline and the Grid member and Grid Manager are at the default stratum, NIOS changes the stratum value of the local clock from 14 to 12.

## Guidelines for Setting Stratum Values

The following is a list of guidelines for setting stratum values:

- Either use the default NTP stratum values for Grid Manager as well as Grid members, or configure the NTP stratum values for Grid Manager as well as Grid members.
- To avoid the scenario where Grid Manager does not have internet access for a long period of time, add an external NTP server for the Grid member.
- With the default NTP stratum values, when the external NTP server is not reachable, Grid Manager sets the stratum value of the fallback local source to 12 even though the actual NTP stratum value is 1 greater than the fallback local source's stratum value, 13.
- When a Grid member synchronizes with Grid Manager, the NTP stratum value of the Grid member is 1 greater than the NTP stratum value of Grid Manager, 14. However, if Grid Manager is not suitable as an NTP clock source, then the Grid member uses its fallback local source's stratum value, 14, and the actual NTP stratum value of the Grid member is 1 greater than the fallback local source's stratum value, 15.
- When you configure the NTP stratum values, Grid Manager uses the fallback local source's stratum value of 1 less than the set NTP stratum value. For example, if the NTP stratum value is set to 8, the fallback local source's stratum value of Grid Manager is set to 7; if the external NTP servers are not reachable, then the NTP stratum value of Grid Manager becomes 8.
- When the external NTP servers are either not reachable or not configured, Grid Manager uses its local source and sets the NTP stratum value. In this scenario, however, the following applies to Grid members:
  
  - If a Grid member is configured to synchronize with only Grid Manager, then
    
    - If Grid Manager is reachable, then the Grid member's stratum value is 1 greater than the NTP stratum value of Grid Manager.
    - If Grid Manager is not reachable, then the Grid member's stratum value is set to the member's stratum value configured either at the Grid level or member level.
  - If the Grid member is configured to synchronize with only a set of external NTP servers, then the Grid member's stratum value is set to 1 greater than the NTP stratum value of the server that has the best quality and the lowest stratum value. However, if none of the external NTP servers can be reached, then the Grid member's stratum value is set to the member's stratum value configured either at the Grid level or member level.
  - If the Grid member is configured to synchronize with external NTP servers as well as Grid Manager, then
    
    - If the NTP servers as well as Grid Manager are reachable, then the Grid member synchronizes with the best available NTP source according to its reachability, stratum values, jitter, and offset, by setting its stratum value to 1 greater than the NTP stratum value of the best source.
    - If the external NTP servers are not reachable but Grid Manager is reachable, then the NTP stratum value is set to 1 greater than the NTP stratum value of Grid Manager.
    - If the NTP servers and Grid Manager are not reachable, then the Grid member synchronizes with the local clock and the stratum value is set to the member's stratum value configured either at the Grid level or member level.
