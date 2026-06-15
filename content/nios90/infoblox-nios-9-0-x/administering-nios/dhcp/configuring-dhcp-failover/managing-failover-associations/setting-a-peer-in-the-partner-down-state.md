---
title: "Setting a Peer in the Partner-Down State"
source: "/space/nios90/1471513613"
pageId: "1471513613"
---
If one of the peers in a failover association is out of service for an extended period of time, you should consider putting the functional peer in the **PARTNER-DOWN** state. When you place the functional peer in the **PARTNER-DOWN** state, it assumes full DHCP services for the networks. Since the functional server may not receive all the updates from its peer, it extends all the leases on the MCLT. Once the following conditions are met, the functional peer provides DHCP services autonomously:

- It has reclaimed all the leases that belonged to its peer.
- The MCLT has passed.

When the peer that is offline comes back online, it synchronizes with the functional peer and reestablishes the communication before it provides DHCP services to the clients.

> **error**
>
> Warning
> 
> *Before* *you* *put* *a* *peer* *in* *the* ***partner-down*** *state,* *ensure that* *the* *other* *peer* *is* *indeed* *out* *of* *service.* *If* *both* *the* *primary* *and* *secondary* *servers* *are* *operational* *when* *you* *place* *one* *of* *them* *in* *the* *partner-down* *mode,* *both* *servers* *may* *stop* *issuing* *leases* *for* *a* *minimum* *of* *time* *defined* *in* *the* *MCLT.*

To set a peer in the **PARTNER-DOWN** state:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt;**Members** tab- &gt; **Failover** **Associations** -&gt;* failover_association* checkbox.
2. Expand the Toolbar and click **Set** **Partner** **Down**.
3. In the *Set* *Failover* *Association* *Partner* *Down* dialog box, select one of the following:
   
   - **Primary**: Select this if the secondary server is out of service.
   - **Secondary**: Select this if the primary server is out of service.
4. Click **OK**.

> **warning**
>
> Note
> 
> You cannot place the functional peer in the **PARTNER-DOWN** state for a Microsoft DHCP failover in NIOS.
