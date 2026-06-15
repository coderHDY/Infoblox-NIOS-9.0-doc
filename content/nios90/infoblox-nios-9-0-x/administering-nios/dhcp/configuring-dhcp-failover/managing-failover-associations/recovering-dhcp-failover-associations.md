---
title: "Recovering DHCP Failover Associations"
source: "/space/nios90/1471219679"
pageId: "1471219679"
---
During a conflict resolution, when the primary peer of the DHCP failover association is in the **CONFLICT-DONE** state and the secondary peer in the **POTENTIAL-CONFLICT** state, the secondary peer might experience problems (such as restarting, network outage, etc.) and goes into an invalid state. This results in a deadlock state for the failover association, causing a DHCP service outage. When the failover association is in a deadlock state, you can perform a recovery for the failover association. You can run the recovery for one failover association at a time and when the primary member is in the **CONFLICT-DONE** state. This feature is supported for Infoblox appliances only and not for any other external DHCP servers.

> **warning**
>
> Note
> 
> When the failover recovery is in progress, the DHCP service on both peers are disabled and you cannot enable the DHCP service until the failover recovery is successfully completed. You can view the logs of the failover recovery process in the syslog and infoblox.log file.

To recover a DHCP failover association:

1. From the **Data** **Management** tab, select the **DHCP** tab-&gt; **Members** tab -&gt; **Failover** **Associations** -&gt;* failover_association* checkbox.
2. Expand the Toolbar and click **Recovery** **from** **Deadlock** **State**.
3. In the *Failover* *Recovery* *Progress* dialog box, click **Start** to start the recovery of the failover association from the deadlock state.
4. In the confirmation dialog box, click **Yes**.

> **warning**
>
> Note
> 
> After you start the failover recovery, you cannot revert the changes.

Grid Manager starts the failover recovery and you can view the following information in the *Failover* *Recovery* *Progress*  
dialog box:

- **Failover** **association**: The name of the failover association.
- **Primary**: The hostname or IP address of the primary server.
- **Secondary**: The hostname or IP address of the secondary server.
- **Number** **of** **leases** **to** **be** **processed**: The total number of leases to be processed.
- **Number** **of** **leases** **processed**: The number of leases that have been processed.
- **Current** **Status**: Displays the current status of the failover recovery process. The current status can be one of the following:
  
  - **Pending**: The failover recovery is initiated for a failover association and the recovery process will start soon.
  - **Calculating**: The appliance calculates the total amount of leases to be processed.
  - **Applying**: The appliance looks for conflicts and tries to resolve the conflicts.
  - **Completed**: The failover recovery is completed successfully.
  - **Failed**: The failover recovery fails.

Grid Manager also displays the reason for the failure if that happens.

After successful completion of the failover recovery, you must restart both the primary and secondary peers to bring them back to the **CONFLICT-DONE** state.  
You can stop the failover recovery operation by clicking **Stop** in the *Failover* *Recovery* *Progress* dialog box before the recovery process is complete.

> **warning**
>
> Note
> 
> If for any reasons the recovery is blocked when the operation is in progress, you can cancel the current operation and start the recovery for the failover association again.
