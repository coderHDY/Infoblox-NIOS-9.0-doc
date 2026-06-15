---
title: "Enabling ARP on the Passive Node of an HA Pair"
source: "/space/nios90/1432754506"
pageId: "1432754506"
---
You can enable ARP (Address Resolution Protocol) on the passive node of an HA pair and monitor its status externally. For example, when the active node of an HA pair fails over to the passive node, you can ping the passive node from an external location and monitor its status. By default, ARP is disabled on the passive node of an HA pair. ARP settings on an HA member are preserved during a system restart or reboot, HA switch over, and upgrade. In addition, you do not need to restart the appliance when you modify ARP settings. When the active node becomes passive during an HA failover, ARP on an HA member inherits the settings configured in the database.

You can view detailed status for both nodes of an HA pair through the *Detailed* *Status* panel. To view the *Detailed* *Status* panel, from the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox -&gt; Detailed Status icon in the horizontal navigation bar. In the *Detailed* *Status* panel, you can view ARP connectivity status for the passive node of an HA pair (Green = The passive HA node is connected to the local router; Yellow = The passive HA node fails to connect to the local router; Gray = ARP is disabled on the passive node of an HA pair). The passive HA node uses arping to test the ARP connectivity with the local router. If the local router is not configured, you may see false warnings even if the ARP connectivity is fine. In case of an ARP connectivity failure, the appliance sends an SNMP trap and an email notification, if configured.  
Note that the ARP setting is not preserved on a passive HA node when you reset the appliance using the CLI command  
reset all or reset the database using the CLI command reset database.

To enable ARP on an HA passive node:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab.
2. Select an HA member and click the Edit icon.
3. In the *Grid* *Member* *Properties* editor, select the **Network** tab -&gt; **Advanced** tab and complete the following:
   
   - **Enable** **ARP** **on** **HA** **Passive** **Node?**: Select one of the following:
     
     - **Disable** **(default)**: Select this to disable ARP on an HA passive node. This is selected by default.
     - **Enable** **(not** **recommended)**: Select this to enable ARP on an HA passive node.
4. Save the configuration and click **Restart** if it appears at the top of the screen.



> **warning**
>
> **Note**
> 
> For the Grid having an HA Grid Master and the **Enable ARP on HA Passive Node?** option enabled, if you try to restore from the HA Grid Master to a single node Grid Master the Grid breaks the configuration and if you try to recover the configuration the system becomes unusable. However, you can recover the configuration by resetting the database.

> **error**
>
> Warning
> 
> Enabling ARP on the passive node of an HA interface might affect VRRP on the local network and could cause the firewall to send false alerts.
