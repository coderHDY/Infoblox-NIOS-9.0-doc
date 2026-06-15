---
title: "DHCPv6 Lease Affinity"
source: "/space/nios90/1462338060"
pageId: "1462338060"
---
DHCPv6 ranges are usually large and the DHCPv6 server randomly selects a new lease each time a client requests for a lease. The client can use the lease until it expires. After its expiration, the lease stays in the database with an expired state. These expired leases eventually lead to the increase in the number of database objects, because the probability of expired IPv6 leases getting reused is low.  
Infoblox provides a DHCPv6 lease affinity feature that allows you to reuse expired IPv6 leases for DHCP clients. When you enable this feature, the DHCPv6 server automatically renews the expired leases. A DHCP client can retrieve the same lease from the DHCPv6 server after it expires and retains the same IP address. This feature helps reduce the amount of IPv6 leases in the database as the DHCP server issues the same lease multiple times for the same client.  
The appliance ignores expired leases that are older than the specified period. Such leases are scavenged. Note that the grace period you define for lease scavenging is applicable for DHCPv6 lease affinity also. The minimum time period is six hours, maximum is 180 days and the default is set to seven days. For more information about scavenging leases, see Scavenging Leases above section.

The DHCPv6 server offers the same lease for a DHCP client, identified by DUID, after the lease expires and before the end of the grace period. The appliance removes the expired leases that are older than the grace period from the database.



DHCPv6 lease affinity and DHCPv6 lease scavenging are complementary features. For example, consider a scenario in which a visiting user gets an IPv6 lease that is retained for days, weeks, or months depending on the needs and then the user leaves. If the user returns and the lease is still within the grace period, the user gets the same IPv6 lease. This is lease affinity. When the user leaves, the IPv6 lease becomes inactive. This lease is scavenged after the grace period.  
Note the following about DHCPv6 lease affinity:

- It does not consider expired leases that are older than the grace period.
- It ignores expired leases that do not match known ranges.
- If no existing lease is found, then the DHCPv6 server finds a suitable expired lease that is not older than the grace period, which matches the client DUID and range configuration.
- The impact of the feature on the performance depends on the amount of expired DHCPv6 leases.
- When you activate the feature at the Grid level, it affects all underlying layers of inheritance.
- You cannot enable DHCPv6 lease affinity at the Grid and member levels during a scheduled full upgrade.
- DHCPv6 lease affinity remembers only permanent addresses and does not remember temporary addresses and prefix delegations.
- If the DHCPv6 range is out of available addresses when you enable DHCPv6 lease affinity, then the DHCP server tries to reuse the best abandoned lease, which indicates the lease that was abandoned longest time ago. If there are no such leases in the pool, the DHCP server reuses the best expired lease, which indicates the lease that expired longest time ago. This means that the expired lease becomes active and it is associated with the new client while the DHCP server removes any previous associations of the corresponding lease. Note that this happens only when the DHCPv6 range does not have any available addresses and there are no suitable abandoned leases.

To enable DHCPv6 lease affinity:

1. **Grid**: From the **Data** **Management** tab, select the **DHCP** tab, and then click **Grid** **DHCP** **Properties** from the Toolbar.  
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; **Members** -&gt; *member* checkbox, and then click the Edit icon.
2. In the editor, click **Toggle** **Advanced** **Mode** if the editor is in basic mode, and then click the **General** tab -&gt; **Advanced** tab.  
   Complete the following:
   
   - **IPv6 Properties**
     
     - **Lease Scavenging**
       
       - **Remember client association for expired members:** This is disabled by default. Select the checkbox to remember and reuse expired IPv6 leases that are associated with DHCP clients. You can select this checkbox only when you select the **Scavenge free, expired and released leases after** checkbox. This can be set at the Grid and member levels.
         
         Note that the appliance stores the leases, which are either deleted or removed, in the recycle bin. These leases then become free and are automatically dissociated from their clients. For example, if you delete a range accidentally and restore it again, the IPv6 leases associated with the respective range are no longer associated with the same set of clients.
3. Save the configuration.
