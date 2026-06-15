---
title: "Performing a Force Recovery"
source: "/space/nios90/1471513637"
pageId: "1471513637"
---
When the primary and secondary peers are not synchronized, you can perform a force recovery to set the primary server in the **PARTNER-DOWN** state while putting the secondary server in the **RECOVER** state. During a force recovery, all leases in the databases are resynchronized. When you perform a force recovery, the secondary server does not serve any DHCP leases for a minimum of the MCLT while it resynchronizes with the primary server. Before you perform a force recovery, consult with Infoblox Technical Support or your Infoblox representative to ensure that the force recovery is appropriate for the situation.  
To perform a force recovery:

1. From the **Data** **Management** tab, select the **DHCP** tab-> **Members** tab-> **Failover** **Associations** ->* failover_association* checkbox.
2. Expand the Toolbar and click **Force** **Recovery** **State**.
3. In the *Force* *Secondary* *Peer* *Recovery* *State* dialog box, click **OK**.

The appliance synchronizes the databases on the primary and secondary servers.

> **warning**
>
> Note
> 
> You cannot place the functional peer in the **PARTNER-DOWN** state for a force recovery in NIOS.
