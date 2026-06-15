---
title: "Modifying Failover Associations"
source: "/space/nios90/1471513572"
pageId: "1471513572"
---
To modify a failover association:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; **Failover** **Associations** -&gt;* failover_association* checkbox, and then click the Edit icon.
2. The *DHCP* *Failover* *Association* editor contains the following tabs from which you can modify data:
   
   - **General**: In the **Basic** tab, modify the fields as described in [*Adding Failover Associations*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-failover/configuring-failover-associations)*.*  
     In the **Advanced** tab, complete the following to modify the port number you use for the failover association:
     
     - **Failover Port:** Click **Override** to enter a port number for the failover association. You can use any available port from 1 to 63999. The default is 647 for a new installation and 519 for an upgrade.
   - **Failover Settings:** This is valid for Microsoft Management only. For information about the fields in the **Basic** tab, see [*Configuring Failover Associations*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-failover/configuring-failover-associations).  
     The following are the options in the **Advanced** tab:
     
     - **Max Response Delay Before Failover(s):** Specifies the maximum duration of time (in seconds) before a failover enters the Communications-Interrupted state after failing to hear from its peers. The duration must be long enough to prevent frequent connections and disconnections from the DHCP failover peers, yet short enough so that the transient network failure will not keep the peers out of contact for an extended duration. The recommended default is 60 seconds.
     - **Max Number of Unacked Updates:** Specifies the number of "unacked" packets the server can send before a failover occurs. The default is 10 messages.
     - **Max Client Lead Time (s):** Specifies the length of time that a failover peer can renew a lease without contacting its peer. The larger the number, the longer it takes for the peer to recover IP addresses after moving to the **PARTNER-DOWN** state. The smaller the number, the more load your servers experience when they are not communicating. The default is 3600 seconds.
     - **Max Load Balancing Delay (s):** Specifies the cutoff after load balancing is disabled. The cutoff is based on the number of seconds since a client sent its first **DHCPDISCOVER** message. For instance, if one of the failover peers gets into a state where it is busy responding to failover messages but is not responding to other client requests, the other peer responds to the client requests when the clients retry. This does not cause a failover. The default is three seconds.
       
       If you modify failover settings from secondary Microsoft server settings, the appliance does not update failover settings on NIOS for the following reasons:
       
       - When DHCP synchronization is disabled for primary Microsoft server, you must enable DHCP synchronization for primary Microsoft server to reflect the settings on NIOS.
       - The primary synchronization interval must be completed. For example, consider that you are modifying failover settings from secondary Microsoft server settings where the synchronization interval for primary server is five minutes, and the time interval for the secondary server is one minute. In this case, failover settings are updated on NIOS only after the primary server synchronization interval, which is five minutes.
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with a failover association. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
