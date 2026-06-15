---
title: "Monitoring Failover Associations"
source: "/space/nios90/1471480636"
pageId: "1471480636"
---
After you configure a failover association, the peers establish a TCP connection for communication. In a normal operational state, they send keepalive messages and database updates every time they grant a lease. However, there are times when the failover association experiences problems and goes into a state other than **NORMAL**. You can monitor the overall state of a failover association and the individual status of the peers to verify that the servers are operating and communicating properly.  
Both peers in a failover association maintain the same DHCP fingerprinting state (enabled or disabled) even when one of the peers fails or becomes operational again. Note that both peers must be in the same Grid for the fingerprinting state to stay the same. For information about DHCP fingerprinting, see [*About DHCP Fingerprints*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/configuring-dhcp-fingerprints-and-fingerprint-de/dhcp-fingerprint-detection).  
In this panel, you can also modify some of the data in the table. Double click a row of data, and either edit the data in the field or select an item from a drop-down list. Note that some fields are read-only. For more information about this feature, see [*Modifying Data in Tables*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface).

To monitor the failover association status:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; **IPv4** **Failover** **Associations** section. Grid Manager displays the list of failover associations and their overall status.
2. To view detailed information about a failover association, select the *failover_association* checkbox, and then click the Show Status icon.
3. In the *Failover* *Association* *Status* dialog box, Grid Manager displays the overall status of the failover association and the status of both the primary and secondary servers.  
   The failover association can be in one of the following states:
   
   - **OK** (green): The failover association is functioning properly.
   - **DEGRADED** (yellow): The failover association is degraded when one of the peers is giving out limited addresses.
   - **FAILURE** (red): The failover association is not functioning, may be because it is not completely configured. The peers are not assigning IP addresses.  
     For each peer, Grid Manager displays the hostname or IP address, the status, and event date. The peer can be in one of the following states:
   - **STARTUP**: The server is starting up.
   - **NORMAL**: The server is in a normal operational state in which it responds to its load balancing subset of DHCP clients.
   - **PAUSED**: This state allows a peer to inform the other peer that it is going out of service for a short period of time so the other peer can immediately transition to the **COMMUNICATIONS-INTERRUPTED** state and start providing DHCP service to DHCP clients.
   - **COMMUNICATIONS-INTERRUPTED**: The servers are not communicating with each other. Both servers provide DHCP service to DHCP clients from which they receive DHCP requests.
   - **PARTNER-DOWN:** The server assumes control of the DHCP service because its peer is out of service.
   - **RECOVER**: The server is starting up and trying to get a complete update from its peer and discovers that its peer is in the **PARTNER-DOWN** state.
   - **RECOVER-WAIT**: The server has got a complete update from its peer and is waiting for MCLT period to pass before transitioning to the **RECOVER-DONE** state.
   - **RECOVER-DONE:** The server completed an update from its peer.
   - **POTENTIAL-CONFLICT:** The peers are not synchronized due to an administrative error or an incorrect state transition. Check the failover configuration and correct the error.
   - **CONFLICT-DONE:** This is a temporary state that the primary server enters after it received updates from the secondary server when it was in the **POTENTIAL-CONFLICT** state.
   - **RESOLUTION-INTERRUPTED**: The server responds to DHCP clients in a limited way when it is in this state.
   - **UNKNOWN**: The DHCP server is in an unknown state. The failover association is not functioning properly, may be because it is configured improperly. For example, failover association is not assigned to any DHCP range.
   - **SHUTDOWN**: This state allows a peer to inform the other peer that it is going out of service for a long period of time so the other peer can immediately transition to the **PARTNER-DOWN** state and completely assume control of the DHCP service.

> **warning**
>
> Note
> 
> NIOS does not support **PARTNER-DOWN** and Force Recovery for a Microsoft DHCP failover association.
